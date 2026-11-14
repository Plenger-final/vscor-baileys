const {
	makeWASocket,
	useMultiFileAuthState,
	DisconnectReason
} = require('../lib/index.js');
const { Boom } = require('@hapi/boom');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');
const { Button, ButtonV2, Carousel, AIRich } = require('./MessageBuilder.js');

async function startBot() {
	const authDir = path.join(__dirname, 'auth');

	// Check if clean flag is passed to reset the session
	if (process.argv.includes('--clean')) {
		console.log('Cleaning old auth session directory...');
		if (fs.existsSync(authDir)) {
			fs.rmSync(authDir, { recursive: true, force: true });
			console.log('Old session cleared successfully.');
		} else {
			console.log('No existing session directory found to clean.');
		}
	}

	console.log('Initializing connection...');

	// Setup authentication state
	const { state, saveCreds } = await useMultiFileAuthState(authDir);

	// Check if phone number is passed as an argument for pairing code instead of QR
	const usePairingCode = process.argv.includes('--phone');
	const phoneIndex = process.argv.indexOf('--phone');
	const phoneNumber = usePairingCode && phoneIndex !== -1 ? process.argv[phoneIndex + 1] : null;

	const sock = makeWASocket({
		auth: state,
		syncFullHistory: true,
		logger: require('pino')({ level: 'silent' }),
		markOnlineOnConnect: true
	});

	// Handle pairing code registration if requested
	if (usePairingCode && phoneNumber && !state.creds.registered) {
		setTimeout(async () => {
			try {
				const code = await sock.requestPairingCode(phoneNumber.replace(/[^0-9]/g, ''));
				console.log('\n======================================');
				console.log(`PAIRING CODE: ${code}`);
				console.log('======================================\n');
			} catch (err) {
				console.error('Failed to request pairing code:', err);
			}
		}, 3000);
	}

	sock.ev.on('creds.update', saveCreds);

	sock.ev.on('connection.update', (update) => {
		const { connection, lastDisconnect, qr, reachoutTimeLock } = update;

		if (reachoutTimeLock?.isActive) {
			console.log(`[Reachout TimeLock] Restricted until: ${reachoutTimeLock.timeEnforcementEnds}`);
		}

		if (qr && !usePairingCode) {
			console.log('Scan the QR code below to connect:');
			qrcode.generate(qr, { small: true });
		}

		if (connection === 'close') {
			const shouldReconnect = new Boom(lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
			console.log('Connection closed due to:', lastDisconnect?.error, '. Reconnecting:', shouldReconnect);
			if (shouldReconnect) {
				startBot();
			} else {
				console.log('Logged out. Please delete the "auth" directory and scan again.');
			}
		} else if (connection === 'open') {
			console.log('\n======================================');
			console.log('WhatsApp Bot is successfully connected!');
			console.log('======================================\n');
		}
	});

	// Listen to messages
	sock.ev.on('messages.upsert', async (update) => {
		try {
			if (!update.messages?.length) return;
			if (update.type !== 'notify') return;

			const [message] = update.messages;
			if (!message || message.key?.fromMe) return;
			if (message.message?.protocolMessage) return;

			const msgContent = message.message || {};
			const jid = message.key.remoteJid;
			if (!jid) return;

			const normalizeJid = (id) => {
				if (!id) return '';
				if (id.includes(':')) {
					const [user, host] = id.split('@');
					const [userId] = user.split(':');
					return `${userId}@${host}`;
				}
				return id;
			};

			const normalizedJid = normalizeJid(jid);

			const getText = () =>
				msgContent.conversation ||
				msgContent.extendedTextMessage?.text ||
				msgContent.imageMessage?.caption ||
				msgContent.videoMessage?.caption ||
				'';

			const getButtonText = () => {
				if (msgContent.listResponseMessage)
					return msgContent.listResponseMessage.title || msgContent.listResponseMessage.description || '';
				if (msgContent.templateButtonReplyMessage)
					return msgContent.templateButtonReplyMessage.selectedDisplayText || msgContent.templateButtonReplyMessage.selectedId || '';
				if (msgContent.buttonsResponseMessage)
					return msgContent.buttonsResponseMessage.selectedDisplayText || msgContent.buttonsResponseMessage.selectedButtonId || '';
				if (msgContent.interactiveResponseMessage) {
					const i = msgContent.interactiveResponseMessage;
					return i.listResponse?.title ||
						i.listResponse?.description ||
						i.nativeFlowResponse?.response?.reply ||
						i.reply ||
						i.buttonReplyMessage?.displayText || '';
				}
				return '';
			};

			const text = (getText() || getButtonText() || '').trim();
			if (!text.startsWith('!')) return;

			const command = text.split(' ')[0].toLowerCase();
			const args = text.slice(command.length).trim();

			console.log(`[Command Received] ${command} from ${normalizedJid}`);

			switch (command) {
				case '!ping': {
					await sock.sendMessage(normalizedJid, { text: 'pong! 🏓' }, { quoted: message });
					break;
				}
				case '!help': {
					await sock.sendMessage(normalizedJid, { text: 'Commands:\\n!button\\n!buttonv2\\n!carousel\\n!airich' }, { quoted: message });
					break;
				}
				case '!button': {
					await new Button(sock)
						.setTitle('🚀 NIXCODE')
						.setSubtitle('Interactive Message')
						.setBody('Pilih menu di bawah')
						.setFooter('© Nixel')
						.setImage('https://pone.rs')
						.addReply('📦 Menu', '.menu', { icon: 'DEFAULT' })
						.addReply('👤 Profile', '.profile', { icon: 'REVIEW' })
						.addUrl(
							'🌐 Website',
							'https://example.com',
							true,
							{ icon: 'PROMOTION' }
						)
						.addCopy(
							'📋 Copy Code',
							'NIX-2026',
							{ icon: 'DOCUMENT' }
						)
						.addSelection('📚 Pilih Kategori')
						.makeSection('Main Menu')
						.makeRow(
							'🔥 HOT',
							'Downloader',
							'Download social media',
							'.dl'
						)
						.makeRow(
							'⚡ FAST',
							'AI Chat',
							'Chat dengan AI',
							'.ai'
						)
						.send(normalizedJid, { quoted: message });
					break;
				}
				case '!buttonv2': {
					await new ButtonV2(sock)
						.setTitle('🚀 NIXCODE')
						.setSubtitle('Buttons Message')
						.setBody('Halo dunia')
						.setFooter('Footer Message')
						.setThumbnail(
							'https://pone.rs'
						)
						.addRawButton({
							buttonText: { displayText: '📡 Menu' },
							buttonId: 'Nixel',
							type: 1,
							nativeFlowInfo: {
								name: 'single_select',
								paramsJson: "{\"title\":\"Click Here!\",\"sections\":[{\"title\":\"Fiora Sylvie\",\"highlight_label\":\"\",\"rows\":[{\"header\":\"\",\"title\":\"Nixel\",\"description\":\"\",\"id\":\"\"}]}]}"
							}
						})
						.addButton(
							'👤 Profile',
							'.profile'
						)
						.send(normalizedJid);
					break;
				}
				case '!carousel': {
					await new Carousel(sock)
						.setBody('🛍️ Product List')
						.setFooter('Swipe untuk lihat')
						.addCard(
							await new Button(sock)
								.setTitle('🍔 Burger')
								.setBody('Burger terenak')
								.setFooter('$5')
								.setImage(
									'https://pone.rs'
								)
								.addReply(
									'🛒 Buy',
									'.buy burger'
								)
								.toCard()
						)
						.addCard(
							await new Button(sock)
								.setTitle('🍕 Pizza')
								.setBody('Pizza mozzarella')
								.setFooter('$7')
								.setImage(
									'https://pone.rs'
								)
								.addReply(
									'🛒 Buy',
									'.buy pizza'
								)
								.toCard()
						)
						.send(normalizedJid, { quoted: message });
					break;
				}
				case '!airich': {
					await new AIRich(sock)
						.setTitle('🚀 NIXCODE')
						.setFooter('© Fiora Sylvie')
						.addSuggest("MessageBuilderV4.6")
						.addSuggest(['Nixel', 'NIXCODE', 'Fiora Sylvie', 'AIRich'])
						.addTip('Ini adalah text tip (Metadata Text)')
						.addText(`
# Halo Dunia
## NIXCODE

---

=={ Yellow Text }==

---

Ini hyperlink:
[Text] (url) 
## TRUSTED LINK
[Google](https://google.com)
## UNTRUSTED LINK
[Google](!https://google.com)

Ini auto citation:
[] (url) 
[](https://openai.com)

Ini LaTeX:
[Identifier|?Width|?Height|?Font_Height|?Padding] <url>
[Shiroko|1429|1897]<https://pone.rs>
                        `)
						.addText('SingleLayout Product (Object Input):')
						.addProduct({
							title: 'Fiora Sylvie',
							brand: 'Nixel',
							price: 'Rp 1000',
							sale_price: 'Rp 0',
							url: 'https://wa.me/6285188349341',
							image: "https://pone.rs"
						})
						.addText('HScroll Product (Array of Object Input):')
						.addProduct(Array(5).fill({
							title: 'Fiora Sylvie',
							brand: 'Nixel',
							price: 'Rp 1000',
							sale_price: 'Rp 0',
							url: 'https://wa.me/6285188349341',
							image: "https://pone.rs"
						}))
						.addCode(
							'javascript',
							`class Nixel {
    static hello() {
        return 'Hello World';
    }
}`
						)
						.addTable([
							['Nama', 'Role'],
							['[Nixel](https://wa.me/6285188349341)', 'Developer'],
							['Fiora Sylvie', 'Assistant']
						])
						.addSource([
							[
								'https://pone.rs',
								'https://github.com/ValdazGT/',
								'GitHub'
							],
							[
								'https://pone.rs',
								'https://fiora.nixel.my.id/',
								'Fiora Sylvie'
							]
						])
						.addImage('https://pone.rs')
						.addVideo("https://cdn.ornzora.eu.cc/5c3e1109-38d3-408e-926c-588694fd9581-FIORA.mp4")
						.addVideo({ url: "https://cdn.ornzora.eu.cc/5c3e1109-38d3-408e-926c-588694fd9581-FIORA.mp4", file_length: 100000000, duration: 120, thumbnail: "https://pone.rs" })
						.addReels(Array(5).fill({
							username: 'Nixel',
							profile: 'https://pone.rs',
							thumbnail: 'https://pone.rs',
							url: 'https://fiora.nixel.my.id/',
							title: 'Demo Reel',
							source: 'IG',
							verified: true
						}))
						.addPost(Array(5).fill({
							profile: "https://pone.rs",
							username: 'Nixel',
							title: "Demo Post",
							subtitle: 'NIXCODE',
							caption: 'hii~ im fiora sylvie, just quietly observing things around here.',
							verified: true,
							url: 'https://fiora.nixel.my.id/',
							thumbnail: 'https://pone.rs',
							source: 'INSTAGRAM',
							footer: 'Fiora Sylvie',
							deeplink: 'https://fiora.nixel.my.id/',
							icon: "https://pone.rs",
						}))
						.send(normalizedJid, { quoted: message });
					break;
				}
			}
		} catch (err) {
			console.error(`Error processing message:`, err);
		}
	});
}

startBot().catch(err => {
	console.error('Fatal error starting the bot:', err);
});
import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace SignalWhisperTextProtocol. */
export namespace SignalWhisperTextProtocol {

    /**
     * Properties of a DeviceConsistencyCodeMessage.
     * @deprecated Use SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Properties instead.
     */
    interface IDeviceConsistencyCodeMessage extends SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Properties {
    }

    /** Represents a DeviceConsistencyCodeMessage. */
    class DeviceConsistencyCodeMessage {

        /**
         * Constructs a new DeviceConsistencyCodeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DeviceConsistencyCodeMessage generation. */
        generation?: (number|null);

        /** DeviceConsistencyCodeMessage signature. */
        signature?: (Uint8Array|null);

        /**
         * Creates a new DeviceConsistencyCodeMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceConsistencyCodeMessage instance
         */
        static create(properties: SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Shape): SignalWhisperTextProtocol.DeviceConsistencyCodeMessage & SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Shape;
        static create(properties?: SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Properties): SignalWhisperTextProtocol.DeviceConsistencyCodeMessage;

        /**
         * Encodes the specified DeviceConsistencyCodeMessage message. Does not implicitly {@link SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.verify|verify} messages.
         * @param message DeviceConsistencyCodeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceConsistencyCodeMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.verify|verify} messages.
         * @param message DeviceConsistencyCodeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.DeviceConsistencyCodeMessage & SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Shape} DeviceConsistencyCodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.DeviceConsistencyCodeMessage & SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Shape;

        /**
         * Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.DeviceConsistencyCodeMessage & SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Shape} DeviceConsistencyCodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.DeviceConsistencyCodeMessage & SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Shape;

        /**
         * Verifies a DeviceConsistencyCodeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceConsistencyCodeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceConsistencyCodeMessage
         */
        static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.DeviceConsistencyCodeMessage;

        /**
         * Creates a plain object from a DeviceConsistencyCodeMessage message. Also converts values to other types if specified.
         * @param message DeviceConsistencyCodeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalWhisperTextProtocol.DeviceConsistencyCodeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceConsistencyCodeMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DeviceConsistencyCodeMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DeviceConsistencyCodeMessage {

        /** Properties of a DeviceConsistencyCodeMessage. */
        interface $Properties {

            /** DeviceConsistencyCodeMessage generation */
            generation?: (number|null);

            /** DeviceConsistencyCodeMessage signature */
            signature?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DeviceConsistencyCodeMessage. */
        type $Shape = SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.$Properties;
    }

    /**
     * Properties of a SenderKeyDistributionMessage.
     * @deprecated Use SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Properties instead.
     */
    interface ISenderKeyDistributionMessage extends SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Properties {
    }

    /** Represents a SenderKeyDistributionMessage. */
    class SenderKeyDistributionMessage {

        /**
         * Constructs a new SenderKeyDistributionMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SenderKeyDistributionMessage id. */
        id?: (number|null);

        /** SenderKeyDistributionMessage iteration. */
        iteration?: (number|null);

        /** SenderKeyDistributionMessage chainKey. */
        chainKey?: (Uint8Array|null);

        /** SenderKeyDistributionMessage signingKey. */
        signingKey?: (Uint8Array|null);

        /**
         * Creates a new SenderKeyDistributionMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyDistributionMessage instance
         */
        static create(properties: SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Shape): SignalWhisperTextProtocol.SenderKeyDistributionMessage & SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Shape;
        static create(properties?: SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Properties): SignalWhisperTextProtocol.SenderKeyDistributionMessage;

        /**
         * Encodes the specified SenderKeyDistributionMessage message. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyDistributionMessage.verify|verify} messages.
         * @param message SenderKeyDistributionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyDistributionMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyDistributionMessage.verify|verify} messages.
         * @param message SenderKeyDistributionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.SenderKeyDistributionMessage & SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Shape} SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.SenderKeyDistributionMessage & SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Shape;

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.SenderKeyDistributionMessage & SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Shape} SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.SenderKeyDistributionMessage & SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Shape;

        /**
         * Verifies a SenderKeyDistributionMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyDistributionMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyDistributionMessage
         */
        static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.SenderKeyDistributionMessage;

        /**
         * Creates a plain object from a SenderKeyDistributionMessage message. Also converts values to other types if specified.
         * @param message SenderKeyDistributionMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalWhisperTextProtocol.SenderKeyDistributionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyDistributionMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SenderKeyDistributionMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SenderKeyDistributionMessage {

        /** Properties of a SenderKeyDistributionMessage. */
        interface $Properties {

            /** SenderKeyDistributionMessage id */
            id?: (number|null);

            /** SenderKeyDistributionMessage iteration */
            iteration?: (number|null);

            /** SenderKeyDistributionMessage chainKey */
            chainKey?: (Uint8Array|null);

            /** SenderKeyDistributionMessage signingKey */
            signingKey?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SenderKeyDistributionMessage. */
        type $Shape = SignalWhisperTextProtocol.SenderKeyDistributionMessage.$Properties;
    }

    /**
     * Properties of a SenderKeyMessage.
     * @deprecated Use SignalWhisperTextProtocol.SenderKeyMessage.$Properties instead.
     */
    interface ISenderKeyMessage extends SignalWhisperTextProtocol.SenderKeyMessage.$Properties {
    }

    /** Represents a SenderKeyMessage. */
    class SenderKeyMessage {

        /**
         * Constructs a new SenderKeyMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.SenderKeyMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SenderKeyMessage id. */
        id?: (number|null);

        /** SenderKeyMessage iteration. */
        iteration?: (number|null);

        /** SenderKeyMessage ciphertext. */
        ciphertext?: (Uint8Array|null);

        /**
         * Creates a new SenderKeyMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyMessage instance
         */
        static create(properties: SignalWhisperTextProtocol.SenderKeyMessage.$Shape): SignalWhisperTextProtocol.SenderKeyMessage & SignalWhisperTextProtocol.SenderKeyMessage.$Shape;
        static create(properties?: SignalWhisperTextProtocol.SenderKeyMessage.$Properties): SignalWhisperTextProtocol.SenderKeyMessage;

        /**
         * Encodes the specified SenderKeyMessage message. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyMessage.verify|verify} messages.
         * @param message SenderKeyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalWhisperTextProtocol.SenderKeyMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyMessage.verify|verify} messages.
         * @param message SenderKeyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalWhisperTextProtocol.SenderKeyMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.SenderKeyMessage & SignalWhisperTextProtocol.SenderKeyMessage.$Shape} SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.SenderKeyMessage & SignalWhisperTextProtocol.SenderKeyMessage.$Shape;

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.SenderKeyMessage & SignalWhisperTextProtocol.SenderKeyMessage.$Shape} SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.SenderKeyMessage & SignalWhisperTextProtocol.SenderKeyMessage.$Shape;

        /**
         * Verifies a SenderKeyMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyMessage
         */
        static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.SenderKeyMessage;

        /**
         * Creates a plain object from a SenderKeyMessage message. Also converts values to other types if specified.
         * @param message SenderKeyMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalWhisperTextProtocol.SenderKeyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SenderKeyMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SenderKeyMessage {

        /** Properties of a SenderKeyMessage. */
        interface $Properties {

            /** SenderKeyMessage id */
            id?: (number|null);

            /** SenderKeyMessage iteration */
            iteration?: (number|null);

            /** SenderKeyMessage ciphertext */
            ciphertext?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SenderKeyMessage. */
        type $Shape = SignalWhisperTextProtocol.SenderKeyMessage.$Properties;
    }

    /**
     * Properties of a KeyExchangeMessage.
     * @deprecated Use SignalWhisperTextProtocol.KeyExchangeMessage.$Properties instead.
     */
    interface IKeyExchangeMessage extends SignalWhisperTextProtocol.KeyExchangeMessage.$Properties {
    }

    /** Represents a KeyExchangeMessage. */
    class KeyExchangeMessage {

        /**
         * Constructs a new KeyExchangeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.KeyExchangeMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** KeyExchangeMessage id. */
        id?: (number|null);

        /** KeyExchangeMessage baseKey. */
        baseKey?: (Uint8Array|null);

        /** KeyExchangeMessage ratchetKey. */
        ratchetKey?: (Uint8Array|null);

        /** KeyExchangeMessage identityKey. */
        identityKey?: (Uint8Array|null);

        /** KeyExchangeMessage baseKeySignature. */
        baseKeySignature?: (Uint8Array|null);

        /**
         * Creates a new KeyExchangeMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyExchangeMessage instance
         */
        static create(properties: SignalWhisperTextProtocol.KeyExchangeMessage.$Shape): SignalWhisperTextProtocol.KeyExchangeMessage & SignalWhisperTextProtocol.KeyExchangeMessage.$Shape;
        static create(properties?: SignalWhisperTextProtocol.KeyExchangeMessage.$Properties): SignalWhisperTextProtocol.KeyExchangeMessage;

        /**
         * Encodes the specified KeyExchangeMessage message. Does not implicitly {@link SignalWhisperTextProtocol.KeyExchangeMessage.verify|verify} messages.
         * @param message KeyExchangeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalWhisperTextProtocol.KeyExchangeMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyExchangeMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.KeyExchangeMessage.verify|verify} messages.
         * @param message KeyExchangeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalWhisperTextProtocol.KeyExchangeMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.KeyExchangeMessage & SignalWhisperTextProtocol.KeyExchangeMessage.$Shape} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.KeyExchangeMessage & SignalWhisperTextProtocol.KeyExchangeMessage.$Shape;

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.KeyExchangeMessage & SignalWhisperTextProtocol.KeyExchangeMessage.$Shape} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.KeyExchangeMessage & SignalWhisperTextProtocol.KeyExchangeMessage.$Shape;

        /**
         * Verifies a KeyExchangeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyExchangeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyExchangeMessage
         */
        static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.KeyExchangeMessage;

        /**
         * Creates a plain object from a KeyExchangeMessage message. Also converts values to other types if specified.
         * @param message KeyExchangeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalWhisperTextProtocol.KeyExchangeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyExchangeMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for KeyExchangeMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace KeyExchangeMessage {

        /** Properties of a KeyExchangeMessage. */
        interface $Properties {

            /** KeyExchangeMessage id */
            id?: (number|null);

            /** KeyExchangeMessage baseKey */
            baseKey?: (Uint8Array|null);

            /** KeyExchangeMessage ratchetKey */
            ratchetKey?: (Uint8Array|null);

            /** KeyExchangeMessage identityKey */
            identityKey?: (Uint8Array|null);

            /** KeyExchangeMessage baseKeySignature */
            baseKeySignature?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a KeyExchangeMessage. */
        type $Shape = SignalWhisperTextProtocol.KeyExchangeMessage.$Properties;
    }

    /**
     * Properties of a PreKeySignalMessage.
     * @deprecated Use SignalWhisperTextProtocol.PreKeySignalMessage.$Properties instead.
     */
    interface IPreKeySignalMessage extends SignalWhisperTextProtocol.PreKeySignalMessage.$Properties {
    }

    /** Represents a PreKeySignalMessage. */
    class PreKeySignalMessage {

        /**
         * Constructs a new PreKeySignalMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.PreKeySignalMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PreKeySignalMessage registrationId. */
        registrationId?: (number|null);

        /** PreKeySignalMessage preKeyId. */
        preKeyId?: (number|null);

        /** PreKeySignalMessage signedPreKeyId. */
        signedPreKeyId?: (number|null);

        /** PreKeySignalMessage baseKey. */
        baseKey?: (Uint8Array|null);

        /** PreKeySignalMessage identityKey. */
        identityKey?: (Uint8Array|null);

        /** PreKeySignalMessage message. */
        message?: (Uint8Array|null);

        /** PreKeySignalMessage kyberPreKeyId. */
        kyberPreKeyId?: (number|null);

        /** PreKeySignalMessage kyberCiphertext. */
        kyberCiphertext?: (Uint8Array|null);

        /**
         * Creates a new PreKeySignalMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreKeySignalMessage instance
         */
        static create(properties: SignalWhisperTextProtocol.PreKeySignalMessage.$Shape): SignalWhisperTextProtocol.PreKeySignalMessage & SignalWhisperTextProtocol.PreKeySignalMessage.$Shape;
        static create(properties?: SignalWhisperTextProtocol.PreKeySignalMessage.$Properties): SignalWhisperTextProtocol.PreKeySignalMessage;

        /**
         * Encodes the specified PreKeySignalMessage message. Does not implicitly {@link SignalWhisperTextProtocol.PreKeySignalMessage.verify|verify} messages.
         * @param message PreKeySignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalWhisperTextProtocol.PreKeySignalMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreKeySignalMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.PreKeySignalMessage.verify|verify} messages.
         * @param message PreKeySignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalWhisperTextProtocol.PreKeySignalMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreKeySignalMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.PreKeySignalMessage & SignalWhisperTextProtocol.PreKeySignalMessage.$Shape} PreKeySignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.PreKeySignalMessage & SignalWhisperTextProtocol.PreKeySignalMessage.$Shape;

        /**
         * Decodes a PreKeySignalMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.PreKeySignalMessage & SignalWhisperTextProtocol.PreKeySignalMessage.$Shape} PreKeySignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.PreKeySignalMessage & SignalWhisperTextProtocol.PreKeySignalMessage.$Shape;

        /**
         * Verifies a PreKeySignalMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreKeySignalMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreKeySignalMessage
         */
        static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.PreKeySignalMessage;

        /**
         * Creates a plain object from a PreKeySignalMessage message. Also converts values to other types if specified.
         * @param message PreKeySignalMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalWhisperTextProtocol.PreKeySignalMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreKeySignalMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PreKeySignalMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PreKeySignalMessage {

        /** Properties of a PreKeySignalMessage. */
        interface $Properties {

            /** PreKeySignalMessage registrationId */
            registrationId?: (number|null);

            /** PreKeySignalMessage preKeyId */
            preKeyId?: (number|null);

            /** PreKeySignalMessage signedPreKeyId */
            signedPreKeyId?: (number|null);

            /** PreKeySignalMessage baseKey */
            baseKey?: (Uint8Array|null);

            /** PreKeySignalMessage identityKey */
            identityKey?: (Uint8Array|null);

            /** PreKeySignalMessage message */
            message?: (Uint8Array|null);

            /** PreKeySignalMessage kyberPreKeyId */
            kyberPreKeyId?: (number|null);

            /** PreKeySignalMessage kyberCiphertext */
            kyberCiphertext?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PreKeySignalMessage. */
        type $Shape = SignalWhisperTextProtocol.PreKeySignalMessage.$Properties;
    }

    /**
     * Properties of a SignalMessage.
     * @deprecated Use SignalWhisperTextProtocol.SignalMessage.$Properties instead.
     */
    interface ISignalMessage extends SignalWhisperTextProtocol.SignalMessage.$Properties {
    }

    /** Represents a SignalMessage. */
    class SignalMessage {

        /**
         * Constructs a new SignalMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.SignalMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SignalMessage ratchetKey. */
        ratchetKey?: (Uint8Array|null);

        /** SignalMessage counter. */
        counter?: (number|null);

        /** SignalMessage previousCounter. */
        previousCounter?: (number|null);

        /** SignalMessage ciphertext. */
        ciphertext?: (Uint8Array|null);

        /**
         * Creates a new SignalMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignalMessage instance
         */
        static create(properties: SignalWhisperTextProtocol.SignalMessage.$Shape): SignalWhisperTextProtocol.SignalMessage & SignalWhisperTextProtocol.SignalMessage.$Shape;
        static create(properties?: SignalWhisperTextProtocol.SignalMessage.$Properties): SignalWhisperTextProtocol.SignalMessage;

        /**
         * Encodes the specified SignalMessage message. Does not implicitly {@link SignalWhisperTextProtocol.SignalMessage.verify|verify} messages.
         * @param message SignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalWhisperTextProtocol.SignalMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignalMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.SignalMessage.verify|verify} messages.
         * @param message SignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalWhisperTextProtocol.SignalMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignalMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.SignalMessage & SignalWhisperTextProtocol.SignalMessage.$Shape} SignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.SignalMessage & SignalWhisperTextProtocol.SignalMessage.$Shape;

        /**
         * Decodes a SignalMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.SignalMessage & SignalWhisperTextProtocol.SignalMessage.$Shape} SignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.SignalMessage & SignalWhisperTextProtocol.SignalMessage.$Shape;

        /**
         * Verifies a SignalMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignalMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignalMessage
         */
        static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.SignalMessage;

        /**
         * Creates a plain object from a SignalMessage message. Also converts values to other types if specified.
         * @param message SignalMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalWhisperTextProtocol.SignalMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignalMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SignalMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SignalMessage {

        /** Properties of a SignalMessage. */
        interface $Properties {

            /** SignalMessage ratchetKey */
            ratchetKey?: (Uint8Array|null);

            /** SignalMessage counter */
            counter?: (number|null);

            /** SignalMessage previousCounter */
            previousCounter?: (number|null);

            /** SignalMessage ciphertext */
            ciphertext?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SignalMessage. */
        type $Shape = SignalWhisperTextProtocol.SignalMessage.$Properties;
    }
}

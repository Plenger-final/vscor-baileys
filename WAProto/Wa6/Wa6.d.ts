import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace Wa6. */
export namespace Wa6 {

    /**
     * Properties of a ClientPayload.
     * @deprecated Use Wa6.ClientPayload.$Properties instead.
     */
    interface IClientPayload extends Wa6.ClientPayload.$Properties {
    }

    /** Represents a ClientPayload. */
    class ClientPayload {

        /**
         * Constructs a new ClientPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: Wa6.ClientPayload.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ClientPayload username. */
        username?: (number|Long|null);

        /** ClientPayload passive. */
        passive?: (boolean|null);

        /** ClientPayload userAgent. */
        userAgent?: (Wa6.ClientPayload.UserAgent.$Properties|null);

        /** ClientPayload webInfo. */
        webInfo?: (Wa6.ClientPayload.WebInfo.$Properties|null);

        /** ClientPayload pushName. */
        pushName?: (string|null);

        /** ClientPayload sessionId. */
        sessionId?: (number|null);

        /** ClientPayload shortConnect. */
        shortConnect?: (boolean|null);

        /** ClientPayload connectType. */
        connectType?: (Wa6.ClientPayload.ConnectType|null);

        /** ClientPayload connectReason. */
        connectReason?: (Wa6.ClientPayload.ConnectReason|null);

        /** ClientPayload shards. */
        shards: number[];

        /** ClientPayload dnsSource. */
        dnsSource?: (Wa6.ClientPayload.DNSSource.$Properties|null);

        /** ClientPayload connectAttemptCount. */
        connectAttemptCount?: (number|null);

        /** ClientPayload device. */
        device?: (number|null);

        /** ClientPayload devicePairingData. */
        devicePairingData?: (Wa6.ClientPayload.DevicePairingRegistrationData.$Properties|null);

        /** ClientPayload product. */
        product?: (Wa6.ClientPayload.Product|null);

        /** ClientPayload fbCat. */
        fbCat?: (Uint8Array|null);

        /** ClientPayload fbUserAgent. */
        fbUserAgent?: (Uint8Array|null);

        /** ClientPayload oc. */
        oc?: (boolean|null);

        /** ClientPayload lc. */
        lc?: (number|null);

        /** ClientPayload iosAppExtension. */
        iosAppExtension?: (Wa6.ClientPayload.IOSAppExtension|null);

        /** ClientPayload fbAppId. */
        fbAppId?: (number|Long|null);

        /** ClientPayload fbDeviceId. */
        fbDeviceId?: (Uint8Array|null);

        /** ClientPayload pull. */
        pull?: (boolean|null);

        /** ClientPayload paddingBytes. */
        paddingBytes?: (Uint8Array|null);

        /** ClientPayload yearClass. */
        yearClass?: (number|null);

        /** ClientPayload memClass. */
        memClass?: (number|null);

        /** ClientPayload interopData. */
        interopData?: (Wa6.ClientPayload.InteropData.$Properties|null);

        /** ClientPayload trafficAnonymization. */
        trafficAnonymization?: (Wa6.ClientPayload.TrafficAnonymization|null);

        /** ClientPayload lidDbMigrated. */
        lidDbMigrated?: (boolean|null);

        /** ClientPayload accountType. */
        accountType?: (Wa6.ClientPayload.AccountType|null);

        /** ClientPayload connectionSequenceInfo. */
        connectionSequenceInfo?: (number|null);

        /** ClientPayload paaLink. */
        paaLink?: (boolean|null);

        /** ClientPayload preacksCount. */
        preacksCount?: (number|null);

        /** ClientPayload processingQueueSize. */
        processingQueueSize?: (number|null);

        /** ClientPayload pairedPeripherals. */
        pairedPeripherals: string[];

        /** ClientPayload testIsolationId. */
        testIsolationId?: (Uint8Array|null);

        /** ClientPayload messageSts. */
        messageSts?: (number|Long|null);

        /** ClientPayload integrationAttestation. */
        integrationAttestation?: (Wa6.ClientPayload.IntegrationAttestation.$Properties|null);

        /**
         * Creates a new ClientPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPayload instance
         */
        static create(properties: Wa6.ClientPayload.$Shape): Wa6.ClientPayload & Wa6.ClientPayload.$Shape;
        static create(properties?: Wa6.ClientPayload.$Properties): Wa6.ClientPayload;

        /**
         * Encodes the specified ClientPayload message. Does not implicitly {@link Wa6.ClientPayload.verify|verify} messages.
         * @param message ClientPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Wa6.ClientPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientPayload message, length delimited. Does not implicitly {@link Wa6.ClientPayload.verify|verify} messages.
         * @param message ClientPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Wa6.ClientPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Wa6.ClientPayload & Wa6.ClientPayload.$Shape} ClientPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload & Wa6.ClientPayload.$Shape;

        /**
         * Decodes a ClientPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Wa6.ClientPayload & Wa6.ClientPayload.$Shape} ClientPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload & Wa6.ClientPayload.$Shape;

        /**
         * Verifies a ClientPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPayload
         */
        static fromObject(object: { [k: string]: any }): Wa6.ClientPayload;

        /**
         * Creates a plain object from a ClientPayload message. Also converts values to other types if specified.
         * @param message ClientPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Wa6.ClientPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPayload to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ClientPayload
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ClientPayload {

        /** Properties of a ClientPayload. */
        interface $Properties {

            /** ClientPayload username */
            username?: (number|Long|null);

            /** ClientPayload passive */
            passive?: (boolean|null);

            /** ClientPayload userAgent */
            userAgent?: (Wa6.ClientPayload.UserAgent.$Properties|null);

            /** ClientPayload webInfo */
            webInfo?: (Wa6.ClientPayload.WebInfo.$Properties|null);

            /** ClientPayload pushName */
            pushName?: (string|null);

            /** ClientPayload sessionId */
            sessionId?: (number|null);

            /** ClientPayload shortConnect */
            shortConnect?: (boolean|null);

            /** ClientPayload connectType */
            connectType?: (Wa6.ClientPayload.ConnectType|null);

            /** ClientPayload connectReason */
            connectReason?: (Wa6.ClientPayload.ConnectReason|null);

            /** ClientPayload shards */
            shards?: (number[]|null);

            /** ClientPayload dnsSource */
            dnsSource?: (Wa6.ClientPayload.DNSSource.$Properties|null);

            /** ClientPayload connectAttemptCount */
            connectAttemptCount?: (number|null);

            /** ClientPayload device */
            device?: (number|null);

            /** ClientPayload devicePairingData */
            devicePairingData?: (Wa6.ClientPayload.DevicePairingRegistrationData.$Properties|null);

            /** ClientPayload product */
            product?: (Wa6.ClientPayload.Product|null);

            /** ClientPayload fbCat */
            fbCat?: (Uint8Array|null);

            /** ClientPayload fbUserAgent */
            fbUserAgent?: (Uint8Array|null);

            /** ClientPayload oc */
            oc?: (boolean|null);

            /** ClientPayload lc */
            lc?: (number|null);

            /** ClientPayload iosAppExtension */
            iosAppExtension?: (Wa6.ClientPayload.IOSAppExtension|null);

            /** ClientPayload fbAppId */
            fbAppId?: (number|Long|null);

            /** ClientPayload fbDeviceId */
            fbDeviceId?: (Uint8Array|null);

            /** ClientPayload pull */
            pull?: (boolean|null);

            /** ClientPayload paddingBytes */
            paddingBytes?: (Uint8Array|null);

            /** ClientPayload yearClass */
            yearClass?: (number|null);

            /** ClientPayload memClass */
            memClass?: (number|null);

            /** ClientPayload interopData */
            interopData?: (Wa6.ClientPayload.InteropData.$Properties|null);

            /** ClientPayload trafficAnonymization */
            trafficAnonymization?: (Wa6.ClientPayload.TrafficAnonymization|null);

            /** ClientPayload lidDbMigrated */
            lidDbMigrated?: (boolean|null);

            /** ClientPayload accountType */
            accountType?: (Wa6.ClientPayload.AccountType|null);

            /** ClientPayload connectionSequenceInfo */
            connectionSequenceInfo?: (number|null);

            /** ClientPayload paaLink */
            paaLink?: (boolean|null);

            /** ClientPayload preacksCount */
            preacksCount?: (number|null);

            /** ClientPayload processingQueueSize */
            processingQueueSize?: (number|null);

            /** ClientPayload pairedPeripherals */
            pairedPeripherals?: (string[]|null);

            /** ClientPayload testIsolationId */
            testIsolationId?: (Uint8Array|null);

            /** ClientPayload messageSts */
            messageSts?: (number|Long|null);

            /** ClientPayload integrationAttestation */
            integrationAttestation?: (Wa6.ClientPayload.IntegrationAttestation.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ClientPayload. */
        type $Shape = Wa6.ClientPayload.$Properties;

        /** AccountType enum. */
        enum AccountType {

            /** DEFAULT value */
            DEFAULT = 0,

            /** GUEST value */
            GUEST = 1
        }

        /** ConnectReason enum. */
        enum ConnectReason {

            /** PUSH value */
            PUSH = 0,

            /** USER_ACTIVATED value */
            USER_ACTIVATED = 1,

            /** SCHEDULED value */
            SCHEDULED = 2,

            /** ERROR_RECONNECT value */
            ERROR_RECONNECT = 3,

            /** NETWORK_SWITCH value */
            NETWORK_SWITCH = 4,

            /** PING_RECONNECT value */
            PING_RECONNECT = 5,

            /** UNKNOWN value */
            UNKNOWN = 6
        }

        /** ConnectType enum. */
        enum ConnectType {

            /** CELLULAR_UNKNOWN value */
            CELLULAR_UNKNOWN = 0,

            /** WIFI_UNKNOWN value */
            WIFI_UNKNOWN = 1,

            /** CELLULAR_EDGE value */
            CELLULAR_EDGE = 100,

            /** CELLULAR_IDEN value */
            CELLULAR_IDEN = 101,

            /** CELLULAR_UMTS value */
            CELLULAR_UMTS = 102,

            /** CELLULAR_EVDO value */
            CELLULAR_EVDO = 103,

            /** CELLULAR_GPRS value */
            CELLULAR_GPRS = 104,

            /** CELLULAR_HSDPA value */
            CELLULAR_HSDPA = 105,

            /** CELLULAR_HSUPA value */
            CELLULAR_HSUPA = 106,

            /** CELLULAR_HSPA value */
            CELLULAR_HSPA = 107,

            /** CELLULAR_CDMA value */
            CELLULAR_CDMA = 108,

            /** CELLULAR_1XRTT value */
            CELLULAR_1XRTT = 109,

            /** CELLULAR_EHRPD value */
            CELLULAR_EHRPD = 110,

            /** CELLULAR_LTE value */
            CELLULAR_LTE = 111,

            /** CELLULAR_HSPAP value */
            CELLULAR_HSPAP = 112
        }

        /**
         * Properties of a DNSSource.
         * @deprecated Use Wa6.ClientPayload.DNSSource.$Properties instead.
         */
        interface IDNSSource extends Wa6.ClientPayload.DNSSource.$Properties {
        }

        /** Represents a DNSSource. */
        class DNSSource {

            /**
             * Constructs a new DNSSource.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.ClientPayload.DNSSource.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DNSSource dnsMethod. */
            dnsMethod?: (Wa6.ClientPayload.DNSSource.DNSResolutionMethod|null);

            /** DNSSource appCached. */
            appCached?: (boolean|null);

            /**
             * Creates a new DNSSource instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DNSSource instance
             */
            static create(properties: Wa6.ClientPayload.DNSSource.$Shape): Wa6.ClientPayload.DNSSource & Wa6.ClientPayload.DNSSource.$Shape;
            static create(properties?: Wa6.ClientPayload.DNSSource.$Properties): Wa6.ClientPayload.DNSSource;

            /**
             * Encodes the specified DNSSource message. Does not implicitly {@link Wa6.ClientPayload.DNSSource.verify|verify} messages.
             * @param message DNSSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Wa6.ClientPayload.DNSSource.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DNSSource message, length delimited. Does not implicitly {@link Wa6.ClientPayload.DNSSource.verify|verify} messages.
             * @param message DNSSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Wa6.ClientPayload.DNSSource.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DNSSource message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.DNSSource & Wa6.ClientPayload.DNSSource.$Shape} DNSSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.DNSSource & Wa6.ClientPayload.DNSSource.$Shape;

            /**
             * Decodes a DNSSource message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.DNSSource & Wa6.ClientPayload.DNSSource.$Shape} DNSSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.DNSSource & Wa6.ClientPayload.DNSSource.$Shape;

            /**
             * Verifies a DNSSource message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DNSSource message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DNSSource
             */
            static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.DNSSource;

            /**
             * Creates a plain object from a DNSSource message. Also converts values to other types if specified.
             * @param message DNSSource
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Wa6.ClientPayload.DNSSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DNSSource to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for DNSSource
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DNSSource {

            /** Properties of a DNSSource. */
            interface $Properties {

                /** DNSSource dnsMethod */
                dnsMethod?: (Wa6.ClientPayload.DNSSource.DNSResolutionMethod|null);

                /** DNSSource appCached */
                appCached?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a DNSSource. */
            type $Shape = Wa6.ClientPayload.DNSSource.$Properties;

            /** DNSResolutionMethod enum. */
            enum DNSResolutionMethod {

                /** SYSTEM value */
                SYSTEM = 0,

                /** GOOGLE value */
                GOOGLE = 1,

                /** HARDCODED value */
                HARDCODED = 2,

                /** OVERRIDE value */
                OVERRIDE = 3,

                /** FALLBACK value */
                FALLBACK = 4,

                /** MNS value */
                MNS = 5,

                /** MNS_SECONDARY value */
                MNS_SECONDARY = 6,

                /** SOCKS_PROXY value */
                SOCKS_PROXY = 7
            }
        }

        /**
         * Properties of a DevicePairingRegistrationData.
         * @deprecated Use Wa6.ClientPayload.DevicePairingRegistrationData.$Properties instead.
         */
        interface IDevicePairingRegistrationData extends Wa6.ClientPayload.DevicePairingRegistrationData.$Properties {
        }

        /** Represents a DevicePairingRegistrationData. */
        class DevicePairingRegistrationData {

            /**
             * Constructs a new DevicePairingRegistrationData.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.ClientPayload.DevicePairingRegistrationData.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DevicePairingRegistrationData eRegid. */
            eRegid?: (Uint8Array|null);

            /** DevicePairingRegistrationData eKeytype. */
            eKeytype?: (Uint8Array|null);

            /** DevicePairingRegistrationData eIdent. */
            eIdent?: (Uint8Array|null);

            /** DevicePairingRegistrationData eSkeyId. */
            eSkeyId?: (Uint8Array|null);

            /** DevicePairingRegistrationData eSkeyVal. */
            eSkeyVal?: (Uint8Array|null);

            /** DevicePairingRegistrationData eSkeySig. */
            eSkeySig?: (Uint8Array|null);

            /** DevicePairingRegistrationData buildHash. */
            buildHash?: (Uint8Array|null);

            /** DevicePairingRegistrationData deviceProps. */
            deviceProps?: (Uint8Array|null);

            /**
             * Creates a new DevicePairingRegistrationData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DevicePairingRegistrationData instance
             */
            static create(properties: Wa6.ClientPayload.DevicePairingRegistrationData.$Shape): Wa6.ClientPayload.DevicePairingRegistrationData & Wa6.ClientPayload.DevicePairingRegistrationData.$Shape;
            static create(properties?: Wa6.ClientPayload.DevicePairingRegistrationData.$Properties): Wa6.ClientPayload.DevicePairingRegistrationData;

            /**
             * Encodes the specified DevicePairingRegistrationData message. Does not implicitly {@link Wa6.ClientPayload.DevicePairingRegistrationData.verify|verify} messages.
             * @param message DevicePairingRegistrationData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Wa6.ClientPayload.DevicePairingRegistrationData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DevicePairingRegistrationData message, length delimited. Does not implicitly {@link Wa6.ClientPayload.DevicePairingRegistrationData.verify|verify} messages.
             * @param message DevicePairingRegistrationData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Wa6.ClientPayload.DevicePairingRegistrationData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DevicePairingRegistrationData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.DevicePairingRegistrationData & Wa6.ClientPayload.DevicePairingRegistrationData.$Shape} DevicePairingRegistrationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.DevicePairingRegistrationData & Wa6.ClientPayload.DevicePairingRegistrationData.$Shape;

            /**
             * Decodes a DevicePairingRegistrationData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.DevicePairingRegistrationData & Wa6.ClientPayload.DevicePairingRegistrationData.$Shape} DevicePairingRegistrationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.DevicePairingRegistrationData & Wa6.ClientPayload.DevicePairingRegistrationData.$Shape;

            /**
             * Verifies a DevicePairingRegistrationData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DevicePairingRegistrationData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DevicePairingRegistrationData
             */
            static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.DevicePairingRegistrationData;

            /**
             * Creates a plain object from a DevicePairingRegistrationData message. Also converts values to other types if specified.
             * @param message DevicePairingRegistrationData
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Wa6.ClientPayload.DevicePairingRegistrationData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DevicePairingRegistrationData to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for DevicePairingRegistrationData
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DevicePairingRegistrationData {

            /** Properties of a DevicePairingRegistrationData. */
            interface $Properties {

                /** DevicePairingRegistrationData eRegid */
                eRegid?: (Uint8Array|null);

                /** DevicePairingRegistrationData eKeytype */
                eKeytype?: (Uint8Array|null);

                /** DevicePairingRegistrationData eIdent */
                eIdent?: (Uint8Array|null);

                /** DevicePairingRegistrationData eSkeyId */
                eSkeyId?: (Uint8Array|null);

                /** DevicePairingRegistrationData eSkeyVal */
                eSkeyVal?: (Uint8Array|null);

                /** DevicePairingRegistrationData eSkeySig */
                eSkeySig?: (Uint8Array|null);

                /** DevicePairingRegistrationData buildHash */
                buildHash?: (Uint8Array|null);

                /** DevicePairingRegistrationData deviceProps */
                deviceProps?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a DevicePairingRegistrationData. */
            type $Shape = Wa6.ClientPayload.DevicePairingRegistrationData.$Properties;
        }

        /** IOSAppExtension enum. */
        enum IOSAppExtension {

            /** SHARE_EXTENSION value */
            SHARE_EXTENSION = 0,

            /** SERVICE_EXTENSION value */
            SERVICE_EXTENSION = 1,

            /** INTENTS_EXTENSION value */
            INTENTS_EXTENSION = 2
        }

        /**
         * Properties of an IntegrationAttestation.
         * @deprecated Use Wa6.ClientPayload.IntegrationAttestation.$Properties instead.
         */
        interface IIntegrationAttestation extends Wa6.ClientPayload.IntegrationAttestation.$Properties {
        }

        /** Represents an IntegrationAttestation. */
        class IntegrationAttestation {

            /**
             * Constructs a new IntegrationAttestation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.ClientPayload.IntegrationAttestation.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** IntegrationAttestation staticUnbound. */
            staticUnbound?: (string|null);

            /** IntegrationAttestation onlineSigned. */
            onlineSigned?: (string|null);

            /**
             * Creates a new IntegrationAttestation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IntegrationAttestation instance
             */
            static create(properties: Wa6.ClientPayload.IntegrationAttestation.$Shape): Wa6.ClientPayload.IntegrationAttestation & Wa6.ClientPayload.IntegrationAttestation.$Shape;
            static create(properties?: Wa6.ClientPayload.IntegrationAttestation.$Properties): Wa6.ClientPayload.IntegrationAttestation;

            /**
             * Encodes the specified IntegrationAttestation message. Does not implicitly {@link Wa6.ClientPayload.IntegrationAttestation.verify|verify} messages.
             * @param message IntegrationAttestation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Wa6.ClientPayload.IntegrationAttestation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IntegrationAttestation message, length delimited. Does not implicitly {@link Wa6.ClientPayload.IntegrationAttestation.verify|verify} messages.
             * @param message IntegrationAttestation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Wa6.ClientPayload.IntegrationAttestation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IntegrationAttestation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.IntegrationAttestation & Wa6.ClientPayload.IntegrationAttestation.$Shape} IntegrationAttestation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.IntegrationAttestation & Wa6.ClientPayload.IntegrationAttestation.$Shape;

            /**
             * Decodes an IntegrationAttestation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.IntegrationAttestation & Wa6.ClientPayload.IntegrationAttestation.$Shape} IntegrationAttestation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.IntegrationAttestation & Wa6.ClientPayload.IntegrationAttestation.$Shape;

            /**
             * Verifies an IntegrationAttestation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IntegrationAttestation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IntegrationAttestation
             */
            static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.IntegrationAttestation;

            /**
             * Creates a plain object from an IntegrationAttestation message. Also converts values to other types if specified.
             * @param message IntegrationAttestation
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Wa6.ClientPayload.IntegrationAttestation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IntegrationAttestation to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for IntegrationAttestation
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace IntegrationAttestation {

            /** Properties of an IntegrationAttestation. */
            interface $Properties {

                /** IntegrationAttestation staticUnbound */
                staticUnbound?: (string|null);

                /** IntegrationAttestation onlineSigned */
                onlineSigned?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an IntegrationAttestation. */
            type $Shape = Wa6.ClientPayload.IntegrationAttestation.$Properties;
        }

        /**
         * Properties of an InteropData.
         * @deprecated Use Wa6.ClientPayload.InteropData.$Properties instead.
         */
        interface IInteropData extends Wa6.ClientPayload.InteropData.$Properties {
        }

        /** Represents an InteropData. */
        class InteropData {

            /**
             * Constructs a new InteropData.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.ClientPayload.InteropData.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** InteropData accountId. */
            accountId?: (number|Long|null);

            /** InteropData token. */
            token?: (Uint8Array|null);

            /** InteropData enableReadReceipts. */
            enableReadReceipts?: (boolean|null);

            /**
             * Creates a new InteropData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InteropData instance
             */
            static create(properties: Wa6.ClientPayload.InteropData.$Shape): Wa6.ClientPayload.InteropData & Wa6.ClientPayload.InteropData.$Shape;
            static create(properties?: Wa6.ClientPayload.InteropData.$Properties): Wa6.ClientPayload.InteropData;

            /**
             * Encodes the specified InteropData message. Does not implicitly {@link Wa6.ClientPayload.InteropData.verify|verify} messages.
             * @param message InteropData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Wa6.ClientPayload.InteropData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InteropData message, length delimited. Does not implicitly {@link Wa6.ClientPayload.InteropData.verify|verify} messages.
             * @param message InteropData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Wa6.ClientPayload.InteropData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InteropData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.InteropData & Wa6.ClientPayload.InteropData.$Shape} InteropData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.InteropData & Wa6.ClientPayload.InteropData.$Shape;

            /**
             * Decodes an InteropData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.InteropData & Wa6.ClientPayload.InteropData.$Shape} InteropData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.InteropData & Wa6.ClientPayload.InteropData.$Shape;

            /**
             * Verifies an InteropData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InteropData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InteropData
             */
            static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.InteropData;

            /**
             * Creates a plain object from an InteropData message. Also converts values to other types if specified.
             * @param message InteropData
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Wa6.ClientPayload.InteropData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InteropData to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for InteropData
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace InteropData {

            /** Properties of an InteropData. */
            interface $Properties {

                /** InteropData accountId */
                accountId?: (number|Long|null);

                /** InteropData token */
                token?: (Uint8Array|null);

                /** InteropData enableReadReceipts */
                enableReadReceipts?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an InteropData. */
            type $Shape = Wa6.ClientPayload.InteropData.$Properties;
        }

        /** Product enum. */
        enum Product {

            /** WHATSAPP value */
            WHATSAPP = 0,

            /** MESSENGER value */
            MESSENGER = 1,

            /** INTEROP value */
            INTEROP = 2,

            /** INTEROP_MSGR value */
            INTEROP_MSGR = 3,

            /** WHATSAPP_LID value */
            WHATSAPP_LID = 4
        }

        /** TrafficAnonymization enum. */
        enum TrafficAnonymization {

            /** OFF value */
            OFF = 0,

            /** STANDARD value */
            STANDARD = 1
        }

        /**
         * Properties of a UserAgent.
         * @deprecated Use Wa6.ClientPayload.UserAgent.$Properties instead.
         */
        interface IUserAgent extends Wa6.ClientPayload.UserAgent.$Properties {
        }

        /** Represents a UserAgent. */
        class UserAgent {

            /**
             * Constructs a new UserAgent.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.ClientPayload.UserAgent.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UserAgent platform. */
            platform?: (Wa6.ClientPayload.UserAgent.Platform|null);

            /** UserAgent appVersion. */
            appVersion?: (Wa6.ClientPayload.UserAgent.AppVersion.$Properties|null);

            /** UserAgent mcc. */
            mcc?: (string|null);

            /** UserAgent mnc. */
            mnc?: (string|null);

            /** UserAgent osVersion. */
            osVersion?: (string|null);

            /** UserAgent manufacturer. */
            manufacturer?: (string|null);

            /** UserAgent device. */
            device?: (string|null);

            /** UserAgent osBuildNumber. */
            osBuildNumber?: (string|null);

            /** UserAgent phoneId. */
            phoneId?: (string|null);

            /** UserAgent releaseChannel. */
            releaseChannel?: (Wa6.ClientPayload.UserAgent.ReleaseChannel|null);

            /** UserAgent localeLanguageIso6391. */
            localeLanguageIso6391?: (string|null);

            /** UserAgent localeCountryIso31661Alpha2. */
            localeCountryIso31661Alpha2?: (string|null);

            /** UserAgent deviceBoard. */
            deviceBoard?: (string|null);

            /** UserAgent deviceExpId. */
            deviceExpId?: (string|null);

            /** UserAgent deviceType. */
            deviceType?: (Wa6.ClientPayload.UserAgent.DeviceType|null);

            /** UserAgent deviceModelType. */
            deviceModelType?: (string|null);

            /** UserAgent distributionChannel. */
            distributionChannel?: (Wa6.ClientPayload.UserAgent.DistributionChannel|null);

            /**
             * Creates a new UserAgent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserAgent instance
             */
            static create(properties: Wa6.ClientPayload.UserAgent.$Shape): Wa6.ClientPayload.UserAgent & Wa6.ClientPayload.UserAgent.$Shape;
            static create(properties?: Wa6.ClientPayload.UserAgent.$Properties): Wa6.ClientPayload.UserAgent;

            /**
             * Encodes the specified UserAgent message. Does not implicitly {@link Wa6.ClientPayload.UserAgent.verify|verify} messages.
             * @param message UserAgent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Wa6.ClientPayload.UserAgent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserAgent message, length delimited. Does not implicitly {@link Wa6.ClientPayload.UserAgent.verify|verify} messages.
             * @param message UserAgent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Wa6.ClientPayload.UserAgent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserAgent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.UserAgent & Wa6.ClientPayload.UserAgent.$Shape} UserAgent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.UserAgent & Wa6.ClientPayload.UserAgent.$Shape;

            /**
             * Decodes a UserAgent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.UserAgent & Wa6.ClientPayload.UserAgent.$Shape} UserAgent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.UserAgent & Wa6.ClientPayload.UserAgent.$Shape;

            /**
             * Verifies a UserAgent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserAgent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserAgent
             */
            static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.UserAgent;

            /**
             * Creates a plain object from a UserAgent message. Also converts values to other types if specified.
             * @param message UserAgent
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Wa6.ClientPayload.UserAgent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserAgent to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UserAgent
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UserAgent {

            /** Properties of a UserAgent. */
            interface $Properties {

                /** UserAgent platform */
                platform?: (Wa6.ClientPayload.UserAgent.Platform|null);

                /** UserAgent appVersion */
                appVersion?: (Wa6.ClientPayload.UserAgent.AppVersion.$Properties|null);

                /** UserAgent mcc */
                mcc?: (string|null);

                /** UserAgent mnc */
                mnc?: (string|null);

                /** UserAgent osVersion */
                osVersion?: (string|null);

                /** UserAgent manufacturer */
                manufacturer?: (string|null);

                /** UserAgent device */
                device?: (string|null);

                /** UserAgent osBuildNumber */
                osBuildNumber?: (string|null);

                /** UserAgent phoneId */
                phoneId?: (string|null);

                /** UserAgent releaseChannel */
                releaseChannel?: (Wa6.ClientPayload.UserAgent.ReleaseChannel|null);

                /** UserAgent localeLanguageIso6391 */
                localeLanguageIso6391?: (string|null);

                /** UserAgent localeCountryIso31661Alpha2 */
                localeCountryIso31661Alpha2?: (string|null);

                /** UserAgent deviceBoard */
                deviceBoard?: (string|null);

                /** UserAgent deviceExpId */
                deviceExpId?: (string|null);

                /** UserAgent deviceType */
                deviceType?: (Wa6.ClientPayload.UserAgent.DeviceType|null);

                /** UserAgent deviceModelType */
                deviceModelType?: (string|null);

                /** UserAgent distributionChannel */
                distributionChannel?: (Wa6.ClientPayload.UserAgent.DistributionChannel|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a UserAgent. */
            type $Shape = Wa6.ClientPayload.UserAgent.$Properties;

            /**
             * Properties of an AppVersion.
             * @deprecated Use Wa6.ClientPayload.UserAgent.AppVersion.$Properties instead.
             */
            interface IAppVersion extends Wa6.ClientPayload.UserAgent.AppVersion.$Properties {
            }

            /** Represents an AppVersion. */
            class AppVersion {

                /**
                 * Constructs a new AppVersion.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Wa6.ClientPayload.UserAgent.AppVersion.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** AppVersion primary. */
                primary?: (number|null);

                /** AppVersion secondary. */
                secondary?: (number|null);

                /** AppVersion tertiary. */
                tertiary?: (number|null);

                /** AppVersion quaternary. */
                quaternary?: (number|null);

                /** AppVersion quinary. */
                quinary?: (number|null);

                /**
                 * Creates a new AppVersion instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppVersion instance
                 */
                static create(properties: Wa6.ClientPayload.UserAgent.AppVersion.$Shape): Wa6.ClientPayload.UserAgent.AppVersion & Wa6.ClientPayload.UserAgent.AppVersion.$Shape;
                static create(properties?: Wa6.ClientPayload.UserAgent.AppVersion.$Properties): Wa6.ClientPayload.UserAgent.AppVersion;

                /**
                 * Encodes the specified AppVersion message. Does not implicitly {@link Wa6.ClientPayload.UserAgent.AppVersion.verify|verify} messages.
                 * @param message AppVersion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: Wa6.ClientPayload.UserAgent.AppVersion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppVersion message, length delimited. Does not implicitly {@link Wa6.ClientPayload.UserAgent.AppVersion.verify|verify} messages.
                 * @param message AppVersion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: Wa6.ClientPayload.UserAgent.AppVersion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppVersion message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {Wa6.ClientPayload.UserAgent.AppVersion & Wa6.ClientPayload.UserAgent.AppVersion.$Shape} AppVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.UserAgent.AppVersion & Wa6.ClientPayload.UserAgent.AppVersion.$Shape;

                /**
                 * Decodes an AppVersion message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {Wa6.ClientPayload.UserAgent.AppVersion & Wa6.ClientPayload.UserAgent.AppVersion.$Shape} AppVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.UserAgent.AppVersion & Wa6.ClientPayload.UserAgent.AppVersion.$Shape;

                /**
                 * Verifies an AppVersion message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppVersion message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppVersion
                 */
                static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.UserAgent.AppVersion;

                /**
                 * Creates a plain object from an AppVersion message. Also converts values to other types if specified.
                 * @param message AppVersion
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: Wa6.ClientPayload.UserAgent.AppVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppVersion to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for AppVersion
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace AppVersion {

                /** Properties of an AppVersion. */
                interface $Properties {

                    /** AppVersion primary */
                    primary?: (number|null);

                    /** AppVersion secondary */
                    secondary?: (number|null);

                    /** AppVersion tertiary */
                    tertiary?: (number|null);

                    /** AppVersion quaternary */
                    quaternary?: (number|null);

                    /** AppVersion quinary */
                    quinary?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an AppVersion. */
                type $Shape = Wa6.ClientPayload.UserAgent.AppVersion.$Properties;
            }

            /** DeviceType enum. */
            enum DeviceType {

                /** PHONE value */
                PHONE = 0,

                /** TABLET value */
                TABLET = 1,

                /** DESKTOP value */
                DESKTOP = 2,

                /** WEARABLE value */
                WEARABLE = 3,

                /** VR value */
                VR = 4,

                /** SMART_DISPLAY value */
                SMART_DISPLAY = 5,

                /** SMART_SPEAKER value */
                SMART_SPEAKER = 6,

                /** AGENT value */
                AGENT = 7
            }

            /** DistributionChannel enum. */
            enum DistributionChannel {

                /** APPSTORE value */
                APPSTORE = 0,

                /** WEBSITE value */
                WEBSITE = 1,

                /** TESTFLIGHT value */
                TESTFLIGHT = 2,

                /** INTERNAL value */
                INTERNAL = 3
            }

            /** Platform enum. */
            enum Platform {

                /** ANDROID value */
                ANDROID = 0,

                /** IOS value */
                IOS = 1,

                /** WINDOWS_PHONE value */
                WINDOWS_PHONE = 2,

                /** BLACKBERRY value */
                BLACKBERRY = 3,

                /** BLACKBERRYX value */
                BLACKBERRYX = 4,

                /** S40 value */
                S40 = 5,

                /** S60 value */
                S60 = 6,

                /** PYTHON_CLIENT value */
                PYTHON_CLIENT = 7,

                /** TIZEN value */
                TIZEN = 8,

                /** ENTERPRISE value */
                ENTERPRISE = 9,

                /** SMB_ANDROID value */
                SMB_ANDROID = 10,

                /** KAIOS value */
                KAIOS = 11,

                /** SMB_IOS value */
                SMB_IOS = 12,

                /** WINDOWS value */
                WINDOWS = 13,

                /** WEB value */
                WEB = 14,

                /** PORTAL value */
                PORTAL = 15,

                /** GREEN_ANDROID value */
                GREEN_ANDROID = 16,

                /** GREEN_IPHONE value */
                GREEN_IPHONE = 17,

                /** BLUE_ANDROID value */
                BLUE_ANDROID = 18,

                /** BLUE_IPHONE value */
                BLUE_IPHONE = 19,

                /** FBLITE_ANDROID value */
                FBLITE_ANDROID = 20,

                /** MLITE_ANDROID value */
                MLITE_ANDROID = 21,

                /** IGLITE_ANDROID value */
                IGLITE_ANDROID = 22,

                /** PAGE value */
                PAGE = 23,

                /** MACOS value */
                MACOS = 24,

                /** OCULUS_MSG value */
                OCULUS_MSG = 25,

                /** OCULUS_CALL value */
                OCULUS_CALL = 26,

                /** MILAN value */
                MILAN = 27,

                /** CAPI value */
                CAPI = 28,

                /** WEAROS value */
                WEAROS = 29,

                /** ARDEVICE value */
                ARDEVICE = 30,

                /** VRDEVICE value */
                VRDEVICE = 31,

                /** BLUE_WEB value */
                BLUE_WEB = 32,

                /** IPAD value */
                IPAD = 33,

                /** TEST value */
                TEST = 34,

                /** SMART_GLASSES value */
                SMART_GLASSES = 35,

                /** BLUE_VR value */
                BLUE_VR = 36,

                /** AR_WRIST value */
                AR_WRIST = 37,

                /** WAIL value */
                WAIL = 38,

                /** WORK_ANDROID value */
                WORK_ANDROID = 39,

                /** WORK_IOS value */
                WORK_IOS = 40,

                /** AUTOMOTIVE value */
                AUTOMOTIVE = 41
            }

            /** ReleaseChannel enum. */
            enum ReleaseChannel {

                /** RELEASE value */
                RELEASE = 0,

                /** BETA value */
                BETA = 1,

                /** ALPHA value */
                ALPHA = 2,

                /** DEBUG value */
                DEBUG = 3
            }
        }

        /**
         * Properties of a WebInfo.
         * @deprecated Use Wa6.ClientPayload.WebInfo.$Properties instead.
         */
        interface IWebInfo extends Wa6.ClientPayload.WebInfo.$Properties {
        }

        /** Represents a WebInfo. */
        class WebInfo {

            /**
             * Constructs a new WebInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.ClientPayload.WebInfo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WebInfo refToken. */
            refToken?: (string|null);

            /** WebInfo version. */
            version?: (string|null);

            /** WebInfo webdPayload. */
            webdPayload?: (Wa6.ClientPayload.WebInfo.WebdPayload.$Properties|null);

            /** WebInfo webSubPlatform. */
            webSubPlatform?: (Wa6.ClientPayload.WebInfo.WebSubPlatform|null);

            /** WebInfo browser. */
            browser?: (string|null);

            /** WebInfo browserVersion. */
            browserVersion?: (string|null);

            /**
             * Creates a new WebInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebInfo instance
             */
            static create(properties: Wa6.ClientPayload.WebInfo.$Shape): Wa6.ClientPayload.WebInfo & Wa6.ClientPayload.WebInfo.$Shape;
            static create(properties?: Wa6.ClientPayload.WebInfo.$Properties): Wa6.ClientPayload.WebInfo;

            /**
             * Encodes the specified WebInfo message. Does not implicitly {@link Wa6.ClientPayload.WebInfo.verify|verify} messages.
             * @param message WebInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Wa6.ClientPayload.WebInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebInfo message, length delimited. Does not implicitly {@link Wa6.ClientPayload.WebInfo.verify|verify} messages.
             * @param message WebInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Wa6.ClientPayload.WebInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.WebInfo & Wa6.ClientPayload.WebInfo.$Shape} WebInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.WebInfo & Wa6.ClientPayload.WebInfo.$Shape;

            /**
             * Decodes a WebInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.WebInfo & Wa6.ClientPayload.WebInfo.$Shape} WebInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.WebInfo & Wa6.ClientPayload.WebInfo.$Shape;

            /**
             * Verifies a WebInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebInfo
             */
            static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.WebInfo;

            /**
             * Creates a plain object from a WebInfo message. Also converts values to other types if specified.
             * @param message WebInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Wa6.ClientPayload.WebInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebInfo to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WebInfo
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WebInfo {

            /** Properties of a WebInfo. */
            interface $Properties {

                /** WebInfo refToken */
                refToken?: (string|null);

                /** WebInfo version */
                version?: (string|null);

                /** WebInfo webdPayload */
                webdPayload?: (Wa6.ClientPayload.WebInfo.WebdPayload.$Properties|null);

                /** WebInfo webSubPlatform */
                webSubPlatform?: (Wa6.ClientPayload.WebInfo.WebSubPlatform|null);

                /** WebInfo browser */
                browser?: (string|null);

                /** WebInfo browserVersion */
                browserVersion?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WebInfo. */
            type $Shape = Wa6.ClientPayload.WebInfo.$Properties;

            /** WebSubPlatform enum. */
            enum WebSubPlatform {

                /** WEB_BROWSER value */
                WEB_BROWSER = 0,

                /** APP_STORE value */
                APP_STORE = 1,

                /** WIN_STORE value */
                WIN_STORE = 2,

                /** DARWIN value */
                DARWIN = 3,

                /** WIN32 value */
                WIN32 = 4,

                /** WIN_HYBRID value */
                WIN_HYBRID = 5
            }

            /**
             * Properties of a WebdPayload.
             * @deprecated Use Wa6.ClientPayload.WebInfo.WebdPayload.$Properties instead.
             */
            interface IWebdPayload extends Wa6.ClientPayload.WebInfo.WebdPayload.$Properties {
            }

            /** Represents a WebdPayload. */
            class WebdPayload {

                /**
                 * Constructs a new WebdPayload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Wa6.ClientPayload.WebInfo.WebdPayload.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** WebdPayload usesParticipantInKey. */
                usesParticipantInKey?: (boolean|null);

                /** WebdPayload supportsStarredMessages. */
                supportsStarredMessages?: (boolean|null);

                /** WebdPayload supportsDocumentMessages. */
                supportsDocumentMessages?: (boolean|null);

                /** WebdPayload supportsUrlMessages. */
                supportsUrlMessages?: (boolean|null);

                /** WebdPayload supportsMediaRetry. */
                supportsMediaRetry?: (boolean|null);

                /** WebdPayload supportsE2EImage. */
                supportsE2EImage?: (boolean|null);

                /** WebdPayload supportsE2EVideo. */
                supportsE2EVideo?: (boolean|null);

                /** WebdPayload supportsE2EAudio. */
                supportsE2EAudio?: (boolean|null);

                /** WebdPayload supportsE2EDocument. */
                supportsE2EDocument?: (boolean|null);

                /** WebdPayload documentTypes. */
                documentTypes?: (string|null);

                /** WebdPayload features. */
                features?: (Uint8Array|null);

                /**
                 * Creates a new WebdPayload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WebdPayload instance
                 */
                static create(properties: Wa6.ClientPayload.WebInfo.WebdPayload.$Shape): Wa6.ClientPayload.WebInfo.WebdPayload & Wa6.ClientPayload.WebInfo.WebdPayload.$Shape;
                static create(properties?: Wa6.ClientPayload.WebInfo.WebdPayload.$Properties): Wa6.ClientPayload.WebInfo.WebdPayload;

                /**
                 * Encodes the specified WebdPayload message. Does not implicitly {@link Wa6.ClientPayload.WebInfo.WebdPayload.verify|verify} messages.
                 * @param message WebdPayload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: Wa6.ClientPayload.WebInfo.WebdPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WebdPayload message, length delimited. Does not implicitly {@link Wa6.ClientPayload.WebInfo.WebdPayload.verify|verify} messages.
                 * @param message WebdPayload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: Wa6.ClientPayload.WebInfo.WebdPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WebdPayload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {Wa6.ClientPayload.WebInfo.WebdPayload & Wa6.ClientPayload.WebInfo.WebdPayload.$Shape} WebdPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.WebInfo.WebdPayload & Wa6.ClientPayload.WebInfo.WebdPayload.$Shape;

                /**
                 * Decodes a WebdPayload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {Wa6.ClientPayload.WebInfo.WebdPayload & Wa6.ClientPayload.WebInfo.WebdPayload.$Shape} WebdPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.WebInfo.WebdPayload & Wa6.ClientPayload.WebInfo.WebdPayload.$Shape;

                /**
                 * Verifies a WebdPayload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WebdPayload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WebdPayload
                 */
                static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.WebInfo.WebdPayload;

                /**
                 * Creates a plain object from a WebdPayload message. Also converts values to other types if specified.
                 * @param message WebdPayload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: Wa6.ClientPayload.WebInfo.WebdPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WebdPayload to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for WebdPayload
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace WebdPayload {

                /** Properties of a WebdPayload. */
                interface $Properties {

                    /** WebdPayload usesParticipantInKey */
                    usesParticipantInKey?: (boolean|null);

                    /** WebdPayload supportsStarredMessages */
                    supportsStarredMessages?: (boolean|null);

                    /** WebdPayload supportsDocumentMessages */
                    supportsDocumentMessages?: (boolean|null);

                    /** WebdPayload supportsUrlMessages */
                    supportsUrlMessages?: (boolean|null);

                    /** WebdPayload supportsMediaRetry */
                    supportsMediaRetry?: (boolean|null);

                    /** WebdPayload supportsE2EImage */
                    supportsE2EImage?: (boolean|null);

                    /** WebdPayload supportsE2EVideo */
                    supportsE2EVideo?: (boolean|null);

                    /** WebdPayload supportsE2EAudio */
                    supportsE2EAudio?: (boolean|null);

                    /** WebdPayload supportsE2EDocument */
                    supportsE2EDocument?: (boolean|null);

                    /** WebdPayload documentTypes */
                    documentTypes?: (string|null);

                    /** WebdPayload features */
                    features?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a WebdPayload. */
                type $Shape = Wa6.ClientPayload.WebInfo.WebdPayload.$Properties;
            }
        }
    }

    /**
     * Properties of a HandshakeMessage.
     * @deprecated Use Wa6.HandshakeMessage.$Properties instead.
     */
    interface IHandshakeMessage extends Wa6.HandshakeMessage.$Properties {
    }

    /** Represents a HandshakeMessage. */
    class HandshakeMessage {

        /**
         * Constructs a new HandshakeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: Wa6.HandshakeMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HandshakeMessage clientHello. */
        clientHello?: (Wa6.HandshakeMessage.ClientHello.$Properties|null);

        /** HandshakeMessage serverHello. */
        serverHello?: (Wa6.HandshakeMessage.ServerHello.$Properties|null);

        /** HandshakeMessage clientFinish. */
        clientFinish?: (Wa6.HandshakeMessage.ClientFinish.$Properties|null);

        /**
         * Creates a new HandshakeMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandshakeMessage instance
         */
        static create(properties: Wa6.HandshakeMessage.$Shape): Wa6.HandshakeMessage & Wa6.HandshakeMessage.$Shape;
        static create(properties?: Wa6.HandshakeMessage.$Properties): Wa6.HandshakeMessage;

        /**
         * Encodes the specified HandshakeMessage message. Does not implicitly {@link Wa6.HandshakeMessage.verify|verify} messages.
         * @param message HandshakeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Wa6.HandshakeMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HandshakeMessage message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.verify|verify} messages.
         * @param message HandshakeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Wa6.HandshakeMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HandshakeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Wa6.HandshakeMessage & Wa6.HandshakeMessage.$Shape} HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.HandshakeMessage & Wa6.HandshakeMessage.$Shape;

        /**
         * Decodes a HandshakeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Wa6.HandshakeMessage & Wa6.HandshakeMessage.$Shape} HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.HandshakeMessage & Wa6.HandshakeMessage.$Shape;

        /**
         * Verifies a HandshakeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HandshakeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HandshakeMessage
         */
        static fromObject(object: { [k: string]: any }): Wa6.HandshakeMessage;

        /**
         * Creates a plain object from a HandshakeMessage message. Also converts values to other types if specified.
         * @param message HandshakeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Wa6.HandshakeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HandshakeMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for HandshakeMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HandshakeMessage {

        /** Properties of a HandshakeMessage. */
        interface $Properties {

            /** HandshakeMessage clientHello */
            clientHello?: (Wa6.HandshakeMessage.ClientHello.$Properties|null);

            /** HandshakeMessage serverHello */
            serverHello?: (Wa6.HandshakeMessage.ServerHello.$Properties|null);

            /** HandshakeMessage clientFinish */
            clientFinish?: (Wa6.HandshakeMessage.ClientFinish.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HandshakeMessage. */
        type $Shape = Wa6.HandshakeMessage.$Properties;

        /**
         * Properties of a ClientFinish.
         * @deprecated Use Wa6.HandshakeMessage.ClientFinish.$Properties instead.
         */
        interface IClientFinish extends Wa6.HandshakeMessage.ClientFinish.$Properties {
        }

        /** Represents a ClientFinish. */
        class ClientFinish {

            /**
             * Constructs a new ClientFinish.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.HandshakeMessage.ClientFinish.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ClientFinish static. */
            static?: (Uint8Array|null);

            /** ClientFinish payload. */
            payload?: (Uint8Array|null);

            /** ClientFinish extendedCiphertext. */
            extendedCiphertext?: (Uint8Array|null);

            /** ClientFinish paddedBytes. */
            paddedBytes?: (Uint8Array|null);

            /** ClientFinish simulateXxkemFs. */
            simulateXxkemFs?: (boolean|null);

            /**
             * Creates a new ClientFinish instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientFinish instance
             */
            static create(properties: Wa6.HandshakeMessage.ClientFinish.$Shape): Wa6.HandshakeMessage.ClientFinish & Wa6.HandshakeMessage.ClientFinish.$Shape;
            static create(properties?: Wa6.HandshakeMessage.ClientFinish.$Properties): Wa6.HandshakeMessage.ClientFinish;

            /**
             * Encodes the specified ClientFinish message. Does not implicitly {@link Wa6.HandshakeMessage.ClientFinish.verify|verify} messages.
             * @param message ClientFinish message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Wa6.HandshakeMessage.ClientFinish.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientFinish message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ClientFinish.verify|verify} messages.
             * @param message ClientFinish message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Wa6.HandshakeMessage.ClientFinish.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientFinish message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Wa6.HandshakeMessage.ClientFinish & Wa6.HandshakeMessage.ClientFinish.$Shape} ClientFinish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.HandshakeMessage.ClientFinish & Wa6.HandshakeMessage.ClientFinish.$Shape;

            /**
             * Decodes a ClientFinish message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Wa6.HandshakeMessage.ClientFinish & Wa6.HandshakeMessage.ClientFinish.$Shape} ClientFinish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.HandshakeMessage.ClientFinish & Wa6.HandshakeMessage.ClientFinish.$Shape;

            /**
             * Verifies a ClientFinish message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientFinish message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientFinish
             */
            static fromObject(object: { [k: string]: any }): Wa6.HandshakeMessage.ClientFinish;

            /**
             * Creates a plain object from a ClientFinish message. Also converts values to other types if specified.
             * @param message ClientFinish
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Wa6.HandshakeMessage.ClientFinish, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientFinish to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ClientFinish
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ClientFinish {

            /** Properties of a ClientFinish. */
            interface $Properties {

                /** ClientFinish static */
                "static"?: (Uint8Array|null);

                /** ClientFinish payload */
                payload?: (Uint8Array|null);

                /** ClientFinish extendedCiphertext */
                extendedCiphertext?: (Uint8Array|null);

                /** ClientFinish paddedBytes */
                paddedBytes?: (Uint8Array|null);

                /** ClientFinish simulateXxkemFs */
                simulateXxkemFs?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ClientFinish. */
            type $Shape = Wa6.HandshakeMessage.ClientFinish.$Properties;
        }

        /**
         * Properties of a ClientHello.
         * @deprecated Use Wa6.HandshakeMessage.ClientHello.$Properties instead.
         */
        interface IClientHello extends Wa6.HandshakeMessage.ClientHello.$Properties {
        }

        /** Represents a ClientHello. */
        class ClientHello {

            /**
             * Constructs a new ClientHello.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.HandshakeMessage.ClientHello.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ClientHello ephemeral. */
            ephemeral?: (Uint8Array|null);

            /** ClientHello static. */
            static?: (Uint8Array|null);

            /** ClientHello payload. */
            payload?: (Uint8Array|null);

            /** ClientHello useExtended. */
            useExtended?: (boolean|null);

            /** ClientHello extendedCiphertext. */
            extendedCiphertext?: (Uint8Array|null);

            /** ClientHello paddedBytes. */
            paddedBytes?: (Uint8Array|null);

            /** ClientHello sendServerHelloPaddedBytes. */
            sendServerHelloPaddedBytes?: (boolean|null);

            /** ClientHello simulateXxkemFs. */
            simulateXxkemFs?: (boolean|null);

            /** ClientHello pqMode. */
            pqMode?: (Wa6.HandshakeMessage.HandshakePqMode|null);

            /** ClientHello extendedEphemeral. */
            extendedEphemeral?: (Uint8Array|null);

            /**
             * Creates a new ClientHello instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientHello instance
             */
            static create(properties: Wa6.HandshakeMessage.ClientHello.$Shape): Wa6.HandshakeMessage.ClientHello & Wa6.HandshakeMessage.ClientHello.$Shape;
            static create(properties?: Wa6.HandshakeMessage.ClientHello.$Properties): Wa6.HandshakeMessage.ClientHello;

            /**
             * Encodes the specified ClientHello message. Does not implicitly {@link Wa6.HandshakeMessage.ClientHello.verify|verify} messages.
             * @param message ClientHello message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Wa6.HandshakeMessage.ClientHello.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientHello message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ClientHello.verify|verify} messages.
             * @param message ClientHello message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Wa6.HandshakeMessage.ClientHello.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientHello message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Wa6.HandshakeMessage.ClientHello & Wa6.HandshakeMessage.ClientHello.$Shape} ClientHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.HandshakeMessage.ClientHello & Wa6.HandshakeMessage.ClientHello.$Shape;

            /**
             * Decodes a ClientHello message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Wa6.HandshakeMessage.ClientHello & Wa6.HandshakeMessage.ClientHello.$Shape} ClientHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.HandshakeMessage.ClientHello & Wa6.HandshakeMessage.ClientHello.$Shape;

            /**
             * Verifies a ClientHello message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientHello message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientHello
             */
            static fromObject(object: { [k: string]: any }): Wa6.HandshakeMessage.ClientHello;

            /**
             * Creates a plain object from a ClientHello message. Also converts values to other types if specified.
             * @param message ClientHello
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Wa6.HandshakeMessage.ClientHello, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientHello to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ClientHello
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ClientHello {

            /** Properties of a ClientHello. */
            interface $Properties {

                /** ClientHello ephemeral */
                ephemeral?: (Uint8Array|null);

                /** ClientHello static */
                "static"?: (Uint8Array|null);

                /** ClientHello payload */
                payload?: (Uint8Array|null);

                /** ClientHello useExtended */
                useExtended?: (boolean|null);

                /** ClientHello extendedCiphertext */
                extendedCiphertext?: (Uint8Array|null);

                /** ClientHello paddedBytes */
                paddedBytes?: (Uint8Array|null);

                /** ClientHello sendServerHelloPaddedBytes */
                sendServerHelloPaddedBytes?: (boolean|null);

                /** ClientHello simulateXxkemFs */
                simulateXxkemFs?: (boolean|null);

                /** ClientHello pqMode */
                pqMode?: (Wa6.HandshakeMessage.HandshakePqMode|null);

                /** ClientHello extendedEphemeral */
                extendedEphemeral?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ClientHello. */
            type $Shape = Wa6.HandshakeMessage.ClientHello.$Properties;
        }

        /** HandshakePqMode enum. */
        enum HandshakePqMode {

            /** HANDSHAKE_PQ_MODE_UNKNOWN value */
            HANDSHAKE_PQ_MODE_UNKNOWN = 0,

            /** XXKEM value */
            XXKEM = 1,

            /** XXKEM_FS value */
            XXKEM_FS = 2,

            /** XXKEM_EPH value */
            XXKEM_EPH = 9,

            /** WA_CLASSICAL value */
            WA_CLASSICAL = 3,

            /** WA_PQ value */
            WA_PQ = 4,

            /** IKKEM value */
            IKKEM = 5,

            /** IKKEM_FS value */
            IKKEM_FS = 6,

            /** XXKEM_2 value */
            XXKEM_2 = 7,

            /** IKKEM_2 value */
            IKKEM_2 = 8
        }

        /**
         * Properties of a ServerHello.
         * @deprecated Use Wa6.HandshakeMessage.ServerHello.$Properties instead.
         */
        interface IServerHello extends Wa6.HandshakeMessage.ServerHello.$Properties {
        }

        /** Represents a ServerHello. */
        class ServerHello {

            /**
             * Constructs a new ServerHello.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.HandshakeMessage.ServerHello.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ServerHello ephemeral. */
            ephemeral?: (Uint8Array|null);

            /** ServerHello static. */
            static?: (Uint8Array|null);

            /** ServerHello payload. */
            payload?: (Uint8Array|null);

            /** ServerHello extendedStatic. */
            extendedStatic?: (Uint8Array|null);

            /** ServerHello paddingBytes. */
            paddingBytes?: (Uint8Array|null);

            /** ServerHello extendedCiphertext. */
            extendedCiphertext?: (Uint8Array|null);

            /**
             * Creates a new ServerHello instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerHello instance
             */
            static create(properties: Wa6.HandshakeMessage.ServerHello.$Shape): Wa6.HandshakeMessage.ServerHello & Wa6.HandshakeMessage.ServerHello.$Shape;
            static create(properties?: Wa6.HandshakeMessage.ServerHello.$Properties): Wa6.HandshakeMessage.ServerHello;

            /**
             * Encodes the specified ServerHello message. Does not implicitly {@link Wa6.HandshakeMessage.ServerHello.verify|verify} messages.
             * @param message ServerHello message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Wa6.HandshakeMessage.ServerHello.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServerHello message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ServerHello.verify|verify} messages.
             * @param message ServerHello message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Wa6.HandshakeMessage.ServerHello.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerHello message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Wa6.HandshakeMessage.ServerHello & Wa6.HandshakeMessage.ServerHello.$Shape} ServerHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.HandshakeMessage.ServerHello & Wa6.HandshakeMessage.ServerHello.$Shape;

            /**
             * Decodes a ServerHello message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Wa6.HandshakeMessage.ServerHello & Wa6.HandshakeMessage.ServerHello.$Shape} ServerHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.HandshakeMessage.ServerHello & Wa6.HandshakeMessage.ServerHello.$Shape;

            /**
             * Verifies a ServerHello message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServerHello message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServerHello
             */
            static fromObject(object: { [k: string]: any }): Wa6.HandshakeMessage.ServerHello;

            /**
             * Creates a plain object from a ServerHello message. Also converts values to other types if specified.
             * @param message ServerHello
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Wa6.HandshakeMessage.ServerHello, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServerHello to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ServerHello
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ServerHello {

            /** Properties of a ServerHello. */
            interface $Properties {

                /** ServerHello ephemeral */
                ephemeral?: (Uint8Array|null);

                /** ServerHello static */
                "static"?: (Uint8Array|null);

                /** ServerHello payload */
                payload?: (Uint8Array|null);

                /** ServerHello extendedStatic */
                extendedStatic?: (Uint8Array|null);

                /** ServerHello paddingBytes */
                paddingBytes?: (Uint8Array|null);

                /** ServerHello extendedCiphertext */
                extendedCiphertext?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ServerHello. */
            type $Shape = Wa6.HandshakeMessage.ServerHello.$Properties;
        }
    }
}

import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace Protocol. */
export namespace Protocol {

    /**
     * Properties of a ACP2Setting.
     * @deprecated Use Protocol.ACP2Setting.$Properties instead.
     */
    interface IACP2Setting extends Protocol.ACP2Setting.$Properties {
    }

    /** Represents a ACP2Setting. */
    class ACP2Setting {

        /**
         * Constructs a new ACP2Setting.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ACP2Setting.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ACP2Setting enabled. */
        enabled?: (boolean|null);

        /** ACP2Setting trigger. */
        trigger?: (Protocol.LimitSharing.TriggerType|null);

        /** ACP2Setting settingTimestamp. */
        settingTimestamp?: (number|Long|null);

        /** ACP2Setting initiatedByMe. */
        initiatedByMe?: (boolean|null);

        /**
         * Creates a new ACP2Setting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ACP2Setting instance
         */
        static create(properties: Protocol.ACP2Setting.$Shape): Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape;
        static create(properties?: Protocol.ACP2Setting.$Properties): Protocol.ACP2Setting;

        /**
         * Encodes the specified ACP2Setting message. Does not implicitly {@link Protocol.ACP2Setting.verify|verify} messages.
         * @param message ACP2Setting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Protocol.ACP2Setting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ACP2Setting message, length delimited. Does not implicitly {@link Protocol.ACP2Setting.verify|verify} messages.
         * @param message ACP2Setting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Protocol.ACP2Setting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ACP2Setting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape} ACP2Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape;

        /**
         * Decodes a ACP2Setting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape} ACP2Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape;

        /**
         * Verifies a ACP2Setting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ACP2Setting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ACP2Setting
         */
        static fromObject(object: { [k: string]: any }): Protocol.ACP2Setting;

        /**
         * Creates a plain object from a ACP2Setting message. Also converts values to other types if specified.
         * @param message ACP2Setting
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Protocol.ACP2Setting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ACP2Setting to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ACP2Setting
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ACP2Setting {

        /** Properties of a ACP2Setting. */
        interface $Properties {

            /** ACP2Setting enabled */
            enabled?: (boolean|null);

            /** ACP2Setting trigger */
            trigger?: (Protocol.LimitSharing.TriggerType|null);

            /** ACP2Setting settingTimestamp */
            settingTimestamp?: (number|Long|null);

            /** ACP2Setting initiatedByMe */
            initiatedByMe?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ACP2Setting. */
        type $Shape = Protocol.ACP2Setting.$Properties;
    }

    /**
     * Properties of a LimitSharing.
     * @deprecated Use Protocol.LimitSharing.$Properties instead.
     */
    interface ILimitSharing extends Protocol.LimitSharing.$Properties {
    }

    /** Represents a LimitSharing. */
    class LimitSharing {

        /**
         * Constructs a new LimitSharing.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.LimitSharing.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LimitSharing sharingLimited. */
        sharingLimited?: (boolean|null);

        /** LimitSharing trigger. */
        trigger?: (Protocol.LimitSharing.TriggerType|null);

        /** LimitSharing limitSharingSettingTimestamp. */
        limitSharingSettingTimestamp?: (number|Long|null);

        /** LimitSharing initiatedByMe. */
        initiatedByMe?: (boolean|null);

        /**
         * Creates a new LimitSharing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LimitSharing instance
         */
        static create(properties: Protocol.LimitSharing.$Shape): Protocol.LimitSharing & Protocol.LimitSharing.$Shape;
        static create(properties?: Protocol.LimitSharing.$Properties): Protocol.LimitSharing;

        /**
         * Encodes the specified LimitSharing message. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
         * @param message LimitSharing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Protocol.LimitSharing.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LimitSharing message, length delimited. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
         * @param message LimitSharing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Protocol.LimitSharing.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LimitSharing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Protocol.LimitSharing & Protocol.LimitSharing.$Shape} LimitSharing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.LimitSharing & Protocol.LimitSharing.$Shape;

        /**
         * Decodes a LimitSharing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Protocol.LimitSharing & Protocol.LimitSharing.$Shape} LimitSharing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.LimitSharing & Protocol.LimitSharing.$Shape;

        /**
         * Verifies a LimitSharing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LimitSharing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LimitSharing
         */
        static fromObject(object: { [k: string]: any }): Protocol.LimitSharing;

        /**
         * Creates a plain object from a LimitSharing message. Also converts values to other types if specified.
         * @param message LimitSharing
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Protocol.LimitSharing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LimitSharing to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LimitSharing
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LimitSharing {

        /** Properties of a LimitSharing. */
        interface $Properties {

            /** LimitSharing sharingLimited */
            sharingLimited?: (boolean|null);

            /** LimitSharing trigger */
            trigger?: (Protocol.LimitSharing.TriggerType|null);

            /** LimitSharing limitSharingSettingTimestamp */
            limitSharingSettingTimestamp?: (number|Long|null);

            /** LimitSharing initiatedByMe */
            initiatedByMe?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LimitSharing. */
        type $Shape = Protocol.LimitSharing.$Properties;

        /** TriggerType enum. */
        enum TriggerType {

            /** UNKNOWN value */
            UNKNOWN = 0,

            /** CHAT_SETTING value */
            CHAT_SETTING = 1,

            /** BIZ_SUPPORTS_FB_HOSTING value */
            BIZ_SUPPORTS_FB_HOSTING = 2,

            /** UNKNOWN_GROUP value */
            UNKNOWN_GROUP = 3
        }
    }

    /**
     * Properties of a MessageKey.
     * @deprecated Use Protocol.MessageKey.$Properties instead.
     */
    interface IMessageKey extends Protocol.MessageKey.$Properties {
    }

    /** Represents a MessageKey. */
    class MessageKey {

        /**
         * Constructs a new MessageKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.MessageKey.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MessageKey remoteJid. */
        remoteJid?: (string|null);

        /** MessageKey fromMe. */
        fromMe?: (boolean|null);

        /** MessageKey id. */
        id?: (string|null);

        /** MessageKey participant. */
        participant?: (string|null);

        /**
         * Creates a new MessageKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageKey instance
         */
        static create(properties: Protocol.MessageKey.$Shape): Protocol.MessageKey & Protocol.MessageKey.$Shape;
        static create(properties?: Protocol.MessageKey.$Properties): Protocol.MessageKey;

        /**
         * Encodes the specified MessageKey message. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @param message MessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Protocol.MessageKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @param message MessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Protocol.MessageKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Protocol.MessageKey & Protocol.MessageKey.$Shape} MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.MessageKey & Protocol.MessageKey.$Shape;

        /**
         * Decodes a MessageKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Protocol.MessageKey & Protocol.MessageKey.$Shape} MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.MessageKey & Protocol.MessageKey.$Shape;

        /**
         * Verifies a MessageKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageKey
         */
        static fromObject(object: { [k: string]: any }): Protocol.MessageKey;

        /**
         * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
         * @param message MessageKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Protocol.MessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageKey to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MessageKey
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MessageKey {

        /** Properties of a MessageKey. */
        interface $Properties {

            /** MessageKey remoteJid */
            remoteJid?: (string|null);

            /** MessageKey fromMe */
            fromMe?: (boolean|null);

            /** MessageKey id */
            id?: (string|null);

            /** MessageKey participant */
            participant?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MessageKey. */
        type $Shape = Protocol.MessageKey.$Properties;
    }
}

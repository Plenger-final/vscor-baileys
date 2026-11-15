import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace MmsRetry. */
export namespace MmsRetry {

    /**
     * Properties of a ServerErrorReceipt.
     * @deprecated Use MmsRetry.ServerErrorReceipt.$Properties instead.
     */
    interface IServerErrorReceipt extends MmsRetry.ServerErrorReceipt.$Properties {
    }

    /** Represents a ServerErrorReceipt. */
    class ServerErrorReceipt {

        /**
         * Constructs a new ServerErrorReceipt.
         * @param [properties] Properties to set
         */
        constructor(properties?: MmsRetry.ServerErrorReceipt.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ServerErrorReceipt stanzaId. */
        stanzaId?: (string|null);

        /**
         * Creates a new ServerErrorReceipt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerErrorReceipt instance
         */
        static create(properties: MmsRetry.ServerErrorReceipt.$Shape): MmsRetry.ServerErrorReceipt & MmsRetry.ServerErrorReceipt.$Shape;
        static create(properties?: MmsRetry.ServerErrorReceipt.$Properties): MmsRetry.ServerErrorReceipt;

        /**
         * Encodes the specified ServerErrorReceipt message. Does not implicitly {@link MmsRetry.ServerErrorReceipt.verify|verify} messages.
         * @param message ServerErrorReceipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: MmsRetry.ServerErrorReceipt.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerErrorReceipt message, length delimited. Does not implicitly {@link MmsRetry.ServerErrorReceipt.verify|verify} messages.
         * @param message ServerErrorReceipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: MmsRetry.ServerErrorReceipt.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerErrorReceipt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {MmsRetry.ServerErrorReceipt & MmsRetry.ServerErrorReceipt.$Shape} ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MmsRetry.ServerErrorReceipt & MmsRetry.ServerErrorReceipt.$Shape;

        /**
         * Decodes a ServerErrorReceipt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {MmsRetry.ServerErrorReceipt & MmsRetry.ServerErrorReceipt.$Shape} ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MmsRetry.ServerErrorReceipt & MmsRetry.ServerErrorReceipt.$Shape;

        /**
         * Verifies a ServerErrorReceipt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerErrorReceipt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerErrorReceipt
         */
        static fromObject(object: { [k: string]: any }): MmsRetry.ServerErrorReceipt;

        /**
         * Creates a plain object from a ServerErrorReceipt message. Also converts values to other types if specified.
         * @param message ServerErrorReceipt
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: MmsRetry.ServerErrorReceipt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerErrorReceipt to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ServerErrorReceipt
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ServerErrorReceipt {

        /** Properties of a ServerErrorReceipt. */
        interface $Properties {

            /** ServerErrorReceipt stanzaId */
            stanzaId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ServerErrorReceipt. */
        type $Shape = MmsRetry.ServerErrorReceipt.$Properties;
    }

    /**
     * Properties of a MediaRetryNotification.
     * @deprecated Use MmsRetry.MediaRetryNotification.$Properties instead.
     */
    interface IMediaRetryNotification extends MmsRetry.MediaRetryNotification.$Properties {
    }

    /** Represents a MediaRetryNotification. */
    class MediaRetryNotification {

        /**
         * Constructs a new MediaRetryNotification.
         * @param [properties] Properties to set
         */
        constructor(properties?: MmsRetry.MediaRetryNotification.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MediaRetryNotification stanzaId. */
        stanzaId?: (string|null);

        /** MediaRetryNotification directPath. */
        directPath?: (string|null);

        /** MediaRetryNotification result. */
        result?: (MmsRetry.MediaRetryNotification.ResultType|null);

        /** MediaRetryNotification messageSecret. */
        messageSecret?: (Uint8Array|null);

        /**
         * Creates a new MediaRetryNotification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MediaRetryNotification instance
         */
        static create(properties: MmsRetry.MediaRetryNotification.$Shape): MmsRetry.MediaRetryNotification & MmsRetry.MediaRetryNotification.$Shape;
        static create(properties?: MmsRetry.MediaRetryNotification.$Properties): MmsRetry.MediaRetryNotification;

        /**
         * Encodes the specified MediaRetryNotification message. Does not implicitly {@link MmsRetry.MediaRetryNotification.verify|verify} messages.
         * @param message MediaRetryNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: MmsRetry.MediaRetryNotification.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MediaRetryNotification message, length delimited. Does not implicitly {@link MmsRetry.MediaRetryNotification.verify|verify} messages.
         * @param message MediaRetryNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: MmsRetry.MediaRetryNotification.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaRetryNotification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {MmsRetry.MediaRetryNotification & MmsRetry.MediaRetryNotification.$Shape} MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MmsRetry.MediaRetryNotification & MmsRetry.MediaRetryNotification.$Shape;

        /**
         * Decodes a MediaRetryNotification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {MmsRetry.MediaRetryNotification & MmsRetry.MediaRetryNotification.$Shape} MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MmsRetry.MediaRetryNotification & MmsRetry.MediaRetryNotification.$Shape;

        /**
         * Verifies a MediaRetryNotification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MediaRetryNotification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MediaRetryNotification
         */
        static fromObject(object: { [k: string]: any }): MmsRetry.MediaRetryNotification;

        /**
         * Creates a plain object from a MediaRetryNotification message. Also converts values to other types if specified.
         * @param message MediaRetryNotification
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: MmsRetry.MediaRetryNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MediaRetryNotification to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MediaRetryNotification
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MediaRetryNotification {

        /** Properties of a MediaRetryNotification. */
        interface $Properties {

            /** MediaRetryNotification stanzaId */
            stanzaId?: (string|null);

            /** MediaRetryNotification directPath */
            directPath?: (string|null);

            /** MediaRetryNotification result */
            result?: (MmsRetry.MediaRetryNotification.ResultType|null);

            /** MediaRetryNotification messageSecret */
            messageSecret?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MediaRetryNotification. */
        type $Shape = MmsRetry.MediaRetryNotification.$Properties;

        /** ResultType enum. */
        enum ResultType {

            /** GENERAL_ERROR value */
            GENERAL_ERROR = 0,

            /** SUCCESS value */
            SUCCESS = 1,

            /** NOT_FOUND value */
            NOT_FOUND = 2,

            /** DECRYPTION_ERROR value */
            DECRYPTION_ERROR = 3
        }
    }
}

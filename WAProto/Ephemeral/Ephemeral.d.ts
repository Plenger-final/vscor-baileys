import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace Ephemeral. */
export namespace Ephemeral {

    /**
     * Properties of an EphemeralSetting.
     * @deprecated Use Ephemeral.EphemeralSetting.$Properties instead.
     */
    interface IEphemeralSetting extends Ephemeral.EphemeralSetting.$Properties {
    }

    /** Represents an EphemeralSetting. */
    class EphemeralSetting {

        /**
         * Constructs a new EphemeralSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ephemeral.EphemeralSetting.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** EphemeralSetting duration. */
        duration?: (number|null);

        /** EphemeralSetting timestamp. */
        timestamp?: (number|Long|null);

        /**
         * Creates a new EphemeralSetting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EphemeralSetting instance
         */
        static create(properties: Ephemeral.EphemeralSetting.$Shape): Ephemeral.EphemeralSetting & Ephemeral.EphemeralSetting.$Shape;
        static create(properties?: Ephemeral.EphemeralSetting.$Properties): Ephemeral.EphemeralSetting;

        /**
         * Encodes the specified EphemeralSetting message. Does not implicitly {@link Ephemeral.EphemeralSetting.verify|verify} messages.
         * @param message EphemeralSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Ephemeral.EphemeralSetting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EphemeralSetting message, length delimited. Does not implicitly {@link Ephemeral.EphemeralSetting.verify|verify} messages.
         * @param message EphemeralSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Ephemeral.EphemeralSetting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EphemeralSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Ephemeral.EphemeralSetting & Ephemeral.EphemeralSetting.$Shape} EphemeralSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ephemeral.EphemeralSetting & Ephemeral.EphemeralSetting.$Shape;

        /**
         * Decodes an EphemeralSetting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Ephemeral.EphemeralSetting & Ephemeral.EphemeralSetting.$Shape} EphemeralSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ephemeral.EphemeralSetting & Ephemeral.EphemeralSetting.$Shape;

        /**
         * Verifies an EphemeralSetting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EphemeralSetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EphemeralSetting
         */
        static fromObject(object: { [k: string]: any }): Ephemeral.EphemeralSetting;

        /**
         * Creates a plain object from an EphemeralSetting message. Also converts values to other types if specified.
         * @param message EphemeralSetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Ephemeral.EphemeralSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EphemeralSetting to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for EphemeralSetting
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace EphemeralSetting {

        /** Properties of an EphemeralSetting. */
        interface $Properties {

            /** EphemeralSetting duration */
            duration?: (number|null);

            /** EphemeralSetting timestamp */
            timestamp?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an EphemeralSetting. */
        type $Shape = Ephemeral.EphemeralSetting.$Properties;
    }
}

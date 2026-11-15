import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace Reporting. */
export namespace Reporting {

    /**
     * Properties of a Field.
     * @deprecated Use Reporting.Field.$Properties instead.
     */
    interface IField extends Reporting.Field.$Properties {
    }

    /** Represents a Field. */
    class Field {

        /**
         * Constructs a new Field.
         * @param [properties] Properties to set
         */
        constructor(properties?: Reporting.Field.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Field minVersion. */
        minVersion?: (number|null);

        /** Field maxVersion. */
        maxVersion?: (number|null);

        /** Field isMessage. */
        isMessage?: (boolean|null);

        /** Field subfield. */
        subfield: { [k: string]: Reporting.Field.$Properties };

        /**
         * Creates a new Field instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Field instance
         */
        static create(properties: Reporting.Field.$Shape): Reporting.Field & Reporting.Field.$Shape;
        static create(properties?: Reporting.Field.$Properties): Reporting.Field;

        /**
         * Encodes the specified Field message. Does not implicitly {@link Reporting.Field.verify|verify} messages.
         * @param message Field message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Reporting.Field.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Field message, length delimited. Does not implicitly {@link Reporting.Field.verify|verify} messages.
         * @param message Field message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Reporting.Field.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Field message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Reporting.Field & Reporting.Field.$Shape} Field
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Reporting.Field & Reporting.Field.$Shape;

        /**
         * Decodes a Field message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Reporting.Field & Reporting.Field.$Shape} Field
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Reporting.Field & Reporting.Field.$Shape;

        /**
         * Verifies a Field message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Field message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Field
         */
        static fromObject(object: { [k: string]: any }): Reporting.Field;

        /**
         * Creates a plain object from a Field message. Also converts values to other types if specified.
         * @param message Field
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Reporting.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Field to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Field
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Field {

        /** Properties of a Field. */
        interface $Properties {

            /** Field minVersion */
            minVersion?: (number|null);

            /** Field maxVersion */
            maxVersion?: (number|null);

            /** Field isMessage */
            isMessage?: (boolean|null);

            /** Field subfield */
            subfield?: ({ [k: string]: Reporting.Field.$Properties }|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Field. */
        type $Shape = Reporting.Field.$Properties;
    }

    /**
     * Properties of a Config.
     * @deprecated Use Reporting.Config.$Properties instead.
     */
    interface IConfig extends Reporting.Config.$Properties {
    }

    /** Represents a Config. */
    class Config {

        /**
         * Constructs a new Config.
         * @param [properties] Properties to set
         */
        constructor(properties?: Reporting.Config.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Config field. */
        field: { [k: string]: Reporting.Field.$Properties };

        /**
         * Creates a new Config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Config instance
         */
        static create(properties: Reporting.Config.$Shape): Reporting.Config & Reporting.Config.$Shape;
        static create(properties?: Reporting.Config.$Properties): Reporting.Config;

        /**
         * Encodes the specified Config message. Does not implicitly {@link Reporting.Config.verify|verify} messages.
         * @param message Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Reporting.Config.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Config message, length delimited. Does not implicitly {@link Reporting.Config.verify|verify} messages.
         * @param message Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Reporting.Config.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Reporting.Config & Reporting.Config.$Shape} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Reporting.Config & Reporting.Config.$Shape;

        /**
         * Decodes a Config message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Reporting.Config & Reporting.Config.$Shape} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Reporting.Config & Reporting.Config.$Shape;

        /**
         * Verifies a Config message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Config message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Config
         */
        static fromObject(object: { [k: string]: any }): Reporting.Config;

        /**
         * Creates a plain object from a Config message. Also converts values to other types if specified.
         * @param message Config
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Reporting.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Config to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Config
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Config {

        /** Properties of a Config. */
        interface $Properties {

            /** Config field */
            field?: ({ [k: string]: Reporting.Field.$Properties }|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Config. */
        type $Shape = Reporting.Config.$Properties;
    }
}

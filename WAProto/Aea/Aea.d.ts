import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace Aea. */
export namespace Aea {

    /**
     * Properties of a NonE2EEAttestation.
     * @deprecated Use Aea.NonE2EEAttestation.$Properties instead.
     */
    interface INonE2EEAttestation extends Aea.NonE2EEAttestation.$Properties {
    }

    /** Represents a NonE2EEAttestation. */
    class NonE2EEAttestation {

        /**
         * Constructs a new NonE2EEAttestation.
         * @param [properties] Properties to set
         */
        constructor(properties?: Aea.NonE2EEAttestation.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** NonE2EEAttestation accountType. */
        accountType?: (Aea.NonE2EEAttestation.AccountType|null);

        /**
         * Creates a new NonE2EEAttestation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NonE2EEAttestation instance
         */
        static create(properties: Aea.NonE2EEAttestation.$Shape): Aea.NonE2EEAttestation & Aea.NonE2EEAttestation.$Shape;
        static create(properties?: Aea.NonE2EEAttestation.$Properties): Aea.NonE2EEAttestation;

        /**
         * Encodes the specified NonE2EEAttestation message. Does not implicitly {@link Aea.NonE2EEAttestation.verify|verify} messages.
         * @param message NonE2EEAttestation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Aea.NonE2EEAttestation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NonE2EEAttestation message, length delimited. Does not implicitly {@link Aea.NonE2EEAttestation.verify|verify} messages.
         * @param message NonE2EEAttestation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Aea.NonE2EEAttestation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NonE2EEAttestation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Aea.NonE2EEAttestation & Aea.NonE2EEAttestation.$Shape} NonE2EEAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Aea.NonE2EEAttestation & Aea.NonE2EEAttestation.$Shape;

        /**
         * Decodes a NonE2EEAttestation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Aea.NonE2EEAttestation & Aea.NonE2EEAttestation.$Shape} NonE2EEAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Aea.NonE2EEAttestation & Aea.NonE2EEAttestation.$Shape;

        /**
         * Verifies a NonE2EEAttestation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NonE2EEAttestation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NonE2EEAttestation
         */
        static fromObject(object: { [k: string]: any }): Aea.NonE2EEAttestation;

        /**
         * Creates a plain object from a NonE2EEAttestation message. Also converts values to other types if specified.
         * @param message NonE2EEAttestation
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Aea.NonE2EEAttestation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NonE2EEAttestation to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for NonE2EEAttestation
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace NonE2EEAttestation {

        /** Properties of a NonE2EEAttestation. */
        interface $Properties {

            /** NonE2EEAttestation accountType */
            accountType?: (Aea.NonE2EEAttestation.AccountType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a NonE2EEAttestation. */
        type $Shape = Aea.NonE2EEAttestation.$Properties;

        /** AccountType enum. */
        enum AccountType {

            /** E2EE value */
            E2EE = 0,

            /** HYBRID_E2EE value */
            HYBRID_E2EE = 1,

            /** NON_E2EE value */
            NON_E2EE = 2
        }
    }
}

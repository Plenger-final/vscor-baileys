import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace LidMigrationSyncPayload. */
export namespace LidMigrationSyncPayload {

    /**
     * Properties of a LIDMigrationMappingSyncPayload.
     * @deprecated Use LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Properties instead.
     */
    interface ILIDMigrationMappingSyncPayload extends LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Properties {
    }

    /** Represents a LIDMigrationMappingSyncPayload. */
    class LIDMigrationMappingSyncPayload {

        /**
         * Constructs a new LIDMigrationMappingSyncPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LIDMigrationMappingSyncPayload pnToLidMappings. */
        pnToLidMappings: LidMigrationSyncPayload.LIDMigrationMapping.$Properties[];

        /** LIDMigrationMappingSyncPayload chatDbMigrationTimestamp. */
        chatDbMigrationTimestamp?: (number|Long|null);

        /**
         * Creates a new LIDMigrationMappingSyncPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LIDMigrationMappingSyncPayload instance
         */
        static create(properties: LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Shape): LidMigrationSyncPayload.LIDMigrationMappingSyncPayload & LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Shape;
        static create(properties?: LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Properties): LidMigrationSyncPayload.LIDMigrationMappingSyncPayload;

        /**
         * Encodes the specified LIDMigrationMappingSyncPayload message. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.verify|verify} messages.
         * @param message LIDMigrationMappingSyncPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LIDMigrationMappingSyncPayload message, length delimited. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.verify|verify} messages.
         * @param message LIDMigrationMappingSyncPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LIDMigrationMappingSyncPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {LidMigrationSyncPayload.LIDMigrationMappingSyncPayload & LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Shape} LIDMigrationMappingSyncPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LidMigrationSyncPayload.LIDMigrationMappingSyncPayload & LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Shape;

        /**
         * Decodes a LIDMigrationMappingSyncPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {LidMigrationSyncPayload.LIDMigrationMappingSyncPayload & LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Shape} LIDMigrationMappingSyncPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LidMigrationSyncPayload.LIDMigrationMappingSyncPayload & LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Shape;

        /**
         * Verifies a LIDMigrationMappingSyncPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LIDMigrationMappingSyncPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LIDMigrationMappingSyncPayload
         */
        static fromObject(object: { [k: string]: any }): LidMigrationSyncPayload.LIDMigrationMappingSyncPayload;

        /**
         * Creates a plain object from a LIDMigrationMappingSyncPayload message. Also converts values to other types if specified.
         * @param message LIDMigrationMappingSyncPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: LidMigrationSyncPayload.LIDMigrationMappingSyncPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LIDMigrationMappingSyncPayload to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LIDMigrationMappingSyncPayload
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LIDMigrationMappingSyncPayload {

        /** Properties of a LIDMigrationMappingSyncPayload. */
        interface $Properties {

            /** LIDMigrationMappingSyncPayload pnToLidMappings */
            pnToLidMappings?: (LidMigrationSyncPayload.LIDMigrationMapping.$Properties[]|null);

            /** LIDMigrationMappingSyncPayload chatDbMigrationTimestamp */
            chatDbMigrationTimestamp?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LIDMigrationMappingSyncPayload. */
        type $Shape = LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.$Properties;
    }

    /**
     * Properties of a LIDMigrationMapping.
     * @deprecated Use LidMigrationSyncPayload.LIDMigrationMapping.$Properties instead.
     */
    interface ILIDMigrationMapping extends LidMigrationSyncPayload.LIDMigrationMapping.$Properties {
    }

    /** Represents a LIDMigrationMapping. */
    class LIDMigrationMapping {

        /**
         * Constructs a new LIDMigrationMapping.
         * @param [properties] Properties to set
         */
        constructor(properties?: LidMigrationSyncPayload.LIDMigrationMapping.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LIDMigrationMapping pn. */
        pn?: (number|Long|null);

        /** LIDMigrationMapping assignedLid. */
        assignedLid?: (number|Long|null);

        /** LIDMigrationMapping latestLid. */
        latestLid?: (number|Long|null);

        /**
         * Creates a new LIDMigrationMapping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LIDMigrationMapping instance
         */
        static create(properties: LidMigrationSyncPayload.LIDMigrationMapping.$Shape): LidMigrationSyncPayload.LIDMigrationMapping & LidMigrationSyncPayload.LIDMigrationMapping.$Shape;
        static create(properties?: LidMigrationSyncPayload.LIDMigrationMapping.$Properties): LidMigrationSyncPayload.LIDMigrationMapping;

        /**
         * Encodes the specified LIDMigrationMapping message. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMapping.verify|verify} messages.
         * @param message LIDMigrationMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: LidMigrationSyncPayload.LIDMigrationMapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LIDMigrationMapping message, length delimited. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMapping.verify|verify} messages.
         * @param message LIDMigrationMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: LidMigrationSyncPayload.LIDMigrationMapping.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LIDMigrationMapping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {LidMigrationSyncPayload.LIDMigrationMapping & LidMigrationSyncPayload.LIDMigrationMapping.$Shape} LIDMigrationMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LidMigrationSyncPayload.LIDMigrationMapping & LidMigrationSyncPayload.LIDMigrationMapping.$Shape;

        /**
         * Decodes a LIDMigrationMapping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {LidMigrationSyncPayload.LIDMigrationMapping & LidMigrationSyncPayload.LIDMigrationMapping.$Shape} LIDMigrationMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LidMigrationSyncPayload.LIDMigrationMapping & LidMigrationSyncPayload.LIDMigrationMapping.$Shape;

        /**
         * Verifies a LIDMigrationMapping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LIDMigrationMapping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LIDMigrationMapping
         */
        static fromObject(object: { [k: string]: any }): LidMigrationSyncPayload.LIDMigrationMapping;

        /**
         * Creates a plain object from a LIDMigrationMapping message. Also converts values to other types if specified.
         * @param message LIDMigrationMapping
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: LidMigrationSyncPayload.LIDMigrationMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LIDMigrationMapping to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LIDMigrationMapping
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LIDMigrationMapping {

        /** Properties of a LIDMigrationMapping. */
        interface $Properties {

            /** LIDMigrationMapping pn */
            pn?: (number|Long|null);

            /** LIDMigrationMapping assignedLid */
            assignedLid?: (number|Long|null);

            /** LIDMigrationMapping latestLid */
            latestLid?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LIDMigrationMapping. */
        type $Shape = LidMigrationSyncPayload.LIDMigrationMapping.$Properties;
    }
}

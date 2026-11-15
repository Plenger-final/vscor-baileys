import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace Adv. */
export namespace Adv {

    /**
     * Properties of a ADVSignedDeviceIdentityHMAC.
     * @deprecated Use Adv.ADVSignedDeviceIdentityHMAC.$Properties instead.
     */
    interface IADVSignedDeviceIdentityHMAC extends Adv.ADVSignedDeviceIdentityHMAC.$Properties {
    }

    /** Represents a ADVSignedDeviceIdentityHMAC. */
    class ADVSignedDeviceIdentityHMAC {

        /**
         * Constructs a new ADVSignedDeviceIdentityHMAC.
         * @param [properties] Properties to set
         */
        constructor(properties?: Adv.ADVSignedDeviceIdentityHMAC.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ADVSignedDeviceIdentityHMAC details. */
        details?: (Uint8Array|null);

        /** ADVSignedDeviceIdentityHMAC hmac. */
        hmac?: (Uint8Array|null);

        /** ADVSignedDeviceIdentityHMAC accountType. */
        accountType?: (Adv.ADVEncryptionType|null);

        /**
         * Creates a new ADVSignedDeviceIdentityHMAC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedDeviceIdentityHMAC instance
         */
        static create(properties: Adv.ADVSignedDeviceIdentityHMAC.$Shape): Adv.ADVSignedDeviceIdentityHMAC & Adv.ADVSignedDeviceIdentityHMAC.$Shape;
        static create(properties?: Adv.ADVSignedDeviceIdentityHMAC.$Properties): Adv.ADVSignedDeviceIdentityHMAC;

        /**
         * Encodes the specified ADVSignedDeviceIdentityHMAC message. Does not implicitly {@link Adv.ADVSignedDeviceIdentityHMAC.verify|verify} messages.
         * @param message ADVSignedDeviceIdentityHMAC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Adv.ADVSignedDeviceIdentityHMAC.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedDeviceIdentityHMAC message, length delimited. Does not implicitly {@link Adv.ADVSignedDeviceIdentityHMAC.verify|verify} messages.
         * @param message ADVSignedDeviceIdentityHMAC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Adv.ADVSignedDeviceIdentityHMAC.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedDeviceIdentityHMAC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Adv.ADVSignedDeviceIdentityHMAC & Adv.ADVSignedDeviceIdentityHMAC.$Shape} ADVSignedDeviceIdentityHMAC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Adv.ADVSignedDeviceIdentityHMAC & Adv.ADVSignedDeviceIdentityHMAC.$Shape;

        /**
         * Decodes a ADVSignedDeviceIdentityHMAC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Adv.ADVSignedDeviceIdentityHMAC & Adv.ADVSignedDeviceIdentityHMAC.$Shape} ADVSignedDeviceIdentityHMAC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Adv.ADVSignedDeviceIdentityHMAC & Adv.ADVSignedDeviceIdentityHMAC.$Shape;

        /**
         * Verifies a ADVSignedDeviceIdentityHMAC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedDeviceIdentityHMAC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedDeviceIdentityHMAC
         */
        static fromObject(object: { [k: string]: any }): Adv.ADVSignedDeviceIdentityHMAC;

        /**
         * Creates a plain object from a ADVSignedDeviceIdentityHMAC message. Also converts values to other types if specified.
         * @param message ADVSignedDeviceIdentityHMAC
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Adv.ADVSignedDeviceIdentityHMAC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedDeviceIdentityHMAC to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ADVSignedDeviceIdentityHMAC
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ADVSignedDeviceIdentityHMAC {

        /** Properties of a ADVSignedDeviceIdentityHMAC. */
        interface $Properties {

            /** ADVSignedDeviceIdentityHMAC details */
            details?: (Uint8Array|null);

            /** ADVSignedDeviceIdentityHMAC hmac */
            hmac?: (Uint8Array|null);

            /** ADVSignedDeviceIdentityHMAC accountType */
            accountType?: (Adv.ADVEncryptionType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ADVSignedDeviceIdentityHMAC. */
        type $Shape = Adv.ADVSignedDeviceIdentityHMAC.$Properties;
    }

    /**
     * Properties of a ADVSignedDeviceIdentity.
     * @deprecated Use Adv.ADVSignedDeviceIdentity.$Properties instead.
     */
    interface IADVSignedDeviceIdentity extends Adv.ADVSignedDeviceIdentity.$Properties {
    }

    /** Represents a ADVSignedDeviceIdentity. */
    class ADVSignedDeviceIdentity {

        /**
         * Constructs a new ADVSignedDeviceIdentity.
         * @param [properties] Properties to set
         */
        constructor(properties?: Adv.ADVSignedDeviceIdentity.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ADVSignedDeviceIdentity details. */
        details?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity accountSignatureKey. */
        accountSignatureKey?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity accountSignature. */
        accountSignature?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity deviceSignature. */
        deviceSignature?: (Uint8Array|null);

        /**
         * Creates a new ADVSignedDeviceIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedDeviceIdentity instance
         */
        static create(properties: Adv.ADVSignedDeviceIdentity.$Shape): Adv.ADVSignedDeviceIdentity & Adv.ADVSignedDeviceIdentity.$Shape;
        static create(properties?: Adv.ADVSignedDeviceIdentity.$Properties): Adv.ADVSignedDeviceIdentity;

        /**
         * Encodes the specified ADVSignedDeviceIdentity message. Does not implicitly {@link Adv.ADVSignedDeviceIdentity.verify|verify} messages.
         * @param message ADVSignedDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Adv.ADVSignedDeviceIdentity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedDeviceIdentity message, length delimited. Does not implicitly {@link Adv.ADVSignedDeviceIdentity.verify|verify} messages.
         * @param message ADVSignedDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Adv.ADVSignedDeviceIdentity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedDeviceIdentity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Adv.ADVSignedDeviceIdentity & Adv.ADVSignedDeviceIdentity.$Shape} ADVSignedDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Adv.ADVSignedDeviceIdentity & Adv.ADVSignedDeviceIdentity.$Shape;

        /**
         * Decodes a ADVSignedDeviceIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Adv.ADVSignedDeviceIdentity & Adv.ADVSignedDeviceIdentity.$Shape} ADVSignedDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Adv.ADVSignedDeviceIdentity & Adv.ADVSignedDeviceIdentity.$Shape;

        /**
         * Verifies a ADVSignedDeviceIdentity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedDeviceIdentity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedDeviceIdentity
         */
        static fromObject(object: { [k: string]: any }): Adv.ADVSignedDeviceIdentity;

        /**
         * Creates a plain object from a ADVSignedDeviceIdentity message. Also converts values to other types if specified.
         * @param message ADVSignedDeviceIdentity
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Adv.ADVSignedDeviceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedDeviceIdentity to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ADVSignedDeviceIdentity
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ADVSignedDeviceIdentity {

        /** Properties of a ADVSignedDeviceIdentity. */
        interface $Properties {

            /** ADVSignedDeviceIdentity details */
            details?: (Uint8Array|null);

            /** ADVSignedDeviceIdentity accountSignatureKey */
            accountSignatureKey?: (Uint8Array|null);

            /** ADVSignedDeviceIdentity accountSignature */
            accountSignature?: (Uint8Array|null);

            /** ADVSignedDeviceIdentity deviceSignature */
            deviceSignature?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ADVSignedDeviceIdentity. */
        type $Shape = Adv.ADVSignedDeviceIdentity.$Properties;
    }

    /**
     * Properties of a ADVDeviceIdentity.
     * @deprecated Use Adv.ADVDeviceIdentity.$Properties instead.
     */
    interface IADVDeviceIdentity extends Adv.ADVDeviceIdentity.$Properties {
    }

    /** Represents a ADVDeviceIdentity. */
    class ADVDeviceIdentity {

        /**
         * Constructs a new ADVDeviceIdentity.
         * @param [properties] Properties to set
         */
        constructor(properties?: Adv.ADVDeviceIdentity.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ADVDeviceIdentity rawId. */
        rawId?: (number|null);

        /** ADVDeviceIdentity timestamp. */
        timestamp?: (number|Long|null);

        /** ADVDeviceIdentity keyIndex. */
        keyIndex?: (number|null);

        /** ADVDeviceIdentity accountType. */
        accountType?: (Adv.ADVEncryptionType|null);

        /** ADVDeviceIdentity deviceType. */
        deviceType?: (Adv.ADVEncryptionType|null);

        /**
         * Creates a new ADVDeviceIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVDeviceIdentity instance
         */
        static create(properties: Adv.ADVDeviceIdentity.$Shape): Adv.ADVDeviceIdentity & Adv.ADVDeviceIdentity.$Shape;
        static create(properties?: Adv.ADVDeviceIdentity.$Properties): Adv.ADVDeviceIdentity;

        /**
         * Encodes the specified ADVDeviceIdentity message. Does not implicitly {@link Adv.ADVDeviceIdentity.verify|verify} messages.
         * @param message ADVDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Adv.ADVDeviceIdentity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVDeviceIdentity message, length delimited. Does not implicitly {@link Adv.ADVDeviceIdentity.verify|verify} messages.
         * @param message ADVDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Adv.ADVDeviceIdentity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVDeviceIdentity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Adv.ADVDeviceIdentity & Adv.ADVDeviceIdentity.$Shape} ADVDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Adv.ADVDeviceIdentity & Adv.ADVDeviceIdentity.$Shape;

        /**
         * Decodes a ADVDeviceIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Adv.ADVDeviceIdentity & Adv.ADVDeviceIdentity.$Shape} ADVDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Adv.ADVDeviceIdentity & Adv.ADVDeviceIdentity.$Shape;

        /**
         * Verifies a ADVDeviceIdentity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVDeviceIdentity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVDeviceIdentity
         */
        static fromObject(object: { [k: string]: any }): Adv.ADVDeviceIdentity;

        /**
         * Creates a plain object from a ADVDeviceIdentity message. Also converts values to other types if specified.
         * @param message ADVDeviceIdentity
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Adv.ADVDeviceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVDeviceIdentity to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ADVDeviceIdentity
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ADVDeviceIdentity {

        /** Properties of a ADVDeviceIdentity. */
        interface $Properties {

            /** ADVDeviceIdentity rawId */
            rawId?: (number|null);

            /** ADVDeviceIdentity timestamp */
            timestamp?: (number|Long|null);

            /** ADVDeviceIdentity keyIndex */
            keyIndex?: (number|null);

            /** ADVDeviceIdentity accountType */
            accountType?: (Adv.ADVEncryptionType|null);

            /** ADVDeviceIdentity deviceType */
            deviceType?: (Adv.ADVEncryptionType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ADVDeviceIdentity. */
        type $Shape = Adv.ADVDeviceIdentity.$Properties;
    }

    /**
     * Properties of a ADVSignedKeyIndexList.
     * @deprecated Use Adv.ADVSignedKeyIndexList.$Properties instead.
     */
    interface IADVSignedKeyIndexList extends Adv.ADVSignedKeyIndexList.$Properties {
    }

    /** Represents a ADVSignedKeyIndexList. */
    class ADVSignedKeyIndexList {

        /**
         * Constructs a new ADVSignedKeyIndexList.
         * @param [properties] Properties to set
         */
        constructor(properties?: Adv.ADVSignedKeyIndexList.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ADVSignedKeyIndexList details. */
        details?: (Uint8Array|null);

        /** ADVSignedKeyIndexList accountSignature. */
        accountSignature?: (Uint8Array|null);

        /** ADVSignedKeyIndexList accountSignatureKey. */
        accountSignatureKey?: (Uint8Array|null);

        /**
         * Creates a new ADVSignedKeyIndexList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedKeyIndexList instance
         */
        static create(properties: Adv.ADVSignedKeyIndexList.$Shape): Adv.ADVSignedKeyIndexList & Adv.ADVSignedKeyIndexList.$Shape;
        static create(properties?: Adv.ADVSignedKeyIndexList.$Properties): Adv.ADVSignedKeyIndexList;

        /**
         * Encodes the specified ADVSignedKeyIndexList message. Does not implicitly {@link Adv.ADVSignedKeyIndexList.verify|verify} messages.
         * @param message ADVSignedKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Adv.ADVSignedKeyIndexList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedKeyIndexList message, length delimited. Does not implicitly {@link Adv.ADVSignedKeyIndexList.verify|verify} messages.
         * @param message ADVSignedKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Adv.ADVSignedKeyIndexList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedKeyIndexList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Adv.ADVSignedKeyIndexList & Adv.ADVSignedKeyIndexList.$Shape} ADVSignedKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Adv.ADVSignedKeyIndexList & Adv.ADVSignedKeyIndexList.$Shape;

        /**
         * Decodes a ADVSignedKeyIndexList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Adv.ADVSignedKeyIndexList & Adv.ADVSignedKeyIndexList.$Shape} ADVSignedKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Adv.ADVSignedKeyIndexList & Adv.ADVSignedKeyIndexList.$Shape;

        /**
         * Verifies a ADVSignedKeyIndexList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedKeyIndexList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedKeyIndexList
         */
        static fromObject(object: { [k: string]: any }): Adv.ADVSignedKeyIndexList;

        /**
         * Creates a plain object from a ADVSignedKeyIndexList message. Also converts values to other types if specified.
         * @param message ADVSignedKeyIndexList
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Adv.ADVSignedKeyIndexList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedKeyIndexList to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ADVSignedKeyIndexList
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ADVSignedKeyIndexList {

        /** Properties of a ADVSignedKeyIndexList. */
        interface $Properties {

            /** ADVSignedKeyIndexList details */
            details?: (Uint8Array|null);

            /** ADVSignedKeyIndexList accountSignature */
            accountSignature?: (Uint8Array|null);

            /** ADVSignedKeyIndexList accountSignatureKey */
            accountSignatureKey?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ADVSignedKeyIndexList. */
        type $Shape = Adv.ADVSignedKeyIndexList.$Properties;
    }

    /**
     * Properties of a ADVKeyIndexList.
     * @deprecated Use Adv.ADVKeyIndexList.$Properties instead.
     */
    interface IADVKeyIndexList extends Adv.ADVKeyIndexList.$Properties {
    }

    /** Represents a ADVKeyIndexList. */
    class ADVKeyIndexList {

        /**
         * Constructs a new ADVKeyIndexList.
         * @param [properties] Properties to set
         */
        constructor(properties?: Adv.ADVKeyIndexList.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ADVKeyIndexList rawId. */
        rawId?: (number|null);

        /** ADVKeyIndexList timestamp. */
        timestamp?: (number|Long|null);

        /** ADVKeyIndexList currentIndex. */
        currentIndex?: (number|null);

        /** ADVKeyIndexList validIndexes. */
        validIndexes: number[];

        /** ADVKeyIndexList accountType. */
        accountType?: (Adv.ADVEncryptionType|null);

        /**
         * Creates a new ADVKeyIndexList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVKeyIndexList instance
         */
        static create(properties: Adv.ADVKeyIndexList.$Shape): Adv.ADVKeyIndexList & Adv.ADVKeyIndexList.$Shape;
        static create(properties?: Adv.ADVKeyIndexList.$Properties): Adv.ADVKeyIndexList;

        /**
         * Encodes the specified ADVKeyIndexList message. Does not implicitly {@link Adv.ADVKeyIndexList.verify|verify} messages.
         * @param message ADVKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Adv.ADVKeyIndexList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVKeyIndexList message, length delimited. Does not implicitly {@link Adv.ADVKeyIndexList.verify|verify} messages.
         * @param message ADVKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Adv.ADVKeyIndexList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVKeyIndexList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Adv.ADVKeyIndexList & Adv.ADVKeyIndexList.$Shape} ADVKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Adv.ADVKeyIndexList & Adv.ADVKeyIndexList.$Shape;

        /**
         * Decodes a ADVKeyIndexList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Adv.ADVKeyIndexList & Adv.ADVKeyIndexList.$Shape} ADVKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Adv.ADVKeyIndexList & Adv.ADVKeyIndexList.$Shape;

        /**
         * Verifies a ADVKeyIndexList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVKeyIndexList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVKeyIndexList
         */
        static fromObject(object: { [k: string]: any }): Adv.ADVKeyIndexList;

        /**
         * Creates a plain object from a ADVKeyIndexList message. Also converts values to other types if specified.
         * @param message ADVKeyIndexList
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Adv.ADVKeyIndexList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVKeyIndexList to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ADVKeyIndexList
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ADVKeyIndexList {

        /** Properties of a ADVKeyIndexList. */
        interface $Properties {

            /** ADVKeyIndexList rawId */
            rawId?: (number|null);

            /** ADVKeyIndexList timestamp */
            timestamp?: (number|Long|null);

            /** ADVKeyIndexList currentIndex */
            currentIndex?: (number|null);

            /** ADVKeyIndexList validIndexes */
            validIndexes?: (number[]|null);

            /** ADVKeyIndexList accountType */
            accountType?: (Adv.ADVEncryptionType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ADVKeyIndexList. */
        type $Shape = Adv.ADVKeyIndexList.$Properties;
    }

    /** ADVEncryptionType enum. */
    enum ADVEncryptionType {

        /** E2EE value */
        E2EE = 0,

        /** HOSTED value */
        HOSTED = 1,

        /** NON_E2EE value */
        NON_E2EE = 2
    }
}

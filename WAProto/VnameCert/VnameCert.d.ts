import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace VnameCert. */
export namespace VnameCert {

    /**
     * Properties of a BizIdentityInfo.
     * @deprecated Use VnameCert.BizIdentityInfo.$Properties instead.
     */
    interface IBizIdentityInfo extends VnameCert.BizIdentityInfo.$Properties {
    }

    /** Represents a BizIdentityInfo. */
    class BizIdentityInfo {

        /**
         * Constructs a new BizIdentityInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: VnameCert.BizIdentityInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BizIdentityInfo vlevel. */
        vlevel?: (VnameCert.BizIdentityInfo.VerifiedLevelValue|null);

        /** BizIdentityInfo vnameCert. */
        vnameCert?: (VnameCert.VerifiedNameCertificate.$Properties|null);

        /** BizIdentityInfo signed. */
        signed?: (boolean|null);

        /** BizIdentityInfo revoked. */
        revoked?: (boolean|null);

        /** BizIdentityInfo hostStorage. */
        hostStorage?: (VnameCert.BizIdentityInfo.HostStorageType|null);

        /** BizIdentityInfo actualActors. */
        actualActors?: (VnameCert.BizIdentityInfo.ActualActorsType|null);

        /** BizIdentityInfo privacyModeTs. */
        privacyModeTs?: (number|Long|null);

        /** BizIdentityInfo featureControls. */
        featureControls?: (number|Long|null);

        /**
         * Creates a new BizIdentityInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BizIdentityInfo instance
         */
        static create(properties: VnameCert.BizIdentityInfo.$Shape): VnameCert.BizIdentityInfo & VnameCert.BizIdentityInfo.$Shape;
        static create(properties?: VnameCert.BizIdentityInfo.$Properties): VnameCert.BizIdentityInfo;

        /**
         * Encodes the specified BizIdentityInfo message. Does not implicitly {@link VnameCert.BizIdentityInfo.verify|verify} messages.
         * @param message BizIdentityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: VnameCert.BizIdentityInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BizIdentityInfo message, length delimited. Does not implicitly {@link VnameCert.BizIdentityInfo.verify|verify} messages.
         * @param message BizIdentityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: VnameCert.BizIdentityInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BizIdentityInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {VnameCert.BizIdentityInfo & VnameCert.BizIdentityInfo.$Shape} BizIdentityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VnameCert.BizIdentityInfo & VnameCert.BizIdentityInfo.$Shape;

        /**
         * Decodes a BizIdentityInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {VnameCert.BizIdentityInfo & VnameCert.BizIdentityInfo.$Shape} BizIdentityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VnameCert.BizIdentityInfo & VnameCert.BizIdentityInfo.$Shape;

        /**
         * Verifies a BizIdentityInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BizIdentityInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BizIdentityInfo
         */
        static fromObject(object: { [k: string]: any }): VnameCert.BizIdentityInfo;

        /**
         * Creates a plain object from a BizIdentityInfo message. Also converts values to other types if specified.
         * @param message BizIdentityInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: VnameCert.BizIdentityInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BizIdentityInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BizIdentityInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BizIdentityInfo {

        /** Properties of a BizIdentityInfo. */
        interface $Properties {

            /** BizIdentityInfo vlevel */
            vlevel?: (VnameCert.BizIdentityInfo.VerifiedLevelValue|null);

            /** BizIdentityInfo vnameCert */
            vnameCert?: (VnameCert.VerifiedNameCertificate.$Properties|null);

            /** BizIdentityInfo signed */
            signed?: (boolean|null);

            /** BizIdentityInfo revoked */
            revoked?: (boolean|null);

            /** BizIdentityInfo hostStorage */
            hostStorage?: (VnameCert.BizIdentityInfo.HostStorageType|null);

            /** BizIdentityInfo actualActors */
            actualActors?: (VnameCert.BizIdentityInfo.ActualActorsType|null);

            /** BizIdentityInfo privacyModeTs */
            privacyModeTs?: (number|Long|null);

            /** BizIdentityInfo featureControls */
            featureControls?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BizIdentityInfo. */
        type $Shape = VnameCert.BizIdentityInfo.$Properties;

        /** ActualActorsType enum. */
        enum ActualActorsType {

            /** SELF value */
            SELF = 0,

            /** BSP value */
            BSP = 1
        }

        /** HostStorageType enum. */
        enum HostStorageType {

            /** ON_PREMISE value */
            ON_PREMISE = 0,

            /** FACEBOOK value */
            FACEBOOK = 1
        }

        /** VerifiedLevelValue enum. */
        enum VerifiedLevelValue {

            /** UNKNOWN value */
            UNKNOWN = 0,

            /** LOW value */
            LOW = 1,

            /** HIGH value */
            HIGH = 2
        }
    }

    /**
     * Properties of a BizAccountLinkInfo.
     * @deprecated Use VnameCert.BizAccountLinkInfo.$Properties instead.
     */
    interface IBizAccountLinkInfo extends VnameCert.BizAccountLinkInfo.$Properties {
    }

    /** Represents a BizAccountLinkInfo. */
    class BizAccountLinkInfo {

        /**
         * Constructs a new BizAccountLinkInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: VnameCert.BizAccountLinkInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BizAccountLinkInfo whatsappBizAcctFbid. */
        whatsappBizAcctFbid?: (number|Long|null);

        /** BizAccountLinkInfo whatsappAcctNumber. */
        whatsappAcctNumber?: (string|null);

        /** BizAccountLinkInfo issueTime. */
        issueTime?: (number|Long|null);

        /** BizAccountLinkInfo hostStorage. */
        hostStorage?: (VnameCert.BizAccountLinkInfo.HostStorageType|null);

        /** BizAccountLinkInfo accountType. */
        accountType?: (VnameCert.BizAccountLinkInfo.AccountType|null);

        /** BizAccountLinkInfo whatsappAcctEmail. */
        whatsappAcctEmail?: (string|null);

        /**
         * Creates a new BizAccountLinkInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BizAccountLinkInfo instance
         */
        static create(properties: VnameCert.BizAccountLinkInfo.$Shape): VnameCert.BizAccountLinkInfo & VnameCert.BizAccountLinkInfo.$Shape;
        static create(properties?: VnameCert.BizAccountLinkInfo.$Properties): VnameCert.BizAccountLinkInfo;

        /**
         * Encodes the specified BizAccountLinkInfo message. Does not implicitly {@link VnameCert.BizAccountLinkInfo.verify|verify} messages.
         * @param message BizAccountLinkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: VnameCert.BizAccountLinkInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BizAccountLinkInfo message, length delimited. Does not implicitly {@link VnameCert.BizAccountLinkInfo.verify|verify} messages.
         * @param message BizAccountLinkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: VnameCert.BizAccountLinkInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BizAccountLinkInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {VnameCert.BizAccountLinkInfo & VnameCert.BizAccountLinkInfo.$Shape} BizAccountLinkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VnameCert.BizAccountLinkInfo & VnameCert.BizAccountLinkInfo.$Shape;

        /**
         * Decodes a BizAccountLinkInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {VnameCert.BizAccountLinkInfo & VnameCert.BizAccountLinkInfo.$Shape} BizAccountLinkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VnameCert.BizAccountLinkInfo & VnameCert.BizAccountLinkInfo.$Shape;

        /**
         * Verifies a BizAccountLinkInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BizAccountLinkInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BizAccountLinkInfo
         */
        static fromObject(object: { [k: string]: any }): VnameCert.BizAccountLinkInfo;

        /**
         * Creates a plain object from a BizAccountLinkInfo message. Also converts values to other types if specified.
         * @param message BizAccountLinkInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: VnameCert.BizAccountLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BizAccountLinkInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BizAccountLinkInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BizAccountLinkInfo {

        /** Properties of a BizAccountLinkInfo. */
        interface $Properties {

            /** BizAccountLinkInfo whatsappBizAcctFbid */
            whatsappBizAcctFbid?: (number|Long|null);

            /** BizAccountLinkInfo whatsappAcctNumber */
            whatsappAcctNumber?: (string|null);

            /** BizAccountLinkInfo issueTime */
            issueTime?: (number|Long|null);

            /** BizAccountLinkInfo hostStorage */
            hostStorage?: (VnameCert.BizAccountLinkInfo.HostStorageType|null);

            /** BizAccountLinkInfo accountType */
            accountType?: (VnameCert.BizAccountLinkInfo.AccountType|null);

            /** BizAccountLinkInfo whatsappAcctEmail */
            whatsappAcctEmail?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BizAccountLinkInfo. */
        type $Shape = VnameCert.BizAccountLinkInfo.$Properties;

        /** AccountType enum. */
        enum AccountType {

            /** ENTERPRISE value */
            ENTERPRISE = 0
        }

        /** HostStorageType enum. */
        enum HostStorageType {

            /** ON_PREMISE value */
            ON_PREMISE = 0,

            /** FACEBOOK value */
            FACEBOOK = 1
        }
    }

    /**
     * Properties of a BizAccountPayload.
     * @deprecated Use VnameCert.BizAccountPayload.$Properties instead.
     */
    interface IBizAccountPayload extends VnameCert.BizAccountPayload.$Properties {
    }

    /** Represents a BizAccountPayload. */
    class BizAccountPayload {

        /**
         * Constructs a new BizAccountPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: VnameCert.BizAccountPayload.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BizAccountPayload vnameCert. */
        vnameCert?: (VnameCert.VerifiedNameCertificate.$Properties|null);

        /** BizAccountPayload bizAcctLinkInfo. */
        bizAcctLinkInfo?: (Uint8Array|null);

        /**
         * Creates a new BizAccountPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BizAccountPayload instance
         */
        static create(properties: VnameCert.BizAccountPayload.$Shape): VnameCert.BizAccountPayload & VnameCert.BizAccountPayload.$Shape;
        static create(properties?: VnameCert.BizAccountPayload.$Properties): VnameCert.BizAccountPayload;

        /**
         * Encodes the specified BizAccountPayload message. Does not implicitly {@link VnameCert.BizAccountPayload.verify|verify} messages.
         * @param message BizAccountPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: VnameCert.BizAccountPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BizAccountPayload message, length delimited. Does not implicitly {@link VnameCert.BizAccountPayload.verify|verify} messages.
         * @param message BizAccountPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: VnameCert.BizAccountPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BizAccountPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {VnameCert.BizAccountPayload & VnameCert.BizAccountPayload.$Shape} BizAccountPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VnameCert.BizAccountPayload & VnameCert.BizAccountPayload.$Shape;

        /**
         * Decodes a BizAccountPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {VnameCert.BizAccountPayload & VnameCert.BizAccountPayload.$Shape} BizAccountPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VnameCert.BizAccountPayload & VnameCert.BizAccountPayload.$Shape;

        /**
         * Verifies a BizAccountPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BizAccountPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BizAccountPayload
         */
        static fromObject(object: { [k: string]: any }): VnameCert.BizAccountPayload;

        /**
         * Creates a plain object from a BizAccountPayload message. Also converts values to other types if specified.
         * @param message BizAccountPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: VnameCert.BizAccountPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BizAccountPayload to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BizAccountPayload
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BizAccountPayload {

        /** Properties of a BizAccountPayload. */
        interface $Properties {

            /** BizAccountPayload vnameCert */
            vnameCert?: (VnameCert.VerifiedNameCertificate.$Properties|null);

            /** BizAccountPayload bizAcctLinkInfo */
            bizAcctLinkInfo?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BizAccountPayload. */
        type $Shape = VnameCert.BizAccountPayload.$Properties;
    }

    /**
     * Properties of a VerifiedNameCertificate.
     * @deprecated Use VnameCert.VerifiedNameCertificate.$Properties instead.
     */
    interface IVerifiedNameCertificate extends VnameCert.VerifiedNameCertificate.$Properties {
    }

    /** Represents a VerifiedNameCertificate. */
    class VerifiedNameCertificate {

        /**
         * Constructs a new VerifiedNameCertificate.
         * @param [properties] Properties to set
         */
        constructor(properties?: VnameCert.VerifiedNameCertificate.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VerifiedNameCertificate details. */
        details?: (Uint8Array|null);

        /** VerifiedNameCertificate signature. */
        signature?: (Uint8Array|null);

        /** VerifiedNameCertificate serverSignature. */
        serverSignature?: (Uint8Array|null);

        /**
         * Creates a new VerifiedNameCertificate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifiedNameCertificate instance
         */
        static create(properties: VnameCert.VerifiedNameCertificate.$Shape): VnameCert.VerifiedNameCertificate & VnameCert.VerifiedNameCertificate.$Shape;
        static create(properties?: VnameCert.VerifiedNameCertificate.$Properties): VnameCert.VerifiedNameCertificate;

        /**
         * Encodes the specified VerifiedNameCertificate message. Does not implicitly {@link VnameCert.VerifiedNameCertificate.verify|verify} messages.
         * @param message VerifiedNameCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: VnameCert.VerifiedNameCertificate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifiedNameCertificate message, length delimited. Does not implicitly {@link VnameCert.VerifiedNameCertificate.verify|verify} messages.
         * @param message VerifiedNameCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: VnameCert.VerifiedNameCertificate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifiedNameCertificate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {VnameCert.VerifiedNameCertificate & VnameCert.VerifiedNameCertificate.$Shape} VerifiedNameCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VnameCert.VerifiedNameCertificate & VnameCert.VerifiedNameCertificate.$Shape;

        /**
         * Decodes a VerifiedNameCertificate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {VnameCert.VerifiedNameCertificate & VnameCert.VerifiedNameCertificate.$Shape} VerifiedNameCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VnameCert.VerifiedNameCertificate & VnameCert.VerifiedNameCertificate.$Shape;

        /**
         * Verifies a VerifiedNameCertificate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifiedNameCertificate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifiedNameCertificate
         */
        static fromObject(object: { [k: string]: any }): VnameCert.VerifiedNameCertificate;

        /**
         * Creates a plain object from a VerifiedNameCertificate message. Also converts values to other types if specified.
         * @param message VerifiedNameCertificate
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: VnameCert.VerifiedNameCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifiedNameCertificate to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VerifiedNameCertificate
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VerifiedNameCertificate {

        /** Properties of a VerifiedNameCertificate. */
        interface $Properties {

            /** VerifiedNameCertificate details */
            details?: (Uint8Array|null);

            /** VerifiedNameCertificate signature */
            signature?: (Uint8Array|null);

            /** VerifiedNameCertificate serverSignature */
            serverSignature?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VerifiedNameCertificate. */
        type $Shape = VnameCert.VerifiedNameCertificate.$Properties;

        /**
         * Properties of a Details.
         * @deprecated Use VnameCert.VerifiedNameCertificate.Details.$Properties instead.
         */
        interface IDetails extends VnameCert.VerifiedNameCertificate.Details.$Properties {
        }

        /** Represents a Details. */
        class Details {

            /**
             * Constructs a new Details.
             * @param [properties] Properties to set
             */
            constructor(properties?: VnameCert.VerifiedNameCertificate.Details.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Details serial. */
            serial?: (number|Long|null);

            /** Details issuer. */
            issuer?: (string|null);

            /** Details verifiedName. */
            verifiedName?: (string|null);

            /** Details localizedNames. */
            localizedNames: VnameCert.LocalizedName.$Properties[];

            /** Details issueTime. */
            issueTime?: (number|Long|null);

            /**
             * Creates a new Details instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Details instance
             */
            static create(properties: VnameCert.VerifiedNameCertificate.Details.$Shape): VnameCert.VerifiedNameCertificate.Details & VnameCert.VerifiedNameCertificate.Details.$Shape;
            static create(properties?: VnameCert.VerifiedNameCertificate.Details.$Properties): VnameCert.VerifiedNameCertificate.Details;

            /**
             * Encodes the specified Details message. Does not implicitly {@link VnameCert.VerifiedNameCertificate.Details.verify|verify} messages.
             * @param message Details message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: VnameCert.VerifiedNameCertificate.Details.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Details message, length delimited. Does not implicitly {@link VnameCert.VerifiedNameCertificate.Details.verify|verify} messages.
             * @param message Details message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: VnameCert.VerifiedNameCertificate.Details.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Details message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {VnameCert.VerifiedNameCertificate.Details & VnameCert.VerifiedNameCertificate.Details.$Shape} Details
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VnameCert.VerifiedNameCertificate.Details & VnameCert.VerifiedNameCertificate.Details.$Shape;

            /**
             * Decodes a Details message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {VnameCert.VerifiedNameCertificate.Details & VnameCert.VerifiedNameCertificate.Details.$Shape} Details
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VnameCert.VerifiedNameCertificate.Details & VnameCert.VerifiedNameCertificate.Details.$Shape;

            /**
             * Verifies a Details message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Details message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Details
             */
            static fromObject(object: { [k: string]: any }): VnameCert.VerifiedNameCertificate.Details;

            /**
             * Creates a plain object from a Details message. Also converts values to other types if specified.
             * @param message Details
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: VnameCert.VerifiedNameCertificate.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Details to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Details
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Details {

            /** Properties of a Details. */
            interface $Properties {

                /** Details serial */
                serial?: (number|Long|null);

                /** Details issuer */
                issuer?: (string|null);

                /** Details verifiedName */
                verifiedName?: (string|null);

                /** Details localizedNames */
                localizedNames?: (VnameCert.LocalizedName.$Properties[]|null);

                /** Details issueTime */
                issueTime?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Details. */
            type $Shape = VnameCert.VerifiedNameCertificate.Details.$Properties;
        }
    }

    /**
     * Properties of a LocalizedName.
     * @deprecated Use VnameCert.LocalizedName.$Properties instead.
     */
    interface ILocalizedName extends VnameCert.LocalizedName.$Properties {
    }

    /** Represents a LocalizedName. */
    class LocalizedName {

        /**
         * Constructs a new LocalizedName.
         * @param [properties] Properties to set
         */
        constructor(properties?: VnameCert.LocalizedName.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LocalizedName lg. */
        lg?: (string|null);

        /** LocalizedName lc. */
        lc?: (string|null);

        /** LocalizedName verifiedName. */
        verifiedName?: (string|null);

        /**
         * Creates a new LocalizedName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LocalizedName instance
         */
        static create(properties: VnameCert.LocalizedName.$Shape): VnameCert.LocalizedName & VnameCert.LocalizedName.$Shape;
        static create(properties?: VnameCert.LocalizedName.$Properties): VnameCert.LocalizedName;

        /**
         * Encodes the specified LocalizedName message. Does not implicitly {@link VnameCert.LocalizedName.verify|verify} messages.
         * @param message LocalizedName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: VnameCert.LocalizedName.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LocalizedName message, length delimited. Does not implicitly {@link VnameCert.LocalizedName.verify|verify} messages.
         * @param message LocalizedName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: VnameCert.LocalizedName.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LocalizedName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {VnameCert.LocalizedName & VnameCert.LocalizedName.$Shape} LocalizedName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VnameCert.LocalizedName & VnameCert.LocalizedName.$Shape;

        /**
         * Decodes a LocalizedName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {VnameCert.LocalizedName & VnameCert.LocalizedName.$Shape} LocalizedName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VnameCert.LocalizedName & VnameCert.LocalizedName.$Shape;

        /**
         * Verifies a LocalizedName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LocalizedName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LocalizedName
         */
        static fromObject(object: { [k: string]: any }): VnameCert.LocalizedName;

        /**
         * Creates a plain object from a LocalizedName message. Also converts values to other types if specified.
         * @param message LocalizedName
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: VnameCert.LocalizedName, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LocalizedName to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LocalizedName
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LocalizedName {

        /** Properties of a LocalizedName. */
        interface $Properties {

            /** LocalizedName lg */
            lg?: (string|null);

            /** LocalizedName lc */
            lc?: (string|null);

            /** LocalizedName verifiedName */
            verifiedName?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LocalizedName. */
        type $Shape = VnameCert.LocalizedName.$Properties;
    }
}

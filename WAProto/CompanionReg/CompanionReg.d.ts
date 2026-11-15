import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace CompanionReg. */
export namespace CompanionReg {

    /**
     * Properties of a ClientPairingProps.
     * @deprecated Use CompanionReg.ClientPairingProps.$Properties instead.
     */
    interface IClientPairingProps extends CompanionReg.ClientPairingProps.$Properties {
    }

    /** Represents a ClientPairingProps. */
    class ClientPairingProps {

        /**
         * Constructs a new ClientPairingProps.
         * @param [properties] Properties to set
         */
        constructor(properties?: CompanionReg.ClientPairingProps.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ClientPairingProps isChatDbLidMigrated. */
        isChatDbLidMigrated?: (boolean|null);

        /** ClientPairingProps isSyncdPureLidSession. */
        isSyncdPureLidSession?: (boolean|null);

        /** ClientPairingProps isSyncdSnapshotRecoveryEnabled. */
        isSyncdSnapshotRecoveryEnabled?: (boolean|null);

        /** ClientPairingProps isHsThumbnailSyncEnabled. */
        isHsThumbnailSyncEnabled?: (boolean|null);

        /** ClientPairingProps subscriptionSyncPayload. */
        subscriptionSyncPayload?: (Uint8Array|null);

        /** ClientPairingProps isBotJidDbMigrated. */
        isBotJidDbMigrated?: (boolean|null);

        /** ClientPairingProps companionAddPeerPayload. */
        companionAddPeerPayload?: (Uint8Array|null);

        /** ClientPairingProps isCompanionRegistrationFgsEnabled. */
        isCompanionRegistrationFgsEnabled?: (boolean|null);

        /**
         * Creates a new ClientPairingProps instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPairingProps instance
         */
        static create(properties: CompanionReg.ClientPairingProps.$Shape): CompanionReg.ClientPairingProps & CompanionReg.ClientPairingProps.$Shape;
        static create(properties?: CompanionReg.ClientPairingProps.$Properties): CompanionReg.ClientPairingProps;

        /**
         * Encodes the specified ClientPairingProps message. Does not implicitly {@link CompanionReg.ClientPairingProps.verify|verify} messages.
         * @param message ClientPairingProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: CompanionReg.ClientPairingProps.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientPairingProps message, length delimited. Does not implicitly {@link CompanionReg.ClientPairingProps.verify|verify} messages.
         * @param message ClientPairingProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: CompanionReg.ClientPairingProps.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPairingProps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {CompanionReg.ClientPairingProps & CompanionReg.ClientPairingProps.$Shape} ClientPairingProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CompanionReg.ClientPairingProps & CompanionReg.ClientPairingProps.$Shape;

        /**
         * Decodes a ClientPairingProps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {CompanionReg.ClientPairingProps & CompanionReg.ClientPairingProps.$Shape} ClientPairingProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CompanionReg.ClientPairingProps & CompanionReg.ClientPairingProps.$Shape;

        /**
         * Verifies a ClientPairingProps message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPairingProps message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPairingProps
         */
        static fromObject(object: { [k: string]: any }): CompanionReg.ClientPairingProps;

        /**
         * Creates a plain object from a ClientPairingProps message. Also converts values to other types if specified.
         * @param message ClientPairingProps
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: CompanionReg.ClientPairingProps, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPairingProps to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ClientPairingProps
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ClientPairingProps {

        /** Properties of a ClientPairingProps. */
        interface $Properties {

            /** ClientPairingProps isChatDbLidMigrated */
            isChatDbLidMigrated?: (boolean|null);

            /** ClientPairingProps isSyncdPureLidSession */
            isSyncdPureLidSession?: (boolean|null);

            /** ClientPairingProps isSyncdSnapshotRecoveryEnabled */
            isSyncdSnapshotRecoveryEnabled?: (boolean|null);

            /** ClientPairingProps isHsThumbnailSyncEnabled */
            isHsThumbnailSyncEnabled?: (boolean|null);

            /** ClientPairingProps subscriptionSyncPayload */
            subscriptionSyncPayload?: (Uint8Array|null);

            /** ClientPairingProps isBotJidDbMigrated */
            isBotJidDbMigrated?: (boolean|null);

            /** ClientPairingProps companionAddPeerPayload */
            companionAddPeerPayload?: (Uint8Array|null);

            /** ClientPairingProps isCompanionRegistrationFgsEnabled */
            isCompanionRegistrationFgsEnabled?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ClientPairingProps. */
        type $Shape = CompanionReg.ClientPairingProps.$Properties;
    }

    /**
     * Properties of an EncryptedPairingRequest.
     * @deprecated Use CompanionReg.EncryptedPairingRequest.$Properties instead.
     */
    interface IEncryptedPairingRequest extends CompanionReg.EncryptedPairingRequest.$Properties {
    }

    /** Represents an EncryptedPairingRequest. */
    class EncryptedPairingRequest {

        /**
         * Constructs a new EncryptedPairingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: CompanionReg.EncryptedPairingRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** EncryptedPairingRequest encryptedPayload. */
        encryptedPayload?: (Uint8Array|null);

        /** EncryptedPairingRequest iv. */
        iv?: (Uint8Array|null);

        /**
         * Creates a new EncryptedPairingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncryptedPairingRequest instance
         */
        static create(properties: CompanionReg.EncryptedPairingRequest.$Shape): CompanionReg.EncryptedPairingRequest & CompanionReg.EncryptedPairingRequest.$Shape;
        static create(properties?: CompanionReg.EncryptedPairingRequest.$Properties): CompanionReg.EncryptedPairingRequest;

        /**
         * Encodes the specified EncryptedPairingRequest message. Does not implicitly {@link CompanionReg.EncryptedPairingRequest.verify|verify} messages.
         * @param message EncryptedPairingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: CompanionReg.EncryptedPairingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncryptedPairingRequest message, length delimited. Does not implicitly {@link CompanionReg.EncryptedPairingRequest.verify|verify} messages.
         * @param message EncryptedPairingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: CompanionReg.EncryptedPairingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncryptedPairingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {CompanionReg.EncryptedPairingRequest & CompanionReg.EncryptedPairingRequest.$Shape} EncryptedPairingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CompanionReg.EncryptedPairingRequest & CompanionReg.EncryptedPairingRequest.$Shape;

        /**
         * Decodes an EncryptedPairingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {CompanionReg.EncryptedPairingRequest & CompanionReg.EncryptedPairingRequest.$Shape} EncryptedPairingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CompanionReg.EncryptedPairingRequest & CompanionReg.EncryptedPairingRequest.$Shape;

        /**
         * Verifies an EncryptedPairingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncryptedPairingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncryptedPairingRequest
         */
        static fromObject(object: { [k: string]: any }): CompanionReg.EncryptedPairingRequest;

        /**
         * Creates a plain object from an EncryptedPairingRequest message. Also converts values to other types if specified.
         * @param message EncryptedPairingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: CompanionReg.EncryptedPairingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncryptedPairingRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for EncryptedPairingRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace EncryptedPairingRequest {

        /** Properties of an EncryptedPairingRequest. */
        interface $Properties {

            /** EncryptedPairingRequest encryptedPayload */
            encryptedPayload?: (Uint8Array|null);

            /** EncryptedPairingRequest iv */
            iv?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an EncryptedPairingRequest. */
        type $Shape = CompanionReg.EncryptedPairingRequest.$Properties;
    }

    /**
     * Properties of a PairingRequest.
     * @deprecated Use CompanionReg.PairingRequest.$Properties instead.
     */
    interface IPairingRequest extends CompanionReg.PairingRequest.$Properties {
    }

    /** Represents a PairingRequest. */
    class PairingRequest {

        /**
         * Constructs a new PairingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: CompanionReg.PairingRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PairingRequest companionPublicKey. */
        companionPublicKey?: (Uint8Array|null);

        /** PairingRequest companionIdentityKey. */
        companionIdentityKey?: (Uint8Array|null);

        /** PairingRequest advSecret. */
        advSecret?: (Uint8Array|null);

        /**
         * Creates a new PairingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PairingRequest instance
         */
        static create(properties: CompanionReg.PairingRequest.$Shape): CompanionReg.PairingRequest & CompanionReg.PairingRequest.$Shape;
        static create(properties?: CompanionReg.PairingRequest.$Properties): CompanionReg.PairingRequest;

        /**
         * Encodes the specified PairingRequest message. Does not implicitly {@link CompanionReg.PairingRequest.verify|verify} messages.
         * @param message PairingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: CompanionReg.PairingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PairingRequest message, length delimited. Does not implicitly {@link CompanionReg.PairingRequest.verify|verify} messages.
         * @param message PairingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: CompanionReg.PairingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PairingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {CompanionReg.PairingRequest & CompanionReg.PairingRequest.$Shape} PairingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CompanionReg.PairingRequest & CompanionReg.PairingRequest.$Shape;

        /**
         * Decodes a PairingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {CompanionReg.PairingRequest & CompanionReg.PairingRequest.$Shape} PairingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CompanionReg.PairingRequest & CompanionReg.PairingRequest.$Shape;

        /**
         * Verifies a PairingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PairingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PairingRequest
         */
        static fromObject(object: { [k: string]: any }): CompanionReg.PairingRequest;

        /**
         * Creates a plain object from a PairingRequest message. Also converts values to other types if specified.
         * @param message PairingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: CompanionReg.PairingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PairingRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PairingRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PairingRequest {

        /** Properties of a PairingRequest. */
        interface $Properties {

            /** PairingRequest companionPublicKey */
            companionPublicKey?: (Uint8Array|null);

            /** PairingRequest companionIdentityKey */
            companionIdentityKey?: (Uint8Array|null);

            /** PairingRequest advSecret */
            advSecret?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PairingRequest. */
        type $Shape = CompanionReg.PairingRequest.$Properties;
    }

    /**
     * Properties of a PrimaryEphemeralIdentity.
     * @deprecated Use CompanionReg.PrimaryEphemeralIdentity.$Properties instead.
     */
    interface IPrimaryEphemeralIdentity extends CompanionReg.PrimaryEphemeralIdentity.$Properties {
    }

    /** Represents a PrimaryEphemeralIdentity. */
    class PrimaryEphemeralIdentity {

        /**
         * Constructs a new PrimaryEphemeralIdentity.
         * @param [properties] Properties to set
         */
        constructor(properties?: CompanionReg.PrimaryEphemeralIdentity.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PrimaryEphemeralIdentity publicKey. */
        publicKey?: (Uint8Array|null);

        /** PrimaryEphemeralIdentity nonce. */
        nonce?: (Uint8Array|null);

        /**
         * Creates a new PrimaryEphemeralIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrimaryEphemeralIdentity instance
         */
        static create(properties: CompanionReg.PrimaryEphemeralIdentity.$Shape): CompanionReg.PrimaryEphemeralIdentity & CompanionReg.PrimaryEphemeralIdentity.$Shape;
        static create(properties?: CompanionReg.PrimaryEphemeralIdentity.$Properties): CompanionReg.PrimaryEphemeralIdentity;

        /**
         * Encodes the specified PrimaryEphemeralIdentity message. Does not implicitly {@link CompanionReg.PrimaryEphemeralIdentity.verify|verify} messages.
         * @param message PrimaryEphemeralIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: CompanionReg.PrimaryEphemeralIdentity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrimaryEphemeralIdentity message, length delimited. Does not implicitly {@link CompanionReg.PrimaryEphemeralIdentity.verify|verify} messages.
         * @param message PrimaryEphemeralIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: CompanionReg.PrimaryEphemeralIdentity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrimaryEphemeralIdentity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {CompanionReg.PrimaryEphemeralIdentity & CompanionReg.PrimaryEphemeralIdentity.$Shape} PrimaryEphemeralIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CompanionReg.PrimaryEphemeralIdentity & CompanionReg.PrimaryEphemeralIdentity.$Shape;

        /**
         * Decodes a PrimaryEphemeralIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {CompanionReg.PrimaryEphemeralIdentity & CompanionReg.PrimaryEphemeralIdentity.$Shape} PrimaryEphemeralIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CompanionReg.PrimaryEphemeralIdentity & CompanionReg.PrimaryEphemeralIdentity.$Shape;

        /**
         * Verifies a PrimaryEphemeralIdentity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrimaryEphemeralIdentity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrimaryEphemeralIdentity
         */
        static fromObject(object: { [k: string]: any }): CompanionReg.PrimaryEphemeralIdentity;

        /**
         * Creates a plain object from a PrimaryEphemeralIdentity message. Also converts values to other types if specified.
         * @param message PrimaryEphemeralIdentity
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: CompanionReg.PrimaryEphemeralIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrimaryEphemeralIdentity to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PrimaryEphemeralIdentity
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PrimaryEphemeralIdentity {

        /** Properties of a PrimaryEphemeralIdentity. */
        interface $Properties {

            /** PrimaryEphemeralIdentity publicKey */
            publicKey?: (Uint8Array|null);

            /** PrimaryEphemeralIdentity nonce */
            nonce?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PrimaryEphemeralIdentity. */
        type $Shape = CompanionReg.PrimaryEphemeralIdentity.$Properties;
    }

    /**
     * Properties of a ProloguePayload.
     * @deprecated Use CompanionReg.ProloguePayload.$Properties instead.
     */
    interface IProloguePayload extends CompanionReg.ProloguePayload.$Properties {
    }

    /** Represents a ProloguePayload. */
    class ProloguePayload {

        /**
         * Constructs a new ProloguePayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: CompanionReg.ProloguePayload.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ProloguePayload companionEphemeralIdentity. */
        companionEphemeralIdentity?: (Uint8Array|null);

        /** ProloguePayload commitment. */
        commitment?: (CompanionReg.CompanionCommitment.$Properties|null);

        /**
         * Creates a new ProloguePayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProloguePayload instance
         */
        static create(properties: CompanionReg.ProloguePayload.$Shape): CompanionReg.ProloguePayload & CompanionReg.ProloguePayload.$Shape;
        static create(properties?: CompanionReg.ProloguePayload.$Properties): CompanionReg.ProloguePayload;

        /**
         * Encodes the specified ProloguePayload message. Does not implicitly {@link CompanionReg.ProloguePayload.verify|verify} messages.
         * @param message ProloguePayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: CompanionReg.ProloguePayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProloguePayload message, length delimited. Does not implicitly {@link CompanionReg.ProloguePayload.verify|verify} messages.
         * @param message ProloguePayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: CompanionReg.ProloguePayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProloguePayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {CompanionReg.ProloguePayload & CompanionReg.ProloguePayload.$Shape} ProloguePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CompanionReg.ProloguePayload & CompanionReg.ProloguePayload.$Shape;

        /**
         * Decodes a ProloguePayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {CompanionReg.ProloguePayload & CompanionReg.ProloguePayload.$Shape} ProloguePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CompanionReg.ProloguePayload & CompanionReg.ProloguePayload.$Shape;

        /**
         * Verifies a ProloguePayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProloguePayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProloguePayload
         */
        static fromObject(object: { [k: string]: any }): CompanionReg.ProloguePayload;

        /**
         * Creates a plain object from a ProloguePayload message. Also converts values to other types if specified.
         * @param message ProloguePayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: CompanionReg.ProloguePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProloguePayload to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ProloguePayload
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ProloguePayload {

        /** Properties of a ProloguePayload. */
        interface $Properties {

            /** ProloguePayload companionEphemeralIdentity */
            companionEphemeralIdentity?: (Uint8Array|null);

            /** ProloguePayload commitment */
            commitment?: (CompanionReg.CompanionCommitment.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ProloguePayload. */
        type $Shape = CompanionReg.ProloguePayload.$Properties;
    }

    /**
     * Properties of a CompanionCommitment.
     * @deprecated Use CompanionReg.CompanionCommitment.$Properties instead.
     */
    interface ICompanionCommitment extends CompanionReg.CompanionCommitment.$Properties {
    }

    /** Represents a CompanionCommitment. */
    class CompanionCommitment {

        /**
         * Constructs a new CompanionCommitment.
         * @param [properties] Properties to set
         */
        constructor(properties?: CompanionReg.CompanionCommitment.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CompanionCommitment hash. */
        hash?: (Uint8Array|null);

        /**
         * Creates a new CompanionCommitment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompanionCommitment instance
         */
        static create(properties: CompanionReg.CompanionCommitment.$Shape): CompanionReg.CompanionCommitment & CompanionReg.CompanionCommitment.$Shape;
        static create(properties?: CompanionReg.CompanionCommitment.$Properties): CompanionReg.CompanionCommitment;

        /**
         * Encodes the specified CompanionCommitment message. Does not implicitly {@link CompanionReg.CompanionCommitment.verify|verify} messages.
         * @param message CompanionCommitment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: CompanionReg.CompanionCommitment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CompanionCommitment message, length delimited. Does not implicitly {@link CompanionReg.CompanionCommitment.verify|verify} messages.
         * @param message CompanionCommitment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: CompanionReg.CompanionCommitment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompanionCommitment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {CompanionReg.CompanionCommitment & CompanionReg.CompanionCommitment.$Shape} CompanionCommitment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CompanionReg.CompanionCommitment & CompanionReg.CompanionCommitment.$Shape;

        /**
         * Decodes a CompanionCommitment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {CompanionReg.CompanionCommitment & CompanionReg.CompanionCommitment.$Shape} CompanionCommitment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CompanionReg.CompanionCommitment & CompanionReg.CompanionCommitment.$Shape;

        /**
         * Verifies a CompanionCommitment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CompanionCommitment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompanionCommitment
         */
        static fromObject(object: { [k: string]: any }): CompanionReg.CompanionCommitment;

        /**
         * Creates a plain object from a CompanionCommitment message. Also converts values to other types if specified.
         * @param message CompanionCommitment
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: CompanionReg.CompanionCommitment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompanionCommitment to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CompanionCommitment
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanionCommitment {

        /** Properties of a CompanionCommitment. */
        interface $Properties {

            /** CompanionCommitment hash */
            hash?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CompanionCommitment. */
        type $Shape = CompanionReg.CompanionCommitment.$Properties;
    }

    /**
     * Properties of a CompanionEphemeralIdentity.
     * @deprecated Use CompanionReg.CompanionEphemeralIdentity.$Properties instead.
     */
    interface ICompanionEphemeralIdentity extends CompanionReg.CompanionEphemeralIdentity.$Properties {
    }

    /** Represents a CompanionEphemeralIdentity. */
    class CompanionEphemeralIdentity {

        /**
         * Constructs a new CompanionEphemeralIdentity.
         * @param [properties] Properties to set
         */
        constructor(properties?: CompanionReg.CompanionEphemeralIdentity.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CompanionEphemeralIdentity publicKey. */
        publicKey?: (Uint8Array|null);

        /** CompanionEphemeralIdentity deviceType. */
        deviceType?: (CompanionReg.DeviceProps.PlatformType|null);

        /** CompanionEphemeralIdentity ref. */
        ref?: (string|null);

        /**
         * Creates a new CompanionEphemeralIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompanionEphemeralIdentity instance
         */
        static create(properties: CompanionReg.CompanionEphemeralIdentity.$Shape): CompanionReg.CompanionEphemeralIdentity & CompanionReg.CompanionEphemeralIdentity.$Shape;
        static create(properties?: CompanionReg.CompanionEphemeralIdentity.$Properties): CompanionReg.CompanionEphemeralIdentity;

        /**
         * Encodes the specified CompanionEphemeralIdentity message. Does not implicitly {@link CompanionReg.CompanionEphemeralIdentity.verify|verify} messages.
         * @param message CompanionEphemeralIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: CompanionReg.CompanionEphemeralIdentity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CompanionEphemeralIdentity message, length delimited. Does not implicitly {@link CompanionReg.CompanionEphemeralIdentity.verify|verify} messages.
         * @param message CompanionEphemeralIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: CompanionReg.CompanionEphemeralIdentity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompanionEphemeralIdentity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {CompanionReg.CompanionEphemeralIdentity & CompanionReg.CompanionEphemeralIdentity.$Shape} CompanionEphemeralIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CompanionReg.CompanionEphemeralIdentity & CompanionReg.CompanionEphemeralIdentity.$Shape;

        /**
         * Decodes a CompanionEphemeralIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {CompanionReg.CompanionEphemeralIdentity & CompanionReg.CompanionEphemeralIdentity.$Shape} CompanionEphemeralIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CompanionReg.CompanionEphemeralIdentity & CompanionReg.CompanionEphemeralIdentity.$Shape;

        /**
         * Verifies a CompanionEphemeralIdentity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CompanionEphemeralIdentity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompanionEphemeralIdentity
         */
        static fromObject(object: { [k: string]: any }): CompanionReg.CompanionEphemeralIdentity;

        /**
         * Creates a plain object from a CompanionEphemeralIdentity message. Also converts values to other types if specified.
         * @param message CompanionEphemeralIdentity
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: CompanionReg.CompanionEphemeralIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompanionEphemeralIdentity to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CompanionEphemeralIdentity
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanionEphemeralIdentity {

        /** Properties of a CompanionEphemeralIdentity. */
        interface $Properties {

            /** CompanionEphemeralIdentity publicKey */
            publicKey?: (Uint8Array|null);

            /** CompanionEphemeralIdentity deviceType */
            deviceType?: (CompanionReg.DeviceProps.PlatformType|null);

            /** CompanionEphemeralIdentity ref */
            ref?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CompanionEphemeralIdentity. */
        type $Shape = CompanionReg.CompanionEphemeralIdentity.$Properties;
    }

    /**
     * Properties of a DeviceProps.
     * @deprecated Use CompanionReg.DeviceProps.$Properties instead.
     */
    interface IDeviceProps extends CompanionReg.DeviceProps.$Properties {
    }

    /** Represents a DeviceProps. */
    class DeviceProps {

        /**
         * Constructs a new DeviceProps.
         * @param [properties] Properties to set
         */
        constructor(properties?: CompanionReg.DeviceProps.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DeviceProps os. */
        os?: (string|null);

        /** DeviceProps version. */
        version?: (CompanionReg.DeviceProps.AppVersion.$Properties|null);

        /** DeviceProps platformType. */
        platformType?: (CompanionReg.DeviceProps.PlatformType|null);

        /** DeviceProps requireFullSync. */
        requireFullSync?: (boolean|null);

        /** DeviceProps historySyncConfig. */
        historySyncConfig?: (CompanionReg.DeviceProps.HistorySyncConfig.$Properties|null);

        /** DeviceProps deviceName. */
        deviceName?: (string|null);

        /**
         * Creates a new DeviceProps instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceProps instance
         */
        static create(properties: CompanionReg.DeviceProps.$Shape): CompanionReg.DeviceProps & CompanionReg.DeviceProps.$Shape;
        static create(properties?: CompanionReg.DeviceProps.$Properties): CompanionReg.DeviceProps;

        /**
         * Encodes the specified DeviceProps message. Does not implicitly {@link CompanionReg.DeviceProps.verify|verify} messages.
         * @param message DeviceProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: CompanionReg.DeviceProps.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceProps message, length delimited. Does not implicitly {@link CompanionReg.DeviceProps.verify|verify} messages.
         * @param message DeviceProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: CompanionReg.DeviceProps.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceProps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {CompanionReg.DeviceProps & CompanionReg.DeviceProps.$Shape} DeviceProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CompanionReg.DeviceProps & CompanionReg.DeviceProps.$Shape;

        /**
         * Decodes a DeviceProps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {CompanionReg.DeviceProps & CompanionReg.DeviceProps.$Shape} DeviceProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CompanionReg.DeviceProps & CompanionReg.DeviceProps.$Shape;

        /**
         * Verifies a DeviceProps message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceProps message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceProps
         */
        static fromObject(object: { [k: string]: any }): CompanionReg.DeviceProps;

        /**
         * Creates a plain object from a DeviceProps message. Also converts values to other types if specified.
         * @param message DeviceProps
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: CompanionReg.DeviceProps, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceProps to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DeviceProps
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DeviceProps {

        /** Properties of a DeviceProps. */
        interface $Properties {

            /** DeviceProps os */
            os?: (string|null);

            /** DeviceProps version */
            version?: (CompanionReg.DeviceProps.AppVersion.$Properties|null);

            /** DeviceProps platformType */
            platformType?: (CompanionReg.DeviceProps.PlatformType|null);

            /** DeviceProps requireFullSync */
            requireFullSync?: (boolean|null);

            /** DeviceProps historySyncConfig */
            historySyncConfig?: (CompanionReg.DeviceProps.HistorySyncConfig.$Properties|null);

            /** DeviceProps deviceName */
            deviceName?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DeviceProps. */
        type $Shape = CompanionReg.DeviceProps.$Properties;

        /**
         * Properties of an AppVersion.
         * @deprecated Use CompanionReg.DeviceProps.AppVersion.$Properties instead.
         */
        interface IAppVersion extends CompanionReg.DeviceProps.AppVersion.$Properties {
        }

        /** Represents an AppVersion. */
        class AppVersion {

            /**
             * Constructs a new AppVersion.
             * @param [properties] Properties to set
             */
            constructor(properties?: CompanionReg.DeviceProps.AppVersion.$Properties);

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
            static create(properties: CompanionReg.DeviceProps.AppVersion.$Shape): CompanionReg.DeviceProps.AppVersion & CompanionReg.DeviceProps.AppVersion.$Shape;
            static create(properties?: CompanionReg.DeviceProps.AppVersion.$Properties): CompanionReg.DeviceProps.AppVersion;

            /**
             * Encodes the specified AppVersion message. Does not implicitly {@link CompanionReg.DeviceProps.AppVersion.verify|verify} messages.
             * @param message AppVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: CompanionReg.DeviceProps.AppVersion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppVersion message, length delimited. Does not implicitly {@link CompanionReg.DeviceProps.AppVersion.verify|verify} messages.
             * @param message AppVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: CompanionReg.DeviceProps.AppVersion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppVersion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {CompanionReg.DeviceProps.AppVersion & CompanionReg.DeviceProps.AppVersion.$Shape} AppVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CompanionReg.DeviceProps.AppVersion & CompanionReg.DeviceProps.AppVersion.$Shape;

            /**
             * Decodes an AppVersion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {CompanionReg.DeviceProps.AppVersion & CompanionReg.DeviceProps.AppVersion.$Shape} AppVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CompanionReg.DeviceProps.AppVersion & CompanionReg.DeviceProps.AppVersion.$Shape;

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
            static fromObject(object: { [k: string]: any }): CompanionReg.DeviceProps.AppVersion;

            /**
             * Creates a plain object from an AppVersion message. Also converts values to other types if specified.
             * @param message AppVersion
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: CompanionReg.DeviceProps.AppVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            type $Shape = CompanionReg.DeviceProps.AppVersion.$Properties;
        }

        /**
         * Properties of a HistorySyncConfig.
         * @deprecated Use CompanionReg.DeviceProps.HistorySyncConfig.$Properties instead.
         */
        interface IHistorySyncConfig extends CompanionReg.DeviceProps.HistorySyncConfig.$Properties {
        }

        /** Represents a HistorySyncConfig. */
        class HistorySyncConfig {

            /**
             * Constructs a new HistorySyncConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: CompanionReg.DeviceProps.HistorySyncConfig.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** HistorySyncConfig fullSyncDaysLimit. */
            fullSyncDaysLimit?: (number|null);

            /** HistorySyncConfig fullSyncSizeMbLimit. */
            fullSyncSizeMbLimit?: (number|null);

            /** HistorySyncConfig storageQuotaMb. */
            storageQuotaMb?: (number|null);

            /** HistorySyncConfig inlineInitialPayloadInE2EeMsg. */
            inlineInitialPayloadInE2EeMsg?: (boolean|null);

            /** HistorySyncConfig recentSyncDaysLimit. */
            recentSyncDaysLimit?: (number|null);

            /** HistorySyncConfig supportCallLogHistory. */
            supportCallLogHistory?: (boolean|null);

            /** HistorySyncConfig supportBotUserAgentChatHistory. */
            supportBotUserAgentChatHistory?: (boolean|null);

            /** HistorySyncConfig supportCagReactionsAndPolls. */
            supportCagReactionsAndPolls?: (boolean|null);

            /** HistorySyncConfig supportBizHostedMsg. */
            supportBizHostedMsg?: (boolean|null);

            /** HistorySyncConfig supportRecentSyncChunkMessageCountTuning. */
            supportRecentSyncChunkMessageCountTuning?: (boolean|null);

            /** HistorySyncConfig supportHostedGroupMsg. */
            supportHostedGroupMsg?: (boolean|null);

            /** HistorySyncConfig supportFbidBotChatHistory. */
            supportFbidBotChatHistory?: (boolean|null);

            /** HistorySyncConfig supportAddOnHistorySyncMigration. */
            supportAddOnHistorySyncMigration?: (boolean|null);

            /** HistorySyncConfig supportMessageAssociation. */
            supportMessageAssociation?: (boolean|null);

            /** HistorySyncConfig supportGroupHistory. */
            supportGroupHistory?: (boolean|null);

            /** HistorySyncConfig onDemandReady. */
            onDemandReady?: (boolean|null);

            /** HistorySyncConfig supportGuestChat. */
            supportGuestChat?: (boolean|null);

            /** HistorySyncConfig completeOnDemandReady. */
            completeOnDemandReady?: (boolean|null);

            /** HistorySyncConfig thumbnailSyncDaysLimit. */
            thumbnailSyncDaysLimit?: (number|null);

            /** HistorySyncConfig initialSyncMaxMessagesPerChat. */
            initialSyncMaxMessagesPerChat?: (number|null);

            /** HistorySyncConfig supportManusHistory. */
            supportManusHistory?: (boolean|null);

            /** HistorySyncConfig supportHatchHistory. */
            supportHatchHistory?: (boolean|null);

            /** HistorySyncConfig supportedBotChannelFbids. */
            supportedBotChannelFbids: string[];

            /** HistorySyncConfig supportInlineContacts. */
            supportInlineContacts?: (boolean|null);

            /** HistorySyncConfig supportNewsletter. */
            supportNewsletter?: (boolean|null);

            /** HistorySyncConfig supportUniversalReachChat. */
            supportUniversalReachChat?: (boolean|null);

            /** HistorySyncConfig supportOmittedConversationMetadata. */
            supportOmittedConversationMetadata?: (boolean|null);

            /**
             * Creates a new HistorySyncConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HistorySyncConfig instance
             */
            static create(properties: CompanionReg.DeviceProps.HistorySyncConfig.$Shape): CompanionReg.DeviceProps.HistorySyncConfig & CompanionReg.DeviceProps.HistorySyncConfig.$Shape;
            static create(properties?: CompanionReg.DeviceProps.HistorySyncConfig.$Properties): CompanionReg.DeviceProps.HistorySyncConfig;

            /**
             * Encodes the specified HistorySyncConfig message. Does not implicitly {@link CompanionReg.DeviceProps.HistorySyncConfig.verify|verify} messages.
             * @param message HistorySyncConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: CompanionReg.DeviceProps.HistorySyncConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HistorySyncConfig message, length delimited. Does not implicitly {@link CompanionReg.DeviceProps.HistorySyncConfig.verify|verify} messages.
             * @param message HistorySyncConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: CompanionReg.DeviceProps.HistorySyncConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HistorySyncConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {CompanionReg.DeviceProps.HistorySyncConfig & CompanionReg.DeviceProps.HistorySyncConfig.$Shape} HistorySyncConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CompanionReg.DeviceProps.HistorySyncConfig & CompanionReg.DeviceProps.HistorySyncConfig.$Shape;

            /**
             * Decodes a HistorySyncConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {CompanionReg.DeviceProps.HistorySyncConfig & CompanionReg.DeviceProps.HistorySyncConfig.$Shape} HistorySyncConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CompanionReg.DeviceProps.HistorySyncConfig & CompanionReg.DeviceProps.HistorySyncConfig.$Shape;

            /**
             * Verifies a HistorySyncConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HistorySyncConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HistorySyncConfig
             */
            static fromObject(object: { [k: string]: any }): CompanionReg.DeviceProps.HistorySyncConfig;

            /**
             * Creates a plain object from a HistorySyncConfig message. Also converts values to other types if specified.
             * @param message HistorySyncConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: CompanionReg.DeviceProps.HistorySyncConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HistorySyncConfig to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for HistorySyncConfig
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace HistorySyncConfig {

            /** Properties of a HistorySyncConfig. */
            interface $Properties {

                /** HistorySyncConfig fullSyncDaysLimit */
                fullSyncDaysLimit?: (number|null);

                /** HistorySyncConfig fullSyncSizeMbLimit */
                fullSyncSizeMbLimit?: (number|null);

                /** HistorySyncConfig storageQuotaMb */
                storageQuotaMb?: (number|null);

                /** HistorySyncConfig inlineInitialPayloadInE2EeMsg */
                inlineInitialPayloadInE2EeMsg?: (boolean|null);

                /** HistorySyncConfig recentSyncDaysLimit */
                recentSyncDaysLimit?: (number|null);

                /** HistorySyncConfig supportCallLogHistory */
                supportCallLogHistory?: (boolean|null);

                /** HistorySyncConfig supportBotUserAgentChatHistory */
                supportBotUserAgentChatHistory?: (boolean|null);

                /** HistorySyncConfig supportCagReactionsAndPolls */
                supportCagReactionsAndPolls?: (boolean|null);

                /** HistorySyncConfig supportBizHostedMsg */
                supportBizHostedMsg?: (boolean|null);

                /** HistorySyncConfig supportRecentSyncChunkMessageCountTuning */
                supportRecentSyncChunkMessageCountTuning?: (boolean|null);

                /** HistorySyncConfig supportHostedGroupMsg */
                supportHostedGroupMsg?: (boolean|null);

                /** HistorySyncConfig supportFbidBotChatHistory */
                supportFbidBotChatHistory?: (boolean|null);

                /** HistorySyncConfig supportAddOnHistorySyncMigration */
                supportAddOnHistorySyncMigration?: (boolean|null);

                /** HistorySyncConfig supportMessageAssociation */
                supportMessageAssociation?: (boolean|null);

                /** HistorySyncConfig supportGroupHistory */
                supportGroupHistory?: (boolean|null);

                /** HistorySyncConfig onDemandReady */
                onDemandReady?: (boolean|null);

                /** HistorySyncConfig supportGuestChat */
                supportGuestChat?: (boolean|null);

                /** HistorySyncConfig completeOnDemandReady */
                completeOnDemandReady?: (boolean|null);

                /** HistorySyncConfig thumbnailSyncDaysLimit */
                thumbnailSyncDaysLimit?: (number|null);

                /** HistorySyncConfig initialSyncMaxMessagesPerChat */
                initialSyncMaxMessagesPerChat?: (number|null);

                /** HistorySyncConfig supportManusHistory */
                supportManusHistory?: (boolean|null);

                /** HistorySyncConfig supportHatchHistory */
                supportHatchHistory?: (boolean|null);

                /** HistorySyncConfig supportedBotChannelFbids */
                supportedBotChannelFbids?: (string[]|null);

                /** HistorySyncConfig supportInlineContacts */
                supportInlineContacts?: (boolean|null);

                /** HistorySyncConfig supportNewsletter */
                supportNewsletter?: (boolean|null);

                /** HistorySyncConfig supportUniversalReachChat */
                supportUniversalReachChat?: (boolean|null);

                /** HistorySyncConfig supportOmittedConversationMetadata */
                supportOmittedConversationMetadata?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a HistorySyncConfig. */
            type $Shape = CompanionReg.DeviceProps.HistorySyncConfig.$Properties;
        }

        /** PlatformType enum. */
        enum PlatformType {

            /** UNKNOWN value */
            UNKNOWN = 0,

            /** CHROME value */
            CHROME = 1,

            /** FIREFOX value */
            FIREFOX = 2,

            /** IE value */
            IE = 3,

            /** OPERA value */
            OPERA = 4,

            /** SAFARI value */
            SAFARI = 5,

            /** EDGE value */
            EDGE = 6,

            /** DESKTOP value */
            DESKTOP = 7,

            /** IPAD value */
            IPAD = 8,

            /** ANDROID_TABLET value */
            ANDROID_TABLET = 9,

            /** OHANA value */
            OHANA = 10,

            /** ALOHA value */
            ALOHA = 11,

            /** CATALINA value */
            CATALINA = 12,

            /** TCL_TV value */
            TCL_TV = 13,

            /** IOS_PHONE value */
            IOS_PHONE = 14,

            /** IOS_CATALYST value */
            IOS_CATALYST = 15,

            /** ANDROID_PHONE value */
            ANDROID_PHONE = 16,

            /** ANDROID_AMBIGUOUS value */
            ANDROID_AMBIGUOUS = 17,

            /** WEAR_OS value */
            WEAR_OS = 18,

            /** AR_WRIST value */
            AR_WRIST = 19,

            /** AR_DEVICE value */
            AR_DEVICE = 20,

            /** UWP value */
            UWP = 21,

            /** VR value */
            VR = 22,

            /** CLOUD_API value */
            CLOUD_API = 23,

            /** SMARTGLASSES value */
            SMARTGLASSES = 24,

            /** WAIL value */
            WAIL = 25,

            /** WASS value */
            WASS = 26,

            /** BUSINESS_BACK_OFFICE value */
            BUSINESS_BACK_OFFICE = 27,

            /** WAIL_WAI value */
            WAIL_WAI = 28,

            /** WAIL_ALEXA value */
            WAIL_ALEXA = 29,

            /** AUTOMOTIVE value */
            AUTOMOTIVE = 30
        }
    }
}

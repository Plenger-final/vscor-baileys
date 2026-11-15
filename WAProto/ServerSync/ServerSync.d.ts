import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace ServerSync. */
export namespace ServerSync {

    /**
     * Properties of a CoexStateSync.
     * @deprecated Use ServerSync.CoexStateSync.$Properties instead.
     */
    interface ICoexStateSync extends ServerSync.CoexStateSync.$Properties {
    }

    /** Represents a CoexStateSync. */
    class CoexStateSync {

        /**
         * Constructs a new CoexStateSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.CoexStateSync.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CoexStateSync collectionMutations. */
        collectionMutations: ServerSync.CoexStateSync.CollectionMutations.$Properties[];

        /**
         * Creates a new CoexStateSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CoexStateSync instance
         */
        static create(properties: ServerSync.CoexStateSync.$Shape): ServerSync.CoexStateSync & ServerSync.CoexStateSync.$Shape;
        static create(properties?: ServerSync.CoexStateSync.$Properties): ServerSync.CoexStateSync;

        /**
         * Encodes the specified CoexStateSync message. Does not implicitly {@link ServerSync.CoexStateSync.verify|verify} messages.
         * @param message CoexStateSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.CoexStateSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CoexStateSync message, length delimited. Does not implicitly {@link ServerSync.CoexStateSync.verify|verify} messages.
         * @param message CoexStateSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.CoexStateSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CoexStateSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.CoexStateSync & ServerSync.CoexStateSync.$Shape} CoexStateSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.CoexStateSync & ServerSync.CoexStateSync.$Shape;

        /**
         * Decodes a CoexStateSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.CoexStateSync & ServerSync.CoexStateSync.$Shape} CoexStateSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.CoexStateSync & ServerSync.CoexStateSync.$Shape;

        /**
         * Verifies a CoexStateSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CoexStateSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoexStateSync
         */
        static fromObject(object: { [k: string]: any }): ServerSync.CoexStateSync;

        /**
         * Creates a plain object from a CoexStateSync message. Also converts values to other types if specified.
         * @param message CoexStateSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.CoexStateSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoexStateSync to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CoexStateSync
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CoexStateSync {

        /** Properties of a CoexStateSync. */
        interface $Properties {

            /** CoexStateSync collectionMutations */
            collectionMutations?: (ServerSync.CoexStateSync.CollectionMutations.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CoexStateSync. */
        type $Shape = ServerSync.CoexStateSync.$Properties;

        /**
         * Properties of a CollectionMutations.
         * @deprecated Use ServerSync.CoexStateSync.CollectionMutations.$Properties instead.
         */
        interface ICollectionMutations extends ServerSync.CoexStateSync.CollectionMutations.$Properties {
        }

        /** Represents a CollectionMutations. */
        class CollectionMutations {

            /**
             * Constructs a new CollectionMutations.
             * @param [properties] Properties to set
             */
            constructor(properties?: ServerSync.CoexStateSync.CollectionMutations.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CollectionMutations collection. */
            collection?: (string|null);

            /** CollectionMutations mutations. */
            mutations: ServerSync.CoexStateSync.Mutation.$Properties[];

            /**
             * Creates a new CollectionMutations instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CollectionMutations instance
             */
            static create(properties: ServerSync.CoexStateSync.CollectionMutations.$Shape): ServerSync.CoexStateSync.CollectionMutations & ServerSync.CoexStateSync.CollectionMutations.$Shape;
            static create(properties?: ServerSync.CoexStateSync.CollectionMutations.$Properties): ServerSync.CoexStateSync.CollectionMutations;

            /**
             * Encodes the specified CollectionMutations message. Does not implicitly {@link ServerSync.CoexStateSync.CollectionMutations.verify|verify} messages.
             * @param message CollectionMutations message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: ServerSync.CoexStateSync.CollectionMutations.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CollectionMutations message, length delimited. Does not implicitly {@link ServerSync.CoexStateSync.CollectionMutations.verify|verify} messages.
             * @param message CollectionMutations message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: ServerSync.CoexStateSync.CollectionMutations.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CollectionMutations message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {ServerSync.CoexStateSync.CollectionMutations & ServerSync.CoexStateSync.CollectionMutations.$Shape} CollectionMutations
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.CoexStateSync.CollectionMutations & ServerSync.CoexStateSync.CollectionMutations.$Shape;

            /**
             * Decodes a CollectionMutations message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {ServerSync.CoexStateSync.CollectionMutations & ServerSync.CoexStateSync.CollectionMutations.$Shape} CollectionMutations
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.CoexStateSync.CollectionMutations & ServerSync.CoexStateSync.CollectionMutations.$Shape;

            /**
             * Verifies a CollectionMutations message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CollectionMutations message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CollectionMutations
             */
            static fromObject(object: { [k: string]: any }): ServerSync.CoexStateSync.CollectionMutations;

            /**
             * Creates a plain object from a CollectionMutations message. Also converts values to other types if specified.
             * @param message CollectionMutations
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: ServerSync.CoexStateSync.CollectionMutations, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CollectionMutations to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CollectionMutations
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CollectionMutations {

            /** Properties of a CollectionMutations. */
            interface $Properties {

                /** CollectionMutations collection */
                collection?: (string|null);

                /** CollectionMutations mutations */
                mutations?: (ServerSync.CoexStateSync.Mutation.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CollectionMutations. */
            type $Shape = ServerSync.CoexStateSync.CollectionMutations.$Properties;
        }

        /**
         * Properties of a Mutation.
         * @deprecated Use ServerSync.CoexStateSync.Mutation.$Properties instead.
         */
        interface IMutation extends ServerSync.CoexStateSync.Mutation.$Properties {
        }

        /** Represents a Mutation. */
        class Mutation {

            /**
             * Constructs a new Mutation.
             * @param [properties] Properties to set
             */
            constructor(properties?: ServerSync.CoexStateSync.Mutation.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Mutation index. */
            index?: (ServerSync.SyncdIndex.$Properties|null);

            /** Mutation value. */
            value?: (ServerSync.SyncdValue.$Properties|null);

            /** Mutation dirtyVersion. */
            dirtyVersion?: (number|Long|null);

            /** Mutation operation. */
            operation?: (ServerSync.SyncdMutation.SyncdOperation|null);

            /**
             * Creates a new Mutation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Mutation instance
             */
            static create(properties: ServerSync.CoexStateSync.Mutation.$Shape): ServerSync.CoexStateSync.Mutation & ServerSync.CoexStateSync.Mutation.$Shape;
            static create(properties?: ServerSync.CoexStateSync.Mutation.$Properties): ServerSync.CoexStateSync.Mutation;

            /**
             * Encodes the specified Mutation message. Does not implicitly {@link ServerSync.CoexStateSync.Mutation.verify|verify} messages.
             * @param message Mutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: ServerSync.CoexStateSync.Mutation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Mutation message, length delimited. Does not implicitly {@link ServerSync.CoexStateSync.Mutation.verify|verify} messages.
             * @param message Mutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: ServerSync.CoexStateSync.Mutation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Mutation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {ServerSync.CoexStateSync.Mutation & ServerSync.CoexStateSync.Mutation.$Shape} Mutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.CoexStateSync.Mutation & ServerSync.CoexStateSync.Mutation.$Shape;

            /**
             * Decodes a Mutation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {ServerSync.CoexStateSync.Mutation & ServerSync.CoexStateSync.Mutation.$Shape} Mutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.CoexStateSync.Mutation & ServerSync.CoexStateSync.Mutation.$Shape;

            /**
             * Verifies a Mutation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Mutation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Mutation
             */
            static fromObject(object: { [k: string]: any }): ServerSync.CoexStateSync.Mutation;

            /**
             * Creates a plain object from a Mutation message. Also converts values to other types if specified.
             * @param message Mutation
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: ServerSync.CoexStateSync.Mutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Mutation to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Mutation
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Mutation {

            /** Properties of a Mutation. */
            interface $Properties {

                /** Mutation index */
                index?: (ServerSync.SyncdIndex.$Properties|null);

                /** Mutation value */
                value?: (ServerSync.SyncdValue.$Properties|null);

                /** Mutation dirtyVersion */
                dirtyVersion?: (number|Long|null);

                /** Mutation operation */
                operation?: (ServerSync.SyncdMutation.SyncdOperation|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Mutation. */
            type $Shape = ServerSync.CoexStateSync.Mutation.$Properties;
        }
    }

    /**
     * Properties of a SyncdPatch.
     * @deprecated Use ServerSync.SyncdPatch.$Properties instead.
     */
    interface ISyncdPatch extends ServerSync.SyncdPatch.$Properties {
    }

    /** Represents a SyncdPatch. */
    class SyncdPatch {

        /**
         * Constructs a new SyncdPatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.SyncdPatch.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SyncdPatch version. */
        version?: (ServerSync.SyncdVersion.$Properties|null);

        /** SyncdPatch mutations. */
        mutations: ServerSync.SyncdMutation.$Properties[];

        /** SyncdPatch externalMutations. */
        externalMutations?: (ServerSync.ExternalBlobReference.$Properties|null);

        /** SyncdPatch snapshotMac. */
        snapshotMac?: (Uint8Array|null);

        /** SyncdPatch patchMac. */
        patchMac?: (Uint8Array|null);

        /** SyncdPatch keyId. */
        keyId?: (ServerSync.KeyId.$Properties|null);

        /** SyncdPatch exitCode. */
        exitCode?: (ServerSync.ExitCode.$Properties|null);

        /** SyncdPatch deviceIndex. */
        deviceIndex?: (number|null);

        /** SyncdPatch clientDebugData. */
        clientDebugData?: (Uint8Array|null);

        /**
         * Creates a new SyncdPatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdPatch instance
         */
        static create(properties: ServerSync.SyncdPatch.$Shape): ServerSync.SyncdPatch & ServerSync.SyncdPatch.$Shape;
        static create(properties?: ServerSync.SyncdPatch.$Properties): ServerSync.SyncdPatch;

        /**
         * Encodes the specified SyncdPatch message. Does not implicitly {@link ServerSync.SyncdPatch.verify|verify} messages.
         * @param message SyncdPatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.SyncdPatch.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdPatch message, length delimited. Does not implicitly {@link ServerSync.SyncdPatch.verify|verify} messages.
         * @param message SyncdPatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.SyncdPatch.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdPatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.SyncdPatch & ServerSync.SyncdPatch.$Shape} SyncdPatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdPatch & ServerSync.SyncdPatch.$Shape;

        /**
         * Decodes a SyncdPatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdPatch & ServerSync.SyncdPatch.$Shape} SyncdPatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdPatch & ServerSync.SyncdPatch.$Shape;

        /**
         * Verifies a SyncdPatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdPatch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdPatch
         */
        static fromObject(object: { [k: string]: any }): ServerSync.SyncdPatch;

        /**
         * Creates a plain object from a SyncdPatch message. Also converts values to other types if specified.
         * @param message SyncdPatch
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.SyncdPatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdPatch to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SyncdPatch
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SyncdPatch {

        /** Properties of a SyncdPatch. */
        interface $Properties {

            /** SyncdPatch version */
            version?: (ServerSync.SyncdVersion.$Properties|null);

            /** SyncdPatch mutations */
            mutations?: (ServerSync.SyncdMutation.$Properties[]|null);

            /** SyncdPatch externalMutations */
            externalMutations?: (ServerSync.ExternalBlobReference.$Properties|null);

            /** SyncdPatch snapshotMac */
            snapshotMac?: (Uint8Array|null);

            /** SyncdPatch patchMac */
            patchMac?: (Uint8Array|null);

            /** SyncdPatch keyId */
            keyId?: (ServerSync.KeyId.$Properties|null);

            /** SyncdPatch exitCode */
            exitCode?: (ServerSync.ExitCode.$Properties|null);

            /** SyncdPatch deviceIndex */
            deviceIndex?: (number|null);

            /** SyncdPatch clientDebugData */
            clientDebugData?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SyncdPatch. */
        type $Shape = ServerSync.SyncdPatch.$Properties;
    }

    /**
     * Properties of a SyncdMutation.
     * @deprecated Use ServerSync.SyncdMutation.$Properties instead.
     */
    interface ISyncdMutation extends ServerSync.SyncdMutation.$Properties {
    }

    /** Represents a SyncdMutation. */
    class SyncdMutation {

        /**
         * Constructs a new SyncdMutation.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.SyncdMutation.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SyncdMutation operation. */
        operation?: (ServerSync.SyncdMutation.SyncdOperation|null);

        /** SyncdMutation record. */
        record?: (ServerSync.SyncdRecord.$Properties|null);

        /**
         * Creates a new SyncdMutation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdMutation instance
         */
        static create(properties: ServerSync.SyncdMutation.$Shape): ServerSync.SyncdMutation & ServerSync.SyncdMutation.$Shape;
        static create(properties?: ServerSync.SyncdMutation.$Properties): ServerSync.SyncdMutation;

        /**
         * Encodes the specified SyncdMutation message. Does not implicitly {@link ServerSync.SyncdMutation.verify|verify} messages.
         * @param message SyncdMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.SyncdMutation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdMutation message, length delimited. Does not implicitly {@link ServerSync.SyncdMutation.verify|verify} messages.
         * @param message SyncdMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.SyncdMutation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdMutation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.SyncdMutation & ServerSync.SyncdMutation.$Shape} SyncdMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdMutation & ServerSync.SyncdMutation.$Shape;

        /**
         * Decodes a SyncdMutation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdMutation & ServerSync.SyncdMutation.$Shape} SyncdMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdMutation & ServerSync.SyncdMutation.$Shape;

        /**
         * Verifies a SyncdMutation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdMutation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdMutation
         */
        static fromObject(object: { [k: string]: any }): ServerSync.SyncdMutation;

        /**
         * Creates a plain object from a SyncdMutation message. Also converts values to other types if specified.
         * @param message SyncdMutation
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.SyncdMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdMutation to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SyncdMutation
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SyncdMutation {

        /** Properties of a SyncdMutation. */
        interface $Properties {

            /** SyncdMutation operation */
            operation?: (ServerSync.SyncdMutation.SyncdOperation|null);

            /** SyncdMutation record */
            record?: (ServerSync.SyncdRecord.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SyncdMutation. */
        type $Shape = ServerSync.SyncdMutation.$Properties;

        /** SyncdOperation enum. */
        enum SyncdOperation {

            /** SET value */
            SET = 0,

            /** REMOVE value */
            REMOVE = 1
        }
    }

    /**
     * Properties of a SyncdMutations.
     * @deprecated Use ServerSync.SyncdMutations.$Properties instead.
     */
    interface ISyncdMutations extends ServerSync.SyncdMutations.$Properties {
    }

    /** Represents a SyncdMutations. */
    class SyncdMutations {

        /**
         * Constructs a new SyncdMutations.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.SyncdMutations.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SyncdMutations mutations. */
        mutations: ServerSync.SyncdMutation.$Properties[];

        /**
         * Creates a new SyncdMutations instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdMutations instance
         */
        static create(properties: ServerSync.SyncdMutations.$Shape): ServerSync.SyncdMutations & ServerSync.SyncdMutations.$Shape;
        static create(properties?: ServerSync.SyncdMutations.$Properties): ServerSync.SyncdMutations;

        /**
         * Encodes the specified SyncdMutations message. Does not implicitly {@link ServerSync.SyncdMutations.verify|verify} messages.
         * @param message SyncdMutations message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.SyncdMutations.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdMutations message, length delimited. Does not implicitly {@link ServerSync.SyncdMutations.verify|verify} messages.
         * @param message SyncdMutations message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.SyncdMutations.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdMutations message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.SyncdMutations & ServerSync.SyncdMutations.$Shape} SyncdMutations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdMutations & ServerSync.SyncdMutations.$Shape;

        /**
         * Decodes a SyncdMutations message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdMutations & ServerSync.SyncdMutations.$Shape} SyncdMutations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdMutations & ServerSync.SyncdMutations.$Shape;

        /**
         * Verifies a SyncdMutations message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdMutations message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdMutations
         */
        static fromObject(object: { [k: string]: any }): ServerSync.SyncdMutations;

        /**
         * Creates a plain object from a SyncdMutations message. Also converts values to other types if specified.
         * @param message SyncdMutations
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.SyncdMutations, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdMutations to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SyncdMutations
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SyncdMutations {

        /** Properties of a SyncdMutations. */
        interface $Properties {

            /** SyncdMutations mutations */
            mutations?: (ServerSync.SyncdMutation.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SyncdMutations. */
        type $Shape = ServerSync.SyncdMutations.$Properties;
    }

    /**
     * Properties of a SyncdSnapshot.
     * @deprecated Use ServerSync.SyncdSnapshot.$Properties instead.
     */
    interface ISyncdSnapshot extends ServerSync.SyncdSnapshot.$Properties {
    }

    /** Represents a SyncdSnapshot. */
    class SyncdSnapshot {

        /**
         * Constructs a new SyncdSnapshot.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.SyncdSnapshot.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SyncdSnapshot version. */
        version?: (ServerSync.SyncdVersion.$Properties|null);

        /** SyncdSnapshot records. */
        records: ServerSync.SyncdRecord.$Properties[];

        /** SyncdSnapshot mac. */
        mac?: (Uint8Array|null);

        /** SyncdSnapshot keyId. */
        keyId?: (ServerSync.KeyId.$Properties|null);

        /**
         * Creates a new SyncdSnapshot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdSnapshot instance
         */
        static create(properties: ServerSync.SyncdSnapshot.$Shape): ServerSync.SyncdSnapshot & ServerSync.SyncdSnapshot.$Shape;
        static create(properties?: ServerSync.SyncdSnapshot.$Properties): ServerSync.SyncdSnapshot;

        /**
         * Encodes the specified SyncdSnapshot message. Does not implicitly {@link ServerSync.SyncdSnapshot.verify|verify} messages.
         * @param message SyncdSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.SyncdSnapshot.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdSnapshot message, length delimited. Does not implicitly {@link ServerSync.SyncdSnapshot.verify|verify} messages.
         * @param message SyncdSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.SyncdSnapshot.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdSnapshot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.SyncdSnapshot & ServerSync.SyncdSnapshot.$Shape} SyncdSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdSnapshot & ServerSync.SyncdSnapshot.$Shape;

        /**
         * Decodes a SyncdSnapshot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdSnapshot & ServerSync.SyncdSnapshot.$Shape} SyncdSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdSnapshot & ServerSync.SyncdSnapshot.$Shape;

        /**
         * Verifies a SyncdSnapshot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdSnapshot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdSnapshot
         */
        static fromObject(object: { [k: string]: any }): ServerSync.SyncdSnapshot;

        /**
         * Creates a plain object from a SyncdSnapshot message. Also converts values to other types if specified.
         * @param message SyncdSnapshot
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.SyncdSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdSnapshot to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SyncdSnapshot
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SyncdSnapshot {

        /** Properties of a SyncdSnapshot. */
        interface $Properties {

            /** SyncdSnapshot version */
            version?: (ServerSync.SyncdVersion.$Properties|null);

            /** SyncdSnapshot records */
            records?: (ServerSync.SyncdRecord.$Properties[]|null);

            /** SyncdSnapshot mac */
            mac?: (Uint8Array|null);

            /** SyncdSnapshot keyId */
            keyId?: (ServerSync.KeyId.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SyncdSnapshot. */
        type $Shape = ServerSync.SyncdSnapshot.$Properties;
    }

    /**
     * Properties of an ExternalBlobReference.
     * @deprecated Use ServerSync.ExternalBlobReference.$Properties instead.
     */
    interface IExternalBlobReference extends ServerSync.ExternalBlobReference.$Properties {
    }

    /** Represents an ExternalBlobReference. */
    class ExternalBlobReference {

        /**
         * Constructs a new ExternalBlobReference.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.ExternalBlobReference.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ExternalBlobReference mediaKey. */
        mediaKey?: (Uint8Array|null);

        /** ExternalBlobReference directPath. */
        directPath?: (string|null);

        /** ExternalBlobReference handle. */
        handle?: (string|null);

        /** ExternalBlobReference fileSizeBytes. */
        fileSizeBytes?: (number|Long|null);

        /** ExternalBlobReference fileSha256. */
        fileSha256?: (Uint8Array|null);

        /** ExternalBlobReference fileEncSha256. */
        fileEncSha256?: (Uint8Array|null);

        /**
         * Creates a new ExternalBlobReference instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExternalBlobReference instance
         */
        static create(properties: ServerSync.ExternalBlobReference.$Shape): ServerSync.ExternalBlobReference & ServerSync.ExternalBlobReference.$Shape;
        static create(properties?: ServerSync.ExternalBlobReference.$Properties): ServerSync.ExternalBlobReference;

        /**
         * Encodes the specified ExternalBlobReference message. Does not implicitly {@link ServerSync.ExternalBlobReference.verify|verify} messages.
         * @param message ExternalBlobReference message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.ExternalBlobReference.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExternalBlobReference message, length delimited. Does not implicitly {@link ServerSync.ExternalBlobReference.verify|verify} messages.
         * @param message ExternalBlobReference message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.ExternalBlobReference.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExternalBlobReference message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.ExternalBlobReference & ServerSync.ExternalBlobReference.$Shape} ExternalBlobReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.ExternalBlobReference & ServerSync.ExternalBlobReference.$Shape;

        /**
         * Decodes an ExternalBlobReference message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.ExternalBlobReference & ServerSync.ExternalBlobReference.$Shape} ExternalBlobReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.ExternalBlobReference & ServerSync.ExternalBlobReference.$Shape;

        /**
         * Verifies an ExternalBlobReference message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExternalBlobReference message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExternalBlobReference
         */
        static fromObject(object: { [k: string]: any }): ServerSync.ExternalBlobReference;

        /**
         * Creates a plain object from an ExternalBlobReference message. Also converts values to other types if specified.
         * @param message ExternalBlobReference
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.ExternalBlobReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExternalBlobReference to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ExternalBlobReference
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ExternalBlobReference {

        /** Properties of an ExternalBlobReference. */
        interface $Properties {

            /** ExternalBlobReference mediaKey */
            mediaKey?: (Uint8Array|null);

            /** ExternalBlobReference directPath */
            directPath?: (string|null);

            /** ExternalBlobReference handle */
            handle?: (string|null);

            /** ExternalBlobReference fileSizeBytes */
            fileSizeBytes?: (number|Long|null);

            /** ExternalBlobReference fileSha256 */
            fileSha256?: (Uint8Array|null);

            /** ExternalBlobReference fileEncSha256 */
            fileEncSha256?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an ExternalBlobReference. */
        type $Shape = ServerSync.ExternalBlobReference.$Properties;
    }

    /**
     * Properties of a SyncdRecord.
     * @deprecated Use ServerSync.SyncdRecord.$Properties instead.
     */
    interface ISyncdRecord extends ServerSync.SyncdRecord.$Properties {
    }

    /** Represents a SyncdRecord. */
    class SyncdRecord {

        /**
         * Constructs a new SyncdRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.SyncdRecord.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SyncdRecord index. */
        index?: (ServerSync.SyncdIndex.$Properties|null);

        /** SyncdRecord value. */
        value?: (ServerSync.SyncdValue.$Properties|null);

        /** SyncdRecord keyId. */
        keyId?: (ServerSync.KeyId.$Properties|null);

        /**
         * Creates a new SyncdRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdRecord instance
         */
        static create(properties: ServerSync.SyncdRecord.$Shape): ServerSync.SyncdRecord & ServerSync.SyncdRecord.$Shape;
        static create(properties?: ServerSync.SyncdRecord.$Properties): ServerSync.SyncdRecord;

        /**
         * Encodes the specified SyncdRecord message. Does not implicitly {@link ServerSync.SyncdRecord.verify|verify} messages.
         * @param message SyncdRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.SyncdRecord.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdRecord message, length delimited. Does not implicitly {@link ServerSync.SyncdRecord.verify|verify} messages.
         * @param message SyncdRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.SyncdRecord.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.SyncdRecord & ServerSync.SyncdRecord.$Shape} SyncdRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdRecord & ServerSync.SyncdRecord.$Shape;

        /**
         * Decodes a SyncdRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdRecord & ServerSync.SyncdRecord.$Shape} SyncdRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdRecord & ServerSync.SyncdRecord.$Shape;

        /**
         * Verifies a SyncdRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdRecord
         */
        static fromObject(object: { [k: string]: any }): ServerSync.SyncdRecord;

        /**
         * Creates a plain object from a SyncdRecord message. Also converts values to other types if specified.
         * @param message SyncdRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.SyncdRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdRecord to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SyncdRecord
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SyncdRecord {

        /** Properties of a SyncdRecord. */
        interface $Properties {

            /** SyncdRecord index */
            index?: (ServerSync.SyncdIndex.$Properties|null);

            /** SyncdRecord value */
            value?: (ServerSync.SyncdValue.$Properties|null);

            /** SyncdRecord keyId */
            keyId?: (ServerSync.KeyId.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SyncdRecord. */
        type $Shape = ServerSync.SyncdRecord.$Properties;
    }

    /**
     * Properties of a KeyId.
     * @deprecated Use ServerSync.KeyId.$Properties instead.
     */
    interface IKeyId extends ServerSync.KeyId.$Properties {
    }

    /** Represents a KeyId. */
    class KeyId {

        /**
         * Constructs a new KeyId.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.KeyId.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** KeyId id. */
        id?: (Uint8Array|null);

        /**
         * Creates a new KeyId instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyId instance
         */
        static create(properties: ServerSync.KeyId.$Shape): ServerSync.KeyId & ServerSync.KeyId.$Shape;
        static create(properties?: ServerSync.KeyId.$Properties): ServerSync.KeyId;

        /**
         * Encodes the specified KeyId message. Does not implicitly {@link ServerSync.KeyId.verify|verify} messages.
         * @param message KeyId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.KeyId.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyId message, length delimited. Does not implicitly {@link ServerSync.KeyId.verify|verify} messages.
         * @param message KeyId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.KeyId.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.KeyId & ServerSync.KeyId.$Shape} KeyId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.KeyId & ServerSync.KeyId.$Shape;

        /**
         * Decodes a KeyId message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.KeyId & ServerSync.KeyId.$Shape} KeyId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.KeyId & ServerSync.KeyId.$Shape;

        /**
         * Verifies a KeyId message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyId
         */
        static fromObject(object: { [k: string]: any }): ServerSync.KeyId;

        /**
         * Creates a plain object from a KeyId message. Also converts values to other types if specified.
         * @param message KeyId
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.KeyId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyId to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for KeyId
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace KeyId {

        /** Properties of a KeyId. */
        interface $Properties {

            /** KeyId id */
            id?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a KeyId. */
        type $Shape = ServerSync.KeyId.$Properties;
    }

    /**
     * Properties of a SyncdValue.
     * @deprecated Use ServerSync.SyncdValue.$Properties instead.
     */
    interface ISyncdValue extends ServerSync.SyncdValue.$Properties {
    }

    /** Represents a SyncdValue. */
    class SyncdValue {

        /**
         * Constructs a new SyncdValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.SyncdValue.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SyncdValue blob. */
        blob?: (Uint8Array|null);

        /**
         * Creates a new SyncdValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdValue instance
         */
        static create(properties: ServerSync.SyncdValue.$Shape): ServerSync.SyncdValue & ServerSync.SyncdValue.$Shape;
        static create(properties?: ServerSync.SyncdValue.$Properties): ServerSync.SyncdValue;

        /**
         * Encodes the specified SyncdValue message. Does not implicitly {@link ServerSync.SyncdValue.verify|verify} messages.
         * @param message SyncdValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.SyncdValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdValue message, length delimited. Does not implicitly {@link ServerSync.SyncdValue.verify|verify} messages.
         * @param message SyncdValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.SyncdValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.SyncdValue & ServerSync.SyncdValue.$Shape} SyncdValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdValue & ServerSync.SyncdValue.$Shape;

        /**
         * Decodes a SyncdValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdValue & ServerSync.SyncdValue.$Shape} SyncdValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdValue & ServerSync.SyncdValue.$Shape;

        /**
         * Verifies a SyncdValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdValue
         */
        static fromObject(object: { [k: string]: any }): ServerSync.SyncdValue;

        /**
         * Creates a plain object from a SyncdValue message. Also converts values to other types if specified.
         * @param message SyncdValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.SyncdValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdValue to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SyncdValue
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SyncdValue {

        /** Properties of a SyncdValue. */
        interface $Properties {

            /** SyncdValue blob */
            blob?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SyncdValue. */
        type $Shape = ServerSync.SyncdValue.$Properties;
    }

    /**
     * Properties of a SyncdIndex.
     * @deprecated Use ServerSync.SyncdIndex.$Properties instead.
     */
    interface ISyncdIndex extends ServerSync.SyncdIndex.$Properties {
    }

    /** Represents a SyncdIndex. */
    class SyncdIndex {

        /**
         * Constructs a new SyncdIndex.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.SyncdIndex.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SyncdIndex blob. */
        blob?: (Uint8Array|null);

        /**
         * Creates a new SyncdIndex instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdIndex instance
         */
        static create(properties: ServerSync.SyncdIndex.$Shape): ServerSync.SyncdIndex & ServerSync.SyncdIndex.$Shape;
        static create(properties?: ServerSync.SyncdIndex.$Properties): ServerSync.SyncdIndex;

        /**
         * Encodes the specified SyncdIndex message. Does not implicitly {@link ServerSync.SyncdIndex.verify|verify} messages.
         * @param message SyncdIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.SyncdIndex.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdIndex message, length delimited. Does not implicitly {@link ServerSync.SyncdIndex.verify|verify} messages.
         * @param message SyncdIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.SyncdIndex.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdIndex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.SyncdIndex & ServerSync.SyncdIndex.$Shape} SyncdIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdIndex & ServerSync.SyncdIndex.$Shape;

        /**
         * Decodes a SyncdIndex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdIndex & ServerSync.SyncdIndex.$Shape} SyncdIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdIndex & ServerSync.SyncdIndex.$Shape;

        /**
         * Verifies a SyncdIndex message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdIndex message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdIndex
         */
        static fromObject(object: { [k: string]: any }): ServerSync.SyncdIndex;

        /**
         * Creates a plain object from a SyncdIndex message. Also converts values to other types if specified.
         * @param message SyncdIndex
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.SyncdIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdIndex to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SyncdIndex
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SyncdIndex {

        /** Properties of a SyncdIndex. */
        interface $Properties {

            /** SyncdIndex blob */
            blob?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SyncdIndex. */
        type $Shape = ServerSync.SyncdIndex.$Properties;
    }

    /**
     * Properties of an ExitCode.
     * @deprecated Use ServerSync.ExitCode.$Properties instead.
     */
    interface IExitCode extends ServerSync.ExitCode.$Properties {
    }

    /** Represents an ExitCode. */
    class ExitCode {

        /**
         * Constructs a new ExitCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.ExitCode.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ExitCode code. */
        code?: (number|Long|null);

        /** ExitCode text. */
        text?: (string|null);

        /**
         * Creates a new ExitCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitCode instance
         */
        static create(properties: ServerSync.ExitCode.$Shape): ServerSync.ExitCode & ServerSync.ExitCode.$Shape;
        static create(properties?: ServerSync.ExitCode.$Properties): ServerSync.ExitCode;

        /**
         * Encodes the specified ExitCode message. Does not implicitly {@link ServerSync.ExitCode.verify|verify} messages.
         * @param message ExitCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.ExitCode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitCode message, length delimited. Does not implicitly {@link ServerSync.ExitCode.verify|verify} messages.
         * @param message ExitCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.ExitCode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.ExitCode & ServerSync.ExitCode.$Shape} ExitCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.ExitCode & ServerSync.ExitCode.$Shape;

        /**
         * Decodes an ExitCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.ExitCode & ServerSync.ExitCode.$Shape} ExitCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.ExitCode & ServerSync.ExitCode.$Shape;

        /**
         * Verifies an ExitCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitCode
         */
        static fromObject(object: { [k: string]: any }): ServerSync.ExitCode;

        /**
         * Creates a plain object from an ExitCode message. Also converts values to other types if specified.
         * @param message ExitCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.ExitCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitCode to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ExitCode
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ExitCode {

        /** Properties of an ExitCode. */
        interface $Properties {

            /** ExitCode code */
            code?: (number|Long|null);

            /** ExitCode text */
            text?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an ExitCode. */
        type $Shape = ServerSync.ExitCode.$Properties;
    }

    /**
     * Properties of a SyncdVersion.
     * @deprecated Use ServerSync.SyncdVersion.$Properties instead.
     */
    interface ISyncdVersion extends ServerSync.SyncdVersion.$Properties {
    }

    /** Represents a SyncdVersion. */
    class SyncdVersion {

        /**
         * Constructs a new SyncdVersion.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.SyncdVersion.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SyncdVersion version. */
        version?: (number|Long|null);

        /**
         * Creates a new SyncdVersion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdVersion instance
         */
        static create(properties: ServerSync.SyncdVersion.$Shape): ServerSync.SyncdVersion & ServerSync.SyncdVersion.$Shape;
        static create(properties?: ServerSync.SyncdVersion.$Properties): ServerSync.SyncdVersion;

        /**
         * Encodes the specified SyncdVersion message. Does not implicitly {@link ServerSync.SyncdVersion.verify|verify} messages.
         * @param message SyncdVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ServerSync.SyncdVersion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdVersion message, length delimited. Does not implicitly {@link ServerSync.SyncdVersion.verify|verify} messages.
         * @param message SyncdVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ServerSync.SyncdVersion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdVersion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ServerSync.SyncdVersion & ServerSync.SyncdVersion.$Shape} SyncdVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdVersion & ServerSync.SyncdVersion.$Shape;

        /**
         * Decodes a SyncdVersion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdVersion & ServerSync.SyncdVersion.$Shape} SyncdVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdVersion & ServerSync.SyncdVersion.$Shape;

        /**
         * Verifies a SyncdVersion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdVersion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdVersion
         */
        static fromObject(object: { [k: string]: any }): ServerSync.SyncdVersion;

        /**
         * Creates a plain object from a SyncdVersion message. Also converts values to other types if specified.
         * @param message SyncdVersion
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ServerSync.SyncdVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdVersion to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SyncdVersion
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SyncdVersion {

        /** Properties of a SyncdVersion. */
        interface $Properties {

            /** SyncdVersion version */
            version?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SyncdVersion. */
        type $Shape = ServerSync.SyncdVersion.$Properties;
    }
}

import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace SignalLocalStorageProtocol. */
export namespace SignalLocalStorageProtocol {

    /**
     * Properties of a SenderKeyRecordStructure.
     * @deprecated Use SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties instead.
     */
    interface ISenderKeyRecordStructure extends SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties {
    }

    /** Represents a SenderKeyRecordStructure. */
    class SenderKeyRecordStructure {

        /**
         * Constructs a new SenderKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SenderKeyRecordStructure senderKeyStates. */
        senderKeyStates: SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties[];

        /**
         * Creates a new SenderKeyRecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyRecordStructure instance
         */
        static create(properties: SignalLocalStorageProtocol.SenderKeyRecordStructure.$Shape): SignalLocalStorageProtocol.SenderKeyRecordStructure & SignalLocalStorageProtocol.SenderKeyRecordStructure.$Shape;
        static create(properties?: SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties): SignalLocalStorageProtocol.SenderKeyRecordStructure;

        /**
         * Encodes the specified SenderKeyRecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyRecordStructure.verify|verify} messages.
         * @param message SenderKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyRecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyRecordStructure.verify|verify} messages.
         * @param message SenderKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.SenderKeyRecordStructure & SignalLocalStorageProtocol.SenderKeyRecordStructure.$Shape} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SenderKeyRecordStructure & SignalLocalStorageProtocol.SenderKeyRecordStructure.$Shape;

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.SenderKeyRecordStructure & SignalLocalStorageProtocol.SenderKeyRecordStructure.$Shape} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SenderKeyRecordStructure & SignalLocalStorageProtocol.SenderKeyRecordStructure.$Shape;

        /**
         * Verifies a SenderKeyRecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyRecordStructure
         */
        static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SenderKeyRecordStructure;

        /**
         * Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.
         * @param message SenderKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalLocalStorageProtocol.SenderKeyRecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyRecordStructure to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SenderKeyRecordStructure
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SenderKeyRecordStructure {

        /** Properties of a SenderKeyRecordStructure. */
        interface $Properties {

            /** SenderKeyRecordStructure senderKeyStates */
            senderKeyStates?: (SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SenderKeyRecordStructure. */
        type $Shape = SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties;
    }

    /**
     * Properties of a SenderKeyStateStructure.
     * @deprecated Use SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties instead.
     */
    interface ISenderKeyStateStructure extends SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties {
    }

    /** Represents a SenderKeyStateStructure. */
    class SenderKeyStateStructure {

        /**
         * Constructs a new SenderKeyStateStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SenderKeyStateStructure senderKeyId. */
        senderKeyId?: (number|null);

        /** SenderKeyStateStructure senderChainKey. */
        senderChainKey?: (SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties|null);

        /** SenderKeyStateStructure senderSigningKey. */
        senderSigningKey?: (SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties|null);

        /** SenderKeyStateStructure senderMessageKeys. */
        senderMessageKeys: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties[];

        /**
         * Creates a new SenderKeyStateStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyStateStructure instance
         */
        static create(properties: SignalLocalStorageProtocol.SenderKeyStateStructure.$Shape): SignalLocalStorageProtocol.SenderKeyStateStructure & SignalLocalStorageProtocol.SenderKeyStateStructure.$Shape;
        static create(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties): SignalLocalStorageProtocol.SenderKeyStateStructure;

        /**
         * Encodes the specified SenderKeyStateStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.verify|verify} messages.
         * @param message SenderKeyStateStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyStateStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.verify|verify} messages.
         * @param message SenderKeyStateStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure & SignalLocalStorageProtocol.SenderKeyStateStructure.$Shape} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SenderKeyStateStructure & SignalLocalStorageProtocol.SenderKeyStateStructure.$Shape;

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure & SignalLocalStorageProtocol.SenderKeyStateStructure.$Shape} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SenderKeyStateStructure & SignalLocalStorageProtocol.SenderKeyStateStructure.$Shape;

        /**
         * Verifies a SenderKeyStateStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyStateStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyStateStructure
         */
        static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SenderKeyStateStructure;

        /**
         * Creates a plain object from a SenderKeyStateStructure message. Also converts values to other types if specified.
         * @param message SenderKeyStateStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalLocalStorageProtocol.SenderKeyStateStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyStateStructure to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SenderKeyStateStructure
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SenderKeyStateStructure {

        /** Properties of a SenderKeyStateStructure. */
        interface $Properties {

            /** SenderKeyStateStructure senderKeyId */
            senderKeyId?: (number|null);

            /** SenderKeyStateStructure senderChainKey */
            senderChainKey?: (SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties|null);

            /** SenderKeyStateStructure senderSigningKey */
            senderSigningKey?: (SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties|null);

            /** SenderKeyStateStructure senderMessageKeys */
            senderMessageKeys?: (SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SenderKeyStateStructure. */
        type $Shape = SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties;

        /**
         * Properties of a SenderChainKey.
         * @deprecated Use SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties instead.
         */
        interface ISenderChainKey extends SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties {
        }

        /** Represents a SenderChainKey. */
        class SenderChainKey {

            /**
             * Constructs a new SenderChainKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SenderChainKey iteration. */
            iteration?: (number|null);

            /** SenderChainKey seed. */
            seed?: (Uint8Array|null);

            /**
             * Creates a new SenderChainKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SenderChainKey instance
             */
            static create(properties: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Shape): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Shape;
            static create(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey;

            /**
             * Encodes the specified SenderChainKey message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @param message SenderChainKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SenderChainKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @param message SenderChainKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Shape} SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Shape;

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Shape} SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Shape;

            /**
             * Verifies a SenderChainKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SenderChainKey
             */
            static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey;

            /**
             * Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.
             * @param message SenderChainKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SenderChainKey to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SenderChainKey
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SenderChainKey {

            /** Properties of a SenderChainKey. */
            interface $Properties {

                /** SenderChainKey iteration */
                iteration?: (number|null);

                /** SenderChainKey seed */
                seed?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SenderChainKey. */
            type $Shape = SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties;
        }

        /**
         * Properties of a SenderMessageKey.
         * @deprecated Use SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties instead.
         */
        interface ISenderMessageKey extends SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties {
        }

        /** Represents a SenderMessageKey. */
        class SenderMessageKey {

            /**
             * Constructs a new SenderMessageKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SenderMessageKey iteration. */
            iteration?: (number|null);

            /** SenderMessageKey seed. */
            seed?: (Uint8Array|null);

            /**
             * Creates a new SenderMessageKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SenderMessageKey instance
             */
            static create(properties: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Shape): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Shape;
            static create(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey;

            /**
             * Encodes the specified SenderMessageKey message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @param message SenderMessageKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @param message SenderMessageKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Shape} SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Shape;

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Shape} SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Shape;

            /**
             * Verifies a SenderMessageKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SenderMessageKey
             */
            static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey;

            /**
             * Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.
             * @param message SenderMessageKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SenderMessageKey to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SenderMessageKey
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SenderMessageKey {

            /** Properties of a SenderMessageKey. */
            interface $Properties {

                /** SenderMessageKey iteration */
                iteration?: (number|null);

                /** SenderMessageKey seed */
                seed?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SenderMessageKey. */
            type $Shape = SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties;
        }

        /**
         * Properties of a SenderSigningKey.
         * @deprecated Use SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties instead.
         */
        interface ISenderSigningKey extends SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties {
        }

        /** Represents a SenderSigningKey. */
        class SenderSigningKey {

            /**
             * Constructs a new SenderSigningKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SenderSigningKey public. */
            public?: (Uint8Array|null);

            /** SenderSigningKey private. */
            private?: (Uint8Array|null);

            /**
             * Creates a new SenderSigningKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SenderSigningKey instance
             */
            static create(properties: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Shape): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Shape;
            static create(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey;

            /**
             * Encodes the specified SenderSigningKey message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @param message SenderSigningKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SenderSigningKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @param message SenderSigningKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Shape} SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Shape;

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Shape} SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Shape;

            /**
             * Verifies a SenderSigningKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SenderSigningKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SenderSigningKey
             */
            static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey;

            /**
             * Creates a plain object from a SenderSigningKey message. Also converts values to other types if specified.
             * @param message SenderSigningKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SenderSigningKey to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SenderSigningKey
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SenderSigningKey {

            /** Properties of a SenderSigningKey. */
            interface $Properties {

                /** SenderSigningKey public */
                "public"?: (Uint8Array|null);

                /** SenderSigningKey private */
                "private"?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SenderSigningKey. */
            type $Shape = SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties;
        }
    }

    /**
     * Properties of an IdentityKeyPairStructure.
     * @deprecated Use SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties instead.
     */
    interface IIdentityKeyPairStructure extends SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties {
    }

    /** Represents an IdentityKeyPairStructure. */
    class IdentityKeyPairStructure {

        /**
         * Constructs a new IdentityKeyPairStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** IdentityKeyPairStructure publicKey. */
        publicKey?: (Uint8Array|null);

        /** IdentityKeyPairStructure privateKey. */
        privateKey?: (Uint8Array|null);

        /**
         * Creates a new IdentityKeyPairStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdentityKeyPairStructure instance
         */
        static create(properties: SignalLocalStorageProtocol.IdentityKeyPairStructure.$Shape): SignalLocalStorageProtocol.IdentityKeyPairStructure & SignalLocalStorageProtocol.IdentityKeyPairStructure.$Shape;
        static create(properties?: SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties): SignalLocalStorageProtocol.IdentityKeyPairStructure;

        /**
         * Encodes the specified IdentityKeyPairStructure message. Does not implicitly {@link SignalLocalStorageProtocol.IdentityKeyPairStructure.verify|verify} messages.
         * @param message IdentityKeyPairStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdentityKeyPairStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.IdentityKeyPairStructure.verify|verify} messages.
         * @param message IdentityKeyPairStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.IdentityKeyPairStructure & SignalLocalStorageProtocol.IdentityKeyPairStructure.$Shape} IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.IdentityKeyPairStructure & SignalLocalStorageProtocol.IdentityKeyPairStructure.$Shape;

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.IdentityKeyPairStructure & SignalLocalStorageProtocol.IdentityKeyPairStructure.$Shape} IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.IdentityKeyPairStructure & SignalLocalStorageProtocol.IdentityKeyPairStructure.$Shape;

        /**
         * Verifies an IdentityKeyPairStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdentityKeyPairStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdentityKeyPairStructure
         */
        static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.IdentityKeyPairStructure;

        /**
         * Creates a plain object from an IdentityKeyPairStructure message. Also converts values to other types if specified.
         * @param message IdentityKeyPairStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalLocalStorageProtocol.IdentityKeyPairStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdentityKeyPairStructure to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for IdentityKeyPairStructure
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace IdentityKeyPairStructure {

        /** Properties of an IdentityKeyPairStructure. */
        interface $Properties {

            /** IdentityKeyPairStructure publicKey */
            publicKey?: (Uint8Array|null);

            /** IdentityKeyPairStructure privateKey */
            privateKey?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an IdentityKeyPairStructure. */
        type $Shape = SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties;
    }

    /**
     * Properties of a SignedPreKeyRecordStructure.
     * @deprecated Use SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties instead.
     */
    interface ISignedPreKeyRecordStructure extends SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties {
    }

    /** Represents a SignedPreKeyRecordStructure. */
    class SignedPreKeyRecordStructure {

        /**
         * Constructs a new SignedPreKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SignedPreKeyRecordStructure id. */
        id?: (number|null);

        /** SignedPreKeyRecordStructure publicKey. */
        publicKey?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure privateKey. */
        privateKey?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure signature. */
        signature?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure timestamp. */
        timestamp?: (number|Long|null);

        /**
         * Creates a new SignedPreKeyRecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignedPreKeyRecordStructure instance
         */
        static create(properties: SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Shape): SignalLocalStorageProtocol.SignedPreKeyRecordStructure & SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Shape;
        static create(properties?: SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties): SignalLocalStorageProtocol.SignedPreKeyRecordStructure;

        /**
         * Encodes the specified SignedPreKeyRecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SignedPreKeyRecordStructure.verify|verify} messages.
         * @param message SignedPreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignedPreKeyRecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SignedPreKeyRecordStructure.verify|verify} messages.
         * @param message SignedPreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.SignedPreKeyRecordStructure & SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Shape} SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SignedPreKeyRecordStructure & SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Shape;

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.SignedPreKeyRecordStructure & SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Shape} SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SignedPreKeyRecordStructure & SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Shape;

        /**
         * Verifies a SignedPreKeyRecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignedPreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedPreKeyRecordStructure
         */
        static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SignedPreKeyRecordStructure;

        /**
         * Creates a plain object from a SignedPreKeyRecordStructure message. Also converts values to other types if specified.
         * @param message SignedPreKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalLocalStorageProtocol.SignedPreKeyRecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignedPreKeyRecordStructure to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SignedPreKeyRecordStructure
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SignedPreKeyRecordStructure {

        /** Properties of a SignedPreKeyRecordStructure. */
        interface $Properties {

            /** SignedPreKeyRecordStructure id */
            id?: (number|null);

            /** SignedPreKeyRecordStructure publicKey */
            publicKey?: (Uint8Array|null);

            /** SignedPreKeyRecordStructure privateKey */
            privateKey?: (Uint8Array|null);

            /** SignedPreKeyRecordStructure signature */
            signature?: (Uint8Array|null);

            /** SignedPreKeyRecordStructure timestamp */
            timestamp?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SignedPreKeyRecordStructure. */
        type $Shape = SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties;
    }

    /**
     * Properties of a PreKeyRecordStructure.
     * @deprecated Use SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties instead.
     */
    interface IPreKeyRecordStructure extends SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties {
    }

    /** Represents a PreKeyRecordStructure. */
    class PreKeyRecordStructure {

        /**
         * Constructs a new PreKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PreKeyRecordStructure id. */
        id?: (number|null);

        /** PreKeyRecordStructure publicKey. */
        publicKey?: (Uint8Array|null);

        /** PreKeyRecordStructure privateKey. */
        privateKey?: (Uint8Array|null);

        /**
         * Creates a new PreKeyRecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreKeyRecordStructure instance
         */
        static create(properties: SignalLocalStorageProtocol.PreKeyRecordStructure.$Shape): SignalLocalStorageProtocol.PreKeyRecordStructure & SignalLocalStorageProtocol.PreKeyRecordStructure.$Shape;
        static create(properties?: SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties): SignalLocalStorageProtocol.PreKeyRecordStructure;

        /**
         * Encodes the specified PreKeyRecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.PreKeyRecordStructure.verify|verify} messages.
         * @param message PreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreKeyRecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.PreKeyRecordStructure.verify|verify} messages.
         * @param message PreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.PreKeyRecordStructure & SignalLocalStorageProtocol.PreKeyRecordStructure.$Shape} PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.PreKeyRecordStructure & SignalLocalStorageProtocol.PreKeyRecordStructure.$Shape;

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.PreKeyRecordStructure & SignalLocalStorageProtocol.PreKeyRecordStructure.$Shape} PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.PreKeyRecordStructure & SignalLocalStorageProtocol.PreKeyRecordStructure.$Shape;

        /**
         * Verifies a PreKeyRecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreKeyRecordStructure
         */
        static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.PreKeyRecordStructure;

        /**
         * Creates a plain object from a PreKeyRecordStructure message. Also converts values to other types if specified.
         * @param message PreKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalLocalStorageProtocol.PreKeyRecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreKeyRecordStructure to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PreKeyRecordStructure
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PreKeyRecordStructure {

        /** Properties of a PreKeyRecordStructure. */
        interface $Properties {

            /** PreKeyRecordStructure id */
            id?: (number|null);

            /** PreKeyRecordStructure publicKey */
            publicKey?: (Uint8Array|null);

            /** PreKeyRecordStructure privateKey */
            privateKey?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PreKeyRecordStructure. */
        type $Shape = SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties;
    }

    /**
     * Properties of a RecordStructure.
     * @deprecated Use SignalLocalStorageProtocol.RecordStructure.$Properties instead.
     */
    interface IRecordStructure extends SignalLocalStorageProtocol.RecordStructure.$Properties {
    }

    /** Represents a RecordStructure. */
    class RecordStructure {

        /**
         * Constructs a new RecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.RecordStructure.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RecordStructure currentSession. */
        currentSession?: (SignalLocalStorageProtocol.SessionStructure.$Properties|null);

        /** RecordStructure previousSessions. */
        previousSessions: SignalLocalStorageProtocol.SessionStructure.$Properties[];

        /**
         * Creates a new RecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordStructure instance
         */
        static create(properties: SignalLocalStorageProtocol.RecordStructure.$Shape): SignalLocalStorageProtocol.RecordStructure & SignalLocalStorageProtocol.RecordStructure.$Shape;
        static create(properties?: SignalLocalStorageProtocol.RecordStructure.$Properties): SignalLocalStorageProtocol.RecordStructure;

        /**
         * Encodes the specified RecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.RecordStructure.verify|verify} messages.
         * @param message RecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalLocalStorageProtocol.RecordStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.RecordStructure.verify|verify} messages.
         * @param message RecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalLocalStorageProtocol.RecordStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.RecordStructure & SignalLocalStorageProtocol.RecordStructure.$Shape} RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.RecordStructure & SignalLocalStorageProtocol.RecordStructure.$Shape;

        /**
         * Decodes a RecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.RecordStructure & SignalLocalStorageProtocol.RecordStructure.$Shape} RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.RecordStructure & SignalLocalStorageProtocol.RecordStructure.$Shape;

        /**
         * Verifies a RecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordStructure
         */
        static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.RecordStructure;

        /**
         * Creates a plain object from a RecordStructure message. Also converts values to other types if specified.
         * @param message RecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalLocalStorageProtocol.RecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordStructure to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RecordStructure
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RecordStructure {

        /** Properties of a RecordStructure. */
        interface $Properties {

            /** RecordStructure currentSession */
            currentSession?: (SignalLocalStorageProtocol.SessionStructure.$Properties|null);

            /** RecordStructure previousSessions */
            previousSessions?: (SignalLocalStorageProtocol.SessionStructure.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RecordStructure. */
        type $Shape = SignalLocalStorageProtocol.RecordStructure.$Properties;
    }

    /**
     * Properties of a SessionStructure.
     * @deprecated Use SignalLocalStorageProtocol.SessionStructure.$Properties instead.
     */
    interface ISessionStructure extends SignalLocalStorageProtocol.SessionStructure.$Properties {
    }

    /** Represents a SessionStructure. */
    class SessionStructure {

        /**
         * Constructs a new SessionStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.SessionStructure.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SessionStructure sessionVersion. */
        sessionVersion?: (number|null);

        /** SessionStructure localIdentityPublic. */
        localIdentityPublic?: (Uint8Array|null);

        /** SessionStructure remoteIdentityPublic. */
        remoteIdentityPublic?: (Uint8Array|null);

        /** SessionStructure rootKey. */
        rootKey?: (Uint8Array|null);

        /** SessionStructure previousCounter. */
        previousCounter?: (number|null);

        /** SessionStructure senderChain. */
        senderChain?: (SignalLocalStorageProtocol.SessionStructure.Chain.$Properties|null);

        /** SessionStructure receiverChains. */
        receiverChains: SignalLocalStorageProtocol.SessionStructure.Chain.$Properties[];

        /** SessionStructure pendingKeyExchange. */
        pendingKeyExchange?: (SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties|null);

        /** SessionStructure pendingPreKey. */
        pendingPreKey?: (SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties|null);

        /** SessionStructure remoteRegistrationId. */
        remoteRegistrationId?: (number|null);

        /** SessionStructure localRegistrationId. */
        localRegistrationId?: (number|null);

        /** SessionStructure needsRefresh. */
        needsRefresh?: (boolean|null);

        /** SessionStructure aliceBaseKey. */
        aliceBaseKey?: (Uint8Array|null);

        /**
         * Creates a new SessionStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionStructure instance
         */
        static create(properties: SignalLocalStorageProtocol.SessionStructure.$Shape): SignalLocalStorageProtocol.SessionStructure & SignalLocalStorageProtocol.SessionStructure.$Shape;
        static create(properties?: SignalLocalStorageProtocol.SessionStructure.$Properties): SignalLocalStorageProtocol.SessionStructure;

        /**
         * Encodes the specified SessionStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.verify|verify} messages.
         * @param message SessionStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SignalLocalStorageProtocol.SessionStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.verify|verify} messages.
         * @param message SessionStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SignalLocalStorageProtocol.SessionStructure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.SessionStructure & SignalLocalStorageProtocol.SessionStructure.$Shape} SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure & SignalLocalStorageProtocol.SessionStructure.$Shape;

        /**
         * Decodes a SessionStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.SessionStructure & SignalLocalStorageProtocol.SessionStructure.$Shape} SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure & SignalLocalStorageProtocol.SessionStructure.$Shape;

        /**
         * Verifies a SessionStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionStructure
         */
        static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure;

        /**
         * Creates a plain object from a SessionStructure message. Also converts values to other types if specified.
         * @param message SessionStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SignalLocalStorageProtocol.SessionStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionStructure to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SessionStructure
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SessionStructure {

        /** Properties of a SessionStructure. */
        interface $Properties {

            /** SessionStructure sessionVersion */
            sessionVersion?: (number|null);

            /** SessionStructure localIdentityPublic */
            localIdentityPublic?: (Uint8Array|null);

            /** SessionStructure remoteIdentityPublic */
            remoteIdentityPublic?: (Uint8Array|null);

            /** SessionStructure rootKey */
            rootKey?: (Uint8Array|null);

            /** SessionStructure previousCounter */
            previousCounter?: (number|null);

            /** SessionStructure senderChain */
            senderChain?: (SignalLocalStorageProtocol.SessionStructure.Chain.$Properties|null);

            /** SessionStructure receiverChains */
            receiverChains?: (SignalLocalStorageProtocol.SessionStructure.Chain.$Properties[]|null);

            /** SessionStructure pendingKeyExchange */
            pendingKeyExchange?: (SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties|null);

            /** SessionStructure pendingPreKey */
            pendingPreKey?: (SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties|null);

            /** SessionStructure remoteRegistrationId */
            remoteRegistrationId?: (number|null);

            /** SessionStructure localRegistrationId */
            localRegistrationId?: (number|null);

            /** SessionStructure needsRefresh */
            needsRefresh?: (boolean|null);

            /** SessionStructure aliceBaseKey */
            aliceBaseKey?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SessionStructure. */
        type $Shape = SignalLocalStorageProtocol.SessionStructure.$Properties;

        /**
         * Properties of a Chain.
         * @deprecated Use SignalLocalStorageProtocol.SessionStructure.Chain.$Properties instead.
         */
        interface IChain extends SignalLocalStorageProtocol.SessionStructure.Chain.$Properties {
        }

        /** Represents a Chain. */
        class Chain {

            /**
             * Constructs a new Chain.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SessionStructure.Chain.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Chain senderRatchetKey. */
            senderRatchetKey?: (Uint8Array|null);

            /** Chain senderRatchetKeyPrivate. */
            senderRatchetKeyPrivate?: (Uint8Array|null);

            /** Chain chainKey. */
            chainKey?: (SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties|null);

            /** Chain messageKeys. */
            messageKeys: SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties[];

            /**
             * Creates a new Chain instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Chain instance
             */
            static create(properties: SignalLocalStorageProtocol.SessionStructure.Chain.$Shape): SignalLocalStorageProtocol.SessionStructure.Chain & SignalLocalStorageProtocol.SessionStructure.Chain.$Shape;
            static create(properties?: SignalLocalStorageProtocol.SessionStructure.Chain.$Properties): SignalLocalStorageProtocol.SessionStructure.Chain;

            /**
             * Encodes the specified Chain message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.verify|verify} messages.
             * @param message Chain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SignalLocalStorageProtocol.SessionStructure.Chain.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Chain message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.verify|verify} messages.
             * @param message Chain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SignalLocalStorageProtocol.SessionStructure.Chain.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Chain message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SessionStructure.Chain & SignalLocalStorageProtocol.SessionStructure.Chain.$Shape} Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure.Chain & SignalLocalStorageProtocol.SessionStructure.Chain.$Shape;

            /**
             * Decodes a Chain message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SessionStructure.Chain & SignalLocalStorageProtocol.SessionStructure.Chain.$Shape} Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure.Chain & SignalLocalStorageProtocol.SessionStructure.Chain.$Shape;

            /**
             * Verifies a Chain message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Chain message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Chain
             */
            static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure.Chain;

            /**
             * Creates a plain object from a Chain message. Also converts values to other types if specified.
             * @param message Chain
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SignalLocalStorageProtocol.SessionStructure.Chain, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Chain to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Chain
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Chain {

            /** Properties of a Chain. */
            interface $Properties {

                /** Chain senderRatchetKey */
                senderRatchetKey?: (Uint8Array|null);

                /** Chain senderRatchetKeyPrivate */
                senderRatchetKeyPrivate?: (Uint8Array|null);

                /** Chain chainKey */
                chainKey?: (SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties|null);

                /** Chain messageKeys */
                messageKeys?: (SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Chain. */
            type $Shape = SignalLocalStorageProtocol.SessionStructure.Chain.$Properties;

            /**
             * Properties of a ChainKey.
             * @deprecated Use SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties instead.
             */
            interface IChainKey extends SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties {
            }

            /** Represents a ChainKey. */
            class ChainKey {

                /**
                 * Constructs a new ChainKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** ChainKey index. */
                index?: (number|null);

                /** ChainKey key. */
                key?: (Uint8Array|null);

                /**
                 * Creates a new ChainKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChainKey instance
                 */
                static create(properties: SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Shape): SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey & SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Shape;
                static create(properties?: SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties): SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey;

                /**
                 * Encodes the specified ChainKey message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @param message ChainKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ChainKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @param message ChainKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChainKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey & SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Shape} ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey & SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Shape;

                /**
                 * Decodes a ChainKey message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey & SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Shape} ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey & SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Shape;

                /**
                 * Verifies a ChainKey message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ChainKey message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ChainKey
                 */
                static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey;

                /**
                 * Creates a plain object from a ChainKey message. Also converts values to other types if specified.
                 * @param message ChainKey
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ChainKey to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for ChainKey
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ChainKey {

                /** Properties of a ChainKey. */
                interface $Properties {

                    /** ChainKey index */
                    index?: (number|null);

                    /** ChainKey key */
                    key?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a ChainKey. */
                type $Shape = SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties;
            }

            /**
             * Properties of a MessageKey.
             * @deprecated Use SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties instead.
             */
            interface IMessageKey extends SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties {
            }

            /** Represents a MessageKey. */
            class MessageKey {

                /**
                 * Constructs a new MessageKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MessageKey index. */
                index?: (number|null);

                /** MessageKey cipherKey. */
                cipherKey?: (Uint8Array|null);

                /** MessageKey macKey. */
                macKey?: (Uint8Array|null);

                /** MessageKey iv. */
                iv?: (Uint8Array|null);

                /**
                 * Creates a new MessageKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageKey instance
                 */
                static create(properties: SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Shape): SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey & SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Shape;
                static create(properties?: SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties): SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey;

                /**
                 * Encodes the specified MessageKey message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @param message MessageKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @param message MessageKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey & SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Shape} MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey & SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Shape;

                /**
                 * Decodes a MessageKey message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey & SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Shape} MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey & SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Shape;

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
                static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey;

                /**
                 * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
                 * @param message MessageKey
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** MessageKey index */
                    index?: (number|null);

                    /** MessageKey cipherKey */
                    cipherKey?: (Uint8Array|null);

                    /** MessageKey macKey */
                    macKey?: (Uint8Array|null);

                    /** MessageKey iv */
                    iv?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MessageKey. */
                type $Shape = SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties;
            }
        }

        /**
         * Properties of a PendingKeyExchange.
         * @deprecated Use SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties instead.
         */
        interface IPendingKeyExchange extends SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties {
        }

        /** Represents a PendingKeyExchange. */
        class PendingKeyExchange {

            /**
             * Constructs a new PendingKeyExchange.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PendingKeyExchange sequence. */
            sequence?: (number|null);

            /** PendingKeyExchange localBaseKey. */
            localBaseKey?: (Uint8Array|null);

            /** PendingKeyExchange localBaseKeyPrivate. */
            localBaseKeyPrivate?: (Uint8Array|null);

            /** PendingKeyExchange localRatchetKey. */
            localRatchetKey?: (Uint8Array|null);

            /** PendingKeyExchange localRatchetKeyPrivate. */
            localRatchetKeyPrivate?: (Uint8Array|null);

            /** PendingKeyExchange localIdentityKey. */
            localIdentityKey?: (Uint8Array|null);

            /** PendingKeyExchange localIdentityKeyPrivate. */
            localIdentityKeyPrivate?: (Uint8Array|null);

            /**
             * Creates a new PendingKeyExchange instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PendingKeyExchange instance
             */
            static create(properties: SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Shape): SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange & SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Shape;
            static create(properties?: SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties): SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange;

            /**
             * Encodes the specified PendingKeyExchange message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @param message PendingKeyExchange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PendingKeyExchange message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @param message PendingKeyExchange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendingKeyExchange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange & SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Shape} PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange & SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Shape;

            /**
             * Decodes a PendingKeyExchange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange & SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Shape} PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange & SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Shape;

            /**
             * Verifies a PendingKeyExchange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendingKeyExchange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendingKeyExchange
             */
            static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange;

            /**
             * Creates a plain object from a PendingKeyExchange message. Also converts values to other types if specified.
             * @param message PendingKeyExchange
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendingKeyExchange to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PendingKeyExchange
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PendingKeyExchange {

            /** Properties of a PendingKeyExchange. */
            interface $Properties {

                /** PendingKeyExchange sequence */
                sequence?: (number|null);

                /** PendingKeyExchange localBaseKey */
                localBaseKey?: (Uint8Array|null);

                /** PendingKeyExchange localBaseKeyPrivate */
                localBaseKeyPrivate?: (Uint8Array|null);

                /** PendingKeyExchange localRatchetKey */
                localRatchetKey?: (Uint8Array|null);

                /** PendingKeyExchange localRatchetKeyPrivate */
                localRatchetKeyPrivate?: (Uint8Array|null);

                /** PendingKeyExchange localIdentityKey */
                localIdentityKey?: (Uint8Array|null);

                /** PendingKeyExchange localIdentityKeyPrivate */
                localIdentityKeyPrivate?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PendingKeyExchange. */
            type $Shape = SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties;
        }

        /**
         * Properties of a PendingPreKey.
         * @deprecated Use SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties instead.
         */
        interface IPendingPreKey extends SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties {
        }

        /** Represents a PendingPreKey. */
        class PendingPreKey {

            /**
             * Constructs a new PendingPreKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PendingPreKey preKeyId. */
            preKeyId?: (number|null);

            /** PendingPreKey signedPreKeyId. */
            signedPreKeyId?: (number|null);

            /** PendingPreKey baseKey. */
            baseKey?: (Uint8Array|null);

            /** PendingPreKey kyberPreKeyId. */
            kyberPreKeyId?: (number|null);

            /** PendingPreKey kyberCiphertext. */
            kyberCiphertext?: (Uint8Array|null);

            /**
             * Creates a new PendingPreKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PendingPreKey instance
             */
            static create(properties: SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Shape): SignalLocalStorageProtocol.SessionStructure.PendingPreKey & SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Shape;
            static create(properties?: SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties): SignalLocalStorageProtocol.SessionStructure.PendingPreKey;

            /**
             * Encodes the specified PendingPreKey message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingPreKey.verify|verify} messages.
             * @param message PendingPreKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PendingPreKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingPreKey.verify|verify} messages.
             * @param message PendingPreKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingPreKey & SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Shape} PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure.PendingPreKey & SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Shape;

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingPreKey & SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Shape} PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure.PendingPreKey & SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Shape;

            /**
             * Verifies a PendingPreKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendingPreKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendingPreKey
             */
            static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure.PendingPreKey;

            /**
             * Creates a plain object from a PendingPreKey message. Also converts values to other types if specified.
             * @param message PendingPreKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SignalLocalStorageProtocol.SessionStructure.PendingPreKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendingPreKey to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PendingPreKey
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PendingPreKey {

            /** Properties of a PendingPreKey. */
            interface $Properties {

                /** PendingPreKey preKeyId */
                preKeyId?: (number|null);

                /** PendingPreKey signedPreKeyId */
                signedPreKeyId?: (number|null);

                /** PendingPreKey baseKey */
                baseKey?: (Uint8Array|null);

                /** PendingPreKey kyberPreKeyId */
                kyberPreKeyId?: (number|null);

                /** PendingPreKey kyberCiphertext */
                kyberCiphertext?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PendingPreKey. */
            type $Shape = SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties;
        }
    }
}

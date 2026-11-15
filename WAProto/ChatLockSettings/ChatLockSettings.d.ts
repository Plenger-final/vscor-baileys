import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace ChatLockSettings. */
export namespace ChatLockSettings {

    /**
     * Properties of a ChatLockSettings.
     * @deprecated Use ChatLockSettings.ChatLockSettings.$Properties instead.
     */
    interface IChatLockSettings extends ChatLockSettings.ChatLockSettings.$Properties {
    }

    /** Represents a ChatLockSettings. */
    class ChatLockSettings {

        /**
         * Constructs a new ChatLockSettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatLockSettings.ChatLockSettings.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChatLockSettings hideLockedChats. */
        hideLockedChats?: (boolean|null);

        /** ChatLockSettings secretCode. */
        secretCode?: (UserPassword.UserPassword.$Properties|null);

        /**
         * Creates a new ChatLockSettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatLockSettings instance
         */
        static create(properties: ChatLockSettings.ChatLockSettings.$Shape): ChatLockSettings.ChatLockSettings & ChatLockSettings.ChatLockSettings.$Shape;
        static create(properties?: ChatLockSettings.ChatLockSettings.$Properties): ChatLockSettings.ChatLockSettings;

        /**
         * Encodes the specified ChatLockSettings message. Does not implicitly {@link ChatLockSettings.ChatLockSettings.verify|verify} messages.
         * @param message ChatLockSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: ChatLockSettings.ChatLockSettings.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatLockSettings message, length delimited. Does not implicitly {@link ChatLockSettings.ChatLockSettings.verify|verify} messages.
         * @param message ChatLockSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: ChatLockSettings.ChatLockSettings.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatLockSettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {ChatLockSettings.ChatLockSettings & ChatLockSettings.ChatLockSettings.$Shape} ChatLockSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatLockSettings.ChatLockSettings & ChatLockSettings.ChatLockSettings.$Shape;

        /**
         * Decodes a ChatLockSettings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {ChatLockSettings.ChatLockSettings & ChatLockSettings.ChatLockSettings.$Shape} ChatLockSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatLockSettings.ChatLockSettings & ChatLockSettings.ChatLockSettings.$Shape;

        /**
         * Verifies a ChatLockSettings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatLockSettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatLockSettings
         */
        static fromObject(object: { [k: string]: any }): ChatLockSettings.ChatLockSettings;

        /**
         * Creates a plain object from a ChatLockSettings message. Also converts values to other types if specified.
         * @param message ChatLockSettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: ChatLockSettings.ChatLockSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatLockSettings to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatLockSettings
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatLockSettings {

        /** Properties of a ChatLockSettings. */
        interface $Properties {

            /** ChatLockSettings hideLockedChats */
            hideLockedChats?: (boolean|null);

            /** ChatLockSettings secretCode */
            secretCode?: (UserPassword.UserPassword.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatLockSettings. */
        type $Shape = {
          hideLockedChats?: boolean|null;
          secretCode?: UserPassword.UserPassword.$Shape|null;
          $unknowns?: Uint8Array[];
        };
    }
}

/** Namespace UserPassword. */
export namespace UserPassword {

    /**
     * Properties of a UserPassword.
     * @deprecated Use UserPassword.UserPassword.$Properties instead.
     */
    interface IUserPassword extends UserPassword.UserPassword.$Properties {
    }

    /** Represents a UserPassword. */
    class UserPassword {

        /**
         * Constructs a new UserPassword.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserPassword.UserPassword.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UserPassword encoding. */
        encoding?: (UserPassword.UserPassword.Encoding|null);

        /** UserPassword transformer. */
        transformer?: (UserPassword.UserPassword.Transformer|null);

        /** UserPassword transformerArg. */
        transformerArg: UserPassword.UserPassword.TransformerArg.$Properties[];

        /** UserPassword transformedData. */
        transformedData?: (Uint8Array|null);

        /**
         * Creates a new UserPassword instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserPassword instance
         */
        static create(properties: UserPassword.UserPassword.$Shape): UserPassword.UserPassword & UserPassword.UserPassword.$Shape;
        static create(properties?: UserPassword.UserPassword.$Properties): UserPassword.UserPassword;

        /**
         * Encodes the specified UserPassword message. Does not implicitly {@link UserPassword.UserPassword.verify|verify} messages.
         * @param message UserPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: UserPassword.UserPassword.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserPassword message, length delimited. Does not implicitly {@link UserPassword.UserPassword.verify|verify} messages.
         * @param message UserPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: UserPassword.UserPassword.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserPassword message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {UserPassword.UserPassword & UserPassword.UserPassword.$Shape} UserPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPassword.UserPassword & UserPassword.UserPassword.$Shape;

        /**
         * Decodes a UserPassword message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {UserPassword.UserPassword & UserPassword.UserPassword.$Shape} UserPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPassword.UserPassword & UserPassword.UserPassword.$Shape;

        /**
         * Verifies a UserPassword message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserPassword message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserPassword
         */
        static fromObject(object: { [k: string]: any }): UserPassword.UserPassword;

        /**
         * Creates a plain object from a UserPassword message. Also converts values to other types if specified.
         * @param message UserPassword
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: UserPassword.UserPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserPassword to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UserPassword
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UserPassword {

        /** Properties of a UserPassword. */
        interface $Properties {

            /** UserPassword encoding */
            encoding?: (UserPassword.UserPassword.Encoding|null);

            /** UserPassword transformer */
            transformer?: (UserPassword.UserPassword.Transformer|null);

            /** UserPassword transformerArg */
            transformerArg?: (UserPassword.UserPassword.TransformerArg.$Properties[]|null);

            /** UserPassword transformedData */
            transformedData?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UserPassword. */
        type $Shape = {
          encoding?: UserPassword.UserPassword.Encoding|null;
          transformer?: UserPassword.UserPassword.Transformer|null;
          transformerArg?: UserPassword.UserPassword.TransformerArg.$Shape[]|null;
          transformedData?: Uint8Array|null;
          $unknowns?: Uint8Array[];
        };

        /** Encoding enum. */
        enum Encoding {

            /** UTF8 value */
            UTF8 = 0,

            /** UTF8_BROKEN value */
            UTF8_BROKEN = 1
        }

        /** Transformer enum. */
        enum Transformer {

            /** NONE value */
            NONE = 0,

            /** PBKDF2_HMAC_SHA512 value */
            PBKDF2_HMAC_SHA512 = 1,

            /** PBKDF2_HMAC_SHA384 value */
            PBKDF2_HMAC_SHA384 = 2
        }

        /**
         * Properties of a TransformerArg.
         * @deprecated Use UserPassword.UserPassword.TransformerArg.$Properties instead.
         */
        interface ITransformerArg extends UserPassword.UserPassword.TransformerArg.$Properties {
        }

        /** Represents a TransformerArg. */
        class TransformerArg {

            /**
             * Constructs a new TransformerArg.
             * @param [properties] Properties to set
             */
            constructor(properties?: UserPassword.UserPassword.TransformerArg.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** TransformerArg key. */
            key?: (string|null);

            /** TransformerArg value. */
            value?: (UserPassword.UserPassword.TransformerArg.Value.$Properties|null);

            /**
             * Creates a new TransformerArg instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransformerArg instance
             */
            static create(properties: UserPassword.UserPassword.TransformerArg.$Shape): UserPassword.UserPassword.TransformerArg & UserPassword.UserPassword.TransformerArg.$Shape;
            static create(properties?: UserPassword.UserPassword.TransformerArg.$Properties): UserPassword.UserPassword.TransformerArg;

            /**
             * Encodes the specified TransformerArg message. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.verify|verify} messages.
             * @param message TransformerArg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: UserPassword.UserPassword.TransformerArg.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransformerArg message, length delimited. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.verify|verify} messages.
             * @param message TransformerArg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: UserPassword.UserPassword.TransformerArg.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransformerArg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {UserPassword.UserPassword.TransformerArg & UserPassword.UserPassword.TransformerArg.$Shape} TransformerArg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPassword.UserPassword.TransformerArg & UserPassword.UserPassword.TransformerArg.$Shape;

            /**
             * Decodes a TransformerArg message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {UserPassword.UserPassword.TransformerArg & UserPassword.UserPassword.TransformerArg.$Shape} TransformerArg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPassword.UserPassword.TransformerArg & UserPassword.UserPassword.TransformerArg.$Shape;

            /**
             * Verifies a TransformerArg message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransformerArg message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransformerArg
             */
            static fromObject(object: { [k: string]: any }): UserPassword.UserPassword.TransformerArg;

            /**
             * Creates a plain object from a TransformerArg message. Also converts values to other types if specified.
             * @param message TransformerArg
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: UserPassword.UserPassword.TransformerArg, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransformerArg to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for TransformerArg
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace TransformerArg {

            /** Properties of a TransformerArg. */
            interface $Properties {

                /** TransformerArg key */
                key?: (string|null);

                /** TransformerArg value */
                value?: (UserPassword.UserPassword.TransformerArg.Value.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a TransformerArg. */
            type $Shape = {
              key?: string|null;
              value?: UserPassword.UserPassword.TransformerArg.Value.$Shape|null;
              $unknowns?: Uint8Array[];
            };

            /**
             * Properties of a Value.
             * @deprecated Use UserPassword.UserPassword.TransformerArg.Value.$Properties instead.
             */
            interface IValue extends UserPassword.UserPassword.TransformerArg.Value.$Properties {
            }

            /** Represents a Value. */
            class Value {

                /**
                 * Constructs a new Value.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UserPassword.UserPassword.TransformerArg.Value.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Value asBlob. */
                asBlob?: (Uint8Array|null);

                /** Value asUnsignedInteger. */
                asUnsignedInteger?: (number|null);

                /** Value value. */
                value?: ("asBlob"|"asUnsignedInteger");

                /**
                 * Creates a new Value instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Value instance
                 */
                static create(properties: UserPassword.UserPassword.TransformerArg.Value.$Shape): UserPassword.UserPassword.TransformerArg.Value & UserPassword.UserPassword.TransformerArg.Value.$Shape;
                static create(properties?: UserPassword.UserPassword.TransformerArg.Value.$Properties): UserPassword.UserPassword.TransformerArg.Value;

                /**
                 * Encodes the specified Value message. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: UserPassword.UserPassword.TransformerArg.Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Value message, length delimited. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: UserPassword.UserPassword.TransformerArg.Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Value message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {UserPassword.UserPassword.TransformerArg.Value & UserPassword.UserPassword.TransformerArg.Value.$Shape} Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPassword.UserPassword.TransformerArg.Value & UserPassword.UserPassword.TransformerArg.Value.$Shape;

                /**
                 * Decodes a Value message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {UserPassword.UserPassword.TransformerArg.Value & UserPassword.UserPassword.TransformerArg.Value.$Shape} Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPassword.UserPassword.TransformerArg.Value & UserPassword.UserPassword.TransformerArg.Value.$Shape;

                /**
                 * Verifies a Value message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Value message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Value
                 */
                static fromObject(object: { [k: string]: any }): UserPassword.UserPassword.TransformerArg.Value;

                /**
                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                 * @param message Value
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: UserPassword.UserPassword.TransformerArg.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Value to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Value
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Value {

                /** Properties of a Value. */
                interface $Properties {

                    /** Value asBlob */
                    asBlob?: (Uint8Array|null);

                    /** Value asUnsignedInteger */
                    asUnsignedInteger?: (number|null);

                    /** Value value */
                    value?: ("asBlob"|"asUnsignedInteger");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a Value. */
                type $Shape = {
                  asBlob?: Uint8Array|null;
                  asUnsignedInteger?: number|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ value?: undefined; asBlob?: null; asUnsignedInteger?: null }|{ value?: "asBlob"; asBlob: Uint8Array; asUnsignedInteger?: null }|{ value?: "asUnsignedInteger"; asBlob?: null; asUnsignedInteger: number })
                );
            }
        }
    }
}

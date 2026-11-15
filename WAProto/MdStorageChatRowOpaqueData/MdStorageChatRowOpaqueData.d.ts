import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace MdStorageChatRowOpaqueData. */
export namespace MdStorageChatRowOpaqueData {

    /**
     * Properties of a ChatRowOpaqueData.
     * @deprecated Use MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Properties instead.
     */
    interface IChatRowOpaqueData extends MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Properties {
    }

    /** Represents a ChatRowOpaqueData. */
    class ChatRowOpaqueData {

        /**
         * Constructs a new ChatRowOpaqueData.
         * @param [properties] Properties to set
         */
        constructor(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChatRowOpaqueData draftMessage. */
        draftMessage?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Properties|null);

        /**
         * Creates a new ChatRowOpaqueData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatRowOpaqueData instance
         */
        static create(properties: MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Shape): MdStorageChatRowOpaqueData.ChatRowOpaqueData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Shape;
        static create(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Properties): MdStorageChatRowOpaqueData.ChatRowOpaqueData;

        /**
         * Encodes the specified ChatRowOpaqueData message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.verify|verify} messages.
         * @param message ChatRowOpaqueData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatRowOpaqueData message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.verify|verify} messages.
         * @param message ChatRowOpaqueData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatRowOpaqueData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Shape} ChatRowOpaqueData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MdStorageChatRowOpaqueData.ChatRowOpaqueData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Shape;

        /**
         * Decodes a ChatRowOpaqueData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Shape} ChatRowOpaqueData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MdStorageChatRowOpaqueData.ChatRowOpaqueData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Shape;

        /**
         * Verifies a ChatRowOpaqueData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatRowOpaqueData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatRowOpaqueData
         */
        static fromObject(object: { [k: string]: any }): MdStorageChatRowOpaqueData.ChatRowOpaqueData;

        /**
         * Creates a plain object from a ChatRowOpaqueData message. Also converts values to other types if specified.
         * @param message ChatRowOpaqueData
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatRowOpaqueData to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatRowOpaqueData
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatRowOpaqueData {

        /** Properties of a ChatRowOpaqueData. */
        interface $Properties {

            /** ChatRowOpaqueData draftMessage */
            draftMessage?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatRowOpaqueData. */
        type $Shape = MdStorageChatRowOpaqueData.ChatRowOpaqueData.$Properties;

        /**
         * Properties of a DraftMessage.
         * @deprecated Use MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Properties instead.
         */
        interface IDraftMessage extends MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Properties {
        }

        /** Represents a DraftMessage. */
        class DraftMessage {

            /**
             * Constructs a new DraftMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DraftMessage text. */
            text?: (string|null);

            /** DraftMessage omittedUrl. */
            omittedUrl?: (string|null);

            /** DraftMessage ctwaContextLinkData. */
            ctwaContextLinkData?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Properties|null);

            /** DraftMessage ctwaContext. */
            ctwaContext?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Properties|null);

            /** DraftMessage timestamp. */
            timestamp?: (number|Long|null);

            /**
             * Creates a new DraftMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DraftMessage instance
             */
            static create(properties: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Shape): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Shape;
            static create(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Properties): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage;

            /**
             * Encodes the specified DraftMessage message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.verify|verify} messages.
             * @param message DraftMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DraftMessage message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.verify|verify} messages.
             * @param message DraftMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DraftMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Shape} DraftMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Shape;

            /**
             * Decodes a DraftMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Shape} DraftMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Shape;

            /**
             * Verifies a DraftMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DraftMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DraftMessage
             */
            static fromObject(object: { [k: string]: any }): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage;

            /**
             * Creates a plain object from a DraftMessage message. Also converts values to other types if specified.
             * @param message DraftMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DraftMessage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for DraftMessage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DraftMessage {

            /** Properties of a DraftMessage. */
            interface $Properties {

                /** DraftMessage text */
                text?: (string|null);

                /** DraftMessage omittedUrl */
                omittedUrl?: (string|null);

                /** DraftMessage ctwaContextLinkData */
                ctwaContextLinkData?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Properties|null);

                /** DraftMessage ctwaContext */
                ctwaContext?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Properties|null);

                /** DraftMessage timestamp */
                timestamp?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a DraftMessage. */
            type $Shape = MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.$Properties;

            /**
             * Properties of a CtwaContextData.
             * @deprecated Use MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Properties instead.
             */
            interface ICtwaContextData extends MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Properties {
            }

            /** Represents a CtwaContextData. */
            class CtwaContextData {

                /**
                 * Constructs a new CtwaContextData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** CtwaContextData conversionSource. */
                conversionSource?: (string|null);

                /** CtwaContextData conversionData. */
                conversionData?: (Uint8Array|null);

                /** CtwaContextData sourceUrl. */
                sourceUrl?: (string|null);

                /** CtwaContextData sourceId. */
                sourceId?: (string|null);

                /** CtwaContextData sourceType. */
                sourceType?: (string|null);

                /** CtwaContextData title. */
                title?: (string|null);

                /** CtwaContextData description. */
                description?: (string|null);

                /** CtwaContextData thumbnail. */
                thumbnail?: (string|null);

                /** CtwaContextData thumbnailUrl. */
                thumbnailUrl?: (string|null);

                /** CtwaContextData mediaType. */
                mediaType?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType|null);

                /** CtwaContextData mediaUrl. */
                mediaUrl?: (string|null);

                /** CtwaContextData isSuspiciousLink. */
                isSuspiciousLink?: (boolean|null);

                /**
                 * Creates a new CtwaContextData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CtwaContextData instance
                 */
                static create(properties: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Shape): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Shape;
                static create(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Properties): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData;

                /**
                 * Encodes the specified CtwaContextData message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.verify|verify} messages.
                 * @param message CtwaContextData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CtwaContextData message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.verify|verify} messages.
                 * @param message CtwaContextData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CtwaContextData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Shape} CtwaContextData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Shape;

                /**
                 * Decodes a CtwaContextData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Shape} CtwaContextData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Shape;

                /**
                 * Verifies a CtwaContextData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CtwaContextData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CtwaContextData
                 */
                static fromObject(object: { [k: string]: any }): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData;

                /**
                 * Creates a plain object from a CtwaContextData message. Also converts values to other types if specified.
                 * @param message CtwaContextData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CtwaContextData to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for CtwaContextData
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace CtwaContextData {

                /** Properties of a CtwaContextData. */
                interface $Properties {

                    /** CtwaContextData conversionSource */
                    conversionSource?: (string|null);

                    /** CtwaContextData conversionData */
                    conversionData?: (Uint8Array|null);

                    /** CtwaContextData sourceUrl */
                    sourceUrl?: (string|null);

                    /** CtwaContextData sourceId */
                    sourceId?: (string|null);

                    /** CtwaContextData sourceType */
                    sourceType?: (string|null);

                    /** CtwaContextData title */
                    title?: (string|null);

                    /** CtwaContextData description */
                    description?: (string|null);

                    /** CtwaContextData thumbnail */
                    thumbnail?: (string|null);

                    /** CtwaContextData thumbnailUrl */
                    thumbnailUrl?: (string|null);

                    /** CtwaContextData mediaType */
                    mediaType?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType|null);

                    /** CtwaContextData mediaUrl */
                    mediaUrl?: (string|null);

                    /** CtwaContextData isSuspiciousLink */
                    isSuspiciousLink?: (boolean|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a CtwaContextData. */
                type $Shape = MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.$Properties;

                /** ContextInfoExternalAdReplyInfoMediaType enum. */
                enum ContextInfoExternalAdReplyInfoMediaType {

                    /** NONE value */
                    NONE = 0,

                    /** IMAGE value */
                    IMAGE = 1,

                    /** VIDEO value */
                    VIDEO = 2
                }
            }

            /**
             * Properties of a CtwaContextLinkData.
             * @deprecated Use MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Properties instead.
             */
            interface ICtwaContextLinkData extends MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Properties {
            }

            /** Represents a CtwaContextLinkData. */
            class CtwaContextLinkData {

                /**
                 * Constructs a new CtwaContextLinkData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** CtwaContextLinkData context. */
                context?: (string|null);

                /** CtwaContextLinkData sourceUrl. */
                sourceUrl?: (string|null);

                /** CtwaContextLinkData icebreaker. */
                icebreaker?: (string|null);

                /** CtwaContextLinkData phone. */
                phone?: (string|null);

                /**
                 * Creates a new CtwaContextLinkData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CtwaContextLinkData instance
                 */
                static create(properties: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Shape): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Shape;
                static create(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Properties): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;

                /**
                 * Encodes the specified CtwaContextLinkData message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.verify|verify} messages.
                 * @param message CtwaContextLinkData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CtwaContextLinkData message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.verify|verify} messages.
                 * @param message CtwaContextLinkData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CtwaContextLinkData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Shape} CtwaContextLinkData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Shape;

                /**
                 * Decodes a CtwaContextLinkData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Shape} CtwaContextLinkData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData & MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Shape;

                /**
                 * Verifies a CtwaContextLinkData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CtwaContextLinkData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CtwaContextLinkData
                 */
                static fromObject(object: { [k: string]: any }): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;

                /**
                 * Creates a plain object from a CtwaContextLinkData message. Also converts values to other types if specified.
                 * @param message CtwaContextLinkData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CtwaContextLinkData to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for CtwaContextLinkData
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace CtwaContextLinkData {

                /** Properties of a CtwaContextLinkData. */
                interface $Properties {

                    /** CtwaContextLinkData context */
                    context?: (string|null);

                    /** CtwaContextLinkData sourceUrl */
                    sourceUrl?: (string|null);

                    /** CtwaContextLinkData icebreaker */
                    icebreaker?: (string|null);

                    /** CtwaContextLinkData phone */
                    phone?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a CtwaContextLinkData. */
                type $Shape = MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.$Properties;
            }
        }
    }
}

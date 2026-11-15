import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace AICommonDeprecated. */
export namespace AICommonDeprecated {

    /**
     * Properties of a AIRichResponseSubMessage.
     * @deprecated Use AICommonDeprecated.AIRichResponseSubMessage.$Properties instead.
     */
    interface IAIRichResponseSubMessage extends AICommonDeprecated.AIRichResponseSubMessage.$Properties {
    }

    /** Represents a AIRichResponseSubMessage. */
    class AIRichResponseSubMessage {

        /**
         * Constructs a new AIRichResponseSubMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.AIRichResponseSubMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRichResponseSubMessage messageType. */
        messageType?: (AICommonDeprecated.AIRichResponseSubMessageType|null);

        /** AIRichResponseSubMessage gridImageMetadata. */
        gridImageMetadata?: (AICommonDeprecated.AIRichResponseGridImageMetadata.$Properties|null);

        /** AIRichResponseSubMessage messageText. */
        messageText?: (string|null);

        /** AIRichResponseSubMessage imageMetadata. */
        imageMetadata?: (AICommonDeprecated.AIRichResponseInlineImageMetadata.$Properties|null);

        /** AIRichResponseSubMessage codeMetadata. */
        codeMetadata?: (AICommonDeprecated.AIRichResponseCodeMetadata.$Properties|null);

        /** AIRichResponseSubMessage tableMetadata. */
        tableMetadata?: (AICommonDeprecated.AIRichResponseTableMetadata.$Properties|null);

        /** AIRichResponseSubMessage dynamicMetadata. */
        dynamicMetadata?: (AICommonDeprecated.AIRichResponseDynamicMetadata.$Properties|null);

        /** AIRichResponseSubMessage latexMetadata. */
        latexMetadata?: (AICommonDeprecated.AIRichResponseLatexMetadata.$Properties|null);

        /** AIRichResponseSubMessage mapMetadata. */
        mapMetadata?: (AICommonDeprecated.AIRichResponseMapMetadata.$Properties|null);

        /** AIRichResponseSubMessage contentItemsMetadata. */
        contentItemsMetadata?: (AICommonDeprecated.AIRichResponseContentItemsMetadata.$Properties|null);

        /**
         * Creates a new AIRichResponseSubMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseSubMessage instance
         */
        static create(properties: AICommonDeprecated.AIRichResponseSubMessage.$Shape): AICommonDeprecated.AIRichResponseSubMessage & AICommonDeprecated.AIRichResponseSubMessage.$Shape;
        static create(properties?: AICommonDeprecated.AIRichResponseSubMessage.$Properties): AICommonDeprecated.AIRichResponseSubMessage;

        /**
         * Encodes the specified AIRichResponseSubMessage message. Does not implicitly {@link AICommonDeprecated.AIRichResponseSubMessage.verify|verify} messages.
         * @param message AIRichResponseSubMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommonDeprecated.AIRichResponseSubMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseSubMessage message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseSubMessage.verify|verify} messages.
         * @param message AIRichResponseSubMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommonDeprecated.AIRichResponseSubMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseSubMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseSubMessage & AICommonDeprecated.AIRichResponseSubMessage.$Shape} AIRichResponseSubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseSubMessage & AICommonDeprecated.AIRichResponseSubMessage.$Shape;

        /**
         * Decodes a AIRichResponseSubMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseSubMessage & AICommonDeprecated.AIRichResponseSubMessage.$Shape} AIRichResponseSubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseSubMessage & AICommonDeprecated.AIRichResponseSubMessage.$Shape;

        /**
         * Verifies a AIRichResponseSubMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseSubMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseSubMessage
         */
        static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseSubMessage;

        /**
         * Creates a plain object from a AIRichResponseSubMessage message. Also converts values to other types if specified.
         * @param message AIRichResponseSubMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommonDeprecated.AIRichResponseSubMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseSubMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRichResponseSubMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRichResponseSubMessage {

        /** Properties of a AIRichResponseSubMessage. */
        interface $Properties {

            /** AIRichResponseSubMessage messageType */
            messageType?: (AICommonDeprecated.AIRichResponseSubMessageType|null);

            /** AIRichResponseSubMessage gridImageMetadata */
            gridImageMetadata?: (AICommonDeprecated.AIRichResponseGridImageMetadata.$Properties|null);

            /** AIRichResponseSubMessage messageText */
            messageText?: (string|null);

            /** AIRichResponseSubMessage imageMetadata */
            imageMetadata?: (AICommonDeprecated.AIRichResponseInlineImageMetadata.$Properties|null);

            /** AIRichResponseSubMessage codeMetadata */
            codeMetadata?: (AICommonDeprecated.AIRichResponseCodeMetadata.$Properties|null);

            /** AIRichResponseSubMessage tableMetadata */
            tableMetadata?: (AICommonDeprecated.AIRichResponseTableMetadata.$Properties|null);

            /** AIRichResponseSubMessage dynamicMetadata */
            dynamicMetadata?: (AICommonDeprecated.AIRichResponseDynamicMetadata.$Properties|null);

            /** AIRichResponseSubMessage latexMetadata */
            latexMetadata?: (AICommonDeprecated.AIRichResponseLatexMetadata.$Properties|null);

            /** AIRichResponseSubMessage mapMetadata */
            mapMetadata?: (AICommonDeprecated.AIRichResponseMapMetadata.$Properties|null);

            /** AIRichResponseSubMessage contentItemsMetadata */
            contentItemsMetadata?: (AICommonDeprecated.AIRichResponseContentItemsMetadata.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRichResponseSubMessage. */
        type $Shape = {
          messageType?: AICommonDeprecated.AIRichResponseSubMessageType|null;
          gridImageMetadata?: AICommonDeprecated.AIRichResponseGridImageMetadata.$Shape|null;
          messageText?: string|null;
          imageMetadata?: AICommonDeprecated.AIRichResponseInlineImageMetadata.$Shape|null;
          codeMetadata?: AICommonDeprecated.AIRichResponseCodeMetadata.$Shape|null;
          tableMetadata?: AICommonDeprecated.AIRichResponseTableMetadata.$Shape|null;
          dynamicMetadata?: AICommonDeprecated.AIRichResponseDynamicMetadata.$Shape|null;
          latexMetadata?: AICommonDeprecated.AIRichResponseLatexMetadata.$Shape|null;
          mapMetadata?: AICommonDeprecated.AIRichResponseMapMetadata.$Shape|null;
          contentItemsMetadata?: AICommonDeprecated.AIRichResponseContentItemsMetadata.$Shape|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a AIRichResponseContentItemsMetadata.
     * @deprecated Use AICommonDeprecated.AIRichResponseContentItemsMetadata.$Properties instead.
     */
    interface IAIRichResponseContentItemsMetadata extends AICommonDeprecated.AIRichResponseContentItemsMetadata.$Properties {
    }

    /** Represents a AIRichResponseContentItemsMetadata. */
    class AIRichResponseContentItemsMetadata {

        /**
         * Constructs a new AIRichResponseContentItemsMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.AIRichResponseContentItemsMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRichResponseContentItemsMetadata itemsMetadata. */
        itemsMetadata: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Properties[];

        /** AIRichResponseContentItemsMetadata contentType. */
        contentType?: (AICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType|null);

        /**
         * Creates a new AIRichResponseContentItemsMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseContentItemsMetadata instance
         */
        static create(properties: AICommonDeprecated.AIRichResponseContentItemsMetadata.$Shape): AICommonDeprecated.AIRichResponseContentItemsMetadata & AICommonDeprecated.AIRichResponseContentItemsMetadata.$Shape;
        static create(properties?: AICommonDeprecated.AIRichResponseContentItemsMetadata.$Properties): AICommonDeprecated.AIRichResponseContentItemsMetadata;

        /**
         * Encodes the specified AIRichResponseContentItemsMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.verify|verify} messages.
         * @param message AIRichResponseContentItemsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseContentItemsMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.verify|verify} messages.
         * @param message AIRichResponseContentItemsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseContentItemsMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata & AICommonDeprecated.AIRichResponseContentItemsMetadata.$Shape} AIRichResponseContentItemsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseContentItemsMetadata & AICommonDeprecated.AIRichResponseContentItemsMetadata.$Shape;

        /**
         * Decodes a AIRichResponseContentItemsMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata & AICommonDeprecated.AIRichResponseContentItemsMetadata.$Shape} AIRichResponseContentItemsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseContentItemsMetadata & AICommonDeprecated.AIRichResponseContentItemsMetadata.$Shape;

        /**
         * Verifies a AIRichResponseContentItemsMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseContentItemsMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseContentItemsMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseContentItemsMetadata;

        /**
         * Creates a plain object from a AIRichResponseContentItemsMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseContentItemsMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommonDeprecated.AIRichResponseContentItemsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseContentItemsMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRichResponseContentItemsMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRichResponseContentItemsMetadata {

        /** Properties of a AIRichResponseContentItemsMetadata. */
        interface $Properties {

            /** AIRichResponseContentItemsMetadata itemsMetadata */
            itemsMetadata?: (AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Properties[]|null);

            /** AIRichResponseContentItemsMetadata contentType */
            contentType?: (AICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRichResponseContentItemsMetadata. */
        type $Shape = {
          itemsMetadata?: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Shape[]|null;
          contentType?: AICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType|null;
          $unknowns?: Uint8Array[];
        };

        /**
         * Properties of a AIRichResponseContentItemMetadata.
         * @deprecated Use AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Properties instead.
         */
        interface IAIRichResponseContentItemMetadata extends AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Properties {
        }

        /** Represents a AIRichResponseContentItemMetadata. */
        class AIRichResponseContentItemMetadata {

            /**
             * Constructs a new AIRichResponseContentItemMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AIRichResponseContentItemMetadata reelItem. */
            reelItem?: (AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Properties|null);

            /** AIRichResponseContentItemMetadata aiRichResponseContentItem. */
            aiRichResponseContentItem?: "reelItem";

            /**
             * Creates a new AIRichResponseContentItemMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseContentItemMetadata instance
             */
            static create(properties: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Shape): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata & AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Shape;
            static create(properties?: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Properties): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;

            /**
             * Encodes the specified AIRichResponseContentItemMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.verify|verify} messages.
             * @param message AIRichResponseContentItemMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseContentItemMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.verify|verify} messages.
             * @param message AIRichResponseContentItemMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseContentItemMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata & AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Shape} AIRichResponseContentItemMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata & AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Shape;

            /**
             * Decodes a AIRichResponseContentItemMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata & AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Shape} AIRichResponseContentItemMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata & AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.$Shape;

            /**
             * Verifies a AIRichResponseContentItemMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseContentItemMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseContentItemMetadata
             */
            static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;

            /**
             * Creates a plain object from a AIRichResponseContentItemMetadata message. Also converts values to other types if specified.
             * @param message AIRichResponseContentItemMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseContentItemMetadata to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AIRichResponseContentItemMetadata
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AIRichResponseContentItemMetadata {

            /** Properties of a AIRichResponseContentItemMetadata. */
            interface $Properties {

                /** AIRichResponseContentItemMetadata reelItem */
                reelItem?: (AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Properties|null);

                /** AIRichResponseContentItemMetadata aiRichResponseContentItem */
                aiRichResponseContentItem?: "reelItem";

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a AIRichResponseContentItemMetadata. */
            type $Shape = {
              reelItem?: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ aiRichResponseContentItem?: undefined; reelItem?: null }|{ aiRichResponseContentItem?: "reelItem"; reelItem: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Shape })
            );
        }

        /**
         * Properties of a AIRichResponseReelItem.
         * @deprecated Use AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Properties instead.
         */
        interface IAIRichResponseReelItem extends AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Properties {
        }

        /** Represents a AIRichResponseReelItem. */
        class AIRichResponseReelItem {

            /**
             * Constructs a new AIRichResponseReelItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AIRichResponseReelItem title. */
            title?: (string|null);

            /** AIRichResponseReelItem profileIconUrl. */
            profileIconUrl?: (string|null);

            /** AIRichResponseReelItem thumbnailUrl. */
            thumbnailUrl?: (string|null);

            /** AIRichResponseReelItem videoUrl. */
            videoUrl?: (string|null);

            /**
             * Creates a new AIRichResponseReelItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseReelItem instance
             */
            static create(properties: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Shape): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem & AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Shape;
            static create(properties?: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Properties): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;

            /**
             * Encodes the specified AIRichResponseReelItem message. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.verify|verify} messages.
             * @param message AIRichResponseReelItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseReelItem message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.verify|verify} messages.
             * @param message AIRichResponseReelItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseReelItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem & AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Shape} AIRichResponseReelItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem & AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Shape;

            /**
             * Decodes a AIRichResponseReelItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem & AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Shape} AIRichResponseReelItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem & AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Shape;

            /**
             * Verifies a AIRichResponseReelItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseReelItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseReelItem
             */
            static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;

            /**
             * Creates a plain object from a AIRichResponseReelItem message. Also converts values to other types if specified.
             * @param message AIRichResponseReelItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseReelItem to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AIRichResponseReelItem
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AIRichResponseReelItem {

            /** Properties of a AIRichResponseReelItem. */
            interface $Properties {

                /** AIRichResponseReelItem title */
                title?: (string|null);

                /** AIRichResponseReelItem profileIconUrl */
                profileIconUrl?: (string|null);

                /** AIRichResponseReelItem thumbnailUrl */
                thumbnailUrl?: (string|null);

                /** AIRichResponseReelItem videoUrl */
                videoUrl?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a AIRichResponseReelItem. */
            type $Shape = AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.$Properties;
        }

        /** ContentType enum. */
        enum ContentType {

            /** DEFAULT value */
            DEFAULT = 0,

            /** CAROUSEL value */
            CAROUSEL = 1
        }
    }

    /**
     * Properties of a AIRichResponseMapMetadata.
     * @deprecated Use AICommonDeprecated.AIRichResponseMapMetadata.$Properties instead.
     */
    interface IAIRichResponseMapMetadata extends AICommonDeprecated.AIRichResponseMapMetadata.$Properties {
    }

    /** Represents a AIRichResponseMapMetadata. */
    class AIRichResponseMapMetadata {

        /**
         * Constructs a new AIRichResponseMapMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.AIRichResponseMapMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRichResponseMapMetadata centerLatitude. */
        centerLatitude?: (number|null);

        /** AIRichResponseMapMetadata centerLongitude. */
        centerLongitude?: (number|null);

        /** AIRichResponseMapMetadata latitudeDelta. */
        latitudeDelta?: (number|null);

        /** AIRichResponseMapMetadata longitudeDelta. */
        longitudeDelta?: (number|null);

        /** AIRichResponseMapMetadata annotations. */
        annotations: AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Properties[];

        /** AIRichResponseMapMetadata showInfoList. */
        showInfoList?: (boolean|null);

        /**
         * Creates a new AIRichResponseMapMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseMapMetadata instance
         */
        static create(properties: AICommonDeprecated.AIRichResponseMapMetadata.$Shape): AICommonDeprecated.AIRichResponseMapMetadata & AICommonDeprecated.AIRichResponseMapMetadata.$Shape;
        static create(properties?: AICommonDeprecated.AIRichResponseMapMetadata.$Properties): AICommonDeprecated.AIRichResponseMapMetadata;

        /**
         * Encodes the specified AIRichResponseMapMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.verify|verify} messages.
         * @param message AIRichResponseMapMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommonDeprecated.AIRichResponseMapMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseMapMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.verify|verify} messages.
         * @param message AIRichResponseMapMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommonDeprecated.AIRichResponseMapMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseMapMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseMapMetadata & AICommonDeprecated.AIRichResponseMapMetadata.$Shape} AIRichResponseMapMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseMapMetadata & AICommonDeprecated.AIRichResponseMapMetadata.$Shape;

        /**
         * Decodes a AIRichResponseMapMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseMapMetadata & AICommonDeprecated.AIRichResponseMapMetadata.$Shape} AIRichResponseMapMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseMapMetadata & AICommonDeprecated.AIRichResponseMapMetadata.$Shape;

        /**
         * Verifies a AIRichResponseMapMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseMapMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseMapMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseMapMetadata;

        /**
         * Creates a plain object from a AIRichResponseMapMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseMapMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommonDeprecated.AIRichResponseMapMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseMapMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRichResponseMapMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRichResponseMapMetadata {

        /** Properties of a AIRichResponseMapMetadata. */
        interface $Properties {

            /** AIRichResponseMapMetadata centerLatitude */
            centerLatitude?: (number|null);

            /** AIRichResponseMapMetadata centerLongitude */
            centerLongitude?: (number|null);

            /** AIRichResponseMapMetadata latitudeDelta */
            latitudeDelta?: (number|null);

            /** AIRichResponseMapMetadata longitudeDelta */
            longitudeDelta?: (number|null);

            /** AIRichResponseMapMetadata annotations */
            annotations?: (AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Properties[]|null);

            /** AIRichResponseMapMetadata showInfoList */
            showInfoList?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRichResponseMapMetadata. */
        type $Shape = AICommonDeprecated.AIRichResponseMapMetadata.$Properties;

        /**
         * Properties of a AIRichResponseMapAnnotation.
         * @deprecated Use AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Properties instead.
         */
        interface IAIRichResponseMapAnnotation extends AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Properties {
        }

        /** Represents a AIRichResponseMapAnnotation. */
        class AIRichResponseMapAnnotation {

            /**
             * Constructs a new AIRichResponseMapAnnotation.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AIRichResponseMapAnnotation annotationNumber. */
            annotationNumber?: (number|null);

            /** AIRichResponseMapAnnotation latitude. */
            latitude?: (number|null);

            /** AIRichResponseMapAnnotation longitude. */
            longitude?: (number|null);

            /** AIRichResponseMapAnnotation title. */
            title?: (string|null);

            /** AIRichResponseMapAnnotation body. */
            body?: (string|null);

            /**
             * Creates a new AIRichResponseMapAnnotation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseMapAnnotation instance
             */
            static create(properties: AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Shape): AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation & AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Shape;
            static create(properties?: AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Properties): AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;

            /**
             * Encodes the specified AIRichResponseMapAnnotation message. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.verify|verify} messages.
             * @param message AIRichResponseMapAnnotation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseMapAnnotation message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.verify|verify} messages.
             * @param message AIRichResponseMapAnnotation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseMapAnnotation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation & AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Shape} AIRichResponseMapAnnotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation & AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Shape;

            /**
             * Decodes a AIRichResponseMapAnnotation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation & AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Shape} AIRichResponseMapAnnotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation & AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Shape;

            /**
             * Verifies a AIRichResponseMapAnnotation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseMapAnnotation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseMapAnnotation
             */
            static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;

            /**
             * Creates a plain object from a AIRichResponseMapAnnotation message. Also converts values to other types if specified.
             * @param message AIRichResponseMapAnnotation
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseMapAnnotation to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AIRichResponseMapAnnotation
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AIRichResponseMapAnnotation {

            /** Properties of a AIRichResponseMapAnnotation. */
            interface $Properties {

                /** AIRichResponseMapAnnotation annotationNumber */
                annotationNumber?: (number|null);

                /** AIRichResponseMapAnnotation latitude */
                latitude?: (number|null);

                /** AIRichResponseMapAnnotation longitude */
                longitude?: (number|null);

                /** AIRichResponseMapAnnotation title */
                title?: (string|null);

                /** AIRichResponseMapAnnotation body */
                body?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a AIRichResponseMapAnnotation. */
            type $Shape = AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.$Properties;
        }
    }

    /**
     * Properties of a AIRichResponseLatexMetadata.
     * @deprecated Use AICommonDeprecated.AIRichResponseLatexMetadata.$Properties instead.
     */
    interface IAIRichResponseLatexMetadata extends AICommonDeprecated.AIRichResponseLatexMetadata.$Properties {
    }

    /** Represents a AIRichResponseLatexMetadata. */
    class AIRichResponseLatexMetadata {

        /**
         * Constructs a new AIRichResponseLatexMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.AIRichResponseLatexMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRichResponseLatexMetadata text. */
        text?: (string|null);

        /** AIRichResponseLatexMetadata expressions. */
        expressions: AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Properties[];

        /**
         * Creates a new AIRichResponseLatexMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseLatexMetadata instance
         */
        static create(properties: AICommonDeprecated.AIRichResponseLatexMetadata.$Shape): AICommonDeprecated.AIRichResponseLatexMetadata & AICommonDeprecated.AIRichResponseLatexMetadata.$Shape;
        static create(properties?: AICommonDeprecated.AIRichResponseLatexMetadata.$Properties): AICommonDeprecated.AIRichResponseLatexMetadata;

        /**
         * Encodes the specified AIRichResponseLatexMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.verify|verify} messages.
         * @param message AIRichResponseLatexMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommonDeprecated.AIRichResponseLatexMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseLatexMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.verify|verify} messages.
         * @param message AIRichResponseLatexMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommonDeprecated.AIRichResponseLatexMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseLatexMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseLatexMetadata & AICommonDeprecated.AIRichResponseLatexMetadata.$Shape} AIRichResponseLatexMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseLatexMetadata & AICommonDeprecated.AIRichResponseLatexMetadata.$Shape;

        /**
         * Decodes a AIRichResponseLatexMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseLatexMetadata & AICommonDeprecated.AIRichResponseLatexMetadata.$Shape} AIRichResponseLatexMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseLatexMetadata & AICommonDeprecated.AIRichResponseLatexMetadata.$Shape;

        /**
         * Verifies a AIRichResponseLatexMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseLatexMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseLatexMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseLatexMetadata;

        /**
         * Creates a plain object from a AIRichResponseLatexMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseLatexMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommonDeprecated.AIRichResponseLatexMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseLatexMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRichResponseLatexMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRichResponseLatexMetadata {

        /** Properties of a AIRichResponseLatexMetadata. */
        interface $Properties {

            /** AIRichResponseLatexMetadata text */
            text?: (string|null);

            /** AIRichResponseLatexMetadata expressions */
            expressions?: (AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRichResponseLatexMetadata. */
        type $Shape = AICommonDeprecated.AIRichResponseLatexMetadata.$Properties;

        /**
         * Properties of a AIRichResponseLatexExpression.
         * @deprecated Use AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Properties instead.
         */
        interface IAIRichResponseLatexExpression extends AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Properties {
        }

        /** Represents a AIRichResponseLatexExpression. */
        class AIRichResponseLatexExpression {

            /**
             * Constructs a new AIRichResponseLatexExpression.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AIRichResponseLatexExpression latexExpression. */
            latexExpression?: (string|null);

            /** AIRichResponseLatexExpression url. */
            url?: (string|null);

            /** AIRichResponseLatexExpression width. */
            width?: (number|null);

            /** AIRichResponseLatexExpression height. */
            height?: (number|null);

            /** AIRichResponseLatexExpression fontHeight. */
            fontHeight?: (number|null);

            /** AIRichResponseLatexExpression imageTopPadding. */
            imageTopPadding?: (number|null);

            /** AIRichResponseLatexExpression imageLeadingPadding. */
            imageLeadingPadding?: (number|null);

            /** AIRichResponseLatexExpression imageBottomPadding. */
            imageBottomPadding?: (number|null);

            /** AIRichResponseLatexExpression imageTrailingPadding. */
            imageTrailingPadding?: (number|null);

            /**
             * Creates a new AIRichResponseLatexExpression instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseLatexExpression instance
             */
            static create(properties: AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Shape): AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression & AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Shape;
            static create(properties?: AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Properties): AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;

            /**
             * Encodes the specified AIRichResponseLatexExpression message. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.verify|verify} messages.
             * @param message AIRichResponseLatexExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseLatexExpression message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.verify|verify} messages.
             * @param message AIRichResponseLatexExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseLatexExpression message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression & AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Shape} AIRichResponseLatexExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression & AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Shape;

            /**
             * Decodes a AIRichResponseLatexExpression message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression & AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Shape} AIRichResponseLatexExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression & AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Shape;

            /**
             * Verifies a AIRichResponseLatexExpression message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseLatexExpression message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseLatexExpression
             */
            static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;

            /**
             * Creates a plain object from a AIRichResponseLatexExpression message. Also converts values to other types if specified.
             * @param message AIRichResponseLatexExpression
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseLatexExpression to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AIRichResponseLatexExpression
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AIRichResponseLatexExpression {

            /** Properties of a AIRichResponseLatexExpression. */
            interface $Properties {

                /** AIRichResponseLatexExpression latexExpression */
                latexExpression?: (string|null);

                /** AIRichResponseLatexExpression url */
                url?: (string|null);

                /** AIRichResponseLatexExpression width */
                width?: (number|null);

                /** AIRichResponseLatexExpression height */
                height?: (number|null);

                /** AIRichResponseLatexExpression fontHeight */
                fontHeight?: (number|null);

                /** AIRichResponseLatexExpression imageTopPadding */
                imageTopPadding?: (number|null);

                /** AIRichResponseLatexExpression imageLeadingPadding */
                imageLeadingPadding?: (number|null);

                /** AIRichResponseLatexExpression imageBottomPadding */
                imageBottomPadding?: (number|null);

                /** AIRichResponseLatexExpression imageTrailingPadding */
                imageTrailingPadding?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a AIRichResponseLatexExpression. */
            type $Shape = AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.$Properties;
        }
    }

    /**
     * Properties of a AIRichResponseDynamicMetadata.
     * @deprecated Use AICommonDeprecated.AIRichResponseDynamicMetadata.$Properties instead.
     */
    interface IAIRichResponseDynamicMetadata extends AICommonDeprecated.AIRichResponseDynamicMetadata.$Properties {
    }

    /** Represents a AIRichResponseDynamicMetadata. */
    class AIRichResponseDynamicMetadata {

        /**
         * Constructs a new AIRichResponseDynamicMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.AIRichResponseDynamicMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRichResponseDynamicMetadata type. */
        type?: (AICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType|null);

        /** AIRichResponseDynamicMetadata version. */
        version?: (number|Long|null);

        /** AIRichResponseDynamicMetadata url. */
        url?: (string|null);

        /** AIRichResponseDynamicMetadata loopCount. */
        loopCount?: (number|null);

        /**
         * Creates a new AIRichResponseDynamicMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseDynamicMetadata instance
         */
        static create(properties: AICommonDeprecated.AIRichResponseDynamicMetadata.$Shape): AICommonDeprecated.AIRichResponseDynamicMetadata & AICommonDeprecated.AIRichResponseDynamicMetadata.$Shape;
        static create(properties?: AICommonDeprecated.AIRichResponseDynamicMetadata.$Properties): AICommonDeprecated.AIRichResponseDynamicMetadata;

        /**
         * Encodes the specified AIRichResponseDynamicMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseDynamicMetadata.verify|verify} messages.
         * @param message AIRichResponseDynamicMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommonDeprecated.AIRichResponseDynamicMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseDynamicMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseDynamicMetadata.verify|verify} messages.
         * @param message AIRichResponseDynamicMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommonDeprecated.AIRichResponseDynamicMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseDynamicMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseDynamicMetadata & AICommonDeprecated.AIRichResponseDynamicMetadata.$Shape} AIRichResponseDynamicMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseDynamicMetadata & AICommonDeprecated.AIRichResponseDynamicMetadata.$Shape;

        /**
         * Decodes a AIRichResponseDynamicMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseDynamicMetadata & AICommonDeprecated.AIRichResponseDynamicMetadata.$Shape} AIRichResponseDynamicMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseDynamicMetadata & AICommonDeprecated.AIRichResponseDynamicMetadata.$Shape;

        /**
         * Verifies a AIRichResponseDynamicMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseDynamicMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseDynamicMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseDynamicMetadata;

        /**
         * Creates a plain object from a AIRichResponseDynamicMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseDynamicMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommonDeprecated.AIRichResponseDynamicMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseDynamicMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRichResponseDynamicMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRichResponseDynamicMetadata {

        /** Properties of a AIRichResponseDynamicMetadata. */
        interface $Properties {

            /** AIRichResponseDynamicMetadata type */
            type?: (AICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType|null);

            /** AIRichResponseDynamicMetadata version */
            version?: (number|Long|null);

            /** AIRichResponseDynamicMetadata url */
            url?: (string|null);

            /** AIRichResponseDynamicMetadata loopCount */
            loopCount?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRichResponseDynamicMetadata. */
        type $Shape = AICommonDeprecated.AIRichResponseDynamicMetadata.$Properties;

        /** AIRichResponseDynamicMetadataType enum. */
        enum AIRichResponseDynamicMetadataType {

            /** AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN value */
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN = 0,

            /** AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE value */
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE = 1,

            /** AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF value */
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF = 2
        }
    }

    /**
     * Properties of a AIRichResponseTableMetadata.
     * @deprecated Use AICommonDeprecated.AIRichResponseTableMetadata.$Properties instead.
     */
    interface IAIRichResponseTableMetadata extends AICommonDeprecated.AIRichResponseTableMetadata.$Properties {
    }

    /** Represents a AIRichResponseTableMetadata. */
    class AIRichResponseTableMetadata {

        /**
         * Constructs a new AIRichResponseTableMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.AIRichResponseTableMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRichResponseTableMetadata rows. */
        rows: AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Properties[];

        /** AIRichResponseTableMetadata title. */
        title?: (string|null);

        /**
         * Creates a new AIRichResponseTableMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseTableMetadata instance
         */
        static create(properties: AICommonDeprecated.AIRichResponseTableMetadata.$Shape): AICommonDeprecated.AIRichResponseTableMetadata & AICommonDeprecated.AIRichResponseTableMetadata.$Shape;
        static create(properties?: AICommonDeprecated.AIRichResponseTableMetadata.$Properties): AICommonDeprecated.AIRichResponseTableMetadata;

        /**
         * Encodes the specified AIRichResponseTableMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.verify|verify} messages.
         * @param message AIRichResponseTableMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommonDeprecated.AIRichResponseTableMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseTableMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.verify|verify} messages.
         * @param message AIRichResponseTableMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommonDeprecated.AIRichResponseTableMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseTableMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseTableMetadata & AICommonDeprecated.AIRichResponseTableMetadata.$Shape} AIRichResponseTableMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseTableMetadata & AICommonDeprecated.AIRichResponseTableMetadata.$Shape;

        /**
         * Decodes a AIRichResponseTableMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseTableMetadata & AICommonDeprecated.AIRichResponseTableMetadata.$Shape} AIRichResponseTableMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseTableMetadata & AICommonDeprecated.AIRichResponseTableMetadata.$Shape;

        /**
         * Verifies a AIRichResponseTableMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseTableMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseTableMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseTableMetadata;

        /**
         * Creates a plain object from a AIRichResponseTableMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseTableMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommonDeprecated.AIRichResponseTableMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseTableMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRichResponseTableMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRichResponseTableMetadata {

        /** Properties of a AIRichResponseTableMetadata. */
        interface $Properties {

            /** AIRichResponseTableMetadata rows */
            rows?: (AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Properties[]|null);

            /** AIRichResponseTableMetadata title */
            title?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRichResponseTableMetadata. */
        type $Shape = AICommonDeprecated.AIRichResponseTableMetadata.$Properties;

        /**
         * Properties of a AIRichResponseTableRow.
         * @deprecated Use AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Properties instead.
         */
        interface IAIRichResponseTableRow extends AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Properties {
        }

        /** Represents a AIRichResponseTableRow. */
        class AIRichResponseTableRow {

            /**
             * Constructs a new AIRichResponseTableRow.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AIRichResponseTableRow items. */
            items: string[];

            /** AIRichResponseTableRow isHeading. */
            isHeading?: (boolean|null);

            /**
             * Creates a new AIRichResponseTableRow instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseTableRow instance
             */
            static create(properties: AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Shape): AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow & AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Shape;
            static create(properties?: AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Properties): AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow;

            /**
             * Encodes the specified AIRichResponseTableRow message. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.verify|verify} messages.
             * @param message AIRichResponseTableRow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseTableRow message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.verify|verify} messages.
             * @param message AIRichResponseTableRow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseTableRow message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow & AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Shape} AIRichResponseTableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow & AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Shape;

            /**
             * Decodes a AIRichResponseTableRow message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow & AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Shape} AIRichResponseTableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow & AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Shape;

            /**
             * Verifies a AIRichResponseTableRow message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseTableRow message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseTableRow
             */
            static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow;

            /**
             * Creates a plain object from a AIRichResponseTableRow message. Also converts values to other types if specified.
             * @param message AIRichResponseTableRow
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseTableRow to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AIRichResponseTableRow
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AIRichResponseTableRow {

            /** Properties of a AIRichResponseTableRow. */
            interface $Properties {

                /** AIRichResponseTableRow items */
                items?: (string[]|null);

                /** AIRichResponseTableRow isHeading */
                isHeading?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a AIRichResponseTableRow. */
            type $Shape = AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.$Properties;
        }
    }

    /**
     * Properties of a AIRichResponseCodeMetadata.
     * @deprecated Use AICommonDeprecated.AIRichResponseCodeMetadata.$Properties instead.
     */
    interface IAIRichResponseCodeMetadata extends AICommonDeprecated.AIRichResponseCodeMetadata.$Properties {
    }

    /** Represents a AIRichResponseCodeMetadata. */
    class AIRichResponseCodeMetadata {

        /**
         * Constructs a new AIRichResponseCodeMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.AIRichResponseCodeMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRichResponseCodeMetadata codeLanguage. */
        codeLanguage?: (string|null);

        /** AIRichResponseCodeMetadata codeBlocks. */
        codeBlocks: AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Properties[];

        /**
         * Creates a new AIRichResponseCodeMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseCodeMetadata instance
         */
        static create(properties: AICommonDeprecated.AIRichResponseCodeMetadata.$Shape): AICommonDeprecated.AIRichResponseCodeMetadata & AICommonDeprecated.AIRichResponseCodeMetadata.$Shape;
        static create(properties?: AICommonDeprecated.AIRichResponseCodeMetadata.$Properties): AICommonDeprecated.AIRichResponseCodeMetadata;

        /**
         * Encodes the specified AIRichResponseCodeMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.verify|verify} messages.
         * @param message AIRichResponseCodeMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommonDeprecated.AIRichResponseCodeMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseCodeMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.verify|verify} messages.
         * @param message AIRichResponseCodeMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommonDeprecated.AIRichResponseCodeMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseCodeMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseCodeMetadata & AICommonDeprecated.AIRichResponseCodeMetadata.$Shape} AIRichResponseCodeMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseCodeMetadata & AICommonDeprecated.AIRichResponseCodeMetadata.$Shape;

        /**
         * Decodes a AIRichResponseCodeMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseCodeMetadata & AICommonDeprecated.AIRichResponseCodeMetadata.$Shape} AIRichResponseCodeMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseCodeMetadata & AICommonDeprecated.AIRichResponseCodeMetadata.$Shape;

        /**
         * Verifies a AIRichResponseCodeMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseCodeMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseCodeMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseCodeMetadata;

        /**
         * Creates a plain object from a AIRichResponseCodeMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseCodeMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommonDeprecated.AIRichResponseCodeMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseCodeMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRichResponseCodeMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRichResponseCodeMetadata {

        /** Properties of a AIRichResponseCodeMetadata. */
        interface $Properties {

            /** AIRichResponseCodeMetadata codeLanguage */
            codeLanguage?: (string|null);

            /** AIRichResponseCodeMetadata codeBlocks */
            codeBlocks?: (AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRichResponseCodeMetadata. */
        type $Shape = AICommonDeprecated.AIRichResponseCodeMetadata.$Properties;

        /**
         * Properties of a AIRichResponseCodeBlock.
         * @deprecated Use AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Properties instead.
         */
        interface IAIRichResponseCodeBlock extends AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Properties {
        }

        /** Represents a AIRichResponseCodeBlock. */
        class AIRichResponseCodeBlock {

            /**
             * Constructs a new AIRichResponseCodeBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AIRichResponseCodeBlock highlightType. */
            highlightType?: (AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType|null);

            /** AIRichResponseCodeBlock codeContent. */
            codeContent?: (string|null);

            /**
             * Creates a new AIRichResponseCodeBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseCodeBlock instance
             */
            static create(properties: AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Shape): AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock & AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Shape;
            static create(properties?: AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Properties): AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;

            /**
             * Encodes the specified AIRichResponseCodeBlock message. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.verify|verify} messages.
             * @param message AIRichResponseCodeBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseCodeBlock message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.verify|verify} messages.
             * @param message AIRichResponseCodeBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseCodeBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock & AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Shape} AIRichResponseCodeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock & AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Shape;

            /**
             * Decodes a AIRichResponseCodeBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock & AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Shape} AIRichResponseCodeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock & AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Shape;

            /**
             * Verifies a AIRichResponseCodeBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseCodeBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseCodeBlock
             */
            static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;

            /**
             * Creates a plain object from a AIRichResponseCodeBlock message. Also converts values to other types if specified.
             * @param message AIRichResponseCodeBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseCodeBlock to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AIRichResponseCodeBlock
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AIRichResponseCodeBlock {

            /** Properties of a AIRichResponseCodeBlock. */
            interface $Properties {

                /** AIRichResponseCodeBlock highlightType */
                highlightType?: (AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType|null);

                /** AIRichResponseCodeBlock codeContent */
                codeContent?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a AIRichResponseCodeBlock. */
            type $Shape = AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.$Properties;
        }

        /** AIRichResponseCodeHighlightType enum. */
        enum AIRichResponseCodeHighlightType {

            /** AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT value */
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT = 0,

            /** AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD value */
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD = 1,

            /** AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD value */
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD = 2,

            /** AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING value */
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING = 3,

            /** AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER value */
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER = 4,

            /** AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT value */
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT = 5
        }
    }

    /**
     * Properties of a AIRichResponseInlineImageMetadata.
     * @deprecated Use AICommonDeprecated.AIRichResponseInlineImageMetadata.$Properties instead.
     */
    interface IAIRichResponseInlineImageMetadata extends AICommonDeprecated.AIRichResponseInlineImageMetadata.$Properties {
    }

    /** Represents a AIRichResponseInlineImageMetadata. */
    class AIRichResponseInlineImageMetadata {

        /**
         * Constructs a new AIRichResponseInlineImageMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.AIRichResponseInlineImageMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRichResponseInlineImageMetadata imageUrl. */
        imageUrl?: (AICommonDeprecated.AIRichResponseImageURL.$Properties|null);

        /** AIRichResponseInlineImageMetadata imageText. */
        imageText?: (string|null);

        /** AIRichResponseInlineImageMetadata alignment. */
        alignment?: (AICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment|null);

        /** AIRichResponseInlineImageMetadata tapLinkUrl. */
        tapLinkUrl?: (string|null);

        /**
         * Creates a new AIRichResponseInlineImageMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseInlineImageMetadata instance
         */
        static create(properties: AICommonDeprecated.AIRichResponseInlineImageMetadata.$Shape): AICommonDeprecated.AIRichResponseInlineImageMetadata & AICommonDeprecated.AIRichResponseInlineImageMetadata.$Shape;
        static create(properties?: AICommonDeprecated.AIRichResponseInlineImageMetadata.$Properties): AICommonDeprecated.AIRichResponseInlineImageMetadata;

        /**
         * Encodes the specified AIRichResponseInlineImageMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseInlineImageMetadata.verify|verify} messages.
         * @param message AIRichResponseInlineImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommonDeprecated.AIRichResponseInlineImageMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseInlineImageMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseInlineImageMetadata.verify|verify} messages.
         * @param message AIRichResponseInlineImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommonDeprecated.AIRichResponseInlineImageMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseInlineImageMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseInlineImageMetadata & AICommonDeprecated.AIRichResponseInlineImageMetadata.$Shape} AIRichResponseInlineImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseInlineImageMetadata & AICommonDeprecated.AIRichResponseInlineImageMetadata.$Shape;

        /**
         * Decodes a AIRichResponseInlineImageMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseInlineImageMetadata & AICommonDeprecated.AIRichResponseInlineImageMetadata.$Shape} AIRichResponseInlineImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseInlineImageMetadata & AICommonDeprecated.AIRichResponseInlineImageMetadata.$Shape;

        /**
         * Verifies a AIRichResponseInlineImageMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseInlineImageMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseInlineImageMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseInlineImageMetadata;

        /**
         * Creates a plain object from a AIRichResponseInlineImageMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseInlineImageMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommonDeprecated.AIRichResponseInlineImageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseInlineImageMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRichResponseInlineImageMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRichResponseInlineImageMetadata {

        /** Properties of a AIRichResponseInlineImageMetadata. */
        interface $Properties {

            /** AIRichResponseInlineImageMetadata imageUrl */
            imageUrl?: (AICommonDeprecated.AIRichResponseImageURL.$Properties|null);

            /** AIRichResponseInlineImageMetadata imageText */
            imageText?: (string|null);

            /** AIRichResponseInlineImageMetadata alignment */
            alignment?: (AICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment|null);

            /** AIRichResponseInlineImageMetadata tapLinkUrl */
            tapLinkUrl?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRichResponseInlineImageMetadata. */
        type $Shape = AICommonDeprecated.AIRichResponseInlineImageMetadata.$Properties;

        /** AIRichResponseImageAlignment enum. */
        enum AIRichResponseImageAlignment {

            /** AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED value */
            AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED = 0,

            /** AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED value */
            AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED = 1,

            /** AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED value */
            AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED = 2
        }
    }

    /**
     * Properties of a AIRichResponseGridImageMetadata.
     * @deprecated Use AICommonDeprecated.AIRichResponseGridImageMetadata.$Properties instead.
     */
    interface IAIRichResponseGridImageMetadata extends AICommonDeprecated.AIRichResponseGridImageMetadata.$Properties {
    }

    /** Represents a AIRichResponseGridImageMetadata. */
    class AIRichResponseGridImageMetadata {

        /**
         * Constructs a new AIRichResponseGridImageMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.AIRichResponseGridImageMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRichResponseGridImageMetadata gridImageUrl. */
        gridImageUrl?: (AICommonDeprecated.AIRichResponseImageURL.$Properties|null);

        /** AIRichResponseGridImageMetadata imageUrls. */
        imageUrls: AICommonDeprecated.AIRichResponseImageURL.$Properties[];

        /**
         * Creates a new AIRichResponseGridImageMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseGridImageMetadata instance
         */
        static create(properties: AICommonDeprecated.AIRichResponseGridImageMetadata.$Shape): AICommonDeprecated.AIRichResponseGridImageMetadata & AICommonDeprecated.AIRichResponseGridImageMetadata.$Shape;
        static create(properties?: AICommonDeprecated.AIRichResponseGridImageMetadata.$Properties): AICommonDeprecated.AIRichResponseGridImageMetadata;

        /**
         * Encodes the specified AIRichResponseGridImageMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseGridImageMetadata.verify|verify} messages.
         * @param message AIRichResponseGridImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommonDeprecated.AIRichResponseGridImageMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseGridImageMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseGridImageMetadata.verify|verify} messages.
         * @param message AIRichResponseGridImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommonDeprecated.AIRichResponseGridImageMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseGridImageMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseGridImageMetadata & AICommonDeprecated.AIRichResponseGridImageMetadata.$Shape} AIRichResponseGridImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseGridImageMetadata & AICommonDeprecated.AIRichResponseGridImageMetadata.$Shape;

        /**
         * Decodes a AIRichResponseGridImageMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseGridImageMetadata & AICommonDeprecated.AIRichResponseGridImageMetadata.$Shape} AIRichResponseGridImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseGridImageMetadata & AICommonDeprecated.AIRichResponseGridImageMetadata.$Shape;

        /**
         * Verifies a AIRichResponseGridImageMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseGridImageMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseGridImageMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseGridImageMetadata;

        /**
         * Creates a plain object from a AIRichResponseGridImageMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseGridImageMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommonDeprecated.AIRichResponseGridImageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseGridImageMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRichResponseGridImageMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRichResponseGridImageMetadata {

        /** Properties of a AIRichResponseGridImageMetadata. */
        interface $Properties {

            /** AIRichResponseGridImageMetadata gridImageUrl */
            gridImageUrl?: (AICommonDeprecated.AIRichResponseImageURL.$Properties|null);

            /** AIRichResponseGridImageMetadata imageUrls */
            imageUrls?: (AICommonDeprecated.AIRichResponseImageURL.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRichResponseGridImageMetadata. */
        type $Shape = AICommonDeprecated.AIRichResponseGridImageMetadata.$Properties;
    }

    /**
     * Properties of a AIRichResponseImageURL.
     * @deprecated Use AICommonDeprecated.AIRichResponseImageURL.$Properties instead.
     */
    interface IAIRichResponseImageURL extends AICommonDeprecated.AIRichResponseImageURL.$Properties {
    }

    /** Represents a AIRichResponseImageURL. */
    class AIRichResponseImageURL {

        /**
         * Constructs a new AIRichResponseImageURL.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.AIRichResponseImageURL.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRichResponseImageURL imagePreviewUrl. */
        imagePreviewUrl?: (string|null);

        /** AIRichResponseImageURL imageHighResUrl. */
        imageHighResUrl?: (string|null);

        /** AIRichResponseImageURL sourceUrl. */
        sourceUrl?: (string|null);

        /**
         * Creates a new AIRichResponseImageURL instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseImageURL instance
         */
        static create(properties: AICommonDeprecated.AIRichResponseImageURL.$Shape): AICommonDeprecated.AIRichResponseImageURL & AICommonDeprecated.AIRichResponseImageURL.$Shape;
        static create(properties?: AICommonDeprecated.AIRichResponseImageURL.$Properties): AICommonDeprecated.AIRichResponseImageURL;

        /**
         * Encodes the specified AIRichResponseImageURL message. Does not implicitly {@link AICommonDeprecated.AIRichResponseImageURL.verify|verify} messages.
         * @param message AIRichResponseImageURL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommonDeprecated.AIRichResponseImageURL.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseImageURL message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseImageURL.verify|verify} messages.
         * @param message AIRichResponseImageURL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommonDeprecated.AIRichResponseImageURL.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseImageURL message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseImageURL & AICommonDeprecated.AIRichResponseImageURL.$Shape} AIRichResponseImageURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseImageURL & AICommonDeprecated.AIRichResponseImageURL.$Shape;

        /**
         * Decodes a AIRichResponseImageURL message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseImageURL & AICommonDeprecated.AIRichResponseImageURL.$Shape} AIRichResponseImageURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseImageURL & AICommonDeprecated.AIRichResponseImageURL.$Shape;

        /**
         * Verifies a AIRichResponseImageURL message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseImageURL message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseImageURL
         */
        static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseImageURL;

        /**
         * Creates a plain object from a AIRichResponseImageURL message. Also converts values to other types if specified.
         * @param message AIRichResponseImageURL
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommonDeprecated.AIRichResponseImageURL, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseImageURL to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRichResponseImageURL
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRichResponseImageURL {

        /** Properties of a AIRichResponseImageURL. */
        interface $Properties {

            /** AIRichResponseImageURL imagePreviewUrl */
            imagePreviewUrl?: (string|null);

            /** AIRichResponseImageURL imageHighResUrl */
            imageHighResUrl?: (string|null);

            /** AIRichResponseImageURL sourceUrl */
            sourceUrl?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRichResponseImageURL. */
        type $Shape = AICommonDeprecated.AIRichResponseImageURL.$Properties;
    }

    /** AIRichResponseSubMessageType enum. */
    enum AIRichResponseSubMessageType {

        /** AI_RICH_RESPONSE_UNKNOWN value */
        AI_RICH_RESPONSE_UNKNOWN = 0,

        /** AI_RICH_RESPONSE_GRID_IMAGE value */
        AI_RICH_RESPONSE_GRID_IMAGE = 1,

        /** AI_RICH_RESPONSE_TEXT value */
        AI_RICH_RESPONSE_TEXT = 2,

        /** AI_RICH_RESPONSE_INLINE_IMAGE value */
        AI_RICH_RESPONSE_INLINE_IMAGE = 3,

        /** AI_RICH_RESPONSE_TABLE value */
        AI_RICH_RESPONSE_TABLE = 4,

        /** AI_RICH_RESPONSE_CODE value */
        AI_RICH_RESPONSE_CODE = 5,

        /** AI_RICH_RESPONSE_DYNAMIC value */
        AI_RICH_RESPONSE_DYNAMIC = 6,

        /** AI_RICH_RESPONSE_MAP value */
        AI_RICH_RESPONSE_MAP = 7,

        /** AI_RICH_RESPONSE_LATEX value */
        AI_RICH_RESPONSE_LATEX = 8,

        /** AI_RICH_RESPONSE_CONTENT_ITEMS value */
        AI_RICH_RESPONSE_CONTENT_ITEMS = 9
    }

    /** AIRichResponseMessageType enum. */
    enum AIRichResponseMessageType {

        /** AI_RICH_RESPONSE_TYPE_UNKNOWN value */
        AI_RICH_RESPONSE_TYPE_UNKNOWN = 0,

        /** AI_RICH_RESPONSE_TYPE_STANDARD value */
        AI_RICH_RESPONSE_TYPE_STANDARD = 1
    }
}

/** Namespace AICommon. */
export namespace AICommon {

    /**
     * Properties of a BizAIMetadataSync.
     * @deprecated Use AICommon.BizAIMetadataSync.$Properties instead.
     */
    interface IBizAIMetadataSync extends AICommon.BizAIMetadataSync.$Properties {
    }

    /** Represents a BizAIMetadataSync. */
    class BizAIMetadataSync {

        /**
         * Constructs a new BizAIMetadataSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BizAIMetadataSync.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BizAIMetadataSync serverEvent. */
        serverEvent?: (AICommon.BizAIMetadataSync.ServerEvent.$Properties|null);

        /** BizAIMetadataSync operation. */
        operation?: "serverEvent";

        /**
         * Creates a new BizAIMetadataSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BizAIMetadataSync instance
         */
        static create(properties: AICommon.BizAIMetadataSync.$Shape): AICommon.BizAIMetadataSync & AICommon.BizAIMetadataSync.$Shape;
        static create(properties?: AICommon.BizAIMetadataSync.$Properties): AICommon.BizAIMetadataSync;

        /**
         * Encodes the specified BizAIMetadataSync message. Does not implicitly {@link AICommon.BizAIMetadataSync.verify|verify} messages.
         * @param message BizAIMetadataSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BizAIMetadataSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BizAIMetadataSync message, length delimited. Does not implicitly {@link AICommon.BizAIMetadataSync.verify|verify} messages.
         * @param message BizAIMetadataSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BizAIMetadataSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BizAIMetadataSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BizAIMetadataSync & AICommon.BizAIMetadataSync.$Shape} BizAIMetadataSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BizAIMetadataSync & AICommon.BizAIMetadataSync.$Shape;

        /**
         * Decodes a BizAIMetadataSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BizAIMetadataSync & AICommon.BizAIMetadataSync.$Shape} BizAIMetadataSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BizAIMetadataSync & AICommon.BizAIMetadataSync.$Shape;

        /**
         * Verifies a BizAIMetadataSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BizAIMetadataSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BizAIMetadataSync
         */
        static fromObject(object: { [k: string]: any }): AICommon.BizAIMetadataSync;

        /**
         * Creates a plain object from a BizAIMetadataSync message. Also converts values to other types if specified.
         * @param message BizAIMetadataSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BizAIMetadataSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BizAIMetadataSync to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BizAIMetadataSync
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BizAIMetadataSync {

        /** Properties of a BizAIMetadataSync. */
        interface $Properties {

            /** BizAIMetadataSync serverEvent */
            serverEvent?: (AICommon.BizAIMetadataSync.ServerEvent.$Properties|null);

            /** BizAIMetadataSync operation */
            operation?: "serverEvent";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a BizAIMetadataSync. */
        type $Shape = {
          serverEvent?: AICommon.BizAIMetadataSync.ServerEvent.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ operation?: undefined; serverEvent?: null }|{ operation?: "serverEvent"; serverEvent: AICommon.BizAIMetadataSync.ServerEvent.$Shape })
        );

        /**
         * Properties of a ServerEvent.
         * @deprecated Use AICommon.BizAIMetadataSync.ServerEvent.$Properties instead.
         */
        interface IServerEvent extends AICommon.BizAIMetadataSync.ServerEvent.$Properties {
        }

        /** Represents a ServerEvent. */
        class ServerEvent {

            /**
             * Constructs a new ServerEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BizAIMetadataSync.ServerEvent.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ServerEvent protocolEvent. */
            protocolEvent?: (AICommon.BizAIMetadataSync.ServerEvent.ProtocolEvent|null);

            /** ServerEvent agentOnboardingStarted. */
            agentOnboardingStarted?: (AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Properties|null);

            /** ServerEvent event. */
            event?: ("protocolEvent"|"agentOnboardingStarted");

            /**
             * Creates a new ServerEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerEvent instance
             */
            static create(properties: AICommon.BizAIMetadataSync.ServerEvent.$Shape): AICommon.BizAIMetadataSync.ServerEvent & AICommon.BizAIMetadataSync.ServerEvent.$Shape;
            static create(properties?: AICommon.BizAIMetadataSync.ServerEvent.$Properties): AICommon.BizAIMetadataSync.ServerEvent;

            /**
             * Encodes the specified ServerEvent message. Does not implicitly {@link AICommon.BizAIMetadataSync.ServerEvent.verify|verify} messages.
             * @param message ServerEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.BizAIMetadataSync.ServerEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServerEvent message, length delimited. Does not implicitly {@link AICommon.BizAIMetadataSync.ServerEvent.verify|verify} messages.
             * @param message ServerEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.BizAIMetadataSync.ServerEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.BizAIMetadataSync.ServerEvent & AICommon.BizAIMetadataSync.ServerEvent.$Shape} ServerEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BizAIMetadataSync.ServerEvent & AICommon.BizAIMetadataSync.ServerEvent.$Shape;

            /**
             * Decodes a ServerEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.BizAIMetadataSync.ServerEvent & AICommon.BizAIMetadataSync.ServerEvent.$Shape} ServerEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BizAIMetadataSync.ServerEvent & AICommon.BizAIMetadataSync.ServerEvent.$Shape;

            /**
             * Verifies a ServerEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServerEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServerEvent
             */
            static fromObject(object: { [k: string]: any }): AICommon.BizAIMetadataSync.ServerEvent;

            /**
             * Creates a plain object from a ServerEvent message. Also converts values to other types if specified.
             * @param message ServerEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.BizAIMetadataSync.ServerEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServerEvent to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ServerEvent
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ServerEvent {

            /** Properties of a ServerEvent. */
            interface $Properties {

                /** ServerEvent protocolEvent */
                protocolEvent?: (AICommon.BizAIMetadataSync.ServerEvent.ProtocolEvent|null);

                /** ServerEvent agentOnboardingStarted */
                agentOnboardingStarted?: (AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Properties|null);

                /** ServerEvent event */
                event?: ("protocolEvent"|"agentOnboardingStarted");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a ServerEvent. */
            type $Shape = {
              protocolEvent?: AICommon.BizAIMetadataSync.ServerEvent.ProtocolEvent|null;
              agentOnboardingStarted?: AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ event?: undefined; protocolEvent?: null; agentOnboardingStarted?: null }|{ event?: "protocolEvent"; protocolEvent: AICommon.BizAIMetadataSync.ServerEvent.ProtocolEvent; agentOnboardingStarted?: null }|{ event?: "agentOnboardingStarted"; protocolEvent?: null; agentOnboardingStarted: AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Shape })
            );

            /**
             * Properties of an AgentOnboardingStarted.
             * @deprecated Use AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Properties instead.
             */
            interface IAgentOnboardingStarted extends AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Properties {
            }

            /** Represents an AgentOnboardingStarted. */
            class AgentOnboardingStarted {

                /**
                 * Constructs a new AgentOnboardingStarted.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** AgentOnboardingStarted composerBlockDurationSecs. */
                composerBlockDurationSecs?: (number|Long|null);

                /**
                 * Creates a new AgentOnboardingStarted instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AgentOnboardingStarted instance
                 */
                static create(properties: AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Shape): AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted & AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Shape;
                static create(properties?: AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Properties): AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted;

                /**
                 * Encodes the specified AgentOnboardingStarted message. Does not implicitly {@link AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.verify|verify} messages.
                 * @param message AgentOnboardingStarted message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AgentOnboardingStarted message, length delimited. Does not implicitly {@link AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.verify|verify} messages.
                 * @param message AgentOnboardingStarted message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AgentOnboardingStarted message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted & AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Shape} AgentOnboardingStarted
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted & AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Shape;

                /**
                 * Decodes an AgentOnboardingStarted message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted & AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Shape} AgentOnboardingStarted
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted & AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Shape;

                /**
                 * Verifies an AgentOnboardingStarted message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AgentOnboardingStarted message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AgentOnboardingStarted
                 */
                static fromObject(object: { [k: string]: any }): AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted;

                /**
                 * Creates a plain object from an AgentOnboardingStarted message. Also converts values to other types if specified.
                 * @param message AgentOnboardingStarted
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AgentOnboardingStarted to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for AgentOnboardingStarted
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace AgentOnboardingStarted {

                /** Properties of an AgentOnboardingStarted. */
                interface $Properties {

                    /** AgentOnboardingStarted composerBlockDurationSecs */
                    composerBlockDurationSecs?: (number|Long|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an AgentOnboardingStarted. */
                type $Shape = AICommon.BizAIMetadataSync.ServerEvent.AgentOnboardingStarted.$Properties;
            }

            /** ProtocolEvent enum. */
            enum ProtocolEvent {

                /** UNSPECIFIED value */
                UNSPECIFIED = 0,

                /** AGENT_CHAT_READY value */
                AGENT_CHAT_READY = 1
            }
        }
    }

    /**
     * Properties of a AIProvenance.
     * @deprecated Use AICommon.AIProvenance.$Properties instead.
     */
    interface IAIProvenance extends AICommon.AIProvenance.$Properties {
    }

    /** Represents a AIProvenance. */
    class AIProvenance {

        /**
         * Constructs a new AIProvenance.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.AIProvenance.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIProvenance c2PaMetadata. */
        c2PaMetadata?: (AICommon.AIProvenance.Metadata.$Properties|null);

        /** AIProvenance iptcMetadata. */
        iptcMetadata?: (AICommon.AIProvenance.Metadata.$Properties|null);

        /**
         * Creates a new AIProvenance instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIProvenance instance
         */
        static create(properties: AICommon.AIProvenance.$Shape): AICommon.AIProvenance & AICommon.AIProvenance.$Shape;
        static create(properties?: AICommon.AIProvenance.$Properties): AICommon.AIProvenance;

        /**
         * Encodes the specified AIProvenance message. Does not implicitly {@link AICommon.AIProvenance.verify|verify} messages.
         * @param message AIProvenance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.AIProvenance.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIProvenance message, length delimited. Does not implicitly {@link AICommon.AIProvenance.verify|verify} messages.
         * @param message AIProvenance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.AIProvenance.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIProvenance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.AIProvenance & AICommon.AIProvenance.$Shape} AIProvenance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIProvenance & AICommon.AIProvenance.$Shape;

        /**
         * Decodes a AIProvenance message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.AIProvenance & AICommon.AIProvenance.$Shape} AIProvenance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIProvenance & AICommon.AIProvenance.$Shape;

        /**
         * Verifies a AIProvenance message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIProvenance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIProvenance
         */
        static fromObject(object: { [k: string]: any }): AICommon.AIProvenance;

        /**
         * Creates a plain object from a AIProvenance message. Also converts values to other types if specified.
         * @param message AIProvenance
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.AIProvenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIProvenance to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIProvenance
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIProvenance {

        /** Properties of a AIProvenance. */
        interface $Properties {

            /** AIProvenance c2PaMetadata */
            c2PaMetadata?: (AICommon.AIProvenance.Metadata.$Properties|null);

            /** AIProvenance iptcMetadata */
            iptcMetadata?: (AICommon.AIProvenance.Metadata.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIProvenance. */
        type $Shape = AICommon.AIProvenance.$Properties;

        /**
         * Properties of a Metadata.
         * @deprecated Use AICommon.AIProvenance.Metadata.$Properties instead.
         */
        interface IMetadata extends AICommon.AIProvenance.Metadata.$Properties {
        }

        /** Represents a Metadata. */
        class Metadata {

            /**
             * Constructs a new Metadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIProvenance.Metadata.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Metadata createdWithGenAi. */
            createdWithGenAi?: (boolean|null);

            /** Metadata editedWithGenAi. */
            editedWithGenAi?: (boolean|null);

            /**
             * Creates a new Metadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Metadata instance
             */
            static create(properties: AICommon.AIProvenance.Metadata.$Shape): AICommon.AIProvenance.Metadata & AICommon.AIProvenance.Metadata.$Shape;
            static create(properties?: AICommon.AIProvenance.Metadata.$Properties): AICommon.AIProvenance.Metadata;

            /**
             * Encodes the specified Metadata message. Does not implicitly {@link AICommon.AIProvenance.Metadata.verify|verify} messages.
             * @param message Metadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.AIProvenance.Metadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Metadata message, length delimited. Does not implicitly {@link AICommon.AIProvenance.Metadata.verify|verify} messages.
             * @param message Metadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.AIProvenance.Metadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Metadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.AIProvenance.Metadata & AICommon.AIProvenance.Metadata.$Shape} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIProvenance.Metadata & AICommon.AIProvenance.Metadata.$Shape;

            /**
             * Decodes a Metadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.AIProvenance.Metadata & AICommon.AIProvenance.Metadata.$Shape} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIProvenance.Metadata & AICommon.AIProvenance.Metadata.$Shape;

            /**
             * Verifies a Metadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Metadata
             */
            static fromObject(object: { [k: string]: any }): AICommon.AIProvenance.Metadata;

            /**
             * Creates a plain object from a Metadata message. Also converts values to other types if specified.
             * @param message Metadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.AIProvenance.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Metadata to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Metadata
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Metadata {

            /** Properties of a Metadata. */
            interface $Properties {

                /** Metadata createdWithGenAi */
                createdWithGenAi?: (boolean|null);

                /** Metadata editedWithGenAi */
                editedWithGenAi?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Metadata. */
            type $Shape = AICommon.AIProvenance.Metadata.$Properties;
        }
    }

    /**
     * Properties of a BotAgentDeepLinkMetadata.
     * @deprecated Use AICommon.BotAgentDeepLinkMetadata.$Properties instead.
     */
    interface IBotAgentDeepLinkMetadata extends AICommon.BotAgentDeepLinkMetadata.$Properties {
    }

    /** Represents a BotAgentDeepLinkMetadata. */
    class BotAgentDeepLinkMetadata {

        /**
         * Constructs a new BotAgentDeepLinkMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotAgentDeepLinkMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotAgentDeepLinkMetadata token. */
        token?: (string|null);

        /** BotAgentDeepLinkMetadata clientPublicKey. */
        clientPublicKey?: (Uint8Array|null);

        /**
         * Creates a new BotAgentDeepLinkMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotAgentDeepLinkMetadata instance
         */
        static create(properties: AICommon.BotAgentDeepLinkMetadata.$Shape): AICommon.BotAgentDeepLinkMetadata & AICommon.BotAgentDeepLinkMetadata.$Shape;
        static create(properties?: AICommon.BotAgentDeepLinkMetadata.$Properties): AICommon.BotAgentDeepLinkMetadata;

        /**
         * Encodes the specified BotAgentDeepLinkMetadata message. Does not implicitly {@link AICommon.BotAgentDeepLinkMetadata.verify|verify} messages.
         * @param message BotAgentDeepLinkMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotAgentDeepLinkMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotAgentDeepLinkMetadata message, length delimited. Does not implicitly {@link AICommon.BotAgentDeepLinkMetadata.verify|verify} messages.
         * @param message BotAgentDeepLinkMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotAgentDeepLinkMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotAgentDeepLinkMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotAgentDeepLinkMetadata & AICommon.BotAgentDeepLinkMetadata.$Shape} BotAgentDeepLinkMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotAgentDeepLinkMetadata & AICommon.BotAgentDeepLinkMetadata.$Shape;

        /**
         * Decodes a BotAgentDeepLinkMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotAgentDeepLinkMetadata & AICommon.BotAgentDeepLinkMetadata.$Shape} BotAgentDeepLinkMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotAgentDeepLinkMetadata & AICommon.BotAgentDeepLinkMetadata.$Shape;

        /**
         * Verifies a BotAgentDeepLinkMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotAgentDeepLinkMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotAgentDeepLinkMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotAgentDeepLinkMetadata;

        /**
         * Creates a plain object from a BotAgentDeepLinkMetadata message. Also converts values to other types if specified.
         * @param message BotAgentDeepLinkMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotAgentDeepLinkMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotAgentDeepLinkMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotAgentDeepLinkMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotAgentDeepLinkMetadata {

        /** Properties of a BotAgentDeepLinkMetadata. */
        interface $Properties {

            /** BotAgentDeepLinkMetadata token */
            token?: (string|null);

            /** BotAgentDeepLinkMetadata clientPublicKey */
            clientPublicKey?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotAgentDeepLinkMetadata. */
        type $Shape = AICommon.BotAgentDeepLinkMetadata.$Properties;
    }

    /**
     * Properties of a BotAgentMetadata.
     * @deprecated Use AICommon.BotAgentMetadata.$Properties instead.
     */
    interface IBotAgentMetadata extends AICommon.BotAgentMetadata.$Properties {
    }

    /** Represents a BotAgentMetadata. */
    class BotAgentMetadata {

        /**
         * Constructs a new BotAgentMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotAgentMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotAgentMetadata deepLinkMetadata. */
        deepLinkMetadata?: (AICommon.BotAgentDeepLinkMetadata.$Properties|null);

        /**
         * Creates a new BotAgentMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotAgentMetadata instance
         */
        static create(properties: AICommon.BotAgentMetadata.$Shape): AICommon.BotAgentMetadata & AICommon.BotAgentMetadata.$Shape;
        static create(properties?: AICommon.BotAgentMetadata.$Properties): AICommon.BotAgentMetadata;

        /**
         * Encodes the specified BotAgentMetadata message. Does not implicitly {@link AICommon.BotAgentMetadata.verify|verify} messages.
         * @param message BotAgentMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotAgentMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotAgentMetadata message, length delimited. Does not implicitly {@link AICommon.BotAgentMetadata.verify|verify} messages.
         * @param message BotAgentMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotAgentMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotAgentMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotAgentMetadata & AICommon.BotAgentMetadata.$Shape} BotAgentMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotAgentMetadata & AICommon.BotAgentMetadata.$Shape;

        /**
         * Decodes a BotAgentMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotAgentMetadata & AICommon.BotAgentMetadata.$Shape} BotAgentMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotAgentMetadata & AICommon.BotAgentMetadata.$Shape;

        /**
         * Verifies a BotAgentMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotAgentMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotAgentMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotAgentMetadata;

        /**
         * Creates a plain object from a BotAgentMetadata message. Also converts values to other types if specified.
         * @param message BotAgentMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotAgentMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotAgentMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotAgentMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotAgentMetadata {

        /** Properties of a BotAgentMetadata. */
        interface $Properties {

            /** BotAgentMetadata deepLinkMetadata */
            deepLinkMetadata?: (AICommon.BotAgentDeepLinkMetadata.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotAgentMetadata. */
        type $Shape = AICommon.BotAgentMetadata.$Properties;
    }

    /**
     * Properties of a BotInfrastructureDiagnostics.
     * @deprecated Use AICommon.BotInfrastructureDiagnostics.$Properties instead.
     */
    interface IBotInfrastructureDiagnostics extends AICommon.BotInfrastructureDiagnostics.$Properties {
    }

    /** Represents a BotInfrastructureDiagnostics. */
    class BotInfrastructureDiagnostics {

        /**
         * Constructs a new BotInfrastructureDiagnostics.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotInfrastructureDiagnostics.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotInfrastructureDiagnostics botBackend. */
        botBackend?: (AICommon.BotInfrastructureDiagnostics.BotBackend|null);

        /** BotInfrastructureDiagnostics toolsUsed. */
        toolsUsed: string[];

        /** BotInfrastructureDiagnostics isThinking. */
        isThinking?: (boolean|null);

        /**
         * Creates a new BotInfrastructureDiagnostics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotInfrastructureDiagnostics instance
         */
        static create(properties: AICommon.BotInfrastructureDiagnostics.$Shape): AICommon.BotInfrastructureDiagnostics & AICommon.BotInfrastructureDiagnostics.$Shape;
        static create(properties?: AICommon.BotInfrastructureDiagnostics.$Properties): AICommon.BotInfrastructureDiagnostics;

        /**
         * Encodes the specified BotInfrastructureDiagnostics message. Does not implicitly {@link AICommon.BotInfrastructureDiagnostics.verify|verify} messages.
         * @param message BotInfrastructureDiagnostics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotInfrastructureDiagnostics.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotInfrastructureDiagnostics message, length delimited. Does not implicitly {@link AICommon.BotInfrastructureDiagnostics.verify|verify} messages.
         * @param message BotInfrastructureDiagnostics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotInfrastructureDiagnostics.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotInfrastructureDiagnostics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotInfrastructureDiagnostics & AICommon.BotInfrastructureDiagnostics.$Shape} BotInfrastructureDiagnostics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotInfrastructureDiagnostics & AICommon.BotInfrastructureDiagnostics.$Shape;

        /**
         * Decodes a BotInfrastructureDiagnostics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotInfrastructureDiagnostics & AICommon.BotInfrastructureDiagnostics.$Shape} BotInfrastructureDiagnostics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotInfrastructureDiagnostics & AICommon.BotInfrastructureDiagnostics.$Shape;

        /**
         * Verifies a BotInfrastructureDiagnostics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotInfrastructureDiagnostics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotInfrastructureDiagnostics
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotInfrastructureDiagnostics;

        /**
         * Creates a plain object from a BotInfrastructureDiagnostics message. Also converts values to other types if specified.
         * @param message BotInfrastructureDiagnostics
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotInfrastructureDiagnostics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotInfrastructureDiagnostics to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotInfrastructureDiagnostics
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotInfrastructureDiagnostics {

        /** Properties of a BotInfrastructureDiagnostics. */
        interface $Properties {

            /** BotInfrastructureDiagnostics botBackend */
            botBackend?: (AICommon.BotInfrastructureDiagnostics.BotBackend|null);

            /** BotInfrastructureDiagnostics toolsUsed */
            toolsUsed?: (string[]|null);

            /** BotInfrastructureDiagnostics isThinking */
            isThinking?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotInfrastructureDiagnostics. */
        type $Shape = AICommon.BotInfrastructureDiagnostics.$Properties;

        /** BotBackend enum. */
        enum BotBackend {

            /** AAPI value */
            AAPI = 0,

            /** CLIPPY value */
            CLIPPY = 1
        }
    }

    /**
     * Properties of a AIHomeState.
     * @deprecated Use AICommon.AIHomeState.$Properties instead.
     */
    interface IAIHomeState extends AICommon.AIHomeState.$Properties {
    }

    /** Represents a AIHomeState. */
    class AIHomeState {

        /**
         * Constructs a new AIHomeState.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.AIHomeState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIHomeState lastFetchTime. */
        lastFetchTime?: (number|Long|null);

        /** AIHomeState capabilityOptions. */
        capabilityOptions: AICommon.AIHomeState.AIHomeOption.$Properties[];

        /** AIHomeState conversationOptions. */
        conversationOptions: AICommon.AIHomeState.AIHomeOption.$Properties[];

        /**
         * Creates a new AIHomeState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIHomeState instance
         */
        static create(properties: AICommon.AIHomeState.$Shape): AICommon.AIHomeState & AICommon.AIHomeState.$Shape;
        static create(properties?: AICommon.AIHomeState.$Properties): AICommon.AIHomeState;

        /**
         * Encodes the specified AIHomeState message. Does not implicitly {@link AICommon.AIHomeState.verify|verify} messages.
         * @param message AIHomeState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.AIHomeState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIHomeState message, length delimited. Does not implicitly {@link AICommon.AIHomeState.verify|verify} messages.
         * @param message AIHomeState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.AIHomeState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIHomeState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.AIHomeState & AICommon.AIHomeState.$Shape} AIHomeState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIHomeState & AICommon.AIHomeState.$Shape;

        /**
         * Decodes a AIHomeState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.AIHomeState & AICommon.AIHomeState.$Shape} AIHomeState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIHomeState & AICommon.AIHomeState.$Shape;

        /**
         * Verifies a AIHomeState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIHomeState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIHomeState
         */
        static fromObject(object: { [k: string]: any }): AICommon.AIHomeState;

        /**
         * Creates a plain object from a AIHomeState message. Also converts values to other types if specified.
         * @param message AIHomeState
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.AIHomeState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIHomeState to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIHomeState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIHomeState {

        /** Properties of a AIHomeState. */
        interface $Properties {

            /** AIHomeState lastFetchTime */
            lastFetchTime?: (number|Long|null);

            /** AIHomeState capabilityOptions */
            capabilityOptions?: (AICommon.AIHomeState.AIHomeOption.$Properties[]|null);

            /** AIHomeState conversationOptions */
            conversationOptions?: (AICommon.AIHomeState.AIHomeOption.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIHomeState. */
        type $Shape = AICommon.AIHomeState.$Properties;

        /**
         * Properties of a AIHomeOption.
         * @deprecated Use AICommon.AIHomeState.AIHomeOption.$Properties instead.
         */
        interface IAIHomeOption extends AICommon.AIHomeState.AIHomeOption.$Properties {
        }

        /** Represents a AIHomeOption. */
        class AIHomeOption {

            /**
             * Constructs a new AIHomeOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIHomeState.AIHomeOption.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AIHomeOption type. */
            type?: (AICommon.AIHomeState.AIHomeOption.AIHomeActionType|null);

            /** AIHomeOption title. */
            title?: (string|null);

            /** AIHomeOption promptText. */
            promptText?: (string|null);

            /** AIHomeOption sessionId. */
            sessionId?: (string|null);

            /** AIHomeOption imageWdsIdentifier. */
            imageWdsIdentifier?: (string|null);

            /** AIHomeOption imageTintColor. */
            imageTintColor?: (string|null);

            /** AIHomeOption imageBackgroundColor. */
            imageBackgroundColor?: (string|null);

            /** AIHomeOption cardTypeId. */
            cardTypeId?: (string|null);

            /**
             * Creates a new AIHomeOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIHomeOption instance
             */
            static create(properties: AICommon.AIHomeState.AIHomeOption.$Shape): AICommon.AIHomeState.AIHomeOption & AICommon.AIHomeState.AIHomeOption.$Shape;
            static create(properties?: AICommon.AIHomeState.AIHomeOption.$Properties): AICommon.AIHomeState.AIHomeOption;

            /**
             * Encodes the specified AIHomeOption message. Does not implicitly {@link AICommon.AIHomeState.AIHomeOption.verify|verify} messages.
             * @param message AIHomeOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.AIHomeState.AIHomeOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIHomeOption message, length delimited. Does not implicitly {@link AICommon.AIHomeState.AIHomeOption.verify|verify} messages.
             * @param message AIHomeOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.AIHomeState.AIHomeOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIHomeOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.AIHomeState.AIHomeOption & AICommon.AIHomeState.AIHomeOption.$Shape} AIHomeOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIHomeState.AIHomeOption & AICommon.AIHomeState.AIHomeOption.$Shape;

            /**
             * Decodes a AIHomeOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.AIHomeState.AIHomeOption & AICommon.AIHomeState.AIHomeOption.$Shape} AIHomeOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIHomeState.AIHomeOption & AICommon.AIHomeState.AIHomeOption.$Shape;

            /**
             * Verifies a AIHomeOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIHomeOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIHomeOption
             */
            static fromObject(object: { [k: string]: any }): AICommon.AIHomeState.AIHomeOption;

            /**
             * Creates a plain object from a AIHomeOption message. Also converts values to other types if specified.
             * @param message AIHomeOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.AIHomeState.AIHomeOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIHomeOption to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AIHomeOption
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AIHomeOption {

            /** Properties of a AIHomeOption. */
            interface $Properties {

                /** AIHomeOption type */
                type?: (AICommon.AIHomeState.AIHomeOption.AIHomeActionType|null);

                /** AIHomeOption title */
                title?: (string|null);

                /** AIHomeOption promptText */
                promptText?: (string|null);

                /** AIHomeOption sessionId */
                sessionId?: (string|null);

                /** AIHomeOption imageWdsIdentifier */
                imageWdsIdentifier?: (string|null);

                /** AIHomeOption imageTintColor */
                imageTintColor?: (string|null);

                /** AIHomeOption imageBackgroundColor */
                imageBackgroundColor?: (string|null);

                /** AIHomeOption cardTypeId */
                cardTypeId?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a AIHomeOption. */
            type $Shape = AICommon.AIHomeState.AIHomeOption.$Properties;

            /** AIHomeActionType enum. */
            enum AIHomeActionType {

                /** PROMPT value */
                PROMPT = 0,

                /** CREATE_IMAGE value */
                CREATE_IMAGE = 1,

                /** ANIMATE_PHOTO value */
                ANIMATE_PHOTO = 2,

                /** ANALYZE_FILE value */
                ANALYZE_FILE = 3,

                /** COLLABORATE value */
                COLLABORATE = 4,

                /** OPEN_GREETING_CARD value */
                OPEN_GREETING_CARD = 5
            }
        }
    }

    /**
     * Properties of a BotDocumentMessageMetadata.
     * @deprecated Use AICommon.BotDocumentMessageMetadata.$Properties instead.
     */
    interface IBotDocumentMessageMetadata extends AICommon.BotDocumentMessageMetadata.$Properties {
    }

    /** Represents a BotDocumentMessageMetadata. */
    class BotDocumentMessageMetadata {

        /**
         * Constructs a new BotDocumentMessageMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotDocumentMessageMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotDocumentMessageMetadata pluginType. */
        pluginType?: (AICommon.BotDocumentMessageMetadata.DocumentPluginType|null);

        /**
         * Creates a new BotDocumentMessageMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotDocumentMessageMetadata instance
         */
        static create(properties: AICommon.BotDocumentMessageMetadata.$Shape): AICommon.BotDocumentMessageMetadata & AICommon.BotDocumentMessageMetadata.$Shape;
        static create(properties?: AICommon.BotDocumentMessageMetadata.$Properties): AICommon.BotDocumentMessageMetadata;

        /**
         * Encodes the specified BotDocumentMessageMetadata message. Does not implicitly {@link AICommon.BotDocumentMessageMetadata.verify|verify} messages.
         * @param message BotDocumentMessageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotDocumentMessageMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotDocumentMessageMetadata message, length delimited. Does not implicitly {@link AICommon.BotDocumentMessageMetadata.verify|verify} messages.
         * @param message BotDocumentMessageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotDocumentMessageMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotDocumentMessageMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotDocumentMessageMetadata & AICommon.BotDocumentMessageMetadata.$Shape} BotDocumentMessageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotDocumentMessageMetadata & AICommon.BotDocumentMessageMetadata.$Shape;

        /**
         * Decodes a BotDocumentMessageMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotDocumentMessageMetadata & AICommon.BotDocumentMessageMetadata.$Shape} BotDocumentMessageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotDocumentMessageMetadata & AICommon.BotDocumentMessageMetadata.$Shape;

        /**
         * Verifies a BotDocumentMessageMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotDocumentMessageMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotDocumentMessageMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotDocumentMessageMetadata;

        /**
         * Creates a plain object from a BotDocumentMessageMetadata message. Also converts values to other types if specified.
         * @param message BotDocumentMessageMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotDocumentMessageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotDocumentMessageMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotDocumentMessageMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotDocumentMessageMetadata {

        /** Properties of a BotDocumentMessageMetadata. */
        interface $Properties {

            /** BotDocumentMessageMetadata pluginType */
            pluginType?: (AICommon.BotDocumentMessageMetadata.DocumentPluginType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotDocumentMessageMetadata. */
        type $Shape = AICommon.BotDocumentMessageMetadata.$Properties;

        /** DocumentPluginType enum. */
        enum DocumentPluginType {

            /** TEXT_EXTRACTION value */
            TEXT_EXTRACTION = 0,

            /** OCR_AND_IMAGES value */
            OCR_AND_IMAGES = 1
        }
    }

    /**
     * Properties of a SessionTransparencyMetadata.
     * @deprecated Use AICommon.SessionTransparencyMetadata.$Properties instead.
     */
    interface ISessionTransparencyMetadata extends AICommon.SessionTransparencyMetadata.$Properties {
    }

    /** Represents a SessionTransparencyMetadata. */
    class SessionTransparencyMetadata {

        /**
         * Constructs a new SessionTransparencyMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.SessionTransparencyMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SessionTransparencyMetadata disclaimerText. */
        disclaimerText?: (string|null);

        /** SessionTransparencyMetadata hcaId. */
        hcaId?: (string|null);

        /** SessionTransparencyMetadata sessionTransparencyType. */
        sessionTransparencyType?: (AICommon.SessionTransparencyType|null);

        /**
         * Creates a new SessionTransparencyMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionTransparencyMetadata instance
         */
        static create(properties: AICommon.SessionTransparencyMetadata.$Shape): AICommon.SessionTransparencyMetadata & AICommon.SessionTransparencyMetadata.$Shape;
        static create(properties?: AICommon.SessionTransparencyMetadata.$Properties): AICommon.SessionTransparencyMetadata;

        /**
         * Encodes the specified SessionTransparencyMetadata message. Does not implicitly {@link AICommon.SessionTransparencyMetadata.verify|verify} messages.
         * @param message SessionTransparencyMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.SessionTransparencyMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionTransparencyMetadata message, length delimited. Does not implicitly {@link AICommon.SessionTransparencyMetadata.verify|verify} messages.
         * @param message SessionTransparencyMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.SessionTransparencyMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionTransparencyMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.SessionTransparencyMetadata & AICommon.SessionTransparencyMetadata.$Shape} SessionTransparencyMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.SessionTransparencyMetadata & AICommon.SessionTransparencyMetadata.$Shape;

        /**
         * Decodes a SessionTransparencyMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.SessionTransparencyMetadata & AICommon.SessionTransparencyMetadata.$Shape} SessionTransparencyMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.SessionTransparencyMetadata & AICommon.SessionTransparencyMetadata.$Shape;

        /**
         * Verifies a SessionTransparencyMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionTransparencyMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionTransparencyMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.SessionTransparencyMetadata;

        /**
         * Creates a plain object from a SessionTransparencyMetadata message. Also converts values to other types if specified.
         * @param message SessionTransparencyMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.SessionTransparencyMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionTransparencyMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SessionTransparencyMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SessionTransparencyMetadata {

        /** Properties of a SessionTransparencyMetadata. */
        interface $Properties {

            /** SessionTransparencyMetadata disclaimerText */
            disclaimerText?: (string|null);

            /** SessionTransparencyMetadata hcaId */
            hcaId?: (string|null);

            /** SessionTransparencyMetadata sessionTransparencyType */
            sessionTransparencyType?: (AICommon.SessionTransparencyType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SessionTransparencyMetadata. */
        type $Shape = AICommon.SessionTransparencyMetadata.$Properties;
    }

    /**
     * Properties of a AIRegenerateMetadata.
     * @deprecated Use AICommon.AIRegenerateMetadata.$Properties instead.
     */
    interface IAIRegenerateMetadata extends AICommon.AIRegenerateMetadata.$Properties {
    }

    /** Represents a AIRegenerateMetadata. */
    class AIRegenerateMetadata {

        /**
         * Constructs a new AIRegenerateMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.AIRegenerateMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRegenerateMetadata messageKey. */
        messageKey?: (Protocol.MessageKey.$Properties|null);

        /** AIRegenerateMetadata responseTimestampMs. */
        responseTimestampMs?: (number|Long|null);

        /**
         * Creates a new AIRegenerateMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRegenerateMetadata instance
         */
        static create(properties: AICommon.AIRegenerateMetadata.$Shape): AICommon.AIRegenerateMetadata & AICommon.AIRegenerateMetadata.$Shape;
        static create(properties?: AICommon.AIRegenerateMetadata.$Properties): AICommon.AIRegenerateMetadata;

        /**
         * Encodes the specified AIRegenerateMetadata message. Does not implicitly {@link AICommon.AIRegenerateMetadata.verify|verify} messages.
         * @param message AIRegenerateMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.AIRegenerateMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRegenerateMetadata message, length delimited. Does not implicitly {@link AICommon.AIRegenerateMetadata.verify|verify} messages.
         * @param message AIRegenerateMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.AIRegenerateMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRegenerateMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.AIRegenerateMetadata & AICommon.AIRegenerateMetadata.$Shape} AIRegenerateMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRegenerateMetadata & AICommon.AIRegenerateMetadata.$Shape;

        /**
         * Decodes a AIRegenerateMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.AIRegenerateMetadata & AICommon.AIRegenerateMetadata.$Shape} AIRegenerateMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRegenerateMetadata & AICommon.AIRegenerateMetadata.$Shape;

        /**
         * Verifies a AIRegenerateMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRegenerateMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRegenerateMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.AIRegenerateMetadata;

        /**
         * Creates a plain object from a AIRegenerateMetadata message. Also converts values to other types if specified.
         * @param message AIRegenerateMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.AIRegenerateMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRegenerateMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRegenerateMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRegenerateMetadata {

        /** Properties of a AIRegenerateMetadata. */
        interface $Properties {

            /** AIRegenerateMetadata messageKey */
            messageKey?: (Protocol.MessageKey.$Properties|null);

            /** AIRegenerateMetadata responseTimestampMs */
            responseTimestampMs?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRegenerateMetadata. */
        type $Shape = AICommon.AIRegenerateMetadata.$Properties;
    }

    /**
     * Properties of a AIRichResponseUnifiedResponse.
     * @deprecated Use AICommon.AIRichResponseUnifiedResponse.$Properties instead.
     */
    interface IAIRichResponseUnifiedResponse extends AICommon.AIRichResponseUnifiedResponse.$Properties {
    }

    /** Represents a AIRichResponseUnifiedResponse. */
    class AIRichResponseUnifiedResponse {

        /**
         * Constructs a new AIRichResponseUnifiedResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.AIRichResponseUnifiedResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIRichResponseUnifiedResponse data. */
        data?: (Uint8Array|null);

        /**
         * Creates a new AIRichResponseUnifiedResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseUnifiedResponse instance
         */
        static create(properties: AICommon.AIRichResponseUnifiedResponse.$Shape): AICommon.AIRichResponseUnifiedResponse & AICommon.AIRichResponseUnifiedResponse.$Shape;
        static create(properties?: AICommon.AIRichResponseUnifiedResponse.$Properties): AICommon.AIRichResponseUnifiedResponse;

        /**
         * Encodes the specified AIRichResponseUnifiedResponse message. Does not implicitly {@link AICommon.AIRichResponseUnifiedResponse.verify|verify} messages.
         * @param message AIRichResponseUnifiedResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.AIRichResponseUnifiedResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseUnifiedResponse message, length delimited. Does not implicitly {@link AICommon.AIRichResponseUnifiedResponse.verify|verify} messages.
         * @param message AIRichResponseUnifiedResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.AIRichResponseUnifiedResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseUnifiedResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.AIRichResponseUnifiedResponse & AICommon.AIRichResponseUnifiedResponse.$Shape} AIRichResponseUnifiedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseUnifiedResponse & AICommon.AIRichResponseUnifiedResponse.$Shape;

        /**
         * Decodes a AIRichResponseUnifiedResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.AIRichResponseUnifiedResponse & AICommon.AIRichResponseUnifiedResponse.$Shape} AIRichResponseUnifiedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseUnifiedResponse & AICommon.AIRichResponseUnifiedResponse.$Shape;

        /**
         * Verifies a AIRichResponseUnifiedResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseUnifiedResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseUnifiedResponse
         */
        static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseUnifiedResponse;

        /**
         * Creates a plain object from a AIRichResponseUnifiedResponse message. Also converts values to other types if specified.
         * @param message AIRichResponseUnifiedResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.AIRichResponseUnifiedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseUnifiedResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIRichResponseUnifiedResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIRichResponseUnifiedResponse {

        /** Properties of a AIRichResponseUnifiedResponse. */
        interface $Properties {

            /** AIRichResponseUnifiedResponse data */
            data?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIRichResponseUnifiedResponse. */
        type $Shape = AICommon.AIRichResponseUnifiedResponse.$Properties;
    }

    /**
     * Properties of a BotMessageSharingInfo.
     * @deprecated Use AICommon.BotMessageSharingInfo.$Properties instead.
     */
    interface IBotMessageSharingInfo extends AICommon.BotMessageSharingInfo.$Properties {
    }

    /** Represents a BotMessageSharingInfo. */
    class BotMessageSharingInfo {

        /**
         * Constructs a new BotMessageSharingInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotMessageSharingInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMessageSharingInfo botEntryPointOrigin. */
        botEntryPointOrigin?: (AICommon.BotMetricsEntryPoint|null);

        /** BotMessageSharingInfo forwardScore. */
        forwardScore?: (number|null);

        /**
         * Creates a new BotMessageSharingInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMessageSharingInfo instance
         */
        static create(properties: AICommon.BotMessageSharingInfo.$Shape): AICommon.BotMessageSharingInfo & AICommon.BotMessageSharingInfo.$Shape;
        static create(properties?: AICommon.BotMessageSharingInfo.$Properties): AICommon.BotMessageSharingInfo;

        /**
         * Encodes the specified BotMessageSharingInfo message. Does not implicitly {@link AICommon.BotMessageSharingInfo.verify|verify} messages.
         * @param message BotMessageSharingInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotMessageSharingInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMessageSharingInfo message, length delimited. Does not implicitly {@link AICommon.BotMessageSharingInfo.verify|verify} messages.
         * @param message BotMessageSharingInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotMessageSharingInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMessageSharingInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotMessageSharingInfo & AICommon.BotMessageSharingInfo.$Shape} BotMessageSharingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMessageSharingInfo & AICommon.BotMessageSharingInfo.$Shape;

        /**
         * Decodes a BotMessageSharingInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotMessageSharingInfo & AICommon.BotMessageSharingInfo.$Shape} BotMessageSharingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMessageSharingInfo & AICommon.BotMessageSharingInfo.$Shape;

        /**
         * Verifies a BotMessageSharingInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMessageSharingInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMessageSharingInfo
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotMessageSharingInfo;

        /**
         * Creates a plain object from a BotMessageSharingInfo message. Also converts values to other types if specified.
         * @param message BotMessageSharingInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotMessageSharingInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMessageSharingInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotMessageSharingInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotMessageSharingInfo {

        /** Properties of a BotMessageSharingInfo. */
        interface $Properties {

            /** BotMessageSharingInfo botEntryPointOrigin */
            botEntryPointOrigin?: (AICommon.BotMetricsEntryPoint|null);

            /** BotMessageSharingInfo forwardScore */
            forwardScore?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMessageSharingInfo. */
        type $Shape = AICommon.BotMessageSharingInfo.$Properties;
    }

    /**
     * Properties of a ForwardedAIBotMessageInfo.
     * @deprecated Use AICommon.ForwardedAIBotMessageInfo.$Properties instead.
     */
    interface IForwardedAIBotMessageInfo extends AICommon.ForwardedAIBotMessageInfo.$Properties {
    }

    /** Represents a ForwardedAIBotMessageInfo. */
    class ForwardedAIBotMessageInfo {

        /**
         * Constructs a new ForwardedAIBotMessageInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.ForwardedAIBotMessageInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ForwardedAIBotMessageInfo botName. */
        botName?: (string|null);

        /** ForwardedAIBotMessageInfo botJid. */
        botJid?: (string|null);

        /** ForwardedAIBotMessageInfo creatorName. */
        creatorName?: (string|null);

        /**
         * Creates a new ForwardedAIBotMessageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForwardedAIBotMessageInfo instance
         */
        static create(properties: AICommon.ForwardedAIBotMessageInfo.$Shape): AICommon.ForwardedAIBotMessageInfo & AICommon.ForwardedAIBotMessageInfo.$Shape;
        static create(properties?: AICommon.ForwardedAIBotMessageInfo.$Properties): AICommon.ForwardedAIBotMessageInfo;

        /**
         * Encodes the specified ForwardedAIBotMessageInfo message. Does not implicitly {@link AICommon.ForwardedAIBotMessageInfo.verify|verify} messages.
         * @param message ForwardedAIBotMessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.ForwardedAIBotMessageInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForwardedAIBotMessageInfo message, length delimited. Does not implicitly {@link AICommon.ForwardedAIBotMessageInfo.verify|verify} messages.
         * @param message ForwardedAIBotMessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.ForwardedAIBotMessageInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForwardedAIBotMessageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.ForwardedAIBotMessageInfo & AICommon.ForwardedAIBotMessageInfo.$Shape} ForwardedAIBotMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.ForwardedAIBotMessageInfo & AICommon.ForwardedAIBotMessageInfo.$Shape;

        /**
         * Decodes a ForwardedAIBotMessageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.ForwardedAIBotMessageInfo & AICommon.ForwardedAIBotMessageInfo.$Shape} ForwardedAIBotMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.ForwardedAIBotMessageInfo & AICommon.ForwardedAIBotMessageInfo.$Shape;

        /**
         * Verifies a ForwardedAIBotMessageInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForwardedAIBotMessageInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForwardedAIBotMessageInfo
         */
        static fromObject(object: { [k: string]: any }): AICommon.ForwardedAIBotMessageInfo;

        /**
         * Creates a plain object from a ForwardedAIBotMessageInfo message. Also converts values to other types if specified.
         * @param message ForwardedAIBotMessageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.ForwardedAIBotMessageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForwardedAIBotMessageInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ForwardedAIBotMessageInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ForwardedAIBotMessageInfo {

        /** Properties of a ForwardedAIBotMessageInfo. */
        interface $Properties {

            /** ForwardedAIBotMessageInfo botName */
            botName?: (string|null);

            /** ForwardedAIBotMessageInfo botJid */
            botJid?: (string|null);

            /** ForwardedAIBotMessageInfo creatorName */
            creatorName?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ForwardedAIBotMessageInfo. */
        type $Shape = AICommon.ForwardedAIBotMessageInfo.$Properties;
    }

    /**
     * Properties of a BotFeedbackMessage.
     * @deprecated Use AICommon.BotFeedbackMessage.$Properties instead.
     */
    interface IBotFeedbackMessage extends AICommon.BotFeedbackMessage.$Properties {
    }

    /** Represents a BotFeedbackMessage. */
    class BotFeedbackMessage {

        /**
         * Constructs a new BotFeedbackMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotFeedbackMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotFeedbackMessage messageKey. */
        messageKey?: (Protocol.MessageKey.$Properties|null);

        /** BotFeedbackMessage kind. */
        kind?: (AICommon.BotFeedbackMessage.BotFeedbackKind|null);

        /** BotFeedbackMessage text. */
        text?: (string|null);

        /** BotFeedbackMessage kindNegative. */
        kindNegative?: (number|Long|null);

        /** BotFeedbackMessage kindPositive. */
        kindPositive?: (number|Long|null);

        /** BotFeedbackMessage kindReport. */
        kindReport?: (AICommon.BotFeedbackMessage.ReportKind|null);

        /** BotFeedbackMessage sideBySideSurveyMetadata. */
        sideBySideSurveyMetadata?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Properties|null);

        /**
         * Creates a new BotFeedbackMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotFeedbackMessage instance
         */
        static create(properties: AICommon.BotFeedbackMessage.$Shape): AICommon.BotFeedbackMessage & AICommon.BotFeedbackMessage.$Shape;
        static create(properties?: AICommon.BotFeedbackMessage.$Properties): AICommon.BotFeedbackMessage;

        /**
         * Encodes the specified BotFeedbackMessage message. Does not implicitly {@link AICommon.BotFeedbackMessage.verify|verify} messages.
         * @param message BotFeedbackMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotFeedbackMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotFeedbackMessage message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.verify|verify} messages.
         * @param message BotFeedbackMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotFeedbackMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotFeedbackMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotFeedbackMessage & AICommon.BotFeedbackMessage.$Shape} BotFeedbackMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage & AICommon.BotFeedbackMessage.$Shape;

        /**
         * Decodes a BotFeedbackMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotFeedbackMessage & AICommon.BotFeedbackMessage.$Shape} BotFeedbackMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage & AICommon.BotFeedbackMessage.$Shape;

        /**
         * Verifies a BotFeedbackMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotFeedbackMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotFeedbackMessage
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage;

        /**
         * Creates a plain object from a BotFeedbackMessage message. Also converts values to other types if specified.
         * @param message BotFeedbackMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotFeedbackMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotFeedbackMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotFeedbackMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotFeedbackMessage {

        /** Properties of a BotFeedbackMessage. */
        interface $Properties {

            /** BotFeedbackMessage messageKey */
            messageKey?: (Protocol.MessageKey.$Properties|null);

            /** BotFeedbackMessage kind */
            kind?: (AICommon.BotFeedbackMessage.BotFeedbackKind|null);

            /** BotFeedbackMessage text */
            text?: (string|null);

            /** BotFeedbackMessage kindNegative */
            kindNegative?: (number|Long|null);

            /** BotFeedbackMessage kindPositive */
            kindPositive?: (number|Long|null);

            /** BotFeedbackMessage kindReport */
            kindReport?: (AICommon.BotFeedbackMessage.ReportKind|null);

            /** BotFeedbackMessage sideBySideSurveyMetadata */
            sideBySideSurveyMetadata?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotFeedbackMessage. */
        type $Shape = AICommon.BotFeedbackMessage.$Properties;

        /** BotFeedbackKind enum. */
        enum BotFeedbackKind {

            /** BOT_FEEDBACK_POSITIVE value */
            BOT_FEEDBACK_POSITIVE = 0,

            /** BOT_FEEDBACK_NEGATIVE_GENERIC value */
            BOT_FEEDBACK_NEGATIVE_GENERIC = 1,

            /** BOT_FEEDBACK_NEGATIVE_HELPFUL value */
            BOT_FEEDBACK_NEGATIVE_HELPFUL = 2,

            /** BOT_FEEDBACK_NEGATIVE_INTERESTING value */
            BOT_FEEDBACK_NEGATIVE_INTERESTING = 3,

            /** BOT_FEEDBACK_NEGATIVE_ACCURATE value */
            BOT_FEEDBACK_NEGATIVE_ACCURATE = 4,

            /** BOT_FEEDBACK_NEGATIVE_SAFE value */
            BOT_FEEDBACK_NEGATIVE_SAFE = 5,

            /** BOT_FEEDBACK_NEGATIVE_OTHER value */
            BOT_FEEDBACK_NEGATIVE_OTHER = 6,

            /** BOT_FEEDBACK_NEGATIVE_REFUSED value */
            BOT_FEEDBACK_NEGATIVE_REFUSED = 7,

            /** BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING value */
            BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING = 8,

            /** BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT value */
            BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT = 9,

            /** BOT_FEEDBACK_NEGATIVE_PERSONALIZED value */
            BOT_FEEDBACK_NEGATIVE_PERSONALIZED = 10,

            /** BOT_FEEDBACK_NEGATIVE_CLARITY value */
            BOT_FEEDBACK_NEGATIVE_CLARITY = 11,

            /** BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON value */
            BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON = 12,

            /** BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY value */
            BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY = 13,

            /** BOT_FEEDBACK_NEGATIVE value */
            BOT_FEEDBACK_NEGATIVE = 14
        }

        /** BotFeedbackKindMultipleNegative enum. */
        enum BotFeedbackKindMultipleNegative {

            /** BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC value */
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC = 1,

            /** BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL value */
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL = 2,

            /** BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING value */
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING = 4,

            /** BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE value */
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE = 8,

            /** BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE value */
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE = 16,

            /** BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER value */
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER = 32,

            /** BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED value */
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED = 64,

            /** BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING value */
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING = 128,

            /** BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT value */
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT = 256
        }

        /** BotFeedbackKindMultiplePositive enum. */
        enum BotFeedbackKindMultiplePositive {

            /** BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC value */
            BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC = 1
        }

        /** ReportKind enum. */
        enum ReportKind {

            /** NONE value */
            NONE = 0,

            /** GENERIC value */
            GENERIC = 1
        }

        /**
         * Properties of a SideBySideSurveyMetadata.
         * @deprecated Use AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Properties instead.
         */
        interface ISideBySideSurveyMetadata extends AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Properties {
        }

        /** Represents a SideBySideSurveyMetadata. */
        class SideBySideSurveyMetadata {

            /**
             * Constructs a new SideBySideSurveyMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SideBySideSurveyMetadata selectedRequestId. */
            selectedRequestId?: (string|null);

            /** SideBySideSurveyMetadata surveyId. */
            surveyId?: (number|null);

            /** SideBySideSurveyMetadata simonSessionFbid. */
            simonSessionFbid?: (string|null);

            /** SideBySideSurveyMetadata responseOtid. */
            responseOtid?: (string|null);

            /** SideBySideSurveyMetadata responseTimestampMsString. */
            responseTimestampMsString?: (string|null);

            /** SideBySideSurveyMetadata isSelectedResponsePrimary. */
            isSelectedResponsePrimary?: (boolean|null);

            /** SideBySideSurveyMetadata messageIdToEdit. */
            messageIdToEdit?: (string|null);

            /** SideBySideSurveyMetadata analyticsData. */
            analyticsData?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Properties|null);

            /** SideBySideSurveyMetadata metaAiAnalyticsData. */
            metaAiAnalyticsData?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Properties|null);

            /**
             * Creates a new SideBySideSurveyMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SideBySideSurveyMetadata instance
             */
            static create(properties: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Shape): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Shape;
            static create(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Properties): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata;

            /**
             * Encodes the specified SideBySideSurveyMetadata message. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.verify|verify} messages.
             * @param message SideBySideSurveyMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SideBySideSurveyMetadata message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.verify|verify} messages.
             * @param message SideBySideSurveyMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SideBySideSurveyMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Shape} SideBySideSurveyMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Shape;

            /**
             * Decodes a SideBySideSurveyMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Shape} SideBySideSurveyMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Shape;

            /**
             * Verifies a SideBySideSurveyMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SideBySideSurveyMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SideBySideSurveyMetadata
             */
            static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata;

            /**
             * Creates a plain object from a SideBySideSurveyMetadata message. Also converts values to other types if specified.
             * @param message SideBySideSurveyMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SideBySideSurveyMetadata to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SideBySideSurveyMetadata
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SideBySideSurveyMetadata {

            /** Properties of a SideBySideSurveyMetadata. */
            interface $Properties {

                /** SideBySideSurveyMetadata selectedRequestId */
                selectedRequestId?: (string|null);

                /** SideBySideSurveyMetadata surveyId */
                surveyId?: (number|null);

                /** SideBySideSurveyMetadata simonSessionFbid */
                simonSessionFbid?: (string|null);

                /** SideBySideSurveyMetadata responseOtid */
                responseOtid?: (string|null);

                /** SideBySideSurveyMetadata responseTimestampMsString */
                responseTimestampMsString?: (string|null);

                /** SideBySideSurveyMetadata isSelectedResponsePrimary */
                isSelectedResponsePrimary?: (boolean|null);

                /** SideBySideSurveyMetadata messageIdToEdit */
                messageIdToEdit?: (string|null);

                /** SideBySideSurveyMetadata analyticsData */
                analyticsData?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Properties|null);

                /** SideBySideSurveyMetadata metaAiAnalyticsData */
                metaAiAnalyticsData?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SideBySideSurveyMetadata. */
            type $Shape = AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.$Properties;

            /**
             * Properties of a SideBySideSurveyAnalyticsData.
             * @deprecated Use AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Properties instead.
             */
            interface ISideBySideSurveyAnalyticsData extends AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Properties {
            }

            /** Represents a SideBySideSurveyAnalyticsData. */
            class SideBySideSurveyAnalyticsData {

                /**
                 * Constructs a new SideBySideSurveyAnalyticsData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SideBySideSurveyAnalyticsData tessaEvent. */
                tessaEvent?: (string|null);

                /** SideBySideSurveyAnalyticsData tessaSessionFbid. */
                tessaSessionFbid?: (string|null);

                /** SideBySideSurveyAnalyticsData simonSessionFbid. */
                simonSessionFbid?: (string|null);

                /**
                 * Creates a new SideBySideSurveyAnalyticsData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SideBySideSurveyAnalyticsData instance
                 */
                static create(properties: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Shape): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Shape;
                static create(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Properties): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData;

                /**
                 * Encodes the specified SideBySideSurveyAnalyticsData message. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.verify|verify} messages.
                 * @param message SideBySideSurveyAnalyticsData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SideBySideSurveyAnalyticsData message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.verify|verify} messages.
                 * @param message SideBySideSurveyAnalyticsData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SideBySideSurveyAnalyticsData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Shape} SideBySideSurveyAnalyticsData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Shape;

                /**
                 * Decodes a SideBySideSurveyAnalyticsData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Shape} SideBySideSurveyAnalyticsData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Shape;

                /**
                 * Verifies a SideBySideSurveyAnalyticsData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SideBySideSurveyAnalyticsData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SideBySideSurveyAnalyticsData
                 */
                static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData;

                /**
                 * Creates a plain object from a SideBySideSurveyAnalyticsData message. Also converts values to other types if specified.
                 * @param message SideBySideSurveyAnalyticsData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SideBySideSurveyAnalyticsData to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for SideBySideSurveyAnalyticsData
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SideBySideSurveyAnalyticsData {

                /** Properties of a SideBySideSurveyAnalyticsData. */
                interface $Properties {

                    /** SideBySideSurveyAnalyticsData tessaEvent */
                    tessaEvent?: (string|null);

                    /** SideBySideSurveyAnalyticsData tessaSessionFbid */
                    tessaSessionFbid?: (string|null);

                    /** SideBySideSurveyAnalyticsData simonSessionFbid */
                    simonSessionFbid?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a SideBySideSurveyAnalyticsData. */
                type $Shape = AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.$Properties;
            }

            /**
             * Properties of a SidebySideSurveyMetaAiAnalyticsData.
             * @deprecated Use AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Properties instead.
             */
            interface ISidebySideSurveyMetaAiAnalyticsData extends AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Properties {
            }

            /** Represents a SidebySideSurveyMetaAiAnalyticsData. */
            class SidebySideSurveyMetaAiAnalyticsData {

                /**
                 * Constructs a new SidebySideSurveyMetaAiAnalyticsData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SidebySideSurveyMetaAiAnalyticsData surveyId. */
                surveyId?: (number|null);

                /** SidebySideSurveyMetaAiAnalyticsData primaryResponseId. */
                primaryResponseId?: (string|null);

                /** SidebySideSurveyMetaAiAnalyticsData testArmName. */
                testArmName?: (string|null);

                /** SidebySideSurveyMetaAiAnalyticsData timestampMsString. */
                timestampMsString?: (string|null);

                /** SidebySideSurveyMetaAiAnalyticsData ctaImpressionEvent. */
                ctaImpressionEvent?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Properties|null);

                /** SidebySideSurveyMetaAiAnalyticsData ctaClickEvent. */
                ctaClickEvent?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Properties|null);

                /** SidebySideSurveyMetaAiAnalyticsData cardImpressionEvent. */
                cardImpressionEvent?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Properties|null);

                /** SidebySideSurveyMetaAiAnalyticsData responseEvent. */
                responseEvent?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Properties|null);

                /** SidebySideSurveyMetaAiAnalyticsData abandonEvent. */
                abandonEvent?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Properties|null);

                /**
                 * Creates a new SidebySideSurveyMetaAiAnalyticsData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SidebySideSurveyMetaAiAnalyticsData instance
                 */
                static create(properties: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Shape): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Shape;
                static create(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Properties): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData;

                /**
                 * Encodes the specified SidebySideSurveyMetaAiAnalyticsData message. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.verify|verify} messages.
                 * @param message SidebySideSurveyMetaAiAnalyticsData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SidebySideSurveyMetaAiAnalyticsData message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.verify|verify} messages.
                 * @param message SidebySideSurveyMetaAiAnalyticsData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SidebySideSurveyMetaAiAnalyticsData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Shape} SidebySideSurveyMetaAiAnalyticsData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Shape;

                /**
                 * Decodes a SidebySideSurveyMetaAiAnalyticsData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Shape} SidebySideSurveyMetaAiAnalyticsData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Shape;

                /**
                 * Verifies a SidebySideSurveyMetaAiAnalyticsData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SidebySideSurveyMetaAiAnalyticsData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SidebySideSurveyMetaAiAnalyticsData
                 */
                static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData;

                /**
                 * Creates a plain object from a SidebySideSurveyMetaAiAnalyticsData message. Also converts values to other types if specified.
                 * @param message SidebySideSurveyMetaAiAnalyticsData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SidebySideSurveyMetaAiAnalyticsData to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for SidebySideSurveyMetaAiAnalyticsData
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SidebySideSurveyMetaAiAnalyticsData {

                /** Properties of a SidebySideSurveyMetaAiAnalyticsData. */
                interface $Properties {

                    /** SidebySideSurveyMetaAiAnalyticsData surveyId */
                    surveyId?: (number|null);

                    /** SidebySideSurveyMetaAiAnalyticsData primaryResponseId */
                    primaryResponseId?: (string|null);

                    /** SidebySideSurveyMetaAiAnalyticsData testArmName */
                    testArmName?: (string|null);

                    /** SidebySideSurveyMetaAiAnalyticsData timestampMsString */
                    timestampMsString?: (string|null);

                    /** SidebySideSurveyMetaAiAnalyticsData ctaImpressionEvent */
                    ctaImpressionEvent?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Properties|null);

                    /** SidebySideSurveyMetaAiAnalyticsData ctaClickEvent */
                    ctaClickEvent?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Properties|null);

                    /** SidebySideSurveyMetaAiAnalyticsData cardImpressionEvent */
                    cardImpressionEvent?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Properties|null);

                    /** SidebySideSurveyMetaAiAnalyticsData responseEvent */
                    responseEvent?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Properties|null);

                    /** SidebySideSurveyMetaAiAnalyticsData abandonEvent */
                    abandonEvent?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a SidebySideSurveyMetaAiAnalyticsData. */
                type $Shape = AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.$Properties;

                /**
                 * Properties of a SideBySideSurveyAbandonEventData.
                 * @deprecated Use AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Properties instead.
                 */
                interface ISideBySideSurveyAbandonEventData extends AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Properties {
                }

                /** Represents a SideBySideSurveyAbandonEventData. */
                class SideBySideSurveyAbandonEventData {

                    /**
                     * Constructs a new SideBySideSurveyAbandonEventData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** SideBySideSurveyAbandonEventData abandonDwellTimeMsString. */
                    abandonDwellTimeMsString?: (string|null);

                    /**
                     * Creates a new SideBySideSurveyAbandonEventData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SideBySideSurveyAbandonEventData instance
                     */
                    static create(properties: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Shape): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Shape;
                    static create(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Properties): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData;

                    /**
                     * Encodes the specified SideBySideSurveyAbandonEventData message. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.verify|verify} messages.
                     * @param message SideBySideSurveyAbandonEventData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SideBySideSurveyAbandonEventData message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.verify|verify} messages.
                     * @param message SideBySideSurveyAbandonEventData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SideBySideSurveyAbandonEventData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Shape} SideBySideSurveyAbandonEventData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Shape;

                    /**
                     * Decodes a SideBySideSurveyAbandonEventData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Shape} SideBySideSurveyAbandonEventData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Shape;

                    /**
                     * Verifies a SideBySideSurveyAbandonEventData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SideBySideSurveyAbandonEventData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SideBySideSurveyAbandonEventData
                     */
                    static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData;

                    /**
                     * Creates a plain object from a SideBySideSurveyAbandonEventData message. Also converts values to other types if specified.
                     * @param message SideBySideSurveyAbandonEventData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SideBySideSurveyAbandonEventData to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for SideBySideSurveyAbandonEventData
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SideBySideSurveyAbandonEventData {

                    /** Properties of a SideBySideSurveyAbandonEventData. */
                    interface $Properties {

                        /** SideBySideSurveyAbandonEventData abandonDwellTimeMsString */
                        abandonDwellTimeMsString?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SideBySideSurveyAbandonEventData. */
                    type $Shape = AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.$Properties;
                }

                /**
                 * Properties of a SideBySideSurveyCTAClickEventData.
                 * @deprecated Use AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Properties instead.
                 */
                interface ISideBySideSurveyCTAClickEventData extends AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Properties {
                }

                /** Represents a SideBySideSurveyCTAClickEventData. */
                class SideBySideSurveyCTAClickEventData {

                    /**
                     * Constructs a new SideBySideSurveyCTAClickEventData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** SideBySideSurveyCTAClickEventData isSurveyExpired. */
                    isSurveyExpired?: (boolean|null);

                    /** SideBySideSurveyCTAClickEventData clickDwellTimeMsString. */
                    clickDwellTimeMsString?: (string|null);

                    /**
                     * Creates a new SideBySideSurveyCTAClickEventData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SideBySideSurveyCTAClickEventData instance
                     */
                    static create(properties: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Shape): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Shape;
                    static create(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Properties): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData;

                    /**
                     * Encodes the specified SideBySideSurveyCTAClickEventData message. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.verify|verify} messages.
                     * @param message SideBySideSurveyCTAClickEventData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SideBySideSurveyCTAClickEventData message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.verify|verify} messages.
                     * @param message SideBySideSurveyCTAClickEventData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SideBySideSurveyCTAClickEventData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Shape} SideBySideSurveyCTAClickEventData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Shape;

                    /**
                     * Decodes a SideBySideSurveyCTAClickEventData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Shape} SideBySideSurveyCTAClickEventData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Shape;

                    /**
                     * Verifies a SideBySideSurveyCTAClickEventData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SideBySideSurveyCTAClickEventData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SideBySideSurveyCTAClickEventData
                     */
                    static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData;

                    /**
                     * Creates a plain object from a SideBySideSurveyCTAClickEventData message. Also converts values to other types if specified.
                     * @param message SideBySideSurveyCTAClickEventData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SideBySideSurveyCTAClickEventData to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for SideBySideSurveyCTAClickEventData
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SideBySideSurveyCTAClickEventData {

                    /** Properties of a SideBySideSurveyCTAClickEventData. */
                    interface $Properties {

                        /** SideBySideSurveyCTAClickEventData isSurveyExpired */
                        isSurveyExpired?: (boolean|null);

                        /** SideBySideSurveyCTAClickEventData clickDwellTimeMsString */
                        clickDwellTimeMsString?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SideBySideSurveyCTAClickEventData. */
                    type $Shape = AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.$Properties;
                }

                /**
                 * Properties of a SideBySideSurveyCTAImpressionEventData.
                 * @deprecated Use AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Properties instead.
                 */
                interface ISideBySideSurveyCTAImpressionEventData extends AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Properties {
                }

                /** Represents a SideBySideSurveyCTAImpressionEventData. */
                class SideBySideSurveyCTAImpressionEventData {

                    /**
                     * Constructs a new SideBySideSurveyCTAImpressionEventData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** SideBySideSurveyCTAImpressionEventData isSurveyExpired. */
                    isSurveyExpired?: (boolean|null);

                    /**
                     * Creates a new SideBySideSurveyCTAImpressionEventData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SideBySideSurveyCTAImpressionEventData instance
                     */
                    static create(properties: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Shape): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Shape;
                    static create(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Properties): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData;

                    /**
                     * Encodes the specified SideBySideSurveyCTAImpressionEventData message. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.verify|verify} messages.
                     * @param message SideBySideSurveyCTAImpressionEventData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SideBySideSurveyCTAImpressionEventData message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.verify|verify} messages.
                     * @param message SideBySideSurveyCTAImpressionEventData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SideBySideSurveyCTAImpressionEventData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Shape} SideBySideSurveyCTAImpressionEventData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Shape;

                    /**
                     * Decodes a SideBySideSurveyCTAImpressionEventData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Shape} SideBySideSurveyCTAImpressionEventData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Shape;

                    /**
                     * Verifies a SideBySideSurveyCTAImpressionEventData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SideBySideSurveyCTAImpressionEventData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SideBySideSurveyCTAImpressionEventData
                     */
                    static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData;

                    /**
                     * Creates a plain object from a SideBySideSurveyCTAImpressionEventData message. Also converts values to other types if specified.
                     * @param message SideBySideSurveyCTAImpressionEventData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SideBySideSurveyCTAImpressionEventData to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for SideBySideSurveyCTAImpressionEventData
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SideBySideSurveyCTAImpressionEventData {

                    /** Properties of a SideBySideSurveyCTAImpressionEventData. */
                    interface $Properties {

                        /** SideBySideSurveyCTAImpressionEventData isSurveyExpired */
                        isSurveyExpired?: (boolean|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SideBySideSurveyCTAImpressionEventData. */
                    type $Shape = AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.$Properties;
                }

                /**
                 * Properties of a SideBySideSurveyCardImpressionEventData.
                 * @deprecated Use AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Properties instead.
                 */
                interface ISideBySideSurveyCardImpressionEventData extends AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Properties {
                }

                /** Represents a SideBySideSurveyCardImpressionEventData. */
                class SideBySideSurveyCardImpressionEventData {

                    /**
                     * Constructs a new SideBySideSurveyCardImpressionEventData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new SideBySideSurveyCardImpressionEventData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SideBySideSurveyCardImpressionEventData instance
                     */
                    static create(properties: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Shape): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Shape;
                    static create(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Properties): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData;

                    /**
                     * Encodes the specified SideBySideSurveyCardImpressionEventData message. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.verify|verify} messages.
                     * @param message SideBySideSurveyCardImpressionEventData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SideBySideSurveyCardImpressionEventData message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.verify|verify} messages.
                     * @param message SideBySideSurveyCardImpressionEventData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SideBySideSurveyCardImpressionEventData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Shape} SideBySideSurveyCardImpressionEventData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Shape;

                    /**
                     * Decodes a SideBySideSurveyCardImpressionEventData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Shape} SideBySideSurveyCardImpressionEventData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Shape;

                    /**
                     * Verifies a SideBySideSurveyCardImpressionEventData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SideBySideSurveyCardImpressionEventData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SideBySideSurveyCardImpressionEventData
                     */
                    static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData;

                    /**
                     * Creates a plain object from a SideBySideSurveyCardImpressionEventData message. Also converts values to other types if specified.
                     * @param message SideBySideSurveyCardImpressionEventData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SideBySideSurveyCardImpressionEventData to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for SideBySideSurveyCardImpressionEventData
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SideBySideSurveyCardImpressionEventData {

                    /** Properties of a SideBySideSurveyCardImpressionEventData. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SideBySideSurveyCardImpressionEventData. */
                    type $Shape = AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.$Properties;
                }

                /**
                 * Properties of a SideBySideSurveyResponseEventData.
                 * @deprecated Use AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Properties instead.
                 */
                interface ISideBySideSurveyResponseEventData extends AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Properties {
                }

                /** Represents a SideBySideSurveyResponseEventData. */
                class SideBySideSurveyResponseEventData {

                    /**
                     * Constructs a new SideBySideSurveyResponseEventData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** SideBySideSurveyResponseEventData responseDwellTimeMsString. */
                    responseDwellTimeMsString?: (string|null);

                    /** SideBySideSurveyResponseEventData selectedResponseId. */
                    selectedResponseId?: (string|null);

                    /**
                     * Creates a new SideBySideSurveyResponseEventData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SideBySideSurveyResponseEventData instance
                     */
                    static create(properties: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Shape): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Shape;
                    static create(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Properties): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData;

                    /**
                     * Encodes the specified SideBySideSurveyResponseEventData message. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.verify|verify} messages.
                     * @param message SideBySideSurveyResponseEventData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SideBySideSurveyResponseEventData message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.verify|verify} messages.
                     * @param message SideBySideSurveyResponseEventData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SideBySideSurveyResponseEventData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Shape} SideBySideSurveyResponseEventData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Shape;

                    /**
                     * Decodes a SideBySideSurveyResponseEventData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Shape} SideBySideSurveyResponseEventData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData & AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Shape;

                    /**
                     * Verifies a SideBySideSurveyResponseEventData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SideBySideSurveyResponseEventData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SideBySideSurveyResponseEventData
                     */
                    static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData;

                    /**
                     * Creates a plain object from a SideBySideSurveyResponseEventData message. Also converts values to other types if specified.
                     * @param message SideBySideSurveyResponseEventData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SideBySideSurveyResponseEventData to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for SideBySideSurveyResponseEventData
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SideBySideSurveyResponseEventData {

                    /** Properties of a SideBySideSurveyResponseEventData. */
                    interface $Properties {

                        /** SideBySideSurveyResponseEventData responseDwellTimeMsString */
                        responseDwellTimeMsString?: (string|null);

                        /** SideBySideSurveyResponseEventData selectedResponseId */
                        selectedResponseId?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SideBySideSurveyResponseEventData. */
                    type $Shape = AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.$Properties;
                }
            }
        }
    }

    /**
     * Properties of a BotGroupParticipantMetadata.
     * @deprecated Use AICommon.BotGroupParticipantMetadata.$Properties instead.
     */
    interface IBotGroupParticipantMetadata extends AICommon.BotGroupParticipantMetadata.$Properties {
    }

    /** Represents a BotGroupParticipantMetadata. */
    class BotGroupParticipantMetadata {

        /**
         * Constructs a new BotGroupParticipantMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotGroupParticipantMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotGroupParticipantMetadata botFbid. */
        botFbid?: (string|null);

        /**
         * Creates a new BotGroupParticipantMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotGroupParticipantMetadata instance
         */
        static create(properties: AICommon.BotGroupParticipantMetadata.$Shape): AICommon.BotGroupParticipantMetadata & AICommon.BotGroupParticipantMetadata.$Shape;
        static create(properties?: AICommon.BotGroupParticipantMetadata.$Properties): AICommon.BotGroupParticipantMetadata;

        /**
         * Encodes the specified BotGroupParticipantMetadata message. Does not implicitly {@link AICommon.BotGroupParticipantMetadata.verify|verify} messages.
         * @param message BotGroupParticipantMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotGroupParticipantMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotGroupParticipantMetadata message, length delimited. Does not implicitly {@link AICommon.BotGroupParticipantMetadata.verify|verify} messages.
         * @param message BotGroupParticipantMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotGroupParticipantMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotGroupParticipantMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotGroupParticipantMetadata & AICommon.BotGroupParticipantMetadata.$Shape} BotGroupParticipantMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotGroupParticipantMetadata & AICommon.BotGroupParticipantMetadata.$Shape;

        /**
         * Decodes a BotGroupParticipantMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotGroupParticipantMetadata & AICommon.BotGroupParticipantMetadata.$Shape} BotGroupParticipantMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotGroupParticipantMetadata & AICommon.BotGroupParticipantMetadata.$Shape;

        /**
         * Verifies a BotGroupParticipantMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotGroupParticipantMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotGroupParticipantMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotGroupParticipantMetadata;

        /**
         * Creates a plain object from a BotGroupParticipantMetadata message. Also converts values to other types if specified.
         * @param message BotGroupParticipantMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotGroupParticipantMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotGroupParticipantMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotGroupParticipantMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotGroupParticipantMetadata {

        /** Properties of a BotGroupParticipantMetadata. */
        interface $Properties {

            /** BotGroupParticipantMetadata botFbid */
            botFbid?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotGroupParticipantMetadata. */
        type $Shape = AICommon.BotGroupParticipantMetadata.$Properties;
    }

    /**
     * Properties of a BotRenderingConfigMetadata.
     * @deprecated Use AICommon.BotRenderingConfigMetadata.$Properties instead.
     */
    interface IBotRenderingConfigMetadata extends AICommon.BotRenderingConfigMetadata.$Properties {
    }

    /** Represents a BotRenderingConfigMetadata. */
    class BotRenderingConfigMetadata {

        /**
         * Constructs a new BotRenderingConfigMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotRenderingConfigMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotRenderingConfigMetadata bloksVersioningId. */
        bloksVersioningId?: (string|null);

        /** BotRenderingConfigMetadata pixelDensity. */
        pixelDensity?: (number|null);

        /**
         * Creates a new BotRenderingConfigMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotRenderingConfigMetadata instance
         */
        static create(properties: AICommon.BotRenderingConfigMetadata.$Shape): AICommon.BotRenderingConfigMetadata & AICommon.BotRenderingConfigMetadata.$Shape;
        static create(properties?: AICommon.BotRenderingConfigMetadata.$Properties): AICommon.BotRenderingConfigMetadata;

        /**
         * Encodes the specified BotRenderingConfigMetadata message. Does not implicitly {@link AICommon.BotRenderingConfigMetadata.verify|verify} messages.
         * @param message BotRenderingConfigMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotRenderingConfigMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotRenderingConfigMetadata message, length delimited. Does not implicitly {@link AICommon.BotRenderingConfigMetadata.verify|verify} messages.
         * @param message BotRenderingConfigMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotRenderingConfigMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotRenderingConfigMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotRenderingConfigMetadata & AICommon.BotRenderingConfigMetadata.$Shape} BotRenderingConfigMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotRenderingConfigMetadata & AICommon.BotRenderingConfigMetadata.$Shape;

        /**
         * Decodes a BotRenderingConfigMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotRenderingConfigMetadata & AICommon.BotRenderingConfigMetadata.$Shape} BotRenderingConfigMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotRenderingConfigMetadata & AICommon.BotRenderingConfigMetadata.$Shape;

        /**
         * Verifies a BotRenderingConfigMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotRenderingConfigMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotRenderingConfigMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotRenderingConfigMetadata;

        /**
         * Creates a plain object from a BotRenderingConfigMetadata message. Also converts values to other types if specified.
         * @param message BotRenderingConfigMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotRenderingConfigMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotRenderingConfigMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotRenderingConfigMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotRenderingConfigMetadata {

        /** Properties of a BotRenderingConfigMetadata. */
        interface $Properties {

            /** BotRenderingConfigMetadata bloksVersioningId */
            bloksVersioningId?: (string|null);

            /** BotRenderingConfigMetadata pixelDensity */
            pixelDensity?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotRenderingConfigMetadata. */
        type $Shape = AICommon.BotRenderingConfigMetadata.$Properties;
    }

    /**
     * Properties of a BotHistoryShareMetadata.
     * @deprecated Use AICommon.BotHistoryShareMetadata.$Properties instead.
     */
    interface IBotHistoryShareMetadata extends AICommon.BotHistoryShareMetadata.$Properties {
    }

    /** Represents a BotHistoryShareMetadata. */
    class BotHistoryShareMetadata {

        /**
         * Constructs a new BotHistoryShareMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotHistoryShareMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotHistoryShareMetadata participantsMetadata. */
        participantsMetadata: AICommon.BotGroupParticipantMetadata.$Properties[];

        /**
         * Creates a new BotHistoryShareMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotHistoryShareMetadata instance
         */
        static create(properties: AICommon.BotHistoryShareMetadata.$Shape): AICommon.BotHistoryShareMetadata & AICommon.BotHistoryShareMetadata.$Shape;
        static create(properties?: AICommon.BotHistoryShareMetadata.$Properties): AICommon.BotHistoryShareMetadata;

        /**
         * Encodes the specified BotHistoryShareMetadata message. Does not implicitly {@link AICommon.BotHistoryShareMetadata.verify|verify} messages.
         * @param message BotHistoryShareMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotHistoryShareMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotHistoryShareMetadata message, length delimited. Does not implicitly {@link AICommon.BotHistoryShareMetadata.verify|verify} messages.
         * @param message BotHistoryShareMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotHistoryShareMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotHistoryShareMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotHistoryShareMetadata & AICommon.BotHistoryShareMetadata.$Shape} BotHistoryShareMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotHistoryShareMetadata & AICommon.BotHistoryShareMetadata.$Shape;

        /**
         * Decodes a BotHistoryShareMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotHistoryShareMetadata & AICommon.BotHistoryShareMetadata.$Shape} BotHistoryShareMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotHistoryShareMetadata & AICommon.BotHistoryShareMetadata.$Shape;

        /**
         * Verifies a BotHistoryShareMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotHistoryShareMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotHistoryShareMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotHistoryShareMetadata;

        /**
         * Creates a plain object from a BotHistoryShareMetadata message. Also converts values to other types if specified.
         * @param message BotHistoryShareMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotHistoryShareMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotHistoryShareMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotHistoryShareMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotHistoryShareMetadata {

        /** Properties of a BotHistoryShareMetadata. */
        interface $Properties {

            /** BotHistoryShareMetadata participantsMetadata */
            participantsMetadata?: (AICommon.BotGroupParticipantMetadata.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotHistoryShareMetadata. */
        type $Shape = AICommon.BotHistoryShareMetadata.$Properties;
    }

    /**
     * Properties of a BotGroupMetadata.
     * @deprecated Use AICommon.BotGroupMetadata.$Properties instead.
     */
    interface IBotGroupMetadata extends AICommon.BotGroupMetadata.$Properties {
    }

    /** Represents a BotGroupMetadata. */
    class BotGroupMetadata {

        /**
         * Constructs a new BotGroupMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotGroupMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotGroupMetadata participantsMetadata. */
        participantsMetadata: AICommon.BotGroupParticipantMetadata.$Properties[];

        /**
         * Creates a new BotGroupMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotGroupMetadata instance
         */
        static create(properties: AICommon.BotGroupMetadata.$Shape): AICommon.BotGroupMetadata & AICommon.BotGroupMetadata.$Shape;
        static create(properties?: AICommon.BotGroupMetadata.$Properties): AICommon.BotGroupMetadata;

        /**
         * Encodes the specified BotGroupMetadata message. Does not implicitly {@link AICommon.BotGroupMetadata.verify|verify} messages.
         * @param message BotGroupMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotGroupMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotGroupMetadata message, length delimited. Does not implicitly {@link AICommon.BotGroupMetadata.verify|verify} messages.
         * @param message BotGroupMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotGroupMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotGroupMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotGroupMetadata & AICommon.BotGroupMetadata.$Shape} BotGroupMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotGroupMetadata & AICommon.BotGroupMetadata.$Shape;

        /**
         * Decodes a BotGroupMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotGroupMetadata & AICommon.BotGroupMetadata.$Shape} BotGroupMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotGroupMetadata & AICommon.BotGroupMetadata.$Shape;

        /**
         * Verifies a BotGroupMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotGroupMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotGroupMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotGroupMetadata;

        /**
         * Creates a plain object from a BotGroupMetadata message. Also converts values to other types if specified.
         * @param message BotGroupMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotGroupMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotGroupMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotGroupMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotGroupMetadata {

        /** Properties of a BotGroupMetadata. */
        interface $Properties {

            /** BotGroupMetadata participantsMetadata */
            participantsMetadata?: (AICommon.BotGroupParticipantMetadata.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotGroupMetadata. */
        type $Shape = AICommon.BotGroupMetadata.$Properties;
    }

    /**
     * Properties of a AISubscriptionUpsellMetadata.
     * @deprecated Use AICommon.AISubscriptionUpsellMetadata.$Properties instead.
     */
    interface IAISubscriptionUpsellMetadata extends AICommon.AISubscriptionUpsellMetadata.$Properties {
    }

    /** Represents a AISubscriptionUpsellMetadata. */
    class AISubscriptionUpsellMetadata {

        /**
         * Constructs a new AISubscriptionUpsellMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.AISubscriptionUpsellMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AISubscriptionUpsellMetadata requestType. */
        requestType?: (AICommon.AISubscriptionRequestType|null);

        /**
         * Creates a new AISubscriptionUpsellMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AISubscriptionUpsellMetadata instance
         */
        static create(properties: AICommon.AISubscriptionUpsellMetadata.$Shape): AICommon.AISubscriptionUpsellMetadata & AICommon.AISubscriptionUpsellMetadata.$Shape;
        static create(properties?: AICommon.AISubscriptionUpsellMetadata.$Properties): AICommon.AISubscriptionUpsellMetadata;

        /**
         * Encodes the specified AISubscriptionUpsellMetadata message. Does not implicitly {@link AICommon.AISubscriptionUpsellMetadata.verify|verify} messages.
         * @param message AISubscriptionUpsellMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.AISubscriptionUpsellMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AISubscriptionUpsellMetadata message, length delimited. Does not implicitly {@link AICommon.AISubscriptionUpsellMetadata.verify|verify} messages.
         * @param message AISubscriptionUpsellMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.AISubscriptionUpsellMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AISubscriptionUpsellMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.AISubscriptionUpsellMetadata & AICommon.AISubscriptionUpsellMetadata.$Shape} AISubscriptionUpsellMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AISubscriptionUpsellMetadata & AICommon.AISubscriptionUpsellMetadata.$Shape;

        /**
         * Decodes a AISubscriptionUpsellMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.AISubscriptionUpsellMetadata & AICommon.AISubscriptionUpsellMetadata.$Shape} AISubscriptionUpsellMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AISubscriptionUpsellMetadata & AICommon.AISubscriptionUpsellMetadata.$Shape;

        /**
         * Verifies a AISubscriptionUpsellMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AISubscriptionUpsellMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AISubscriptionUpsellMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.AISubscriptionUpsellMetadata;

        /**
         * Creates a plain object from a AISubscriptionUpsellMetadata message. Also converts values to other types if specified.
         * @param message AISubscriptionUpsellMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.AISubscriptionUpsellMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AISubscriptionUpsellMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AISubscriptionUpsellMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AISubscriptionUpsellMetadata {

        /** Properties of a AISubscriptionUpsellMetadata. */
        interface $Properties {

            /** AISubscriptionUpsellMetadata requestType */
            requestType?: (AICommon.AISubscriptionRequestType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AISubscriptionUpsellMetadata. */
        type $Shape = AICommon.AISubscriptionUpsellMetadata.$Properties;
    }

    /**
     * Properties of a BotMetadata.
     * @deprecated Use AICommon.BotMetadata.$Properties instead.
     */
    interface IBotMetadata extends AICommon.BotMetadata.$Properties {
    }

    /** Represents a BotMetadata. */
    class BotMetadata {

        /**
         * Constructs a new BotMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMetadata personaId. */
        personaId?: (string|null);

        /** BotMetadata pluginMetadata. */
        pluginMetadata?: (AICommon.BotPluginMetadata.$Properties|null);

        /** BotMetadata suggestedPromptMetadata. */
        suggestedPromptMetadata?: (AICommon.BotSuggestedPromptMetadata.$Properties|null);

        /** BotMetadata invokerJid. */
        invokerJid?: (string|null);

        /** BotMetadata sessionMetadata. */
        sessionMetadata?: (AICommon.BotSessionMetadata.$Properties|null);

        /** BotMetadata memuMetadata. */
        memuMetadata?: (AICommon.BotMemuMetadata.$Properties|null);

        /** BotMetadata timezone. */
        timezone?: (string|null);

        /** BotMetadata reminderMetadata. */
        reminderMetadata?: (AICommon.BotReminderMetadata.$Properties|null);

        /** BotMetadata modelMetadata. */
        modelMetadata?: (AICommon.BotModelMetadata.$Properties|null);

        /** BotMetadata messageDisclaimerText. */
        messageDisclaimerText?: (string|null);

        /** BotMetadata progressIndicatorMetadata. */
        progressIndicatorMetadata?: (AICommon.BotProgressIndicatorMetadata.$Properties|null);

        /** BotMetadata capabilityMetadata. */
        capabilityMetadata?: (AICommon.BotCapabilityMetadata.$Properties|null);

        /** BotMetadata imagineMetadata. */
        imagineMetadata?: (AICommon.BotImagineMetadata.$Properties|null);

        /** BotMetadata memoryMetadata. */
        memoryMetadata?: (AICommon.BotMemoryMetadata.$Properties|null);

        /** BotMetadata renderingMetadata. */
        renderingMetadata?: (AICommon.BotRenderingMetadata.$Properties|null);

        /** BotMetadata botMetricsMetadata. */
        botMetricsMetadata?: (AICommon.BotMetricsMetadata.$Properties|null);

        /** BotMetadata botLinkedAccountsMetadata. */
        botLinkedAccountsMetadata?: (AICommon.BotLinkedAccountsMetadata.$Properties|null);

        /** BotMetadata richResponseSourcesMetadata. */
        richResponseSourcesMetadata?: (AICommon.BotSourcesMetadata.$Properties|null);

        /** BotMetadata aiConversationContext. */
        aiConversationContext?: (Uint8Array|null);

        /** BotMetadata botPromotionMessageMetadata. */
        botPromotionMessageMetadata?: (AICommon.BotPromotionMessageMetadata.$Properties|null);

        /** BotMetadata botModeSelectionMetadata. */
        botModeSelectionMetadata?: (AICommon.BotModeSelectionMetadata.$Properties|null);

        /** BotMetadata botQuotaMetadata. */
        botQuotaMetadata?: (AICommon.BotQuotaMetadata.$Properties|null);

        /** BotMetadata botAgeCollectionMetadata. */
        botAgeCollectionMetadata?: (AICommon.BotAgeCollectionMetadata.$Properties|null);

        /** BotMetadata conversationStarterPromptId. */
        conversationStarterPromptId?: (string|null);

        /** BotMetadata botResponseId. */
        botResponseId?: (string|null);

        /** BotMetadata verificationMetadata. */
        verificationMetadata?: (AICommon.BotSignatureVerificationMetadata.$Properties|null);

        /** BotMetadata unifiedResponseMutation. */
        unifiedResponseMutation?: (AICommon.BotUnifiedResponseMutation.$Properties|null);

        /** BotMetadata botMessageOriginMetadata. */
        botMessageOriginMetadata?: (AICommon.BotMessageOriginMetadata.$Properties|null);

        /** BotMetadata inThreadSurveyMetadata. */
        inThreadSurveyMetadata?: (AICommon.InThreadSurveyMetadata.$Properties|null);

        /** BotMetadata botThreadInfo. */
        botThreadInfo?: (AICommon.AIThreadInfo.$Properties|null);

        /** BotMetadata regenerateMetadata. */
        regenerateMetadata?: (AICommon.AIRegenerateMetadata.$Properties|null);

        /** BotMetadata sessionTransparencyMetadata. */
        sessionTransparencyMetadata?: (AICommon.SessionTransparencyMetadata.$Properties|null);

        /** BotMetadata botDocumentMessageMetadata. */
        botDocumentMessageMetadata?: (AICommon.BotDocumentMessageMetadata.$Properties|null);

        /** BotMetadata botGroupMetadata. */
        botGroupMetadata?: (AICommon.BotGroupMetadata.$Properties|null);

        /** BotMetadata botRenderingConfigMetadata. */
        botRenderingConfigMetadata?: (AICommon.BotRenderingConfigMetadata.$Properties|null);

        /** BotMetadata botInfrastructureDiagnostics. */
        botInfrastructureDiagnostics?: (AICommon.BotInfrastructureDiagnostics.$Properties|null);

        /** BotMetadata aiMediaCollectionMetadata. */
        aiMediaCollectionMetadata?: (AICommon.AIMediaCollectionMetadata.$Properties|null);

        /** BotMetadata commandMetadata. */
        commandMetadata?: (AICommon.BotCommandMetadata.$Properties|null);

        /** BotMetadata resolvedToolCallMetadata. */
        resolvedToolCallMetadata?: (AICommon.BotResolvedToolCallMetadata.$Properties|null);

        /** BotMetadata subscriptionUpsellMetadata. */
        subscriptionUpsellMetadata?: (AICommon.AISubscriptionUpsellMetadata.$Properties|null);

        /** BotMetadata pttPromptMetadata. */
        pttPromptMetadata?: (AICommon.BotPttPromptMetadata.$Properties|null);

        /** BotMetadata botHistoryShareMetadata. */
        botHistoryShareMetadata?: (AICommon.BotHistoryShareMetadata.$Properties|null);

        /** BotMetadata responseStoppedByUser. */
        responseStoppedByUser?: (boolean|null);

        /** BotMetadata interjectionMetadata. */
        interjectionMetadata?: (AICommon.BotInterjectionMetadata.$Properties|null);

        /** BotMetadata internalMetadata. */
        internalMetadata?: (Uint8Array|null);

        /**
         * Creates a new BotMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMetadata instance
         */
        static create(properties: AICommon.BotMetadata.$Shape): AICommon.BotMetadata & AICommon.BotMetadata.$Shape;
        static create(properties?: AICommon.BotMetadata.$Properties): AICommon.BotMetadata;

        /**
         * Encodes the specified BotMetadata message. Does not implicitly {@link AICommon.BotMetadata.verify|verify} messages.
         * @param message BotMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMetadata message, length delimited. Does not implicitly {@link AICommon.BotMetadata.verify|verify} messages.
         * @param message BotMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotMetadata & AICommon.BotMetadata.$Shape} BotMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMetadata & AICommon.BotMetadata.$Shape;

        /**
         * Decodes a BotMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotMetadata & AICommon.BotMetadata.$Shape} BotMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMetadata & AICommon.BotMetadata.$Shape;

        /**
         * Verifies a BotMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotMetadata;

        /**
         * Creates a plain object from a BotMetadata message. Also converts values to other types if specified.
         * @param message BotMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotMetadata {

        /** Properties of a BotMetadata. */
        interface $Properties {

            /** BotMetadata personaId */
            personaId?: (string|null);

            /** BotMetadata pluginMetadata */
            pluginMetadata?: (AICommon.BotPluginMetadata.$Properties|null);

            /** BotMetadata suggestedPromptMetadata */
            suggestedPromptMetadata?: (AICommon.BotSuggestedPromptMetadata.$Properties|null);

            /** BotMetadata invokerJid */
            invokerJid?: (string|null);

            /** BotMetadata sessionMetadata */
            sessionMetadata?: (AICommon.BotSessionMetadata.$Properties|null);

            /** BotMetadata memuMetadata */
            memuMetadata?: (AICommon.BotMemuMetadata.$Properties|null);

            /** BotMetadata timezone */
            timezone?: (string|null);

            /** BotMetadata reminderMetadata */
            reminderMetadata?: (AICommon.BotReminderMetadata.$Properties|null);

            /** BotMetadata modelMetadata */
            modelMetadata?: (AICommon.BotModelMetadata.$Properties|null);

            /** BotMetadata messageDisclaimerText */
            messageDisclaimerText?: (string|null);

            /** BotMetadata progressIndicatorMetadata */
            progressIndicatorMetadata?: (AICommon.BotProgressIndicatorMetadata.$Properties|null);

            /** BotMetadata capabilityMetadata */
            capabilityMetadata?: (AICommon.BotCapabilityMetadata.$Properties|null);

            /** BotMetadata imagineMetadata */
            imagineMetadata?: (AICommon.BotImagineMetadata.$Properties|null);

            /** BotMetadata memoryMetadata */
            memoryMetadata?: (AICommon.BotMemoryMetadata.$Properties|null);

            /** BotMetadata renderingMetadata */
            renderingMetadata?: (AICommon.BotRenderingMetadata.$Properties|null);

            /** BotMetadata botMetricsMetadata */
            botMetricsMetadata?: (AICommon.BotMetricsMetadata.$Properties|null);

            /** BotMetadata botLinkedAccountsMetadata */
            botLinkedAccountsMetadata?: (AICommon.BotLinkedAccountsMetadata.$Properties|null);

            /** BotMetadata richResponseSourcesMetadata */
            richResponseSourcesMetadata?: (AICommon.BotSourcesMetadata.$Properties|null);

            /** BotMetadata aiConversationContext */
            aiConversationContext?: (Uint8Array|null);

            /** BotMetadata botPromotionMessageMetadata */
            botPromotionMessageMetadata?: (AICommon.BotPromotionMessageMetadata.$Properties|null);

            /** BotMetadata botModeSelectionMetadata */
            botModeSelectionMetadata?: (AICommon.BotModeSelectionMetadata.$Properties|null);

            /** BotMetadata botQuotaMetadata */
            botQuotaMetadata?: (AICommon.BotQuotaMetadata.$Properties|null);

            /** BotMetadata botAgeCollectionMetadata */
            botAgeCollectionMetadata?: (AICommon.BotAgeCollectionMetadata.$Properties|null);

            /** BotMetadata conversationStarterPromptId */
            conversationStarterPromptId?: (string|null);

            /** BotMetadata botResponseId */
            botResponseId?: (string|null);

            /** BotMetadata verificationMetadata */
            verificationMetadata?: (AICommon.BotSignatureVerificationMetadata.$Properties|null);

            /** BotMetadata unifiedResponseMutation */
            unifiedResponseMutation?: (AICommon.BotUnifiedResponseMutation.$Properties|null);

            /** BotMetadata botMessageOriginMetadata */
            botMessageOriginMetadata?: (AICommon.BotMessageOriginMetadata.$Properties|null);

            /** BotMetadata inThreadSurveyMetadata */
            inThreadSurveyMetadata?: (AICommon.InThreadSurveyMetadata.$Properties|null);

            /** BotMetadata botThreadInfo */
            botThreadInfo?: (AICommon.AIThreadInfo.$Properties|null);

            /** BotMetadata regenerateMetadata */
            regenerateMetadata?: (AICommon.AIRegenerateMetadata.$Properties|null);

            /** BotMetadata sessionTransparencyMetadata */
            sessionTransparencyMetadata?: (AICommon.SessionTransparencyMetadata.$Properties|null);

            /** BotMetadata botDocumentMessageMetadata */
            botDocumentMessageMetadata?: (AICommon.BotDocumentMessageMetadata.$Properties|null);

            /** BotMetadata botGroupMetadata */
            botGroupMetadata?: (AICommon.BotGroupMetadata.$Properties|null);

            /** BotMetadata botRenderingConfigMetadata */
            botRenderingConfigMetadata?: (AICommon.BotRenderingConfigMetadata.$Properties|null);

            /** BotMetadata botInfrastructureDiagnostics */
            botInfrastructureDiagnostics?: (AICommon.BotInfrastructureDiagnostics.$Properties|null);

            /** BotMetadata aiMediaCollectionMetadata */
            aiMediaCollectionMetadata?: (AICommon.AIMediaCollectionMetadata.$Properties|null);

            /** BotMetadata commandMetadata */
            commandMetadata?: (AICommon.BotCommandMetadata.$Properties|null);

            /** BotMetadata resolvedToolCallMetadata */
            resolvedToolCallMetadata?: (AICommon.BotResolvedToolCallMetadata.$Properties|null);

            /** BotMetadata subscriptionUpsellMetadata */
            subscriptionUpsellMetadata?: (AICommon.AISubscriptionUpsellMetadata.$Properties|null);

            /** BotMetadata pttPromptMetadata */
            pttPromptMetadata?: (AICommon.BotPttPromptMetadata.$Properties|null);

            /** BotMetadata botHistoryShareMetadata */
            botHistoryShareMetadata?: (AICommon.BotHistoryShareMetadata.$Properties|null);

            /** BotMetadata responseStoppedByUser */
            responseStoppedByUser?: (boolean|null);

            /** BotMetadata interjectionMetadata */
            interjectionMetadata?: (AICommon.BotInterjectionMetadata.$Properties|null);

            /** BotMetadata internalMetadata */
            internalMetadata?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMetadata. */
        type $Shape = AICommon.BotMetadata.$Properties;
    }

    /**
     * Properties of a BotInterjectionMetadata.
     * @deprecated Use AICommon.BotInterjectionMetadata.$Properties instead.
     */
    interface IBotInterjectionMetadata extends AICommon.BotInterjectionMetadata.$Properties {
    }

    /** Represents a BotInterjectionMetadata. */
    class BotInterjectionMetadata {

        /**
         * Constructs a new BotInterjectionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotInterjectionMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotInterjectionMetadata targetPromptMessageId. */
        targetPromptMessageId?: (string|null);

        /** BotInterjectionMetadata foldedPromptMessageIds. */
        foldedPromptMessageIds: string[];

        /**
         * Creates a new BotInterjectionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotInterjectionMetadata instance
         */
        static create(properties: AICommon.BotInterjectionMetadata.$Shape): AICommon.BotInterjectionMetadata & AICommon.BotInterjectionMetadata.$Shape;
        static create(properties?: AICommon.BotInterjectionMetadata.$Properties): AICommon.BotInterjectionMetadata;

        /**
         * Encodes the specified BotInterjectionMetadata message. Does not implicitly {@link AICommon.BotInterjectionMetadata.verify|verify} messages.
         * @param message BotInterjectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotInterjectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotInterjectionMetadata message, length delimited. Does not implicitly {@link AICommon.BotInterjectionMetadata.verify|verify} messages.
         * @param message BotInterjectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotInterjectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotInterjectionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotInterjectionMetadata & AICommon.BotInterjectionMetadata.$Shape} BotInterjectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotInterjectionMetadata & AICommon.BotInterjectionMetadata.$Shape;

        /**
         * Decodes a BotInterjectionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotInterjectionMetadata & AICommon.BotInterjectionMetadata.$Shape} BotInterjectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotInterjectionMetadata & AICommon.BotInterjectionMetadata.$Shape;

        /**
         * Verifies a BotInterjectionMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotInterjectionMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotInterjectionMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotInterjectionMetadata;

        /**
         * Creates a plain object from a BotInterjectionMetadata message. Also converts values to other types if specified.
         * @param message BotInterjectionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotInterjectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotInterjectionMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotInterjectionMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotInterjectionMetadata {

        /** Properties of a BotInterjectionMetadata. */
        interface $Properties {

            /** BotInterjectionMetadata targetPromptMessageId */
            targetPromptMessageId?: (string|null);

            /** BotInterjectionMetadata foldedPromptMessageIds */
            foldedPromptMessageIds?: (string[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotInterjectionMetadata. */
        type $Shape = AICommon.BotInterjectionMetadata.$Properties;
    }

    /**
     * Properties of a BotPttPromptMetadata.
     * @deprecated Use AICommon.BotPttPromptMetadata.$Properties instead.
     */
    interface IBotPttPromptMetadata extends AICommon.BotPttPromptMetadata.$Properties {
    }

    /** Represents a BotPttPromptMetadata. */
    class BotPttPromptMetadata {

        /**
         * Constructs a new BotPttPromptMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotPttPromptMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotPttPromptMetadata transcript. */
        transcript?: (string|null);

        /**
         * Creates a new BotPttPromptMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPttPromptMetadata instance
         */
        static create(properties: AICommon.BotPttPromptMetadata.$Shape): AICommon.BotPttPromptMetadata & AICommon.BotPttPromptMetadata.$Shape;
        static create(properties?: AICommon.BotPttPromptMetadata.$Properties): AICommon.BotPttPromptMetadata;

        /**
         * Encodes the specified BotPttPromptMetadata message. Does not implicitly {@link AICommon.BotPttPromptMetadata.verify|verify} messages.
         * @param message BotPttPromptMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotPttPromptMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPttPromptMetadata message, length delimited. Does not implicitly {@link AICommon.BotPttPromptMetadata.verify|verify} messages.
         * @param message BotPttPromptMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotPttPromptMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPttPromptMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotPttPromptMetadata & AICommon.BotPttPromptMetadata.$Shape} BotPttPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotPttPromptMetadata & AICommon.BotPttPromptMetadata.$Shape;

        /**
         * Decodes a BotPttPromptMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotPttPromptMetadata & AICommon.BotPttPromptMetadata.$Shape} BotPttPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotPttPromptMetadata & AICommon.BotPttPromptMetadata.$Shape;

        /**
         * Verifies a BotPttPromptMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotPttPromptMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotPttPromptMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotPttPromptMetadata;

        /**
         * Creates a plain object from a BotPttPromptMetadata message. Also converts values to other types if specified.
         * @param message BotPttPromptMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotPttPromptMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotPttPromptMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotPttPromptMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotPttPromptMetadata {

        /** Properties of a BotPttPromptMetadata. */
        interface $Properties {

            /** BotPttPromptMetadata transcript */
            transcript?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotPttPromptMetadata. */
        type $Shape = AICommon.BotPttPromptMetadata.$Properties;
    }

    /**
     * Properties of a BotResolvedToolCallMetadata.
     * @deprecated Use AICommon.BotResolvedToolCallMetadata.$Properties instead.
     */
    interface IBotResolvedToolCallMetadata extends AICommon.BotResolvedToolCallMetadata.$Properties {
    }

    /** Represents a BotResolvedToolCallMetadata. */
    class BotResolvedToolCallMetadata {

        /**
         * Constructs a new BotResolvedToolCallMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotResolvedToolCallMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotResolvedToolCallMetadata toolCallId. */
        toolCallId?: (string|null);

        /** BotResolvedToolCallMetadata resolutionDataSerialized. */
        resolutionDataSerialized?: (string|null);

        /**
         * Creates a new BotResolvedToolCallMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotResolvedToolCallMetadata instance
         */
        static create(properties: AICommon.BotResolvedToolCallMetadata.$Shape): AICommon.BotResolvedToolCallMetadata & AICommon.BotResolvedToolCallMetadata.$Shape;
        static create(properties?: AICommon.BotResolvedToolCallMetadata.$Properties): AICommon.BotResolvedToolCallMetadata;

        /**
         * Encodes the specified BotResolvedToolCallMetadata message. Does not implicitly {@link AICommon.BotResolvedToolCallMetadata.verify|verify} messages.
         * @param message BotResolvedToolCallMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotResolvedToolCallMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotResolvedToolCallMetadata message, length delimited. Does not implicitly {@link AICommon.BotResolvedToolCallMetadata.verify|verify} messages.
         * @param message BotResolvedToolCallMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotResolvedToolCallMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotResolvedToolCallMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotResolvedToolCallMetadata & AICommon.BotResolvedToolCallMetadata.$Shape} BotResolvedToolCallMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotResolvedToolCallMetadata & AICommon.BotResolvedToolCallMetadata.$Shape;

        /**
         * Decodes a BotResolvedToolCallMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotResolvedToolCallMetadata & AICommon.BotResolvedToolCallMetadata.$Shape} BotResolvedToolCallMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotResolvedToolCallMetadata & AICommon.BotResolvedToolCallMetadata.$Shape;

        /**
         * Verifies a BotResolvedToolCallMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotResolvedToolCallMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotResolvedToolCallMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotResolvedToolCallMetadata;

        /**
         * Creates a plain object from a BotResolvedToolCallMetadata message. Also converts values to other types if specified.
         * @param message BotResolvedToolCallMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotResolvedToolCallMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotResolvedToolCallMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotResolvedToolCallMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotResolvedToolCallMetadata {

        /** Properties of a BotResolvedToolCallMetadata. */
        interface $Properties {

            /** BotResolvedToolCallMetadata toolCallId */
            toolCallId?: (string|null);

            /** BotResolvedToolCallMetadata resolutionDataSerialized */
            resolutionDataSerialized?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotResolvedToolCallMetadata. */
        type $Shape = AICommon.BotResolvedToolCallMetadata.$Properties;
    }

    /**
     * Properties of a BotCommandMetadata.
     * @deprecated Use AICommon.BotCommandMetadata.$Properties instead.
     */
    interface IBotCommandMetadata extends AICommon.BotCommandMetadata.$Properties {
    }

    /** Represents a BotCommandMetadata. */
    class BotCommandMetadata {

        /**
         * Constructs a new BotCommandMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotCommandMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotCommandMetadata commandName. */
        commandName?: (string|null);

        /** BotCommandMetadata commandDescription. */
        commandDescription?: (string|null);

        /** BotCommandMetadata commandPrompt. */
        commandPrompt?: (string|null);

        /**
         * Creates a new BotCommandMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotCommandMetadata instance
         */
        static create(properties: AICommon.BotCommandMetadata.$Shape): AICommon.BotCommandMetadata & AICommon.BotCommandMetadata.$Shape;
        static create(properties?: AICommon.BotCommandMetadata.$Properties): AICommon.BotCommandMetadata;

        /**
         * Encodes the specified BotCommandMetadata message. Does not implicitly {@link AICommon.BotCommandMetadata.verify|verify} messages.
         * @param message BotCommandMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotCommandMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotCommandMetadata message, length delimited. Does not implicitly {@link AICommon.BotCommandMetadata.verify|verify} messages.
         * @param message BotCommandMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotCommandMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotCommandMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotCommandMetadata & AICommon.BotCommandMetadata.$Shape} BotCommandMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotCommandMetadata & AICommon.BotCommandMetadata.$Shape;

        /**
         * Decodes a BotCommandMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotCommandMetadata & AICommon.BotCommandMetadata.$Shape} BotCommandMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotCommandMetadata & AICommon.BotCommandMetadata.$Shape;

        /**
         * Verifies a BotCommandMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotCommandMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotCommandMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotCommandMetadata;

        /**
         * Creates a plain object from a BotCommandMetadata message. Also converts values to other types if specified.
         * @param message BotCommandMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotCommandMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotCommandMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotCommandMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotCommandMetadata {

        /** Properties of a BotCommandMetadata. */
        interface $Properties {

            /** BotCommandMetadata commandName */
            commandName?: (string|null);

            /** BotCommandMetadata commandDescription */
            commandDescription?: (string|null);

            /** BotCommandMetadata commandPrompt */
            commandPrompt?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotCommandMetadata. */
        type $Shape = AICommon.BotCommandMetadata.$Properties;
    }

    /**
     * Properties of a AIMetadataOperation.
     * @deprecated Use AICommon.AIMetadataOperation.$Properties instead.
     */
    interface IAIMetadataOperation extends AICommon.AIMetadataOperation.$Properties {
    }

    /** Represents a AIMetadataOperation. */
    class AIMetadataOperation {

        /**
         * Constructs a new AIMetadataOperation.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.AIMetadataOperation.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIMetadataOperation hatchMetadataSync. */
        hatchMetadataSync?: (AICommon.HatchMetadataSync.$Properties|null);

        /** AIMetadataOperation bizAiMetadataSync. */
        bizAiMetadataSync?: (AICommon.BizAIMetadataSync.$Properties|null);

        /**
         * Creates a new AIMetadataOperation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIMetadataOperation instance
         */
        static create(properties: AICommon.AIMetadataOperation.$Shape): AICommon.AIMetadataOperation & AICommon.AIMetadataOperation.$Shape;
        static create(properties?: AICommon.AIMetadataOperation.$Properties): AICommon.AIMetadataOperation;

        /**
         * Encodes the specified AIMetadataOperation message. Does not implicitly {@link AICommon.AIMetadataOperation.verify|verify} messages.
         * @param message AIMetadataOperation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.AIMetadataOperation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIMetadataOperation message, length delimited. Does not implicitly {@link AICommon.AIMetadataOperation.verify|verify} messages.
         * @param message AIMetadataOperation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.AIMetadataOperation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIMetadataOperation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.AIMetadataOperation & AICommon.AIMetadataOperation.$Shape} AIMetadataOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIMetadataOperation & AICommon.AIMetadataOperation.$Shape;

        /**
         * Decodes a AIMetadataOperation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.AIMetadataOperation & AICommon.AIMetadataOperation.$Shape} AIMetadataOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIMetadataOperation & AICommon.AIMetadataOperation.$Shape;

        /**
         * Verifies a AIMetadataOperation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIMetadataOperation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIMetadataOperation
         */
        static fromObject(object: { [k: string]: any }): AICommon.AIMetadataOperation;

        /**
         * Creates a plain object from a AIMetadataOperation message. Also converts values to other types if specified.
         * @param message AIMetadataOperation
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.AIMetadataOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIMetadataOperation to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIMetadataOperation
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIMetadataOperation {

        /** Properties of a AIMetadataOperation. */
        interface $Properties {

            /** AIMetadataOperation hatchMetadataSync */
            hatchMetadataSync?: (AICommon.HatchMetadataSync.$Properties|null);

            /** AIMetadataOperation bizAiMetadataSync */
            bizAiMetadataSync?: (AICommon.BizAIMetadataSync.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIMetadataOperation. */
        type $Shape = {
          hatchMetadataSync?: AICommon.HatchMetadataSync.$Shape|null;
          bizAiMetadataSync?: AICommon.BizAIMetadataSync.$Shape|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a HatchMetadataSync.
     * @deprecated Use AICommon.HatchMetadataSync.$Properties instead.
     */
    interface IHatchMetadataSync extends AICommon.HatchMetadataSync.$Properties {
    }

    /** Represents a HatchMetadataSync. */
    class HatchMetadataSync {

        /**
         * Constructs a new HatchMetadataSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.HatchMetadataSync.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HatchMetadataSync data. */
        data?: (Uint8Array|null);

        /** HatchMetadataSync timestampMs. */
        timestampMs?: (number|Long|null);

        /** HatchMetadataSync requestId. */
        requestId?: (string|null);

        /**
         * Creates a new HatchMetadataSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HatchMetadataSync instance
         */
        static create(properties: AICommon.HatchMetadataSync.$Shape): AICommon.HatchMetadataSync & AICommon.HatchMetadataSync.$Shape;
        static create(properties?: AICommon.HatchMetadataSync.$Properties): AICommon.HatchMetadataSync;

        /**
         * Encodes the specified HatchMetadataSync message. Does not implicitly {@link AICommon.HatchMetadataSync.verify|verify} messages.
         * @param message HatchMetadataSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.HatchMetadataSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HatchMetadataSync message, length delimited. Does not implicitly {@link AICommon.HatchMetadataSync.verify|verify} messages.
         * @param message HatchMetadataSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.HatchMetadataSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HatchMetadataSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.HatchMetadataSync & AICommon.HatchMetadataSync.$Shape} HatchMetadataSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.HatchMetadataSync & AICommon.HatchMetadataSync.$Shape;

        /**
         * Decodes a HatchMetadataSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.HatchMetadataSync & AICommon.HatchMetadataSync.$Shape} HatchMetadataSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.HatchMetadataSync & AICommon.HatchMetadataSync.$Shape;

        /**
         * Verifies a HatchMetadataSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HatchMetadataSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HatchMetadataSync
         */
        static fromObject(object: { [k: string]: any }): AICommon.HatchMetadataSync;

        /**
         * Creates a plain object from a HatchMetadataSync message. Also converts values to other types if specified.
         * @param message HatchMetadataSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.HatchMetadataSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HatchMetadataSync to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for HatchMetadataSync
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HatchMetadataSync {

        /** Properties of a HatchMetadataSync. */
        interface $Properties {

            /** HatchMetadataSync data */
            data?: (Uint8Array|null);

            /** HatchMetadataSync timestampMs */
            timestampMs?: (number|Long|null);

            /** HatchMetadataSync requestId */
            requestId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HatchMetadataSync. */
        type $Shape = AICommon.HatchMetadataSync.$Properties;
    }

    /**
     * Properties of a AIMediaCollectionMessage.
     * @deprecated Use AICommon.AIMediaCollectionMessage.$Properties instead.
     */
    interface IAIMediaCollectionMessage extends AICommon.AIMediaCollectionMessage.$Properties {
    }

    /** Represents a AIMediaCollectionMessage. */
    class AIMediaCollectionMessage {

        /**
         * Constructs a new AIMediaCollectionMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.AIMediaCollectionMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIMediaCollectionMessage collectionId. */
        collectionId?: (string|null);

        /** AIMediaCollectionMessage expectedMediaCount. */
        expectedMediaCount?: (number|null);

        /** AIMediaCollectionMessage hasGlobalCaption. */
        hasGlobalCaption?: (boolean|null);

        /**
         * Creates a new AIMediaCollectionMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIMediaCollectionMessage instance
         */
        static create(properties: AICommon.AIMediaCollectionMessage.$Shape): AICommon.AIMediaCollectionMessage & AICommon.AIMediaCollectionMessage.$Shape;
        static create(properties?: AICommon.AIMediaCollectionMessage.$Properties): AICommon.AIMediaCollectionMessage;

        /**
         * Encodes the specified AIMediaCollectionMessage message. Does not implicitly {@link AICommon.AIMediaCollectionMessage.verify|verify} messages.
         * @param message AIMediaCollectionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.AIMediaCollectionMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIMediaCollectionMessage message, length delimited. Does not implicitly {@link AICommon.AIMediaCollectionMessage.verify|verify} messages.
         * @param message AIMediaCollectionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.AIMediaCollectionMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIMediaCollectionMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.AIMediaCollectionMessage & AICommon.AIMediaCollectionMessage.$Shape} AIMediaCollectionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIMediaCollectionMessage & AICommon.AIMediaCollectionMessage.$Shape;

        /**
         * Decodes a AIMediaCollectionMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.AIMediaCollectionMessage & AICommon.AIMediaCollectionMessage.$Shape} AIMediaCollectionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIMediaCollectionMessage & AICommon.AIMediaCollectionMessage.$Shape;

        /**
         * Verifies a AIMediaCollectionMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIMediaCollectionMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIMediaCollectionMessage
         */
        static fromObject(object: { [k: string]: any }): AICommon.AIMediaCollectionMessage;

        /**
         * Creates a plain object from a AIMediaCollectionMessage message. Also converts values to other types if specified.
         * @param message AIMediaCollectionMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.AIMediaCollectionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIMediaCollectionMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIMediaCollectionMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIMediaCollectionMessage {

        /** Properties of a AIMediaCollectionMessage. */
        interface $Properties {

            /** AIMediaCollectionMessage collectionId */
            collectionId?: (string|null);

            /** AIMediaCollectionMessage expectedMediaCount */
            expectedMediaCount?: (number|null);

            /** AIMediaCollectionMessage hasGlobalCaption */
            hasGlobalCaption?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIMediaCollectionMessage. */
        type $Shape = AICommon.AIMediaCollectionMessage.$Properties;
    }

    /**
     * Properties of a AIMediaCollectionMetadata.
     * @deprecated Use AICommon.AIMediaCollectionMetadata.$Properties instead.
     */
    interface IAIMediaCollectionMetadata extends AICommon.AIMediaCollectionMetadata.$Properties {
    }

    /** Represents a AIMediaCollectionMetadata. */
    class AIMediaCollectionMetadata {

        /**
         * Constructs a new AIMediaCollectionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.AIMediaCollectionMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIMediaCollectionMetadata collectionId. */
        collectionId?: (string|null);

        /** AIMediaCollectionMetadata uploadOrderIndex. */
        uploadOrderIndex?: (number|null);

        /**
         * Creates a new AIMediaCollectionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIMediaCollectionMetadata instance
         */
        static create(properties: AICommon.AIMediaCollectionMetadata.$Shape): AICommon.AIMediaCollectionMetadata & AICommon.AIMediaCollectionMetadata.$Shape;
        static create(properties?: AICommon.AIMediaCollectionMetadata.$Properties): AICommon.AIMediaCollectionMetadata;

        /**
         * Encodes the specified AIMediaCollectionMetadata message. Does not implicitly {@link AICommon.AIMediaCollectionMetadata.verify|verify} messages.
         * @param message AIMediaCollectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.AIMediaCollectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIMediaCollectionMetadata message, length delimited. Does not implicitly {@link AICommon.AIMediaCollectionMetadata.verify|verify} messages.
         * @param message AIMediaCollectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.AIMediaCollectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIMediaCollectionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.AIMediaCollectionMetadata & AICommon.AIMediaCollectionMetadata.$Shape} AIMediaCollectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIMediaCollectionMetadata & AICommon.AIMediaCollectionMetadata.$Shape;

        /**
         * Decodes a AIMediaCollectionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.AIMediaCollectionMetadata & AICommon.AIMediaCollectionMetadata.$Shape} AIMediaCollectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIMediaCollectionMetadata & AICommon.AIMediaCollectionMetadata.$Shape;

        /**
         * Verifies a AIMediaCollectionMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIMediaCollectionMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIMediaCollectionMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.AIMediaCollectionMetadata;

        /**
         * Creates a plain object from a AIMediaCollectionMetadata message. Also converts values to other types if specified.
         * @param message AIMediaCollectionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.AIMediaCollectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIMediaCollectionMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIMediaCollectionMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIMediaCollectionMetadata {

        /** Properties of a AIMediaCollectionMetadata. */
        interface $Properties {

            /** AIMediaCollectionMetadata collectionId */
            collectionId?: (string|null);

            /** AIMediaCollectionMetadata uploadOrderIndex */
            uploadOrderIndex?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIMediaCollectionMetadata. */
        type $Shape = AICommon.AIMediaCollectionMetadata.$Properties;
    }

    /**
     * Properties of a AIThreadInfo.
     * @deprecated Use AICommon.AIThreadInfo.$Properties instead.
     */
    interface IAIThreadInfo extends AICommon.AIThreadInfo.$Properties {
    }

    /** Represents a AIThreadInfo. */
    class AIThreadInfo {

        /**
         * Constructs a new AIThreadInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.AIThreadInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIThreadInfo serverInfo. */
        serverInfo?: (AICommon.AIThreadInfo.AIThreadServerInfo.$Properties|null);

        /** AIThreadInfo clientInfo. */
        clientInfo?: (AICommon.AIThreadInfo.AIThreadClientInfo.$Properties|null);

        /**
         * Creates a new AIThreadInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIThreadInfo instance
         */
        static create(properties: AICommon.AIThreadInfo.$Shape): AICommon.AIThreadInfo & AICommon.AIThreadInfo.$Shape;
        static create(properties?: AICommon.AIThreadInfo.$Properties): AICommon.AIThreadInfo;

        /**
         * Encodes the specified AIThreadInfo message. Does not implicitly {@link AICommon.AIThreadInfo.verify|verify} messages.
         * @param message AIThreadInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.AIThreadInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIThreadInfo message, length delimited. Does not implicitly {@link AICommon.AIThreadInfo.verify|verify} messages.
         * @param message AIThreadInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.AIThreadInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIThreadInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.AIThreadInfo & AICommon.AIThreadInfo.$Shape} AIThreadInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIThreadInfo & AICommon.AIThreadInfo.$Shape;

        /**
         * Decodes a AIThreadInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.AIThreadInfo & AICommon.AIThreadInfo.$Shape} AIThreadInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIThreadInfo & AICommon.AIThreadInfo.$Shape;

        /**
         * Verifies a AIThreadInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIThreadInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIThreadInfo
         */
        static fromObject(object: { [k: string]: any }): AICommon.AIThreadInfo;

        /**
         * Creates a plain object from a AIThreadInfo message. Also converts values to other types if specified.
         * @param message AIThreadInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.AIThreadInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIThreadInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AIThreadInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AIThreadInfo {

        /** Properties of a AIThreadInfo. */
        interface $Properties {

            /** AIThreadInfo serverInfo */
            serverInfo?: (AICommon.AIThreadInfo.AIThreadServerInfo.$Properties|null);

            /** AIThreadInfo clientInfo */
            clientInfo?: (AICommon.AIThreadInfo.AIThreadClientInfo.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIThreadInfo. */
        type $Shape = AICommon.AIThreadInfo.$Properties;

        /**
         * Properties of a AIThreadClientInfo.
         * @deprecated Use AICommon.AIThreadInfo.AIThreadClientInfo.$Properties instead.
         */
        interface IAIThreadClientInfo extends AICommon.AIThreadInfo.AIThreadClientInfo.$Properties {
        }

        /** Represents a AIThreadClientInfo. */
        class AIThreadClientInfo {

            /**
             * Constructs a new AIThreadClientInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIThreadInfo.AIThreadClientInfo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AIThreadClientInfo type. */
            type?: (AICommon.AIThreadInfo.AIThreadClientInfo.AIThreadType|null);

            /** AIThreadClientInfo sourceChatJid. */
            sourceChatJid?: (string|null);

            /**
             * Creates a new AIThreadClientInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIThreadClientInfo instance
             */
            static create(properties: AICommon.AIThreadInfo.AIThreadClientInfo.$Shape): AICommon.AIThreadInfo.AIThreadClientInfo & AICommon.AIThreadInfo.AIThreadClientInfo.$Shape;
            static create(properties?: AICommon.AIThreadInfo.AIThreadClientInfo.$Properties): AICommon.AIThreadInfo.AIThreadClientInfo;

            /**
             * Encodes the specified AIThreadClientInfo message. Does not implicitly {@link AICommon.AIThreadInfo.AIThreadClientInfo.verify|verify} messages.
             * @param message AIThreadClientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.AIThreadInfo.AIThreadClientInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIThreadClientInfo message, length delimited. Does not implicitly {@link AICommon.AIThreadInfo.AIThreadClientInfo.verify|verify} messages.
             * @param message AIThreadClientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.AIThreadInfo.AIThreadClientInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIThreadClientInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.AIThreadInfo.AIThreadClientInfo & AICommon.AIThreadInfo.AIThreadClientInfo.$Shape} AIThreadClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIThreadInfo.AIThreadClientInfo & AICommon.AIThreadInfo.AIThreadClientInfo.$Shape;

            /**
             * Decodes a AIThreadClientInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.AIThreadInfo.AIThreadClientInfo & AICommon.AIThreadInfo.AIThreadClientInfo.$Shape} AIThreadClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIThreadInfo.AIThreadClientInfo & AICommon.AIThreadInfo.AIThreadClientInfo.$Shape;

            /**
             * Verifies a AIThreadClientInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIThreadClientInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIThreadClientInfo
             */
            static fromObject(object: { [k: string]: any }): AICommon.AIThreadInfo.AIThreadClientInfo;

            /**
             * Creates a plain object from a AIThreadClientInfo message. Also converts values to other types if specified.
             * @param message AIThreadClientInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.AIThreadInfo.AIThreadClientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIThreadClientInfo to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AIThreadClientInfo
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AIThreadClientInfo {

            /** Properties of a AIThreadClientInfo. */
            interface $Properties {

                /** AIThreadClientInfo type */
                type?: (AICommon.AIThreadInfo.AIThreadClientInfo.AIThreadType|null);

                /** AIThreadClientInfo sourceChatJid */
                sourceChatJid?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a AIThreadClientInfo. */
            type $Shape = AICommon.AIThreadInfo.AIThreadClientInfo.$Properties;

            /** AIThreadType enum. */
            enum AIThreadType {

                /** UNKNOWN value */
                UNKNOWN = 0,

                /** DEFAULT value */
                DEFAULT = 1,

                /** INCOGNITO value */
                INCOGNITO = 2,

                /** SIDE_CHAT value */
                SIDE_CHAT = 3,

                /** PRIVATE_SEARCH_CHAT value */
                PRIVATE_SEARCH_CHAT = 4
            }
        }

        /**
         * Properties of a AIThreadServerInfo.
         * @deprecated Use AICommon.AIThreadInfo.AIThreadServerInfo.$Properties instead.
         */
        interface IAIThreadServerInfo extends AICommon.AIThreadInfo.AIThreadServerInfo.$Properties {
        }

        /** Represents a AIThreadServerInfo. */
        class AIThreadServerInfo {

            /**
             * Constructs a new AIThreadServerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIThreadInfo.AIThreadServerInfo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AIThreadServerInfo title. */
            title?: (string|null);

            /**
             * Creates a new AIThreadServerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIThreadServerInfo instance
             */
            static create(properties: AICommon.AIThreadInfo.AIThreadServerInfo.$Shape): AICommon.AIThreadInfo.AIThreadServerInfo & AICommon.AIThreadInfo.AIThreadServerInfo.$Shape;
            static create(properties?: AICommon.AIThreadInfo.AIThreadServerInfo.$Properties): AICommon.AIThreadInfo.AIThreadServerInfo;

            /**
             * Encodes the specified AIThreadServerInfo message. Does not implicitly {@link AICommon.AIThreadInfo.AIThreadServerInfo.verify|verify} messages.
             * @param message AIThreadServerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.AIThreadInfo.AIThreadServerInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIThreadServerInfo message, length delimited. Does not implicitly {@link AICommon.AIThreadInfo.AIThreadServerInfo.verify|verify} messages.
             * @param message AIThreadServerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.AIThreadInfo.AIThreadServerInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIThreadServerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.AIThreadInfo.AIThreadServerInfo & AICommon.AIThreadInfo.AIThreadServerInfo.$Shape} AIThreadServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIThreadInfo.AIThreadServerInfo & AICommon.AIThreadInfo.AIThreadServerInfo.$Shape;

            /**
             * Decodes a AIThreadServerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.AIThreadInfo.AIThreadServerInfo & AICommon.AIThreadInfo.AIThreadServerInfo.$Shape} AIThreadServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIThreadInfo.AIThreadServerInfo & AICommon.AIThreadInfo.AIThreadServerInfo.$Shape;

            /**
             * Verifies a AIThreadServerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIThreadServerInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIThreadServerInfo
             */
            static fromObject(object: { [k: string]: any }): AICommon.AIThreadInfo.AIThreadServerInfo;

            /**
             * Creates a plain object from a AIThreadServerInfo message. Also converts values to other types if specified.
             * @param message AIThreadServerInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.AIThreadInfo.AIThreadServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIThreadServerInfo to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AIThreadServerInfo
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AIThreadServerInfo {

            /** Properties of a AIThreadServerInfo. */
            interface $Properties {

                /** AIThreadServerInfo title */
                title?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a AIThreadServerInfo. */
            type $Shape = AICommon.AIThreadInfo.AIThreadServerInfo.$Properties;
        }
    }

    /**
     * Properties of a BotUnifiedResponseMutation.
     * @deprecated Use AICommon.BotUnifiedResponseMutation.$Properties instead.
     */
    interface IBotUnifiedResponseMutation extends AICommon.BotUnifiedResponseMutation.$Properties {
    }

    /** Represents a BotUnifiedResponseMutation. */
    class BotUnifiedResponseMutation {

        /**
         * Constructs a new BotUnifiedResponseMutation.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotUnifiedResponseMutation.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotUnifiedResponseMutation sbsMetadata. */
        sbsMetadata?: (AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Properties|null);

        /** BotUnifiedResponseMutation mediaDetailsMetadataList. */
        mediaDetailsMetadataList: AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Properties[];

        /**
         * Creates a new BotUnifiedResponseMutation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotUnifiedResponseMutation instance
         */
        static create(properties: AICommon.BotUnifiedResponseMutation.$Shape): AICommon.BotUnifiedResponseMutation & AICommon.BotUnifiedResponseMutation.$Shape;
        static create(properties?: AICommon.BotUnifiedResponseMutation.$Properties): AICommon.BotUnifiedResponseMutation;

        /**
         * Encodes the specified BotUnifiedResponseMutation message. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.verify|verify} messages.
         * @param message BotUnifiedResponseMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotUnifiedResponseMutation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotUnifiedResponseMutation message, length delimited. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.verify|verify} messages.
         * @param message BotUnifiedResponseMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotUnifiedResponseMutation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotUnifiedResponseMutation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotUnifiedResponseMutation & AICommon.BotUnifiedResponseMutation.$Shape} BotUnifiedResponseMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotUnifiedResponseMutation & AICommon.BotUnifiedResponseMutation.$Shape;

        /**
         * Decodes a BotUnifiedResponseMutation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotUnifiedResponseMutation & AICommon.BotUnifiedResponseMutation.$Shape} BotUnifiedResponseMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotUnifiedResponseMutation & AICommon.BotUnifiedResponseMutation.$Shape;

        /**
         * Verifies a BotUnifiedResponseMutation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotUnifiedResponseMutation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotUnifiedResponseMutation
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotUnifiedResponseMutation;

        /**
         * Creates a plain object from a BotUnifiedResponseMutation message. Also converts values to other types if specified.
         * @param message BotUnifiedResponseMutation
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotUnifiedResponseMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotUnifiedResponseMutation to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotUnifiedResponseMutation
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotUnifiedResponseMutation {

        /** Properties of a BotUnifiedResponseMutation. */
        interface $Properties {

            /** BotUnifiedResponseMutation sbsMetadata */
            sbsMetadata?: (AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Properties|null);

            /** BotUnifiedResponseMutation mediaDetailsMetadataList */
            mediaDetailsMetadataList?: (AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotUnifiedResponseMutation. */
        type $Shape = AICommon.BotUnifiedResponseMutation.$Properties;

        /**
         * Properties of a MediaDetailsMetadata.
         * @deprecated Use AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Properties instead.
         */
        interface IMediaDetailsMetadata extends AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Properties {
        }

        /** Represents a MediaDetailsMetadata. */
        class MediaDetailsMetadata {

            /**
             * Constructs a new MediaDetailsMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MediaDetailsMetadata id. */
            id?: (string|null);

            /** MediaDetailsMetadata highResMedia. */
            highResMedia?: (AICommon.BotMediaMetadata.$Properties|null);

            /** MediaDetailsMetadata previewMedia. */
            previewMedia?: (AICommon.BotMediaMetadata.$Properties|null);

            /**
             * Creates a new MediaDetailsMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MediaDetailsMetadata instance
             */
            static create(properties: AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Shape): AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata & AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Shape;
            static create(properties?: AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Properties): AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata;

            /**
             * Encodes the specified MediaDetailsMetadata message. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.verify|verify} messages.
             * @param message MediaDetailsMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MediaDetailsMetadata message, length delimited. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.verify|verify} messages.
             * @param message MediaDetailsMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MediaDetailsMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata & AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Shape} MediaDetailsMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata & AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Shape;

            /**
             * Decodes a MediaDetailsMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata & AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Shape} MediaDetailsMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata & AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Shape;

            /**
             * Verifies a MediaDetailsMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MediaDetailsMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MediaDetailsMetadata
             */
            static fromObject(object: { [k: string]: any }): AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata;

            /**
             * Creates a plain object from a MediaDetailsMetadata message. Also converts values to other types if specified.
             * @param message MediaDetailsMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MediaDetailsMetadata to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MediaDetailsMetadata
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MediaDetailsMetadata {

            /** Properties of a MediaDetailsMetadata. */
            interface $Properties {

                /** MediaDetailsMetadata id */
                id?: (string|null);

                /** MediaDetailsMetadata highResMedia */
                highResMedia?: (AICommon.BotMediaMetadata.$Properties|null);

                /** MediaDetailsMetadata previewMedia */
                previewMedia?: (AICommon.BotMediaMetadata.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MediaDetailsMetadata. */
            type $Shape = AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.$Properties;
        }

        /**
         * Properties of a SideBySideMetadata.
         * @deprecated Use AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Properties instead.
         */
        interface ISideBySideMetadata extends AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Properties {
        }

        /** Represents a SideBySideMetadata. */
        class SideBySideMetadata {

            /**
             * Constructs a new SideBySideMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SideBySideMetadata primaryResponseId. */
            primaryResponseId?: (string|null);

            /** SideBySideMetadata surveyCtaHasRendered. */
            surveyCtaHasRendered?: (boolean|null);

            /**
             * Creates a new SideBySideMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SideBySideMetadata instance
             */
            static create(properties: AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Shape): AICommon.BotUnifiedResponseMutation.SideBySideMetadata & AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Shape;
            static create(properties?: AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Properties): AICommon.BotUnifiedResponseMutation.SideBySideMetadata;

            /**
             * Encodes the specified SideBySideMetadata message. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.SideBySideMetadata.verify|verify} messages.
             * @param message SideBySideMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SideBySideMetadata message, length delimited. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.SideBySideMetadata.verify|verify} messages.
             * @param message SideBySideMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SideBySideMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.BotUnifiedResponseMutation.SideBySideMetadata & AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Shape} SideBySideMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotUnifiedResponseMutation.SideBySideMetadata & AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Shape;

            /**
             * Decodes a SideBySideMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.BotUnifiedResponseMutation.SideBySideMetadata & AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Shape} SideBySideMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotUnifiedResponseMutation.SideBySideMetadata & AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Shape;

            /**
             * Verifies a SideBySideMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SideBySideMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SideBySideMetadata
             */
            static fromObject(object: { [k: string]: any }): AICommon.BotUnifiedResponseMutation.SideBySideMetadata;

            /**
             * Creates a plain object from a SideBySideMetadata message. Also converts values to other types if specified.
             * @param message SideBySideMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.BotUnifiedResponseMutation.SideBySideMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SideBySideMetadata to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SideBySideMetadata
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SideBySideMetadata {

            /** Properties of a SideBySideMetadata. */
            interface $Properties {

                /** SideBySideMetadata primaryResponseId */
                primaryResponseId?: (string|null);

                /** SideBySideMetadata surveyCtaHasRendered */
                surveyCtaHasRendered?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SideBySideMetadata. */
            type $Shape = AICommon.BotUnifiedResponseMutation.SideBySideMetadata.$Properties;
        }
    }

    /**
     * Properties of a BotMessageOrigin.
     * @deprecated Use AICommon.BotMessageOrigin.$Properties instead.
     */
    interface IBotMessageOrigin extends AICommon.BotMessageOrigin.$Properties {
    }

    /** Represents a BotMessageOrigin. */
    class BotMessageOrigin {

        /**
         * Constructs a new BotMessageOrigin.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotMessageOrigin.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMessageOrigin type. */
        type?: (AICommon.BotMessageOrigin.BotMessageOriginType|null);

        /** BotMessageOrigin proactiveMessageCampaignId. */
        proactiveMessageCampaignId?: (string|null);

        /**
         * Creates a new BotMessageOrigin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMessageOrigin instance
         */
        static create(properties: AICommon.BotMessageOrigin.$Shape): AICommon.BotMessageOrigin & AICommon.BotMessageOrigin.$Shape;
        static create(properties?: AICommon.BotMessageOrigin.$Properties): AICommon.BotMessageOrigin;

        /**
         * Encodes the specified BotMessageOrigin message. Does not implicitly {@link AICommon.BotMessageOrigin.verify|verify} messages.
         * @param message BotMessageOrigin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotMessageOrigin.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMessageOrigin message, length delimited. Does not implicitly {@link AICommon.BotMessageOrigin.verify|verify} messages.
         * @param message BotMessageOrigin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotMessageOrigin.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMessageOrigin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotMessageOrigin & AICommon.BotMessageOrigin.$Shape} BotMessageOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMessageOrigin & AICommon.BotMessageOrigin.$Shape;

        /**
         * Decodes a BotMessageOrigin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotMessageOrigin & AICommon.BotMessageOrigin.$Shape} BotMessageOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMessageOrigin & AICommon.BotMessageOrigin.$Shape;

        /**
         * Verifies a BotMessageOrigin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMessageOrigin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMessageOrigin
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotMessageOrigin;

        /**
         * Creates a plain object from a BotMessageOrigin message. Also converts values to other types if specified.
         * @param message BotMessageOrigin
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotMessageOrigin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMessageOrigin to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotMessageOrigin
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotMessageOrigin {

        /** Properties of a BotMessageOrigin. */
        interface $Properties {

            /** BotMessageOrigin type */
            type?: (AICommon.BotMessageOrigin.BotMessageOriginType|null);

            /** BotMessageOrigin proactiveMessageCampaignId */
            proactiveMessageCampaignId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMessageOrigin. */
        type $Shape = AICommon.BotMessageOrigin.$Properties;

        /** BotMessageOriginType enum. */
        enum BotMessageOriginType {

            /** BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED value */
            BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED = 0,

            /** BOT_MESSAGE_ORIGIN_TYPE_META_AI_THREAD_WELCOME value */
            BOT_MESSAGE_ORIGIN_TYPE_META_AI_THREAD_WELCOME = 1
        }
    }

    /**
     * Properties of a BotMessageOriginMetadata.
     * @deprecated Use AICommon.BotMessageOriginMetadata.$Properties instead.
     */
    interface IBotMessageOriginMetadata extends AICommon.BotMessageOriginMetadata.$Properties {
    }

    /** Represents a BotMessageOriginMetadata. */
    class BotMessageOriginMetadata {

        /**
         * Constructs a new BotMessageOriginMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotMessageOriginMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMessageOriginMetadata origins. */
        origins: AICommon.BotMessageOrigin.$Properties[];

        /**
         * Creates a new BotMessageOriginMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMessageOriginMetadata instance
         */
        static create(properties: AICommon.BotMessageOriginMetadata.$Shape): AICommon.BotMessageOriginMetadata & AICommon.BotMessageOriginMetadata.$Shape;
        static create(properties?: AICommon.BotMessageOriginMetadata.$Properties): AICommon.BotMessageOriginMetadata;

        /**
         * Encodes the specified BotMessageOriginMetadata message. Does not implicitly {@link AICommon.BotMessageOriginMetadata.verify|verify} messages.
         * @param message BotMessageOriginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotMessageOriginMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMessageOriginMetadata message, length delimited. Does not implicitly {@link AICommon.BotMessageOriginMetadata.verify|verify} messages.
         * @param message BotMessageOriginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotMessageOriginMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMessageOriginMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotMessageOriginMetadata & AICommon.BotMessageOriginMetadata.$Shape} BotMessageOriginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMessageOriginMetadata & AICommon.BotMessageOriginMetadata.$Shape;

        /**
         * Decodes a BotMessageOriginMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotMessageOriginMetadata & AICommon.BotMessageOriginMetadata.$Shape} BotMessageOriginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMessageOriginMetadata & AICommon.BotMessageOriginMetadata.$Shape;

        /**
         * Verifies a BotMessageOriginMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMessageOriginMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMessageOriginMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotMessageOriginMetadata;

        /**
         * Creates a plain object from a BotMessageOriginMetadata message. Also converts values to other types if specified.
         * @param message BotMessageOriginMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotMessageOriginMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMessageOriginMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotMessageOriginMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotMessageOriginMetadata {

        /** Properties of a BotMessageOriginMetadata. */
        interface $Properties {

            /** BotMessageOriginMetadata origins */
            origins?: (AICommon.BotMessageOrigin.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMessageOriginMetadata. */
        type $Shape = AICommon.BotMessageOriginMetadata.$Properties;
    }

    /**
     * Properties of an InThreadSurveyMetadata.
     * @deprecated Use AICommon.InThreadSurveyMetadata.$Properties instead.
     */
    interface IInThreadSurveyMetadata extends AICommon.InThreadSurveyMetadata.$Properties {
    }

    /** Represents an InThreadSurveyMetadata. */
    class InThreadSurveyMetadata {

        /**
         * Constructs a new InThreadSurveyMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.InThreadSurveyMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** InThreadSurveyMetadata tessaSessionId. */
        tessaSessionId?: (string|null);

        /** InThreadSurveyMetadata simonSessionId. */
        simonSessionId?: (string|null);

        /** InThreadSurveyMetadata simonSurveyId. */
        simonSurveyId?: (string|null);

        /** InThreadSurveyMetadata tessaRootId. */
        tessaRootId?: (string|null);

        /** InThreadSurveyMetadata requestId. */
        requestId?: (string|null);

        /** InThreadSurveyMetadata tessaEvent. */
        tessaEvent?: (string|null);

        /** InThreadSurveyMetadata invitationHeaderText. */
        invitationHeaderText?: (string|null);

        /** InThreadSurveyMetadata invitationBodyText. */
        invitationBodyText?: (string|null);

        /** InThreadSurveyMetadata invitationCtaText. */
        invitationCtaText?: (string|null);

        /** InThreadSurveyMetadata invitationCtaUrl. */
        invitationCtaUrl?: (string|null);

        /** InThreadSurveyMetadata surveyTitle. */
        surveyTitle?: (string|null);

        /** InThreadSurveyMetadata questions. */
        questions: AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties[];

        /** InThreadSurveyMetadata surveyContinueButtonText. */
        surveyContinueButtonText?: (string|null);

        /** InThreadSurveyMetadata surveySubmitButtonText. */
        surveySubmitButtonText?: (string|null);

        /** InThreadSurveyMetadata privacyStatementFull. */
        privacyStatementFull?: (string|null);

        /** InThreadSurveyMetadata privacyStatementParts. */
        privacyStatementParts: AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties[];

        /** InThreadSurveyMetadata feedbackToastText. */
        feedbackToastText?: (string|null);

        /** InThreadSurveyMetadata startQuestionIndex. */
        startQuestionIndex?: (number|null);

        /**
         * Creates a new InThreadSurveyMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InThreadSurveyMetadata instance
         */
        static create(properties: AICommon.InThreadSurveyMetadata.$Shape): AICommon.InThreadSurveyMetadata & AICommon.InThreadSurveyMetadata.$Shape;
        static create(properties?: AICommon.InThreadSurveyMetadata.$Properties): AICommon.InThreadSurveyMetadata;

        /**
         * Encodes the specified InThreadSurveyMetadata message. Does not implicitly {@link AICommon.InThreadSurveyMetadata.verify|verify} messages.
         * @param message InThreadSurveyMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.InThreadSurveyMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InThreadSurveyMetadata message, length delimited. Does not implicitly {@link AICommon.InThreadSurveyMetadata.verify|verify} messages.
         * @param message InThreadSurveyMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.InThreadSurveyMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InThreadSurveyMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.InThreadSurveyMetadata & AICommon.InThreadSurveyMetadata.$Shape} InThreadSurveyMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.InThreadSurveyMetadata & AICommon.InThreadSurveyMetadata.$Shape;

        /**
         * Decodes an InThreadSurveyMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.InThreadSurveyMetadata & AICommon.InThreadSurveyMetadata.$Shape} InThreadSurveyMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.InThreadSurveyMetadata & AICommon.InThreadSurveyMetadata.$Shape;

        /**
         * Verifies an InThreadSurveyMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InThreadSurveyMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InThreadSurveyMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.InThreadSurveyMetadata;

        /**
         * Creates a plain object from an InThreadSurveyMetadata message. Also converts values to other types if specified.
         * @param message InThreadSurveyMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.InThreadSurveyMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InThreadSurveyMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for InThreadSurveyMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace InThreadSurveyMetadata {

        /** Properties of an InThreadSurveyMetadata. */
        interface $Properties {

            /** InThreadSurveyMetadata tessaSessionId */
            tessaSessionId?: (string|null);

            /** InThreadSurveyMetadata simonSessionId */
            simonSessionId?: (string|null);

            /** InThreadSurveyMetadata simonSurveyId */
            simonSurveyId?: (string|null);

            /** InThreadSurveyMetadata tessaRootId */
            tessaRootId?: (string|null);

            /** InThreadSurveyMetadata requestId */
            requestId?: (string|null);

            /** InThreadSurveyMetadata tessaEvent */
            tessaEvent?: (string|null);

            /** InThreadSurveyMetadata invitationHeaderText */
            invitationHeaderText?: (string|null);

            /** InThreadSurveyMetadata invitationBodyText */
            invitationBodyText?: (string|null);

            /** InThreadSurveyMetadata invitationCtaText */
            invitationCtaText?: (string|null);

            /** InThreadSurveyMetadata invitationCtaUrl */
            invitationCtaUrl?: (string|null);

            /** InThreadSurveyMetadata surveyTitle */
            surveyTitle?: (string|null);

            /** InThreadSurveyMetadata questions */
            questions?: (AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties[]|null);

            /** InThreadSurveyMetadata surveyContinueButtonText */
            surveyContinueButtonText?: (string|null);

            /** InThreadSurveyMetadata surveySubmitButtonText */
            surveySubmitButtonText?: (string|null);

            /** InThreadSurveyMetadata privacyStatementFull */
            privacyStatementFull?: (string|null);

            /** InThreadSurveyMetadata privacyStatementParts */
            privacyStatementParts?: (AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties[]|null);

            /** InThreadSurveyMetadata feedbackToastText */
            feedbackToastText?: (string|null);

            /** InThreadSurveyMetadata startQuestionIndex */
            startQuestionIndex?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an InThreadSurveyMetadata. */
        type $Shape = AICommon.InThreadSurveyMetadata.$Properties;

        /**
         * Properties of an InThreadSurveyOption.
         * @deprecated Use AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Properties instead.
         */
        interface IInThreadSurveyOption extends AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Properties {
        }

        /** Represents an InThreadSurveyOption. */
        class InThreadSurveyOption {

            /**
             * Constructs a new InThreadSurveyOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** InThreadSurveyOption stringValue. */
            stringValue?: (string|null);

            /** InThreadSurveyOption numericValue. */
            numericValue?: (number|null);

            /** InThreadSurveyOption textTranslated. */
            textTranslated?: (string|null);

            /**
             * Creates a new InThreadSurveyOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InThreadSurveyOption instance
             */
            static create(properties: AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Shape): AICommon.InThreadSurveyMetadata.InThreadSurveyOption & AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Shape;
            static create(properties?: AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Properties): AICommon.InThreadSurveyMetadata.InThreadSurveyOption;

            /**
             * Encodes the specified InThreadSurveyOption message. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyOption.verify|verify} messages.
             * @param message InThreadSurveyOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InThreadSurveyOption message, length delimited. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyOption.verify|verify} messages.
             * @param message InThreadSurveyOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InThreadSurveyOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.InThreadSurveyMetadata.InThreadSurveyOption & AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Shape} InThreadSurveyOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.InThreadSurveyMetadata.InThreadSurveyOption & AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Shape;

            /**
             * Decodes an InThreadSurveyOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.InThreadSurveyMetadata.InThreadSurveyOption & AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Shape} InThreadSurveyOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.InThreadSurveyMetadata.InThreadSurveyOption & AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Shape;

            /**
             * Verifies an InThreadSurveyOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InThreadSurveyOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InThreadSurveyOption
             */
            static fromObject(object: { [k: string]: any }): AICommon.InThreadSurveyMetadata.InThreadSurveyOption;

            /**
             * Creates a plain object from an InThreadSurveyOption message. Also converts values to other types if specified.
             * @param message InThreadSurveyOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.InThreadSurveyMetadata.InThreadSurveyOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InThreadSurveyOption to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for InThreadSurveyOption
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace InThreadSurveyOption {

            /** Properties of an InThreadSurveyOption. */
            interface $Properties {

                /** InThreadSurveyOption stringValue */
                stringValue?: (string|null);

                /** InThreadSurveyOption numericValue */
                numericValue?: (number|null);

                /** InThreadSurveyOption textTranslated */
                textTranslated?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an InThreadSurveyOption. */
            type $Shape = AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Properties;
        }

        /**
         * Properties of an InThreadSurveyPrivacyStatementPart.
         * @deprecated Use AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties instead.
         */
        interface IInThreadSurveyPrivacyStatementPart extends AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties {
        }

        /** Represents an InThreadSurveyPrivacyStatementPart. */
        class InThreadSurveyPrivacyStatementPart {

            /**
             * Constructs a new InThreadSurveyPrivacyStatementPart.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** InThreadSurveyPrivacyStatementPart text. */
            text?: (string|null);

            /** InThreadSurveyPrivacyStatementPart url. */
            url?: (string|null);

            /**
             * Creates a new InThreadSurveyPrivacyStatementPart instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InThreadSurveyPrivacyStatementPart instance
             */
            static create(properties: AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape): AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape;
            static create(properties?: AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties): AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;

            /**
             * Encodes the specified InThreadSurveyPrivacyStatementPart message. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.verify|verify} messages.
             * @param message InThreadSurveyPrivacyStatementPart message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InThreadSurveyPrivacyStatementPart message, length delimited. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.verify|verify} messages.
             * @param message InThreadSurveyPrivacyStatementPart message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InThreadSurveyPrivacyStatementPart message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape} InThreadSurveyPrivacyStatementPart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape;

            /**
             * Decodes an InThreadSurveyPrivacyStatementPart message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape} InThreadSurveyPrivacyStatementPart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape;

            /**
             * Verifies an InThreadSurveyPrivacyStatementPart message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InThreadSurveyPrivacyStatementPart message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InThreadSurveyPrivacyStatementPart
             */
            static fromObject(object: { [k: string]: any }): AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;

            /**
             * Creates a plain object from an InThreadSurveyPrivacyStatementPart message. Also converts values to other types if specified.
             * @param message InThreadSurveyPrivacyStatementPart
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InThreadSurveyPrivacyStatementPart to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for InThreadSurveyPrivacyStatementPart
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace InThreadSurveyPrivacyStatementPart {

            /** Properties of an InThreadSurveyPrivacyStatementPart. */
            interface $Properties {

                /** InThreadSurveyPrivacyStatementPart text */
                text?: (string|null);

                /** InThreadSurveyPrivacyStatementPart url */
                url?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an InThreadSurveyPrivacyStatementPart. */
            type $Shape = AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties;
        }

        /**
         * Properties of an InThreadSurveyQuestion.
         * @deprecated Use AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties instead.
         */
        interface IInThreadSurveyQuestion extends AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties {
        }

        /** Represents an InThreadSurveyQuestion. */
        class InThreadSurveyQuestion {

            /**
             * Constructs a new InThreadSurveyQuestion.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** InThreadSurveyQuestion questionText. */
            questionText?: (string|null);

            /** InThreadSurveyQuestion questionId. */
            questionId?: (string|null);

            /** InThreadSurveyQuestion questionOptions. */
            questionOptions: AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Properties[];

            /**
             * Creates a new InThreadSurveyQuestion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InThreadSurveyQuestion instance
             */
            static create(properties: AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape): AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion & AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape;
            static create(properties?: AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties): AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion;

            /**
             * Encodes the specified InThreadSurveyQuestion message. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.verify|verify} messages.
             * @param message InThreadSurveyQuestion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InThreadSurveyQuestion message, length delimited. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.verify|verify} messages.
             * @param message InThreadSurveyQuestion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InThreadSurveyQuestion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion & AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape} InThreadSurveyQuestion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion & AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape;

            /**
             * Decodes an InThreadSurveyQuestion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion & AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape} InThreadSurveyQuestion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion & AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape;

            /**
             * Verifies an InThreadSurveyQuestion message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InThreadSurveyQuestion message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InThreadSurveyQuestion
             */
            static fromObject(object: { [k: string]: any }): AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion;

            /**
             * Creates a plain object from an InThreadSurveyQuestion message. Also converts values to other types if specified.
             * @param message InThreadSurveyQuestion
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InThreadSurveyQuestion to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for InThreadSurveyQuestion
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace InThreadSurveyQuestion {

            /** Properties of an InThreadSurveyQuestion. */
            interface $Properties {

                /** InThreadSurveyQuestion questionText */
                questionText?: (string|null);

                /** InThreadSurveyQuestion questionId */
                questionId?: (string|null);

                /** InThreadSurveyQuestion questionOptions */
                questionOptions?: (AICommon.InThreadSurveyMetadata.InThreadSurveyOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an InThreadSurveyQuestion. */
            type $Shape = AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties;
        }
    }

    /**
     * Properties of a BotSourcesMetadata.
     * @deprecated Use AICommon.BotSourcesMetadata.$Properties instead.
     */
    interface IBotSourcesMetadata extends AICommon.BotSourcesMetadata.$Properties {
    }

    /** Represents a BotSourcesMetadata. */
    class BotSourcesMetadata {

        /**
         * Constructs a new BotSourcesMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotSourcesMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotSourcesMetadata sources. */
        sources: AICommon.BotSourcesMetadata.BotSourceItem.$Properties[];

        /**
         * Creates a new BotSourcesMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSourcesMetadata instance
         */
        static create(properties: AICommon.BotSourcesMetadata.$Shape): AICommon.BotSourcesMetadata & AICommon.BotSourcesMetadata.$Shape;
        static create(properties?: AICommon.BotSourcesMetadata.$Properties): AICommon.BotSourcesMetadata;

        /**
         * Encodes the specified BotSourcesMetadata message. Does not implicitly {@link AICommon.BotSourcesMetadata.verify|verify} messages.
         * @param message BotSourcesMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotSourcesMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSourcesMetadata message, length delimited. Does not implicitly {@link AICommon.BotSourcesMetadata.verify|verify} messages.
         * @param message BotSourcesMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotSourcesMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSourcesMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotSourcesMetadata & AICommon.BotSourcesMetadata.$Shape} BotSourcesMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSourcesMetadata & AICommon.BotSourcesMetadata.$Shape;

        /**
         * Decodes a BotSourcesMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotSourcesMetadata & AICommon.BotSourcesMetadata.$Shape} BotSourcesMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSourcesMetadata & AICommon.BotSourcesMetadata.$Shape;

        /**
         * Verifies a BotSourcesMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSourcesMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSourcesMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotSourcesMetadata;

        /**
         * Creates a plain object from a BotSourcesMetadata message. Also converts values to other types if specified.
         * @param message BotSourcesMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotSourcesMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSourcesMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotSourcesMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotSourcesMetadata {

        /** Properties of a BotSourcesMetadata. */
        interface $Properties {

            /** BotSourcesMetadata sources */
            sources?: (AICommon.BotSourcesMetadata.BotSourceItem.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotSourcesMetadata. */
        type $Shape = AICommon.BotSourcesMetadata.$Properties;

        /**
         * Properties of a BotSourceItem.
         * @deprecated Use AICommon.BotSourcesMetadata.BotSourceItem.$Properties instead.
         */
        interface IBotSourceItem extends AICommon.BotSourcesMetadata.BotSourceItem.$Properties {
        }

        /** Represents a BotSourceItem. */
        class BotSourceItem {

            /**
             * Constructs a new BotSourceItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotSourcesMetadata.BotSourceItem.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BotSourceItem provider. */
            provider?: (AICommon.BotSourcesMetadata.BotSourceItem.SourceProvider|null);

            /** BotSourceItem thumbnailCdnUrl. */
            thumbnailCdnUrl?: (string|null);

            /** BotSourceItem sourceProviderUrl. */
            sourceProviderUrl?: (string|null);

            /** BotSourceItem sourceQuery. */
            sourceQuery?: (string|null);

            /** BotSourceItem faviconCdnUrl. */
            faviconCdnUrl?: (string|null);

            /** BotSourceItem citationNumber. */
            citationNumber?: (number|null);

            /** BotSourceItem sourceTitle. */
            sourceTitle?: (string|null);

            /**
             * Creates a new BotSourceItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BotSourceItem instance
             */
            static create(properties: AICommon.BotSourcesMetadata.BotSourceItem.$Shape): AICommon.BotSourcesMetadata.BotSourceItem & AICommon.BotSourcesMetadata.BotSourceItem.$Shape;
            static create(properties?: AICommon.BotSourcesMetadata.BotSourceItem.$Properties): AICommon.BotSourcesMetadata.BotSourceItem;

            /**
             * Encodes the specified BotSourceItem message. Does not implicitly {@link AICommon.BotSourcesMetadata.BotSourceItem.verify|verify} messages.
             * @param message BotSourceItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.BotSourcesMetadata.BotSourceItem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BotSourceItem message, length delimited. Does not implicitly {@link AICommon.BotSourcesMetadata.BotSourceItem.verify|verify} messages.
             * @param message BotSourceItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.BotSourcesMetadata.BotSourceItem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BotSourceItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.BotSourcesMetadata.BotSourceItem & AICommon.BotSourcesMetadata.BotSourceItem.$Shape} BotSourceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSourcesMetadata.BotSourceItem & AICommon.BotSourcesMetadata.BotSourceItem.$Shape;

            /**
             * Decodes a BotSourceItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.BotSourcesMetadata.BotSourceItem & AICommon.BotSourcesMetadata.BotSourceItem.$Shape} BotSourceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSourcesMetadata.BotSourceItem & AICommon.BotSourcesMetadata.BotSourceItem.$Shape;

            /**
             * Verifies a BotSourceItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BotSourceItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BotSourceItem
             */
            static fromObject(object: { [k: string]: any }): AICommon.BotSourcesMetadata.BotSourceItem;

            /**
             * Creates a plain object from a BotSourceItem message. Also converts values to other types if specified.
             * @param message BotSourceItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.BotSourcesMetadata.BotSourceItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BotSourceItem to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BotSourceItem
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BotSourceItem {

            /** Properties of a BotSourceItem. */
            interface $Properties {

                /** BotSourceItem provider */
                provider?: (AICommon.BotSourcesMetadata.BotSourceItem.SourceProvider|null);

                /** BotSourceItem thumbnailCdnUrl */
                thumbnailCdnUrl?: (string|null);

                /** BotSourceItem sourceProviderUrl */
                sourceProviderUrl?: (string|null);

                /** BotSourceItem sourceQuery */
                sourceQuery?: (string|null);

                /** BotSourceItem faviconCdnUrl */
                faviconCdnUrl?: (string|null);

                /** BotSourceItem citationNumber */
                citationNumber?: (number|null);

                /** BotSourceItem sourceTitle */
                sourceTitle?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BotSourceItem. */
            type $Shape = AICommon.BotSourcesMetadata.BotSourceItem.$Properties;

            /** SourceProvider enum. */
            enum SourceProvider {

                /** UNKNOWN value */
                UNKNOWN = 0,

                /** BING value */
                BING = 1,

                /** GOOGLE value */
                GOOGLE = 2,

                /** SUPPORT value */
                SUPPORT = 3,

                /** OTHER value */
                OTHER = 4
            }
        }
    }

    /**
     * Properties of a BotAgeCollectionMetadata.
     * @deprecated Use AICommon.BotAgeCollectionMetadata.$Properties instead.
     */
    interface IBotAgeCollectionMetadata extends AICommon.BotAgeCollectionMetadata.$Properties {
    }

    /** Represents a BotAgeCollectionMetadata. */
    class BotAgeCollectionMetadata {

        /**
         * Constructs a new BotAgeCollectionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotAgeCollectionMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotAgeCollectionMetadata ageCollectionEligible. */
        ageCollectionEligible?: (boolean|null);

        /** BotAgeCollectionMetadata shouldTriggerAgeCollectionOnClient. */
        shouldTriggerAgeCollectionOnClient?: (boolean|null);

        /** BotAgeCollectionMetadata ageCollectionType. */
        ageCollectionType?: (AICommon.BotAgeCollectionMetadata.AgeCollectionType|null);

        /**
         * Creates a new BotAgeCollectionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotAgeCollectionMetadata instance
         */
        static create(properties: AICommon.BotAgeCollectionMetadata.$Shape): AICommon.BotAgeCollectionMetadata & AICommon.BotAgeCollectionMetadata.$Shape;
        static create(properties?: AICommon.BotAgeCollectionMetadata.$Properties): AICommon.BotAgeCollectionMetadata;

        /**
         * Encodes the specified BotAgeCollectionMetadata message. Does not implicitly {@link AICommon.BotAgeCollectionMetadata.verify|verify} messages.
         * @param message BotAgeCollectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotAgeCollectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotAgeCollectionMetadata message, length delimited. Does not implicitly {@link AICommon.BotAgeCollectionMetadata.verify|verify} messages.
         * @param message BotAgeCollectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotAgeCollectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotAgeCollectionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotAgeCollectionMetadata & AICommon.BotAgeCollectionMetadata.$Shape} BotAgeCollectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotAgeCollectionMetadata & AICommon.BotAgeCollectionMetadata.$Shape;

        /**
         * Decodes a BotAgeCollectionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotAgeCollectionMetadata & AICommon.BotAgeCollectionMetadata.$Shape} BotAgeCollectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotAgeCollectionMetadata & AICommon.BotAgeCollectionMetadata.$Shape;

        /**
         * Verifies a BotAgeCollectionMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotAgeCollectionMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotAgeCollectionMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotAgeCollectionMetadata;

        /**
         * Creates a plain object from a BotAgeCollectionMetadata message. Also converts values to other types if specified.
         * @param message BotAgeCollectionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotAgeCollectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotAgeCollectionMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotAgeCollectionMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotAgeCollectionMetadata {

        /** Properties of a BotAgeCollectionMetadata. */
        interface $Properties {

            /** BotAgeCollectionMetadata ageCollectionEligible */
            ageCollectionEligible?: (boolean|null);

            /** BotAgeCollectionMetadata shouldTriggerAgeCollectionOnClient */
            shouldTriggerAgeCollectionOnClient?: (boolean|null);

            /** BotAgeCollectionMetadata ageCollectionType */
            ageCollectionType?: (AICommon.BotAgeCollectionMetadata.AgeCollectionType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotAgeCollectionMetadata. */
        type $Shape = AICommon.BotAgeCollectionMetadata.$Properties;

        /** AgeCollectionType enum. */
        enum AgeCollectionType {

            /** O18_BINARY value */
            O18_BINARY = 0,

            /** WAFFLE value */
            WAFFLE = 1
        }
    }

    /**
     * Properties of a BotImagineMetadata.
     * @deprecated Use AICommon.BotImagineMetadata.$Properties instead.
     */
    interface IBotImagineMetadata extends AICommon.BotImagineMetadata.$Properties {
    }

    /** Represents a BotImagineMetadata. */
    class BotImagineMetadata {

        /**
         * Constructs a new BotImagineMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotImagineMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotImagineMetadata imagineType. */
        imagineType?: (AICommon.BotImagineMetadata.ImagineType|null);

        /** BotImagineMetadata shortPrompt. */
        shortPrompt?: (string|null);

        /**
         * Creates a new BotImagineMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotImagineMetadata instance
         */
        static create(properties: AICommon.BotImagineMetadata.$Shape): AICommon.BotImagineMetadata & AICommon.BotImagineMetadata.$Shape;
        static create(properties?: AICommon.BotImagineMetadata.$Properties): AICommon.BotImagineMetadata;

        /**
         * Encodes the specified BotImagineMetadata message. Does not implicitly {@link AICommon.BotImagineMetadata.verify|verify} messages.
         * @param message BotImagineMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotImagineMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotImagineMetadata message, length delimited. Does not implicitly {@link AICommon.BotImagineMetadata.verify|verify} messages.
         * @param message BotImagineMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotImagineMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotImagineMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotImagineMetadata & AICommon.BotImagineMetadata.$Shape} BotImagineMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotImagineMetadata & AICommon.BotImagineMetadata.$Shape;

        /**
         * Decodes a BotImagineMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotImagineMetadata & AICommon.BotImagineMetadata.$Shape} BotImagineMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotImagineMetadata & AICommon.BotImagineMetadata.$Shape;

        /**
         * Verifies a BotImagineMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotImagineMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotImagineMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotImagineMetadata;

        /**
         * Creates a plain object from a BotImagineMetadata message. Also converts values to other types if specified.
         * @param message BotImagineMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotImagineMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotImagineMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotImagineMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotImagineMetadata {

        /** Properties of a BotImagineMetadata. */
        interface $Properties {

            /** BotImagineMetadata imagineType */
            imagineType?: (AICommon.BotImagineMetadata.ImagineType|null);

            /** BotImagineMetadata shortPrompt */
            shortPrompt?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotImagineMetadata. */
        type $Shape = AICommon.BotImagineMetadata.$Properties;

        /** ImagineType enum. */
        enum ImagineType {

            /** UNKNOWN value */
            UNKNOWN = 0,

            /** IMAGINE value */
            IMAGINE = 1,

            /** MEMU value */
            MEMU = 2,

            /** FLASH value */
            FLASH = 3,

            /** EDIT value */
            EDIT = 4
        }
    }

    /**
     * Properties of a BotQuotaMetadata.
     * @deprecated Use AICommon.BotQuotaMetadata.$Properties instead.
     */
    interface IBotQuotaMetadata extends AICommon.BotQuotaMetadata.$Properties {
    }

    /** Represents a BotQuotaMetadata. */
    class BotQuotaMetadata {

        /**
         * Constructs a new BotQuotaMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotQuotaMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotQuotaMetadata botFeatureQuotaMetadata. */
        botFeatureQuotaMetadata: AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties[];

        /**
         * Creates a new BotQuotaMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotQuotaMetadata instance
         */
        static create(properties: AICommon.BotQuotaMetadata.$Shape): AICommon.BotQuotaMetadata & AICommon.BotQuotaMetadata.$Shape;
        static create(properties?: AICommon.BotQuotaMetadata.$Properties): AICommon.BotQuotaMetadata;

        /**
         * Encodes the specified BotQuotaMetadata message. Does not implicitly {@link AICommon.BotQuotaMetadata.verify|verify} messages.
         * @param message BotQuotaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotQuotaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotQuotaMetadata message, length delimited. Does not implicitly {@link AICommon.BotQuotaMetadata.verify|verify} messages.
         * @param message BotQuotaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotQuotaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotQuotaMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotQuotaMetadata & AICommon.BotQuotaMetadata.$Shape} BotQuotaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotQuotaMetadata & AICommon.BotQuotaMetadata.$Shape;

        /**
         * Decodes a BotQuotaMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotQuotaMetadata & AICommon.BotQuotaMetadata.$Shape} BotQuotaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotQuotaMetadata & AICommon.BotQuotaMetadata.$Shape;

        /**
         * Verifies a BotQuotaMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotQuotaMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotQuotaMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotQuotaMetadata;

        /**
         * Creates a plain object from a BotQuotaMetadata message. Also converts values to other types if specified.
         * @param message BotQuotaMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotQuotaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotQuotaMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotQuotaMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotQuotaMetadata {

        /** Properties of a BotQuotaMetadata. */
        interface $Properties {

            /** BotQuotaMetadata botFeatureQuotaMetadata */
            botFeatureQuotaMetadata?: (AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotQuotaMetadata. */
        type $Shape = AICommon.BotQuotaMetadata.$Properties;

        /**
         * Properties of a BotFeatureQuotaMetadata.
         * @deprecated Use AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties instead.
         */
        interface IBotFeatureQuotaMetadata extends AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties {
        }

        /** Represents a BotFeatureQuotaMetadata. */
        class BotFeatureQuotaMetadata {

            /**
             * Constructs a new BotFeatureQuotaMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BotFeatureQuotaMetadata featureType. */
            featureType?: (AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType|null);

            /** BotFeatureQuotaMetadata remainingQuota. */
            remainingQuota?: (number|null);

            /** BotFeatureQuotaMetadata expirationTimestamp. */
            expirationTimestamp?: (number|Long|null);

            /**
             * Creates a new BotFeatureQuotaMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BotFeatureQuotaMetadata instance
             */
            static create(properties: AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape): AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata & AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape;
            static create(properties?: AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties): AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata;

            /**
             * Encodes the specified BotFeatureQuotaMetadata message. Does not implicitly {@link AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.verify|verify} messages.
             * @param message BotFeatureQuotaMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BotFeatureQuotaMetadata message, length delimited. Does not implicitly {@link AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.verify|verify} messages.
             * @param message BotFeatureQuotaMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BotFeatureQuotaMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata & AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape} BotFeatureQuotaMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata & AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape;

            /**
             * Decodes a BotFeatureQuotaMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata & AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape} BotFeatureQuotaMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata & AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape;

            /**
             * Verifies a BotFeatureQuotaMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BotFeatureQuotaMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BotFeatureQuotaMetadata
             */
            static fromObject(object: { [k: string]: any }): AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata;

            /**
             * Creates a plain object from a BotFeatureQuotaMetadata message. Also converts values to other types if specified.
             * @param message BotFeatureQuotaMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BotFeatureQuotaMetadata to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BotFeatureQuotaMetadata
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BotFeatureQuotaMetadata {

            /** Properties of a BotFeatureQuotaMetadata. */
            interface $Properties {

                /** BotFeatureQuotaMetadata featureType */
                featureType?: (AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType|null);

                /** BotFeatureQuotaMetadata remainingQuota */
                remainingQuota?: (number|null);

                /** BotFeatureQuotaMetadata expirationTimestamp */
                expirationTimestamp?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BotFeatureQuotaMetadata. */
            type $Shape = AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties;

            /** BotFeatureType enum. */
            enum BotFeatureType {

                /** UNKNOWN_FEATURE value */
                UNKNOWN_FEATURE = 0,

                /** REASONING_FEATURE value */
                REASONING_FEATURE = 1
            }
        }
    }

    /**
     * Properties of a BotModeSelectionMetadata.
     * @deprecated Use AICommon.BotModeSelectionMetadata.$Properties instead.
     */
    interface IBotModeSelectionMetadata extends AICommon.BotModeSelectionMetadata.$Properties {
    }

    /** Represents a BotModeSelectionMetadata. */
    class BotModeSelectionMetadata {

        /**
         * Constructs a new BotModeSelectionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotModeSelectionMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotModeSelectionMetadata mode. */
        mode: AICommon.BotModeSelectionMetadata.BotUserSelectionMode[];

        /** BotModeSelectionMetadata overrideMode. */
        overrideMode: number[];

        /**
         * Creates a new BotModeSelectionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotModeSelectionMetadata instance
         */
        static create(properties: AICommon.BotModeSelectionMetadata.$Shape): AICommon.BotModeSelectionMetadata & AICommon.BotModeSelectionMetadata.$Shape;
        static create(properties?: AICommon.BotModeSelectionMetadata.$Properties): AICommon.BotModeSelectionMetadata;

        /**
         * Encodes the specified BotModeSelectionMetadata message. Does not implicitly {@link AICommon.BotModeSelectionMetadata.verify|verify} messages.
         * @param message BotModeSelectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotModeSelectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotModeSelectionMetadata message, length delimited. Does not implicitly {@link AICommon.BotModeSelectionMetadata.verify|verify} messages.
         * @param message BotModeSelectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotModeSelectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotModeSelectionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotModeSelectionMetadata & AICommon.BotModeSelectionMetadata.$Shape} BotModeSelectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotModeSelectionMetadata & AICommon.BotModeSelectionMetadata.$Shape;

        /**
         * Decodes a BotModeSelectionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotModeSelectionMetadata & AICommon.BotModeSelectionMetadata.$Shape} BotModeSelectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotModeSelectionMetadata & AICommon.BotModeSelectionMetadata.$Shape;

        /**
         * Verifies a BotModeSelectionMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotModeSelectionMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotModeSelectionMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotModeSelectionMetadata;

        /**
         * Creates a plain object from a BotModeSelectionMetadata message. Also converts values to other types if specified.
         * @param message BotModeSelectionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotModeSelectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotModeSelectionMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotModeSelectionMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotModeSelectionMetadata {

        /** Properties of a BotModeSelectionMetadata. */
        interface $Properties {

            /** BotModeSelectionMetadata mode */
            mode?: (AICommon.BotModeSelectionMetadata.BotUserSelectionMode[]|null);

            /** BotModeSelectionMetadata overrideMode */
            overrideMode?: (number[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotModeSelectionMetadata. */
        type $Shape = AICommon.BotModeSelectionMetadata.$Properties;

        /** BotUserSelectionMode enum. */
        enum BotUserSelectionMode {

            /** DEFAULT_MODE value */
            DEFAULT_MODE = 0,

            /** THINK_HARD_MODE value */
            THINK_HARD_MODE = 1
        }
    }

    /**
     * Properties of a BotCapabilityMetadata.
     * @deprecated Use AICommon.BotCapabilityMetadata.$Properties instead.
     */
    interface IBotCapabilityMetadata extends AICommon.BotCapabilityMetadata.$Properties {
    }

    /** Represents a BotCapabilityMetadata. */
    class BotCapabilityMetadata {

        /**
         * Constructs a new BotCapabilityMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotCapabilityMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotCapabilityMetadata capabilities. */
        capabilities: AICommon.BotCapabilityMetadata.BotCapabilityType[];

        /**
         * Creates a new BotCapabilityMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotCapabilityMetadata instance
         */
        static create(properties: AICommon.BotCapabilityMetadata.$Shape): AICommon.BotCapabilityMetadata & AICommon.BotCapabilityMetadata.$Shape;
        static create(properties?: AICommon.BotCapabilityMetadata.$Properties): AICommon.BotCapabilityMetadata;

        /**
         * Encodes the specified BotCapabilityMetadata message. Does not implicitly {@link AICommon.BotCapabilityMetadata.verify|verify} messages.
         * @param message BotCapabilityMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotCapabilityMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotCapabilityMetadata message, length delimited. Does not implicitly {@link AICommon.BotCapabilityMetadata.verify|verify} messages.
         * @param message BotCapabilityMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotCapabilityMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotCapabilityMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotCapabilityMetadata & AICommon.BotCapabilityMetadata.$Shape} BotCapabilityMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotCapabilityMetadata & AICommon.BotCapabilityMetadata.$Shape;

        /**
         * Decodes a BotCapabilityMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotCapabilityMetadata & AICommon.BotCapabilityMetadata.$Shape} BotCapabilityMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotCapabilityMetadata & AICommon.BotCapabilityMetadata.$Shape;

        /**
         * Verifies a BotCapabilityMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotCapabilityMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotCapabilityMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotCapabilityMetadata;

        /**
         * Creates a plain object from a BotCapabilityMetadata message. Also converts values to other types if specified.
         * @param message BotCapabilityMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotCapabilityMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotCapabilityMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotCapabilityMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotCapabilityMetadata {

        /** Properties of a BotCapabilityMetadata. */
        interface $Properties {

            /** BotCapabilityMetadata capabilities */
            capabilities?: (AICommon.BotCapabilityMetadata.BotCapabilityType[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotCapabilityMetadata. */
        type $Shape = AICommon.BotCapabilityMetadata.$Properties;

        /** BotCapabilityType enum. */
        enum BotCapabilityType {

            /** UNKNOWN value */
            UNKNOWN = 0,

            /** PROGRESS_INDICATOR value */
            PROGRESS_INDICATOR = 1,

            /** RICH_RESPONSE_HEADING value */
            RICH_RESPONSE_HEADING = 2,

            /** RICH_RESPONSE_NESTED_LIST value */
            RICH_RESPONSE_NESTED_LIST = 3,

            /** AI_MEMORY value */
            AI_MEMORY = 4,

            /** RICH_RESPONSE_THREAD_SURFING value */
            RICH_RESPONSE_THREAD_SURFING = 5,

            /** RICH_RESPONSE_TABLE value */
            RICH_RESPONSE_TABLE = 6,

            /** RICH_RESPONSE_CODE value */
            RICH_RESPONSE_CODE = 7,

            /** RICH_RESPONSE_STRUCTURED_RESPONSE value */
            RICH_RESPONSE_STRUCTURED_RESPONSE = 8,

            /** RICH_RESPONSE_INLINE_IMAGE value */
            RICH_RESPONSE_INLINE_IMAGE = 9,

            /** WA_IG_1P_PLUGIN_RANKING_CONTROL value */
            WA_IG_1P_PLUGIN_RANKING_CONTROL = 10,

            /** WA_IG_1P_PLUGIN_RANKING_UPDATE_1 value */
            WA_IG_1P_PLUGIN_RANKING_UPDATE_1 = 11,

            /** WA_IG_1P_PLUGIN_RANKING_UPDATE_2 value */
            WA_IG_1P_PLUGIN_RANKING_UPDATE_2 = 12,

            /** WA_IG_1P_PLUGIN_RANKING_UPDATE_3 value */
            WA_IG_1P_PLUGIN_RANKING_UPDATE_3 = 13,

            /** WA_IG_1P_PLUGIN_RANKING_UPDATE_4 value */
            WA_IG_1P_PLUGIN_RANKING_UPDATE_4 = 14,

            /** WA_IG_1P_PLUGIN_RANKING_UPDATE_5 value */
            WA_IG_1P_PLUGIN_RANKING_UPDATE_5 = 15,

            /** WA_IG_1P_PLUGIN_RANKING_UPDATE_6 value */
            WA_IG_1P_PLUGIN_RANKING_UPDATE_6 = 16,

            /** WA_IG_1P_PLUGIN_RANKING_UPDATE_7 value */
            WA_IG_1P_PLUGIN_RANKING_UPDATE_7 = 17,

            /** WA_IG_1P_PLUGIN_RANKING_UPDATE_8 value */
            WA_IG_1P_PLUGIN_RANKING_UPDATE_8 = 18,

            /** WA_IG_1P_PLUGIN_RANKING_UPDATE_9 value */
            WA_IG_1P_PLUGIN_RANKING_UPDATE_9 = 19,

            /** WA_IG_1P_PLUGIN_RANKING_UPDATE_10 value */
            WA_IG_1P_PLUGIN_RANKING_UPDATE_10 = 20,

            /** RICH_RESPONSE_SUB_HEADING value */
            RICH_RESPONSE_SUB_HEADING = 21,

            /** RICH_RESPONSE_GRID_IMAGE value */
            RICH_RESPONSE_GRID_IMAGE = 22,

            /** AI_STUDIO_UGC_MEMORY value */
            AI_STUDIO_UGC_MEMORY = 23,

            /** RICH_RESPONSE_LATEX value */
            RICH_RESPONSE_LATEX = 24,

            /** RICH_RESPONSE_MAPS value */
            RICH_RESPONSE_MAPS = 25,

            /** RICH_RESPONSE_INLINE_REELS value */
            RICH_RESPONSE_INLINE_REELS = 26,

            /** AGENTIC_PLANNING value */
            AGENTIC_PLANNING = 27,

            /** ACCOUNT_LINKING value */
            ACCOUNT_LINKING = 28,

            /** STREAMING_DISAGGREGATION value */
            STREAMING_DISAGGREGATION = 29,

            /** RICH_RESPONSE_GRID_IMAGE_3P value */
            RICH_RESPONSE_GRID_IMAGE_3P = 30,

            /** RICH_RESPONSE_LATEX_INLINE value */
            RICH_RESPONSE_LATEX_INLINE = 31,

            /** QUERY_PLAN value */
            QUERY_PLAN = 32,

            /** PROACTIVE_MESSAGE value */
            PROACTIVE_MESSAGE = 33,

            /** RICH_RESPONSE_UNIFIED_RESPONSE value */
            RICH_RESPONSE_UNIFIED_RESPONSE = 34,

            /** PROMOTION_MESSAGE value */
            PROMOTION_MESSAGE = 35,

            /** SIMPLIFIED_PROFILE_PAGE value */
            SIMPLIFIED_PROFILE_PAGE = 36,

            /** RICH_RESPONSE_SOURCES_IN_MESSAGE value */
            RICH_RESPONSE_SOURCES_IN_MESSAGE = 37,

            /** RICH_RESPONSE_SIDE_BY_SIDE_SURVEY value */
            RICH_RESPONSE_SIDE_BY_SIDE_SURVEY = 38,

            /** RICH_RESPONSE_UNIFIED_TEXT_COMPONENT value */
            RICH_RESPONSE_UNIFIED_TEXT_COMPONENT = 39,

            /** AI_SHARED_MEMORY value */
            AI_SHARED_MEMORY = 40,

            /** RICH_RESPONSE_UNIFIED_SOURCES value */
            RICH_RESPONSE_UNIFIED_SOURCES = 41,

            /** RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS value */
            RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS = 42,

            /** RICH_RESPONSE_UR_INLINE_REELS_ENABLED value */
            RICH_RESPONSE_UR_INLINE_REELS_ENABLED = 43,

            /** RICH_RESPONSE_UR_MEDIA_GRID_ENABLED value */
            RICH_RESPONSE_UR_MEDIA_GRID_ENABLED = 44,

            /** RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER value */
            RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER = 45,

            /** RICH_RESPONSE_IN_APP_SURVEY value */
            RICH_RESPONSE_IN_APP_SURVEY = 46,

            /** AI_RESPONSE_MODEL_BRANDING value */
            AI_RESPONSE_MODEL_BRANDING = 47,

            /** SESSION_TRANSPARENCY_SYSTEM_MESSAGE value */
            SESSION_TRANSPARENCY_SYSTEM_MESSAGE = 48,

            /** RICH_RESPONSE_UR_REASONING value */
            RICH_RESPONSE_UR_REASONING = 49,

            /** RICH_RESPONSE_UR_ZEITGEIST_CITATIONS value */
            RICH_RESPONSE_UR_ZEITGEIST_CITATIONS = 50,

            /** RICH_RESPONSE_UR_ZEITGEIST_CAROUSEL value */
            RICH_RESPONSE_UR_ZEITGEIST_CAROUSEL = 51,

            /** AI_IMAGINE_LOADING_INDICATOR value */
            AI_IMAGINE_LOADING_INDICATOR = 52,

            /** RICH_RESPONSE_UR_IMAGINE value */
            RICH_RESPONSE_UR_IMAGINE = 53,

            /** AI_IMAGINE_UR_TO_NATIVE_LOADING_INDICATOR value */
            AI_IMAGINE_UR_TO_NATIVE_LOADING_INDICATOR = 54,

            /** RICH_RESPONSE_UR_BLOKS_ENABLED value */
            RICH_RESPONSE_UR_BLOKS_ENABLED = 55,

            /** RICH_RESPONSE_INLINE_LINKS_ENABLED value */
            RICH_RESPONSE_INLINE_LINKS_ENABLED = 56,

            /** RICH_RESPONSE_UR_IMAGINE_VIDEO value */
            RICH_RESPONSE_UR_IMAGINE_VIDEO = 57,

            /** JSON_PATCH_STREAMING value */
            JSON_PATCH_STREAMING = 58,

            /** AI_TAB_FORCE_CLIPPY value */
            AI_TAB_FORCE_CLIPPY = 59,

            /** UNIFIED_RESPONSE_EMBEDDED_SCREENS value */
            UNIFIED_RESPONSE_EMBEDDED_SCREENS = 60,

            /** AI_SUBSCRIPTION_ENABLED value */
            AI_SUBSCRIPTION_ENABLED = 61,

            /** UNIFIED_RESPONSE_AI_CONTENT_SEARCH_ENABLED value */
            UNIFIED_RESPONSE_AI_CONTENT_SEARCH_ENABLED = 62,

            /** UNIFIED_RESPONSE_MARKDOWN_LINKS_ENABLED value */
            UNIFIED_RESPONSE_MARKDOWN_LINKS_ENABLED = 63,

            /** AI_RICH_RESPONSE_MAPS_V2_ENABLED value */
            AI_RICH_RESPONSE_MAPS_V2_ENABLED = 64,

            /** AI_SUBSCRIPTION_METERING_ENABLED value */
            AI_SUBSCRIPTION_METERING_ENABLED = 65,

            /** RICH_RESPONSE_SPORTS_WIDGET_ENABLED value */
            RICH_RESPONSE_SPORTS_WIDGET_ENABLED = 66,

            /** AI_RICH_RESPONSE_ARTIFACTS_ENABLED value */
            AI_RICH_RESPONSE_ARTIFACTS_ENABLED = 67,

            /** AI_RICH_RESPONSE_EMAIL_CALENDAR_ENABLED value */
            AI_RICH_RESPONSE_EMAIL_CALENDAR_ENABLED = 68,

            /** AI_RICH_RESPONSE_REMINDERS_ENABLED value */
            AI_RICH_RESPONSE_REMINDERS_ENABLED = 69,

            /** AI_STOP_GENERATION_ENABLED value */
            AI_STOP_GENERATION_ENABLED = 70,

            /** AI_RICH_RESPONSE_3P_LINKING_CARD_ENABLED value */
            AI_RICH_RESPONSE_3P_LINKING_CARD_ENABLED = 71,

            /** HATCH_NOTIFICATION_METADATA_EVENT_ENABLED value */
            HATCH_NOTIFICATION_METADATA_EVENT_ENABLED = 72,

            /** AI_SUGGESTED_REPLIES_ENABLED value */
            AI_SUGGESTED_REPLIES_ENABLED = 73,

            /** RICH_RESPONSE_IN_APP_SURVEY_BLOKS value */
            RICH_RESPONSE_IN_APP_SURVEY_BLOKS = 74,

            /** RICH_RESPONSE_IMAGE_SOURCE_ATTRIBUTION value */
            RICH_RESPONSE_IMAGE_SOURCE_ATTRIBUTION = 75,

            /** HATCH_CONNECTOR_ACTION_CARD_ENABLED value */
            HATCH_CONNECTOR_ACTION_CARD_ENABLED = 76,

            /** HATCH_SECURE_CREDENTIAL_CARD_ENABLED value */
            HATCH_SECURE_CREDENTIAL_CARD_ENABLED = 77,

            /** HATCH_BROWSER_TASK_CARD_ENABLED value */
            HATCH_BROWSER_TASK_CARD_ENABLED = 78,

            /** HATCH_ARTIFACT_CARD_ENABLED value */
            HATCH_ARTIFACT_CARD_ENABLED = 79,

            /** AI_STUDY_CENTER_ENABLED value */
            AI_STUDY_CENTER_ENABLED = 80,

            /** AI_MUSE_JARVIS_SCHEMA_ENABLED value */
            AI_MUSE_JARVIS_SCHEMA_ENABLED = 81,

            /** AI_STUDY_QUIZ_ENABLED value */
            AI_STUDY_QUIZ_ENABLED = 82,

            /** HATCH_CVM_ENABLED value */
            HATCH_CVM_ENABLED = 83,

            /** RICH_RESPONSE_SOCIAL_ENTITY_PREFETCH_SCHEDULER_ENABLED value */
            RICH_RESPONSE_SOCIAL_ENTITY_PREFETCH_SCHEDULER_ENABLED = 84,

            /** AI_MUSE_JARVIS_EXTENDED_CARDS_ENABLED value */
            AI_MUSE_JARVIS_EXTENDED_CARDS_ENABLED = 85,

            /** AI_INTERJECTIONS_ENABLED value */
            AI_INTERJECTIONS_ENABLED = 86,

            /** AI_RICH_RESPONSE_READ_ALOUD_ENABLED value */
            AI_RICH_RESPONSE_READ_ALOUD_ENABLED = 87,

            /** AI_RICH_RESPONSE_ITEM_LISTS_ENABLED value */
            AI_RICH_RESPONSE_ITEM_LISTS_ENABLED = 88,

            /** RICH_RESPONSE_SIDE_BY_SIDE_BUFFER_BOTH value */
            RICH_RESPONSE_SIDE_BY_SIDE_BUFFER_BOTH = 89
        }
    }

    /**
     * Properties of a BotProgressIndicatorMetadata.
     * @deprecated Use AICommon.BotProgressIndicatorMetadata.$Properties instead.
     */
    interface IBotProgressIndicatorMetadata extends AICommon.BotProgressIndicatorMetadata.$Properties {
    }

    /** Represents a BotProgressIndicatorMetadata. */
    class BotProgressIndicatorMetadata {

        /**
         * Constructs a new BotProgressIndicatorMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotProgressIndicatorMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotProgressIndicatorMetadata progressDescription. */
        progressDescription?: (string|null);

        /** BotProgressIndicatorMetadata stepsMetadata. */
        stepsMetadata: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties[];

        /** BotProgressIndicatorMetadata estimatedCompletionTime. */
        estimatedCompletionTime?: (number|Long|null);

        /**
         * Creates a new BotProgressIndicatorMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotProgressIndicatorMetadata instance
         */
        static create(properties: AICommon.BotProgressIndicatorMetadata.$Shape): AICommon.BotProgressIndicatorMetadata & AICommon.BotProgressIndicatorMetadata.$Shape;
        static create(properties?: AICommon.BotProgressIndicatorMetadata.$Properties): AICommon.BotProgressIndicatorMetadata;

        /**
         * Encodes the specified BotProgressIndicatorMetadata message. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.verify|verify} messages.
         * @param message BotProgressIndicatorMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotProgressIndicatorMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotProgressIndicatorMetadata message, length delimited. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.verify|verify} messages.
         * @param message BotProgressIndicatorMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotProgressIndicatorMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotProgressIndicatorMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotProgressIndicatorMetadata & AICommon.BotProgressIndicatorMetadata.$Shape} BotProgressIndicatorMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotProgressIndicatorMetadata & AICommon.BotProgressIndicatorMetadata.$Shape;

        /**
         * Decodes a BotProgressIndicatorMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotProgressIndicatorMetadata & AICommon.BotProgressIndicatorMetadata.$Shape} BotProgressIndicatorMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotProgressIndicatorMetadata & AICommon.BotProgressIndicatorMetadata.$Shape;

        /**
         * Verifies a BotProgressIndicatorMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotProgressIndicatorMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotProgressIndicatorMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotProgressIndicatorMetadata;

        /**
         * Creates a plain object from a BotProgressIndicatorMetadata message. Also converts values to other types if specified.
         * @param message BotProgressIndicatorMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotProgressIndicatorMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotProgressIndicatorMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotProgressIndicatorMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotProgressIndicatorMetadata {

        /** Properties of a BotProgressIndicatorMetadata. */
        interface $Properties {

            /** BotProgressIndicatorMetadata progressDescription */
            progressDescription?: (string|null);

            /** BotProgressIndicatorMetadata stepsMetadata */
            stepsMetadata?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties[]|null);

            /** BotProgressIndicatorMetadata estimatedCompletionTime */
            estimatedCompletionTime?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotProgressIndicatorMetadata. */
        type $Shape = AICommon.BotProgressIndicatorMetadata.$Properties;

        /**
         * Properties of a BotPlanningStepMetadata.
         * @deprecated Use AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties instead.
         */
        interface IBotPlanningStepMetadata extends AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties {
        }

        /** Represents a BotPlanningStepMetadata. */
        class BotPlanningStepMetadata {

            /**
             * Constructs a new BotPlanningStepMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BotPlanningStepMetadata statusTitle. */
            statusTitle?: (string|null);

            /** BotPlanningStepMetadata statusBody. */
            statusBody?: (string|null);

            /** BotPlanningStepMetadata sourcesMetadata. */
            sourcesMetadata: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties[];

            /** BotPlanningStepMetadata status. */
            status?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus|null);

            /** BotPlanningStepMetadata isReasoning. */
            isReasoning?: (boolean|null);

            /** BotPlanningStepMetadata isEnhancedSearch. */
            isEnhancedSearch?: (boolean|null);

            /** BotPlanningStepMetadata sections. */
            sections: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties[];

            /**
             * Creates a new BotPlanningStepMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BotPlanningStepMetadata instance
             */
            static create(properties: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape;
            static create(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata;

            /**
             * Encodes the specified BotPlanningStepMetadata message. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.verify|verify} messages.
             * @param message BotPlanningStepMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BotPlanningStepMetadata message, length delimited. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.verify|verify} messages.
             * @param message BotPlanningStepMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BotPlanningStepMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape} BotPlanningStepMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape;

            /**
             * Decodes a BotPlanningStepMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape} BotPlanningStepMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape;

            /**
             * Verifies a BotPlanningStepMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BotPlanningStepMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BotPlanningStepMetadata
             */
            static fromObject(object: { [k: string]: any }): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata;

            /**
             * Creates a plain object from a BotPlanningStepMetadata message. Also converts values to other types if specified.
             * @param message BotPlanningStepMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BotPlanningStepMetadata to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BotPlanningStepMetadata
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BotPlanningStepMetadata {

            /** Properties of a BotPlanningStepMetadata. */
            interface $Properties {

                /** BotPlanningStepMetadata statusTitle */
                statusTitle?: (string|null);

                /** BotPlanningStepMetadata statusBody */
                statusBody?: (string|null);

                /** BotPlanningStepMetadata sourcesMetadata */
                sourcesMetadata?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties[]|null);

                /** BotPlanningStepMetadata status */
                status?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus|null);

                /** BotPlanningStepMetadata isReasoning */
                isReasoning?: (boolean|null);

                /** BotPlanningStepMetadata isEnhancedSearch */
                isEnhancedSearch?: (boolean|null);

                /** BotPlanningStepMetadata sections */
                sections?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BotPlanningStepMetadata. */
            type $Shape = AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties;

            /**
             * Properties of a BotPlanningSearchSourceMetadata.
             * @deprecated Use AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties instead.
             */
            interface IBotPlanningSearchSourceMetadata extends AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties {
            }

            /** Represents a BotPlanningSearchSourceMetadata. */
            class BotPlanningSearchSourceMetadata {

                /**
                 * Constructs a new BotPlanningSearchSourceMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** BotPlanningSearchSourceMetadata title. */
                title?: (string|null);

                /** BotPlanningSearchSourceMetadata provider. */
                provider?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider|null);

                /** BotPlanningSearchSourceMetadata sourceUrl. */
                sourceUrl?: (string|null);

                /** BotPlanningSearchSourceMetadata favIconUrl. */
                favIconUrl?: (string|null);

                /**
                 * Creates a new BotPlanningSearchSourceMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BotPlanningSearchSourceMetadata instance
                 */
                static create(properties: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape;
                static create(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;

                /**
                 * Encodes the specified BotPlanningSearchSourceMetadata message. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourceMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BotPlanningSearchSourceMetadata message, length delimited. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourceMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BotPlanningSearchSourceMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape} BotPlanningSearchSourceMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape;

                /**
                 * Decodes a BotPlanningSearchSourceMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape} BotPlanningSearchSourceMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape;

                /**
                 * Verifies a BotPlanningSearchSourceMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BotPlanningSearchSourceMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BotPlanningSearchSourceMetadata
                 */
                static fromObject(object: { [k: string]: any }): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;

                /**
                 * Creates a plain object from a BotPlanningSearchSourceMetadata message. Also converts values to other types if specified.
                 * @param message BotPlanningSearchSourceMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BotPlanningSearchSourceMetadata to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for BotPlanningSearchSourceMetadata
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace BotPlanningSearchSourceMetadata {

                /** Properties of a BotPlanningSearchSourceMetadata. */
                interface $Properties {

                    /** BotPlanningSearchSourceMetadata title */
                    title?: (string|null);

                    /** BotPlanningSearchSourceMetadata provider */
                    provider?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider|null);

                    /** BotPlanningSearchSourceMetadata sourceUrl */
                    sourceUrl?: (string|null);

                    /** BotPlanningSearchSourceMetadata favIconUrl */
                    favIconUrl?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a BotPlanningSearchSourceMetadata. */
                type $Shape = AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties;
            }

            /**
             * Properties of a BotPlanningSearchSourcesMetadata.
             * @deprecated Use AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties instead.
             */
            interface IBotPlanningSearchSourcesMetadata extends AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties {
            }

            /** Represents a BotPlanningSearchSourcesMetadata. */
            class BotPlanningSearchSourcesMetadata {

                /**
                 * Constructs a new BotPlanningSearchSourcesMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** BotPlanningSearchSourcesMetadata sourceTitle. */
                sourceTitle?: (string|null);

                /** BotPlanningSearchSourcesMetadata provider. */
                provider?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider|null);

                /** BotPlanningSearchSourcesMetadata sourceUrl. */
                sourceUrl?: (string|null);

                /**
                 * Creates a new BotPlanningSearchSourcesMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BotPlanningSearchSourcesMetadata instance
                 */
                static create(properties: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape;
                static create(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;

                /**
                 * Encodes the specified BotPlanningSearchSourcesMetadata message. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourcesMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BotPlanningSearchSourcesMetadata message, length delimited. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourcesMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BotPlanningSearchSourcesMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape} BotPlanningSearchSourcesMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape;

                /**
                 * Decodes a BotPlanningSearchSourcesMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape} BotPlanningSearchSourcesMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape;

                /**
                 * Verifies a BotPlanningSearchSourcesMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BotPlanningSearchSourcesMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BotPlanningSearchSourcesMetadata
                 */
                static fromObject(object: { [k: string]: any }): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;

                /**
                 * Creates a plain object from a BotPlanningSearchSourcesMetadata message. Also converts values to other types if specified.
                 * @param message BotPlanningSearchSourcesMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BotPlanningSearchSourcesMetadata to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for BotPlanningSearchSourcesMetadata
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace BotPlanningSearchSourcesMetadata {

                /** Properties of a BotPlanningSearchSourcesMetadata. */
                interface $Properties {

                    /** BotPlanningSearchSourcesMetadata sourceTitle */
                    sourceTitle?: (string|null);

                    /** BotPlanningSearchSourcesMetadata provider */
                    provider?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider|null);

                    /** BotPlanningSearchSourcesMetadata sourceUrl */
                    sourceUrl?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a BotPlanningSearchSourcesMetadata. */
                type $Shape = AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties;

                /** BotPlanningSearchSourceProvider enum. */
                enum BotPlanningSearchSourceProvider {

                    /** UNKNOWN value */
                    UNKNOWN = 0,

                    /** OTHER value */
                    OTHER = 1,

                    /** GOOGLE value */
                    GOOGLE = 2,

                    /** BING value */
                    BING = 3
                }
            }

            /**
             * Properties of a BotPlanningStepSectionMetadata.
             * @deprecated Use AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties instead.
             */
            interface IBotPlanningStepSectionMetadata extends AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties {
            }

            /** Represents a BotPlanningStepSectionMetadata. */
            class BotPlanningStepSectionMetadata {

                /**
                 * Constructs a new BotPlanningStepSectionMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** BotPlanningStepSectionMetadata sectionTitle. */
                sectionTitle?: (string|null);

                /** BotPlanningStepSectionMetadata sectionBody. */
                sectionBody?: (string|null);

                /** BotPlanningStepSectionMetadata sourcesMetadata. */
                sourcesMetadata: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties[];

                /**
                 * Creates a new BotPlanningStepSectionMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BotPlanningStepSectionMetadata instance
                 */
                static create(properties: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape;
                static create(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;

                /**
                 * Encodes the specified BotPlanningStepSectionMetadata message. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.verify|verify} messages.
                 * @param message BotPlanningStepSectionMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BotPlanningStepSectionMetadata message, length delimited. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.verify|verify} messages.
                 * @param message BotPlanningStepSectionMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BotPlanningStepSectionMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape} BotPlanningStepSectionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape;

                /**
                 * Decodes a BotPlanningStepSectionMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape} BotPlanningStepSectionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape;

                /**
                 * Verifies a BotPlanningStepSectionMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BotPlanningStepSectionMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BotPlanningStepSectionMetadata
                 */
                static fromObject(object: { [k: string]: any }): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;

                /**
                 * Creates a plain object from a BotPlanningStepSectionMetadata message. Also converts values to other types if specified.
                 * @param message BotPlanningStepSectionMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BotPlanningStepSectionMetadata to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for BotPlanningStepSectionMetadata
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace BotPlanningStepSectionMetadata {

                /** Properties of a BotPlanningStepSectionMetadata. */
                interface $Properties {

                    /** BotPlanningStepSectionMetadata sectionTitle */
                    sectionTitle?: (string|null);

                    /** BotPlanningStepSectionMetadata sectionBody */
                    sectionBody?: (string|null);

                    /** BotPlanningStepSectionMetadata sourcesMetadata */
                    sourcesMetadata?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a BotPlanningStepSectionMetadata. */
                type $Shape = AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties;
            }

            /** BotSearchSourceProvider enum. */
            enum BotSearchSourceProvider {

                /** UNKNOWN_PROVIDER value */
                UNKNOWN_PROVIDER = 0,

                /** OTHER value */
                OTHER = 1,

                /** GOOGLE value */
                GOOGLE = 2,

                /** BING value */
                BING = 3
            }

            /** PlanningStepStatus enum. */
            enum PlanningStepStatus {

                /** UNKNOWN value */
                UNKNOWN = 0,

                /** PLANNED value */
                PLANNED = 1,

                /** EXECUTING value */
                EXECUTING = 2,

                /** FINISHED value */
                FINISHED = 3
            }
        }
    }

    /**
     * Properties of a BotModelMetadata.
     * @deprecated Use AICommon.BotModelMetadata.$Properties instead.
     */
    interface IBotModelMetadata extends AICommon.BotModelMetadata.$Properties {
    }

    /** Represents a BotModelMetadata. */
    class BotModelMetadata {

        /**
         * Constructs a new BotModelMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotModelMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotModelMetadata modelType. */
        modelType?: (AICommon.BotModelMetadata.ModelType|null);

        /** BotModelMetadata premiumModelStatus. */
        premiumModelStatus?: (AICommon.BotModelMetadata.PremiumModelStatus|null);

        /** BotModelMetadata modelNameOverride. */
        modelNameOverride?: (string|null);

        /**
         * Creates a new BotModelMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotModelMetadata instance
         */
        static create(properties: AICommon.BotModelMetadata.$Shape): AICommon.BotModelMetadata & AICommon.BotModelMetadata.$Shape;
        static create(properties?: AICommon.BotModelMetadata.$Properties): AICommon.BotModelMetadata;

        /**
         * Encodes the specified BotModelMetadata message. Does not implicitly {@link AICommon.BotModelMetadata.verify|verify} messages.
         * @param message BotModelMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotModelMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotModelMetadata message, length delimited. Does not implicitly {@link AICommon.BotModelMetadata.verify|verify} messages.
         * @param message BotModelMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotModelMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotModelMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotModelMetadata & AICommon.BotModelMetadata.$Shape} BotModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotModelMetadata & AICommon.BotModelMetadata.$Shape;

        /**
         * Decodes a BotModelMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotModelMetadata & AICommon.BotModelMetadata.$Shape} BotModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotModelMetadata & AICommon.BotModelMetadata.$Shape;

        /**
         * Verifies a BotModelMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotModelMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotModelMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotModelMetadata;

        /**
         * Creates a plain object from a BotModelMetadata message. Also converts values to other types if specified.
         * @param message BotModelMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotModelMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotModelMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotModelMetadata {

        /** Properties of a BotModelMetadata. */
        interface $Properties {

            /** BotModelMetadata modelType */
            modelType?: (AICommon.BotModelMetadata.ModelType|null);

            /** BotModelMetadata premiumModelStatus */
            premiumModelStatus?: (AICommon.BotModelMetadata.PremiumModelStatus|null);

            /** BotModelMetadata modelNameOverride */
            modelNameOverride?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotModelMetadata. */
        type $Shape = AICommon.BotModelMetadata.$Properties;

        /** ModelType enum. */
        enum ModelType {

            /** UNKNOWN_TYPE value */
            UNKNOWN_TYPE = 0,

            /** LLAMA_PROD value */
            LLAMA_PROD = 1,

            /** LLAMA_PROD_PREMIUM value */
            LLAMA_PROD_PREMIUM = 2
        }

        /** PremiumModelStatus enum. */
        enum PremiumModelStatus {

            /** UNKNOWN_STATUS value */
            UNKNOWN_STATUS = 0,

            /** AVAILABLE value */
            AVAILABLE = 1,

            /** QUOTA_EXCEED_LIMIT value */
            QUOTA_EXCEED_LIMIT = 2
        }
    }

    /**
     * Properties of a BotReminderMetadata.
     * @deprecated Use AICommon.BotReminderMetadata.$Properties instead.
     */
    interface IBotReminderMetadata extends AICommon.BotReminderMetadata.$Properties {
    }

    /** Represents a BotReminderMetadata. */
    class BotReminderMetadata {

        /**
         * Constructs a new BotReminderMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotReminderMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotReminderMetadata requestMessageKey. */
        requestMessageKey?: (Protocol.MessageKey.$Properties|null);

        /** BotReminderMetadata action. */
        action?: (AICommon.BotReminderMetadata.ReminderAction|null);

        /** BotReminderMetadata name. */
        name?: (string|null);

        /** BotReminderMetadata nextTriggerTimestamp. */
        nextTriggerTimestamp?: (number|Long|null);

        /** BotReminderMetadata frequency. */
        frequency?: (AICommon.BotReminderMetadata.ReminderFrequency|null);

        /**
         * Creates a new BotReminderMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotReminderMetadata instance
         */
        static create(properties: AICommon.BotReminderMetadata.$Shape): AICommon.BotReminderMetadata & AICommon.BotReminderMetadata.$Shape;
        static create(properties?: AICommon.BotReminderMetadata.$Properties): AICommon.BotReminderMetadata;

        /**
         * Encodes the specified BotReminderMetadata message. Does not implicitly {@link AICommon.BotReminderMetadata.verify|verify} messages.
         * @param message BotReminderMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotReminderMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotReminderMetadata message, length delimited. Does not implicitly {@link AICommon.BotReminderMetadata.verify|verify} messages.
         * @param message BotReminderMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotReminderMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotReminderMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotReminderMetadata & AICommon.BotReminderMetadata.$Shape} BotReminderMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotReminderMetadata & AICommon.BotReminderMetadata.$Shape;

        /**
         * Decodes a BotReminderMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotReminderMetadata & AICommon.BotReminderMetadata.$Shape} BotReminderMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotReminderMetadata & AICommon.BotReminderMetadata.$Shape;

        /**
         * Verifies a BotReminderMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotReminderMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotReminderMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotReminderMetadata;

        /**
         * Creates a plain object from a BotReminderMetadata message. Also converts values to other types if specified.
         * @param message BotReminderMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotReminderMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotReminderMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotReminderMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotReminderMetadata {

        /** Properties of a BotReminderMetadata. */
        interface $Properties {

            /** BotReminderMetadata requestMessageKey */
            requestMessageKey?: (Protocol.MessageKey.$Properties|null);

            /** BotReminderMetadata action */
            action?: (AICommon.BotReminderMetadata.ReminderAction|null);

            /** BotReminderMetadata name */
            name?: (string|null);

            /** BotReminderMetadata nextTriggerTimestamp */
            nextTriggerTimestamp?: (number|Long|null);

            /** BotReminderMetadata frequency */
            frequency?: (AICommon.BotReminderMetadata.ReminderFrequency|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotReminderMetadata. */
        type $Shape = AICommon.BotReminderMetadata.$Properties;

        /** ReminderAction enum. */
        enum ReminderAction {

            /** NOTIFY value */
            NOTIFY = 1,

            /** CREATE value */
            CREATE = 2,

            /** DELETE value */
            DELETE = 3,

            /** UPDATE value */
            UPDATE = 4
        }

        /** ReminderFrequency enum. */
        enum ReminderFrequency {

            /** ONCE value */
            ONCE = 1,

            /** DAILY value */
            DAILY = 2,

            /** WEEKLY value */
            WEEKLY = 3,

            /** BIWEEKLY value */
            BIWEEKLY = 4,

            /** MONTHLY value */
            MONTHLY = 5
        }
    }

    /**
     * Properties of a BotMemuMetadata.
     * @deprecated Use AICommon.BotMemuMetadata.$Properties instead.
     */
    interface IBotMemuMetadata extends AICommon.BotMemuMetadata.$Properties {
    }

    /** Represents a BotMemuMetadata. */
    class BotMemuMetadata {

        /**
         * Constructs a new BotMemuMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotMemuMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMemuMetadata faceImages. */
        faceImages: AICommon.BotMediaMetadata.$Properties[];

        /**
         * Creates a new BotMemuMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMemuMetadata instance
         */
        static create(properties: AICommon.BotMemuMetadata.$Shape): AICommon.BotMemuMetadata & AICommon.BotMemuMetadata.$Shape;
        static create(properties?: AICommon.BotMemuMetadata.$Properties): AICommon.BotMemuMetadata;

        /**
         * Encodes the specified BotMemuMetadata message. Does not implicitly {@link AICommon.BotMemuMetadata.verify|verify} messages.
         * @param message BotMemuMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotMemuMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMemuMetadata message, length delimited. Does not implicitly {@link AICommon.BotMemuMetadata.verify|verify} messages.
         * @param message BotMemuMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotMemuMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMemuMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotMemuMetadata & AICommon.BotMemuMetadata.$Shape} BotMemuMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMemuMetadata & AICommon.BotMemuMetadata.$Shape;

        /**
         * Decodes a BotMemuMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotMemuMetadata & AICommon.BotMemuMetadata.$Shape} BotMemuMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMemuMetadata & AICommon.BotMemuMetadata.$Shape;

        /**
         * Verifies a BotMemuMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMemuMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMemuMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotMemuMetadata;

        /**
         * Creates a plain object from a BotMemuMetadata message. Also converts values to other types if specified.
         * @param message BotMemuMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotMemuMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMemuMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotMemuMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotMemuMetadata {

        /** Properties of a BotMemuMetadata. */
        interface $Properties {

            /** BotMemuMetadata faceImages */
            faceImages?: (AICommon.BotMediaMetadata.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMemuMetadata. */
        type $Shape = AICommon.BotMemuMetadata.$Properties;
    }

    /**
     * Properties of a BotMediaMetadata.
     * @deprecated Use AICommon.BotMediaMetadata.$Properties instead.
     */
    interface IBotMediaMetadata extends AICommon.BotMediaMetadata.$Properties {
    }

    /** Represents a BotMediaMetadata. */
    class BotMediaMetadata {

        /**
         * Constructs a new BotMediaMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotMediaMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMediaMetadata fileSha256. */
        fileSha256?: (string|null);

        /** BotMediaMetadata mediaKey. */
        mediaKey?: (string|null);

        /** BotMediaMetadata fileEncSha256. */
        fileEncSha256?: (string|null);

        /** BotMediaMetadata directPath. */
        directPath?: (string|null);

        /** BotMediaMetadata mediaKeyTimestamp. */
        mediaKeyTimestamp?: (number|Long|null);

        /** BotMediaMetadata mimetype. */
        mimetype?: (string|null);

        /** BotMediaMetadata orientationType. */
        orientationType?: (AICommon.BotMediaMetadata.OrientationType|null);

        /**
         * Creates a new BotMediaMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMediaMetadata instance
         */
        static create(properties: AICommon.BotMediaMetadata.$Shape): AICommon.BotMediaMetadata & AICommon.BotMediaMetadata.$Shape;
        static create(properties?: AICommon.BotMediaMetadata.$Properties): AICommon.BotMediaMetadata;

        /**
         * Encodes the specified BotMediaMetadata message. Does not implicitly {@link AICommon.BotMediaMetadata.verify|verify} messages.
         * @param message BotMediaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotMediaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMediaMetadata message, length delimited. Does not implicitly {@link AICommon.BotMediaMetadata.verify|verify} messages.
         * @param message BotMediaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotMediaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMediaMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotMediaMetadata & AICommon.BotMediaMetadata.$Shape} BotMediaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMediaMetadata & AICommon.BotMediaMetadata.$Shape;

        /**
         * Decodes a BotMediaMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotMediaMetadata & AICommon.BotMediaMetadata.$Shape} BotMediaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMediaMetadata & AICommon.BotMediaMetadata.$Shape;

        /**
         * Verifies a BotMediaMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMediaMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMediaMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotMediaMetadata;

        /**
         * Creates a plain object from a BotMediaMetadata message. Also converts values to other types if specified.
         * @param message BotMediaMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotMediaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMediaMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotMediaMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotMediaMetadata {

        /** Properties of a BotMediaMetadata. */
        interface $Properties {

            /** BotMediaMetadata fileSha256 */
            fileSha256?: (string|null);

            /** BotMediaMetadata mediaKey */
            mediaKey?: (string|null);

            /** BotMediaMetadata fileEncSha256 */
            fileEncSha256?: (string|null);

            /** BotMediaMetadata directPath */
            directPath?: (string|null);

            /** BotMediaMetadata mediaKeyTimestamp */
            mediaKeyTimestamp?: (number|Long|null);

            /** BotMediaMetadata mimetype */
            mimetype?: (string|null);

            /** BotMediaMetadata orientationType */
            orientationType?: (AICommon.BotMediaMetadata.OrientationType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMediaMetadata. */
        type $Shape = AICommon.BotMediaMetadata.$Properties;

        /** OrientationType enum. */
        enum OrientationType {

            /** CENTER value */
            CENTER = 1,

            /** LEFT value */
            LEFT = 2,

            /** RIGHT value */
            RIGHT = 3
        }
    }

    /**
     * Properties of a BotSessionMetadata.
     * @deprecated Use AICommon.BotSessionMetadata.$Properties instead.
     */
    interface IBotSessionMetadata extends AICommon.BotSessionMetadata.$Properties {
    }

    /** Represents a BotSessionMetadata. */
    class BotSessionMetadata {

        /**
         * Constructs a new BotSessionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotSessionMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotSessionMetadata sessionId. */
        sessionId?: (string|null);

        /** BotSessionMetadata sessionSource. */
        sessionSource?: (AICommon.BotSessionSource|null);

        /**
         * Creates a new BotSessionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSessionMetadata instance
         */
        static create(properties: AICommon.BotSessionMetadata.$Shape): AICommon.BotSessionMetadata & AICommon.BotSessionMetadata.$Shape;
        static create(properties?: AICommon.BotSessionMetadata.$Properties): AICommon.BotSessionMetadata;

        /**
         * Encodes the specified BotSessionMetadata message. Does not implicitly {@link AICommon.BotSessionMetadata.verify|verify} messages.
         * @param message BotSessionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotSessionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSessionMetadata message, length delimited. Does not implicitly {@link AICommon.BotSessionMetadata.verify|verify} messages.
         * @param message BotSessionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotSessionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSessionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotSessionMetadata & AICommon.BotSessionMetadata.$Shape} BotSessionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSessionMetadata & AICommon.BotSessionMetadata.$Shape;

        /**
         * Decodes a BotSessionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotSessionMetadata & AICommon.BotSessionMetadata.$Shape} BotSessionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSessionMetadata & AICommon.BotSessionMetadata.$Shape;

        /**
         * Verifies a BotSessionMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSessionMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSessionMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotSessionMetadata;

        /**
         * Creates a plain object from a BotSessionMetadata message. Also converts values to other types if specified.
         * @param message BotSessionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotSessionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSessionMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotSessionMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotSessionMetadata {

        /** Properties of a BotSessionMetadata. */
        interface $Properties {

            /** BotSessionMetadata sessionId */
            sessionId?: (string|null);

            /** BotSessionMetadata sessionSource */
            sessionSource?: (AICommon.BotSessionSource|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotSessionMetadata. */
        type $Shape = AICommon.BotSessionMetadata.$Properties;
    }

    /**
     * Properties of a BotMetricsMetadata.
     * @deprecated Use AICommon.BotMetricsMetadata.$Properties instead.
     */
    interface IBotMetricsMetadata extends AICommon.BotMetricsMetadata.$Properties {
    }

    /** Represents a BotMetricsMetadata. */
    class BotMetricsMetadata {

        /**
         * Constructs a new BotMetricsMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotMetricsMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMetricsMetadata destinationId. */
        destinationId?: (string|null);

        /** BotMetricsMetadata destinationEntryPoint. */
        destinationEntryPoint?: (AICommon.BotMetricsEntryPoint|null);

        /** BotMetricsMetadata threadOrigin. */
        threadOrigin?: (AICommon.BotMetricsThreadEntryPoint|null);

        /**
         * Creates a new BotMetricsMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMetricsMetadata instance
         */
        static create(properties: AICommon.BotMetricsMetadata.$Shape): AICommon.BotMetricsMetadata & AICommon.BotMetricsMetadata.$Shape;
        static create(properties?: AICommon.BotMetricsMetadata.$Properties): AICommon.BotMetricsMetadata;

        /**
         * Encodes the specified BotMetricsMetadata message. Does not implicitly {@link AICommon.BotMetricsMetadata.verify|verify} messages.
         * @param message BotMetricsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotMetricsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMetricsMetadata message, length delimited. Does not implicitly {@link AICommon.BotMetricsMetadata.verify|verify} messages.
         * @param message BotMetricsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotMetricsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMetricsMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotMetricsMetadata & AICommon.BotMetricsMetadata.$Shape} BotMetricsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMetricsMetadata & AICommon.BotMetricsMetadata.$Shape;

        /**
         * Decodes a BotMetricsMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotMetricsMetadata & AICommon.BotMetricsMetadata.$Shape} BotMetricsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMetricsMetadata & AICommon.BotMetricsMetadata.$Shape;

        /**
         * Verifies a BotMetricsMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMetricsMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMetricsMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotMetricsMetadata;

        /**
         * Creates a plain object from a BotMetricsMetadata message. Also converts values to other types if specified.
         * @param message BotMetricsMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotMetricsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMetricsMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotMetricsMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotMetricsMetadata {

        /** Properties of a BotMetricsMetadata. */
        interface $Properties {

            /** BotMetricsMetadata destinationId */
            destinationId?: (string|null);

            /** BotMetricsMetadata destinationEntryPoint */
            destinationEntryPoint?: (AICommon.BotMetricsEntryPoint|null);

            /** BotMetricsMetadata threadOrigin */
            threadOrigin?: (AICommon.BotMetricsThreadEntryPoint|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMetricsMetadata. */
        type $Shape = AICommon.BotMetricsMetadata.$Properties;
    }

    /**
     * Properties of a BotRenderingMetadata.
     * @deprecated Use AICommon.BotRenderingMetadata.$Properties instead.
     */
    interface IBotRenderingMetadata extends AICommon.BotRenderingMetadata.$Properties {
    }

    /** Represents a BotRenderingMetadata. */
    class BotRenderingMetadata {

        /**
         * Constructs a new BotRenderingMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotRenderingMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotRenderingMetadata keywords. */
        keywords: AICommon.BotRenderingMetadata.Keyword.$Properties[];

        /**
         * Creates a new BotRenderingMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotRenderingMetadata instance
         */
        static create(properties: AICommon.BotRenderingMetadata.$Shape): AICommon.BotRenderingMetadata & AICommon.BotRenderingMetadata.$Shape;
        static create(properties?: AICommon.BotRenderingMetadata.$Properties): AICommon.BotRenderingMetadata;

        /**
         * Encodes the specified BotRenderingMetadata message. Does not implicitly {@link AICommon.BotRenderingMetadata.verify|verify} messages.
         * @param message BotRenderingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotRenderingMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotRenderingMetadata message, length delimited. Does not implicitly {@link AICommon.BotRenderingMetadata.verify|verify} messages.
         * @param message BotRenderingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotRenderingMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotRenderingMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotRenderingMetadata & AICommon.BotRenderingMetadata.$Shape} BotRenderingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotRenderingMetadata & AICommon.BotRenderingMetadata.$Shape;

        /**
         * Decodes a BotRenderingMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotRenderingMetadata & AICommon.BotRenderingMetadata.$Shape} BotRenderingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotRenderingMetadata & AICommon.BotRenderingMetadata.$Shape;

        /**
         * Verifies a BotRenderingMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotRenderingMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotRenderingMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotRenderingMetadata;

        /**
         * Creates a plain object from a BotRenderingMetadata message. Also converts values to other types if specified.
         * @param message BotRenderingMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotRenderingMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotRenderingMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotRenderingMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotRenderingMetadata {

        /** Properties of a BotRenderingMetadata. */
        interface $Properties {

            /** BotRenderingMetadata keywords */
            keywords?: (AICommon.BotRenderingMetadata.Keyword.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotRenderingMetadata. */
        type $Shape = AICommon.BotRenderingMetadata.$Properties;

        /**
         * Properties of a Keyword.
         * @deprecated Use AICommon.BotRenderingMetadata.Keyword.$Properties instead.
         */
        interface IKeyword extends AICommon.BotRenderingMetadata.Keyword.$Properties {
        }

        /** Represents a Keyword. */
        class Keyword {

            /**
             * Constructs a new Keyword.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotRenderingMetadata.Keyword.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Keyword value. */
            value?: (string|null);

            /** Keyword associatedPrompts. */
            associatedPrompts: string[];

            /**
             * Creates a new Keyword instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Keyword instance
             */
            static create(properties: AICommon.BotRenderingMetadata.Keyword.$Shape): AICommon.BotRenderingMetadata.Keyword & AICommon.BotRenderingMetadata.Keyword.$Shape;
            static create(properties?: AICommon.BotRenderingMetadata.Keyword.$Properties): AICommon.BotRenderingMetadata.Keyword;

            /**
             * Encodes the specified Keyword message. Does not implicitly {@link AICommon.BotRenderingMetadata.Keyword.verify|verify} messages.
             * @param message Keyword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.BotRenderingMetadata.Keyword.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Keyword message, length delimited. Does not implicitly {@link AICommon.BotRenderingMetadata.Keyword.verify|verify} messages.
             * @param message Keyword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.BotRenderingMetadata.Keyword.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Keyword message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.BotRenderingMetadata.Keyword & AICommon.BotRenderingMetadata.Keyword.$Shape} Keyword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotRenderingMetadata.Keyword & AICommon.BotRenderingMetadata.Keyword.$Shape;

            /**
             * Decodes a Keyword message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.BotRenderingMetadata.Keyword & AICommon.BotRenderingMetadata.Keyword.$Shape} Keyword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotRenderingMetadata.Keyword & AICommon.BotRenderingMetadata.Keyword.$Shape;

            /**
             * Verifies a Keyword message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Keyword message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Keyword
             */
            static fromObject(object: { [k: string]: any }): AICommon.BotRenderingMetadata.Keyword;

            /**
             * Creates a plain object from a Keyword message. Also converts values to other types if specified.
             * @param message Keyword
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.BotRenderingMetadata.Keyword, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Keyword to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Keyword
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Keyword {

            /** Properties of a Keyword. */
            interface $Properties {

                /** Keyword value */
                value?: (string|null);

                /** Keyword associatedPrompts */
                associatedPrompts?: (string[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Keyword. */
            type $Shape = AICommon.BotRenderingMetadata.Keyword.$Properties;
        }
    }

    /**
     * Properties of a BotPromotionMessageMetadata.
     * @deprecated Use AICommon.BotPromotionMessageMetadata.$Properties instead.
     */
    interface IBotPromotionMessageMetadata extends AICommon.BotPromotionMessageMetadata.$Properties {
    }

    /** Represents a BotPromotionMessageMetadata. */
    class BotPromotionMessageMetadata {

        /**
         * Constructs a new BotPromotionMessageMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotPromotionMessageMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotPromotionMessageMetadata promotionType. */
        promotionType?: (AICommon.BotPromotionMessageMetadata.BotPromotionType|null);

        /** BotPromotionMessageMetadata buttonTitle. */
        buttonTitle?: (string|null);

        /**
         * Creates a new BotPromotionMessageMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPromotionMessageMetadata instance
         */
        static create(properties: AICommon.BotPromotionMessageMetadata.$Shape): AICommon.BotPromotionMessageMetadata & AICommon.BotPromotionMessageMetadata.$Shape;
        static create(properties?: AICommon.BotPromotionMessageMetadata.$Properties): AICommon.BotPromotionMessageMetadata;

        /**
         * Encodes the specified BotPromotionMessageMetadata message. Does not implicitly {@link AICommon.BotPromotionMessageMetadata.verify|verify} messages.
         * @param message BotPromotionMessageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotPromotionMessageMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPromotionMessageMetadata message, length delimited. Does not implicitly {@link AICommon.BotPromotionMessageMetadata.verify|verify} messages.
         * @param message BotPromotionMessageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotPromotionMessageMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPromotionMessageMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotPromotionMessageMetadata & AICommon.BotPromotionMessageMetadata.$Shape} BotPromotionMessageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotPromotionMessageMetadata & AICommon.BotPromotionMessageMetadata.$Shape;

        /**
         * Decodes a BotPromotionMessageMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotPromotionMessageMetadata & AICommon.BotPromotionMessageMetadata.$Shape} BotPromotionMessageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotPromotionMessageMetadata & AICommon.BotPromotionMessageMetadata.$Shape;

        /**
         * Verifies a BotPromotionMessageMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotPromotionMessageMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotPromotionMessageMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotPromotionMessageMetadata;

        /**
         * Creates a plain object from a BotPromotionMessageMetadata message. Also converts values to other types if specified.
         * @param message BotPromotionMessageMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotPromotionMessageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotPromotionMessageMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotPromotionMessageMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotPromotionMessageMetadata {

        /** Properties of a BotPromotionMessageMetadata. */
        interface $Properties {

            /** BotPromotionMessageMetadata promotionType */
            promotionType?: (AICommon.BotPromotionMessageMetadata.BotPromotionType|null);

            /** BotPromotionMessageMetadata buttonTitle */
            buttonTitle?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotPromotionMessageMetadata. */
        type $Shape = AICommon.BotPromotionMessageMetadata.$Properties;

        /** BotPromotionType enum. */
        enum BotPromotionType {

            /** UNKNOWN_TYPE value */
            UNKNOWN_TYPE = 0,

            /** C50 value */
            C50 = 1,

            /** SURVEY_PLATFORM value */
            SURVEY_PLATFORM = 2
        }
    }

    /**
     * Properties of a BotSignatureVerificationUseCaseProof.
     * @deprecated Use AICommon.BotSignatureVerificationUseCaseProof.$Properties instead.
     */
    interface IBotSignatureVerificationUseCaseProof extends AICommon.BotSignatureVerificationUseCaseProof.$Properties {
    }

    /** Represents a BotSignatureVerificationUseCaseProof. */
    class BotSignatureVerificationUseCaseProof {

        /**
         * Constructs a new BotSignatureVerificationUseCaseProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotSignatureVerificationUseCaseProof.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotSignatureVerificationUseCaseProof version. */
        version?: (number|null);

        /** BotSignatureVerificationUseCaseProof useCase. */
        useCase?: (AICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null);

        /** BotSignatureVerificationUseCaseProof signature. */
        signature?: (Uint8Array|null);

        /** BotSignatureVerificationUseCaseProof certificateChain. */
        certificateChain: Uint8Array[];

        /** BotSignatureVerificationUseCaseProof certificateChainSki. */
        certificateChainSki: AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Properties[];

        /**
         * Creates a new BotSignatureVerificationUseCaseProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSignatureVerificationUseCaseProof instance
         */
        static create(properties: AICommon.BotSignatureVerificationUseCaseProof.$Shape): AICommon.BotSignatureVerificationUseCaseProof & AICommon.BotSignatureVerificationUseCaseProof.$Shape;
        static create(properties?: AICommon.BotSignatureVerificationUseCaseProof.$Properties): AICommon.BotSignatureVerificationUseCaseProof;

        /**
         * Encodes the specified BotSignatureVerificationUseCaseProof message. Does not implicitly {@link AICommon.BotSignatureVerificationUseCaseProof.verify|verify} messages.
         * @param message BotSignatureVerificationUseCaseProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotSignatureVerificationUseCaseProof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSignatureVerificationUseCaseProof message, length delimited. Does not implicitly {@link AICommon.BotSignatureVerificationUseCaseProof.verify|verify} messages.
         * @param message BotSignatureVerificationUseCaseProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotSignatureVerificationUseCaseProof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSignatureVerificationUseCaseProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotSignatureVerificationUseCaseProof & AICommon.BotSignatureVerificationUseCaseProof.$Shape} BotSignatureVerificationUseCaseProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSignatureVerificationUseCaseProof & AICommon.BotSignatureVerificationUseCaseProof.$Shape;

        /**
         * Decodes a BotSignatureVerificationUseCaseProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotSignatureVerificationUseCaseProof & AICommon.BotSignatureVerificationUseCaseProof.$Shape} BotSignatureVerificationUseCaseProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSignatureVerificationUseCaseProof & AICommon.BotSignatureVerificationUseCaseProof.$Shape;

        /**
         * Verifies a BotSignatureVerificationUseCaseProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSignatureVerificationUseCaseProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSignatureVerificationUseCaseProof
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotSignatureVerificationUseCaseProof;

        /**
         * Creates a plain object from a BotSignatureVerificationUseCaseProof message. Also converts values to other types if specified.
         * @param message BotSignatureVerificationUseCaseProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotSignatureVerificationUseCaseProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSignatureVerificationUseCaseProof to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotSignatureVerificationUseCaseProof
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotSignatureVerificationUseCaseProof {

        /** Properties of a BotSignatureVerificationUseCaseProof. */
        interface $Properties {

            /** BotSignatureVerificationUseCaseProof version */
            version?: (number|null);

            /** BotSignatureVerificationUseCaseProof useCase */
            useCase?: (AICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null);

            /** BotSignatureVerificationUseCaseProof signature */
            signature?: (Uint8Array|null);

            /** BotSignatureVerificationUseCaseProof certificateChain */
            certificateChain?: (Uint8Array[]|null);

            /** BotSignatureVerificationUseCaseProof certificateChainSki */
            certificateChainSki?: (AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotSignatureVerificationUseCaseProof. */
        type $Shape = AICommon.BotSignatureVerificationUseCaseProof.$Properties;

        /** BotSignatureUseCase enum. */
        enum BotSignatureUseCase {

            /** UNSPECIFIED value */
            UNSPECIFIED = 0,

            /** WA_BOT_MSG value */
            WA_BOT_MSG = 1,

            /** WA_TEE_BOT_MSG value */
            WA_TEE_BOT_MSG = 2,

            /** P2P_PILLS value */
            P2P_PILLS = 3,

            /** WA_WAFFLE value */
            WA_WAFFLE = 4,

            /** WA_FEATURE_PKI value */
            WA_FEATURE_PKI = 5
        }

        /**
         * Properties of a CertificateSKI.
         * @deprecated Use AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Properties instead.
         */
        interface ICertificateSKI extends AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Properties {
        }

        /** Represents a CertificateSKI. */
        class CertificateSKI {

            /**
             * Constructs a new CertificateSKI.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CertificateSKI useCase. */
            useCase?: (AICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null);

            /** CertificateSKI ski. */
            ski?: (Uint8Array|null);

            /**
             * Creates a new CertificateSKI instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CertificateSKI instance
             */
            static create(properties: AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Shape): AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI & AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Shape;
            static create(properties?: AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Properties): AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI;

            /**
             * Encodes the specified CertificateSKI message. Does not implicitly {@link AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.verify|verify} messages.
             * @param message CertificateSKI message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CertificateSKI message, length delimited. Does not implicitly {@link AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.verify|verify} messages.
             * @param message CertificateSKI message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CertificateSKI message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI & AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Shape} CertificateSKI
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI & AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Shape;

            /**
             * Decodes a CertificateSKI message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI & AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Shape} CertificateSKI
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI & AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Shape;

            /**
             * Verifies a CertificateSKI message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CertificateSKI message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CertificateSKI
             */
            static fromObject(object: { [k: string]: any }): AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI;

            /**
             * Creates a plain object from a CertificateSKI message. Also converts values to other types if specified.
             * @param message CertificateSKI
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CertificateSKI to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CertificateSKI
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CertificateSKI {

            /** Properties of a CertificateSKI. */
            interface $Properties {

                /** CertificateSKI useCase */
                useCase?: (AICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null);

                /** CertificateSKI ski */
                ski?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CertificateSKI. */
            type $Shape = AICommon.BotSignatureVerificationUseCaseProof.CertificateSKI.$Properties;
        }
    }

    /**
     * Properties of a BotSignatureVerificationMetadata.
     * @deprecated Use AICommon.BotSignatureVerificationMetadata.$Properties instead.
     */
    interface IBotSignatureVerificationMetadata extends AICommon.BotSignatureVerificationMetadata.$Properties {
    }

    /** Represents a BotSignatureVerificationMetadata. */
    class BotSignatureVerificationMetadata {

        /**
         * Constructs a new BotSignatureVerificationMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotSignatureVerificationMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotSignatureVerificationMetadata proofs. */
        proofs: AICommon.BotSignatureVerificationUseCaseProof.$Properties[];

        /**
         * Creates a new BotSignatureVerificationMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSignatureVerificationMetadata instance
         */
        static create(properties: AICommon.BotSignatureVerificationMetadata.$Shape): AICommon.BotSignatureVerificationMetadata & AICommon.BotSignatureVerificationMetadata.$Shape;
        static create(properties?: AICommon.BotSignatureVerificationMetadata.$Properties): AICommon.BotSignatureVerificationMetadata;

        /**
         * Encodes the specified BotSignatureVerificationMetadata message. Does not implicitly {@link AICommon.BotSignatureVerificationMetadata.verify|verify} messages.
         * @param message BotSignatureVerificationMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotSignatureVerificationMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSignatureVerificationMetadata message, length delimited. Does not implicitly {@link AICommon.BotSignatureVerificationMetadata.verify|verify} messages.
         * @param message BotSignatureVerificationMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotSignatureVerificationMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSignatureVerificationMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotSignatureVerificationMetadata & AICommon.BotSignatureVerificationMetadata.$Shape} BotSignatureVerificationMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSignatureVerificationMetadata & AICommon.BotSignatureVerificationMetadata.$Shape;

        /**
         * Decodes a BotSignatureVerificationMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotSignatureVerificationMetadata & AICommon.BotSignatureVerificationMetadata.$Shape} BotSignatureVerificationMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSignatureVerificationMetadata & AICommon.BotSignatureVerificationMetadata.$Shape;

        /**
         * Verifies a BotSignatureVerificationMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSignatureVerificationMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSignatureVerificationMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotSignatureVerificationMetadata;

        /**
         * Creates a plain object from a BotSignatureVerificationMetadata message. Also converts values to other types if specified.
         * @param message BotSignatureVerificationMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotSignatureVerificationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSignatureVerificationMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotSignatureVerificationMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotSignatureVerificationMetadata {

        /** Properties of a BotSignatureVerificationMetadata. */
        interface $Properties {

            /** BotSignatureVerificationMetadata proofs */
            proofs?: (AICommon.BotSignatureVerificationUseCaseProof.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotSignatureVerificationMetadata. */
        type $Shape = AICommon.BotSignatureVerificationMetadata.$Properties;
    }

    /**
     * Properties of a BotMemoryFact.
     * @deprecated Use AICommon.BotMemoryFact.$Properties instead.
     */
    interface IBotMemoryFact extends AICommon.BotMemoryFact.$Properties {
    }

    /** Represents a BotMemoryFact. */
    class BotMemoryFact {

        /**
         * Constructs a new BotMemoryFact.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotMemoryFact.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMemoryFact fact. */
        fact?: (string|null);

        /** BotMemoryFact factId. */
        factId?: (string|null);

        /**
         * Creates a new BotMemoryFact instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMemoryFact instance
         */
        static create(properties: AICommon.BotMemoryFact.$Shape): AICommon.BotMemoryFact & AICommon.BotMemoryFact.$Shape;
        static create(properties?: AICommon.BotMemoryFact.$Properties): AICommon.BotMemoryFact;

        /**
         * Encodes the specified BotMemoryFact message. Does not implicitly {@link AICommon.BotMemoryFact.verify|verify} messages.
         * @param message BotMemoryFact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotMemoryFact.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMemoryFact message, length delimited. Does not implicitly {@link AICommon.BotMemoryFact.verify|verify} messages.
         * @param message BotMemoryFact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotMemoryFact.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMemoryFact message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotMemoryFact & AICommon.BotMemoryFact.$Shape} BotMemoryFact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMemoryFact & AICommon.BotMemoryFact.$Shape;

        /**
         * Decodes a BotMemoryFact message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotMemoryFact & AICommon.BotMemoryFact.$Shape} BotMemoryFact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMemoryFact & AICommon.BotMemoryFact.$Shape;

        /**
         * Verifies a BotMemoryFact message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMemoryFact message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMemoryFact
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotMemoryFact;

        /**
         * Creates a plain object from a BotMemoryFact message. Also converts values to other types if specified.
         * @param message BotMemoryFact
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotMemoryFact, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMemoryFact to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotMemoryFact
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotMemoryFact {

        /** Properties of a BotMemoryFact. */
        interface $Properties {

            /** BotMemoryFact fact */
            fact?: (string|null);

            /** BotMemoryFact factId */
            factId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMemoryFact. */
        type $Shape = AICommon.BotMemoryFact.$Properties;
    }

    /**
     * Properties of a BotMemoryMetadata.
     * @deprecated Use AICommon.BotMemoryMetadata.$Properties instead.
     */
    interface IBotMemoryMetadata extends AICommon.BotMemoryMetadata.$Properties {
    }

    /** Represents a BotMemoryMetadata. */
    class BotMemoryMetadata {

        /**
         * Constructs a new BotMemoryMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotMemoryMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMemoryMetadata addedFacts. */
        addedFacts: AICommon.BotMemoryFact.$Properties[];

        /** BotMemoryMetadata removedFacts. */
        removedFacts: AICommon.BotMemoryFact.$Properties[];

        /** BotMemoryMetadata disclaimer. */
        disclaimer?: (string|null);

        /**
         * Creates a new BotMemoryMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMemoryMetadata instance
         */
        static create(properties: AICommon.BotMemoryMetadata.$Shape): AICommon.BotMemoryMetadata & AICommon.BotMemoryMetadata.$Shape;
        static create(properties?: AICommon.BotMemoryMetadata.$Properties): AICommon.BotMemoryMetadata;

        /**
         * Encodes the specified BotMemoryMetadata message. Does not implicitly {@link AICommon.BotMemoryMetadata.verify|verify} messages.
         * @param message BotMemoryMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotMemoryMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMemoryMetadata message, length delimited. Does not implicitly {@link AICommon.BotMemoryMetadata.verify|verify} messages.
         * @param message BotMemoryMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotMemoryMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMemoryMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotMemoryMetadata & AICommon.BotMemoryMetadata.$Shape} BotMemoryMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMemoryMetadata & AICommon.BotMemoryMetadata.$Shape;

        /**
         * Decodes a BotMemoryMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotMemoryMetadata & AICommon.BotMemoryMetadata.$Shape} BotMemoryMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMemoryMetadata & AICommon.BotMemoryMetadata.$Shape;

        /**
         * Verifies a BotMemoryMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMemoryMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMemoryMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotMemoryMetadata;

        /**
         * Creates a plain object from a BotMemoryMetadata message. Also converts values to other types if specified.
         * @param message BotMemoryMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotMemoryMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMemoryMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotMemoryMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotMemoryMetadata {

        /** Properties of a BotMemoryMetadata. */
        interface $Properties {

            /** BotMemoryMetadata addedFacts */
            addedFacts?: (AICommon.BotMemoryFact.$Properties[]|null);

            /** BotMemoryMetadata removedFacts */
            removedFacts?: (AICommon.BotMemoryFact.$Properties[]|null);

            /** BotMemoryMetadata disclaimer */
            disclaimer?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMemoryMetadata. */
        type $Shape = AICommon.BotMemoryMetadata.$Properties;
    }

    /**
     * Properties of a BotLinkedAccount.
     * @deprecated Use AICommon.BotLinkedAccount.$Properties instead.
     */
    interface IBotLinkedAccount extends AICommon.BotLinkedAccount.$Properties {
    }

    /** Represents a BotLinkedAccount. */
    class BotLinkedAccount {

        /**
         * Constructs a new BotLinkedAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotLinkedAccount.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotLinkedAccount type. */
        type?: (AICommon.BotLinkedAccount.BotLinkedAccountType|null);

        /**
         * Creates a new BotLinkedAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotLinkedAccount instance
         */
        static create(properties: AICommon.BotLinkedAccount.$Shape): AICommon.BotLinkedAccount & AICommon.BotLinkedAccount.$Shape;
        static create(properties?: AICommon.BotLinkedAccount.$Properties): AICommon.BotLinkedAccount;

        /**
         * Encodes the specified BotLinkedAccount message. Does not implicitly {@link AICommon.BotLinkedAccount.verify|verify} messages.
         * @param message BotLinkedAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotLinkedAccount.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotLinkedAccount message, length delimited. Does not implicitly {@link AICommon.BotLinkedAccount.verify|verify} messages.
         * @param message BotLinkedAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotLinkedAccount.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotLinkedAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotLinkedAccount & AICommon.BotLinkedAccount.$Shape} BotLinkedAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotLinkedAccount & AICommon.BotLinkedAccount.$Shape;

        /**
         * Decodes a BotLinkedAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotLinkedAccount & AICommon.BotLinkedAccount.$Shape} BotLinkedAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotLinkedAccount & AICommon.BotLinkedAccount.$Shape;

        /**
         * Verifies a BotLinkedAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotLinkedAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotLinkedAccount
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotLinkedAccount;

        /**
         * Creates a plain object from a BotLinkedAccount message. Also converts values to other types if specified.
         * @param message BotLinkedAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotLinkedAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotLinkedAccount to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotLinkedAccount
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotLinkedAccount {

        /** Properties of a BotLinkedAccount. */
        interface $Properties {

            /** BotLinkedAccount type */
            type?: (AICommon.BotLinkedAccount.BotLinkedAccountType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotLinkedAccount. */
        type $Shape = AICommon.BotLinkedAccount.$Properties;

        /** BotLinkedAccountType enum. */
        enum BotLinkedAccountType {

            /** BOT_LINKED_ACCOUNT_TYPE_1P value */
            BOT_LINKED_ACCOUNT_TYPE_1P = 0
        }
    }

    /**
     * Properties of a BotLinkedAccountsMetadata.
     * @deprecated Use AICommon.BotLinkedAccountsMetadata.$Properties instead.
     */
    interface IBotLinkedAccountsMetadata extends AICommon.BotLinkedAccountsMetadata.$Properties {
    }

    /** Represents a BotLinkedAccountsMetadata. */
    class BotLinkedAccountsMetadata {

        /**
         * Constructs a new BotLinkedAccountsMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotLinkedAccountsMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotLinkedAccountsMetadata accounts. */
        accounts: AICommon.BotLinkedAccount.$Properties[];

        /** BotLinkedAccountsMetadata acAuthTokens. */
        acAuthTokens?: (Uint8Array|null);

        /** BotLinkedAccountsMetadata acErrorCode. */
        acErrorCode?: (number|null);

        /**
         * Creates a new BotLinkedAccountsMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotLinkedAccountsMetadata instance
         */
        static create(properties: AICommon.BotLinkedAccountsMetadata.$Shape): AICommon.BotLinkedAccountsMetadata & AICommon.BotLinkedAccountsMetadata.$Shape;
        static create(properties?: AICommon.BotLinkedAccountsMetadata.$Properties): AICommon.BotLinkedAccountsMetadata;

        /**
         * Encodes the specified BotLinkedAccountsMetadata message. Does not implicitly {@link AICommon.BotLinkedAccountsMetadata.verify|verify} messages.
         * @param message BotLinkedAccountsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotLinkedAccountsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotLinkedAccountsMetadata message, length delimited. Does not implicitly {@link AICommon.BotLinkedAccountsMetadata.verify|verify} messages.
         * @param message BotLinkedAccountsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotLinkedAccountsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotLinkedAccountsMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotLinkedAccountsMetadata & AICommon.BotLinkedAccountsMetadata.$Shape} BotLinkedAccountsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotLinkedAccountsMetadata & AICommon.BotLinkedAccountsMetadata.$Shape;

        /**
         * Decodes a BotLinkedAccountsMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotLinkedAccountsMetadata & AICommon.BotLinkedAccountsMetadata.$Shape} BotLinkedAccountsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotLinkedAccountsMetadata & AICommon.BotLinkedAccountsMetadata.$Shape;

        /**
         * Verifies a BotLinkedAccountsMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotLinkedAccountsMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotLinkedAccountsMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotLinkedAccountsMetadata;

        /**
         * Creates a plain object from a BotLinkedAccountsMetadata message. Also converts values to other types if specified.
         * @param message BotLinkedAccountsMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotLinkedAccountsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotLinkedAccountsMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotLinkedAccountsMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotLinkedAccountsMetadata {

        /** Properties of a BotLinkedAccountsMetadata. */
        interface $Properties {

            /** BotLinkedAccountsMetadata accounts */
            accounts?: (AICommon.BotLinkedAccount.$Properties[]|null);

            /** BotLinkedAccountsMetadata acAuthTokens */
            acAuthTokens?: (Uint8Array|null);

            /** BotLinkedAccountsMetadata acErrorCode */
            acErrorCode?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotLinkedAccountsMetadata. */
        type $Shape = AICommon.BotLinkedAccountsMetadata.$Properties;
    }

    /**
     * Properties of a BotPromptSuggestion.
     * @deprecated Use AICommon.BotPromptSuggestion.$Properties instead.
     */
    interface IBotPromptSuggestion extends AICommon.BotPromptSuggestion.$Properties {
    }

    /** Represents a BotPromptSuggestion. */
    class BotPromptSuggestion {

        /**
         * Constructs a new BotPromptSuggestion.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotPromptSuggestion.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotPromptSuggestion prompt. */
        prompt?: (string|null);

        /** BotPromptSuggestion promptId. */
        promptId?: (string|null);

        /**
         * Creates a new BotPromptSuggestion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPromptSuggestion instance
         */
        static create(properties: AICommon.BotPromptSuggestion.$Shape): AICommon.BotPromptSuggestion & AICommon.BotPromptSuggestion.$Shape;
        static create(properties?: AICommon.BotPromptSuggestion.$Properties): AICommon.BotPromptSuggestion;

        /**
         * Encodes the specified BotPromptSuggestion message. Does not implicitly {@link AICommon.BotPromptSuggestion.verify|verify} messages.
         * @param message BotPromptSuggestion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotPromptSuggestion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPromptSuggestion message, length delimited. Does not implicitly {@link AICommon.BotPromptSuggestion.verify|verify} messages.
         * @param message BotPromptSuggestion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotPromptSuggestion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPromptSuggestion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotPromptSuggestion & AICommon.BotPromptSuggestion.$Shape} BotPromptSuggestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotPromptSuggestion & AICommon.BotPromptSuggestion.$Shape;

        /**
         * Decodes a BotPromptSuggestion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotPromptSuggestion & AICommon.BotPromptSuggestion.$Shape} BotPromptSuggestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotPromptSuggestion & AICommon.BotPromptSuggestion.$Shape;

        /**
         * Verifies a BotPromptSuggestion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotPromptSuggestion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotPromptSuggestion
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotPromptSuggestion;

        /**
         * Creates a plain object from a BotPromptSuggestion message. Also converts values to other types if specified.
         * @param message BotPromptSuggestion
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotPromptSuggestion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotPromptSuggestion to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotPromptSuggestion
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotPromptSuggestion {

        /** Properties of a BotPromptSuggestion. */
        interface $Properties {

            /** BotPromptSuggestion prompt */
            prompt?: (string|null);

            /** BotPromptSuggestion promptId */
            promptId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotPromptSuggestion. */
        type $Shape = AICommon.BotPromptSuggestion.$Properties;
    }

    /**
     * Properties of a BotPromptSuggestions.
     * @deprecated Use AICommon.BotPromptSuggestions.$Properties instead.
     */
    interface IBotPromptSuggestions extends AICommon.BotPromptSuggestions.$Properties {
    }

    /** Represents a BotPromptSuggestions. */
    class BotPromptSuggestions {

        /**
         * Constructs a new BotPromptSuggestions.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotPromptSuggestions.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotPromptSuggestions suggestions. */
        suggestions: AICommon.BotPromptSuggestion.$Properties[];

        /**
         * Creates a new BotPromptSuggestions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPromptSuggestions instance
         */
        static create(properties: AICommon.BotPromptSuggestions.$Shape): AICommon.BotPromptSuggestions & AICommon.BotPromptSuggestions.$Shape;
        static create(properties?: AICommon.BotPromptSuggestions.$Properties): AICommon.BotPromptSuggestions;

        /**
         * Encodes the specified BotPromptSuggestions message. Does not implicitly {@link AICommon.BotPromptSuggestions.verify|verify} messages.
         * @param message BotPromptSuggestions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotPromptSuggestions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPromptSuggestions message, length delimited. Does not implicitly {@link AICommon.BotPromptSuggestions.verify|verify} messages.
         * @param message BotPromptSuggestions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotPromptSuggestions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPromptSuggestions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotPromptSuggestions & AICommon.BotPromptSuggestions.$Shape} BotPromptSuggestions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotPromptSuggestions & AICommon.BotPromptSuggestions.$Shape;

        /**
         * Decodes a BotPromptSuggestions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotPromptSuggestions & AICommon.BotPromptSuggestions.$Shape} BotPromptSuggestions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotPromptSuggestions & AICommon.BotPromptSuggestions.$Shape;

        /**
         * Verifies a BotPromptSuggestions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotPromptSuggestions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotPromptSuggestions
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotPromptSuggestions;

        /**
         * Creates a plain object from a BotPromptSuggestions message. Also converts values to other types if specified.
         * @param message BotPromptSuggestions
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotPromptSuggestions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotPromptSuggestions to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotPromptSuggestions
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotPromptSuggestions {

        /** Properties of a BotPromptSuggestions. */
        interface $Properties {

            /** BotPromptSuggestions suggestions */
            suggestions?: (AICommon.BotPromptSuggestion.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotPromptSuggestions. */
        type $Shape = AICommon.BotPromptSuggestions.$Properties;
    }

    /**
     * Properties of a BotSuggestedPromptMetadata.
     * @deprecated Use AICommon.BotSuggestedPromptMetadata.$Properties instead.
     */
    interface IBotSuggestedPromptMetadata extends AICommon.BotSuggestedPromptMetadata.$Properties {
    }

    /** Represents a BotSuggestedPromptMetadata. */
    class BotSuggestedPromptMetadata {

        /**
         * Constructs a new BotSuggestedPromptMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotSuggestedPromptMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotSuggestedPromptMetadata suggestedPrompts. */
        suggestedPrompts: string[];

        /** BotSuggestedPromptMetadata selectedPromptIndex. */
        selectedPromptIndex?: (number|null);

        /** BotSuggestedPromptMetadata promptSuggestions. */
        promptSuggestions?: (AICommon.BotPromptSuggestions.$Properties|null);

        /** BotSuggestedPromptMetadata selectedPromptId. */
        selectedPromptId?: (string|null);

        /**
         * Creates a new BotSuggestedPromptMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSuggestedPromptMetadata instance
         */
        static create(properties: AICommon.BotSuggestedPromptMetadata.$Shape): AICommon.BotSuggestedPromptMetadata & AICommon.BotSuggestedPromptMetadata.$Shape;
        static create(properties?: AICommon.BotSuggestedPromptMetadata.$Properties): AICommon.BotSuggestedPromptMetadata;

        /**
         * Encodes the specified BotSuggestedPromptMetadata message. Does not implicitly {@link AICommon.BotSuggestedPromptMetadata.verify|verify} messages.
         * @param message BotSuggestedPromptMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotSuggestedPromptMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSuggestedPromptMetadata message, length delimited. Does not implicitly {@link AICommon.BotSuggestedPromptMetadata.verify|verify} messages.
         * @param message BotSuggestedPromptMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotSuggestedPromptMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotSuggestedPromptMetadata & AICommon.BotSuggestedPromptMetadata.$Shape} BotSuggestedPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSuggestedPromptMetadata & AICommon.BotSuggestedPromptMetadata.$Shape;

        /**
         * Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotSuggestedPromptMetadata & AICommon.BotSuggestedPromptMetadata.$Shape} BotSuggestedPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSuggestedPromptMetadata & AICommon.BotSuggestedPromptMetadata.$Shape;

        /**
         * Verifies a BotSuggestedPromptMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSuggestedPromptMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSuggestedPromptMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotSuggestedPromptMetadata;

        /**
         * Creates a plain object from a BotSuggestedPromptMetadata message. Also converts values to other types if specified.
         * @param message BotSuggestedPromptMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotSuggestedPromptMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSuggestedPromptMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotSuggestedPromptMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotSuggestedPromptMetadata {

        /** Properties of a BotSuggestedPromptMetadata. */
        interface $Properties {

            /** BotSuggestedPromptMetadata suggestedPrompts */
            suggestedPrompts?: (string[]|null);

            /** BotSuggestedPromptMetadata selectedPromptIndex */
            selectedPromptIndex?: (number|null);

            /** BotSuggestedPromptMetadata promptSuggestions */
            promptSuggestions?: (AICommon.BotPromptSuggestions.$Properties|null);

            /** BotSuggestedPromptMetadata selectedPromptId */
            selectedPromptId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotSuggestedPromptMetadata. */
        type $Shape = AICommon.BotSuggestedPromptMetadata.$Properties;
    }

    /**
     * Properties of a BotPluginMetadata.
     * @deprecated Use AICommon.BotPluginMetadata.$Properties instead.
     */
    interface IBotPluginMetadata extends AICommon.BotPluginMetadata.$Properties {
    }

    /** Represents a BotPluginMetadata. */
    class BotPluginMetadata {

        /**
         * Constructs a new BotPluginMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.BotPluginMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotPluginMetadata provider. */
        provider?: (AICommon.BotPluginMetadata.SearchProvider|null);

        /** BotPluginMetadata pluginType. */
        pluginType?: (AICommon.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata thumbnailCdnUrl. */
        thumbnailCdnUrl?: (string|null);

        /** BotPluginMetadata profilePhotoCdnUrl. */
        profilePhotoCdnUrl?: (string|null);

        /** BotPluginMetadata searchProviderUrl. */
        searchProviderUrl?: (string|null);

        /** BotPluginMetadata referenceIndex. */
        referenceIndex?: (number|null);

        /** BotPluginMetadata expectedLinksCount. */
        expectedLinksCount?: (number|null);

        /** BotPluginMetadata searchQuery. */
        searchQuery?: (string|null);

        /** BotPluginMetadata parentPluginMessageKey. */
        parentPluginMessageKey?: (Protocol.MessageKey.$Properties|null);

        /** BotPluginMetadata deprecatedField. */
        deprecatedField?: (AICommon.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata parentPluginType. */
        parentPluginType?: (AICommon.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata faviconCdnUrl. */
        faviconCdnUrl?: (string|null);

        /**
         * Creates a new BotPluginMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPluginMetadata instance
         */
        static create(properties: AICommon.BotPluginMetadata.$Shape): AICommon.BotPluginMetadata & AICommon.BotPluginMetadata.$Shape;
        static create(properties?: AICommon.BotPluginMetadata.$Properties): AICommon.BotPluginMetadata;

        /**
         * Encodes the specified BotPluginMetadata message. Does not implicitly {@link AICommon.BotPluginMetadata.verify|verify} messages.
         * @param message BotPluginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: AICommon.BotPluginMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPluginMetadata message, length delimited. Does not implicitly {@link AICommon.BotPluginMetadata.verify|verify} messages.
         * @param message BotPluginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: AICommon.BotPluginMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPluginMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {AICommon.BotPluginMetadata & AICommon.BotPluginMetadata.$Shape} BotPluginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotPluginMetadata & AICommon.BotPluginMetadata.$Shape;

        /**
         * Decodes a BotPluginMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {AICommon.BotPluginMetadata & AICommon.BotPluginMetadata.$Shape} BotPluginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotPluginMetadata & AICommon.BotPluginMetadata.$Shape;

        /**
         * Verifies a BotPluginMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotPluginMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotPluginMetadata
         */
        static fromObject(object: { [k: string]: any }): AICommon.BotPluginMetadata;

        /**
         * Creates a plain object from a BotPluginMetadata message. Also converts values to other types if specified.
         * @param message BotPluginMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: AICommon.BotPluginMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotPluginMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotPluginMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotPluginMetadata {

        /** Properties of a BotPluginMetadata. */
        interface $Properties {

            /** BotPluginMetadata provider */
            provider?: (AICommon.BotPluginMetadata.SearchProvider|null);

            /** BotPluginMetadata pluginType */
            pluginType?: (AICommon.BotPluginMetadata.PluginType|null);

            /** BotPluginMetadata thumbnailCdnUrl */
            thumbnailCdnUrl?: (string|null);

            /** BotPluginMetadata profilePhotoCdnUrl */
            profilePhotoCdnUrl?: (string|null);

            /** BotPluginMetadata searchProviderUrl */
            searchProviderUrl?: (string|null);

            /** BotPluginMetadata referenceIndex */
            referenceIndex?: (number|null);

            /** BotPluginMetadata expectedLinksCount */
            expectedLinksCount?: (number|null);

            /** BotPluginMetadata searchQuery */
            searchQuery?: (string|null);

            /** BotPluginMetadata parentPluginMessageKey */
            parentPluginMessageKey?: (Protocol.MessageKey.$Properties|null);

            /** BotPluginMetadata deprecatedField */
            deprecatedField?: (AICommon.BotPluginMetadata.PluginType|null);

            /** BotPluginMetadata parentPluginType */
            parentPluginType?: (AICommon.BotPluginMetadata.PluginType|null);

            /** BotPluginMetadata faviconCdnUrl */
            faviconCdnUrl?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotPluginMetadata. */
        type $Shape = AICommon.BotPluginMetadata.$Properties;

        /** PluginType enum. */
        enum PluginType {

            /** UNKNOWN_PLUGIN value */
            UNKNOWN_PLUGIN = 0,

            /** REELS value */
            REELS = 1,

            /** SEARCH value */
            SEARCH = 2
        }

        /** SearchProvider enum. */
        enum SearchProvider {

            /** UNKNOWN value */
            UNKNOWN = 0,

            /** BING value */
            BING = 1,

            /** GOOGLE value */
            GOOGLE = 2,

            /** SUPPORT value */
            SUPPORT = 3
        }
    }

    /** SessionTransparencyType enum. */
    enum SessionTransparencyType {

        /** UNKNOWN_TYPE value */
        UNKNOWN_TYPE = 0,

        /** NY_AI_SAFETY_DISCLAIMER value */
        NY_AI_SAFETY_DISCLAIMER = 1
    }

    /** AISubscriptionRequestType enum. */
    enum AISubscriptionRequestType {

        /** UNSPECIFIED value */
        UNSPECIFIED = 0,

        /** THINK_HARD value */
        THINK_HARD = 1,

        /** IMAGE_GEN value */
        IMAGE_GEN = 2,

        /** VIDEO_GEN value */
        VIDEO_GEN = 3
    }

    /** BotSessionSource enum. */
    enum BotSessionSource {

        /** NONE value */
        NONE = 0,

        /** NULL_STATE value */
        NULL_STATE = 1,

        /** TYPEAHEAD value */
        TYPEAHEAD = 2,

        /** USER_INPUT value */
        USER_INPUT = 3,

        /** EMU_FLASH value */
        EMU_FLASH = 4,

        /** EMU_FLASH_FOLLOWUP value */
        EMU_FLASH_FOLLOWUP = 5,

        /** VOICE value */
        VOICE = 6,

        /** AI_HOME_SESSION value */
        AI_HOME_SESSION = 7
    }

    /** BotMetricsThreadEntryPoint enum. */
    enum BotMetricsThreadEntryPoint {

        /** AI_TAB_THREAD value */
        AI_TAB_THREAD = 1,

        /** AI_HOME_THREAD value */
        AI_HOME_THREAD = 2,

        /** AI_DEEPLINK_IMMERSIVE_THREAD value */
        AI_DEEPLINK_IMMERSIVE_THREAD = 3,

        /** AI_DEEPLINK_THREAD value */
        AI_DEEPLINK_THREAD = 4,

        /** ASK_META_AI_CONTEXT_MENU_THREAD value */
        ASK_META_AI_CONTEXT_MENU_THREAD = 5
    }

    /** BotMetricsEntryPoint enum. */
    enum BotMetricsEntryPoint {

        /** UNDEFINED_ENTRY_POINT value */
        UNDEFINED_ENTRY_POINT = 0,

        /** FAVICON value */
        FAVICON = 1,

        /** CHATLIST value */
        CHATLIST = 2,

        /** AISEARCH_NULL_STATE_PAPER_PLANE value */
        AISEARCH_NULL_STATE_PAPER_PLANE = 3,

        /** AISEARCH_NULL_STATE_SUGGESTION value */
        AISEARCH_NULL_STATE_SUGGESTION = 4,

        /** AISEARCH_TYPE_AHEAD_SUGGESTION value */
        AISEARCH_TYPE_AHEAD_SUGGESTION = 5,

        /** AISEARCH_TYPE_AHEAD_PAPER_PLANE value */
        AISEARCH_TYPE_AHEAD_PAPER_PLANE = 6,

        /** AISEARCH_TYPE_AHEAD_RESULT_CHATLIST value */
        AISEARCH_TYPE_AHEAD_RESULT_CHATLIST = 7,

        /** AISEARCH_TYPE_AHEAD_RESULT_MESSAGES value */
        AISEARCH_TYPE_AHEAD_RESULT_MESSAGES = 8,

        /** AIVOICE_SEARCH_BAR value */
        AIVOICE_SEARCH_BAR = 9,

        /** AIVOICE_FAVICON value */
        AIVOICE_FAVICON = 10,

        /** AISTUDIO value */
        AISTUDIO = 11,

        /** DEEPLINK value */
        DEEPLINK = 12,

        /** NOTIFICATION value */
        NOTIFICATION = 13,

        /** PROFILE_MESSAGE_BUTTON value */
        PROFILE_MESSAGE_BUTTON = 14,

        /** FORWARD value */
        FORWARD = 15,

        /** APP_SHORTCUT value */
        APP_SHORTCUT = 16,

        /** FF_FAMILY value */
        FF_FAMILY = 17,

        /** AI_TAB value */
        AI_TAB = 18,

        /** AI_HOME value */
        AI_HOME = 19,

        /** AI_DEEPLINK_IMMERSIVE value */
        AI_DEEPLINK_IMMERSIVE = 20,

        /** AI_DEEPLINK value */
        AI_DEEPLINK = 21,

        /** META_AI_CHAT_SHORTCUT_AI_STUDIO value */
        META_AI_CHAT_SHORTCUT_AI_STUDIO = 22,

        /** UGC_CHAT_SHORTCUT_AI_STUDIO value */
        UGC_CHAT_SHORTCUT_AI_STUDIO = 23,

        /** NEW_CHAT_AI_STUDIO value */
        NEW_CHAT_AI_STUDIO = 24,

        /** AIVOICE_FAVICON_CALL_HISTORY value */
        AIVOICE_FAVICON_CALL_HISTORY = 25,

        /** ASK_META_AI_CONTEXT_MENU value */
        ASK_META_AI_CONTEXT_MENU = 26,

        /** ASK_META_AI_CONTEXT_MENU_1ON1 value */
        ASK_META_AI_CONTEXT_MENU_1ON1 = 27,

        /** ASK_META_AI_CONTEXT_MENU_GROUP value */
        ASK_META_AI_CONTEXT_MENU_GROUP = 28,

        /** INVOKE_META_AI_1ON1 value */
        INVOKE_META_AI_1ON1 = 29,

        /** INVOKE_META_AI_GROUP value */
        INVOKE_META_AI_GROUP = 30,

        /** META_AI_FORWARD value */
        META_AI_FORWARD = 31,

        /** NEW_CHAT_AI_CONTACT value */
        NEW_CHAT_AI_CONTACT = 32,

        /** MESSAGE_QUICK_ACTION_1_ON_1_CHAT value */
        MESSAGE_QUICK_ACTION_1_ON_1_CHAT = 33,

        /** MESSAGE_QUICK_ACTION_GROUP_CHAT value */
        MESSAGE_QUICK_ACTION_GROUP_CHAT = 34,

        /** ATTACHMENT_TRAY_1_ON_1_CHAT value */
        ATTACHMENT_TRAY_1_ON_1_CHAT = 35,

        /** ATTACHMENT_TRAY_GROUP_CHAT value */
        ATTACHMENT_TRAY_GROUP_CHAT = 36,

        /** ASK_META_AI_MEDIA_VIEWER_1ON1 value */
        ASK_META_AI_MEDIA_VIEWER_1ON1 = 37,

        /** ASK_META_AI_MEDIA_VIEWER_GROUP value */
        ASK_META_AI_MEDIA_VIEWER_GROUP = 38,

        /** MEDIA_PICKER_1_ON_1_CHAT value */
        MEDIA_PICKER_1_ON_1_CHAT = 39,

        /** MEDIA_PICKER_GROUP_CHAT value */
        MEDIA_PICKER_GROUP_CHAT = 40,

        /** ASK_META_AI_NO_SEARCH_RESULTS value */
        ASK_META_AI_NO_SEARCH_RESULTS = 41,

        /** META_AI_SETTINGS value */
        META_AI_SETTINGS = 45,

        /** WEB_INTRO_PANEL value */
        WEB_INTRO_PANEL = 46,

        /** WEB_NAVIGATION_BAR value */
        WEB_NAVIGATION_BAR = 47,

        /** GROUP_MEMBER value */
        GROUP_MEMBER = 54,

        /** CHATLIST_SEARCH value */
        CHATLIST_SEARCH = 55,

        /** NEW_CHAT_LIST value */
        NEW_CHAT_LIST = 56,

        /** CONTACTS_TAB value */
        CONTACTS_TAB = 57,

        /** NEW_3P_AGENT_CREATION value */
        NEW_3P_AGENT_CREATION = 58,

        /** SHARE value */
        SHARE = 59,

        /** BIRTHDAY_BANNER value */
        BIRTHDAY_BANNER = 60
    }
}

/** Namespace Protocol. */
export namespace Protocol {

    /**
     * Properties of a ACP2Setting.
     * @deprecated Use Protocol.ACP2Setting.$Properties instead.
     */
    interface IACP2Setting extends Protocol.ACP2Setting.$Properties {
    }

    /** Represents a ACP2Setting. */
    class ACP2Setting {

        /**
         * Constructs a new ACP2Setting.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ACP2Setting.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ACP2Setting enabled. */
        enabled?: (boolean|null);

        /** ACP2Setting trigger. */
        trigger?: (Protocol.LimitSharing.TriggerType|null);

        /** ACP2Setting settingTimestamp. */
        settingTimestamp?: (number|Long|null);

        /** ACP2Setting initiatedByMe. */
        initiatedByMe?: (boolean|null);

        /**
         * Creates a new ACP2Setting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ACP2Setting instance
         */
        static create(properties: Protocol.ACP2Setting.$Shape): Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape;
        static create(properties?: Protocol.ACP2Setting.$Properties): Protocol.ACP2Setting;

        /**
         * Encodes the specified ACP2Setting message. Does not implicitly {@link Protocol.ACP2Setting.verify|verify} messages.
         * @param message ACP2Setting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Protocol.ACP2Setting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ACP2Setting message, length delimited. Does not implicitly {@link Protocol.ACP2Setting.verify|verify} messages.
         * @param message ACP2Setting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Protocol.ACP2Setting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ACP2Setting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape} ACP2Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape;

        /**
         * Decodes a ACP2Setting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape} ACP2Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape;

        /**
         * Verifies a ACP2Setting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ACP2Setting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ACP2Setting
         */
        static fromObject(object: { [k: string]: any }): Protocol.ACP2Setting;

        /**
         * Creates a plain object from a ACP2Setting message. Also converts values to other types if specified.
         * @param message ACP2Setting
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Protocol.ACP2Setting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ACP2Setting to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ACP2Setting
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ACP2Setting {

        /** Properties of a ACP2Setting. */
        interface $Properties {

            /** ACP2Setting enabled */
            enabled?: (boolean|null);

            /** ACP2Setting trigger */
            trigger?: (Protocol.LimitSharing.TriggerType|null);

            /** ACP2Setting settingTimestamp */
            settingTimestamp?: (number|Long|null);

            /** ACP2Setting initiatedByMe */
            initiatedByMe?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ACP2Setting. */
        type $Shape = Protocol.ACP2Setting.$Properties;
    }

    /**
     * Properties of a LimitSharing.
     * @deprecated Use Protocol.LimitSharing.$Properties instead.
     */
    interface ILimitSharing extends Protocol.LimitSharing.$Properties {
    }

    /** Represents a LimitSharing. */
    class LimitSharing {

        /**
         * Constructs a new LimitSharing.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.LimitSharing.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LimitSharing sharingLimited. */
        sharingLimited?: (boolean|null);

        /** LimitSharing trigger. */
        trigger?: (Protocol.LimitSharing.TriggerType|null);

        /** LimitSharing limitSharingSettingTimestamp. */
        limitSharingSettingTimestamp?: (number|Long|null);

        /** LimitSharing initiatedByMe. */
        initiatedByMe?: (boolean|null);

        /**
         * Creates a new LimitSharing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LimitSharing instance
         */
        static create(properties: Protocol.LimitSharing.$Shape): Protocol.LimitSharing & Protocol.LimitSharing.$Shape;
        static create(properties?: Protocol.LimitSharing.$Properties): Protocol.LimitSharing;

        /**
         * Encodes the specified LimitSharing message. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
         * @param message LimitSharing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Protocol.LimitSharing.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LimitSharing message, length delimited. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
         * @param message LimitSharing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Protocol.LimitSharing.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LimitSharing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Protocol.LimitSharing & Protocol.LimitSharing.$Shape} LimitSharing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.LimitSharing & Protocol.LimitSharing.$Shape;

        /**
         * Decodes a LimitSharing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Protocol.LimitSharing & Protocol.LimitSharing.$Shape} LimitSharing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.LimitSharing & Protocol.LimitSharing.$Shape;

        /**
         * Verifies a LimitSharing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LimitSharing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LimitSharing
         */
        static fromObject(object: { [k: string]: any }): Protocol.LimitSharing;

        /**
         * Creates a plain object from a LimitSharing message. Also converts values to other types if specified.
         * @param message LimitSharing
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Protocol.LimitSharing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LimitSharing to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LimitSharing
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LimitSharing {

        /** Properties of a LimitSharing. */
        interface $Properties {

            /** LimitSharing sharingLimited */
            sharingLimited?: (boolean|null);

            /** LimitSharing trigger */
            trigger?: (Protocol.LimitSharing.TriggerType|null);

            /** LimitSharing limitSharingSettingTimestamp */
            limitSharingSettingTimestamp?: (number|Long|null);

            /** LimitSharing initiatedByMe */
            initiatedByMe?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LimitSharing. */
        type $Shape = Protocol.LimitSharing.$Properties;

        /** TriggerType enum. */
        enum TriggerType {

            /** UNKNOWN value */
            UNKNOWN = 0,

            /** CHAT_SETTING value */
            CHAT_SETTING = 1,

            /** BIZ_SUPPORTS_FB_HOSTING value */
            BIZ_SUPPORTS_FB_HOSTING = 2,

            /** UNKNOWN_GROUP value */
            UNKNOWN_GROUP = 3
        }
    }

    /**
     * Properties of a MessageKey.
     * @deprecated Use Protocol.MessageKey.$Properties instead.
     */
    interface IMessageKey extends Protocol.MessageKey.$Properties {
    }

    /** Represents a MessageKey. */
    class MessageKey {

        /**
         * Constructs a new MessageKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.MessageKey.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MessageKey remoteJid. */
        remoteJid?: (string|null);

        /** MessageKey fromMe. */
        fromMe?: (boolean|null);

        /** MessageKey id. */
        id?: (string|null);

        /** MessageKey participant. */
        participant?: (string|null);

        /**
         * Creates a new MessageKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageKey instance
         */
        static create(properties: Protocol.MessageKey.$Shape): Protocol.MessageKey & Protocol.MessageKey.$Shape;
        static create(properties?: Protocol.MessageKey.$Properties): Protocol.MessageKey;

        /**
         * Encodes the specified MessageKey message. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @param message MessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Protocol.MessageKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @param message MessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Protocol.MessageKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Protocol.MessageKey & Protocol.MessageKey.$Shape} MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.MessageKey & Protocol.MessageKey.$Shape;

        /**
         * Decodes a MessageKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Protocol.MessageKey & Protocol.MessageKey.$Shape} MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.MessageKey & Protocol.MessageKey.$Shape;

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
        static fromObject(object: { [k: string]: any }): Protocol.MessageKey;

        /**
         * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
         * @param message MessageKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Protocol.MessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** MessageKey remoteJid */
            remoteJid?: (string|null);

            /** MessageKey fromMe */
            fromMe?: (boolean|null);

            /** MessageKey id */
            id?: (string|null);

            /** MessageKey participant */
            participant?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MessageKey. */
        type $Shape = Protocol.MessageKey.$Properties;
    }
}

import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace BotMetadata. */
export namespace BotMetadata {

    /**
     * Properties of a BotMetadata.
     * @deprecated Use BotMetadata.BotMetadata.$Properties instead.
     */
    interface IBotMetadata extends BotMetadata.BotMetadata.$Properties {
    }

    /** Represents a BotMetadata. */
    class BotMetadata {

        /**
         * Constructs a new BotMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMetadata avatarMetadata. */
        avatarMetadata?: (BotMetadata.BotAvatarMetadata.$Properties|null);

        /** BotMetadata personaId. */
        personaId?: (string|null);

        /** BotMetadata pluginMetadata. */
        pluginMetadata?: (BotMetadata.BotPluginMetadata.$Properties|null);

        /** BotMetadata suggestedPromptMetadata. */
        suggestedPromptMetadata?: (BotMetadata.BotSuggestedPromptMetadata.$Properties|null);

        /** BotMetadata invokerJid. */
        invokerJid?: (string|null);

        /** BotMetadata sessionMetadata. */
        sessionMetadata?: (BotMetadata.BotSessionMetadata.$Properties|null);

        /** BotMetadata memuMetadata. */
        memuMetadata?: (BotMetadata.BotMemuMetadata.$Properties|null);

        /** BotMetadata timezone. */
        timezone?: (string|null);

        /** BotMetadata reminderMetadata. */
        reminderMetadata?: (BotMetadata.BotReminderMetadata.$Properties|null);

        /** BotMetadata modelMetadata. */
        modelMetadata?: (BotMetadata.BotModelMetadata.$Properties|null);

        /** BotMetadata messageDisclaimerText. */
        messageDisclaimerText?: (string|null);

        /** BotMetadata progressIndicatorMetadata. */
        progressIndicatorMetadata?: (BotMetadata.BotProgressIndicatorMetadata.$Properties|null);

        /** BotMetadata capabilityMetadata. */
        capabilityMetadata?: (BotMetadata.BotCapabilityMetadata.$Properties|null);

        /** BotMetadata imagineMetadata. */
        imagineMetadata?: (BotMetadata.BotImagineMetadata.$Properties|null);

        /** BotMetadata memoryMetadata. */
        memoryMetadata?: (BotMetadata.BotMemoryMetadata.$Properties|null);

        /** BotMetadata renderingMetadata. */
        renderingMetadata?: (BotMetadata.BotRenderingMetadata.$Properties|null);

        /** BotMetadata botMetricsMetadata. */
        botMetricsMetadata?: (BotMetadata.BotMetricsMetadata.$Properties|null);

        /** BotMetadata botLinkedAccountsMetadata. */
        botLinkedAccountsMetadata?: (BotMetadata.BotLinkedAccountsMetadata.$Properties|null);

        /** BotMetadata richResponseSourcesMetadata. */
        richResponseSourcesMetadata?: (BotMetadata.BotSourcesMetadata.$Properties|null);

        /** BotMetadata aiConversationContext. */
        aiConversationContext?: (Uint8Array|null);

        /** BotMetadata botPromotionMessageMetadata. */
        botPromotionMessageMetadata?: (BotMetadata.BotPromotionMessageMetadata.$Properties|null);

        /** BotMetadata botModeSelectionMetadata. */
        botModeSelectionMetadata?: (BotMetadata.BotModeSelectionMetadata.$Properties|null);

        /** BotMetadata botQuotaMetadata. */
        botQuotaMetadata?: (BotMetadata.BotQuotaMetadata.$Properties|null);

        /** BotMetadata botAgeCollectionMetadata. */
        botAgeCollectionMetadata?: (BotMetadata.BotAgeCollectionMetadata.$Properties|null);

        /** BotMetadata conversationStarterPromptId. */
        conversationStarterPromptId?: (string|null);

        /** BotMetadata botResponseId. */
        botResponseId?: (string|null);

        /** BotMetadata verificationMetadata. */
        verificationMetadata?: (BotMetadata.BotSignatureVerificationMetadata.$Properties|null);

        /** BotMetadata unifiedResponseMutation. */
        unifiedResponseMutation?: (BotMetadata.BotUnifiedResponseMutation.$Properties|null);

        /** BotMetadata botMessageOriginMetadata. */
        botMessageOriginMetadata?: (BotMetadata.BotMessageOriginMetadata.$Properties|null);

        /** BotMetadata inThreadSurveyMetadata. */
        inThreadSurveyMetadata?: (BotMetadata.InThreadSurveyMetadata.$Properties|null);

        /** BotMetadata botThreadInfo. */
        botThreadInfo?: (BotMetadata.AIThreadInfo.$Properties|null);

        /**
         * Creates a new BotMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMetadata instance
         */
        static create(properties: BotMetadata.BotMetadata.$Shape): BotMetadata.BotMetadata & BotMetadata.BotMetadata.$Shape;
        static create(properties?: BotMetadata.BotMetadata.$Properties): BotMetadata.BotMetadata;

        /**
         * Encodes the specified BotMetadata message. Does not implicitly {@link BotMetadata.BotMetadata.verify|verify} messages.
         * @param message BotMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMetadata.verify|verify} messages.
         * @param message BotMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotMetadata & BotMetadata.BotMetadata.$Shape} BotMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotMetadata & BotMetadata.BotMetadata.$Shape;

        /**
         * Decodes a BotMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMetadata & BotMetadata.BotMetadata.$Shape} BotMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotMetadata & BotMetadata.BotMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotMetadata;

        /**
         * Creates a plain object from a BotMetadata message. Also converts values to other types if specified.
         * @param message BotMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** BotMetadata avatarMetadata */
            avatarMetadata?: (BotMetadata.BotAvatarMetadata.$Properties|null);

            /** BotMetadata personaId */
            personaId?: (string|null);

            /** BotMetadata pluginMetadata */
            pluginMetadata?: (BotMetadata.BotPluginMetadata.$Properties|null);

            /** BotMetadata suggestedPromptMetadata */
            suggestedPromptMetadata?: (BotMetadata.BotSuggestedPromptMetadata.$Properties|null);

            /** BotMetadata invokerJid */
            invokerJid?: (string|null);

            /** BotMetadata sessionMetadata */
            sessionMetadata?: (BotMetadata.BotSessionMetadata.$Properties|null);

            /** BotMetadata memuMetadata */
            memuMetadata?: (BotMetadata.BotMemuMetadata.$Properties|null);

            /** BotMetadata timezone */
            timezone?: (string|null);

            /** BotMetadata reminderMetadata */
            reminderMetadata?: (BotMetadata.BotReminderMetadata.$Properties|null);

            /** BotMetadata modelMetadata */
            modelMetadata?: (BotMetadata.BotModelMetadata.$Properties|null);

            /** BotMetadata messageDisclaimerText */
            messageDisclaimerText?: (string|null);

            /** BotMetadata progressIndicatorMetadata */
            progressIndicatorMetadata?: (BotMetadata.BotProgressIndicatorMetadata.$Properties|null);

            /** BotMetadata capabilityMetadata */
            capabilityMetadata?: (BotMetadata.BotCapabilityMetadata.$Properties|null);

            /** BotMetadata imagineMetadata */
            imagineMetadata?: (BotMetadata.BotImagineMetadata.$Properties|null);

            /** BotMetadata memoryMetadata */
            memoryMetadata?: (BotMetadata.BotMemoryMetadata.$Properties|null);

            /** BotMetadata renderingMetadata */
            renderingMetadata?: (BotMetadata.BotRenderingMetadata.$Properties|null);

            /** BotMetadata botMetricsMetadata */
            botMetricsMetadata?: (BotMetadata.BotMetricsMetadata.$Properties|null);

            /** BotMetadata botLinkedAccountsMetadata */
            botLinkedAccountsMetadata?: (BotMetadata.BotLinkedAccountsMetadata.$Properties|null);

            /** BotMetadata richResponseSourcesMetadata */
            richResponseSourcesMetadata?: (BotMetadata.BotSourcesMetadata.$Properties|null);

            /** BotMetadata aiConversationContext */
            aiConversationContext?: (Uint8Array|null);

            /** BotMetadata botPromotionMessageMetadata */
            botPromotionMessageMetadata?: (BotMetadata.BotPromotionMessageMetadata.$Properties|null);

            /** BotMetadata botModeSelectionMetadata */
            botModeSelectionMetadata?: (BotMetadata.BotModeSelectionMetadata.$Properties|null);

            /** BotMetadata botQuotaMetadata */
            botQuotaMetadata?: (BotMetadata.BotQuotaMetadata.$Properties|null);

            /** BotMetadata botAgeCollectionMetadata */
            botAgeCollectionMetadata?: (BotMetadata.BotAgeCollectionMetadata.$Properties|null);

            /** BotMetadata conversationStarterPromptId */
            conversationStarterPromptId?: (string|null);

            /** BotMetadata botResponseId */
            botResponseId?: (string|null);

            /** BotMetadata verificationMetadata */
            verificationMetadata?: (BotMetadata.BotSignatureVerificationMetadata.$Properties|null);

            /** BotMetadata unifiedResponseMutation */
            unifiedResponseMutation?: (BotMetadata.BotUnifiedResponseMutation.$Properties|null);

            /** BotMetadata botMessageOriginMetadata */
            botMessageOriginMetadata?: (BotMetadata.BotMessageOriginMetadata.$Properties|null);

            /** BotMetadata inThreadSurveyMetadata */
            inThreadSurveyMetadata?: (BotMetadata.InThreadSurveyMetadata.$Properties|null);

            /** BotMetadata botThreadInfo */
            botThreadInfo?: (BotMetadata.AIThreadInfo.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMetadata. */
        type $Shape = BotMetadata.BotMetadata.$Properties;
    }

    /**
     * Properties of a AIThreadInfo.
     * @deprecated Use BotMetadata.AIThreadInfo.$Properties instead.
     */
    interface IAIThreadInfo extends BotMetadata.AIThreadInfo.$Properties {
    }

    /** Represents a AIThreadInfo. */
    class AIThreadInfo {

        /**
         * Constructs a new AIThreadInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.AIThreadInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AIThreadInfo serverInfo. */
        serverInfo?: (BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties|null);

        /** AIThreadInfo clientInfo. */
        clientInfo?: (BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties|null);

        /**
         * Creates a new AIThreadInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIThreadInfo instance
         */
        static create(properties: BotMetadata.AIThreadInfo.$Shape): BotMetadata.AIThreadInfo & BotMetadata.AIThreadInfo.$Shape;
        static create(properties?: BotMetadata.AIThreadInfo.$Properties): BotMetadata.AIThreadInfo;

        /**
         * Encodes the specified AIThreadInfo message. Does not implicitly {@link BotMetadata.AIThreadInfo.verify|verify} messages.
         * @param message AIThreadInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.AIThreadInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIThreadInfo message, length delimited. Does not implicitly {@link BotMetadata.AIThreadInfo.verify|verify} messages.
         * @param message AIThreadInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.AIThreadInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIThreadInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.AIThreadInfo & BotMetadata.AIThreadInfo.$Shape} AIThreadInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.AIThreadInfo & BotMetadata.AIThreadInfo.$Shape;

        /**
         * Decodes a AIThreadInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.AIThreadInfo & BotMetadata.AIThreadInfo.$Shape} AIThreadInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.AIThreadInfo & BotMetadata.AIThreadInfo.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.AIThreadInfo;

        /**
         * Creates a plain object from a AIThreadInfo message. Also converts values to other types if specified.
         * @param message AIThreadInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.AIThreadInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            serverInfo?: (BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties|null);

            /** AIThreadInfo clientInfo */
            clientInfo?: (BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AIThreadInfo. */
        type $Shape = BotMetadata.AIThreadInfo.$Properties;

        /**
         * Properties of a AIThreadClientInfo.
         * @deprecated Use BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties instead.
         */
        interface IAIThreadClientInfo extends BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties {
        }

        /** Represents a AIThreadClientInfo. */
        class AIThreadClientInfo {

            /**
             * Constructs a new AIThreadClientInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AIThreadClientInfo type. */
            type?: (BotMetadata.AIThreadInfo.AIThreadClientInfo.AIThreadType|null);

            /**
             * Creates a new AIThreadClientInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIThreadClientInfo instance
             */
            static create(properties: BotMetadata.AIThreadInfo.AIThreadClientInfo.$Shape): BotMetadata.AIThreadInfo.AIThreadClientInfo & BotMetadata.AIThreadInfo.AIThreadClientInfo.$Shape;
            static create(properties?: BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties): BotMetadata.AIThreadInfo.AIThreadClientInfo;

            /**
             * Encodes the specified AIThreadClientInfo message. Does not implicitly {@link BotMetadata.AIThreadInfo.AIThreadClientInfo.verify|verify} messages.
             * @param message AIThreadClientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIThreadClientInfo message, length delimited. Does not implicitly {@link BotMetadata.AIThreadInfo.AIThreadClientInfo.verify|verify} messages.
             * @param message AIThreadClientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIThreadClientInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BotMetadata.AIThreadInfo.AIThreadClientInfo & BotMetadata.AIThreadInfo.AIThreadClientInfo.$Shape} AIThreadClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.AIThreadInfo.AIThreadClientInfo & BotMetadata.AIThreadInfo.AIThreadClientInfo.$Shape;

            /**
             * Decodes a AIThreadClientInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BotMetadata.AIThreadInfo.AIThreadClientInfo & BotMetadata.AIThreadInfo.AIThreadClientInfo.$Shape} AIThreadClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.AIThreadInfo.AIThreadClientInfo & BotMetadata.AIThreadInfo.AIThreadClientInfo.$Shape;

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
            static fromObject(object: { [k: string]: any }): BotMetadata.AIThreadInfo.AIThreadClientInfo;

            /**
             * Creates a plain object from a AIThreadClientInfo message. Also converts values to other types if specified.
             * @param message AIThreadClientInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BotMetadata.AIThreadInfo.AIThreadClientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                type?: (BotMetadata.AIThreadInfo.AIThreadClientInfo.AIThreadType|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a AIThreadClientInfo. */
            type $Shape = BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties;

            /** AIThreadType enum. */
            enum AIThreadType {

                /** UNKNOWN value */
                UNKNOWN = 0,

                /** DEFAULT value */
                DEFAULT = 1,

                /** INCOGNITO value */
                INCOGNITO = 2
            }
        }

        /**
         * Properties of a AIThreadServerInfo.
         * @deprecated Use BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties instead.
         */
        interface IAIThreadServerInfo extends BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties {
        }

        /** Represents a AIThreadServerInfo. */
        class AIThreadServerInfo {

            /**
             * Constructs a new AIThreadServerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AIThreadServerInfo title. */
            title?: (string|null);

            /**
             * Creates a new AIThreadServerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIThreadServerInfo instance
             */
            static create(properties: BotMetadata.AIThreadInfo.AIThreadServerInfo.$Shape): BotMetadata.AIThreadInfo.AIThreadServerInfo & BotMetadata.AIThreadInfo.AIThreadServerInfo.$Shape;
            static create(properties?: BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties): BotMetadata.AIThreadInfo.AIThreadServerInfo;

            /**
             * Encodes the specified AIThreadServerInfo message. Does not implicitly {@link BotMetadata.AIThreadInfo.AIThreadServerInfo.verify|verify} messages.
             * @param message AIThreadServerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIThreadServerInfo message, length delimited. Does not implicitly {@link BotMetadata.AIThreadInfo.AIThreadServerInfo.verify|verify} messages.
             * @param message AIThreadServerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIThreadServerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BotMetadata.AIThreadInfo.AIThreadServerInfo & BotMetadata.AIThreadInfo.AIThreadServerInfo.$Shape} AIThreadServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.AIThreadInfo.AIThreadServerInfo & BotMetadata.AIThreadInfo.AIThreadServerInfo.$Shape;

            /**
             * Decodes a AIThreadServerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BotMetadata.AIThreadInfo.AIThreadServerInfo & BotMetadata.AIThreadInfo.AIThreadServerInfo.$Shape} AIThreadServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.AIThreadInfo.AIThreadServerInfo & BotMetadata.AIThreadInfo.AIThreadServerInfo.$Shape;

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
            static fromObject(object: { [k: string]: any }): BotMetadata.AIThreadInfo.AIThreadServerInfo;

            /**
             * Creates a plain object from a AIThreadServerInfo message. Also converts values to other types if specified.
             * @param message AIThreadServerInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BotMetadata.AIThreadInfo.AIThreadServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            type $Shape = BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties;
        }
    }

    /**
     * Properties of a BotUnifiedResponseMutation.
     * @deprecated Use BotMetadata.BotUnifiedResponseMutation.$Properties instead.
     */
    interface IBotUnifiedResponseMutation extends BotMetadata.BotUnifiedResponseMutation.$Properties {
    }

    /** Represents a BotUnifiedResponseMutation. */
    class BotUnifiedResponseMutation {

        /**
         * Constructs a new BotUnifiedResponseMutation.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotUnifiedResponseMutation.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotUnifiedResponseMutation sbsMetadata. */
        sbsMetadata?: (BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties|null);

        /**
         * Creates a new BotUnifiedResponseMutation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotUnifiedResponseMutation instance
         */
        static create(properties: BotMetadata.BotUnifiedResponseMutation.$Shape): BotMetadata.BotUnifiedResponseMutation & BotMetadata.BotUnifiedResponseMutation.$Shape;
        static create(properties?: BotMetadata.BotUnifiedResponseMutation.$Properties): BotMetadata.BotUnifiedResponseMutation;

        /**
         * Encodes the specified BotUnifiedResponseMutation message. Does not implicitly {@link BotMetadata.BotUnifiedResponseMutation.verify|verify} messages.
         * @param message BotUnifiedResponseMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotUnifiedResponseMutation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotUnifiedResponseMutation message, length delimited. Does not implicitly {@link BotMetadata.BotUnifiedResponseMutation.verify|verify} messages.
         * @param message BotUnifiedResponseMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotUnifiedResponseMutation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotUnifiedResponseMutation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotUnifiedResponseMutation & BotMetadata.BotUnifiedResponseMutation.$Shape} BotUnifiedResponseMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotUnifiedResponseMutation & BotMetadata.BotUnifiedResponseMutation.$Shape;

        /**
         * Decodes a BotUnifiedResponseMutation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotUnifiedResponseMutation & BotMetadata.BotUnifiedResponseMutation.$Shape} BotUnifiedResponseMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotUnifiedResponseMutation & BotMetadata.BotUnifiedResponseMutation.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotUnifiedResponseMutation;

        /**
         * Creates a plain object from a BotUnifiedResponseMutation message. Also converts values to other types if specified.
         * @param message BotUnifiedResponseMutation
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotUnifiedResponseMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            sbsMetadata?: (BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotUnifiedResponseMutation. */
        type $Shape = BotMetadata.BotUnifiedResponseMutation.$Properties;

        /**
         * Properties of a SideBySideMetadata.
         * @deprecated Use BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties instead.
         */
        interface ISideBySideMetadata extends BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties {
        }

        /** Represents a SideBySideMetadata. */
        class SideBySideMetadata {

            /**
             * Constructs a new SideBySideMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SideBySideMetadata primaryResponseId. */
            primaryResponseId?: (string|null);

            /**
             * Creates a new SideBySideMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SideBySideMetadata instance
             */
            static create(properties: BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Shape): BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata & BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Shape;
            static create(properties?: BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties): BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata;

            /**
             * Encodes the specified SideBySideMetadata message. Does not implicitly {@link BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.verify|verify} messages.
             * @param message SideBySideMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SideBySideMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.verify|verify} messages.
             * @param message SideBySideMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SideBySideMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata & BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Shape} SideBySideMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata & BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Shape;

            /**
             * Decodes a SideBySideMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata & BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Shape} SideBySideMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata & BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Shape;

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
            static fromObject(object: { [k: string]: any }): BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata;

            /**
             * Creates a plain object from a SideBySideMetadata message. Also converts values to other types if specified.
             * @param message SideBySideMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SideBySideMetadata. */
            type $Shape = BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties;
        }
    }

    /**
     * Properties of a BotMessageOrigin.
     * @deprecated Use BotMetadata.BotMessageOrigin.$Properties instead.
     */
    interface IBotMessageOrigin extends BotMetadata.BotMessageOrigin.$Properties {
    }

    /** Represents a BotMessageOrigin. */
    class BotMessageOrigin {

        /**
         * Constructs a new BotMessageOrigin.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotMessageOrigin.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMessageOrigin type. */
        type?: (BotMetadata.BotMessageOrigin.BotMessageOriginType|null);

        /**
         * Creates a new BotMessageOrigin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMessageOrigin instance
         */
        static create(properties: BotMetadata.BotMessageOrigin.$Shape): BotMetadata.BotMessageOrigin & BotMetadata.BotMessageOrigin.$Shape;
        static create(properties?: BotMetadata.BotMessageOrigin.$Properties): BotMetadata.BotMessageOrigin;

        /**
         * Encodes the specified BotMessageOrigin message. Does not implicitly {@link BotMetadata.BotMessageOrigin.verify|verify} messages.
         * @param message BotMessageOrigin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotMessageOrigin.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMessageOrigin message, length delimited. Does not implicitly {@link BotMetadata.BotMessageOrigin.verify|verify} messages.
         * @param message BotMessageOrigin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotMessageOrigin.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMessageOrigin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotMessageOrigin & BotMetadata.BotMessageOrigin.$Shape} BotMessageOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotMessageOrigin & BotMetadata.BotMessageOrigin.$Shape;

        /**
         * Decodes a BotMessageOrigin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMessageOrigin & BotMetadata.BotMessageOrigin.$Shape} BotMessageOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotMessageOrigin & BotMetadata.BotMessageOrigin.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotMessageOrigin;

        /**
         * Creates a plain object from a BotMessageOrigin message. Also converts values to other types if specified.
         * @param message BotMessageOrigin
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotMessageOrigin, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            type?: (BotMetadata.BotMessageOrigin.BotMessageOriginType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMessageOrigin. */
        type $Shape = BotMetadata.BotMessageOrigin.$Properties;

        /** BotMessageOriginType enum. */
        enum BotMessageOriginType {

            /** BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED value */
            BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED = 0
        }
    }

    /**
     * Properties of a BotMessageOriginMetadata.
     * @deprecated Use BotMetadata.BotMessageOriginMetadata.$Properties instead.
     */
    interface IBotMessageOriginMetadata extends BotMetadata.BotMessageOriginMetadata.$Properties {
    }

    /** Represents a BotMessageOriginMetadata. */
    class BotMessageOriginMetadata {

        /**
         * Constructs a new BotMessageOriginMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotMessageOriginMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMessageOriginMetadata origins. */
        origins: BotMetadata.BotMessageOrigin.$Properties[];

        /**
         * Creates a new BotMessageOriginMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMessageOriginMetadata instance
         */
        static create(properties: BotMetadata.BotMessageOriginMetadata.$Shape): BotMetadata.BotMessageOriginMetadata & BotMetadata.BotMessageOriginMetadata.$Shape;
        static create(properties?: BotMetadata.BotMessageOriginMetadata.$Properties): BotMetadata.BotMessageOriginMetadata;

        /**
         * Encodes the specified BotMessageOriginMetadata message. Does not implicitly {@link BotMetadata.BotMessageOriginMetadata.verify|verify} messages.
         * @param message BotMessageOriginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotMessageOriginMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMessageOriginMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMessageOriginMetadata.verify|verify} messages.
         * @param message BotMessageOriginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotMessageOriginMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMessageOriginMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotMessageOriginMetadata & BotMetadata.BotMessageOriginMetadata.$Shape} BotMessageOriginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotMessageOriginMetadata & BotMetadata.BotMessageOriginMetadata.$Shape;

        /**
         * Decodes a BotMessageOriginMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMessageOriginMetadata & BotMetadata.BotMessageOriginMetadata.$Shape} BotMessageOriginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotMessageOriginMetadata & BotMetadata.BotMessageOriginMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotMessageOriginMetadata;

        /**
         * Creates a plain object from a BotMessageOriginMetadata message. Also converts values to other types if specified.
         * @param message BotMessageOriginMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotMessageOriginMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            origins?: (BotMetadata.BotMessageOrigin.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMessageOriginMetadata. */
        type $Shape = BotMetadata.BotMessageOriginMetadata.$Properties;
    }

    /**
     * Properties of an InThreadSurveyMetadata.
     * @deprecated Use BotMetadata.InThreadSurveyMetadata.$Properties instead.
     */
    interface IInThreadSurveyMetadata extends BotMetadata.InThreadSurveyMetadata.$Properties {
    }

    /** Represents an InThreadSurveyMetadata. */
    class InThreadSurveyMetadata {

        /**
         * Constructs a new InThreadSurveyMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.InThreadSurveyMetadata.$Properties);

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
        questions: BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties[];

        /** InThreadSurveyMetadata surveyContinueButtonText. */
        surveyContinueButtonText?: (string|null);

        /** InThreadSurveyMetadata surveySubmitButtonText. */
        surveySubmitButtonText?: (string|null);

        /** InThreadSurveyMetadata privacyStatementFull. */
        privacyStatementFull?: (string|null);

        /** InThreadSurveyMetadata privacyStatementParts. */
        privacyStatementParts: BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties[];

        /** InThreadSurveyMetadata feedbackToastText. */
        feedbackToastText?: (string|null);

        /**
         * Creates a new InThreadSurveyMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InThreadSurveyMetadata instance
         */
        static create(properties: BotMetadata.InThreadSurveyMetadata.$Shape): BotMetadata.InThreadSurveyMetadata & BotMetadata.InThreadSurveyMetadata.$Shape;
        static create(properties?: BotMetadata.InThreadSurveyMetadata.$Properties): BotMetadata.InThreadSurveyMetadata;

        /**
         * Encodes the specified InThreadSurveyMetadata message. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.verify|verify} messages.
         * @param message InThreadSurveyMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.InThreadSurveyMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InThreadSurveyMetadata message, length delimited. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.verify|verify} messages.
         * @param message InThreadSurveyMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.InThreadSurveyMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InThreadSurveyMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.InThreadSurveyMetadata & BotMetadata.InThreadSurveyMetadata.$Shape} InThreadSurveyMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.InThreadSurveyMetadata & BotMetadata.InThreadSurveyMetadata.$Shape;

        /**
         * Decodes an InThreadSurveyMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.InThreadSurveyMetadata & BotMetadata.InThreadSurveyMetadata.$Shape} InThreadSurveyMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.InThreadSurveyMetadata & BotMetadata.InThreadSurveyMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.InThreadSurveyMetadata;

        /**
         * Creates a plain object from an InThreadSurveyMetadata message. Also converts values to other types if specified.
         * @param message InThreadSurveyMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.InThreadSurveyMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            questions?: (BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties[]|null);

            /** InThreadSurveyMetadata surveyContinueButtonText */
            surveyContinueButtonText?: (string|null);

            /** InThreadSurveyMetadata surveySubmitButtonText */
            surveySubmitButtonText?: (string|null);

            /** InThreadSurveyMetadata privacyStatementFull */
            privacyStatementFull?: (string|null);

            /** InThreadSurveyMetadata privacyStatementParts */
            privacyStatementParts?: (BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties[]|null);

            /** InThreadSurveyMetadata feedbackToastText */
            feedbackToastText?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an InThreadSurveyMetadata. */
        type $Shape = BotMetadata.InThreadSurveyMetadata.$Properties;

        /**
         * Properties of an InThreadSurveyOption.
         * @deprecated Use BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties instead.
         */
        interface IInThreadSurveyOption extends BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties {
        }

        /** Represents an InThreadSurveyOption. */
        class InThreadSurveyOption {

            /**
             * Constructs a new InThreadSurveyOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties);

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
            static create(properties: BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Shape): BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption & BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Shape;
            static create(properties?: BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties): BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption;

            /**
             * Encodes the specified InThreadSurveyOption message. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.verify|verify} messages.
             * @param message InThreadSurveyOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InThreadSurveyOption message, length delimited. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.verify|verify} messages.
             * @param message InThreadSurveyOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InThreadSurveyOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption & BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Shape} InThreadSurveyOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption & BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Shape;

            /**
             * Decodes an InThreadSurveyOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption & BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Shape} InThreadSurveyOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption & BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Shape;

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
            static fromObject(object: { [k: string]: any }): BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption;

            /**
             * Creates a plain object from an InThreadSurveyOption message. Also converts values to other types if specified.
             * @param message InThreadSurveyOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            type $Shape = BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties;
        }

        /**
         * Properties of an InThreadSurveyPrivacyStatementPart.
         * @deprecated Use BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties instead.
         */
        interface IInThreadSurveyPrivacyStatementPart extends BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties {
        }

        /** Represents an InThreadSurveyPrivacyStatementPart. */
        class InThreadSurveyPrivacyStatementPart {

            /**
             * Constructs a new InThreadSurveyPrivacyStatementPart.
             * @param [properties] Properties to set
             */
            constructor(properties?: BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties);

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
            static create(properties: BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape): BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape;
            static create(properties?: BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties): BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;

            /**
             * Encodes the specified InThreadSurveyPrivacyStatementPart message. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.verify|verify} messages.
             * @param message InThreadSurveyPrivacyStatementPart message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InThreadSurveyPrivacyStatementPart message, length delimited. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.verify|verify} messages.
             * @param message InThreadSurveyPrivacyStatementPart message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InThreadSurveyPrivacyStatementPart message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape} InThreadSurveyPrivacyStatementPart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape;

            /**
             * Decodes an InThreadSurveyPrivacyStatementPart message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape} InThreadSurveyPrivacyStatementPart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape;

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
            static fromObject(object: { [k: string]: any }): BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;

            /**
             * Creates a plain object from an InThreadSurveyPrivacyStatementPart message. Also converts values to other types if specified.
             * @param message InThreadSurveyPrivacyStatementPart
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            type $Shape = BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties;
        }

        /**
         * Properties of an InThreadSurveyQuestion.
         * @deprecated Use BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties instead.
         */
        interface IInThreadSurveyQuestion extends BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties {
        }

        /** Represents an InThreadSurveyQuestion. */
        class InThreadSurveyQuestion {

            /**
             * Constructs a new InThreadSurveyQuestion.
             * @param [properties] Properties to set
             */
            constructor(properties?: BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** InThreadSurveyQuestion questionText. */
            questionText?: (string|null);

            /** InThreadSurveyQuestion questionId. */
            questionId?: (string|null);

            /** InThreadSurveyQuestion questionOptions. */
            questionOptions: BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties[];

            /**
             * Creates a new InThreadSurveyQuestion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InThreadSurveyQuestion instance
             */
            static create(properties: BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape): BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion & BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape;
            static create(properties?: BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties): BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion;

            /**
             * Encodes the specified InThreadSurveyQuestion message. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.verify|verify} messages.
             * @param message InThreadSurveyQuestion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InThreadSurveyQuestion message, length delimited. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.verify|verify} messages.
             * @param message InThreadSurveyQuestion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InThreadSurveyQuestion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion & BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape} InThreadSurveyQuestion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion & BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape;

            /**
             * Decodes an InThreadSurveyQuestion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion & BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape} InThreadSurveyQuestion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion & BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape;

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
            static fromObject(object: { [k: string]: any }): BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion;

            /**
             * Creates a plain object from an InThreadSurveyQuestion message. Also converts values to other types if specified.
             * @param message InThreadSurveyQuestion
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                questionOptions?: (BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an InThreadSurveyQuestion. */
            type $Shape = BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties;
        }
    }

    /**
     * Properties of a BotSourcesMetadata.
     * @deprecated Use BotMetadata.BotSourcesMetadata.$Properties instead.
     */
    interface IBotSourcesMetadata extends BotMetadata.BotSourcesMetadata.$Properties {
    }

    /** Represents a BotSourcesMetadata. */
    class BotSourcesMetadata {

        /**
         * Constructs a new BotSourcesMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotSourcesMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotSourcesMetadata sources. */
        sources: BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties[];

        /**
         * Creates a new BotSourcesMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSourcesMetadata instance
         */
        static create(properties: BotMetadata.BotSourcesMetadata.$Shape): BotMetadata.BotSourcesMetadata & BotMetadata.BotSourcesMetadata.$Shape;
        static create(properties?: BotMetadata.BotSourcesMetadata.$Properties): BotMetadata.BotSourcesMetadata;

        /**
         * Encodes the specified BotSourcesMetadata message. Does not implicitly {@link BotMetadata.BotSourcesMetadata.verify|verify} messages.
         * @param message BotSourcesMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotSourcesMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSourcesMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotSourcesMetadata.verify|verify} messages.
         * @param message BotSourcesMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotSourcesMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSourcesMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotSourcesMetadata & BotMetadata.BotSourcesMetadata.$Shape} BotSourcesMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotSourcesMetadata & BotMetadata.BotSourcesMetadata.$Shape;

        /**
         * Decodes a BotSourcesMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotSourcesMetadata & BotMetadata.BotSourcesMetadata.$Shape} BotSourcesMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotSourcesMetadata & BotMetadata.BotSourcesMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotSourcesMetadata;

        /**
         * Creates a plain object from a BotSourcesMetadata message. Also converts values to other types if specified.
         * @param message BotSourcesMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotSourcesMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            sources?: (BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotSourcesMetadata. */
        type $Shape = BotMetadata.BotSourcesMetadata.$Properties;

        /**
         * Properties of a BotSourceItem.
         * @deprecated Use BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties instead.
         */
        interface IBotSourceItem extends BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties {
        }

        /** Represents a BotSourceItem. */
        class BotSourceItem {

            /**
             * Constructs a new BotSourceItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BotSourceItem provider. */
            provider?: (BotMetadata.BotSourcesMetadata.BotSourceItem.SourceProvider|null);

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
            static create(properties: BotMetadata.BotSourcesMetadata.BotSourceItem.$Shape): BotMetadata.BotSourcesMetadata.BotSourceItem & BotMetadata.BotSourcesMetadata.BotSourceItem.$Shape;
            static create(properties?: BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties): BotMetadata.BotSourcesMetadata.BotSourceItem;

            /**
             * Encodes the specified BotSourceItem message. Does not implicitly {@link BotMetadata.BotSourcesMetadata.BotSourceItem.verify|verify} messages.
             * @param message BotSourceItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BotSourceItem message, length delimited. Does not implicitly {@link BotMetadata.BotSourcesMetadata.BotSourceItem.verify|verify} messages.
             * @param message BotSourceItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BotSourceItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BotMetadata.BotSourcesMetadata.BotSourceItem & BotMetadata.BotSourcesMetadata.BotSourceItem.$Shape} BotSourceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotSourcesMetadata.BotSourceItem & BotMetadata.BotSourcesMetadata.BotSourceItem.$Shape;

            /**
             * Decodes a BotSourceItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BotMetadata.BotSourcesMetadata.BotSourceItem & BotMetadata.BotSourcesMetadata.BotSourceItem.$Shape} BotSourceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotSourcesMetadata.BotSourceItem & BotMetadata.BotSourcesMetadata.BotSourceItem.$Shape;

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
            static fromObject(object: { [k: string]: any }): BotMetadata.BotSourcesMetadata.BotSourceItem;

            /**
             * Creates a plain object from a BotSourceItem message. Also converts values to other types if specified.
             * @param message BotSourceItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BotMetadata.BotSourcesMetadata.BotSourceItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                provider?: (BotMetadata.BotSourcesMetadata.BotSourceItem.SourceProvider|null);

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
            type $Shape = BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties;

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
     * @deprecated Use BotMetadata.BotAgeCollectionMetadata.$Properties instead.
     */
    interface IBotAgeCollectionMetadata extends BotMetadata.BotAgeCollectionMetadata.$Properties {
    }

    /** Represents a BotAgeCollectionMetadata. */
    class BotAgeCollectionMetadata {

        /**
         * Constructs a new BotAgeCollectionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotAgeCollectionMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotAgeCollectionMetadata ageCollectionEligible. */
        ageCollectionEligible?: (boolean|null);

        /** BotAgeCollectionMetadata shouldTriggerAgeCollectionOnClient. */
        shouldTriggerAgeCollectionOnClient?: (boolean|null);

        /**
         * Creates a new BotAgeCollectionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotAgeCollectionMetadata instance
         */
        static create(properties: BotMetadata.BotAgeCollectionMetadata.$Shape): BotMetadata.BotAgeCollectionMetadata & BotMetadata.BotAgeCollectionMetadata.$Shape;
        static create(properties?: BotMetadata.BotAgeCollectionMetadata.$Properties): BotMetadata.BotAgeCollectionMetadata;

        /**
         * Encodes the specified BotAgeCollectionMetadata message. Does not implicitly {@link BotMetadata.BotAgeCollectionMetadata.verify|verify} messages.
         * @param message BotAgeCollectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotAgeCollectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotAgeCollectionMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotAgeCollectionMetadata.verify|verify} messages.
         * @param message BotAgeCollectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotAgeCollectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotAgeCollectionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotAgeCollectionMetadata & BotMetadata.BotAgeCollectionMetadata.$Shape} BotAgeCollectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotAgeCollectionMetadata & BotMetadata.BotAgeCollectionMetadata.$Shape;

        /**
         * Decodes a BotAgeCollectionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotAgeCollectionMetadata & BotMetadata.BotAgeCollectionMetadata.$Shape} BotAgeCollectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotAgeCollectionMetadata & BotMetadata.BotAgeCollectionMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotAgeCollectionMetadata;

        /**
         * Creates a plain object from a BotAgeCollectionMetadata message. Also converts values to other types if specified.
         * @param message BotAgeCollectionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotAgeCollectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotAgeCollectionMetadata. */
        type $Shape = BotMetadata.BotAgeCollectionMetadata.$Properties;
    }

    /**
     * Properties of a BotImagineMetadata.
     * @deprecated Use BotMetadata.BotImagineMetadata.$Properties instead.
     */
    interface IBotImagineMetadata extends BotMetadata.BotImagineMetadata.$Properties {
    }

    /** Represents a BotImagineMetadata. */
    class BotImagineMetadata {

        /**
         * Constructs a new BotImagineMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotImagineMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotImagineMetadata imagineType. */
        imagineType?: (BotMetadata.BotImagineMetadata.ImagineType|null);

        /**
         * Creates a new BotImagineMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotImagineMetadata instance
         */
        static create(properties: BotMetadata.BotImagineMetadata.$Shape): BotMetadata.BotImagineMetadata & BotMetadata.BotImagineMetadata.$Shape;
        static create(properties?: BotMetadata.BotImagineMetadata.$Properties): BotMetadata.BotImagineMetadata;

        /**
         * Encodes the specified BotImagineMetadata message. Does not implicitly {@link BotMetadata.BotImagineMetadata.verify|verify} messages.
         * @param message BotImagineMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotImagineMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotImagineMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotImagineMetadata.verify|verify} messages.
         * @param message BotImagineMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotImagineMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotImagineMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotImagineMetadata & BotMetadata.BotImagineMetadata.$Shape} BotImagineMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotImagineMetadata & BotMetadata.BotImagineMetadata.$Shape;

        /**
         * Decodes a BotImagineMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotImagineMetadata & BotMetadata.BotImagineMetadata.$Shape} BotImagineMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotImagineMetadata & BotMetadata.BotImagineMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotImagineMetadata;

        /**
         * Creates a plain object from a BotImagineMetadata message. Also converts values to other types if specified.
         * @param message BotImagineMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotImagineMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            imagineType?: (BotMetadata.BotImagineMetadata.ImagineType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotImagineMetadata. */
        type $Shape = BotMetadata.BotImagineMetadata.$Properties;

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
     * @deprecated Use BotMetadata.BotQuotaMetadata.$Properties instead.
     */
    interface IBotQuotaMetadata extends BotMetadata.BotQuotaMetadata.$Properties {
    }

    /** Represents a BotQuotaMetadata. */
    class BotQuotaMetadata {

        /**
         * Constructs a new BotQuotaMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotQuotaMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotQuotaMetadata botFeatureQuotaMetadata. */
        botFeatureQuotaMetadata: BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties[];

        /**
         * Creates a new BotQuotaMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotQuotaMetadata instance
         */
        static create(properties: BotMetadata.BotQuotaMetadata.$Shape): BotMetadata.BotQuotaMetadata & BotMetadata.BotQuotaMetadata.$Shape;
        static create(properties?: BotMetadata.BotQuotaMetadata.$Properties): BotMetadata.BotQuotaMetadata;

        /**
         * Encodes the specified BotQuotaMetadata message. Does not implicitly {@link BotMetadata.BotQuotaMetadata.verify|verify} messages.
         * @param message BotQuotaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotQuotaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotQuotaMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotQuotaMetadata.verify|verify} messages.
         * @param message BotQuotaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotQuotaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotQuotaMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotQuotaMetadata & BotMetadata.BotQuotaMetadata.$Shape} BotQuotaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotQuotaMetadata & BotMetadata.BotQuotaMetadata.$Shape;

        /**
         * Decodes a BotQuotaMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotQuotaMetadata & BotMetadata.BotQuotaMetadata.$Shape} BotQuotaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotQuotaMetadata & BotMetadata.BotQuotaMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotQuotaMetadata;

        /**
         * Creates a plain object from a BotQuotaMetadata message. Also converts values to other types if specified.
         * @param message BotQuotaMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotQuotaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            botFeatureQuotaMetadata?: (BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotQuotaMetadata. */
        type $Shape = BotMetadata.BotQuotaMetadata.$Properties;

        /**
         * Properties of a BotFeatureQuotaMetadata.
         * @deprecated Use BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties instead.
         */
        interface IBotFeatureQuotaMetadata extends BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties {
        }

        /** Represents a BotFeatureQuotaMetadata. */
        class BotFeatureQuotaMetadata {

            /**
             * Constructs a new BotFeatureQuotaMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BotFeatureQuotaMetadata featureType. */
            featureType?: (BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType|null);

            /** BotFeatureQuotaMetadata remainingQuota. */
            remainingQuota?: (number|null);

            /** BotFeatureQuotaMetadata expirationTimestamp. */
            expirationTimestamp?: (number|Long|null);

            /**
             * Creates a new BotFeatureQuotaMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BotFeatureQuotaMetadata instance
             */
            static create(properties: BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape): BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata & BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape;
            static create(properties?: BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties): BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata;

            /**
             * Encodes the specified BotFeatureQuotaMetadata message. Does not implicitly {@link BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.verify|verify} messages.
             * @param message BotFeatureQuotaMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BotFeatureQuotaMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.verify|verify} messages.
             * @param message BotFeatureQuotaMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BotFeatureQuotaMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata & BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape} BotFeatureQuotaMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata & BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape;

            /**
             * Decodes a BotFeatureQuotaMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata & BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape} BotFeatureQuotaMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata & BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape;

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
            static fromObject(object: { [k: string]: any }): BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata;

            /**
             * Creates a plain object from a BotFeatureQuotaMetadata message. Also converts values to other types if specified.
             * @param message BotFeatureQuotaMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                featureType?: (BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType|null);

                /** BotFeatureQuotaMetadata remainingQuota */
                remainingQuota?: (number|null);

                /** BotFeatureQuotaMetadata expirationTimestamp */
                expirationTimestamp?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BotFeatureQuotaMetadata. */
            type $Shape = BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties;

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
     * @deprecated Use BotMetadata.BotModeSelectionMetadata.$Properties instead.
     */
    interface IBotModeSelectionMetadata extends BotMetadata.BotModeSelectionMetadata.$Properties {
    }

    /** Represents a BotModeSelectionMetadata. */
    class BotModeSelectionMetadata {

        /**
         * Constructs a new BotModeSelectionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotModeSelectionMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotModeSelectionMetadata mode. */
        mode: BotMetadata.BotModeSelectionMetadata.BotUserSelectionMode[];

        /**
         * Creates a new BotModeSelectionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotModeSelectionMetadata instance
         */
        static create(properties: BotMetadata.BotModeSelectionMetadata.$Shape): BotMetadata.BotModeSelectionMetadata & BotMetadata.BotModeSelectionMetadata.$Shape;
        static create(properties?: BotMetadata.BotModeSelectionMetadata.$Properties): BotMetadata.BotModeSelectionMetadata;

        /**
         * Encodes the specified BotModeSelectionMetadata message. Does not implicitly {@link BotMetadata.BotModeSelectionMetadata.verify|verify} messages.
         * @param message BotModeSelectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotModeSelectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotModeSelectionMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotModeSelectionMetadata.verify|verify} messages.
         * @param message BotModeSelectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotModeSelectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotModeSelectionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotModeSelectionMetadata & BotMetadata.BotModeSelectionMetadata.$Shape} BotModeSelectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotModeSelectionMetadata & BotMetadata.BotModeSelectionMetadata.$Shape;

        /**
         * Decodes a BotModeSelectionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotModeSelectionMetadata & BotMetadata.BotModeSelectionMetadata.$Shape} BotModeSelectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotModeSelectionMetadata & BotMetadata.BotModeSelectionMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotModeSelectionMetadata;

        /**
         * Creates a plain object from a BotModeSelectionMetadata message. Also converts values to other types if specified.
         * @param message BotModeSelectionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotModeSelectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            mode?: (BotMetadata.BotModeSelectionMetadata.BotUserSelectionMode[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotModeSelectionMetadata. */
        type $Shape = BotMetadata.BotModeSelectionMetadata.$Properties;

        /** BotUserSelectionMode enum. */
        enum BotUserSelectionMode {

            /** UNKNOWN_MODE value */
            UNKNOWN_MODE = 0,

            /** REASONING_MODE value */
            REASONING_MODE = 1
        }
    }

    /**
     * Properties of a BotCapabilityMetadata.
     * @deprecated Use BotMetadata.BotCapabilityMetadata.$Properties instead.
     */
    interface IBotCapabilityMetadata extends BotMetadata.BotCapabilityMetadata.$Properties {
    }

    /** Represents a BotCapabilityMetadata. */
    class BotCapabilityMetadata {

        /**
         * Constructs a new BotCapabilityMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotCapabilityMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotCapabilityMetadata capabilities. */
        capabilities: BotMetadata.BotCapabilityMetadata.BotCapabilityType[];

        /**
         * Creates a new BotCapabilityMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotCapabilityMetadata instance
         */
        static create(properties: BotMetadata.BotCapabilityMetadata.$Shape): BotMetadata.BotCapabilityMetadata & BotMetadata.BotCapabilityMetadata.$Shape;
        static create(properties?: BotMetadata.BotCapabilityMetadata.$Properties): BotMetadata.BotCapabilityMetadata;

        /**
         * Encodes the specified BotCapabilityMetadata message. Does not implicitly {@link BotMetadata.BotCapabilityMetadata.verify|verify} messages.
         * @param message BotCapabilityMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotCapabilityMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotCapabilityMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotCapabilityMetadata.verify|verify} messages.
         * @param message BotCapabilityMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotCapabilityMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotCapabilityMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotCapabilityMetadata & BotMetadata.BotCapabilityMetadata.$Shape} BotCapabilityMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotCapabilityMetadata & BotMetadata.BotCapabilityMetadata.$Shape;

        /**
         * Decodes a BotCapabilityMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotCapabilityMetadata & BotMetadata.BotCapabilityMetadata.$Shape} BotCapabilityMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotCapabilityMetadata & BotMetadata.BotCapabilityMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotCapabilityMetadata;

        /**
         * Creates a plain object from a BotCapabilityMetadata message. Also converts values to other types if specified.
         * @param message BotCapabilityMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotCapabilityMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            capabilities?: (BotMetadata.BotCapabilityMetadata.BotCapabilityType[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotCapabilityMetadata. */
        type $Shape = BotMetadata.BotCapabilityMetadata.$Properties;

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
            RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS = 42
        }
    }

    /**
     * Properties of a BotProgressIndicatorMetadata.
     * @deprecated Use BotMetadata.BotProgressIndicatorMetadata.$Properties instead.
     */
    interface IBotProgressIndicatorMetadata extends BotMetadata.BotProgressIndicatorMetadata.$Properties {
    }

    /** Represents a BotProgressIndicatorMetadata. */
    class BotProgressIndicatorMetadata {

        /**
         * Constructs a new BotProgressIndicatorMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotProgressIndicatorMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotProgressIndicatorMetadata progressDescription. */
        progressDescription?: (string|null);

        /** BotProgressIndicatorMetadata stepsMetadata. */
        stepsMetadata: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties[];

        /**
         * Creates a new BotProgressIndicatorMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotProgressIndicatorMetadata instance
         */
        static create(properties: BotMetadata.BotProgressIndicatorMetadata.$Shape): BotMetadata.BotProgressIndicatorMetadata & BotMetadata.BotProgressIndicatorMetadata.$Shape;
        static create(properties?: BotMetadata.BotProgressIndicatorMetadata.$Properties): BotMetadata.BotProgressIndicatorMetadata;

        /**
         * Encodes the specified BotProgressIndicatorMetadata message. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.verify|verify} messages.
         * @param message BotProgressIndicatorMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotProgressIndicatorMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotProgressIndicatorMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.verify|verify} messages.
         * @param message BotProgressIndicatorMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotProgressIndicatorMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotProgressIndicatorMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotProgressIndicatorMetadata & BotMetadata.BotProgressIndicatorMetadata.$Shape} BotProgressIndicatorMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotProgressIndicatorMetadata & BotMetadata.BotProgressIndicatorMetadata.$Shape;

        /**
         * Decodes a BotProgressIndicatorMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotProgressIndicatorMetadata & BotMetadata.BotProgressIndicatorMetadata.$Shape} BotProgressIndicatorMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotProgressIndicatorMetadata & BotMetadata.BotProgressIndicatorMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotProgressIndicatorMetadata;

        /**
         * Creates a plain object from a BotProgressIndicatorMetadata message. Also converts values to other types if specified.
         * @param message BotProgressIndicatorMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotProgressIndicatorMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            stepsMetadata?: (BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotProgressIndicatorMetadata. */
        type $Shape = BotMetadata.BotProgressIndicatorMetadata.$Properties;

        /**
         * Properties of a BotPlanningStepMetadata.
         * @deprecated Use BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties instead.
         */
        interface IBotPlanningStepMetadata extends BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties {
        }

        /** Represents a BotPlanningStepMetadata. */
        class BotPlanningStepMetadata {

            /**
             * Constructs a new BotPlanningStepMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BotPlanningStepMetadata statusTitle. */
            statusTitle?: (string|null);

            /** BotPlanningStepMetadata statusBody. */
            statusBody?: (string|null);

            /** BotPlanningStepMetadata sourcesMetadata. */
            sourcesMetadata: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties[];

            /** BotPlanningStepMetadata status. */
            status?: (BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus|null);

            /** BotPlanningStepMetadata isReasoning. */
            isReasoning?: (boolean|null);

            /** BotPlanningStepMetadata isEnhancedSearch. */
            isEnhancedSearch?: (boolean|null);

            /** BotPlanningStepMetadata sections. */
            sections: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties[];

            /**
             * Creates a new BotPlanningStepMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BotPlanningStepMetadata instance
             */
            static create(properties: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape;
            static create(properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata;

            /**
             * Encodes the specified BotPlanningStepMetadata message. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.verify|verify} messages.
             * @param message BotPlanningStepMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BotPlanningStepMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.verify|verify} messages.
             * @param message BotPlanningStepMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BotPlanningStepMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape} BotPlanningStepMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape;

            /**
             * Decodes a BotPlanningStepMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape} BotPlanningStepMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape;

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
            static fromObject(object: { [k: string]: any }): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata;

            /**
             * Creates a plain object from a BotPlanningStepMetadata message. Also converts values to other types if specified.
             * @param message BotPlanningStepMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                sourcesMetadata?: (BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties[]|null);

                /** BotPlanningStepMetadata status */
                status?: (BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus|null);

                /** BotPlanningStepMetadata isReasoning */
                isReasoning?: (boolean|null);

                /** BotPlanningStepMetadata isEnhancedSearch */
                isEnhancedSearch?: (boolean|null);

                /** BotPlanningStepMetadata sections */
                sections?: (BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BotPlanningStepMetadata. */
            type $Shape = BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties;

            /**
             * Properties of a BotPlanningSearchSourceMetadata.
             * @deprecated Use BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties instead.
             */
            interface IBotPlanningSearchSourceMetadata extends BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties {
            }

            /** Represents a BotPlanningSearchSourceMetadata. */
            class BotPlanningSearchSourceMetadata {

                /**
                 * Constructs a new BotPlanningSearchSourceMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** BotPlanningSearchSourceMetadata title. */
                title?: (string|null);

                /** BotPlanningSearchSourceMetadata provider. */
                provider?: (BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider|null);

                /** BotPlanningSearchSourceMetadata sourceUrl. */
                sourceUrl?: (string|null);

                /** BotPlanningSearchSourceMetadata favIconUrl. */
                favIconUrl?: (string|null);

                /**
                 * Creates a new BotPlanningSearchSourceMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BotPlanningSearchSourceMetadata instance
                 */
                static create(properties: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape;
                static create(properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;

                /**
                 * Encodes the specified BotPlanningSearchSourceMetadata message. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourceMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BotPlanningSearchSourceMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourceMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BotPlanningSearchSourceMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape} BotPlanningSearchSourceMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape;

                /**
                 * Decodes a BotPlanningSearchSourceMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape} BotPlanningSearchSourceMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape;

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
                static fromObject(object: { [k: string]: any }): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;

                /**
                 * Creates a plain object from a BotPlanningSearchSourceMetadata message. Also converts values to other types if specified.
                 * @param message BotPlanningSearchSourceMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    provider?: (BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider|null);

                    /** BotPlanningSearchSourceMetadata sourceUrl */
                    sourceUrl?: (string|null);

                    /** BotPlanningSearchSourceMetadata favIconUrl */
                    favIconUrl?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a BotPlanningSearchSourceMetadata. */
                type $Shape = BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties;
            }

            /**
             * Properties of a BotPlanningSearchSourcesMetadata.
             * @deprecated Use BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties instead.
             */
            interface IBotPlanningSearchSourcesMetadata extends BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties {
            }

            /** Represents a BotPlanningSearchSourcesMetadata. */
            class BotPlanningSearchSourcesMetadata {

                /**
                 * Constructs a new BotPlanningSearchSourcesMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** BotPlanningSearchSourcesMetadata sourceTitle. */
                sourceTitle?: (string|null);

                /** BotPlanningSearchSourcesMetadata provider. */
                provider?: (BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider|null);

                /** BotPlanningSearchSourcesMetadata sourceUrl. */
                sourceUrl?: (string|null);

                /**
                 * Creates a new BotPlanningSearchSourcesMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BotPlanningSearchSourcesMetadata instance
                 */
                static create(properties: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape;
                static create(properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;

                /**
                 * Encodes the specified BotPlanningSearchSourcesMetadata message. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourcesMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BotPlanningSearchSourcesMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourcesMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BotPlanningSearchSourcesMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape} BotPlanningSearchSourcesMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape;

                /**
                 * Decodes a BotPlanningSearchSourcesMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape} BotPlanningSearchSourcesMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape;

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
                static fromObject(object: { [k: string]: any }): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;

                /**
                 * Creates a plain object from a BotPlanningSearchSourcesMetadata message. Also converts values to other types if specified.
                 * @param message BotPlanningSearchSourcesMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    provider?: (BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider|null);

                    /** BotPlanningSearchSourcesMetadata sourceUrl */
                    sourceUrl?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a BotPlanningSearchSourcesMetadata. */
                type $Shape = BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties;

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
             * @deprecated Use BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties instead.
             */
            interface IBotPlanningStepSectionMetadata extends BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties {
            }

            /** Represents a BotPlanningStepSectionMetadata. */
            class BotPlanningStepSectionMetadata {

                /**
                 * Constructs a new BotPlanningStepSectionMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** BotPlanningStepSectionMetadata sectionTitle. */
                sectionTitle?: (string|null);

                /** BotPlanningStepSectionMetadata sectionBody. */
                sectionBody?: (string|null);

                /** BotPlanningStepSectionMetadata sourcesMetadata. */
                sourcesMetadata: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties[];

                /**
                 * Creates a new BotPlanningStepSectionMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BotPlanningStepSectionMetadata instance
                 */
                static create(properties: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape;
                static create(properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;

                /**
                 * Encodes the specified BotPlanningStepSectionMetadata message. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.verify|verify} messages.
                 * @param message BotPlanningStepSectionMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BotPlanningStepSectionMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.verify|verify} messages.
                 * @param message BotPlanningStepSectionMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BotPlanningStepSectionMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape} BotPlanningStepSectionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape;

                /**
                 * Decodes a BotPlanningStepSectionMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape} BotPlanningStepSectionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape;

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
                static fromObject(object: { [k: string]: any }): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;

                /**
                 * Creates a plain object from a BotPlanningStepSectionMetadata message. Also converts values to other types if specified.
                 * @param message BotPlanningStepSectionMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    sourcesMetadata?: (BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a BotPlanningStepSectionMetadata. */
                type $Shape = BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties;
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
     * @deprecated Use BotMetadata.BotModelMetadata.$Properties instead.
     */
    interface IBotModelMetadata extends BotMetadata.BotModelMetadata.$Properties {
    }

    /** Represents a BotModelMetadata. */
    class BotModelMetadata {

        /**
         * Constructs a new BotModelMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotModelMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotModelMetadata modelType. */
        modelType?: (BotMetadata.BotModelMetadata.ModelType|null);

        /** BotModelMetadata premiumModelStatus. */
        premiumModelStatus?: (BotMetadata.BotModelMetadata.PremiumModelStatus|null);

        /**
         * Creates a new BotModelMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotModelMetadata instance
         */
        static create(properties: BotMetadata.BotModelMetadata.$Shape): BotMetadata.BotModelMetadata & BotMetadata.BotModelMetadata.$Shape;
        static create(properties?: BotMetadata.BotModelMetadata.$Properties): BotMetadata.BotModelMetadata;

        /**
         * Encodes the specified BotModelMetadata message. Does not implicitly {@link BotMetadata.BotModelMetadata.verify|verify} messages.
         * @param message BotModelMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotModelMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotModelMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotModelMetadata.verify|verify} messages.
         * @param message BotModelMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotModelMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotModelMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotModelMetadata & BotMetadata.BotModelMetadata.$Shape} BotModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotModelMetadata & BotMetadata.BotModelMetadata.$Shape;

        /**
         * Decodes a BotModelMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotModelMetadata & BotMetadata.BotModelMetadata.$Shape} BotModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotModelMetadata & BotMetadata.BotModelMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotModelMetadata;

        /**
         * Creates a plain object from a BotModelMetadata message. Also converts values to other types if specified.
         * @param message BotModelMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            modelType?: (BotMetadata.BotModelMetadata.ModelType|null);

            /** BotModelMetadata premiumModelStatus */
            premiumModelStatus?: (BotMetadata.BotModelMetadata.PremiumModelStatus|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotModelMetadata. */
        type $Shape = BotMetadata.BotModelMetadata.$Properties;

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
     * @deprecated Use BotMetadata.BotReminderMetadata.$Properties instead.
     */
    interface IBotReminderMetadata extends BotMetadata.BotReminderMetadata.$Properties {
    }

    /** Represents a BotReminderMetadata. */
    class BotReminderMetadata {

        /**
         * Constructs a new BotReminderMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotReminderMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotReminderMetadata requestMessageKey. */
        requestMessageKey?: (Protocol.MessageKey.$Properties|null);

        /** BotReminderMetadata action. */
        action?: (BotMetadata.BotReminderMetadata.ReminderAction|null);

        /** BotReminderMetadata name. */
        name?: (string|null);

        /** BotReminderMetadata nextTriggerTimestamp. */
        nextTriggerTimestamp?: (number|Long|null);

        /** BotReminderMetadata frequency. */
        frequency?: (BotMetadata.BotReminderMetadata.ReminderFrequency|null);

        /**
         * Creates a new BotReminderMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotReminderMetadata instance
         */
        static create(properties: BotMetadata.BotReminderMetadata.$Shape): BotMetadata.BotReminderMetadata & BotMetadata.BotReminderMetadata.$Shape;
        static create(properties?: BotMetadata.BotReminderMetadata.$Properties): BotMetadata.BotReminderMetadata;

        /**
         * Encodes the specified BotReminderMetadata message. Does not implicitly {@link BotMetadata.BotReminderMetadata.verify|verify} messages.
         * @param message BotReminderMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotReminderMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotReminderMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotReminderMetadata.verify|verify} messages.
         * @param message BotReminderMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotReminderMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotReminderMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotReminderMetadata & BotMetadata.BotReminderMetadata.$Shape} BotReminderMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotReminderMetadata & BotMetadata.BotReminderMetadata.$Shape;

        /**
         * Decodes a BotReminderMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotReminderMetadata & BotMetadata.BotReminderMetadata.$Shape} BotReminderMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotReminderMetadata & BotMetadata.BotReminderMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotReminderMetadata;

        /**
         * Creates a plain object from a BotReminderMetadata message. Also converts values to other types if specified.
         * @param message BotReminderMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotReminderMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            action?: (BotMetadata.BotReminderMetadata.ReminderAction|null);

            /** BotReminderMetadata name */
            name?: (string|null);

            /** BotReminderMetadata nextTriggerTimestamp */
            nextTriggerTimestamp?: (number|Long|null);

            /** BotReminderMetadata frequency */
            frequency?: (BotMetadata.BotReminderMetadata.ReminderFrequency|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotReminderMetadata. */
        type $Shape = BotMetadata.BotReminderMetadata.$Properties;

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
     * @deprecated Use BotMetadata.BotMemuMetadata.$Properties instead.
     */
    interface IBotMemuMetadata extends BotMetadata.BotMemuMetadata.$Properties {
    }

    /** Represents a BotMemuMetadata. */
    class BotMemuMetadata {

        /**
         * Constructs a new BotMemuMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotMemuMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMemuMetadata faceImages. */
        faceImages: BotMetadata.BotMediaMetadata.$Properties[];

        /**
         * Creates a new BotMemuMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMemuMetadata instance
         */
        static create(properties: BotMetadata.BotMemuMetadata.$Shape): BotMetadata.BotMemuMetadata & BotMetadata.BotMemuMetadata.$Shape;
        static create(properties?: BotMetadata.BotMemuMetadata.$Properties): BotMetadata.BotMemuMetadata;

        /**
         * Encodes the specified BotMemuMetadata message. Does not implicitly {@link BotMetadata.BotMemuMetadata.verify|verify} messages.
         * @param message BotMemuMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotMemuMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMemuMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMemuMetadata.verify|verify} messages.
         * @param message BotMemuMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotMemuMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMemuMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotMemuMetadata & BotMetadata.BotMemuMetadata.$Shape} BotMemuMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotMemuMetadata & BotMetadata.BotMemuMetadata.$Shape;

        /**
         * Decodes a BotMemuMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMemuMetadata & BotMetadata.BotMemuMetadata.$Shape} BotMemuMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotMemuMetadata & BotMetadata.BotMemuMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotMemuMetadata;

        /**
         * Creates a plain object from a BotMemuMetadata message. Also converts values to other types if specified.
         * @param message BotMemuMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotMemuMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            faceImages?: (BotMetadata.BotMediaMetadata.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMemuMetadata. */
        type $Shape = BotMetadata.BotMemuMetadata.$Properties;
    }

    /**
     * Properties of a BotMediaMetadata.
     * @deprecated Use BotMetadata.BotMediaMetadata.$Properties instead.
     */
    interface IBotMediaMetadata extends BotMetadata.BotMediaMetadata.$Properties {
    }

    /** Represents a BotMediaMetadata. */
    class BotMediaMetadata {

        /**
         * Constructs a new BotMediaMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotMediaMetadata.$Properties);

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
        orientationType?: (BotMetadata.BotMediaMetadata.OrientationType|null);

        /**
         * Creates a new BotMediaMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMediaMetadata instance
         */
        static create(properties: BotMetadata.BotMediaMetadata.$Shape): BotMetadata.BotMediaMetadata & BotMetadata.BotMediaMetadata.$Shape;
        static create(properties?: BotMetadata.BotMediaMetadata.$Properties): BotMetadata.BotMediaMetadata;

        /**
         * Encodes the specified BotMediaMetadata message. Does not implicitly {@link BotMetadata.BotMediaMetadata.verify|verify} messages.
         * @param message BotMediaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotMediaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMediaMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMediaMetadata.verify|verify} messages.
         * @param message BotMediaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotMediaMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMediaMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotMediaMetadata & BotMetadata.BotMediaMetadata.$Shape} BotMediaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotMediaMetadata & BotMetadata.BotMediaMetadata.$Shape;

        /**
         * Decodes a BotMediaMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMediaMetadata & BotMetadata.BotMediaMetadata.$Shape} BotMediaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotMediaMetadata & BotMetadata.BotMediaMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotMediaMetadata;

        /**
         * Creates a plain object from a BotMediaMetadata message. Also converts values to other types if specified.
         * @param message BotMediaMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotMediaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            orientationType?: (BotMetadata.BotMediaMetadata.OrientationType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMediaMetadata. */
        type $Shape = BotMetadata.BotMediaMetadata.$Properties;

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
     * @deprecated Use BotMetadata.BotSessionMetadata.$Properties instead.
     */
    interface IBotSessionMetadata extends BotMetadata.BotSessionMetadata.$Properties {
    }

    /** Represents a BotSessionMetadata. */
    class BotSessionMetadata {

        /**
         * Constructs a new BotSessionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotSessionMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotSessionMetadata sessionId. */
        sessionId?: (string|null);

        /** BotSessionMetadata sessionSource. */
        sessionSource?: (BotMetadata.BotSessionSource|null);

        /**
         * Creates a new BotSessionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSessionMetadata instance
         */
        static create(properties: BotMetadata.BotSessionMetadata.$Shape): BotMetadata.BotSessionMetadata & BotMetadata.BotSessionMetadata.$Shape;
        static create(properties?: BotMetadata.BotSessionMetadata.$Properties): BotMetadata.BotSessionMetadata;

        /**
         * Encodes the specified BotSessionMetadata message. Does not implicitly {@link BotMetadata.BotSessionMetadata.verify|verify} messages.
         * @param message BotSessionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotSessionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSessionMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotSessionMetadata.verify|verify} messages.
         * @param message BotSessionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotSessionMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSessionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotSessionMetadata & BotMetadata.BotSessionMetadata.$Shape} BotSessionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotSessionMetadata & BotMetadata.BotSessionMetadata.$Shape;

        /**
         * Decodes a BotSessionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotSessionMetadata & BotMetadata.BotSessionMetadata.$Shape} BotSessionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotSessionMetadata & BotMetadata.BotSessionMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotSessionMetadata;

        /**
         * Creates a plain object from a BotSessionMetadata message. Also converts values to other types if specified.
         * @param message BotSessionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotSessionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            sessionSource?: (BotMetadata.BotSessionSource|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotSessionMetadata. */
        type $Shape = BotMetadata.BotSessionMetadata.$Properties;
    }

    /**
     * Properties of a BotMetricsMetadata.
     * @deprecated Use BotMetadata.BotMetricsMetadata.$Properties instead.
     */
    interface IBotMetricsMetadata extends BotMetadata.BotMetricsMetadata.$Properties {
    }

    /** Represents a BotMetricsMetadata. */
    class BotMetricsMetadata {

        /**
         * Constructs a new BotMetricsMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotMetricsMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMetricsMetadata destinationId. */
        destinationId?: (string|null);

        /** BotMetricsMetadata destinationEntryPoint. */
        destinationEntryPoint?: (BotMetadata.BotMetricsEntryPoint|null);

        /** BotMetricsMetadata threadOrigin. */
        threadOrigin?: (BotMetadata.BotMetricsThreadEntryPoint|null);

        /**
         * Creates a new BotMetricsMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMetricsMetadata instance
         */
        static create(properties: BotMetadata.BotMetricsMetadata.$Shape): BotMetadata.BotMetricsMetadata & BotMetadata.BotMetricsMetadata.$Shape;
        static create(properties?: BotMetadata.BotMetricsMetadata.$Properties): BotMetadata.BotMetricsMetadata;

        /**
         * Encodes the specified BotMetricsMetadata message. Does not implicitly {@link BotMetadata.BotMetricsMetadata.verify|verify} messages.
         * @param message BotMetricsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotMetricsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMetricsMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMetricsMetadata.verify|verify} messages.
         * @param message BotMetricsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotMetricsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMetricsMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotMetricsMetadata & BotMetadata.BotMetricsMetadata.$Shape} BotMetricsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotMetricsMetadata & BotMetadata.BotMetricsMetadata.$Shape;

        /**
         * Decodes a BotMetricsMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMetricsMetadata & BotMetadata.BotMetricsMetadata.$Shape} BotMetricsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotMetricsMetadata & BotMetadata.BotMetricsMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotMetricsMetadata;

        /**
         * Creates a plain object from a BotMetricsMetadata message. Also converts values to other types if specified.
         * @param message BotMetricsMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotMetricsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            destinationEntryPoint?: (BotMetadata.BotMetricsEntryPoint|null);

            /** BotMetricsMetadata threadOrigin */
            threadOrigin?: (BotMetadata.BotMetricsThreadEntryPoint|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMetricsMetadata. */
        type $Shape = BotMetadata.BotMetricsMetadata.$Properties;
    }

    /**
     * Properties of a BotRenderingMetadata.
     * @deprecated Use BotMetadata.BotRenderingMetadata.$Properties instead.
     */
    interface IBotRenderingMetadata extends BotMetadata.BotRenderingMetadata.$Properties {
    }

    /** Represents a BotRenderingMetadata. */
    class BotRenderingMetadata {

        /**
         * Constructs a new BotRenderingMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotRenderingMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotRenderingMetadata keywords. */
        keywords: BotMetadata.BotRenderingMetadata.Keyword.$Properties[];

        /**
         * Creates a new BotRenderingMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotRenderingMetadata instance
         */
        static create(properties: BotMetadata.BotRenderingMetadata.$Shape): BotMetadata.BotRenderingMetadata & BotMetadata.BotRenderingMetadata.$Shape;
        static create(properties?: BotMetadata.BotRenderingMetadata.$Properties): BotMetadata.BotRenderingMetadata;

        /**
         * Encodes the specified BotRenderingMetadata message. Does not implicitly {@link BotMetadata.BotRenderingMetadata.verify|verify} messages.
         * @param message BotRenderingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotRenderingMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotRenderingMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotRenderingMetadata.verify|verify} messages.
         * @param message BotRenderingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotRenderingMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotRenderingMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotRenderingMetadata & BotMetadata.BotRenderingMetadata.$Shape} BotRenderingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotRenderingMetadata & BotMetadata.BotRenderingMetadata.$Shape;

        /**
         * Decodes a BotRenderingMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotRenderingMetadata & BotMetadata.BotRenderingMetadata.$Shape} BotRenderingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotRenderingMetadata & BotMetadata.BotRenderingMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotRenderingMetadata;

        /**
         * Creates a plain object from a BotRenderingMetadata message. Also converts values to other types if specified.
         * @param message BotRenderingMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotRenderingMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            keywords?: (BotMetadata.BotRenderingMetadata.Keyword.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotRenderingMetadata. */
        type $Shape = BotMetadata.BotRenderingMetadata.$Properties;

        /**
         * Properties of a Keyword.
         * @deprecated Use BotMetadata.BotRenderingMetadata.Keyword.$Properties instead.
         */
        interface IKeyword extends BotMetadata.BotRenderingMetadata.Keyword.$Properties {
        }

        /** Represents a Keyword. */
        class Keyword {

            /**
             * Constructs a new Keyword.
             * @param [properties] Properties to set
             */
            constructor(properties?: BotMetadata.BotRenderingMetadata.Keyword.$Properties);

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
            static create(properties: BotMetadata.BotRenderingMetadata.Keyword.$Shape): BotMetadata.BotRenderingMetadata.Keyword & BotMetadata.BotRenderingMetadata.Keyword.$Shape;
            static create(properties?: BotMetadata.BotRenderingMetadata.Keyword.$Properties): BotMetadata.BotRenderingMetadata.Keyword;

            /**
             * Encodes the specified Keyword message. Does not implicitly {@link BotMetadata.BotRenderingMetadata.Keyword.verify|verify} messages.
             * @param message Keyword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BotMetadata.BotRenderingMetadata.Keyword.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Keyword message, length delimited. Does not implicitly {@link BotMetadata.BotRenderingMetadata.Keyword.verify|verify} messages.
             * @param message Keyword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BotMetadata.BotRenderingMetadata.Keyword.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Keyword message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BotMetadata.BotRenderingMetadata.Keyword & BotMetadata.BotRenderingMetadata.Keyword.$Shape} Keyword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotRenderingMetadata.Keyword & BotMetadata.BotRenderingMetadata.Keyword.$Shape;

            /**
             * Decodes a Keyword message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BotMetadata.BotRenderingMetadata.Keyword & BotMetadata.BotRenderingMetadata.Keyword.$Shape} Keyword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotRenderingMetadata.Keyword & BotMetadata.BotRenderingMetadata.Keyword.$Shape;

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
            static fromObject(object: { [k: string]: any }): BotMetadata.BotRenderingMetadata.Keyword;

            /**
             * Creates a plain object from a Keyword message. Also converts values to other types if specified.
             * @param message Keyword
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BotMetadata.BotRenderingMetadata.Keyword, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            type $Shape = BotMetadata.BotRenderingMetadata.Keyword.$Properties;
        }
    }

    /**
     * Properties of a BotPromotionMessageMetadata.
     * @deprecated Use BotMetadata.BotPromotionMessageMetadata.$Properties instead.
     */
    interface IBotPromotionMessageMetadata extends BotMetadata.BotPromotionMessageMetadata.$Properties {
    }

    /** Represents a BotPromotionMessageMetadata. */
    class BotPromotionMessageMetadata {

        /**
         * Constructs a new BotPromotionMessageMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotPromotionMessageMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotPromotionMessageMetadata promotionType. */
        promotionType?: (BotMetadata.BotPromotionMessageMetadata.BotPromotionType|null);

        /** BotPromotionMessageMetadata buttonTitle. */
        buttonTitle?: (string|null);

        /**
         * Creates a new BotPromotionMessageMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPromotionMessageMetadata instance
         */
        static create(properties: BotMetadata.BotPromotionMessageMetadata.$Shape): BotMetadata.BotPromotionMessageMetadata & BotMetadata.BotPromotionMessageMetadata.$Shape;
        static create(properties?: BotMetadata.BotPromotionMessageMetadata.$Properties): BotMetadata.BotPromotionMessageMetadata;

        /**
         * Encodes the specified BotPromotionMessageMetadata message. Does not implicitly {@link BotMetadata.BotPromotionMessageMetadata.verify|verify} messages.
         * @param message BotPromotionMessageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotPromotionMessageMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPromotionMessageMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotPromotionMessageMetadata.verify|verify} messages.
         * @param message BotPromotionMessageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotPromotionMessageMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPromotionMessageMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotPromotionMessageMetadata & BotMetadata.BotPromotionMessageMetadata.$Shape} BotPromotionMessageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotPromotionMessageMetadata & BotMetadata.BotPromotionMessageMetadata.$Shape;

        /**
         * Decodes a BotPromotionMessageMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotPromotionMessageMetadata & BotMetadata.BotPromotionMessageMetadata.$Shape} BotPromotionMessageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotPromotionMessageMetadata & BotMetadata.BotPromotionMessageMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotPromotionMessageMetadata;

        /**
         * Creates a plain object from a BotPromotionMessageMetadata message. Also converts values to other types if specified.
         * @param message BotPromotionMessageMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotPromotionMessageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            promotionType?: (BotMetadata.BotPromotionMessageMetadata.BotPromotionType|null);

            /** BotPromotionMessageMetadata buttonTitle */
            buttonTitle?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotPromotionMessageMetadata. */
        type $Shape = BotMetadata.BotPromotionMessageMetadata.$Properties;

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
     * @deprecated Use BotMetadata.BotSignatureVerificationUseCaseProof.$Properties instead.
     */
    interface IBotSignatureVerificationUseCaseProof extends BotMetadata.BotSignatureVerificationUseCaseProof.$Properties {
    }

    /** Represents a BotSignatureVerificationUseCaseProof. */
    class BotSignatureVerificationUseCaseProof {

        /**
         * Constructs a new BotSignatureVerificationUseCaseProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotSignatureVerificationUseCaseProof.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotSignatureVerificationUseCaseProof version. */
        version?: (number|null);

        /** BotSignatureVerificationUseCaseProof useCase. */
        useCase?: (BotMetadata.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null);

        /** BotSignatureVerificationUseCaseProof signature. */
        signature?: (Uint8Array|null);

        /** BotSignatureVerificationUseCaseProof certificateChain. */
        certificateChain?: (Uint8Array|null);

        /**
         * Creates a new BotSignatureVerificationUseCaseProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSignatureVerificationUseCaseProof instance
         */
        static create(properties: BotMetadata.BotSignatureVerificationUseCaseProof.$Shape): BotMetadata.BotSignatureVerificationUseCaseProof & BotMetadata.BotSignatureVerificationUseCaseProof.$Shape;
        static create(properties?: BotMetadata.BotSignatureVerificationUseCaseProof.$Properties): BotMetadata.BotSignatureVerificationUseCaseProof;

        /**
         * Encodes the specified BotSignatureVerificationUseCaseProof message. Does not implicitly {@link BotMetadata.BotSignatureVerificationUseCaseProof.verify|verify} messages.
         * @param message BotSignatureVerificationUseCaseProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotSignatureVerificationUseCaseProof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSignatureVerificationUseCaseProof message, length delimited. Does not implicitly {@link BotMetadata.BotSignatureVerificationUseCaseProof.verify|verify} messages.
         * @param message BotSignatureVerificationUseCaseProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotSignatureVerificationUseCaseProof.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSignatureVerificationUseCaseProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotSignatureVerificationUseCaseProof & BotMetadata.BotSignatureVerificationUseCaseProof.$Shape} BotSignatureVerificationUseCaseProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotSignatureVerificationUseCaseProof & BotMetadata.BotSignatureVerificationUseCaseProof.$Shape;

        /**
         * Decodes a BotSignatureVerificationUseCaseProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotSignatureVerificationUseCaseProof & BotMetadata.BotSignatureVerificationUseCaseProof.$Shape} BotSignatureVerificationUseCaseProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotSignatureVerificationUseCaseProof & BotMetadata.BotSignatureVerificationUseCaseProof.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotSignatureVerificationUseCaseProof;

        /**
         * Creates a plain object from a BotSignatureVerificationUseCaseProof message. Also converts values to other types if specified.
         * @param message BotSignatureVerificationUseCaseProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotSignatureVerificationUseCaseProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            useCase?: (BotMetadata.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null);

            /** BotSignatureVerificationUseCaseProof signature */
            signature?: (Uint8Array|null);

            /** BotSignatureVerificationUseCaseProof certificateChain */
            certificateChain?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotSignatureVerificationUseCaseProof. */
        type $Shape = BotMetadata.BotSignatureVerificationUseCaseProof.$Properties;

        /** BotSignatureUseCase enum. */
        enum BotSignatureUseCase {

            /** WA_BOT_MSG value */
            WA_BOT_MSG = 0
        }
    }

    /**
     * Properties of a BotSignatureVerificationMetadata.
     * @deprecated Use BotMetadata.BotSignatureVerificationMetadata.$Properties instead.
     */
    interface IBotSignatureVerificationMetadata extends BotMetadata.BotSignatureVerificationMetadata.$Properties {
    }

    /** Represents a BotSignatureVerificationMetadata. */
    class BotSignatureVerificationMetadata {

        /**
         * Constructs a new BotSignatureVerificationMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotSignatureVerificationMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotSignatureVerificationMetadata proofs. */
        proofs: BotMetadata.BotSignatureVerificationUseCaseProof.$Properties[];

        /**
         * Creates a new BotSignatureVerificationMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSignatureVerificationMetadata instance
         */
        static create(properties: BotMetadata.BotSignatureVerificationMetadata.$Shape): BotMetadata.BotSignatureVerificationMetadata & BotMetadata.BotSignatureVerificationMetadata.$Shape;
        static create(properties?: BotMetadata.BotSignatureVerificationMetadata.$Properties): BotMetadata.BotSignatureVerificationMetadata;

        /**
         * Encodes the specified BotSignatureVerificationMetadata message. Does not implicitly {@link BotMetadata.BotSignatureVerificationMetadata.verify|verify} messages.
         * @param message BotSignatureVerificationMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotSignatureVerificationMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSignatureVerificationMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotSignatureVerificationMetadata.verify|verify} messages.
         * @param message BotSignatureVerificationMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotSignatureVerificationMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSignatureVerificationMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotSignatureVerificationMetadata & BotMetadata.BotSignatureVerificationMetadata.$Shape} BotSignatureVerificationMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotSignatureVerificationMetadata & BotMetadata.BotSignatureVerificationMetadata.$Shape;

        /**
         * Decodes a BotSignatureVerificationMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotSignatureVerificationMetadata & BotMetadata.BotSignatureVerificationMetadata.$Shape} BotSignatureVerificationMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotSignatureVerificationMetadata & BotMetadata.BotSignatureVerificationMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotSignatureVerificationMetadata;

        /**
         * Creates a plain object from a BotSignatureVerificationMetadata message. Also converts values to other types if specified.
         * @param message BotSignatureVerificationMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotSignatureVerificationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            proofs?: (BotMetadata.BotSignatureVerificationUseCaseProof.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotSignatureVerificationMetadata. */
        type $Shape = BotMetadata.BotSignatureVerificationMetadata.$Properties;
    }

    /**
     * Properties of a BotMemoryFact.
     * @deprecated Use BotMetadata.BotMemoryFact.$Properties instead.
     */
    interface IBotMemoryFact extends BotMetadata.BotMemoryFact.$Properties {
    }

    /** Represents a BotMemoryFact. */
    class BotMemoryFact {

        /**
         * Constructs a new BotMemoryFact.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotMemoryFact.$Properties);

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
        static create(properties: BotMetadata.BotMemoryFact.$Shape): BotMetadata.BotMemoryFact & BotMetadata.BotMemoryFact.$Shape;
        static create(properties?: BotMetadata.BotMemoryFact.$Properties): BotMetadata.BotMemoryFact;

        /**
         * Encodes the specified BotMemoryFact message. Does not implicitly {@link BotMetadata.BotMemoryFact.verify|verify} messages.
         * @param message BotMemoryFact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotMemoryFact.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMemoryFact message, length delimited. Does not implicitly {@link BotMetadata.BotMemoryFact.verify|verify} messages.
         * @param message BotMemoryFact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotMemoryFact.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMemoryFact message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotMemoryFact & BotMetadata.BotMemoryFact.$Shape} BotMemoryFact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotMemoryFact & BotMetadata.BotMemoryFact.$Shape;

        /**
         * Decodes a BotMemoryFact message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMemoryFact & BotMetadata.BotMemoryFact.$Shape} BotMemoryFact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotMemoryFact & BotMetadata.BotMemoryFact.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotMemoryFact;

        /**
         * Creates a plain object from a BotMemoryFact message. Also converts values to other types if specified.
         * @param message BotMemoryFact
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotMemoryFact, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        type $Shape = BotMetadata.BotMemoryFact.$Properties;
    }

    /**
     * Properties of a BotMemoryMetadata.
     * @deprecated Use BotMetadata.BotMemoryMetadata.$Properties instead.
     */
    interface IBotMemoryMetadata extends BotMetadata.BotMemoryMetadata.$Properties {
    }

    /** Represents a BotMemoryMetadata. */
    class BotMemoryMetadata {

        /**
         * Constructs a new BotMemoryMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotMemoryMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotMemoryMetadata addedFacts. */
        addedFacts: BotMetadata.BotMemoryFact.$Properties[];

        /** BotMemoryMetadata removedFacts. */
        removedFacts: BotMetadata.BotMemoryFact.$Properties[];

        /** BotMemoryMetadata disclaimer. */
        disclaimer?: (string|null);

        /**
         * Creates a new BotMemoryMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMemoryMetadata instance
         */
        static create(properties: BotMetadata.BotMemoryMetadata.$Shape): BotMetadata.BotMemoryMetadata & BotMetadata.BotMemoryMetadata.$Shape;
        static create(properties?: BotMetadata.BotMemoryMetadata.$Properties): BotMetadata.BotMemoryMetadata;

        /**
         * Encodes the specified BotMemoryMetadata message. Does not implicitly {@link BotMetadata.BotMemoryMetadata.verify|verify} messages.
         * @param message BotMemoryMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotMemoryMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMemoryMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMemoryMetadata.verify|verify} messages.
         * @param message BotMemoryMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotMemoryMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMemoryMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotMemoryMetadata & BotMetadata.BotMemoryMetadata.$Shape} BotMemoryMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotMemoryMetadata & BotMetadata.BotMemoryMetadata.$Shape;

        /**
         * Decodes a BotMemoryMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMemoryMetadata & BotMetadata.BotMemoryMetadata.$Shape} BotMemoryMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotMemoryMetadata & BotMetadata.BotMemoryMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotMemoryMetadata;

        /**
         * Creates a plain object from a BotMemoryMetadata message. Also converts values to other types if specified.
         * @param message BotMemoryMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotMemoryMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            addedFacts?: (BotMetadata.BotMemoryFact.$Properties[]|null);

            /** BotMemoryMetadata removedFacts */
            removedFacts?: (BotMetadata.BotMemoryFact.$Properties[]|null);

            /** BotMemoryMetadata disclaimer */
            disclaimer?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotMemoryMetadata. */
        type $Shape = BotMetadata.BotMemoryMetadata.$Properties;
    }

    /**
     * Properties of a BotLinkedAccount.
     * @deprecated Use BotMetadata.BotLinkedAccount.$Properties instead.
     */
    interface IBotLinkedAccount extends BotMetadata.BotLinkedAccount.$Properties {
    }

    /** Represents a BotLinkedAccount. */
    class BotLinkedAccount {

        /**
         * Constructs a new BotLinkedAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotLinkedAccount.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotLinkedAccount type. */
        type?: (BotMetadata.BotLinkedAccount.BotLinkedAccountType|null);

        /**
         * Creates a new BotLinkedAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotLinkedAccount instance
         */
        static create(properties: BotMetadata.BotLinkedAccount.$Shape): BotMetadata.BotLinkedAccount & BotMetadata.BotLinkedAccount.$Shape;
        static create(properties?: BotMetadata.BotLinkedAccount.$Properties): BotMetadata.BotLinkedAccount;

        /**
         * Encodes the specified BotLinkedAccount message. Does not implicitly {@link BotMetadata.BotLinkedAccount.verify|verify} messages.
         * @param message BotLinkedAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotLinkedAccount.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotLinkedAccount message, length delimited. Does not implicitly {@link BotMetadata.BotLinkedAccount.verify|verify} messages.
         * @param message BotLinkedAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotLinkedAccount.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotLinkedAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotLinkedAccount & BotMetadata.BotLinkedAccount.$Shape} BotLinkedAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotLinkedAccount & BotMetadata.BotLinkedAccount.$Shape;

        /**
         * Decodes a BotLinkedAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotLinkedAccount & BotMetadata.BotLinkedAccount.$Shape} BotLinkedAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotLinkedAccount & BotMetadata.BotLinkedAccount.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotLinkedAccount;

        /**
         * Creates a plain object from a BotLinkedAccount message. Also converts values to other types if specified.
         * @param message BotLinkedAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotLinkedAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            type?: (BotMetadata.BotLinkedAccount.BotLinkedAccountType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotLinkedAccount. */
        type $Shape = BotMetadata.BotLinkedAccount.$Properties;

        /** BotLinkedAccountType enum. */
        enum BotLinkedAccountType {

            /** BOT_LINKED_ACCOUNT_TYPE_1P value */
            BOT_LINKED_ACCOUNT_TYPE_1P = 0
        }
    }

    /**
     * Properties of a BotLinkedAccountsMetadata.
     * @deprecated Use BotMetadata.BotLinkedAccountsMetadata.$Properties instead.
     */
    interface IBotLinkedAccountsMetadata extends BotMetadata.BotLinkedAccountsMetadata.$Properties {
    }

    /** Represents a BotLinkedAccountsMetadata. */
    class BotLinkedAccountsMetadata {

        /**
         * Constructs a new BotLinkedAccountsMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotLinkedAccountsMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotLinkedAccountsMetadata accounts. */
        accounts: BotMetadata.BotLinkedAccount.$Properties[];

        /** BotLinkedAccountsMetadata acAuthTokens. */
        acAuthTokens?: (Uint8Array|null);

        /** BotLinkedAccountsMetadata acErrorCode. */
        acErrorCode?: (number|null);

        /**
         * Creates a new BotLinkedAccountsMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotLinkedAccountsMetadata instance
         */
        static create(properties: BotMetadata.BotLinkedAccountsMetadata.$Shape): BotMetadata.BotLinkedAccountsMetadata & BotMetadata.BotLinkedAccountsMetadata.$Shape;
        static create(properties?: BotMetadata.BotLinkedAccountsMetadata.$Properties): BotMetadata.BotLinkedAccountsMetadata;

        /**
         * Encodes the specified BotLinkedAccountsMetadata message. Does not implicitly {@link BotMetadata.BotLinkedAccountsMetadata.verify|verify} messages.
         * @param message BotLinkedAccountsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotLinkedAccountsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotLinkedAccountsMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotLinkedAccountsMetadata.verify|verify} messages.
         * @param message BotLinkedAccountsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotLinkedAccountsMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotLinkedAccountsMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotLinkedAccountsMetadata & BotMetadata.BotLinkedAccountsMetadata.$Shape} BotLinkedAccountsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotLinkedAccountsMetadata & BotMetadata.BotLinkedAccountsMetadata.$Shape;

        /**
         * Decodes a BotLinkedAccountsMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotLinkedAccountsMetadata & BotMetadata.BotLinkedAccountsMetadata.$Shape} BotLinkedAccountsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotLinkedAccountsMetadata & BotMetadata.BotLinkedAccountsMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotLinkedAccountsMetadata;

        /**
         * Creates a plain object from a BotLinkedAccountsMetadata message. Also converts values to other types if specified.
         * @param message BotLinkedAccountsMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotLinkedAccountsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            accounts?: (BotMetadata.BotLinkedAccount.$Properties[]|null);

            /** BotLinkedAccountsMetadata acAuthTokens */
            acAuthTokens?: (Uint8Array|null);

            /** BotLinkedAccountsMetadata acErrorCode */
            acErrorCode?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotLinkedAccountsMetadata. */
        type $Shape = BotMetadata.BotLinkedAccountsMetadata.$Properties;
    }

    /**
     * Properties of a BotPromptSuggestion.
     * @deprecated Use BotMetadata.BotPromptSuggestion.$Properties instead.
     */
    interface IBotPromptSuggestion extends BotMetadata.BotPromptSuggestion.$Properties {
    }

    /** Represents a BotPromptSuggestion. */
    class BotPromptSuggestion {

        /**
         * Constructs a new BotPromptSuggestion.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotPromptSuggestion.$Properties);

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
        static create(properties: BotMetadata.BotPromptSuggestion.$Shape): BotMetadata.BotPromptSuggestion & BotMetadata.BotPromptSuggestion.$Shape;
        static create(properties?: BotMetadata.BotPromptSuggestion.$Properties): BotMetadata.BotPromptSuggestion;

        /**
         * Encodes the specified BotPromptSuggestion message. Does not implicitly {@link BotMetadata.BotPromptSuggestion.verify|verify} messages.
         * @param message BotPromptSuggestion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotPromptSuggestion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPromptSuggestion message, length delimited. Does not implicitly {@link BotMetadata.BotPromptSuggestion.verify|verify} messages.
         * @param message BotPromptSuggestion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotPromptSuggestion.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPromptSuggestion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotPromptSuggestion & BotMetadata.BotPromptSuggestion.$Shape} BotPromptSuggestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotPromptSuggestion & BotMetadata.BotPromptSuggestion.$Shape;

        /**
         * Decodes a BotPromptSuggestion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotPromptSuggestion & BotMetadata.BotPromptSuggestion.$Shape} BotPromptSuggestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotPromptSuggestion & BotMetadata.BotPromptSuggestion.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotPromptSuggestion;

        /**
         * Creates a plain object from a BotPromptSuggestion message. Also converts values to other types if specified.
         * @param message BotPromptSuggestion
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotPromptSuggestion, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        type $Shape = BotMetadata.BotPromptSuggestion.$Properties;
    }

    /**
     * Properties of a BotPromptSuggestions.
     * @deprecated Use BotMetadata.BotPromptSuggestions.$Properties instead.
     */
    interface IBotPromptSuggestions extends BotMetadata.BotPromptSuggestions.$Properties {
    }

    /** Represents a BotPromptSuggestions. */
    class BotPromptSuggestions {

        /**
         * Constructs a new BotPromptSuggestions.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotPromptSuggestions.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotPromptSuggestions suggestions. */
        suggestions: BotMetadata.BotPromptSuggestion.$Properties[];

        /**
         * Creates a new BotPromptSuggestions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPromptSuggestions instance
         */
        static create(properties: BotMetadata.BotPromptSuggestions.$Shape): BotMetadata.BotPromptSuggestions & BotMetadata.BotPromptSuggestions.$Shape;
        static create(properties?: BotMetadata.BotPromptSuggestions.$Properties): BotMetadata.BotPromptSuggestions;

        /**
         * Encodes the specified BotPromptSuggestions message. Does not implicitly {@link BotMetadata.BotPromptSuggestions.verify|verify} messages.
         * @param message BotPromptSuggestions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotPromptSuggestions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPromptSuggestions message, length delimited. Does not implicitly {@link BotMetadata.BotPromptSuggestions.verify|verify} messages.
         * @param message BotPromptSuggestions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotPromptSuggestions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPromptSuggestions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotPromptSuggestions & BotMetadata.BotPromptSuggestions.$Shape} BotPromptSuggestions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotPromptSuggestions & BotMetadata.BotPromptSuggestions.$Shape;

        /**
         * Decodes a BotPromptSuggestions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotPromptSuggestions & BotMetadata.BotPromptSuggestions.$Shape} BotPromptSuggestions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotPromptSuggestions & BotMetadata.BotPromptSuggestions.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotPromptSuggestions;

        /**
         * Creates a plain object from a BotPromptSuggestions message. Also converts values to other types if specified.
         * @param message BotPromptSuggestions
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotPromptSuggestions, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            suggestions?: (BotMetadata.BotPromptSuggestion.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotPromptSuggestions. */
        type $Shape = BotMetadata.BotPromptSuggestions.$Properties;
    }

    /**
     * Properties of a BotSuggestedPromptMetadata.
     * @deprecated Use BotMetadata.BotSuggestedPromptMetadata.$Properties instead.
     */
    interface IBotSuggestedPromptMetadata extends BotMetadata.BotSuggestedPromptMetadata.$Properties {
    }

    /** Represents a BotSuggestedPromptMetadata. */
    class BotSuggestedPromptMetadata {

        /**
         * Constructs a new BotSuggestedPromptMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotSuggestedPromptMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotSuggestedPromptMetadata suggestedPrompts. */
        suggestedPrompts: string[];

        /** BotSuggestedPromptMetadata selectedPromptIndex. */
        selectedPromptIndex?: (number|null);

        /** BotSuggestedPromptMetadata promptSuggestions. */
        promptSuggestions?: (BotMetadata.BotPromptSuggestions.$Properties|null);

        /** BotSuggestedPromptMetadata selectedPromptId. */
        selectedPromptId?: (string|null);

        /**
         * Creates a new BotSuggestedPromptMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSuggestedPromptMetadata instance
         */
        static create(properties: BotMetadata.BotSuggestedPromptMetadata.$Shape): BotMetadata.BotSuggestedPromptMetadata & BotMetadata.BotSuggestedPromptMetadata.$Shape;
        static create(properties?: BotMetadata.BotSuggestedPromptMetadata.$Properties): BotMetadata.BotSuggestedPromptMetadata;

        /**
         * Encodes the specified BotSuggestedPromptMetadata message. Does not implicitly {@link BotMetadata.BotSuggestedPromptMetadata.verify|verify} messages.
         * @param message BotSuggestedPromptMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotSuggestedPromptMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSuggestedPromptMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotSuggestedPromptMetadata.verify|verify} messages.
         * @param message BotSuggestedPromptMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotSuggestedPromptMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotSuggestedPromptMetadata & BotMetadata.BotSuggestedPromptMetadata.$Shape} BotSuggestedPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotSuggestedPromptMetadata & BotMetadata.BotSuggestedPromptMetadata.$Shape;

        /**
         * Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotSuggestedPromptMetadata & BotMetadata.BotSuggestedPromptMetadata.$Shape} BotSuggestedPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotSuggestedPromptMetadata & BotMetadata.BotSuggestedPromptMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotSuggestedPromptMetadata;

        /**
         * Creates a plain object from a BotSuggestedPromptMetadata message. Also converts values to other types if specified.
         * @param message BotSuggestedPromptMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotSuggestedPromptMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            promptSuggestions?: (BotMetadata.BotPromptSuggestions.$Properties|null);

            /** BotSuggestedPromptMetadata selectedPromptId */
            selectedPromptId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotSuggestedPromptMetadata. */
        type $Shape = BotMetadata.BotSuggestedPromptMetadata.$Properties;
    }

    /**
     * Properties of a BotPluginMetadata.
     * @deprecated Use BotMetadata.BotPluginMetadata.$Properties instead.
     */
    interface IBotPluginMetadata extends BotMetadata.BotPluginMetadata.$Properties {
    }

    /** Represents a BotPluginMetadata. */
    class BotPluginMetadata {

        /**
         * Constructs a new BotPluginMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotPluginMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotPluginMetadata provider. */
        provider?: (BotMetadata.BotPluginMetadata.SearchProvider|null);

        /** BotPluginMetadata pluginType. */
        pluginType?: (BotMetadata.BotPluginMetadata.PluginType|null);

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
        deprecatedField?: (BotMetadata.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata parentPluginType. */
        parentPluginType?: (BotMetadata.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata faviconCdnUrl. */
        faviconCdnUrl?: (string|null);

        /**
         * Creates a new BotPluginMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPluginMetadata instance
         */
        static create(properties: BotMetadata.BotPluginMetadata.$Shape): BotMetadata.BotPluginMetadata & BotMetadata.BotPluginMetadata.$Shape;
        static create(properties?: BotMetadata.BotPluginMetadata.$Properties): BotMetadata.BotPluginMetadata;

        /**
         * Encodes the specified BotPluginMetadata message. Does not implicitly {@link BotMetadata.BotPluginMetadata.verify|verify} messages.
         * @param message BotPluginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotPluginMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPluginMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotPluginMetadata.verify|verify} messages.
         * @param message BotPluginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotPluginMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPluginMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotPluginMetadata & BotMetadata.BotPluginMetadata.$Shape} BotPluginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotPluginMetadata & BotMetadata.BotPluginMetadata.$Shape;

        /**
         * Decodes a BotPluginMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotPluginMetadata & BotMetadata.BotPluginMetadata.$Shape} BotPluginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotPluginMetadata & BotMetadata.BotPluginMetadata.$Shape;

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
        static fromObject(object: { [k: string]: any }): BotMetadata.BotPluginMetadata;

        /**
         * Creates a plain object from a BotPluginMetadata message. Also converts values to other types if specified.
         * @param message BotPluginMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotPluginMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            provider?: (BotMetadata.BotPluginMetadata.SearchProvider|null);

            /** BotPluginMetadata pluginType */
            pluginType?: (BotMetadata.BotPluginMetadata.PluginType|null);

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
            deprecatedField?: (BotMetadata.BotPluginMetadata.PluginType|null);

            /** BotPluginMetadata parentPluginType */
            parentPluginType?: (BotMetadata.BotPluginMetadata.PluginType|null);

            /** BotPluginMetadata faviconCdnUrl */
            faviconCdnUrl?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotPluginMetadata. */
        type $Shape = BotMetadata.BotPluginMetadata.$Properties;

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

    /**
     * Properties of a BotAvatarMetadata.
     * @deprecated Use BotMetadata.BotAvatarMetadata.$Properties instead.
     */
    interface IBotAvatarMetadata extends BotMetadata.BotAvatarMetadata.$Properties {
    }

    /** Represents a BotAvatarMetadata. */
    class BotAvatarMetadata {

        /**
         * Constructs a new BotAvatarMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: BotMetadata.BotAvatarMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BotAvatarMetadata sentiment. */
        sentiment?: (number|null);

        /** BotAvatarMetadata behaviorGraph. */
        behaviorGraph?: (string|null);

        /** BotAvatarMetadata action. */
        action?: (number|null);

        /** BotAvatarMetadata intensity. */
        intensity?: (number|null);

        /** BotAvatarMetadata wordCount. */
        wordCount?: (number|null);

        /**
         * Creates a new BotAvatarMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotAvatarMetadata instance
         */
        static create(properties: BotMetadata.BotAvatarMetadata.$Shape): BotMetadata.BotAvatarMetadata & BotMetadata.BotAvatarMetadata.$Shape;
        static create(properties?: BotMetadata.BotAvatarMetadata.$Properties): BotMetadata.BotAvatarMetadata;

        /**
         * Encodes the specified BotAvatarMetadata message. Does not implicitly {@link BotMetadata.BotAvatarMetadata.verify|verify} messages.
         * @param message BotAvatarMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: BotMetadata.BotAvatarMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotAvatarMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotAvatarMetadata.verify|verify} messages.
         * @param message BotAvatarMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: BotMetadata.BotAvatarMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotAvatarMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {BotMetadata.BotAvatarMetadata & BotMetadata.BotAvatarMetadata.$Shape} BotAvatarMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BotMetadata.BotAvatarMetadata & BotMetadata.BotAvatarMetadata.$Shape;

        /**
         * Decodes a BotAvatarMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {BotMetadata.BotAvatarMetadata & BotMetadata.BotAvatarMetadata.$Shape} BotAvatarMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BotMetadata.BotAvatarMetadata & BotMetadata.BotAvatarMetadata.$Shape;

        /**
         * Verifies a BotAvatarMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotAvatarMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotAvatarMetadata
         */
        static fromObject(object: { [k: string]: any }): BotMetadata.BotAvatarMetadata;

        /**
         * Creates a plain object from a BotAvatarMetadata message. Also converts values to other types if specified.
         * @param message BotAvatarMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: BotMetadata.BotAvatarMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotAvatarMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for BotAvatarMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BotAvatarMetadata {

        /** Properties of a BotAvatarMetadata. */
        interface $Properties {

            /** BotAvatarMetadata sentiment */
            sentiment?: (number|null);

            /** BotAvatarMetadata behaviorGraph */
            behaviorGraph?: (string|null);

            /** BotAvatarMetadata action */
            action?: (number|null);

            /** BotAvatarMetadata intensity */
            intensity?: (number|null);

            /** BotAvatarMetadata wordCount */
            wordCount?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BotAvatarMetadata. */
        type $Shape = BotMetadata.BotAvatarMetadata.$Properties;
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
        VOICE = 6
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
        META_AI_FORWARD = 31
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

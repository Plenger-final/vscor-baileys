import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace SyncAction. */
export namespace SyncAction {

    /**
     * Properties of a PatchDebugData.
     * @deprecated Use SyncAction.PatchDebugData.$Properties instead.
     */
    interface IPatchDebugData extends SyncAction.PatchDebugData.$Properties {
    }

    /** Represents a PatchDebugData. */
    class PatchDebugData {

        /**
         * Constructs a new PatchDebugData.
         * @param [properties] Properties to set
         */
        constructor(properties?: SyncAction.PatchDebugData.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PatchDebugData currentLthash. */
        currentLthash?: (Uint8Array|null);

        /** PatchDebugData newLthash. */
        newLthash?: (Uint8Array|null);

        /** PatchDebugData patchVersion. */
        patchVersion?: (Uint8Array|null);

        /** PatchDebugData collectionName. */
        collectionName?: (Uint8Array|null);

        /** PatchDebugData firstFourBytesFromAHashOfSnapshotMacKey. */
        firstFourBytesFromAHashOfSnapshotMacKey?: (Uint8Array|null);

        /** PatchDebugData newLthashSubtract. */
        newLthashSubtract?: (Uint8Array|null);

        /** PatchDebugData numberAdd. */
        numberAdd?: (number|null);

        /** PatchDebugData numberRemove. */
        numberRemove?: (number|null);

        /** PatchDebugData numberOverride. */
        numberOverride?: (number|null);

        /** PatchDebugData senderPlatform. */
        senderPlatform?: (SyncAction.PatchDebugData.Platform|null);

        /** PatchDebugData isSenderPrimary. */
        isSenderPrimary?: (boolean|null);

        /**
         * Creates a new PatchDebugData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PatchDebugData instance
         */
        static create(properties: SyncAction.PatchDebugData.$Shape): SyncAction.PatchDebugData & SyncAction.PatchDebugData.$Shape;
        static create(properties?: SyncAction.PatchDebugData.$Properties): SyncAction.PatchDebugData;

        /**
         * Encodes the specified PatchDebugData message. Does not implicitly {@link SyncAction.PatchDebugData.verify|verify} messages.
         * @param message PatchDebugData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SyncAction.PatchDebugData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PatchDebugData message, length delimited. Does not implicitly {@link SyncAction.PatchDebugData.verify|verify} messages.
         * @param message PatchDebugData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SyncAction.PatchDebugData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PatchDebugData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SyncAction.PatchDebugData & SyncAction.PatchDebugData.$Shape} PatchDebugData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.PatchDebugData & SyncAction.PatchDebugData.$Shape;

        /**
         * Decodes a PatchDebugData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SyncAction.PatchDebugData & SyncAction.PatchDebugData.$Shape} PatchDebugData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.PatchDebugData & SyncAction.PatchDebugData.$Shape;

        /**
         * Verifies a PatchDebugData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PatchDebugData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PatchDebugData
         */
        static fromObject(object: { [k: string]: any }): SyncAction.PatchDebugData;

        /**
         * Creates a plain object from a PatchDebugData message. Also converts values to other types if specified.
         * @param message PatchDebugData
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SyncAction.PatchDebugData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PatchDebugData to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PatchDebugData
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PatchDebugData {

        /** Properties of a PatchDebugData. */
        interface $Properties {

            /** PatchDebugData currentLthash */
            currentLthash?: (Uint8Array|null);

            /** PatchDebugData newLthash */
            newLthash?: (Uint8Array|null);

            /** PatchDebugData patchVersion */
            patchVersion?: (Uint8Array|null);

            /** PatchDebugData collectionName */
            collectionName?: (Uint8Array|null);

            /** PatchDebugData firstFourBytesFromAHashOfSnapshotMacKey */
            firstFourBytesFromAHashOfSnapshotMacKey?: (Uint8Array|null);

            /** PatchDebugData newLthashSubtract */
            newLthashSubtract?: (Uint8Array|null);

            /** PatchDebugData numberAdd */
            numberAdd?: (number|null);

            /** PatchDebugData numberRemove */
            numberRemove?: (number|null);

            /** PatchDebugData numberOverride */
            numberOverride?: (number|null);

            /** PatchDebugData senderPlatform */
            senderPlatform?: (SyncAction.PatchDebugData.Platform|null);

            /** PatchDebugData isSenderPrimary */
            isSenderPrimary?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PatchDebugData. */
        type $Shape = SyncAction.PatchDebugData.$Properties;

        /** Platform enum. */
        enum Platform {

            /** ANDROID value */
            ANDROID = 0,

            /** SMBA value */
            SMBA = 1,

            /** IPHONE value */
            IPHONE = 2,

            /** SMBI value */
            SMBI = 3,

            /** WEB value */
            WEB = 4,

            /** UWP value */
            UWP = 5,

            /** DARWIN value */
            DARWIN = 6,

            /** IPAD value */
            IPAD = 7,

            /** WEAROS value */
            WEAROS = 8,

            /** WASG value */
            WASG = 9,

            /** WEARM value */
            WEARM = 10,

            /** CAPI value */
            CAPI = 11
        }
    }

    /**
     * Properties of a SyncActionData.
     * @deprecated Use SyncAction.SyncActionData.$Properties instead.
     */
    interface ISyncActionData extends SyncAction.SyncActionData.$Properties {
    }

    /** Represents a SyncActionData. */
    class SyncActionData {

        /**
         * Constructs a new SyncActionData.
         * @param [properties] Properties to set
         */
        constructor(properties?: SyncAction.SyncActionData.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SyncActionData index. */
        index?: (Uint8Array|null);

        /** SyncActionData value. */
        value?: (SyncAction.SyncActionValue.$Properties|null);

        /** SyncActionData padding. */
        padding?: (Uint8Array|null);

        /** SyncActionData version. */
        version?: (number|null);

        /**
         * Creates a new SyncActionData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncActionData instance
         */
        static create(properties: SyncAction.SyncActionData.$Shape): SyncAction.SyncActionData & SyncAction.SyncActionData.$Shape;
        static create(properties?: SyncAction.SyncActionData.$Properties): SyncAction.SyncActionData;

        /**
         * Encodes the specified SyncActionData message. Does not implicitly {@link SyncAction.SyncActionData.verify|verify} messages.
         * @param message SyncActionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SyncAction.SyncActionData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncActionData message, length delimited. Does not implicitly {@link SyncAction.SyncActionData.verify|verify} messages.
         * @param message SyncActionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SyncAction.SyncActionData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncActionData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SyncAction.SyncActionData & SyncAction.SyncActionData.$Shape} SyncActionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionData & SyncAction.SyncActionData.$Shape;

        /**
         * Decodes a SyncActionData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SyncAction.SyncActionData & SyncAction.SyncActionData.$Shape} SyncActionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionData & SyncAction.SyncActionData.$Shape;

        /**
         * Verifies a SyncActionData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncActionData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncActionData
         */
        static fromObject(object: { [k: string]: any }): SyncAction.SyncActionData;

        /**
         * Creates a plain object from a SyncActionData message. Also converts values to other types if specified.
         * @param message SyncActionData
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SyncAction.SyncActionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncActionData to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SyncActionData
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SyncActionData {

        /** Properties of a SyncActionData. */
        interface $Properties {

            /** SyncActionData index */
            index?: (Uint8Array|null);

            /** SyncActionData value */
            value?: (SyncAction.SyncActionValue.$Properties|null);

            /** SyncActionData padding */
            padding?: (Uint8Array|null);

            /** SyncActionData version */
            version?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SyncActionData. */
        type $Shape = {
          index?: Uint8Array|null;
          value?: SyncAction.SyncActionValue.$Shape|null;
          padding?: Uint8Array|null;
          version?: number|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a SyncActionValue.
     * @deprecated Use SyncAction.SyncActionValue.$Properties instead.
     */
    interface ISyncActionValue extends SyncAction.SyncActionValue.$Properties {
    }

    /** Represents a SyncActionValue. */
    class SyncActionValue {

        /**
         * Constructs a new SyncActionValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: SyncAction.SyncActionValue.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SyncActionValue timestamp. */
        timestamp?: (number|Long|null);

        /** SyncActionValue starAction. */
        starAction?: (SyncAction.SyncActionValue.StarAction.$Properties|null);

        /** SyncActionValue contactAction. */
        contactAction?: (SyncAction.SyncActionValue.ContactAction.$Properties|null);

        /** SyncActionValue muteAction. */
        muteAction?: (SyncAction.SyncActionValue.MuteAction.$Properties|null);

        /** SyncActionValue pinAction. */
        pinAction?: (SyncAction.SyncActionValue.PinAction.$Properties|null);

        /** SyncActionValue pushNameSetting. */
        pushNameSetting?: (SyncAction.SyncActionValue.PushNameSetting.$Properties|null);

        /** SyncActionValue quickReplyAction. */
        quickReplyAction?: (SyncAction.SyncActionValue.QuickReplyAction.$Properties|null);

        /** SyncActionValue recentEmojiWeightsAction. */
        recentEmojiWeightsAction?: (SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Properties|null);

        /** SyncActionValue labelEditAction. */
        labelEditAction?: (SyncAction.SyncActionValue.LabelEditAction.$Properties|null);

        /** SyncActionValue labelAssociationAction. */
        labelAssociationAction?: (SyncAction.SyncActionValue.LabelAssociationAction.$Properties|null);

        /** SyncActionValue localeSetting. */
        localeSetting?: (SyncAction.SyncActionValue.LocaleSetting.$Properties|null);

        /** SyncActionValue archiveChatAction. */
        archiveChatAction?: (SyncAction.SyncActionValue.ArchiveChatAction.$Properties|null);

        /** SyncActionValue deleteMessageForMeAction. */
        deleteMessageForMeAction?: (SyncAction.SyncActionValue.DeleteMessageForMeAction.$Properties|null);

        /** SyncActionValue keyExpiration. */
        keyExpiration?: (SyncAction.SyncActionValue.KeyExpiration.$Properties|null);

        /** SyncActionValue markChatAsReadAction. */
        markChatAsReadAction?: (SyncAction.SyncActionValue.MarkChatAsReadAction.$Properties|null);

        /** SyncActionValue clearChatAction. */
        clearChatAction?: (SyncAction.SyncActionValue.ClearChatAction.$Properties|null);

        /** SyncActionValue deleteChatAction. */
        deleteChatAction?: (SyncAction.SyncActionValue.DeleteChatAction.$Properties|null);

        /** SyncActionValue unarchiveChatsSetting. */
        unarchiveChatsSetting?: (SyncAction.SyncActionValue.UnarchiveChatsSetting.$Properties|null);

        /** SyncActionValue primaryFeature. */
        primaryFeature?: (SyncAction.SyncActionValue.PrimaryFeature.$Properties|null);

        /** SyncActionValue androidUnsupportedActions. */
        androidUnsupportedActions?: (SyncAction.SyncActionValue.AndroidUnsupportedActions.$Properties|null);

        /** SyncActionValue agentAction. */
        agentAction?: (SyncAction.SyncActionValue.AgentAction.$Properties|null);

        /** SyncActionValue subscriptionAction. */
        subscriptionAction?: (SyncAction.SyncActionValue.SubscriptionAction.$Properties|null);

        /** SyncActionValue userStatusMuteAction. */
        userStatusMuteAction?: (SyncAction.SyncActionValue.UserStatusMuteAction.$Properties|null);

        /** SyncActionValue timeFormatAction. */
        timeFormatAction?: (SyncAction.SyncActionValue.TimeFormatAction.$Properties|null);

        /** SyncActionValue nuxAction. */
        nuxAction?: (SyncAction.SyncActionValue.NuxAction.$Properties|null);

        /** SyncActionValue primaryVersionAction. */
        primaryVersionAction?: (SyncAction.SyncActionValue.PrimaryVersionAction.$Properties|null);

        /** SyncActionValue stickerAction. */
        stickerAction?: (SyncAction.SyncActionValue.StickerAction.$Properties|null);

        /** SyncActionValue removeRecentStickerAction. */
        removeRecentStickerAction?: (SyncAction.SyncActionValue.RemoveRecentStickerAction.$Properties|null);

        /** SyncActionValue chatAssignment. */
        chatAssignment?: (SyncAction.SyncActionValue.ChatAssignmentAction.$Properties|null);

        /** SyncActionValue chatAssignmentOpenedStatus. */
        chatAssignmentOpenedStatus?: (SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Properties|null);

        /** SyncActionValue pnForLidChatAction. */
        pnForLidChatAction?: (SyncAction.SyncActionValue.PnForLidChatAction.$Properties|null);

        /** SyncActionValue marketingMessageAction. */
        marketingMessageAction?: (SyncAction.SyncActionValue.MarketingMessageAction.$Properties|null);

        /** SyncActionValue marketingMessageBroadcastAction. */
        marketingMessageBroadcastAction?: (SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Properties|null);

        /** SyncActionValue externalWebBetaAction. */
        externalWebBetaAction?: (SyncAction.SyncActionValue.ExternalWebBetaAction.$Properties|null);

        /** SyncActionValue privacySettingRelayAllCalls. */
        privacySettingRelayAllCalls?: (SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Properties|null);

        /** SyncActionValue callLogAction. */
        callLogAction?: (SyncAction.SyncActionValue.CallLogAction.$Properties|null);

        /** SyncActionValue ugcBot. */
        ugcBot?: (SyncAction.SyncActionValue.UGCBot.$Properties|null);

        /** SyncActionValue statusPrivacy. */
        statusPrivacy?: (SyncAction.SyncActionValue.StatusPrivacyAction.$Properties|null);

        /** SyncActionValue botWelcomeRequestAction. */
        botWelcomeRequestAction?: (SyncAction.SyncActionValue.BotWelcomeRequestAction.$Properties|null);

        /** SyncActionValue deleteIndividualCallLog. */
        deleteIndividualCallLog?: (SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Properties|null);

        /** SyncActionValue labelReorderingAction. */
        labelReorderingAction?: (SyncAction.SyncActionValue.LabelReorderingAction.$Properties|null);

        /** SyncActionValue paymentInfoAction. */
        paymentInfoAction?: (SyncAction.SyncActionValue.PaymentInfoAction.$Properties|null);

        /** SyncActionValue customPaymentMethodsAction. */
        customPaymentMethodsAction?: (SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Properties|null);

        /** SyncActionValue lockChatAction. */
        lockChatAction?: (SyncAction.SyncActionValue.LockChatAction.$Properties|null);

        /** SyncActionValue chatLockSettings. */
        chatLockSettings?: (ChatLockSettings.ChatLockSettings.$Properties|null);

        /** SyncActionValue wamoUserIdentifierAction. */
        wamoUserIdentifierAction?: (SyncAction.SyncActionValue.WamoUserIdentifierAction.$Properties|null);

        /** SyncActionValue privacySettingDisableLinkPreviewsAction. */
        privacySettingDisableLinkPreviewsAction?: (SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Properties|null);

        /** SyncActionValue deviceCapabilities. */
        deviceCapabilities?: (DeviceCapabilities.DeviceCapabilities.$Properties|null);

        /** SyncActionValue noteEditAction. */
        noteEditAction?: (SyncAction.SyncActionValue.NoteEditAction.$Properties|null);

        /** SyncActionValue favoritesAction. */
        favoritesAction?: (SyncAction.SyncActionValue.FavoritesAction.$Properties|null);

        /** SyncActionValue merchantPaymentPartnerAction. */
        merchantPaymentPartnerAction?: (SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Properties|null);

        /** SyncActionValue waffleAccountLinkStateAction. */
        waffleAccountLinkStateAction?: (SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Properties|null);

        /** SyncActionValue usernameChatStartMode. */
        usernameChatStartMode?: (SyncAction.SyncActionValue.UsernameChatStartModeAction.$Properties|null);

        /** SyncActionValue notificationActivitySettingAction. */
        notificationActivitySettingAction?: (SyncAction.SyncActionValue.NotificationActivitySettingAction.$Properties|null);

        /** SyncActionValue lidContactAction. */
        lidContactAction?: (SyncAction.SyncActionValue.LidContactAction.$Properties|null);

        /** SyncActionValue ctwaPerCustomerDataSharingAction. */
        ctwaPerCustomerDataSharingAction?: (SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Properties|null);

        /** SyncActionValue paymentTosAction. */
        paymentTosAction?: (SyncAction.SyncActionValue.PaymentTosAction.$Properties|null);

        /** SyncActionValue privacySettingChannelsPersonalisedRecommendationAction. */
        privacySettingChannelsPersonalisedRecommendationAction?: (SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Properties|null);

        /** SyncActionValue detectedOutcomesStatusAction. */
        detectedOutcomesStatusAction?: (SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Properties|null);

        /** SyncActionValue maibaAiFeaturesControlAction. */
        maibaAiFeaturesControlAction?: (SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Properties|null);

        /** SyncActionValue businessBroadcastListAction. */
        businessBroadcastListAction?: (SyncAction.SyncActionValue.BusinessBroadcastListAction.$Properties|null);

        /** SyncActionValue musicUserIdAction. */
        musicUserIdAction?: (SyncAction.SyncActionValue.MusicUserIdAction.$Properties|null);

        /** SyncActionValue statusPostOptInNotificationPreferencesAction. */
        statusPostOptInNotificationPreferencesAction?: (SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Properties|null);

        /** SyncActionValue avatarUpdatedAction. */
        avatarUpdatedAction?: (SyncAction.SyncActionValue.AvatarUpdatedAction.$Properties|null);

        /** SyncActionValue privateProcessingSettingAction. */
        privateProcessingSettingAction?: (SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Properties|null);

        /** SyncActionValue newsletterSavedInterestsAction. */
        newsletterSavedInterestsAction?: (SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Properties|null);

        /** SyncActionValue aiThreadRenameAction. */
        aiThreadRenameAction?: (SyncAction.SyncActionValue.AiThreadRenameAction.$Properties|null);

        /** SyncActionValue interactiveMessageAction. */
        interactiveMessageAction?: (SyncAction.SyncActionValue.InteractiveMessageAction.$Properties|null);

        /** SyncActionValue settingsSyncAction. */
        settingsSyncAction?: (SyncAction.SyncActionValue.SettingsSyncAction.$Properties|null);

        /** SyncActionValue outContactAction. */
        outContactAction?: (SyncAction.SyncActionValue.OutContactAction.$Properties|null);

        /** SyncActionValue nctSaltSyncAction. */
        nctSaltSyncAction?: (SyncAction.SyncActionValue.NctSaltSyncAction.$Properties|null);

        /** SyncActionValue businessBroadcastCampaignAction. */
        businessBroadcastCampaignAction?: (SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Properties|null);

        /** SyncActionValue businessBroadcastInsightsAction. */
        businessBroadcastInsightsAction?: (SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Properties|null);

        /** SyncActionValue customerDataAction. */
        customerDataAction?: (SyncAction.SyncActionValue.CustomerDataAction.$Properties|null);

        /** SyncActionValue subscriptionsSyncV2Action. */
        subscriptionsSyncV2Action?: (SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Properties|null);

        /** SyncActionValue threadPinAction. */
        threadPinAction?: (SyncAction.SyncActionValue.ThreadPinAction.$Properties|null);

        /** SyncActionValue autoOrganizeBusinessChatSetting. */
        autoOrganizeBusinessChatSetting?: (SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Properties|null);

        /** SyncActionValue bizAiSettingsNudgeAction. */
        bizAiSettingsNudgeAction?: (SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Properties|null);

        /** SyncActionValue coexV2VersionAction. */
        coexV2VersionAction?: (SyncAction.SyncActionValue.CoexV2VersionAction.$Properties|null);

        /** SyncActionValue wasaRootSecretAction. */
        wasaRootSecretAction?: (SyncAction.SyncActionValue.WASARootSecretAction.$Properties|null);

        /** SyncActionValue bubbleLockMessageAction. */
        bubbleLockMessageAction?: (SyncAction.SyncActionValue.BubbleLockMessageAction.$Properties|null);

        /** SyncActionValue labelSublistAction. */
        labelSublistAction?: (SyncAction.SyncActionValue.LabelSublistAction.$Properties|null);

        /** SyncActionValue deviceCapabilitiesV2. */
        deviceCapabilitiesV2?: (DeviceCapabilities.DeviceCapabilities.$Properties|null);

        /** SyncActionValue ctwaMessageReceivedAction. */
        ctwaMessageReceivedAction?: (SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Properties|null);

        /** SyncActionValue sharedDeviceAllowlistAction. */
        sharedDeviceAllowlistAction?: (SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Properties|null);

        /** SyncActionValue contactManagerMetadataAction. */
        contactManagerMetadataAction?: (SyncAction.SyncActionValue.ContactManagerMetadataAction.$Properties|null);

        /** SyncActionValue businessFolderActivationAction. */
        businessFolderActivationAction?: (SyncAction.SyncActionValue.BusinessFolderActivationAction.$Properties|null);

        /** SyncActionValue groupHistoryToggleAction. */
        groupHistoryToggleAction?: (SyncAction.SyncActionValue.GroupHistoryToggleAction.$Properties|null);

        /** SyncActionValue bbProPendingCustomerBaseAction. */
        bbProPendingCustomerBaseAction?: (SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Properties|null);

        /** SyncActionValue communityNestingStateAction. */
        communityNestingStateAction?: (SyncAction.SyncActionValue.CommunityNestingStateAction.$Properties|null);

        /** SyncActionValue sharedDeviceSecretAction. */
        sharedDeviceSecretAction?: (SyncAction.SyncActionValue.SharedDeviceSecretAction.$Properties|null);

        /** SyncActionValue hatchCvmSecretAction. */
        hatchCvmSecretAction?: (SyncAction.SyncActionValue.HatchCVMSecretAction.$Properties|null);

        /**
         * Creates a new SyncActionValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncActionValue instance
         */
        static create(properties: SyncAction.SyncActionValue.$Shape): SyncAction.SyncActionValue & SyncAction.SyncActionValue.$Shape;
        static create(properties?: SyncAction.SyncActionValue.$Properties): SyncAction.SyncActionValue;

        /**
         * Encodes the specified SyncActionValue message. Does not implicitly {@link SyncAction.SyncActionValue.verify|verify} messages.
         * @param message SyncActionValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SyncAction.SyncActionValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncActionValue message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.verify|verify} messages.
         * @param message SyncActionValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SyncAction.SyncActionValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncActionValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SyncAction.SyncActionValue & SyncAction.SyncActionValue.$Shape} SyncActionValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue & SyncAction.SyncActionValue.$Shape;

        /**
         * Decodes a SyncActionValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SyncAction.SyncActionValue & SyncAction.SyncActionValue.$Shape} SyncActionValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue & SyncAction.SyncActionValue.$Shape;

        /**
         * Verifies a SyncActionValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncActionValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncActionValue
         */
        static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue;

        /**
         * Creates a plain object from a SyncActionValue message. Also converts values to other types if specified.
         * @param message SyncActionValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SyncAction.SyncActionValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncActionValue to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SyncActionValue
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SyncActionValue {

        /** Properties of a SyncActionValue. */
        interface $Properties {

            /** SyncActionValue timestamp */
            timestamp?: (number|Long|null);

            /** SyncActionValue starAction */
            starAction?: (SyncAction.SyncActionValue.StarAction.$Properties|null);

            /** SyncActionValue contactAction */
            contactAction?: (SyncAction.SyncActionValue.ContactAction.$Properties|null);

            /** SyncActionValue muteAction */
            muteAction?: (SyncAction.SyncActionValue.MuteAction.$Properties|null);

            /** SyncActionValue pinAction */
            pinAction?: (SyncAction.SyncActionValue.PinAction.$Properties|null);

            /** SyncActionValue pushNameSetting */
            pushNameSetting?: (SyncAction.SyncActionValue.PushNameSetting.$Properties|null);

            /** SyncActionValue quickReplyAction */
            quickReplyAction?: (SyncAction.SyncActionValue.QuickReplyAction.$Properties|null);

            /** SyncActionValue recentEmojiWeightsAction */
            recentEmojiWeightsAction?: (SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Properties|null);

            /** SyncActionValue labelEditAction */
            labelEditAction?: (SyncAction.SyncActionValue.LabelEditAction.$Properties|null);

            /** SyncActionValue labelAssociationAction */
            labelAssociationAction?: (SyncAction.SyncActionValue.LabelAssociationAction.$Properties|null);

            /** SyncActionValue localeSetting */
            localeSetting?: (SyncAction.SyncActionValue.LocaleSetting.$Properties|null);

            /** SyncActionValue archiveChatAction */
            archiveChatAction?: (SyncAction.SyncActionValue.ArchiveChatAction.$Properties|null);

            /** SyncActionValue deleteMessageForMeAction */
            deleteMessageForMeAction?: (SyncAction.SyncActionValue.DeleteMessageForMeAction.$Properties|null);

            /** SyncActionValue keyExpiration */
            keyExpiration?: (SyncAction.SyncActionValue.KeyExpiration.$Properties|null);

            /** SyncActionValue markChatAsReadAction */
            markChatAsReadAction?: (SyncAction.SyncActionValue.MarkChatAsReadAction.$Properties|null);

            /** SyncActionValue clearChatAction */
            clearChatAction?: (SyncAction.SyncActionValue.ClearChatAction.$Properties|null);

            /** SyncActionValue deleteChatAction */
            deleteChatAction?: (SyncAction.SyncActionValue.DeleteChatAction.$Properties|null);

            /** SyncActionValue unarchiveChatsSetting */
            unarchiveChatsSetting?: (SyncAction.SyncActionValue.UnarchiveChatsSetting.$Properties|null);

            /** SyncActionValue primaryFeature */
            primaryFeature?: (SyncAction.SyncActionValue.PrimaryFeature.$Properties|null);

            /** SyncActionValue androidUnsupportedActions */
            androidUnsupportedActions?: (SyncAction.SyncActionValue.AndroidUnsupportedActions.$Properties|null);

            /** SyncActionValue agentAction */
            agentAction?: (SyncAction.SyncActionValue.AgentAction.$Properties|null);

            /** SyncActionValue subscriptionAction */
            subscriptionAction?: (SyncAction.SyncActionValue.SubscriptionAction.$Properties|null);

            /** SyncActionValue userStatusMuteAction */
            userStatusMuteAction?: (SyncAction.SyncActionValue.UserStatusMuteAction.$Properties|null);

            /** SyncActionValue timeFormatAction */
            timeFormatAction?: (SyncAction.SyncActionValue.TimeFormatAction.$Properties|null);

            /** SyncActionValue nuxAction */
            nuxAction?: (SyncAction.SyncActionValue.NuxAction.$Properties|null);

            /** SyncActionValue primaryVersionAction */
            primaryVersionAction?: (SyncAction.SyncActionValue.PrimaryVersionAction.$Properties|null);

            /** SyncActionValue stickerAction */
            stickerAction?: (SyncAction.SyncActionValue.StickerAction.$Properties|null);

            /** SyncActionValue removeRecentStickerAction */
            removeRecentStickerAction?: (SyncAction.SyncActionValue.RemoveRecentStickerAction.$Properties|null);

            /** SyncActionValue chatAssignment */
            chatAssignment?: (SyncAction.SyncActionValue.ChatAssignmentAction.$Properties|null);

            /** SyncActionValue chatAssignmentOpenedStatus */
            chatAssignmentOpenedStatus?: (SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Properties|null);

            /** SyncActionValue pnForLidChatAction */
            pnForLidChatAction?: (SyncAction.SyncActionValue.PnForLidChatAction.$Properties|null);

            /** SyncActionValue marketingMessageAction */
            marketingMessageAction?: (SyncAction.SyncActionValue.MarketingMessageAction.$Properties|null);

            /** SyncActionValue marketingMessageBroadcastAction */
            marketingMessageBroadcastAction?: (SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Properties|null);

            /** SyncActionValue externalWebBetaAction */
            externalWebBetaAction?: (SyncAction.SyncActionValue.ExternalWebBetaAction.$Properties|null);

            /** SyncActionValue privacySettingRelayAllCalls */
            privacySettingRelayAllCalls?: (SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Properties|null);

            /** SyncActionValue callLogAction */
            callLogAction?: (SyncAction.SyncActionValue.CallLogAction.$Properties|null);

            /** SyncActionValue ugcBot */
            ugcBot?: (SyncAction.SyncActionValue.UGCBot.$Properties|null);

            /** SyncActionValue statusPrivacy */
            statusPrivacy?: (SyncAction.SyncActionValue.StatusPrivacyAction.$Properties|null);

            /** SyncActionValue botWelcomeRequestAction */
            botWelcomeRequestAction?: (SyncAction.SyncActionValue.BotWelcomeRequestAction.$Properties|null);

            /** SyncActionValue deleteIndividualCallLog */
            deleteIndividualCallLog?: (SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Properties|null);

            /** SyncActionValue labelReorderingAction */
            labelReorderingAction?: (SyncAction.SyncActionValue.LabelReorderingAction.$Properties|null);

            /** SyncActionValue paymentInfoAction */
            paymentInfoAction?: (SyncAction.SyncActionValue.PaymentInfoAction.$Properties|null);

            /** SyncActionValue customPaymentMethodsAction */
            customPaymentMethodsAction?: (SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Properties|null);

            /** SyncActionValue lockChatAction */
            lockChatAction?: (SyncAction.SyncActionValue.LockChatAction.$Properties|null);

            /** SyncActionValue chatLockSettings */
            chatLockSettings?: (ChatLockSettings.ChatLockSettings.$Properties|null);

            /** SyncActionValue wamoUserIdentifierAction */
            wamoUserIdentifierAction?: (SyncAction.SyncActionValue.WamoUserIdentifierAction.$Properties|null);

            /** SyncActionValue privacySettingDisableLinkPreviewsAction */
            privacySettingDisableLinkPreviewsAction?: (SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Properties|null);

            /** SyncActionValue deviceCapabilities */
            deviceCapabilities?: (DeviceCapabilities.DeviceCapabilities.$Properties|null);

            /** SyncActionValue noteEditAction */
            noteEditAction?: (SyncAction.SyncActionValue.NoteEditAction.$Properties|null);

            /** SyncActionValue favoritesAction */
            favoritesAction?: (SyncAction.SyncActionValue.FavoritesAction.$Properties|null);

            /** SyncActionValue merchantPaymentPartnerAction */
            merchantPaymentPartnerAction?: (SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Properties|null);

            /** SyncActionValue waffleAccountLinkStateAction */
            waffleAccountLinkStateAction?: (SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Properties|null);

            /** SyncActionValue usernameChatStartMode */
            usernameChatStartMode?: (SyncAction.SyncActionValue.UsernameChatStartModeAction.$Properties|null);

            /** SyncActionValue notificationActivitySettingAction */
            notificationActivitySettingAction?: (SyncAction.SyncActionValue.NotificationActivitySettingAction.$Properties|null);

            /** SyncActionValue lidContactAction */
            lidContactAction?: (SyncAction.SyncActionValue.LidContactAction.$Properties|null);

            /** SyncActionValue ctwaPerCustomerDataSharingAction */
            ctwaPerCustomerDataSharingAction?: (SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Properties|null);

            /** SyncActionValue paymentTosAction */
            paymentTosAction?: (SyncAction.SyncActionValue.PaymentTosAction.$Properties|null);

            /** SyncActionValue privacySettingChannelsPersonalisedRecommendationAction */
            privacySettingChannelsPersonalisedRecommendationAction?: (SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Properties|null);

            /** SyncActionValue detectedOutcomesStatusAction */
            detectedOutcomesStatusAction?: (SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Properties|null);

            /** SyncActionValue maibaAiFeaturesControlAction */
            maibaAiFeaturesControlAction?: (SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Properties|null);

            /** SyncActionValue businessBroadcastListAction */
            businessBroadcastListAction?: (SyncAction.SyncActionValue.BusinessBroadcastListAction.$Properties|null);

            /** SyncActionValue musicUserIdAction */
            musicUserIdAction?: (SyncAction.SyncActionValue.MusicUserIdAction.$Properties|null);

            /** SyncActionValue statusPostOptInNotificationPreferencesAction */
            statusPostOptInNotificationPreferencesAction?: (SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Properties|null);

            /** SyncActionValue avatarUpdatedAction */
            avatarUpdatedAction?: (SyncAction.SyncActionValue.AvatarUpdatedAction.$Properties|null);

            /** SyncActionValue privateProcessingSettingAction */
            privateProcessingSettingAction?: (SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Properties|null);

            /** SyncActionValue newsletterSavedInterestsAction */
            newsletterSavedInterestsAction?: (SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Properties|null);

            /** SyncActionValue aiThreadRenameAction */
            aiThreadRenameAction?: (SyncAction.SyncActionValue.AiThreadRenameAction.$Properties|null);

            /** SyncActionValue interactiveMessageAction */
            interactiveMessageAction?: (SyncAction.SyncActionValue.InteractiveMessageAction.$Properties|null);

            /** SyncActionValue settingsSyncAction */
            settingsSyncAction?: (SyncAction.SyncActionValue.SettingsSyncAction.$Properties|null);

            /** SyncActionValue outContactAction */
            outContactAction?: (SyncAction.SyncActionValue.OutContactAction.$Properties|null);

            /** SyncActionValue nctSaltSyncAction */
            nctSaltSyncAction?: (SyncAction.SyncActionValue.NctSaltSyncAction.$Properties|null);

            /** SyncActionValue businessBroadcastCampaignAction */
            businessBroadcastCampaignAction?: (SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Properties|null);

            /** SyncActionValue businessBroadcastInsightsAction */
            businessBroadcastInsightsAction?: (SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Properties|null);

            /** SyncActionValue customerDataAction */
            customerDataAction?: (SyncAction.SyncActionValue.CustomerDataAction.$Properties|null);

            /** SyncActionValue subscriptionsSyncV2Action */
            subscriptionsSyncV2Action?: (SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Properties|null);

            /** SyncActionValue threadPinAction */
            threadPinAction?: (SyncAction.SyncActionValue.ThreadPinAction.$Properties|null);

            /** SyncActionValue autoOrganizeBusinessChatSetting */
            autoOrganizeBusinessChatSetting?: (SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Properties|null);

            /** SyncActionValue bizAiSettingsNudgeAction */
            bizAiSettingsNudgeAction?: (SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Properties|null);

            /** SyncActionValue coexV2VersionAction */
            coexV2VersionAction?: (SyncAction.SyncActionValue.CoexV2VersionAction.$Properties|null);

            /** SyncActionValue wasaRootSecretAction */
            wasaRootSecretAction?: (SyncAction.SyncActionValue.WASARootSecretAction.$Properties|null);

            /** SyncActionValue bubbleLockMessageAction */
            bubbleLockMessageAction?: (SyncAction.SyncActionValue.BubbleLockMessageAction.$Properties|null);

            /** SyncActionValue labelSublistAction */
            labelSublistAction?: (SyncAction.SyncActionValue.LabelSublistAction.$Properties|null);

            /** SyncActionValue deviceCapabilitiesV2 */
            deviceCapabilitiesV2?: (DeviceCapabilities.DeviceCapabilities.$Properties|null);

            /** SyncActionValue ctwaMessageReceivedAction */
            ctwaMessageReceivedAction?: (SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Properties|null);

            /** SyncActionValue sharedDeviceAllowlistAction */
            sharedDeviceAllowlistAction?: (SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Properties|null);

            /** SyncActionValue contactManagerMetadataAction */
            contactManagerMetadataAction?: (SyncAction.SyncActionValue.ContactManagerMetadataAction.$Properties|null);

            /** SyncActionValue businessFolderActivationAction */
            businessFolderActivationAction?: (SyncAction.SyncActionValue.BusinessFolderActivationAction.$Properties|null);

            /** SyncActionValue groupHistoryToggleAction */
            groupHistoryToggleAction?: (SyncAction.SyncActionValue.GroupHistoryToggleAction.$Properties|null);

            /** SyncActionValue bbProPendingCustomerBaseAction */
            bbProPendingCustomerBaseAction?: (SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Properties|null);

            /** SyncActionValue communityNestingStateAction */
            communityNestingStateAction?: (SyncAction.SyncActionValue.CommunityNestingStateAction.$Properties|null);

            /** SyncActionValue sharedDeviceSecretAction */
            sharedDeviceSecretAction?: (SyncAction.SyncActionValue.SharedDeviceSecretAction.$Properties|null);

            /** SyncActionValue hatchCvmSecretAction */
            hatchCvmSecretAction?: (SyncAction.SyncActionValue.HatchCVMSecretAction.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SyncActionValue. */
        type $Shape = {
          timestamp?: number|Long|null;
          starAction?: SyncAction.SyncActionValue.StarAction.$Shape|null;
          contactAction?: SyncAction.SyncActionValue.ContactAction.$Shape|null;
          muteAction?: SyncAction.SyncActionValue.MuteAction.$Shape|null;
          pinAction?: SyncAction.SyncActionValue.PinAction.$Shape|null;
          pushNameSetting?: SyncAction.SyncActionValue.PushNameSetting.$Shape|null;
          quickReplyAction?: SyncAction.SyncActionValue.QuickReplyAction.$Shape|null;
          recentEmojiWeightsAction?: SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Shape|null;
          labelEditAction?: SyncAction.SyncActionValue.LabelEditAction.$Shape|null;
          labelAssociationAction?: SyncAction.SyncActionValue.LabelAssociationAction.$Shape|null;
          localeSetting?: SyncAction.SyncActionValue.LocaleSetting.$Shape|null;
          archiveChatAction?: SyncAction.SyncActionValue.ArchiveChatAction.$Shape|null;
          deleteMessageForMeAction?: SyncAction.SyncActionValue.DeleteMessageForMeAction.$Shape|null;
          keyExpiration?: SyncAction.SyncActionValue.KeyExpiration.$Shape|null;
          markChatAsReadAction?: SyncAction.SyncActionValue.MarkChatAsReadAction.$Shape|null;
          clearChatAction?: SyncAction.SyncActionValue.ClearChatAction.$Shape|null;
          deleteChatAction?: SyncAction.SyncActionValue.DeleteChatAction.$Shape|null;
          unarchiveChatsSetting?: SyncAction.SyncActionValue.UnarchiveChatsSetting.$Shape|null;
          primaryFeature?: SyncAction.SyncActionValue.PrimaryFeature.$Shape|null;
          androidUnsupportedActions?: SyncAction.SyncActionValue.AndroidUnsupportedActions.$Shape|null;
          agentAction?: SyncAction.SyncActionValue.AgentAction.$Shape|null;
          subscriptionAction?: SyncAction.SyncActionValue.SubscriptionAction.$Shape|null;
          userStatusMuteAction?: SyncAction.SyncActionValue.UserStatusMuteAction.$Shape|null;
          timeFormatAction?: SyncAction.SyncActionValue.TimeFormatAction.$Shape|null;
          nuxAction?: SyncAction.SyncActionValue.NuxAction.$Shape|null;
          primaryVersionAction?: SyncAction.SyncActionValue.PrimaryVersionAction.$Shape|null;
          stickerAction?: SyncAction.SyncActionValue.StickerAction.$Shape|null;
          removeRecentStickerAction?: SyncAction.SyncActionValue.RemoveRecentStickerAction.$Shape|null;
          chatAssignment?: SyncAction.SyncActionValue.ChatAssignmentAction.$Shape|null;
          chatAssignmentOpenedStatus?: SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Shape|null;
          pnForLidChatAction?: SyncAction.SyncActionValue.PnForLidChatAction.$Shape|null;
          marketingMessageAction?: SyncAction.SyncActionValue.MarketingMessageAction.$Shape|null;
          marketingMessageBroadcastAction?: SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Shape|null;
          externalWebBetaAction?: SyncAction.SyncActionValue.ExternalWebBetaAction.$Shape|null;
          privacySettingRelayAllCalls?: SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Shape|null;
          callLogAction?: SyncAction.SyncActionValue.CallLogAction.$Shape|null;
          ugcBot?: SyncAction.SyncActionValue.UGCBot.$Shape|null;
          statusPrivacy?: SyncAction.SyncActionValue.StatusPrivacyAction.$Shape|null;
          botWelcomeRequestAction?: SyncAction.SyncActionValue.BotWelcomeRequestAction.$Shape|null;
          deleteIndividualCallLog?: SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Shape|null;
          labelReorderingAction?: SyncAction.SyncActionValue.LabelReorderingAction.$Shape|null;
          paymentInfoAction?: SyncAction.SyncActionValue.PaymentInfoAction.$Shape|null;
          customPaymentMethodsAction?: SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Shape|null;
          lockChatAction?: SyncAction.SyncActionValue.LockChatAction.$Shape|null;
          chatLockSettings?: ChatLockSettings.ChatLockSettings.$Shape|null;
          wamoUserIdentifierAction?: SyncAction.SyncActionValue.WamoUserIdentifierAction.$Shape|null;
          privacySettingDisableLinkPreviewsAction?: SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Shape|null;
          deviceCapabilities?: DeviceCapabilities.DeviceCapabilities.$Shape|null;
          noteEditAction?: SyncAction.SyncActionValue.NoteEditAction.$Shape|null;
          favoritesAction?: SyncAction.SyncActionValue.FavoritesAction.$Shape|null;
          merchantPaymentPartnerAction?: SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Shape|null;
          waffleAccountLinkStateAction?: SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Shape|null;
          usernameChatStartMode?: SyncAction.SyncActionValue.UsernameChatStartModeAction.$Shape|null;
          notificationActivitySettingAction?: SyncAction.SyncActionValue.NotificationActivitySettingAction.$Shape|null;
          lidContactAction?: SyncAction.SyncActionValue.LidContactAction.$Shape|null;
          ctwaPerCustomerDataSharingAction?: SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Shape|null;
          paymentTosAction?: SyncAction.SyncActionValue.PaymentTosAction.$Shape|null;
          privacySettingChannelsPersonalisedRecommendationAction?: SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Shape|null;
          detectedOutcomesStatusAction?: SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Shape|null;
          maibaAiFeaturesControlAction?: SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Shape|null;
          businessBroadcastListAction?: SyncAction.SyncActionValue.BusinessBroadcastListAction.$Shape|null;
          musicUserIdAction?: SyncAction.SyncActionValue.MusicUserIdAction.$Shape|null;
          statusPostOptInNotificationPreferencesAction?: SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Shape|null;
          avatarUpdatedAction?: SyncAction.SyncActionValue.AvatarUpdatedAction.$Shape|null;
          privateProcessingSettingAction?: SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Shape|null;
          newsletterSavedInterestsAction?: SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Shape|null;
          aiThreadRenameAction?: SyncAction.SyncActionValue.AiThreadRenameAction.$Shape|null;
          interactiveMessageAction?: SyncAction.SyncActionValue.InteractiveMessageAction.$Shape|null;
          settingsSyncAction?: SyncAction.SyncActionValue.SettingsSyncAction.$Shape|null;
          outContactAction?: SyncAction.SyncActionValue.OutContactAction.$Shape|null;
          nctSaltSyncAction?: SyncAction.SyncActionValue.NctSaltSyncAction.$Shape|null;
          businessBroadcastCampaignAction?: SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Shape|null;
          businessBroadcastInsightsAction?: SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Shape|null;
          customerDataAction?: SyncAction.SyncActionValue.CustomerDataAction.$Shape|null;
          subscriptionsSyncV2Action?: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Shape|null;
          threadPinAction?: SyncAction.SyncActionValue.ThreadPinAction.$Shape|null;
          autoOrganizeBusinessChatSetting?: SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Shape|null;
          bizAiSettingsNudgeAction?: SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Shape|null;
          coexV2VersionAction?: SyncAction.SyncActionValue.CoexV2VersionAction.$Shape|null;
          wasaRootSecretAction?: SyncAction.SyncActionValue.WASARootSecretAction.$Shape|null;
          bubbleLockMessageAction?: SyncAction.SyncActionValue.BubbleLockMessageAction.$Shape|null;
          labelSublistAction?: SyncAction.SyncActionValue.LabelSublistAction.$Shape|null;
          deviceCapabilitiesV2?: DeviceCapabilities.DeviceCapabilities.$Shape|null;
          ctwaMessageReceivedAction?: SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Shape|null;
          sharedDeviceAllowlistAction?: SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Shape|null;
          contactManagerMetadataAction?: SyncAction.SyncActionValue.ContactManagerMetadataAction.$Shape|null;
          businessFolderActivationAction?: SyncAction.SyncActionValue.BusinessFolderActivationAction.$Shape|null;
          groupHistoryToggleAction?: SyncAction.SyncActionValue.GroupHistoryToggleAction.$Shape|null;
          bbProPendingCustomerBaseAction?: SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Shape|null;
          communityNestingStateAction?: SyncAction.SyncActionValue.CommunityNestingStateAction.$Shape|null;
          sharedDeviceSecretAction?: SyncAction.SyncActionValue.SharedDeviceSecretAction.$Shape|null;
          hatchCvmSecretAction?: SyncAction.SyncActionValue.HatchCVMSecretAction.$Shape|null;
          $unknowns?: Uint8Array[];
        };

        /**
         * Properties of an AgentAction.
         * @deprecated Use SyncAction.SyncActionValue.AgentAction.$Properties instead.
         */
        interface IAgentAction extends SyncAction.SyncActionValue.AgentAction.$Properties {
        }

        /** Represents an AgentAction. */
        class AgentAction {

            /**
             * Constructs a new AgentAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.AgentAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AgentAction name. */
            name?: (string|null);

            /** AgentAction deviceId. */
            deviceId?: (number|null);

            /** AgentAction isDeleted. */
            isDeleted?: (boolean|null);

            /**
             * Creates a new AgentAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AgentAction instance
             */
            static create(properties: SyncAction.SyncActionValue.AgentAction.$Shape): SyncAction.SyncActionValue.AgentAction & SyncAction.SyncActionValue.AgentAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.AgentAction.$Properties): SyncAction.SyncActionValue.AgentAction;

            /**
             * Encodes the specified AgentAction message. Does not implicitly {@link SyncAction.SyncActionValue.AgentAction.verify|verify} messages.
             * @param message AgentAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.AgentAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AgentAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.AgentAction.verify|verify} messages.
             * @param message AgentAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.AgentAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AgentAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.AgentAction & SyncAction.SyncActionValue.AgentAction.$Shape} AgentAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.AgentAction & SyncAction.SyncActionValue.AgentAction.$Shape;

            /**
             * Decodes an AgentAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.AgentAction & SyncAction.SyncActionValue.AgentAction.$Shape} AgentAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.AgentAction & SyncAction.SyncActionValue.AgentAction.$Shape;

            /**
             * Verifies an AgentAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AgentAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AgentAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.AgentAction;

            /**
             * Creates a plain object from an AgentAction message. Also converts values to other types if specified.
             * @param message AgentAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.AgentAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AgentAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AgentAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AgentAction {

            /** Properties of an AgentAction. */
            interface $Properties {

                /** AgentAction name */
                name?: (string|null);

                /** AgentAction deviceId */
                deviceId?: (number|null);

                /** AgentAction isDeleted */
                isDeleted?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AgentAction. */
            type $Shape = SyncAction.SyncActionValue.AgentAction.$Properties;
        }

        /**
         * Properties of an AiThreadRenameAction.
         * @deprecated Use SyncAction.SyncActionValue.AiThreadRenameAction.$Properties instead.
         */
        interface IAiThreadRenameAction extends SyncAction.SyncActionValue.AiThreadRenameAction.$Properties {
        }

        /** Represents an AiThreadRenameAction. */
        class AiThreadRenameAction {

            /**
             * Constructs a new AiThreadRenameAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.AiThreadRenameAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AiThreadRenameAction newTitle. */
            newTitle?: (string|null);

            /**
             * Creates a new AiThreadRenameAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AiThreadRenameAction instance
             */
            static create(properties: SyncAction.SyncActionValue.AiThreadRenameAction.$Shape): SyncAction.SyncActionValue.AiThreadRenameAction & SyncAction.SyncActionValue.AiThreadRenameAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.AiThreadRenameAction.$Properties): SyncAction.SyncActionValue.AiThreadRenameAction;

            /**
             * Encodes the specified AiThreadRenameAction message. Does not implicitly {@link SyncAction.SyncActionValue.AiThreadRenameAction.verify|verify} messages.
             * @param message AiThreadRenameAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.AiThreadRenameAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AiThreadRenameAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.AiThreadRenameAction.verify|verify} messages.
             * @param message AiThreadRenameAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.AiThreadRenameAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AiThreadRenameAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.AiThreadRenameAction & SyncAction.SyncActionValue.AiThreadRenameAction.$Shape} AiThreadRenameAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.AiThreadRenameAction & SyncAction.SyncActionValue.AiThreadRenameAction.$Shape;

            /**
             * Decodes an AiThreadRenameAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.AiThreadRenameAction & SyncAction.SyncActionValue.AiThreadRenameAction.$Shape} AiThreadRenameAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.AiThreadRenameAction & SyncAction.SyncActionValue.AiThreadRenameAction.$Shape;

            /**
             * Verifies an AiThreadRenameAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AiThreadRenameAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AiThreadRenameAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.AiThreadRenameAction;

            /**
             * Creates a plain object from an AiThreadRenameAction message. Also converts values to other types if specified.
             * @param message AiThreadRenameAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.AiThreadRenameAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AiThreadRenameAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AiThreadRenameAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AiThreadRenameAction {

            /** Properties of an AiThreadRenameAction. */
            interface $Properties {

                /** AiThreadRenameAction newTitle */
                newTitle?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AiThreadRenameAction. */
            type $Shape = SyncAction.SyncActionValue.AiThreadRenameAction.$Properties;
        }

        /**
         * Properties of an AndroidUnsupportedActions.
         * @deprecated Use SyncAction.SyncActionValue.AndroidUnsupportedActions.$Properties instead.
         */
        interface IAndroidUnsupportedActions extends SyncAction.SyncActionValue.AndroidUnsupportedActions.$Properties {
        }

        /** Represents an AndroidUnsupportedActions. */
        class AndroidUnsupportedActions {

            /**
             * Constructs a new AndroidUnsupportedActions.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.AndroidUnsupportedActions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AndroidUnsupportedActions allowed. */
            allowed?: (boolean|null);

            /**
             * Creates a new AndroidUnsupportedActions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AndroidUnsupportedActions instance
             */
            static create(properties: SyncAction.SyncActionValue.AndroidUnsupportedActions.$Shape): SyncAction.SyncActionValue.AndroidUnsupportedActions & SyncAction.SyncActionValue.AndroidUnsupportedActions.$Shape;
            static create(properties?: SyncAction.SyncActionValue.AndroidUnsupportedActions.$Properties): SyncAction.SyncActionValue.AndroidUnsupportedActions;

            /**
             * Encodes the specified AndroidUnsupportedActions message. Does not implicitly {@link SyncAction.SyncActionValue.AndroidUnsupportedActions.verify|verify} messages.
             * @param message AndroidUnsupportedActions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.AndroidUnsupportedActions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AndroidUnsupportedActions message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.AndroidUnsupportedActions.verify|verify} messages.
             * @param message AndroidUnsupportedActions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.AndroidUnsupportedActions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AndroidUnsupportedActions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.AndroidUnsupportedActions & SyncAction.SyncActionValue.AndroidUnsupportedActions.$Shape} AndroidUnsupportedActions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.AndroidUnsupportedActions & SyncAction.SyncActionValue.AndroidUnsupportedActions.$Shape;

            /**
             * Decodes an AndroidUnsupportedActions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.AndroidUnsupportedActions & SyncAction.SyncActionValue.AndroidUnsupportedActions.$Shape} AndroidUnsupportedActions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.AndroidUnsupportedActions & SyncAction.SyncActionValue.AndroidUnsupportedActions.$Shape;

            /**
             * Verifies an AndroidUnsupportedActions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AndroidUnsupportedActions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AndroidUnsupportedActions
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.AndroidUnsupportedActions;

            /**
             * Creates a plain object from an AndroidUnsupportedActions message. Also converts values to other types if specified.
             * @param message AndroidUnsupportedActions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.AndroidUnsupportedActions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AndroidUnsupportedActions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AndroidUnsupportedActions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AndroidUnsupportedActions {

            /** Properties of an AndroidUnsupportedActions. */
            interface $Properties {

                /** AndroidUnsupportedActions allowed */
                allowed?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AndroidUnsupportedActions. */
            type $Shape = SyncAction.SyncActionValue.AndroidUnsupportedActions.$Properties;
        }

        /**
         * Properties of an ArchiveChatAction.
         * @deprecated Use SyncAction.SyncActionValue.ArchiveChatAction.$Properties instead.
         */
        interface IArchiveChatAction extends SyncAction.SyncActionValue.ArchiveChatAction.$Properties {
        }

        /** Represents an ArchiveChatAction. */
        class ArchiveChatAction {

            /**
             * Constructs a new ArchiveChatAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.ArchiveChatAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ArchiveChatAction archived. */
            archived?: (boolean|null);

            /** ArchiveChatAction messageRange. */
            messageRange?: (SyncAction.SyncActionValue.SyncActionMessageRange.$Properties|null);

            /**
             * Creates a new ArchiveChatAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ArchiveChatAction instance
             */
            static create(properties: SyncAction.SyncActionValue.ArchiveChatAction.$Shape): SyncAction.SyncActionValue.ArchiveChatAction & SyncAction.SyncActionValue.ArchiveChatAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.ArchiveChatAction.$Properties): SyncAction.SyncActionValue.ArchiveChatAction;

            /**
             * Encodes the specified ArchiveChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.ArchiveChatAction.verify|verify} messages.
             * @param message ArchiveChatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.ArchiveChatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ArchiveChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ArchiveChatAction.verify|verify} messages.
             * @param message ArchiveChatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.ArchiveChatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ArchiveChatAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.ArchiveChatAction & SyncAction.SyncActionValue.ArchiveChatAction.$Shape} ArchiveChatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ArchiveChatAction & SyncAction.SyncActionValue.ArchiveChatAction.$Shape;

            /**
             * Decodes an ArchiveChatAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.ArchiveChatAction & SyncAction.SyncActionValue.ArchiveChatAction.$Shape} ArchiveChatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ArchiveChatAction & SyncAction.SyncActionValue.ArchiveChatAction.$Shape;

            /**
             * Verifies an ArchiveChatAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ArchiveChatAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ArchiveChatAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ArchiveChatAction;

            /**
             * Creates a plain object from an ArchiveChatAction message. Also converts values to other types if specified.
             * @param message ArchiveChatAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.ArchiveChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ArchiveChatAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ArchiveChatAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ArchiveChatAction {

            /** Properties of an ArchiveChatAction. */
            interface $Properties {

                /** ArchiveChatAction archived */
                archived?: (boolean|null);

                /** ArchiveChatAction messageRange */
                messageRange?: (SyncAction.SyncActionValue.SyncActionMessageRange.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an ArchiveChatAction. */
            type $Shape = SyncAction.SyncActionValue.ArchiveChatAction.$Properties;
        }

        /**
         * Properties of an AutoOrganizeBusinessChatSetting.
         * @deprecated Use SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Properties instead.
         */
        interface IAutoOrganizeBusinessChatSetting extends SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Properties {
        }

        /** Represents an AutoOrganizeBusinessChatSetting. */
        class AutoOrganizeBusinessChatSetting {

            /**
             * Constructs a new AutoOrganizeBusinessChatSetting.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AutoOrganizeBusinessChatSetting autoOrganize. */
            autoOrganize?: (boolean|null);

            /**
             * Creates a new AutoOrganizeBusinessChatSetting instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AutoOrganizeBusinessChatSetting instance
             */
            static create(properties: SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Shape): SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting & SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Shape;
            static create(properties?: SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Properties): SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting;

            /**
             * Encodes the specified AutoOrganizeBusinessChatSetting message. Does not implicitly {@link SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.verify|verify} messages.
             * @param message AutoOrganizeBusinessChatSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AutoOrganizeBusinessChatSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.verify|verify} messages.
             * @param message AutoOrganizeBusinessChatSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AutoOrganizeBusinessChatSetting message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting & SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Shape} AutoOrganizeBusinessChatSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting & SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Shape;

            /**
             * Decodes an AutoOrganizeBusinessChatSetting message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting & SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Shape} AutoOrganizeBusinessChatSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting & SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Shape;

            /**
             * Verifies an AutoOrganizeBusinessChatSetting message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AutoOrganizeBusinessChatSetting message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AutoOrganizeBusinessChatSetting
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting;

            /**
             * Creates a plain object from an AutoOrganizeBusinessChatSetting message. Also converts values to other types if specified.
             * @param message AutoOrganizeBusinessChatSetting
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AutoOrganizeBusinessChatSetting to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AutoOrganizeBusinessChatSetting
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AutoOrganizeBusinessChatSetting {

            /** Properties of an AutoOrganizeBusinessChatSetting. */
            interface $Properties {

                /** AutoOrganizeBusinessChatSetting autoOrganize */
                autoOrganize?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AutoOrganizeBusinessChatSetting. */
            type $Shape = SyncAction.SyncActionValue.AutoOrganizeBusinessChatSetting.$Properties;
        }

        /**
         * Properties of an AvatarUpdatedAction.
         * @deprecated Use SyncAction.SyncActionValue.AvatarUpdatedAction.$Properties instead.
         */
        interface IAvatarUpdatedAction extends SyncAction.SyncActionValue.AvatarUpdatedAction.$Properties {
        }

        /** Represents an AvatarUpdatedAction. */
        class AvatarUpdatedAction {

            /**
             * Constructs a new AvatarUpdatedAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.AvatarUpdatedAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AvatarUpdatedAction eventType. */
            eventType?: (SyncAction.SyncActionValue.AvatarUpdatedAction.AvatarEventType|null);

            /** AvatarUpdatedAction recentAvatarStickers. */
            recentAvatarStickers: SyncAction.SyncActionValue.StickerAction.$Properties[];

            /**
             * Creates a new AvatarUpdatedAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AvatarUpdatedAction instance
             */
            static create(properties: SyncAction.SyncActionValue.AvatarUpdatedAction.$Shape): SyncAction.SyncActionValue.AvatarUpdatedAction & SyncAction.SyncActionValue.AvatarUpdatedAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.AvatarUpdatedAction.$Properties): SyncAction.SyncActionValue.AvatarUpdatedAction;

            /**
             * Encodes the specified AvatarUpdatedAction message. Does not implicitly {@link SyncAction.SyncActionValue.AvatarUpdatedAction.verify|verify} messages.
             * @param message AvatarUpdatedAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.AvatarUpdatedAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AvatarUpdatedAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.AvatarUpdatedAction.verify|verify} messages.
             * @param message AvatarUpdatedAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.AvatarUpdatedAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AvatarUpdatedAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.AvatarUpdatedAction & SyncAction.SyncActionValue.AvatarUpdatedAction.$Shape} AvatarUpdatedAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.AvatarUpdatedAction & SyncAction.SyncActionValue.AvatarUpdatedAction.$Shape;

            /**
             * Decodes an AvatarUpdatedAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.AvatarUpdatedAction & SyncAction.SyncActionValue.AvatarUpdatedAction.$Shape} AvatarUpdatedAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.AvatarUpdatedAction & SyncAction.SyncActionValue.AvatarUpdatedAction.$Shape;

            /**
             * Verifies an AvatarUpdatedAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AvatarUpdatedAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AvatarUpdatedAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.AvatarUpdatedAction;

            /**
             * Creates a plain object from an AvatarUpdatedAction message. Also converts values to other types if specified.
             * @param message AvatarUpdatedAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.AvatarUpdatedAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AvatarUpdatedAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AvatarUpdatedAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AvatarUpdatedAction {

            /** Properties of an AvatarUpdatedAction. */
            interface $Properties {

                /** AvatarUpdatedAction eventType */
                eventType?: (SyncAction.SyncActionValue.AvatarUpdatedAction.AvatarEventType|null);

                /** AvatarUpdatedAction recentAvatarStickers */
                recentAvatarStickers?: (SyncAction.SyncActionValue.StickerAction.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AvatarUpdatedAction. */
            type $Shape = SyncAction.SyncActionValue.AvatarUpdatedAction.$Properties;

            /** AvatarEventType enum. */
            enum AvatarEventType {

                /** UPDATED value */
                UPDATED = 0,

                /** CREATED value */
                CREATED = 1,

                /** DELETED value */
                DELETED = 2
            }
        }

        /**
         * Properties of a BBProPendingCustomerBaseAction.
         * @deprecated Use SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Properties instead.
         */
        interface IBBProPendingCustomerBaseAction extends SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Properties {
        }

        /** Represents a BBProPendingCustomerBaseAction. */
        class BBProPendingCustomerBaseAction {

            /**
             * Constructs a new BBProPendingCustomerBaseAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BBProPendingCustomerBaseAction pending. */
            pending?: (boolean|null);

            /**
             * Creates a new BBProPendingCustomerBaseAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BBProPendingCustomerBaseAction instance
             */
            static create(properties: SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Shape): SyncAction.SyncActionValue.BBProPendingCustomerBaseAction & SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Properties): SyncAction.SyncActionValue.BBProPendingCustomerBaseAction;

            /**
             * Encodes the specified BBProPendingCustomerBaseAction message. Does not implicitly {@link SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.verify|verify} messages.
             * @param message BBProPendingCustomerBaseAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BBProPendingCustomerBaseAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.verify|verify} messages.
             * @param message BBProPendingCustomerBaseAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BBProPendingCustomerBaseAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.BBProPendingCustomerBaseAction & SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Shape} BBProPendingCustomerBaseAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.BBProPendingCustomerBaseAction & SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Shape;

            /**
             * Decodes a BBProPendingCustomerBaseAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.BBProPendingCustomerBaseAction & SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Shape} BBProPendingCustomerBaseAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.BBProPendingCustomerBaseAction & SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Shape;

            /**
             * Verifies a BBProPendingCustomerBaseAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BBProPendingCustomerBaseAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BBProPendingCustomerBaseAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.BBProPendingCustomerBaseAction;

            /**
             * Creates a plain object from a BBProPendingCustomerBaseAction message. Also converts values to other types if specified.
             * @param message BBProPendingCustomerBaseAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.BBProPendingCustomerBaseAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BBProPendingCustomerBaseAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BBProPendingCustomerBaseAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BBProPendingCustomerBaseAction {

            /** Properties of a BBProPendingCustomerBaseAction. */
            interface $Properties {

                /** BBProPendingCustomerBaseAction pending */
                pending?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BBProPendingCustomerBaseAction. */
            type $Shape = SyncAction.SyncActionValue.BBProPendingCustomerBaseAction.$Properties;
        }

        /**
         * Properties of a BizAISettingsNudgeAction.
         * @deprecated Use SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Properties instead.
         */
        interface IBizAISettingsNudgeAction extends SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Properties {
        }

        /** Represents a BizAISettingsNudgeAction. */
        class BizAISettingsNudgeAction {

            /**
             * Constructs a new BizAISettingsNudgeAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BizAISettingsNudgeAction category. */
            category?: (SyncAction.SyncActionValue.BizAISettingsNudgeAction.BizAISettingsCategory|null);

            /** BizAISettingsNudgeAction version. */
            version?: (number|Long|null);

            /** BizAISettingsNudgeAction updatedAtMs. */
            updatedAtMs?: (number|Long|null);

            /**
             * Creates a new BizAISettingsNudgeAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BizAISettingsNudgeAction instance
             */
            static create(properties: SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Shape): SyncAction.SyncActionValue.BizAISettingsNudgeAction & SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Properties): SyncAction.SyncActionValue.BizAISettingsNudgeAction;

            /**
             * Encodes the specified BizAISettingsNudgeAction message. Does not implicitly {@link SyncAction.SyncActionValue.BizAISettingsNudgeAction.verify|verify} messages.
             * @param message BizAISettingsNudgeAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BizAISettingsNudgeAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BizAISettingsNudgeAction.verify|verify} messages.
             * @param message BizAISettingsNudgeAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BizAISettingsNudgeAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.BizAISettingsNudgeAction & SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Shape} BizAISettingsNudgeAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.BizAISettingsNudgeAction & SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Shape;

            /**
             * Decodes a BizAISettingsNudgeAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.BizAISettingsNudgeAction & SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Shape} BizAISettingsNudgeAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.BizAISettingsNudgeAction & SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Shape;

            /**
             * Verifies a BizAISettingsNudgeAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BizAISettingsNudgeAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BizAISettingsNudgeAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.BizAISettingsNudgeAction;

            /**
             * Creates a plain object from a BizAISettingsNudgeAction message. Also converts values to other types if specified.
             * @param message BizAISettingsNudgeAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.BizAISettingsNudgeAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BizAISettingsNudgeAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BizAISettingsNudgeAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BizAISettingsNudgeAction {

            /** Properties of a BizAISettingsNudgeAction. */
            interface $Properties {

                /** BizAISettingsNudgeAction category */
                category?: (SyncAction.SyncActionValue.BizAISettingsNudgeAction.BizAISettingsCategory|null);

                /** BizAISettingsNudgeAction version */
                version?: (number|Long|null);

                /** BizAISettingsNudgeAction updatedAtMs */
                updatedAtMs?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BizAISettingsNudgeAction. */
            type $Shape = SyncAction.SyncActionValue.BizAISettingsNudgeAction.$Properties;

            /** BizAISettingsCategory enum. */
            enum BizAISettingsCategory {

                /** UNKNOWN value */
                UNKNOWN = 0,

                /** INSTRUCTIONS value */
                INSTRUCTIONS = 1,

                /** RESPONSE_SETTINGS value */
                RESPONSE_SETTINGS = 2,

                /** EXAMPLE_RESPONSES value */
                EXAMPLE_RESPONSES = 3,

                /** KNOWLEDGE value */
                KNOWLEDGE = 4,

                /** LEAD_GEN value */
                LEAD_GEN = 5,

                /** HANDOFF_REMOVAL_TIMING value */
                HANDOFF_REMOVAL_TIMING = 6
            }
        }

        /**
         * Properties of a BotWelcomeRequestAction.
         * @deprecated Use SyncAction.SyncActionValue.BotWelcomeRequestAction.$Properties instead.
         */
        interface IBotWelcomeRequestAction extends SyncAction.SyncActionValue.BotWelcomeRequestAction.$Properties {
        }

        /** Represents a BotWelcomeRequestAction. */
        class BotWelcomeRequestAction {

            /**
             * Constructs a new BotWelcomeRequestAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.BotWelcomeRequestAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BotWelcomeRequestAction isSent. */
            isSent?: (boolean|null);

            /**
             * Creates a new BotWelcomeRequestAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BotWelcomeRequestAction instance
             */
            static create(properties: SyncAction.SyncActionValue.BotWelcomeRequestAction.$Shape): SyncAction.SyncActionValue.BotWelcomeRequestAction & SyncAction.SyncActionValue.BotWelcomeRequestAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.BotWelcomeRequestAction.$Properties): SyncAction.SyncActionValue.BotWelcomeRequestAction;

            /**
             * Encodes the specified BotWelcomeRequestAction message. Does not implicitly {@link SyncAction.SyncActionValue.BotWelcomeRequestAction.verify|verify} messages.
             * @param message BotWelcomeRequestAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.BotWelcomeRequestAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BotWelcomeRequestAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BotWelcomeRequestAction.verify|verify} messages.
             * @param message BotWelcomeRequestAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.BotWelcomeRequestAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BotWelcomeRequestAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.BotWelcomeRequestAction & SyncAction.SyncActionValue.BotWelcomeRequestAction.$Shape} BotWelcomeRequestAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.BotWelcomeRequestAction & SyncAction.SyncActionValue.BotWelcomeRequestAction.$Shape;

            /**
             * Decodes a BotWelcomeRequestAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.BotWelcomeRequestAction & SyncAction.SyncActionValue.BotWelcomeRequestAction.$Shape} BotWelcomeRequestAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.BotWelcomeRequestAction & SyncAction.SyncActionValue.BotWelcomeRequestAction.$Shape;

            /**
             * Verifies a BotWelcomeRequestAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BotWelcomeRequestAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BotWelcomeRequestAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.BotWelcomeRequestAction;

            /**
             * Creates a plain object from a BotWelcomeRequestAction message. Also converts values to other types if specified.
             * @param message BotWelcomeRequestAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.BotWelcomeRequestAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BotWelcomeRequestAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BotWelcomeRequestAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BotWelcomeRequestAction {

            /** Properties of a BotWelcomeRequestAction. */
            interface $Properties {

                /** BotWelcomeRequestAction isSent */
                isSent?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BotWelcomeRequestAction. */
            type $Shape = SyncAction.SyncActionValue.BotWelcomeRequestAction.$Properties;
        }

        /**
         * Properties of a BroadcastListParticipant.
         * @deprecated Use SyncAction.SyncActionValue.BroadcastListParticipant.$Properties instead.
         */
        interface IBroadcastListParticipant extends SyncAction.SyncActionValue.BroadcastListParticipant.$Properties {
        }

        /** Represents a BroadcastListParticipant. */
        class BroadcastListParticipant {

            /**
             * Constructs a new BroadcastListParticipant.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.BroadcastListParticipant.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BroadcastListParticipant lidJid. */
            lidJid?: (string|null);

            /** BroadcastListParticipant pnJid. */
            pnJid?: (string|null);

            /**
             * Creates a new BroadcastListParticipant instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BroadcastListParticipant instance
             */
            static create(properties: SyncAction.SyncActionValue.BroadcastListParticipant.$Shape): SyncAction.SyncActionValue.BroadcastListParticipant & SyncAction.SyncActionValue.BroadcastListParticipant.$Shape;
            static create(properties?: SyncAction.SyncActionValue.BroadcastListParticipant.$Properties): SyncAction.SyncActionValue.BroadcastListParticipant;

            /**
             * Encodes the specified BroadcastListParticipant message. Does not implicitly {@link SyncAction.SyncActionValue.BroadcastListParticipant.verify|verify} messages.
             * @param message BroadcastListParticipant message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.BroadcastListParticipant.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BroadcastListParticipant message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BroadcastListParticipant.verify|verify} messages.
             * @param message BroadcastListParticipant message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.BroadcastListParticipant.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BroadcastListParticipant message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.BroadcastListParticipant & SyncAction.SyncActionValue.BroadcastListParticipant.$Shape} BroadcastListParticipant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.BroadcastListParticipant & SyncAction.SyncActionValue.BroadcastListParticipant.$Shape;

            /**
             * Decodes a BroadcastListParticipant message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.BroadcastListParticipant & SyncAction.SyncActionValue.BroadcastListParticipant.$Shape} BroadcastListParticipant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.BroadcastListParticipant & SyncAction.SyncActionValue.BroadcastListParticipant.$Shape;

            /**
             * Verifies a BroadcastListParticipant message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BroadcastListParticipant message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BroadcastListParticipant
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.BroadcastListParticipant;

            /**
             * Creates a plain object from a BroadcastListParticipant message. Also converts values to other types if specified.
             * @param message BroadcastListParticipant
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.BroadcastListParticipant, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BroadcastListParticipant to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BroadcastListParticipant
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BroadcastListParticipant {

            /** Properties of a BroadcastListParticipant. */
            interface $Properties {

                /** BroadcastListParticipant lidJid */
                lidJid?: (string|null);

                /** BroadcastListParticipant pnJid */
                pnJid?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BroadcastListParticipant. */
            type $Shape = SyncAction.SyncActionValue.BroadcastListParticipant.$Properties;
        }

        /**
         * Properties of a BubbleLockMessageAction.
         * @deprecated Use SyncAction.SyncActionValue.BubbleLockMessageAction.$Properties instead.
         */
        interface IBubbleLockMessageAction extends SyncAction.SyncActionValue.BubbleLockMessageAction.$Properties {
        }

        /** Represents a BubbleLockMessageAction. */
        class BubbleLockMessageAction {

            /**
             * Constructs a new BubbleLockMessageAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.BubbleLockMessageAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BubbleLockMessageAction locked. */
            locked?: (boolean|null);

            /**
             * Creates a new BubbleLockMessageAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BubbleLockMessageAction instance
             */
            static create(properties: SyncAction.SyncActionValue.BubbleLockMessageAction.$Shape): SyncAction.SyncActionValue.BubbleLockMessageAction & SyncAction.SyncActionValue.BubbleLockMessageAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.BubbleLockMessageAction.$Properties): SyncAction.SyncActionValue.BubbleLockMessageAction;

            /**
             * Encodes the specified BubbleLockMessageAction message. Does not implicitly {@link SyncAction.SyncActionValue.BubbleLockMessageAction.verify|verify} messages.
             * @param message BubbleLockMessageAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.BubbleLockMessageAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BubbleLockMessageAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BubbleLockMessageAction.verify|verify} messages.
             * @param message BubbleLockMessageAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.BubbleLockMessageAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BubbleLockMessageAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.BubbleLockMessageAction & SyncAction.SyncActionValue.BubbleLockMessageAction.$Shape} BubbleLockMessageAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.BubbleLockMessageAction & SyncAction.SyncActionValue.BubbleLockMessageAction.$Shape;

            /**
             * Decodes a BubbleLockMessageAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.BubbleLockMessageAction & SyncAction.SyncActionValue.BubbleLockMessageAction.$Shape} BubbleLockMessageAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.BubbleLockMessageAction & SyncAction.SyncActionValue.BubbleLockMessageAction.$Shape;

            /**
             * Verifies a BubbleLockMessageAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BubbleLockMessageAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BubbleLockMessageAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.BubbleLockMessageAction;

            /**
             * Creates a plain object from a BubbleLockMessageAction message. Also converts values to other types if specified.
             * @param message BubbleLockMessageAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.BubbleLockMessageAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BubbleLockMessageAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BubbleLockMessageAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BubbleLockMessageAction {

            /** Properties of a BubbleLockMessageAction. */
            interface $Properties {

                /** BubbleLockMessageAction locked */
                locked?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BubbleLockMessageAction. */
            type $Shape = SyncAction.SyncActionValue.BubbleLockMessageAction.$Properties;
        }

        /**
         * Properties of a BusinessBroadcastAssociationAction.
         * @deprecated Use SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Properties instead.
         */
        interface IBusinessBroadcastAssociationAction extends SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Properties {
        }

        /** Represents a BusinessBroadcastAssociationAction. */
        class BusinessBroadcastAssociationAction {

            /**
             * Constructs a new BusinessBroadcastAssociationAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BusinessBroadcastAssociationAction deleted. */
            deleted?: (boolean|null);

            /**
             * Creates a new BusinessBroadcastAssociationAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BusinessBroadcastAssociationAction instance
             */
            static create(properties: SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Shape): SyncAction.SyncActionValue.BusinessBroadcastAssociationAction & SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Properties): SyncAction.SyncActionValue.BusinessBroadcastAssociationAction;

            /**
             * Encodes the specified BusinessBroadcastAssociationAction message. Does not implicitly {@link SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.verify|verify} messages.
             * @param message BusinessBroadcastAssociationAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BusinessBroadcastAssociationAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.verify|verify} messages.
             * @param message BusinessBroadcastAssociationAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BusinessBroadcastAssociationAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.BusinessBroadcastAssociationAction & SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Shape} BusinessBroadcastAssociationAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.BusinessBroadcastAssociationAction & SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Shape;

            /**
             * Decodes a BusinessBroadcastAssociationAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.BusinessBroadcastAssociationAction & SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Shape} BusinessBroadcastAssociationAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.BusinessBroadcastAssociationAction & SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Shape;

            /**
             * Verifies a BusinessBroadcastAssociationAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BusinessBroadcastAssociationAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BusinessBroadcastAssociationAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.BusinessBroadcastAssociationAction;

            /**
             * Creates a plain object from a BusinessBroadcastAssociationAction message. Also converts values to other types if specified.
             * @param message BusinessBroadcastAssociationAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.BusinessBroadcastAssociationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BusinessBroadcastAssociationAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BusinessBroadcastAssociationAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BusinessBroadcastAssociationAction {

            /** Properties of a BusinessBroadcastAssociationAction. */
            interface $Properties {

                /** BusinessBroadcastAssociationAction deleted */
                deleted?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BusinessBroadcastAssociationAction. */
            type $Shape = SyncAction.SyncActionValue.BusinessBroadcastAssociationAction.$Properties;
        }

        /**
         * Properties of a BusinessBroadcastCampaignAction.
         * @deprecated Use SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Properties instead.
         */
        interface IBusinessBroadcastCampaignAction extends SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Properties {
        }

        /** Represents a BusinessBroadcastCampaignAction. */
        class BusinessBroadcastCampaignAction {

            /**
             * Constructs a new BusinessBroadcastCampaignAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BusinessBroadcastCampaignAction deviceId. */
            deviceId?: (number|null);

            /** BusinessBroadcastCampaignAction adId. */
            adId?: (string|null);

            /** BusinessBroadcastCampaignAction name. */
            name?: (string|null);

            /** BusinessBroadcastCampaignAction msgId. */
            msgId?: (string|null);

            /** BusinessBroadcastCampaignAction broadcastJid. */
            broadcastJid?: (string|null);

            /** BusinessBroadcastCampaignAction reservedQuota. */
            reservedQuota?: (number|null);

            /** BusinessBroadcastCampaignAction scheduledTimestamp. */
            scheduledTimestamp?: (number|Long|null);

            /** BusinessBroadcastCampaignAction createTimestamp. */
            createTimestamp?: (number|Long|null);

            /** BusinessBroadcastCampaignAction status. */
            status?: (SyncAction.SyncActionValue.BusinessBroadcastCampaignStatus|null);

            /** BusinessBroadcastCampaignAction bbProStatus. */
            bbProStatus?: (SyncAction.SyncActionValue.BusinessBroadcastCampaignBBProStatus|null);

            /** BusinessBroadcastCampaignAction customAudienceFbid. */
            customAudienceFbid?: (string|null);

            /**
             * Creates a new BusinessBroadcastCampaignAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BusinessBroadcastCampaignAction instance
             */
            static create(properties: SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Shape): SyncAction.SyncActionValue.BusinessBroadcastCampaignAction & SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Properties): SyncAction.SyncActionValue.BusinessBroadcastCampaignAction;

            /**
             * Encodes the specified BusinessBroadcastCampaignAction message. Does not implicitly {@link SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.verify|verify} messages.
             * @param message BusinessBroadcastCampaignAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BusinessBroadcastCampaignAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.verify|verify} messages.
             * @param message BusinessBroadcastCampaignAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BusinessBroadcastCampaignAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.BusinessBroadcastCampaignAction & SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Shape} BusinessBroadcastCampaignAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.BusinessBroadcastCampaignAction & SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Shape;

            /**
             * Decodes a BusinessBroadcastCampaignAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.BusinessBroadcastCampaignAction & SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Shape} BusinessBroadcastCampaignAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.BusinessBroadcastCampaignAction & SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Shape;

            /**
             * Verifies a BusinessBroadcastCampaignAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BusinessBroadcastCampaignAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BusinessBroadcastCampaignAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.BusinessBroadcastCampaignAction;

            /**
             * Creates a plain object from a BusinessBroadcastCampaignAction message. Also converts values to other types if specified.
             * @param message BusinessBroadcastCampaignAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.BusinessBroadcastCampaignAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BusinessBroadcastCampaignAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BusinessBroadcastCampaignAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BusinessBroadcastCampaignAction {

            /** Properties of a BusinessBroadcastCampaignAction. */
            interface $Properties {

                /** BusinessBroadcastCampaignAction deviceId */
                deviceId?: (number|null);

                /** BusinessBroadcastCampaignAction adId */
                adId?: (string|null);

                /** BusinessBroadcastCampaignAction name */
                name?: (string|null);

                /** BusinessBroadcastCampaignAction msgId */
                msgId?: (string|null);

                /** BusinessBroadcastCampaignAction broadcastJid */
                broadcastJid?: (string|null);

                /** BusinessBroadcastCampaignAction reservedQuota */
                reservedQuota?: (number|null);

                /** BusinessBroadcastCampaignAction scheduledTimestamp */
                scheduledTimestamp?: (number|Long|null);

                /** BusinessBroadcastCampaignAction createTimestamp */
                createTimestamp?: (number|Long|null);

                /** BusinessBroadcastCampaignAction status */
                status?: (SyncAction.SyncActionValue.BusinessBroadcastCampaignStatus|null);

                /** BusinessBroadcastCampaignAction bbProStatus */
                bbProStatus?: (SyncAction.SyncActionValue.BusinessBroadcastCampaignBBProStatus|null);

                /** BusinessBroadcastCampaignAction customAudienceFbid */
                customAudienceFbid?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BusinessBroadcastCampaignAction. */
            type $Shape = SyncAction.SyncActionValue.BusinessBroadcastCampaignAction.$Properties;
        }

        /** BusinessBroadcastCampaignBBProStatus enum. */
        enum BusinessBroadcastCampaignBBProStatus {

            /** BB_PRO_ACTIVE value */
            BB_PRO_ACTIVE = 1,

            /** BB_PRO_COMPLETED value */
            BB_PRO_COMPLETED = 2,

            /** BB_PRO_IN_DRAFT value */
            BB_PRO_IN_DRAFT = 3,

            /** BB_PRO_IN_REVIEW value */
            BB_PRO_IN_REVIEW = 4,

            /** BB_PRO_NOT_SENDING value */
            BB_PRO_NOT_SENDING = 5,

            /** BB_PRO_OFF value */
            BB_PRO_OFF = 6,

            /** BB_PRO_REJECTED value */
            BB_PRO_REJECTED = 7,

            /** BB_PRO_SCHEDULED value */
            BB_PRO_SCHEDULED = 8,

            /** BB_PRO_SENDING_LIMITED value */
            BB_PRO_SENDING_LIMITED = 9,

            /** BB_PRO_PROCESSING value */
            BB_PRO_PROCESSING = 10
        }

        /** BusinessBroadcastCampaignStatus enum. */
        enum BusinessBroadcastCampaignStatus {

            /** DRAFT value */
            DRAFT = 1,

            /** SCHEDULED value */
            SCHEDULED = 2,

            /** PROCESSING value */
            PROCESSING = 3,

            /** FAILED value */
            FAILED = 4,

            /** SENT value */
            SENT = 5
        }

        /**
         * Properties of a BusinessBroadcastInsightsAction.
         * @deprecated Use SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Properties instead.
         */
        interface IBusinessBroadcastInsightsAction extends SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Properties {
        }

        /** Represents a BusinessBroadcastInsightsAction. */
        class BusinessBroadcastInsightsAction {

            /**
             * Constructs a new BusinessBroadcastInsightsAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BusinessBroadcastInsightsAction recipientCount. */
            recipientCount?: (number|null);

            /** BusinessBroadcastInsightsAction deliveredCount. */
            deliveredCount?: (number|null);

            /** BusinessBroadcastInsightsAction readCount. */
            readCount?: (number|null);

            /** BusinessBroadcastInsightsAction repliedCount. */
            repliedCount?: (number|null);

            /** BusinessBroadcastInsightsAction quickReplyCount. */
            quickReplyCount?: (number|null);

            /**
             * Creates a new BusinessBroadcastInsightsAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BusinessBroadcastInsightsAction instance
             */
            static create(properties: SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Shape): SyncAction.SyncActionValue.BusinessBroadcastInsightsAction & SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Properties): SyncAction.SyncActionValue.BusinessBroadcastInsightsAction;

            /**
             * Encodes the specified BusinessBroadcastInsightsAction message. Does not implicitly {@link SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.verify|verify} messages.
             * @param message BusinessBroadcastInsightsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BusinessBroadcastInsightsAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.verify|verify} messages.
             * @param message BusinessBroadcastInsightsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BusinessBroadcastInsightsAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.BusinessBroadcastInsightsAction & SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Shape} BusinessBroadcastInsightsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.BusinessBroadcastInsightsAction & SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Shape;

            /**
             * Decodes a BusinessBroadcastInsightsAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.BusinessBroadcastInsightsAction & SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Shape} BusinessBroadcastInsightsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.BusinessBroadcastInsightsAction & SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Shape;

            /**
             * Verifies a BusinessBroadcastInsightsAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BusinessBroadcastInsightsAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BusinessBroadcastInsightsAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.BusinessBroadcastInsightsAction;

            /**
             * Creates a plain object from a BusinessBroadcastInsightsAction message. Also converts values to other types if specified.
             * @param message BusinessBroadcastInsightsAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.BusinessBroadcastInsightsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BusinessBroadcastInsightsAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BusinessBroadcastInsightsAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BusinessBroadcastInsightsAction {

            /** Properties of a BusinessBroadcastInsightsAction. */
            interface $Properties {

                /** BusinessBroadcastInsightsAction recipientCount */
                recipientCount?: (number|null);

                /** BusinessBroadcastInsightsAction deliveredCount */
                deliveredCount?: (number|null);

                /** BusinessBroadcastInsightsAction readCount */
                readCount?: (number|null);

                /** BusinessBroadcastInsightsAction repliedCount */
                repliedCount?: (number|null);

                /** BusinessBroadcastInsightsAction quickReplyCount */
                quickReplyCount?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BusinessBroadcastInsightsAction. */
            type $Shape = SyncAction.SyncActionValue.BusinessBroadcastInsightsAction.$Properties;
        }

        /**
         * Properties of a BusinessBroadcastListAction.
         * @deprecated Use SyncAction.SyncActionValue.BusinessBroadcastListAction.$Properties instead.
         */
        interface IBusinessBroadcastListAction extends SyncAction.SyncActionValue.BusinessBroadcastListAction.$Properties {
        }

        /** Represents a BusinessBroadcastListAction. */
        class BusinessBroadcastListAction {

            /**
             * Constructs a new BusinessBroadcastListAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.BusinessBroadcastListAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BusinessBroadcastListAction deleted. */
            deleted?: (boolean|null);

            /** BusinessBroadcastListAction participants. */
            participants: SyncAction.SyncActionValue.BroadcastListParticipant.$Properties[];

            /** BusinessBroadcastListAction listName. */
            listName?: (string|null);

            /** BusinessBroadcastListAction labelIds. */
            labelIds: string[];

            /** BusinessBroadcastListAction audienceExpression. */
            audienceExpression?: (string|null);

            /** BusinessBroadcastListAction customAudienceFbid. */
            customAudienceFbid?: (string|null);

            /**
             * Creates a new BusinessBroadcastListAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BusinessBroadcastListAction instance
             */
            static create(properties: SyncAction.SyncActionValue.BusinessBroadcastListAction.$Shape): SyncAction.SyncActionValue.BusinessBroadcastListAction & SyncAction.SyncActionValue.BusinessBroadcastListAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.BusinessBroadcastListAction.$Properties): SyncAction.SyncActionValue.BusinessBroadcastListAction;

            /**
             * Encodes the specified BusinessBroadcastListAction message. Does not implicitly {@link SyncAction.SyncActionValue.BusinessBroadcastListAction.verify|verify} messages.
             * @param message BusinessBroadcastListAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.BusinessBroadcastListAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BusinessBroadcastListAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BusinessBroadcastListAction.verify|verify} messages.
             * @param message BusinessBroadcastListAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.BusinessBroadcastListAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BusinessBroadcastListAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.BusinessBroadcastListAction & SyncAction.SyncActionValue.BusinessBroadcastListAction.$Shape} BusinessBroadcastListAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.BusinessBroadcastListAction & SyncAction.SyncActionValue.BusinessBroadcastListAction.$Shape;

            /**
             * Decodes a BusinessBroadcastListAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.BusinessBroadcastListAction & SyncAction.SyncActionValue.BusinessBroadcastListAction.$Shape} BusinessBroadcastListAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.BusinessBroadcastListAction & SyncAction.SyncActionValue.BusinessBroadcastListAction.$Shape;

            /**
             * Verifies a BusinessBroadcastListAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BusinessBroadcastListAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BusinessBroadcastListAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.BusinessBroadcastListAction;

            /**
             * Creates a plain object from a BusinessBroadcastListAction message. Also converts values to other types if specified.
             * @param message BusinessBroadcastListAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.BusinessBroadcastListAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BusinessBroadcastListAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BusinessBroadcastListAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BusinessBroadcastListAction {

            /** Properties of a BusinessBroadcastListAction. */
            interface $Properties {

                /** BusinessBroadcastListAction deleted */
                deleted?: (boolean|null);

                /** BusinessBroadcastListAction participants */
                participants?: (SyncAction.SyncActionValue.BroadcastListParticipant.$Properties[]|null);

                /** BusinessBroadcastListAction listName */
                listName?: (string|null);

                /** BusinessBroadcastListAction labelIds */
                labelIds?: (string[]|null);

                /** BusinessBroadcastListAction audienceExpression */
                audienceExpression?: (string|null);

                /** BusinessBroadcastListAction customAudienceFbid */
                customAudienceFbid?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BusinessBroadcastListAction. */
            type $Shape = SyncAction.SyncActionValue.BusinessBroadcastListAction.$Properties;
        }

        /**
         * Properties of a BusinessFolderActivationAction.
         * @deprecated Use SyncAction.SyncActionValue.BusinessFolderActivationAction.$Properties instead.
         */
        interface IBusinessFolderActivationAction extends SyncAction.SyncActionValue.BusinessFolderActivationAction.$Properties {
        }

        /** Represents a BusinessFolderActivationAction. */
        class BusinessFolderActivationAction {

            /**
             * Constructs a new BusinessFolderActivationAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.BusinessFolderActivationAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BusinessFolderActivationAction activated. */
            activated?: (boolean|null);

            /**
             * Creates a new BusinessFolderActivationAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BusinessFolderActivationAction instance
             */
            static create(properties: SyncAction.SyncActionValue.BusinessFolderActivationAction.$Shape): SyncAction.SyncActionValue.BusinessFolderActivationAction & SyncAction.SyncActionValue.BusinessFolderActivationAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.BusinessFolderActivationAction.$Properties): SyncAction.SyncActionValue.BusinessFolderActivationAction;

            /**
             * Encodes the specified BusinessFolderActivationAction message. Does not implicitly {@link SyncAction.SyncActionValue.BusinessFolderActivationAction.verify|verify} messages.
             * @param message BusinessFolderActivationAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.BusinessFolderActivationAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BusinessFolderActivationAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BusinessFolderActivationAction.verify|verify} messages.
             * @param message BusinessFolderActivationAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.BusinessFolderActivationAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BusinessFolderActivationAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.BusinessFolderActivationAction & SyncAction.SyncActionValue.BusinessFolderActivationAction.$Shape} BusinessFolderActivationAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.BusinessFolderActivationAction & SyncAction.SyncActionValue.BusinessFolderActivationAction.$Shape;

            /**
             * Decodes a BusinessFolderActivationAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.BusinessFolderActivationAction & SyncAction.SyncActionValue.BusinessFolderActivationAction.$Shape} BusinessFolderActivationAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.BusinessFolderActivationAction & SyncAction.SyncActionValue.BusinessFolderActivationAction.$Shape;

            /**
             * Verifies a BusinessFolderActivationAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BusinessFolderActivationAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BusinessFolderActivationAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.BusinessFolderActivationAction;

            /**
             * Creates a plain object from a BusinessFolderActivationAction message. Also converts values to other types if specified.
             * @param message BusinessFolderActivationAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.BusinessFolderActivationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BusinessFolderActivationAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BusinessFolderActivationAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BusinessFolderActivationAction {

            /** Properties of a BusinessFolderActivationAction. */
            interface $Properties {

                /** BusinessFolderActivationAction activated */
                activated?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BusinessFolderActivationAction. */
            type $Shape = SyncAction.SyncActionValue.BusinessFolderActivationAction.$Properties;
        }

        /**
         * Properties of a CallLogAction.
         * @deprecated Use SyncAction.SyncActionValue.CallLogAction.$Properties instead.
         */
        interface ICallLogAction extends SyncAction.SyncActionValue.CallLogAction.$Properties {
        }

        /** Represents a CallLogAction. */
        class CallLogAction {

            /**
             * Constructs a new CallLogAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.CallLogAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CallLogAction callLogRecord. */
            callLogRecord?: (SyncAction.CallLogRecord.$Properties|null);

            /**
             * Creates a new CallLogAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CallLogAction instance
             */
            static create(properties: SyncAction.SyncActionValue.CallLogAction.$Shape): SyncAction.SyncActionValue.CallLogAction & SyncAction.SyncActionValue.CallLogAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.CallLogAction.$Properties): SyncAction.SyncActionValue.CallLogAction;

            /**
             * Encodes the specified CallLogAction message. Does not implicitly {@link SyncAction.SyncActionValue.CallLogAction.verify|verify} messages.
             * @param message CallLogAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.CallLogAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CallLogAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CallLogAction.verify|verify} messages.
             * @param message CallLogAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.CallLogAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CallLogAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.CallLogAction & SyncAction.SyncActionValue.CallLogAction.$Shape} CallLogAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CallLogAction & SyncAction.SyncActionValue.CallLogAction.$Shape;

            /**
             * Decodes a CallLogAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.CallLogAction & SyncAction.SyncActionValue.CallLogAction.$Shape} CallLogAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CallLogAction & SyncAction.SyncActionValue.CallLogAction.$Shape;

            /**
             * Verifies a CallLogAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CallLogAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CallLogAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CallLogAction;

            /**
             * Creates a plain object from a CallLogAction message. Also converts values to other types if specified.
             * @param message CallLogAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.CallLogAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CallLogAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CallLogAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CallLogAction {

            /** Properties of a CallLogAction. */
            interface $Properties {

                /** CallLogAction callLogRecord */
                callLogRecord?: (SyncAction.CallLogRecord.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CallLogAction. */
            type $Shape = SyncAction.SyncActionValue.CallLogAction.$Properties;
        }

        /**
         * Properties of a ChatAssignmentAction.
         * @deprecated Use SyncAction.SyncActionValue.ChatAssignmentAction.$Properties instead.
         */
        interface IChatAssignmentAction extends SyncAction.SyncActionValue.ChatAssignmentAction.$Properties {
        }

        /** Represents a ChatAssignmentAction. */
        class ChatAssignmentAction {

            /**
             * Constructs a new ChatAssignmentAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.ChatAssignmentAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ChatAssignmentAction deviceAgentId. */
            deviceAgentId?: (string|null);

            /**
             * Creates a new ChatAssignmentAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatAssignmentAction instance
             */
            static create(properties: SyncAction.SyncActionValue.ChatAssignmentAction.$Shape): SyncAction.SyncActionValue.ChatAssignmentAction & SyncAction.SyncActionValue.ChatAssignmentAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.ChatAssignmentAction.$Properties): SyncAction.SyncActionValue.ChatAssignmentAction;

            /**
             * Encodes the specified ChatAssignmentAction message. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentAction.verify|verify} messages.
             * @param message ChatAssignmentAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.ChatAssignmentAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatAssignmentAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentAction.verify|verify} messages.
             * @param message ChatAssignmentAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.ChatAssignmentAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatAssignmentAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.ChatAssignmentAction & SyncAction.SyncActionValue.ChatAssignmentAction.$Shape} ChatAssignmentAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ChatAssignmentAction & SyncAction.SyncActionValue.ChatAssignmentAction.$Shape;

            /**
             * Decodes a ChatAssignmentAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.ChatAssignmentAction & SyncAction.SyncActionValue.ChatAssignmentAction.$Shape} ChatAssignmentAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ChatAssignmentAction & SyncAction.SyncActionValue.ChatAssignmentAction.$Shape;

            /**
             * Verifies a ChatAssignmentAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatAssignmentAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatAssignmentAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ChatAssignmentAction;

            /**
             * Creates a plain object from a ChatAssignmentAction message. Also converts values to other types if specified.
             * @param message ChatAssignmentAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.ChatAssignmentAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatAssignmentAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ChatAssignmentAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ChatAssignmentAction {

            /** Properties of a ChatAssignmentAction. */
            interface $Properties {

                /** ChatAssignmentAction deviceAgentId */
                deviceAgentId?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ChatAssignmentAction. */
            type $Shape = SyncAction.SyncActionValue.ChatAssignmentAction.$Properties;
        }

        /**
         * Properties of a ChatAssignmentOpenedStatusAction.
         * @deprecated Use SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Properties instead.
         */
        interface IChatAssignmentOpenedStatusAction extends SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Properties {
        }

        /** Represents a ChatAssignmentOpenedStatusAction. */
        class ChatAssignmentOpenedStatusAction {

            /**
             * Constructs a new ChatAssignmentOpenedStatusAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ChatAssignmentOpenedStatusAction chatOpened. */
            chatOpened?: (boolean|null);

            /**
             * Creates a new ChatAssignmentOpenedStatusAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatAssignmentOpenedStatusAction instance
             */
            static create(properties: SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Shape): SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction & SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Properties): SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction;

            /**
             * Encodes the specified ChatAssignmentOpenedStatusAction message. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.verify|verify} messages.
             * @param message ChatAssignmentOpenedStatusAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatAssignmentOpenedStatusAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.verify|verify} messages.
             * @param message ChatAssignmentOpenedStatusAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatAssignmentOpenedStatusAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction & SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Shape} ChatAssignmentOpenedStatusAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction & SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Shape;

            /**
             * Decodes a ChatAssignmentOpenedStatusAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction & SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Shape} ChatAssignmentOpenedStatusAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction & SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Shape;

            /**
             * Verifies a ChatAssignmentOpenedStatusAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatAssignmentOpenedStatusAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatAssignmentOpenedStatusAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction;

            /**
             * Creates a plain object from a ChatAssignmentOpenedStatusAction message. Also converts values to other types if specified.
             * @param message ChatAssignmentOpenedStatusAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatAssignmentOpenedStatusAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ChatAssignmentOpenedStatusAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ChatAssignmentOpenedStatusAction {

            /** Properties of a ChatAssignmentOpenedStatusAction. */
            interface $Properties {

                /** ChatAssignmentOpenedStatusAction chatOpened */
                chatOpened?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ChatAssignmentOpenedStatusAction. */
            type $Shape = SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.$Properties;
        }

        /**
         * Properties of a ClearChatAction.
         * @deprecated Use SyncAction.SyncActionValue.ClearChatAction.$Properties instead.
         */
        interface IClearChatAction extends SyncAction.SyncActionValue.ClearChatAction.$Properties {
        }

        /** Represents a ClearChatAction. */
        class ClearChatAction {

            /**
             * Constructs a new ClearChatAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.ClearChatAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ClearChatAction messageRange. */
            messageRange?: (SyncAction.SyncActionValue.SyncActionMessageRange.$Properties|null);

            /**
             * Creates a new ClearChatAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClearChatAction instance
             */
            static create(properties: SyncAction.SyncActionValue.ClearChatAction.$Shape): SyncAction.SyncActionValue.ClearChatAction & SyncAction.SyncActionValue.ClearChatAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.ClearChatAction.$Properties): SyncAction.SyncActionValue.ClearChatAction;

            /**
             * Encodes the specified ClearChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.ClearChatAction.verify|verify} messages.
             * @param message ClearChatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.ClearChatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClearChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ClearChatAction.verify|verify} messages.
             * @param message ClearChatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.ClearChatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClearChatAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.ClearChatAction & SyncAction.SyncActionValue.ClearChatAction.$Shape} ClearChatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ClearChatAction & SyncAction.SyncActionValue.ClearChatAction.$Shape;

            /**
             * Decodes a ClearChatAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.ClearChatAction & SyncAction.SyncActionValue.ClearChatAction.$Shape} ClearChatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ClearChatAction & SyncAction.SyncActionValue.ClearChatAction.$Shape;

            /**
             * Verifies a ClearChatAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClearChatAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClearChatAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ClearChatAction;

            /**
             * Creates a plain object from a ClearChatAction message. Also converts values to other types if specified.
             * @param message ClearChatAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.ClearChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClearChatAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ClearChatAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ClearChatAction {

            /** Properties of a ClearChatAction. */
            interface $Properties {

                /** ClearChatAction messageRange */
                messageRange?: (SyncAction.SyncActionValue.SyncActionMessageRange.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ClearChatAction. */
            type $Shape = SyncAction.SyncActionValue.ClearChatAction.$Properties;
        }

        /**
         * Properties of a CoexV2VersionAction.
         * @deprecated Use SyncAction.SyncActionValue.CoexV2VersionAction.$Properties instead.
         */
        interface ICoexV2VersionAction extends SyncAction.SyncActionValue.CoexV2VersionAction.$Properties {
        }

        /** Represents a CoexV2VersionAction. */
        class CoexV2VersionAction {

            /**
             * Constructs a new CoexV2VersionAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.CoexV2VersionAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CoexV2VersionAction version. */
            version?: (number|Long|null);

            /**
             * Creates a new CoexV2VersionAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CoexV2VersionAction instance
             */
            static create(properties: SyncAction.SyncActionValue.CoexV2VersionAction.$Shape): SyncAction.SyncActionValue.CoexV2VersionAction & SyncAction.SyncActionValue.CoexV2VersionAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.CoexV2VersionAction.$Properties): SyncAction.SyncActionValue.CoexV2VersionAction;

            /**
             * Encodes the specified CoexV2VersionAction message. Does not implicitly {@link SyncAction.SyncActionValue.CoexV2VersionAction.verify|verify} messages.
             * @param message CoexV2VersionAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.CoexV2VersionAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CoexV2VersionAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CoexV2VersionAction.verify|verify} messages.
             * @param message CoexV2VersionAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.CoexV2VersionAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CoexV2VersionAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.CoexV2VersionAction & SyncAction.SyncActionValue.CoexV2VersionAction.$Shape} CoexV2VersionAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CoexV2VersionAction & SyncAction.SyncActionValue.CoexV2VersionAction.$Shape;

            /**
             * Decodes a CoexV2VersionAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.CoexV2VersionAction & SyncAction.SyncActionValue.CoexV2VersionAction.$Shape} CoexV2VersionAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CoexV2VersionAction & SyncAction.SyncActionValue.CoexV2VersionAction.$Shape;

            /**
             * Verifies a CoexV2VersionAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CoexV2VersionAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CoexV2VersionAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CoexV2VersionAction;

            /**
             * Creates a plain object from a CoexV2VersionAction message. Also converts values to other types if specified.
             * @param message CoexV2VersionAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.CoexV2VersionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CoexV2VersionAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CoexV2VersionAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CoexV2VersionAction {

            /** Properties of a CoexV2VersionAction. */
            interface $Properties {

                /** CoexV2VersionAction version */
                version?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CoexV2VersionAction. */
            type $Shape = SyncAction.SyncActionValue.CoexV2VersionAction.$Properties;
        }

        /**
         * Properties of a CommunityNestingStateAction.
         * @deprecated Use SyncAction.SyncActionValue.CommunityNestingStateAction.$Properties instead.
         */
        interface ICommunityNestingStateAction extends SyncAction.SyncActionValue.CommunityNestingStateAction.$Properties {
        }

        /** Represents a CommunityNestingStateAction. */
        class CommunityNestingStateAction {

            /**
             * Constructs a new CommunityNestingStateAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.CommunityNestingStateAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CommunityNestingStateAction nestingState. */
            nestingState?: (SyncAction.SyncActionValue.CommunityNestingStateAction.NestingState|null);

            /**
             * Creates a new CommunityNestingStateAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommunityNestingStateAction instance
             */
            static create(properties: SyncAction.SyncActionValue.CommunityNestingStateAction.$Shape): SyncAction.SyncActionValue.CommunityNestingStateAction & SyncAction.SyncActionValue.CommunityNestingStateAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.CommunityNestingStateAction.$Properties): SyncAction.SyncActionValue.CommunityNestingStateAction;

            /**
             * Encodes the specified CommunityNestingStateAction message. Does not implicitly {@link SyncAction.SyncActionValue.CommunityNestingStateAction.verify|verify} messages.
             * @param message CommunityNestingStateAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.CommunityNestingStateAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommunityNestingStateAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CommunityNestingStateAction.verify|verify} messages.
             * @param message CommunityNestingStateAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.CommunityNestingStateAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommunityNestingStateAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.CommunityNestingStateAction & SyncAction.SyncActionValue.CommunityNestingStateAction.$Shape} CommunityNestingStateAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CommunityNestingStateAction & SyncAction.SyncActionValue.CommunityNestingStateAction.$Shape;

            /**
             * Decodes a CommunityNestingStateAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.CommunityNestingStateAction & SyncAction.SyncActionValue.CommunityNestingStateAction.$Shape} CommunityNestingStateAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CommunityNestingStateAction & SyncAction.SyncActionValue.CommunityNestingStateAction.$Shape;

            /**
             * Verifies a CommunityNestingStateAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommunityNestingStateAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommunityNestingStateAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CommunityNestingStateAction;

            /**
             * Creates a plain object from a CommunityNestingStateAction message. Also converts values to other types if specified.
             * @param message CommunityNestingStateAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.CommunityNestingStateAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommunityNestingStateAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CommunityNestingStateAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CommunityNestingStateAction {

            /** Properties of a CommunityNestingStateAction. */
            interface $Properties {

                /** CommunityNestingStateAction nestingState */
                nestingState?: (SyncAction.SyncActionValue.CommunityNestingStateAction.NestingState|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CommunityNestingStateAction. */
            type $Shape = SyncAction.SyncActionValue.CommunityNestingStateAction.$Properties;

            /** NestingState enum. */
            enum NestingState {

                /** PLATFORM_DEFAULT value */
                PLATFORM_DEFAULT = 0,

                /** NESTED value */
                NESTED = 1,

                /** UNNESTED value */
                UNNESTED = 2
            }
        }

        /**
         * Properties of a ContactAction.
         * @deprecated Use SyncAction.SyncActionValue.ContactAction.$Properties instead.
         */
        interface IContactAction extends SyncAction.SyncActionValue.ContactAction.$Properties {
        }

        /** Represents a ContactAction. */
        class ContactAction {

            /**
             * Constructs a new ContactAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.ContactAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ContactAction fullName. */
            fullName?: (string|null);

            /** ContactAction firstName. */
            firstName?: (string|null);

            /** ContactAction lidJid. */
            lidJid?: (string|null);

            /** ContactAction saveOnPrimaryAddressbook. */
            saveOnPrimaryAddressbook?: (boolean|null);

            /** ContactAction pnJid. */
            pnJid?: (string|null);

            /** ContactAction username. */
            username?: (string|null);

            /** ContactAction birthday. */
            birthday?: (string|null);

            /**
             * Creates a new ContactAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContactAction instance
             */
            static create(properties: SyncAction.SyncActionValue.ContactAction.$Shape): SyncAction.SyncActionValue.ContactAction & SyncAction.SyncActionValue.ContactAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.ContactAction.$Properties): SyncAction.SyncActionValue.ContactAction;

            /**
             * Encodes the specified ContactAction message. Does not implicitly {@link SyncAction.SyncActionValue.ContactAction.verify|verify} messages.
             * @param message ContactAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.ContactAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContactAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ContactAction.verify|verify} messages.
             * @param message ContactAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.ContactAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContactAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.ContactAction & SyncAction.SyncActionValue.ContactAction.$Shape} ContactAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ContactAction & SyncAction.SyncActionValue.ContactAction.$Shape;

            /**
             * Decodes a ContactAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.ContactAction & SyncAction.SyncActionValue.ContactAction.$Shape} ContactAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ContactAction & SyncAction.SyncActionValue.ContactAction.$Shape;

            /**
             * Verifies a ContactAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContactAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContactAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ContactAction;

            /**
             * Creates a plain object from a ContactAction message. Also converts values to other types if specified.
             * @param message ContactAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.ContactAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContactAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ContactAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ContactAction {

            /** Properties of a ContactAction. */
            interface $Properties {

                /** ContactAction fullName */
                fullName?: (string|null);

                /** ContactAction firstName */
                firstName?: (string|null);

                /** ContactAction lidJid */
                lidJid?: (string|null);

                /** ContactAction saveOnPrimaryAddressbook */
                saveOnPrimaryAddressbook?: (boolean|null);

                /** ContactAction pnJid */
                pnJid?: (string|null);

                /** ContactAction username */
                username?: (string|null);

                /** ContactAction birthday */
                birthday?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ContactAction. */
            type $Shape = SyncAction.SyncActionValue.ContactAction.$Properties;
        }

        /**
         * Properties of a ContactManagerMetadataAction.
         * @deprecated Use SyncAction.SyncActionValue.ContactManagerMetadataAction.$Properties instead.
         */
        interface IContactManagerMetadataAction extends SyncAction.SyncActionValue.ContactManagerMetadataAction.$Properties {
        }

        /** Represents a ContactManagerMetadataAction. */
        class ContactManagerMetadataAction {

            /**
             * Constructs a new ContactManagerMetadataAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.ContactManagerMetadataAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ContactManagerMetadataAction isHidden. */
            isHidden?: (boolean|null);

            /**
             * Creates a new ContactManagerMetadataAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContactManagerMetadataAction instance
             */
            static create(properties: SyncAction.SyncActionValue.ContactManagerMetadataAction.$Shape): SyncAction.SyncActionValue.ContactManagerMetadataAction & SyncAction.SyncActionValue.ContactManagerMetadataAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.ContactManagerMetadataAction.$Properties): SyncAction.SyncActionValue.ContactManagerMetadataAction;

            /**
             * Encodes the specified ContactManagerMetadataAction message. Does not implicitly {@link SyncAction.SyncActionValue.ContactManagerMetadataAction.verify|verify} messages.
             * @param message ContactManagerMetadataAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.ContactManagerMetadataAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContactManagerMetadataAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ContactManagerMetadataAction.verify|verify} messages.
             * @param message ContactManagerMetadataAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.ContactManagerMetadataAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContactManagerMetadataAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.ContactManagerMetadataAction & SyncAction.SyncActionValue.ContactManagerMetadataAction.$Shape} ContactManagerMetadataAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ContactManagerMetadataAction & SyncAction.SyncActionValue.ContactManagerMetadataAction.$Shape;

            /**
             * Decodes a ContactManagerMetadataAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.ContactManagerMetadataAction & SyncAction.SyncActionValue.ContactManagerMetadataAction.$Shape} ContactManagerMetadataAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ContactManagerMetadataAction & SyncAction.SyncActionValue.ContactManagerMetadataAction.$Shape;

            /**
             * Verifies a ContactManagerMetadataAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContactManagerMetadataAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContactManagerMetadataAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ContactManagerMetadataAction;

            /**
             * Creates a plain object from a ContactManagerMetadataAction message. Also converts values to other types if specified.
             * @param message ContactManagerMetadataAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.ContactManagerMetadataAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContactManagerMetadataAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ContactManagerMetadataAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ContactManagerMetadataAction {

            /** Properties of a ContactManagerMetadataAction. */
            interface $Properties {

                /** ContactManagerMetadataAction isHidden */
                isHidden?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ContactManagerMetadataAction. */
            type $Shape = SyncAction.SyncActionValue.ContactManagerMetadataAction.$Properties;
        }

        /**
         * Properties of a CtwaMessageReceivedAction.
         * @deprecated Use SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Properties instead.
         */
        interface ICtwaMessageReceivedAction extends SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Properties {
        }

        /** Represents a CtwaMessageReceivedAction. */
        class CtwaMessageReceivedAction {

            /**
             * Constructs a new CtwaMessageReceivedAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CtwaMessageReceivedAction isCtwaMessageReceived. */
            isCtwaMessageReceived?: (boolean|null);

            /**
             * Creates a new CtwaMessageReceivedAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CtwaMessageReceivedAction instance
             */
            static create(properties: SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Shape): SyncAction.SyncActionValue.CtwaMessageReceivedAction & SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Properties): SyncAction.SyncActionValue.CtwaMessageReceivedAction;

            /**
             * Encodes the specified CtwaMessageReceivedAction message. Does not implicitly {@link SyncAction.SyncActionValue.CtwaMessageReceivedAction.verify|verify} messages.
             * @param message CtwaMessageReceivedAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CtwaMessageReceivedAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CtwaMessageReceivedAction.verify|verify} messages.
             * @param message CtwaMessageReceivedAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CtwaMessageReceivedAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.CtwaMessageReceivedAction & SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Shape} CtwaMessageReceivedAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CtwaMessageReceivedAction & SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Shape;

            /**
             * Decodes a CtwaMessageReceivedAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.CtwaMessageReceivedAction & SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Shape} CtwaMessageReceivedAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CtwaMessageReceivedAction & SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Shape;

            /**
             * Verifies a CtwaMessageReceivedAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CtwaMessageReceivedAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CtwaMessageReceivedAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CtwaMessageReceivedAction;

            /**
             * Creates a plain object from a CtwaMessageReceivedAction message. Also converts values to other types if specified.
             * @param message CtwaMessageReceivedAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.CtwaMessageReceivedAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CtwaMessageReceivedAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CtwaMessageReceivedAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CtwaMessageReceivedAction {

            /** Properties of a CtwaMessageReceivedAction. */
            interface $Properties {

                /** CtwaMessageReceivedAction isCtwaMessageReceived */
                isCtwaMessageReceived?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CtwaMessageReceivedAction. */
            type $Shape = SyncAction.SyncActionValue.CtwaMessageReceivedAction.$Properties;
        }

        /**
         * Properties of a CtwaPerCustomerDataSharingAction.
         * @deprecated Use SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Properties instead.
         */
        interface ICtwaPerCustomerDataSharingAction extends SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Properties {
        }

        /** Represents a CtwaPerCustomerDataSharingAction. */
        class CtwaPerCustomerDataSharingAction {

            /**
             * Constructs a new CtwaPerCustomerDataSharingAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CtwaPerCustomerDataSharingAction isCtwaPerCustomerDataSharingEnabled. */
            isCtwaPerCustomerDataSharingEnabled?: (boolean|null);

            /**
             * Creates a new CtwaPerCustomerDataSharingAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CtwaPerCustomerDataSharingAction instance
             */
            static create(properties: SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Shape): SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction & SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Properties): SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction;

            /**
             * Encodes the specified CtwaPerCustomerDataSharingAction message. Does not implicitly {@link SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.verify|verify} messages.
             * @param message CtwaPerCustomerDataSharingAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CtwaPerCustomerDataSharingAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.verify|verify} messages.
             * @param message CtwaPerCustomerDataSharingAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CtwaPerCustomerDataSharingAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction & SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Shape} CtwaPerCustomerDataSharingAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction & SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Shape;

            /**
             * Decodes a CtwaPerCustomerDataSharingAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction & SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Shape} CtwaPerCustomerDataSharingAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction & SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Shape;

            /**
             * Verifies a CtwaPerCustomerDataSharingAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CtwaPerCustomerDataSharingAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CtwaPerCustomerDataSharingAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction;

            /**
             * Creates a plain object from a CtwaPerCustomerDataSharingAction message. Also converts values to other types if specified.
             * @param message CtwaPerCustomerDataSharingAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CtwaPerCustomerDataSharingAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CtwaPerCustomerDataSharingAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CtwaPerCustomerDataSharingAction {

            /** Properties of a CtwaPerCustomerDataSharingAction. */
            interface $Properties {

                /** CtwaPerCustomerDataSharingAction isCtwaPerCustomerDataSharingEnabled */
                isCtwaPerCustomerDataSharingEnabled?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CtwaPerCustomerDataSharingAction. */
            type $Shape = SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.$Properties;
        }

        /**
         * Properties of a CustomPaymentMethod.
         * @deprecated Use SyncAction.SyncActionValue.CustomPaymentMethod.$Properties instead.
         */
        interface ICustomPaymentMethod extends SyncAction.SyncActionValue.CustomPaymentMethod.$Properties {
        }

        /** Represents a CustomPaymentMethod. */
        class CustomPaymentMethod {

            /**
             * Constructs a new CustomPaymentMethod.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.CustomPaymentMethod.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CustomPaymentMethod credentialId. */
            credentialId?: (string|null);

            /** CustomPaymentMethod country. */
            country?: (string|null);

            /** CustomPaymentMethod type. */
            type?: (string|null);

            /** CustomPaymentMethod metadata. */
            metadata: SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Properties[];

            /**
             * Creates a new CustomPaymentMethod instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomPaymentMethod instance
             */
            static create(properties: SyncAction.SyncActionValue.CustomPaymentMethod.$Shape): SyncAction.SyncActionValue.CustomPaymentMethod & SyncAction.SyncActionValue.CustomPaymentMethod.$Shape;
            static create(properties?: SyncAction.SyncActionValue.CustomPaymentMethod.$Properties): SyncAction.SyncActionValue.CustomPaymentMethod;

            /**
             * Encodes the specified CustomPaymentMethod message. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethod.verify|verify} messages.
             * @param message CustomPaymentMethod message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.CustomPaymentMethod.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomPaymentMethod message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethod.verify|verify} messages.
             * @param message CustomPaymentMethod message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.CustomPaymentMethod.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomPaymentMethod message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.CustomPaymentMethod & SyncAction.SyncActionValue.CustomPaymentMethod.$Shape} CustomPaymentMethod
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CustomPaymentMethod & SyncAction.SyncActionValue.CustomPaymentMethod.$Shape;

            /**
             * Decodes a CustomPaymentMethod message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.CustomPaymentMethod & SyncAction.SyncActionValue.CustomPaymentMethod.$Shape} CustomPaymentMethod
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CustomPaymentMethod & SyncAction.SyncActionValue.CustomPaymentMethod.$Shape;

            /**
             * Verifies a CustomPaymentMethod message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomPaymentMethod message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomPaymentMethod
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CustomPaymentMethod;

            /**
             * Creates a plain object from a CustomPaymentMethod message. Also converts values to other types if specified.
             * @param message CustomPaymentMethod
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.CustomPaymentMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomPaymentMethod to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CustomPaymentMethod
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CustomPaymentMethod {

            /** Properties of a CustomPaymentMethod. */
            interface $Properties {

                /** CustomPaymentMethod credentialId */
                credentialId?: (string|null);

                /** CustomPaymentMethod country */
                country?: (string|null);

                /** CustomPaymentMethod type */
                type?: (string|null);

                /** CustomPaymentMethod metadata */
                metadata?: (SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CustomPaymentMethod. */
            type $Shape = SyncAction.SyncActionValue.CustomPaymentMethod.$Properties;
        }

        /**
         * Properties of a CustomPaymentMethodMetadata.
         * @deprecated Use SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Properties instead.
         */
        interface ICustomPaymentMethodMetadata extends SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Properties {
        }

        /** Represents a CustomPaymentMethodMetadata. */
        class CustomPaymentMethodMetadata {

            /**
             * Constructs a new CustomPaymentMethodMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CustomPaymentMethodMetadata key. */
            key?: (string|null);

            /** CustomPaymentMethodMetadata value. */
            value?: (string|null);

            /**
             * Creates a new CustomPaymentMethodMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomPaymentMethodMetadata instance
             */
            static create(properties: SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Shape): SyncAction.SyncActionValue.CustomPaymentMethodMetadata & SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Shape;
            static create(properties?: SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Properties): SyncAction.SyncActionValue.CustomPaymentMethodMetadata;

            /**
             * Encodes the specified CustomPaymentMethodMetadata message. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodMetadata.verify|verify} messages.
             * @param message CustomPaymentMethodMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomPaymentMethodMetadata message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodMetadata.verify|verify} messages.
             * @param message CustomPaymentMethodMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomPaymentMethodMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.CustomPaymentMethodMetadata & SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Shape} CustomPaymentMethodMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CustomPaymentMethodMetadata & SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Shape;

            /**
             * Decodes a CustomPaymentMethodMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.CustomPaymentMethodMetadata & SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Shape} CustomPaymentMethodMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CustomPaymentMethodMetadata & SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Shape;

            /**
             * Verifies a CustomPaymentMethodMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomPaymentMethodMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomPaymentMethodMetadata
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CustomPaymentMethodMetadata;

            /**
             * Creates a plain object from a CustomPaymentMethodMetadata message. Also converts values to other types if specified.
             * @param message CustomPaymentMethodMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.CustomPaymentMethodMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomPaymentMethodMetadata to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CustomPaymentMethodMetadata
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CustomPaymentMethodMetadata {

            /** Properties of a CustomPaymentMethodMetadata. */
            interface $Properties {

                /** CustomPaymentMethodMetadata key */
                key?: (string|null);

                /** CustomPaymentMethodMetadata value */
                value?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CustomPaymentMethodMetadata. */
            type $Shape = SyncAction.SyncActionValue.CustomPaymentMethodMetadata.$Properties;
        }

        /**
         * Properties of a CustomPaymentMethodsAction.
         * @deprecated Use SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Properties instead.
         */
        interface ICustomPaymentMethodsAction extends SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Properties {
        }

        /** Represents a CustomPaymentMethodsAction. */
        class CustomPaymentMethodsAction {

            /**
             * Constructs a new CustomPaymentMethodsAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CustomPaymentMethodsAction customPaymentMethods. */
            customPaymentMethods: SyncAction.SyncActionValue.CustomPaymentMethod.$Properties[];

            /**
             * Creates a new CustomPaymentMethodsAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomPaymentMethodsAction instance
             */
            static create(properties: SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Shape): SyncAction.SyncActionValue.CustomPaymentMethodsAction & SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Properties): SyncAction.SyncActionValue.CustomPaymentMethodsAction;

            /**
             * Encodes the specified CustomPaymentMethodsAction message. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodsAction.verify|verify} messages.
             * @param message CustomPaymentMethodsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomPaymentMethodsAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodsAction.verify|verify} messages.
             * @param message CustomPaymentMethodsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomPaymentMethodsAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.CustomPaymentMethodsAction & SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Shape} CustomPaymentMethodsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CustomPaymentMethodsAction & SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Shape;

            /**
             * Decodes a CustomPaymentMethodsAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.CustomPaymentMethodsAction & SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Shape} CustomPaymentMethodsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CustomPaymentMethodsAction & SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Shape;

            /**
             * Verifies a CustomPaymentMethodsAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomPaymentMethodsAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomPaymentMethodsAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CustomPaymentMethodsAction;

            /**
             * Creates a plain object from a CustomPaymentMethodsAction message. Also converts values to other types if specified.
             * @param message CustomPaymentMethodsAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.CustomPaymentMethodsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomPaymentMethodsAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CustomPaymentMethodsAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CustomPaymentMethodsAction {

            /** Properties of a CustomPaymentMethodsAction. */
            interface $Properties {

                /** CustomPaymentMethodsAction customPaymentMethods */
                customPaymentMethods?: (SyncAction.SyncActionValue.CustomPaymentMethod.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CustomPaymentMethodsAction. */
            type $Shape = SyncAction.SyncActionValue.CustomPaymentMethodsAction.$Properties;
        }

        /**
         * Properties of a CustomerDataAction.
         * @deprecated Use SyncAction.SyncActionValue.CustomerDataAction.$Properties instead.
         */
        interface ICustomerDataAction extends SyncAction.SyncActionValue.CustomerDataAction.$Properties {
        }

        /** Represents a CustomerDataAction. */
        class CustomerDataAction {

            /**
             * Constructs a new CustomerDataAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.CustomerDataAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CustomerDataAction chatJid. */
            chatJid?: (string|null);

            /** CustomerDataAction contactType. */
            contactType?: (number|null);

            /** CustomerDataAction email. */
            email?: (string|null);

            /** CustomerDataAction altPhoneNumbers. */
            altPhoneNumbers?: (string|null);

            /** CustomerDataAction birthday. */
            birthday?: (number|Long|null);

            /** CustomerDataAction address. */
            address?: (string|null);

            /** CustomerDataAction acquisitionSource. */
            acquisitionSource?: (number|null);

            /** CustomerDataAction leadStage. */
            leadStage?: (number|null);

            /** CustomerDataAction lastOrder. */
            lastOrder?: (number|Long|null);

            /** CustomerDataAction createdAt. */
            createdAt?: (number|Long|null);

            /** CustomerDataAction modifiedAt. */
            modifiedAt?: (number|Long|null);

            /**
             * Creates a new CustomerDataAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomerDataAction instance
             */
            static create(properties: SyncAction.SyncActionValue.CustomerDataAction.$Shape): SyncAction.SyncActionValue.CustomerDataAction & SyncAction.SyncActionValue.CustomerDataAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.CustomerDataAction.$Properties): SyncAction.SyncActionValue.CustomerDataAction;

            /**
             * Encodes the specified CustomerDataAction message. Does not implicitly {@link SyncAction.SyncActionValue.CustomerDataAction.verify|verify} messages.
             * @param message CustomerDataAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.CustomerDataAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomerDataAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CustomerDataAction.verify|verify} messages.
             * @param message CustomerDataAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.CustomerDataAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomerDataAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.CustomerDataAction & SyncAction.SyncActionValue.CustomerDataAction.$Shape} CustomerDataAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CustomerDataAction & SyncAction.SyncActionValue.CustomerDataAction.$Shape;

            /**
             * Decodes a CustomerDataAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.CustomerDataAction & SyncAction.SyncActionValue.CustomerDataAction.$Shape} CustomerDataAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CustomerDataAction & SyncAction.SyncActionValue.CustomerDataAction.$Shape;

            /**
             * Verifies a CustomerDataAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomerDataAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomerDataAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CustomerDataAction;

            /**
             * Creates a plain object from a CustomerDataAction message. Also converts values to other types if specified.
             * @param message CustomerDataAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.CustomerDataAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomerDataAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CustomerDataAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CustomerDataAction {

            /** Properties of a CustomerDataAction. */
            interface $Properties {

                /** CustomerDataAction chatJid */
                chatJid?: (string|null);

                /** CustomerDataAction contactType */
                contactType?: (number|null);

                /** CustomerDataAction email */
                email?: (string|null);

                /** CustomerDataAction altPhoneNumbers */
                altPhoneNumbers?: (string|null);

                /** CustomerDataAction birthday */
                birthday?: (number|Long|null);

                /** CustomerDataAction address */
                address?: (string|null);

                /** CustomerDataAction acquisitionSource */
                acquisitionSource?: (number|null);

                /** CustomerDataAction leadStage */
                leadStage?: (number|null);

                /** CustomerDataAction lastOrder */
                lastOrder?: (number|Long|null);

                /** CustomerDataAction createdAt */
                createdAt?: (number|Long|null);

                /** CustomerDataAction modifiedAt */
                modifiedAt?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CustomerDataAction. */
            type $Shape = SyncAction.SyncActionValue.CustomerDataAction.$Properties;
        }

        /**
         * Properties of a DeleteChatAction.
         * @deprecated Use SyncAction.SyncActionValue.DeleteChatAction.$Properties instead.
         */
        interface IDeleteChatAction extends SyncAction.SyncActionValue.DeleteChatAction.$Properties {
        }

        /** Represents a DeleteChatAction. */
        class DeleteChatAction {

            /**
             * Constructs a new DeleteChatAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.DeleteChatAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DeleteChatAction messageRange. */
            messageRange?: (SyncAction.SyncActionValue.SyncActionMessageRange.$Properties|null);

            /**
             * Creates a new DeleteChatAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteChatAction instance
             */
            static create(properties: SyncAction.SyncActionValue.DeleteChatAction.$Shape): SyncAction.SyncActionValue.DeleteChatAction & SyncAction.SyncActionValue.DeleteChatAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.DeleteChatAction.$Properties): SyncAction.SyncActionValue.DeleteChatAction;

            /**
             * Encodes the specified DeleteChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.DeleteChatAction.verify|verify} messages.
             * @param message DeleteChatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.DeleteChatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.DeleteChatAction.verify|verify} messages.
             * @param message DeleteChatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.DeleteChatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteChatAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.DeleteChatAction & SyncAction.SyncActionValue.DeleteChatAction.$Shape} DeleteChatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.DeleteChatAction & SyncAction.SyncActionValue.DeleteChatAction.$Shape;

            /**
             * Decodes a DeleteChatAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.DeleteChatAction & SyncAction.SyncActionValue.DeleteChatAction.$Shape} DeleteChatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.DeleteChatAction & SyncAction.SyncActionValue.DeleteChatAction.$Shape;

            /**
             * Verifies a DeleteChatAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteChatAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteChatAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.DeleteChatAction;

            /**
             * Creates a plain object from a DeleteChatAction message. Also converts values to other types if specified.
             * @param message DeleteChatAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.DeleteChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteChatAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for DeleteChatAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DeleteChatAction {

            /** Properties of a DeleteChatAction. */
            interface $Properties {

                /** DeleteChatAction messageRange */
                messageRange?: (SyncAction.SyncActionValue.SyncActionMessageRange.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a DeleteChatAction. */
            type $Shape = SyncAction.SyncActionValue.DeleteChatAction.$Properties;
        }

        /**
         * Properties of a DeleteIndividualCallLogAction.
         * @deprecated Use SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Properties instead.
         */
        interface IDeleteIndividualCallLogAction extends SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Properties {
        }

        /** Represents a DeleteIndividualCallLogAction. */
        class DeleteIndividualCallLogAction {

            /**
             * Constructs a new DeleteIndividualCallLogAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DeleteIndividualCallLogAction peerJid. */
            peerJid?: (string|null);

            /** DeleteIndividualCallLogAction isIncoming. */
            isIncoming?: (boolean|null);

            /**
             * Creates a new DeleteIndividualCallLogAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteIndividualCallLogAction instance
             */
            static create(properties: SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Shape): SyncAction.SyncActionValue.DeleteIndividualCallLogAction & SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Properties): SyncAction.SyncActionValue.DeleteIndividualCallLogAction;

            /**
             * Encodes the specified DeleteIndividualCallLogAction message. Does not implicitly {@link SyncAction.SyncActionValue.DeleteIndividualCallLogAction.verify|verify} messages.
             * @param message DeleteIndividualCallLogAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteIndividualCallLogAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.DeleteIndividualCallLogAction.verify|verify} messages.
             * @param message DeleteIndividualCallLogAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteIndividualCallLogAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.DeleteIndividualCallLogAction & SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Shape} DeleteIndividualCallLogAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.DeleteIndividualCallLogAction & SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Shape;

            /**
             * Decodes a DeleteIndividualCallLogAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.DeleteIndividualCallLogAction & SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Shape} DeleteIndividualCallLogAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.DeleteIndividualCallLogAction & SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Shape;

            /**
             * Verifies a DeleteIndividualCallLogAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteIndividualCallLogAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteIndividualCallLogAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.DeleteIndividualCallLogAction;

            /**
             * Creates a plain object from a DeleteIndividualCallLogAction message. Also converts values to other types if specified.
             * @param message DeleteIndividualCallLogAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.DeleteIndividualCallLogAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteIndividualCallLogAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for DeleteIndividualCallLogAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DeleteIndividualCallLogAction {

            /** Properties of a DeleteIndividualCallLogAction. */
            interface $Properties {

                /** DeleteIndividualCallLogAction peerJid */
                peerJid?: (string|null);

                /** DeleteIndividualCallLogAction isIncoming */
                isIncoming?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a DeleteIndividualCallLogAction. */
            type $Shape = SyncAction.SyncActionValue.DeleteIndividualCallLogAction.$Properties;
        }

        /**
         * Properties of a DeleteMessageForMeAction.
         * @deprecated Use SyncAction.SyncActionValue.DeleteMessageForMeAction.$Properties instead.
         */
        interface IDeleteMessageForMeAction extends SyncAction.SyncActionValue.DeleteMessageForMeAction.$Properties {
        }

        /** Represents a DeleteMessageForMeAction. */
        class DeleteMessageForMeAction {

            /**
             * Constructs a new DeleteMessageForMeAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.DeleteMessageForMeAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DeleteMessageForMeAction deleteMedia. */
            deleteMedia?: (boolean|null);

            /** DeleteMessageForMeAction messageTimestamp. */
            messageTimestamp?: (number|Long|null);

            /**
             * Creates a new DeleteMessageForMeAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteMessageForMeAction instance
             */
            static create(properties: SyncAction.SyncActionValue.DeleteMessageForMeAction.$Shape): SyncAction.SyncActionValue.DeleteMessageForMeAction & SyncAction.SyncActionValue.DeleteMessageForMeAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.DeleteMessageForMeAction.$Properties): SyncAction.SyncActionValue.DeleteMessageForMeAction;

            /**
             * Encodes the specified DeleteMessageForMeAction message. Does not implicitly {@link SyncAction.SyncActionValue.DeleteMessageForMeAction.verify|verify} messages.
             * @param message DeleteMessageForMeAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.DeleteMessageForMeAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteMessageForMeAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.DeleteMessageForMeAction.verify|verify} messages.
             * @param message DeleteMessageForMeAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.DeleteMessageForMeAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteMessageForMeAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.DeleteMessageForMeAction & SyncAction.SyncActionValue.DeleteMessageForMeAction.$Shape} DeleteMessageForMeAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.DeleteMessageForMeAction & SyncAction.SyncActionValue.DeleteMessageForMeAction.$Shape;

            /**
             * Decodes a DeleteMessageForMeAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.DeleteMessageForMeAction & SyncAction.SyncActionValue.DeleteMessageForMeAction.$Shape} DeleteMessageForMeAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.DeleteMessageForMeAction & SyncAction.SyncActionValue.DeleteMessageForMeAction.$Shape;

            /**
             * Verifies a DeleteMessageForMeAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteMessageForMeAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteMessageForMeAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.DeleteMessageForMeAction;

            /**
             * Creates a plain object from a DeleteMessageForMeAction message. Also converts values to other types if specified.
             * @param message DeleteMessageForMeAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.DeleteMessageForMeAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteMessageForMeAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for DeleteMessageForMeAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DeleteMessageForMeAction {

            /** Properties of a DeleteMessageForMeAction. */
            interface $Properties {

                /** DeleteMessageForMeAction deleteMedia */
                deleteMedia?: (boolean|null);

                /** DeleteMessageForMeAction messageTimestamp */
                messageTimestamp?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a DeleteMessageForMeAction. */
            type $Shape = SyncAction.SyncActionValue.DeleteMessageForMeAction.$Properties;
        }

        /**
         * Properties of a DetectedOutcomesStatusAction.
         * @deprecated Use SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Properties instead.
         */
        interface IDetectedOutcomesStatusAction extends SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Properties {
        }

        /** Represents a DetectedOutcomesStatusAction. */
        class DetectedOutcomesStatusAction {

            /**
             * Constructs a new DetectedOutcomesStatusAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DetectedOutcomesStatusAction isEnabled. */
            isEnabled?: (boolean|null);

            /**
             * Creates a new DetectedOutcomesStatusAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DetectedOutcomesStatusAction instance
             */
            static create(properties: SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Shape): SyncAction.SyncActionValue.DetectedOutcomesStatusAction & SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Properties): SyncAction.SyncActionValue.DetectedOutcomesStatusAction;

            /**
             * Encodes the specified DetectedOutcomesStatusAction message. Does not implicitly {@link SyncAction.SyncActionValue.DetectedOutcomesStatusAction.verify|verify} messages.
             * @param message DetectedOutcomesStatusAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DetectedOutcomesStatusAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.DetectedOutcomesStatusAction.verify|verify} messages.
             * @param message DetectedOutcomesStatusAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DetectedOutcomesStatusAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.DetectedOutcomesStatusAction & SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Shape} DetectedOutcomesStatusAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.DetectedOutcomesStatusAction & SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Shape;

            /**
             * Decodes a DetectedOutcomesStatusAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.DetectedOutcomesStatusAction & SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Shape} DetectedOutcomesStatusAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.DetectedOutcomesStatusAction & SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Shape;

            /**
             * Verifies a DetectedOutcomesStatusAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DetectedOutcomesStatusAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DetectedOutcomesStatusAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.DetectedOutcomesStatusAction;

            /**
             * Creates a plain object from a DetectedOutcomesStatusAction message. Also converts values to other types if specified.
             * @param message DetectedOutcomesStatusAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.DetectedOutcomesStatusAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DetectedOutcomesStatusAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for DetectedOutcomesStatusAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DetectedOutcomesStatusAction {

            /** Properties of a DetectedOutcomesStatusAction. */
            interface $Properties {

                /** DetectedOutcomesStatusAction isEnabled */
                isEnabled?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a DetectedOutcomesStatusAction. */
            type $Shape = SyncAction.SyncActionValue.DetectedOutcomesStatusAction.$Properties;
        }

        /**
         * Properties of an ExternalWebBetaAction.
         * @deprecated Use SyncAction.SyncActionValue.ExternalWebBetaAction.$Properties instead.
         */
        interface IExternalWebBetaAction extends SyncAction.SyncActionValue.ExternalWebBetaAction.$Properties {
        }

        /** Represents an ExternalWebBetaAction. */
        class ExternalWebBetaAction {

            /**
             * Constructs a new ExternalWebBetaAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.ExternalWebBetaAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ExternalWebBetaAction isOptIn. */
            isOptIn?: (boolean|null);

            /**
             * Creates a new ExternalWebBetaAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExternalWebBetaAction instance
             */
            static create(properties: SyncAction.SyncActionValue.ExternalWebBetaAction.$Shape): SyncAction.SyncActionValue.ExternalWebBetaAction & SyncAction.SyncActionValue.ExternalWebBetaAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.ExternalWebBetaAction.$Properties): SyncAction.SyncActionValue.ExternalWebBetaAction;

            /**
             * Encodes the specified ExternalWebBetaAction message. Does not implicitly {@link SyncAction.SyncActionValue.ExternalWebBetaAction.verify|verify} messages.
             * @param message ExternalWebBetaAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.ExternalWebBetaAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExternalWebBetaAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ExternalWebBetaAction.verify|verify} messages.
             * @param message ExternalWebBetaAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.ExternalWebBetaAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExternalWebBetaAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.ExternalWebBetaAction & SyncAction.SyncActionValue.ExternalWebBetaAction.$Shape} ExternalWebBetaAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ExternalWebBetaAction & SyncAction.SyncActionValue.ExternalWebBetaAction.$Shape;

            /**
             * Decodes an ExternalWebBetaAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.ExternalWebBetaAction & SyncAction.SyncActionValue.ExternalWebBetaAction.$Shape} ExternalWebBetaAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ExternalWebBetaAction & SyncAction.SyncActionValue.ExternalWebBetaAction.$Shape;

            /**
             * Verifies an ExternalWebBetaAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExternalWebBetaAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExternalWebBetaAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ExternalWebBetaAction;

            /**
             * Creates a plain object from an ExternalWebBetaAction message. Also converts values to other types if specified.
             * @param message ExternalWebBetaAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.ExternalWebBetaAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExternalWebBetaAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ExternalWebBetaAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ExternalWebBetaAction {

            /** Properties of an ExternalWebBetaAction. */
            interface $Properties {

                /** ExternalWebBetaAction isOptIn */
                isOptIn?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an ExternalWebBetaAction. */
            type $Shape = SyncAction.SyncActionValue.ExternalWebBetaAction.$Properties;
        }

        /**
         * Properties of a FavoritesAction.
         * @deprecated Use SyncAction.SyncActionValue.FavoritesAction.$Properties instead.
         */
        interface IFavoritesAction extends SyncAction.SyncActionValue.FavoritesAction.$Properties {
        }

        /** Represents a FavoritesAction. */
        class FavoritesAction {

            /**
             * Constructs a new FavoritesAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.FavoritesAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FavoritesAction favorites. */
            favorites: SyncAction.SyncActionValue.FavoritesAction.Favorite.$Properties[];

            /**
             * Creates a new FavoritesAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FavoritesAction instance
             */
            static create(properties: SyncAction.SyncActionValue.FavoritesAction.$Shape): SyncAction.SyncActionValue.FavoritesAction & SyncAction.SyncActionValue.FavoritesAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.FavoritesAction.$Properties): SyncAction.SyncActionValue.FavoritesAction;

            /**
             * Encodes the specified FavoritesAction message. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.verify|verify} messages.
             * @param message FavoritesAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.FavoritesAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FavoritesAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.verify|verify} messages.
             * @param message FavoritesAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.FavoritesAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FavoritesAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.FavoritesAction & SyncAction.SyncActionValue.FavoritesAction.$Shape} FavoritesAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.FavoritesAction & SyncAction.SyncActionValue.FavoritesAction.$Shape;

            /**
             * Decodes a FavoritesAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.FavoritesAction & SyncAction.SyncActionValue.FavoritesAction.$Shape} FavoritesAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.FavoritesAction & SyncAction.SyncActionValue.FavoritesAction.$Shape;

            /**
             * Verifies a FavoritesAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FavoritesAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FavoritesAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.FavoritesAction;

            /**
             * Creates a plain object from a FavoritesAction message. Also converts values to other types if specified.
             * @param message FavoritesAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.FavoritesAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FavoritesAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FavoritesAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FavoritesAction {

            /** Properties of a FavoritesAction. */
            interface $Properties {

                /** FavoritesAction favorites */
                favorites?: (SyncAction.SyncActionValue.FavoritesAction.Favorite.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FavoritesAction. */
            type $Shape = SyncAction.SyncActionValue.FavoritesAction.$Properties;

            /**
             * Properties of a Favorite.
             * @deprecated Use SyncAction.SyncActionValue.FavoritesAction.Favorite.$Properties instead.
             */
            interface IFavorite extends SyncAction.SyncActionValue.FavoritesAction.Favorite.$Properties {
            }

            /** Represents a Favorite. */
            class Favorite {

                /**
                 * Constructs a new Favorite.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: SyncAction.SyncActionValue.FavoritesAction.Favorite.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Favorite id. */
                id?: (string|null);

                /**
                 * Creates a new Favorite instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Favorite instance
                 */
                static create(properties: SyncAction.SyncActionValue.FavoritesAction.Favorite.$Shape): SyncAction.SyncActionValue.FavoritesAction.Favorite & SyncAction.SyncActionValue.FavoritesAction.Favorite.$Shape;
                static create(properties?: SyncAction.SyncActionValue.FavoritesAction.Favorite.$Properties): SyncAction.SyncActionValue.FavoritesAction.Favorite;

                /**
                 * Encodes the specified Favorite message. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.Favorite.verify|verify} messages.
                 * @param message Favorite message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: SyncAction.SyncActionValue.FavoritesAction.Favorite.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Favorite message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.Favorite.verify|verify} messages.
                 * @param message Favorite message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: SyncAction.SyncActionValue.FavoritesAction.Favorite.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Favorite message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {SyncAction.SyncActionValue.FavoritesAction.Favorite & SyncAction.SyncActionValue.FavoritesAction.Favorite.$Shape} Favorite
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.FavoritesAction.Favorite & SyncAction.SyncActionValue.FavoritesAction.Favorite.$Shape;

                /**
                 * Decodes a Favorite message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {SyncAction.SyncActionValue.FavoritesAction.Favorite & SyncAction.SyncActionValue.FavoritesAction.Favorite.$Shape} Favorite
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.FavoritesAction.Favorite & SyncAction.SyncActionValue.FavoritesAction.Favorite.$Shape;

                /**
                 * Verifies a Favorite message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Favorite message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Favorite
                 */
                static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.FavoritesAction.Favorite;

                /**
                 * Creates a plain object from a Favorite message. Also converts values to other types if specified.
                 * @param message Favorite
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: SyncAction.SyncActionValue.FavoritesAction.Favorite, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Favorite to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Favorite
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Favorite {

                /** Properties of a Favorite. */
                interface $Properties {

                    /** Favorite id */
                    id?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Favorite. */
                type $Shape = SyncAction.SyncActionValue.FavoritesAction.Favorite.$Properties;
            }
        }

        /**
         * Properties of a GroupHistoryToggleAction.
         * @deprecated Use SyncAction.SyncActionValue.GroupHistoryToggleAction.$Properties instead.
         */
        interface IGroupHistoryToggleAction extends SyncAction.SyncActionValue.GroupHistoryToggleAction.$Properties {
        }

        /** Represents a GroupHistoryToggleAction. */
        class GroupHistoryToggleAction {

            /**
             * Constructs a new GroupHistoryToggleAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.GroupHistoryToggleAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GroupHistoryToggleAction groupHistoryToggleMode. */
            groupHistoryToggleMode?: (SyncAction.SyncActionValue.GroupHistoryToggleAction.GroupHistoryToggleMode|null);

            /**
             * Creates a new GroupHistoryToggleAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupHistoryToggleAction instance
             */
            static create(properties: SyncAction.SyncActionValue.GroupHistoryToggleAction.$Shape): SyncAction.SyncActionValue.GroupHistoryToggleAction & SyncAction.SyncActionValue.GroupHistoryToggleAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.GroupHistoryToggleAction.$Properties): SyncAction.SyncActionValue.GroupHistoryToggleAction;

            /**
             * Encodes the specified GroupHistoryToggleAction message. Does not implicitly {@link SyncAction.SyncActionValue.GroupHistoryToggleAction.verify|verify} messages.
             * @param message GroupHistoryToggleAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.GroupHistoryToggleAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupHistoryToggleAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.GroupHistoryToggleAction.verify|verify} messages.
             * @param message GroupHistoryToggleAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.GroupHistoryToggleAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupHistoryToggleAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.GroupHistoryToggleAction & SyncAction.SyncActionValue.GroupHistoryToggleAction.$Shape} GroupHistoryToggleAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.GroupHistoryToggleAction & SyncAction.SyncActionValue.GroupHistoryToggleAction.$Shape;

            /**
             * Decodes a GroupHistoryToggleAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.GroupHistoryToggleAction & SyncAction.SyncActionValue.GroupHistoryToggleAction.$Shape} GroupHistoryToggleAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.GroupHistoryToggleAction & SyncAction.SyncActionValue.GroupHistoryToggleAction.$Shape;

            /**
             * Verifies a GroupHistoryToggleAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupHistoryToggleAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupHistoryToggleAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.GroupHistoryToggleAction;

            /**
             * Creates a plain object from a GroupHistoryToggleAction message. Also converts values to other types if specified.
             * @param message GroupHistoryToggleAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.GroupHistoryToggleAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupHistoryToggleAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GroupHistoryToggleAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GroupHistoryToggleAction {

            /** Properties of a GroupHistoryToggleAction. */
            interface $Properties {

                /** GroupHistoryToggleAction groupHistoryToggleMode */
                groupHistoryToggleMode?: (SyncAction.SyncActionValue.GroupHistoryToggleAction.GroupHistoryToggleMode|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GroupHistoryToggleAction. */
            type $Shape = SyncAction.SyncActionValue.GroupHistoryToggleAction.$Properties;

            /** GroupHistoryToggleMode enum. */
            enum GroupHistoryToggleMode {

                /** GROUP_HISTORY_TOGGLE_MODE_UNKNOWN value */
                GROUP_HISTORY_TOGGLE_MODE_UNKNOWN = 0,

                /** GROUP_HISTORY_TOGGLE_MODE_ON value */
                GROUP_HISTORY_TOGGLE_MODE_ON = 1,

                /** GROUP_HISTORY_TOGGLE_MODE_OFF value */
                GROUP_HISTORY_TOGGLE_MODE_OFF = 2
            }
        }

        /**
         * Properties of a HatchCVMSecretAction.
         * @deprecated Use SyncAction.SyncActionValue.HatchCVMSecretAction.$Properties instead.
         */
        interface IHatchCVMSecretAction extends SyncAction.SyncActionValue.HatchCVMSecretAction.$Properties {
        }

        /** Represents a HatchCVMSecretAction. */
        class HatchCVMSecretAction {

            /**
             * Constructs a new HatchCVMSecretAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.HatchCVMSecretAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** HatchCVMSecretAction secret. */
            secret?: (Uint8Array|null);

            /** HatchCVMSecretAction generation. */
            generation?: (number|Long|null);

            /**
             * Creates a new HatchCVMSecretAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HatchCVMSecretAction instance
             */
            static create(properties: SyncAction.SyncActionValue.HatchCVMSecretAction.$Shape): SyncAction.SyncActionValue.HatchCVMSecretAction & SyncAction.SyncActionValue.HatchCVMSecretAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.HatchCVMSecretAction.$Properties): SyncAction.SyncActionValue.HatchCVMSecretAction;

            /**
             * Encodes the specified HatchCVMSecretAction message. Does not implicitly {@link SyncAction.SyncActionValue.HatchCVMSecretAction.verify|verify} messages.
             * @param message HatchCVMSecretAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.HatchCVMSecretAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HatchCVMSecretAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.HatchCVMSecretAction.verify|verify} messages.
             * @param message HatchCVMSecretAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.HatchCVMSecretAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HatchCVMSecretAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.HatchCVMSecretAction & SyncAction.SyncActionValue.HatchCVMSecretAction.$Shape} HatchCVMSecretAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.HatchCVMSecretAction & SyncAction.SyncActionValue.HatchCVMSecretAction.$Shape;

            /**
             * Decodes a HatchCVMSecretAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.HatchCVMSecretAction & SyncAction.SyncActionValue.HatchCVMSecretAction.$Shape} HatchCVMSecretAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.HatchCVMSecretAction & SyncAction.SyncActionValue.HatchCVMSecretAction.$Shape;

            /**
             * Verifies a HatchCVMSecretAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HatchCVMSecretAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HatchCVMSecretAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.HatchCVMSecretAction;

            /**
             * Creates a plain object from a HatchCVMSecretAction message. Also converts values to other types if specified.
             * @param message HatchCVMSecretAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.HatchCVMSecretAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HatchCVMSecretAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for HatchCVMSecretAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace HatchCVMSecretAction {

            /** Properties of a HatchCVMSecretAction. */
            interface $Properties {

                /** HatchCVMSecretAction secret */
                secret?: (Uint8Array|null);

                /** HatchCVMSecretAction generation */
                generation?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a HatchCVMSecretAction. */
            type $Shape = SyncAction.SyncActionValue.HatchCVMSecretAction.$Properties;
        }

        /**
         * Properties of an InteractiveMessageAction.
         * @deprecated Use SyncAction.SyncActionValue.InteractiveMessageAction.$Properties instead.
         */
        interface IInteractiveMessageAction extends SyncAction.SyncActionValue.InteractiveMessageAction.$Properties {
        }

        /** Represents an InteractiveMessageAction. */
        class InteractiveMessageAction {

            /**
             * Constructs a new InteractiveMessageAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.InteractiveMessageAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** InteractiveMessageAction type. */
            type?: (SyncAction.SyncActionValue.InteractiveMessageAction.InteractiveMessageActionMode|null);

            /** InteractiveMessageAction agmId. */
            agmId?: (string|null);

            /**
             * Creates a new InteractiveMessageAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InteractiveMessageAction instance
             */
            static create(properties: SyncAction.SyncActionValue.InteractiveMessageAction.$Shape): SyncAction.SyncActionValue.InteractiveMessageAction & SyncAction.SyncActionValue.InteractiveMessageAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.InteractiveMessageAction.$Properties): SyncAction.SyncActionValue.InteractiveMessageAction;

            /**
             * Encodes the specified InteractiveMessageAction message. Does not implicitly {@link SyncAction.SyncActionValue.InteractiveMessageAction.verify|verify} messages.
             * @param message InteractiveMessageAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.InteractiveMessageAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InteractiveMessageAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.InteractiveMessageAction.verify|verify} messages.
             * @param message InteractiveMessageAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.InteractiveMessageAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InteractiveMessageAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.InteractiveMessageAction & SyncAction.SyncActionValue.InteractiveMessageAction.$Shape} InteractiveMessageAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.InteractiveMessageAction & SyncAction.SyncActionValue.InteractiveMessageAction.$Shape;

            /**
             * Decodes an InteractiveMessageAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.InteractiveMessageAction & SyncAction.SyncActionValue.InteractiveMessageAction.$Shape} InteractiveMessageAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.InteractiveMessageAction & SyncAction.SyncActionValue.InteractiveMessageAction.$Shape;

            /**
             * Verifies an InteractiveMessageAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InteractiveMessageAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InteractiveMessageAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.InteractiveMessageAction;

            /**
             * Creates a plain object from an InteractiveMessageAction message. Also converts values to other types if specified.
             * @param message InteractiveMessageAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.InteractiveMessageAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InteractiveMessageAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for InteractiveMessageAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace InteractiveMessageAction {

            /** Properties of an InteractiveMessageAction. */
            interface $Properties {

                /** InteractiveMessageAction type */
                type?: (SyncAction.SyncActionValue.InteractiveMessageAction.InteractiveMessageActionMode|null);

                /** InteractiveMessageAction agmId */
                agmId?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an InteractiveMessageAction. */
            type $Shape = SyncAction.SyncActionValue.InteractiveMessageAction.$Properties;

            /** InteractiveMessageActionMode enum. */
            enum InteractiveMessageActionMode {

                /** DISABLE_CTA value */
                DISABLE_CTA = 1
            }
        }

        /**
         * Properties of a KeyExpiration.
         * @deprecated Use SyncAction.SyncActionValue.KeyExpiration.$Properties instead.
         */
        interface IKeyExpiration extends SyncAction.SyncActionValue.KeyExpiration.$Properties {
        }

        /** Represents a KeyExpiration. */
        class KeyExpiration {

            /**
             * Constructs a new KeyExpiration.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.KeyExpiration.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** KeyExpiration expiredKeyEpoch. */
            expiredKeyEpoch?: (number|null);

            /**
             * Creates a new KeyExpiration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyExpiration instance
             */
            static create(properties: SyncAction.SyncActionValue.KeyExpiration.$Shape): SyncAction.SyncActionValue.KeyExpiration & SyncAction.SyncActionValue.KeyExpiration.$Shape;
            static create(properties?: SyncAction.SyncActionValue.KeyExpiration.$Properties): SyncAction.SyncActionValue.KeyExpiration;

            /**
             * Encodes the specified KeyExpiration message. Does not implicitly {@link SyncAction.SyncActionValue.KeyExpiration.verify|verify} messages.
             * @param message KeyExpiration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.KeyExpiration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeyExpiration message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.KeyExpiration.verify|verify} messages.
             * @param message KeyExpiration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.KeyExpiration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyExpiration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.KeyExpiration & SyncAction.SyncActionValue.KeyExpiration.$Shape} KeyExpiration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.KeyExpiration & SyncAction.SyncActionValue.KeyExpiration.$Shape;

            /**
             * Decodes a KeyExpiration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.KeyExpiration & SyncAction.SyncActionValue.KeyExpiration.$Shape} KeyExpiration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.KeyExpiration & SyncAction.SyncActionValue.KeyExpiration.$Shape;

            /**
             * Verifies a KeyExpiration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeyExpiration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeyExpiration
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.KeyExpiration;

            /**
             * Creates a plain object from a KeyExpiration message. Also converts values to other types if specified.
             * @param message KeyExpiration
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.KeyExpiration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeyExpiration to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for KeyExpiration
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace KeyExpiration {

            /** Properties of a KeyExpiration. */
            interface $Properties {

                /** KeyExpiration expiredKeyEpoch */
                expiredKeyEpoch?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a KeyExpiration. */
            type $Shape = SyncAction.SyncActionValue.KeyExpiration.$Properties;
        }

        /**
         * Properties of a LabelAssociationAction.
         * @deprecated Use SyncAction.SyncActionValue.LabelAssociationAction.$Properties instead.
         */
        interface ILabelAssociationAction extends SyncAction.SyncActionValue.LabelAssociationAction.$Properties {
        }

        /** Represents a LabelAssociationAction. */
        class LabelAssociationAction {

            /**
             * Constructs a new LabelAssociationAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.LabelAssociationAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** LabelAssociationAction labeled. */
            labeled?: (boolean|null);

            /** LabelAssociationAction modelMetaData. */
            modelMetaData?: (string|null);

            /**
             * Creates a new LabelAssociationAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LabelAssociationAction instance
             */
            static create(properties: SyncAction.SyncActionValue.LabelAssociationAction.$Shape): SyncAction.SyncActionValue.LabelAssociationAction & SyncAction.SyncActionValue.LabelAssociationAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.LabelAssociationAction.$Properties): SyncAction.SyncActionValue.LabelAssociationAction;

            /**
             * Encodes the specified LabelAssociationAction message. Does not implicitly {@link SyncAction.SyncActionValue.LabelAssociationAction.verify|verify} messages.
             * @param message LabelAssociationAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.LabelAssociationAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LabelAssociationAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LabelAssociationAction.verify|verify} messages.
             * @param message LabelAssociationAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.LabelAssociationAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LabelAssociationAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.LabelAssociationAction & SyncAction.SyncActionValue.LabelAssociationAction.$Shape} LabelAssociationAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LabelAssociationAction & SyncAction.SyncActionValue.LabelAssociationAction.$Shape;

            /**
             * Decodes a LabelAssociationAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.LabelAssociationAction & SyncAction.SyncActionValue.LabelAssociationAction.$Shape} LabelAssociationAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LabelAssociationAction & SyncAction.SyncActionValue.LabelAssociationAction.$Shape;

            /**
             * Verifies a LabelAssociationAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LabelAssociationAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LabelAssociationAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LabelAssociationAction;

            /**
             * Creates a plain object from a LabelAssociationAction message. Also converts values to other types if specified.
             * @param message LabelAssociationAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.LabelAssociationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LabelAssociationAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LabelAssociationAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LabelAssociationAction {

            /** Properties of a LabelAssociationAction. */
            interface $Properties {

                /** LabelAssociationAction labeled */
                labeled?: (boolean|null);

                /** LabelAssociationAction modelMetaData */
                modelMetaData?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LabelAssociationAction. */
            type $Shape = SyncAction.SyncActionValue.LabelAssociationAction.$Properties;
        }

        /**
         * Properties of a LabelEditAction.
         * @deprecated Use SyncAction.SyncActionValue.LabelEditAction.$Properties instead.
         */
        interface ILabelEditAction extends SyncAction.SyncActionValue.LabelEditAction.$Properties {
        }

        /** Represents a LabelEditAction. */
        class LabelEditAction {

            /**
             * Constructs a new LabelEditAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.LabelEditAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** LabelEditAction name. */
            name?: (string|null);

            /** LabelEditAction color. */
            color?: (number|null);

            /** LabelEditAction predefinedId. */
            predefinedId?: (number|null);

            /** LabelEditAction deleted. */
            deleted?: (boolean|null);

            /** LabelEditAction orderIndex. */
            orderIndex?: (number|null);

            /** LabelEditAction isActive. */
            isActive?: (boolean|null);

            /** LabelEditAction type. */
            type?: (SyncAction.SyncActionValue.LabelEditAction.ListType|null);

            /** LabelEditAction isImmutable. */
            isImmutable?: (boolean|null);

            /** LabelEditAction muteEndTimeMs. */
            muteEndTimeMs?: (number|Long|null);

            /**
             * Creates a new LabelEditAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LabelEditAction instance
             */
            static create(properties: SyncAction.SyncActionValue.LabelEditAction.$Shape): SyncAction.SyncActionValue.LabelEditAction & SyncAction.SyncActionValue.LabelEditAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.LabelEditAction.$Properties): SyncAction.SyncActionValue.LabelEditAction;

            /**
             * Encodes the specified LabelEditAction message. Does not implicitly {@link SyncAction.SyncActionValue.LabelEditAction.verify|verify} messages.
             * @param message LabelEditAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.LabelEditAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LabelEditAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LabelEditAction.verify|verify} messages.
             * @param message LabelEditAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.LabelEditAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LabelEditAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.LabelEditAction & SyncAction.SyncActionValue.LabelEditAction.$Shape} LabelEditAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LabelEditAction & SyncAction.SyncActionValue.LabelEditAction.$Shape;

            /**
             * Decodes a LabelEditAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.LabelEditAction & SyncAction.SyncActionValue.LabelEditAction.$Shape} LabelEditAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LabelEditAction & SyncAction.SyncActionValue.LabelEditAction.$Shape;

            /**
             * Verifies a LabelEditAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LabelEditAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LabelEditAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LabelEditAction;

            /**
             * Creates a plain object from a LabelEditAction message. Also converts values to other types if specified.
             * @param message LabelEditAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.LabelEditAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LabelEditAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LabelEditAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LabelEditAction {

            /** Properties of a LabelEditAction. */
            interface $Properties {

                /** LabelEditAction name */
                name?: (string|null);

                /** LabelEditAction color */
                color?: (number|null);

                /** LabelEditAction predefinedId */
                predefinedId?: (number|null);

                /** LabelEditAction deleted */
                deleted?: (boolean|null);

                /** LabelEditAction orderIndex */
                orderIndex?: (number|null);

                /** LabelEditAction isActive */
                isActive?: (boolean|null);

                /** LabelEditAction type */
                type?: (SyncAction.SyncActionValue.LabelEditAction.ListType|null);

                /** LabelEditAction isImmutable */
                isImmutable?: (boolean|null);

                /** LabelEditAction muteEndTimeMs */
                muteEndTimeMs?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LabelEditAction. */
            type $Shape = SyncAction.SyncActionValue.LabelEditAction.$Properties;

            /** ListType enum. */
            enum ListType {

                /** NONE value */
                NONE = 0,

                /** UNREAD value */
                UNREAD = 1,

                /** GROUPS value */
                GROUPS = 2,

                /** FAVORITES value */
                FAVORITES = 3,

                /** PREDEFINED value */
                PREDEFINED = 4,

                /** CUSTOM value */
                CUSTOM = 5,

                /** COMMUNITY value */
                COMMUNITY = 6,

                /** SERVER_ASSIGNED value */
                SERVER_ASSIGNED = 7,

                /** DRAFTED value */
                DRAFTED = 8,

                /** AI_HANDOFF value */
                AI_HANDOFF = 9,

                /** CHANNELS value */
                CHANNELS = 10,

                /** AI_RESPONDING value */
                AI_RESPONDING = 11,

                /** ARCHIVED value */
                ARCHIVED = 12,

                /** LOCKED value */
                LOCKED = 13,

                /** INVITES value */
                INVITES = 14,

                /** THIRD_PARTY value */
                THIRD_PARTY = 15,

                /** LEAD value */
                LEAD = 16,

                /** MENTIONS_AND_REPLIES value */
                MENTIONS_AND_REPLIES = 17,

                /** REQUESTS value */
                REQUESTS = 18,

                /** BUSINESS value */
                BUSINESS = 19,

                /** ONE_ON_ONE value */
                ONE_ON_ONE = 20
            }
        }

        /**
         * Properties of a LabelReorderingAction.
         * @deprecated Use SyncAction.SyncActionValue.LabelReorderingAction.$Properties instead.
         */
        interface ILabelReorderingAction extends SyncAction.SyncActionValue.LabelReorderingAction.$Properties {
        }

        /** Represents a LabelReorderingAction. */
        class LabelReorderingAction {

            /**
             * Constructs a new LabelReorderingAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.LabelReorderingAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** LabelReorderingAction sortedLabelIds. */
            sortedLabelIds: number[];

            /**
             * Creates a new LabelReorderingAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LabelReorderingAction instance
             */
            static create(properties: SyncAction.SyncActionValue.LabelReorderingAction.$Shape): SyncAction.SyncActionValue.LabelReorderingAction & SyncAction.SyncActionValue.LabelReorderingAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.LabelReorderingAction.$Properties): SyncAction.SyncActionValue.LabelReorderingAction;

            /**
             * Encodes the specified LabelReorderingAction message. Does not implicitly {@link SyncAction.SyncActionValue.LabelReorderingAction.verify|verify} messages.
             * @param message LabelReorderingAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.LabelReorderingAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LabelReorderingAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LabelReorderingAction.verify|verify} messages.
             * @param message LabelReorderingAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.LabelReorderingAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LabelReorderingAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.LabelReorderingAction & SyncAction.SyncActionValue.LabelReorderingAction.$Shape} LabelReorderingAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LabelReorderingAction & SyncAction.SyncActionValue.LabelReorderingAction.$Shape;

            /**
             * Decodes a LabelReorderingAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.LabelReorderingAction & SyncAction.SyncActionValue.LabelReorderingAction.$Shape} LabelReorderingAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LabelReorderingAction & SyncAction.SyncActionValue.LabelReorderingAction.$Shape;

            /**
             * Verifies a LabelReorderingAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LabelReorderingAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LabelReorderingAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LabelReorderingAction;

            /**
             * Creates a plain object from a LabelReorderingAction message. Also converts values to other types if specified.
             * @param message LabelReorderingAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.LabelReorderingAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LabelReorderingAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LabelReorderingAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LabelReorderingAction {

            /** Properties of a LabelReorderingAction. */
            interface $Properties {

                /** LabelReorderingAction sortedLabelIds */
                sortedLabelIds?: (number[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LabelReorderingAction. */
            type $Shape = SyncAction.SyncActionValue.LabelReorderingAction.$Properties;
        }

        /**
         * Properties of a LabelSublistAction.
         * @deprecated Use SyncAction.SyncActionValue.LabelSublistAction.$Properties instead.
         */
        interface ILabelSublistAction extends SyncAction.SyncActionValue.LabelSublistAction.$Properties {
        }

        /** Represents a LabelSublistAction. */
        class LabelSublistAction {

            /**
             * Constructs a new LabelSublistAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.LabelSublistAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** LabelSublistAction subListId. */
            subListId?: (number|null);

            /**
             * Creates a new LabelSublistAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LabelSublistAction instance
             */
            static create(properties: SyncAction.SyncActionValue.LabelSublistAction.$Shape): SyncAction.SyncActionValue.LabelSublistAction & SyncAction.SyncActionValue.LabelSublistAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.LabelSublistAction.$Properties): SyncAction.SyncActionValue.LabelSublistAction;

            /**
             * Encodes the specified LabelSublistAction message. Does not implicitly {@link SyncAction.SyncActionValue.LabelSublistAction.verify|verify} messages.
             * @param message LabelSublistAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.LabelSublistAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LabelSublistAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LabelSublistAction.verify|verify} messages.
             * @param message LabelSublistAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.LabelSublistAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LabelSublistAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.LabelSublistAction & SyncAction.SyncActionValue.LabelSublistAction.$Shape} LabelSublistAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LabelSublistAction & SyncAction.SyncActionValue.LabelSublistAction.$Shape;

            /**
             * Decodes a LabelSublistAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.LabelSublistAction & SyncAction.SyncActionValue.LabelSublistAction.$Shape} LabelSublistAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LabelSublistAction & SyncAction.SyncActionValue.LabelSublistAction.$Shape;

            /**
             * Verifies a LabelSublistAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LabelSublistAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LabelSublistAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LabelSublistAction;

            /**
             * Creates a plain object from a LabelSublistAction message. Also converts values to other types if specified.
             * @param message LabelSublistAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.LabelSublistAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LabelSublistAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LabelSublistAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LabelSublistAction {

            /** Properties of a LabelSublistAction. */
            interface $Properties {

                /** LabelSublistAction subListId */
                subListId?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LabelSublistAction. */
            type $Shape = SyncAction.SyncActionValue.LabelSublistAction.$Properties;
        }

        /**
         * Properties of a LidContactAction.
         * @deprecated Use SyncAction.SyncActionValue.LidContactAction.$Properties instead.
         */
        interface ILidContactAction extends SyncAction.SyncActionValue.LidContactAction.$Properties {
        }

        /** Represents a LidContactAction. */
        class LidContactAction {

            /**
             * Constructs a new LidContactAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.LidContactAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** LidContactAction fullName. */
            fullName?: (string|null);

            /** LidContactAction firstName. */
            firstName?: (string|null);

            /** LidContactAction username. */
            username?: (string|null);

            /** LidContactAction birthday. */
            birthday?: (string|null);

            /**
             * Creates a new LidContactAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LidContactAction instance
             */
            static create(properties: SyncAction.SyncActionValue.LidContactAction.$Shape): SyncAction.SyncActionValue.LidContactAction & SyncAction.SyncActionValue.LidContactAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.LidContactAction.$Properties): SyncAction.SyncActionValue.LidContactAction;

            /**
             * Encodes the specified LidContactAction message. Does not implicitly {@link SyncAction.SyncActionValue.LidContactAction.verify|verify} messages.
             * @param message LidContactAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.LidContactAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LidContactAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LidContactAction.verify|verify} messages.
             * @param message LidContactAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.LidContactAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LidContactAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.LidContactAction & SyncAction.SyncActionValue.LidContactAction.$Shape} LidContactAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LidContactAction & SyncAction.SyncActionValue.LidContactAction.$Shape;

            /**
             * Decodes a LidContactAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.LidContactAction & SyncAction.SyncActionValue.LidContactAction.$Shape} LidContactAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LidContactAction & SyncAction.SyncActionValue.LidContactAction.$Shape;

            /**
             * Verifies a LidContactAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LidContactAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LidContactAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LidContactAction;

            /**
             * Creates a plain object from a LidContactAction message. Also converts values to other types if specified.
             * @param message LidContactAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.LidContactAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LidContactAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LidContactAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LidContactAction {

            /** Properties of a LidContactAction. */
            interface $Properties {

                /** LidContactAction fullName */
                fullName?: (string|null);

                /** LidContactAction firstName */
                firstName?: (string|null);

                /** LidContactAction username */
                username?: (string|null);

                /** LidContactAction birthday */
                birthday?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LidContactAction. */
            type $Shape = SyncAction.SyncActionValue.LidContactAction.$Properties;
        }

        /**
         * Properties of a LocaleSetting.
         * @deprecated Use SyncAction.SyncActionValue.LocaleSetting.$Properties instead.
         */
        interface ILocaleSetting extends SyncAction.SyncActionValue.LocaleSetting.$Properties {
        }

        /** Represents a LocaleSetting. */
        class LocaleSetting {

            /**
             * Constructs a new LocaleSetting.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.LocaleSetting.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** LocaleSetting locale. */
            locale?: (string|null);

            /**
             * Creates a new LocaleSetting instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LocaleSetting instance
             */
            static create(properties: SyncAction.SyncActionValue.LocaleSetting.$Shape): SyncAction.SyncActionValue.LocaleSetting & SyncAction.SyncActionValue.LocaleSetting.$Shape;
            static create(properties?: SyncAction.SyncActionValue.LocaleSetting.$Properties): SyncAction.SyncActionValue.LocaleSetting;

            /**
             * Encodes the specified LocaleSetting message. Does not implicitly {@link SyncAction.SyncActionValue.LocaleSetting.verify|verify} messages.
             * @param message LocaleSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.LocaleSetting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LocaleSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LocaleSetting.verify|verify} messages.
             * @param message LocaleSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.LocaleSetting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LocaleSetting message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.LocaleSetting & SyncAction.SyncActionValue.LocaleSetting.$Shape} LocaleSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LocaleSetting & SyncAction.SyncActionValue.LocaleSetting.$Shape;

            /**
             * Decodes a LocaleSetting message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.LocaleSetting & SyncAction.SyncActionValue.LocaleSetting.$Shape} LocaleSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LocaleSetting & SyncAction.SyncActionValue.LocaleSetting.$Shape;

            /**
             * Verifies a LocaleSetting message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LocaleSetting message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LocaleSetting
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LocaleSetting;

            /**
             * Creates a plain object from a LocaleSetting message. Also converts values to other types if specified.
             * @param message LocaleSetting
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.LocaleSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LocaleSetting to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LocaleSetting
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LocaleSetting {

            /** Properties of a LocaleSetting. */
            interface $Properties {

                /** LocaleSetting locale */
                locale?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LocaleSetting. */
            type $Shape = SyncAction.SyncActionValue.LocaleSetting.$Properties;
        }

        /**
         * Properties of a LockChatAction.
         * @deprecated Use SyncAction.SyncActionValue.LockChatAction.$Properties instead.
         */
        interface ILockChatAction extends SyncAction.SyncActionValue.LockChatAction.$Properties {
        }

        /** Represents a LockChatAction. */
        class LockChatAction {

            /**
             * Constructs a new LockChatAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.LockChatAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** LockChatAction locked. */
            locked?: (boolean|null);

            /**
             * Creates a new LockChatAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LockChatAction instance
             */
            static create(properties: SyncAction.SyncActionValue.LockChatAction.$Shape): SyncAction.SyncActionValue.LockChatAction & SyncAction.SyncActionValue.LockChatAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.LockChatAction.$Properties): SyncAction.SyncActionValue.LockChatAction;

            /**
             * Encodes the specified LockChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.LockChatAction.verify|verify} messages.
             * @param message LockChatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.LockChatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LockChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LockChatAction.verify|verify} messages.
             * @param message LockChatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.LockChatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LockChatAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.LockChatAction & SyncAction.SyncActionValue.LockChatAction.$Shape} LockChatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LockChatAction & SyncAction.SyncActionValue.LockChatAction.$Shape;

            /**
             * Decodes a LockChatAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.LockChatAction & SyncAction.SyncActionValue.LockChatAction.$Shape} LockChatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LockChatAction & SyncAction.SyncActionValue.LockChatAction.$Shape;

            /**
             * Verifies a LockChatAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LockChatAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LockChatAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LockChatAction;

            /**
             * Creates a plain object from a LockChatAction message. Also converts values to other types if specified.
             * @param message LockChatAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.LockChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LockChatAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LockChatAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LockChatAction {

            /** Properties of a LockChatAction. */
            interface $Properties {

                /** LockChatAction locked */
                locked?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LockChatAction. */
            type $Shape = SyncAction.SyncActionValue.LockChatAction.$Properties;
        }

        /**
         * Properties of a MaibaAIFeaturesControlAction.
         * @deprecated Use SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Properties instead.
         */
        interface IMaibaAIFeaturesControlAction extends SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Properties {
        }

        /** Represents a MaibaAIFeaturesControlAction. */
        class MaibaAIFeaturesControlAction {

            /**
             * Constructs a new MaibaAIFeaturesControlAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MaibaAIFeaturesControlAction aiFeatureStatus. */
            aiFeatureStatus?: (SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.MaibaAIFeatureStatus|null);

            /** MaibaAIFeaturesControlAction aiReplyMode. */
            aiReplyMode?: (SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.MaibaAIReplyMode|null);

            /**
             * Creates a new MaibaAIFeaturesControlAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MaibaAIFeaturesControlAction instance
             */
            static create(properties: SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Shape): SyncAction.SyncActionValue.MaibaAIFeaturesControlAction & SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Properties): SyncAction.SyncActionValue.MaibaAIFeaturesControlAction;

            /**
             * Encodes the specified MaibaAIFeaturesControlAction message. Does not implicitly {@link SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.verify|verify} messages.
             * @param message MaibaAIFeaturesControlAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MaibaAIFeaturesControlAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.verify|verify} messages.
             * @param message MaibaAIFeaturesControlAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MaibaAIFeaturesControlAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.MaibaAIFeaturesControlAction & SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Shape} MaibaAIFeaturesControlAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MaibaAIFeaturesControlAction & SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Shape;

            /**
             * Decodes a MaibaAIFeaturesControlAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.MaibaAIFeaturesControlAction & SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Shape} MaibaAIFeaturesControlAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MaibaAIFeaturesControlAction & SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Shape;

            /**
             * Verifies a MaibaAIFeaturesControlAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MaibaAIFeaturesControlAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MaibaAIFeaturesControlAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MaibaAIFeaturesControlAction;

            /**
             * Creates a plain object from a MaibaAIFeaturesControlAction message. Also converts values to other types if specified.
             * @param message MaibaAIFeaturesControlAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.MaibaAIFeaturesControlAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MaibaAIFeaturesControlAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MaibaAIFeaturesControlAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MaibaAIFeaturesControlAction {

            /** Properties of a MaibaAIFeaturesControlAction. */
            interface $Properties {

                /** MaibaAIFeaturesControlAction aiFeatureStatus */
                aiFeatureStatus?: (SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.MaibaAIFeatureStatus|null);

                /** MaibaAIFeaturesControlAction aiReplyMode */
                aiReplyMode?: (SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.MaibaAIReplyMode|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MaibaAIFeaturesControlAction. */
            type $Shape = SyncAction.SyncActionValue.MaibaAIFeaturesControlAction.$Properties;

            /** MaibaAIFeatureStatus enum. */
            enum MaibaAIFeatureStatus {

                /** ENABLED value */
                ENABLED = 0,

                /** ENABLED_HAS_LEARNING value */
                ENABLED_HAS_LEARNING = 1,

                /** DISABLED value */
                DISABLED = 2
            }

            /** MaibaAIReplyMode enum. */
            enum MaibaAIReplyMode {

                /** MUTED value */
                MUTED = 0,

                /** AI_AGENT value */
                AI_AGENT = 1,

                /** SUGGESTIONS value */
                SUGGESTIONS = 2
            }
        }

        /**
         * Properties of a MarkChatAsReadAction.
         * @deprecated Use SyncAction.SyncActionValue.MarkChatAsReadAction.$Properties instead.
         */
        interface IMarkChatAsReadAction extends SyncAction.SyncActionValue.MarkChatAsReadAction.$Properties {
        }

        /** Represents a MarkChatAsReadAction. */
        class MarkChatAsReadAction {

            /**
             * Constructs a new MarkChatAsReadAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.MarkChatAsReadAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MarkChatAsReadAction read. */
            read?: (boolean|null);

            /** MarkChatAsReadAction messageRange. */
            messageRange?: (SyncAction.SyncActionValue.SyncActionMessageRange.$Properties|null);

            /**
             * Creates a new MarkChatAsReadAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MarkChatAsReadAction instance
             */
            static create(properties: SyncAction.SyncActionValue.MarkChatAsReadAction.$Shape): SyncAction.SyncActionValue.MarkChatAsReadAction & SyncAction.SyncActionValue.MarkChatAsReadAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.MarkChatAsReadAction.$Properties): SyncAction.SyncActionValue.MarkChatAsReadAction;

            /**
             * Encodes the specified MarkChatAsReadAction message. Does not implicitly {@link SyncAction.SyncActionValue.MarkChatAsReadAction.verify|verify} messages.
             * @param message MarkChatAsReadAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.MarkChatAsReadAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MarkChatAsReadAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MarkChatAsReadAction.verify|verify} messages.
             * @param message MarkChatAsReadAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.MarkChatAsReadAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MarkChatAsReadAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.MarkChatAsReadAction & SyncAction.SyncActionValue.MarkChatAsReadAction.$Shape} MarkChatAsReadAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MarkChatAsReadAction & SyncAction.SyncActionValue.MarkChatAsReadAction.$Shape;

            /**
             * Decodes a MarkChatAsReadAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.MarkChatAsReadAction & SyncAction.SyncActionValue.MarkChatAsReadAction.$Shape} MarkChatAsReadAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MarkChatAsReadAction & SyncAction.SyncActionValue.MarkChatAsReadAction.$Shape;

            /**
             * Verifies a MarkChatAsReadAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MarkChatAsReadAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MarkChatAsReadAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MarkChatAsReadAction;

            /**
             * Creates a plain object from a MarkChatAsReadAction message. Also converts values to other types if specified.
             * @param message MarkChatAsReadAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.MarkChatAsReadAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MarkChatAsReadAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MarkChatAsReadAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MarkChatAsReadAction {

            /** Properties of a MarkChatAsReadAction. */
            interface $Properties {

                /** MarkChatAsReadAction read */
                read?: (boolean|null);

                /** MarkChatAsReadAction messageRange */
                messageRange?: (SyncAction.SyncActionValue.SyncActionMessageRange.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MarkChatAsReadAction. */
            type $Shape = SyncAction.SyncActionValue.MarkChatAsReadAction.$Properties;
        }

        /**
         * Properties of a MarketingMessageAction.
         * @deprecated Use SyncAction.SyncActionValue.MarketingMessageAction.$Properties instead.
         */
        interface IMarketingMessageAction extends SyncAction.SyncActionValue.MarketingMessageAction.$Properties {
        }

        /** Represents a MarketingMessageAction. */
        class MarketingMessageAction {

            /**
             * Constructs a new MarketingMessageAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.MarketingMessageAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MarketingMessageAction name. */
            name?: (string|null);

            /** MarketingMessageAction message. */
            message?: (string|null);

            /** MarketingMessageAction type. */
            type?: (SyncAction.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType|null);

            /** MarketingMessageAction createdAt. */
            createdAt?: (number|Long|null);

            /** MarketingMessageAction lastSentAt. */
            lastSentAt?: (number|Long|null);

            /** MarketingMessageAction isDeleted. */
            isDeleted?: (boolean|null);

            /** MarketingMessageAction mediaId. */
            mediaId?: (string|null);

            /**
             * Creates a new MarketingMessageAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MarketingMessageAction instance
             */
            static create(properties: SyncAction.SyncActionValue.MarketingMessageAction.$Shape): SyncAction.SyncActionValue.MarketingMessageAction & SyncAction.SyncActionValue.MarketingMessageAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.MarketingMessageAction.$Properties): SyncAction.SyncActionValue.MarketingMessageAction;

            /**
             * Encodes the specified MarketingMessageAction message. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageAction.verify|verify} messages.
             * @param message MarketingMessageAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.MarketingMessageAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MarketingMessageAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageAction.verify|verify} messages.
             * @param message MarketingMessageAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.MarketingMessageAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MarketingMessageAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.MarketingMessageAction & SyncAction.SyncActionValue.MarketingMessageAction.$Shape} MarketingMessageAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MarketingMessageAction & SyncAction.SyncActionValue.MarketingMessageAction.$Shape;

            /**
             * Decodes a MarketingMessageAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.MarketingMessageAction & SyncAction.SyncActionValue.MarketingMessageAction.$Shape} MarketingMessageAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MarketingMessageAction & SyncAction.SyncActionValue.MarketingMessageAction.$Shape;

            /**
             * Verifies a MarketingMessageAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MarketingMessageAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MarketingMessageAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MarketingMessageAction;

            /**
             * Creates a plain object from a MarketingMessageAction message. Also converts values to other types if specified.
             * @param message MarketingMessageAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.MarketingMessageAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MarketingMessageAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MarketingMessageAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MarketingMessageAction {

            /** Properties of a MarketingMessageAction. */
            interface $Properties {

                /** MarketingMessageAction name */
                name?: (string|null);

                /** MarketingMessageAction message */
                message?: (string|null);

                /** MarketingMessageAction type */
                type?: (SyncAction.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType|null);

                /** MarketingMessageAction createdAt */
                createdAt?: (number|Long|null);

                /** MarketingMessageAction lastSentAt */
                lastSentAt?: (number|Long|null);

                /** MarketingMessageAction isDeleted */
                isDeleted?: (boolean|null);

                /** MarketingMessageAction mediaId */
                mediaId?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MarketingMessageAction. */
            type $Shape = SyncAction.SyncActionValue.MarketingMessageAction.$Properties;

            /** MarketingMessagePrototypeType enum. */
            enum MarketingMessagePrototypeType {

                /** PERSONALIZED value */
                PERSONALIZED = 0
            }
        }

        /**
         * Properties of a MarketingMessageBroadcastAction.
         * @deprecated Use SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Properties instead.
         */
        interface IMarketingMessageBroadcastAction extends SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Properties {
        }

        /** Represents a MarketingMessageBroadcastAction. */
        class MarketingMessageBroadcastAction {

            /**
             * Constructs a new MarketingMessageBroadcastAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MarketingMessageBroadcastAction repliedCount. */
            repliedCount?: (number|null);

            /**
             * Creates a new MarketingMessageBroadcastAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MarketingMessageBroadcastAction instance
             */
            static create(properties: SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Shape): SyncAction.SyncActionValue.MarketingMessageBroadcastAction & SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Properties): SyncAction.SyncActionValue.MarketingMessageBroadcastAction;

            /**
             * Encodes the specified MarketingMessageBroadcastAction message. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageBroadcastAction.verify|verify} messages.
             * @param message MarketingMessageBroadcastAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MarketingMessageBroadcastAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageBroadcastAction.verify|verify} messages.
             * @param message MarketingMessageBroadcastAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MarketingMessageBroadcastAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.MarketingMessageBroadcastAction & SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Shape} MarketingMessageBroadcastAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MarketingMessageBroadcastAction & SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Shape;

            /**
             * Decodes a MarketingMessageBroadcastAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.MarketingMessageBroadcastAction & SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Shape} MarketingMessageBroadcastAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MarketingMessageBroadcastAction & SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Shape;

            /**
             * Verifies a MarketingMessageBroadcastAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MarketingMessageBroadcastAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MarketingMessageBroadcastAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MarketingMessageBroadcastAction;

            /**
             * Creates a plain object from a MarketingMessageBroadcastAction message. Also converts values to other types if specified.
             * @param message MarketingMessageBroadcastAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.MarketingMessageBroadcastAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MarketingMessageBroadcastAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MarketingMessageBroadcastAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MarketingMessageBroadcastAction {

            /** Properties of a MarketingMessageBroadcastAction. */
            interface $Properties {

                /** MarketingMessageBroadcastAction repliedCount */
                repliedCount?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MarketingMessageBroadcastAction. */
            type $Shape = SyncAction.SyncActionValue.MarketingMessageBroadcastAction.$Properties;
        }

        /**
         * Properties of a MerchantPaymentPartnerAction.
         * @deprecated Use SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Properties instead.
         */
        interface IMerchantPaymentPartnerAction extends SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Properties {
        }

        /** Represents a MerchantPaymentPartnerAction. */
        class MerchantPaymentPartnerAction {

            /**
             * Constructs a new MerchantPaymentPartnerAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MerchantPaymentPartnerAction status. */
            status?: (SyncAction.SyncActionValue.MerchantPaymentPartnerAction.Status|null);

            /** MerchantPaymentPartnerAction country. */
            country?: (string|null);

            /** MerchantPaymentPartnerAction gatewayName. */
            gatewayName?: (string|null);

            /** MerchantPaymentPartnerAction credentialId. */
            credentialId?: (string|null);

            /**
             * Creates a new MerchantPaymentPartnerAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MerchantPaymentPartnerAction instance
             */
            static create(properties: SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Shape): SyncAction.SyncActionValue.MerchantPaymentPartnerAction & SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Properties): SyncAction.SyncActionValue.MerchantPaymentPartnerAction;

            /**
             * Encodes the specified MerchantPaymentPartnerAction message. Does not implicitly {@link SyncAction.SyncActionValue.MerchantPaymentPartnerAction.verify|verify} messages.
             * @param message MerchantPaymentPartnerAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MerchantPaymentPartnerAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MerchantPaymentPartnerAction.verify|verify} messages.
             * @param message MerchantPaymentPartnerAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MerchantPaymentPartnerAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.MerchantPaymentPartnerAction & SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Shape} MerchantPaymentPartnerAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MerchantPaymentPartnerAction & SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Shape;

            /**
             * Decodes a MerchantPaymentPartnerAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.MerchantPaymentPartnerAction & SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Shape} MerchantPaymentPartnerAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MerchantPaymentPartnerAction & SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Shape;

            /**
             * Verifies a MerchantPaymentPartnerAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MerchantPaymentPartnerAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MerchantPaymentPartnerAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MerchantPaymentPartnerAction;

            /**
             * Creates a plain object from a MerchantPaymentPartnerAction message. Also converts values to other types if specified.
             * @param message MerchantPaymentPartnerAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.MerchantPaymentPartnerAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MerchantPaymentPartnerAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MerchantPaymentPartnerAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MerchantPaymentPartnerAction {

            /** Properties of a MerchantPaymentPartnerAction. */
            interface $Properties {

                /** MerchantPaymentPartnerAction status */
                status?: (SyncAction.SyncActionValue.MerchantPaymentPartnerAction.Status|null);

                /** MerchantPaymentPartnerAction country */
                country?: (string|null);

                /** MerchantPaymentPartnerAction gatewayName */
                gatewayName?: (string|null);

                /** MerchantPaymentPartnerAction credentialId */
                credentialId?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MerchantPaymentPartnerAction. */
            type $Shape = SyncAction.SyncActionValue.MerchantPaymentPartnerAction.$Properties;

            /** Status enum. */
            enum Status {

                /** ACTIVE value */
                ACTIVE = 0,

                /** INACTIVE value */
                INACTIVE = 1
            }
        }

        /**
         * Properties of a MusicUserIdAction.
         * @deprecated Use SyncAction.SyncActionValue.MusicUserIdAction.$Properties instead.
         */
        interface IMusicUserIdAction extends SyncAction.SyncActionValue.MusicUserIdAction.$Properties {
        }

        /** Represents a MusicUserIdAction. */
        class MusicUserIdAction {

            /**
             * Constructs a new MusicUserIdAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.MusicUserIdAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MusicUserIdAction musicUserId. */
            musicUserId?: (string|null);

            /** MusicUserIdAction musicUserIdMap. */
            musicUserIdMap: { [k: string]: string };

            /**
             * Creates a new MusicUserIdAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MusicUserIdAction instance
             */
            static create(properties: SyncAction.SyncActionValue.MusicUserIdAction.$Shape): SyncAction.SyncActionValue.MusicUserIdAction & SyncAction.SyncActionValue.MusicUserIdAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.MusicUserIdAction.$Properties): SyncAction.SyncActionValue.MusicUserIdAction;

            /**
             * Encodes the specified MusicUserIdAction message. Does not implicitly {@link SyncAction.SyncActionValue.MusicUserIdAction.verify|verify} messages.
             * @param message MusicUserIdAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.MusicUserIdAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MusicUserIdAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MusicUserIdAction.verify|verify} messages.
             * @param message MusicUserIdAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.MusicUserIdAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MusicUserIdAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.MusicUserIdAction & SyncAction.SyncActionValue.MusicUserIdAction.$Shape} MusicUserIdAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MusicUserIdAction & SyncAction.SyncActionValue.MusicUserIdAction.$Shape;

            /**
             * Decodes a MusicUserIdAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.MusicUserIdAction & SyncAction.SyncActionValue.MusicUserIdAction.$Shape} MusicUserIdAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MusicUserIdAction & SyncAction.SyncActionValue.MusicUserIdAction.$Shape;

            /**
             * Verifies a MusicUserIdAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MusicUserIdAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MusicUserIdAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MusicUserIdAction;

            /**
             * Creates a plain object from a MusicUserIdAction message. Also converts values to other types if specified.
             * @param message MusicUserIdAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.MusicUserIdAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MusicUserIdAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MusicUserIdAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MusicUserIdAction {

            /** Properties of a MusicUserIdAction. */
            interface $Properties {

                /** MusicUserIdAction musicUserId */
                musicUserId?: (string|null);

                /** MusicUserIdAction musicUserIdMap */
                musicUserIdMap?: ({ [k: string]: string }|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MusicUserIdAction. */
            type $Shape = SyncAction.SyncActionValue.MusicUserIdAction.$Properties;
        }

        /**
         * Properties of a MuteAction.
         * @deprecated Use SyncAction.SyncActionValue.MuteAction.$Properties instead.
         */
        interface IMuteAction extends SyncAction.SyncActionValue.MuteAction.$Properties {
        }

        /** Represents a MuteAction. */
        class MuteAction {

            /**
             * Constructs a new MuteAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.MuteAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MuteAction muted. */
            muted?: (boolean|null);

            /** MuteAction muteEndTimestamp. */
            muteEndTimestamp?: (number|Long|null);

            /** MuteAction autoMuted. */
            autoMuted?: (boolean|null);

            /** MuteAction muteEveryoneMentionEndTimestamp. */
            muteEveryoneMentionEndTimestamp?: (number|Long|null);

            /**
             * Creates a new MuteAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MuteAction instance
             */
            static create(properties: SyncAction.SyncActionValue.MuteAction.$Shape): SyncAction.SyncActionValue.MuteAction & SyncAction.SyncActionValue.MuteAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.MuteAction.$Properties): SyncAction.SyncActionValue.MuteAction;

            /**
             * Encodes the specified MuteAction message. Does not implicitly {@link SyncAction.SyncActionValue.MuteAction.verify|verify} messages.
             * @param message MuteAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.MuteAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MuteAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MuteAction.verify|verify} messages.
             * @param message MuteAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.MuteAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MuteAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.MuteAction & SyncAction.SyncActionValue.MuteAction.$Shape} MuteAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MuteAction & SyncAction.SyncActionValue.MuteAction.$Shape;

            /**
             * Decodes a MuteAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.MuteAction & SyncAction.SyncActionValue.MuteAction.$Shape} MuteAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MuteAction & SyncAction.SyncActionValue.MuteAction.$Shape;

            /**
             * Verifies a MuteAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MuteAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MuteAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MuteAction;

            /**
             * Creates a plain object from a MuteAction message. Also converts values to other types if specified.
             * @param message MuteAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.MuteAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MuteAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MuteAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MuteAction {

            /** Properties of a MuteAction. */
            interface $Properties {

                /** MuteAction muted */
                muted?: (boolean|null);

                /** MuteAction muteEndTimestamp */
                muteEndTimestamp?: (number|Long|null);

                /** MuteAction autoMuted */
                autoMuted?: (boolean|null);

                /** MuteAction muteEveryoneMentionEndTimestamp */
                muteEveryoneMentionEndTimestamp?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MuteAction. */
            type $Shape = SyncAction.SyncActionValue.MuteAction.$Properties;
        }

        /**
         * Properties of a NctSaltSyncAction.
         * @deprecated Use SyncAction.SyncActionValue.NctSaltSyncAction.$Properties instead.
         */
        interface INctSaltSyncAction extends SyncAction.SyncActionValue.NctSaltSyncAction.$Properties {
        }

        /** Represents a NctSaltSyncAction. */
        class NctSaltSyncAction {

            /**
             * Constructs a new NctSaltSyncAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.NctSaltSyncAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** NctSaltSyncAction salt. */
            salt?: (Uint8Array|null);

            /**
             * Creates a new NctSaltSyncAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NctSaltSyncAction instance
             */
            static create(properties: SyncAction.SyncActionValue.NctSaltSyncAction.$Shape): SyncAction.SyncActionValue.NctSaltSyncAction & SyncAction.SyncActionValue.NctSaltSyncAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.NctSaltSyncAction.$Properties): SyncAction.SyncActionValue.NctSaltSyncAction;

            /**
             * Encodes the specified NctSaltSyncAction message. Does not implicitly {@link SyncAction.SyncActionValue.NctSaltSyncAction.verify|verify} messages.
             * @param message NctSaltSyncAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.NctSaltSyncAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NctSaltSyncAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.NctSaltSyncAction.verify|verify} messages.
             * @param message NctSaltSyncAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.NctSaltSyncAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NctSaltSyncAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.NctSaltSyncAction & SyncAction.SyncActionValue.NctSaltSyncAction.$Shape} NctSaltSyncAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.NctSaltSyncAction & SyncAction.SyncActionValue.NctSaltSyncAction.$Shape;

            /**
             * Decodes a NctSaltSyncAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.NctSaltSyncAction & SyncAction.SyncActionValue.NctSaltSyncAction.$Shape} NctSaltSyncAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.NctSaltSyncAction & SyncAction.SyncActionValue.NctSaltSyncAction.$Shape;

            /**
             * Verifies a NctSaltSyncAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NctSaltSyncAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NctSaltSyncAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.NctSaltSyncAction;

            /**
             * Creates a plain object from a NctSaltSyncAction message. Also converts values to other types if specified.
             * @param message NctSaltSyncAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.NctSaltSyncAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NctSaltSyncAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NctSaltSyncAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NctSaltSyncAction {

            /** Properties of a NctSaltSyncAction. */
            interface $Properties {

                /** NctSaltSyncAction salt */
                salt?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NctSaltSyncAction. */
            type $Shape = SyncAction.SyncActionValue.NctSaltSyncAction.$Properties;
        }

        /**
         * Properties of a NewsletterSavedInterestsAction.
         * @deprecated Use SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Properties instead.
         */
        interface INewsletterSavedInterestsAction extends SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Properties {
        }

        /** Represents a NewsletterSavedInterestsAction. */
        class NewsletterSavedInterestsAction {

            /**
             * Constructs a new NewsletterSavedInterestsAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** NewsletterSavedInterestsAction newsletterSavedInterests. */
            newsletterSavedInterests?: (string|null);

            /**
             * Creates a new NewsletterSavedInterestsAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NewsletterSavedInterestsAction instance
             */
            static create(properties: SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Shape): SyncAction.SyncActionValue.NewsletterSavedInterestsAction & SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Properties): SyncAction.SyncActionValue.NewsletterSavedInterestsAction;

            /**
             * Encodes the specified NewsletterSavedInterestsAction message. Does not implicitly {@link SyncAction.SyncActionValue.NewsletterSavedInterestsAction.verify|verify} messages.
             * @param message NewsletterSavedInterestsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NewsletterSavedInterestsAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.NewsletterSavedInterestsAction.verify|verify} messages.
             * @param message NewsletterSavedInterestsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NewsletterSavedInterestsAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.NewsletterSavedInterestsAction & SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Shape} NewsletterSavedInterestsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.NewsletterSavedInterestsAction & SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Shape;

            /**
             * Decodes a NewsletterSavedInterestsAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.NewsletterSavedInterestsAction & SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Shape} NewsletterSavedInterestsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.NewsletterSavedInterestsAction & SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Shape;

            /**
             * Verifies a NewsletterSavedInterestsAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NewsletterSavedInterestsAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NewsletterSavedInterestsAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.NewsletterSavedInterestsAction;

            /**
             * Creates a plain object from a NewsletterSavedInterestsAction message. Also converts values to other types if specified.
             * @param message NewsletterSavedInterestsAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.NewsletterSavedInterestsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NewsletterSavedInterestsAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NewsletterSavedInterestsAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NewsletterSavedInterestsAction {

            /** Properties of a NewsletterSavedInterestsAction. */
            interface $Properties {

                /** NewsletterSavedInterestsAction newsletterSavedInterests */
                newsletterSavedInterests?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NewsletterSavedInterestsAction. */
            type $Shape = SyncAction.SyncActionValue.NewsletterSavedInterestsAction.$Properties;
        }

        /**
         * Properties of a NoteEditAction.
         * @deprecated Use SyncAction.SyncActionValue.NoteEditAction.$Properties instead.
         */
        interface INoteEditAction extends SyncAction.SyncActionValue.NoteEditAction.$Properties {
        }

        /** Represents a NoteEditAction. */
        class NoteEditAction {

            /**
             * Constructs a new NoteEditAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.NoteEditAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** NoteEditAction type. */
            type?: (SyncAction.SyncActionValue.NoteEditAction.NoteType|null);

            /** NoteEditAction chatJid. */
            chatJid?: (string|null);

            /** NoteEditAction createdAt. */
            createdAt?: (number|Long|null);

            /** NoteEditAction deleted. */
            deleted?: (boolean|null);

            /** NoteEditAction unstructuredContent. */
            unstructuredContent?: (string|null);

            /**
             * Creates a new NoteEditAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NoteEditAction instance
             */
            static create(properties: SyncAction.SyncActionValue.NoteEditAction.$Shape): SyncAction.SyncActionValue.NoteEditAction & SyncAction.SyncActionValue.NoteEditAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.NoteEditAction.$Properties): SyncAction.SyncActionValue.NoteEditAction;

            /**
             * Encodes the specified NoteEditAction message. Does not implicitly {@link SyncAction.SyncActionValue.NoteEditAction.verify|verify} messages.
             * @param message NoteEditAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.NoteEditAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NoteEditAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.NoteEditAction.verify|verify} messages.
             * @param message NoteEditAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.NoteEditAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NoteEditAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.NoteEditAction & SyncAction.SyncActionValue.NoteEditAction.$Shape} NoteEditAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.NoteEditAction & SyncAction.SyncActionValue.NoteEditAction.$Shape;

            /**
             * Decodes a NoteEditAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.NoteEditAction & SyncAction.SyncActionValue.NoteEditAction.$Shape} NoteEditAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.NoteEditAction & SyncAction.SyncActionValue.NoteEditAction.$Shape;

            /**
             * Verifies a NoteEditAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NoteEditAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NoteEditAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.NoteEditAction;

            /**
             * Creates a plain object from a NoteEditAction message. Also converts values to other types if specified.
             * @param message NoteEditAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.NoteEditAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NoteEditAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NoteEditAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NoteEditAction {

            /** Properties of a NoteEditAction. */
            interface $Properties {

                /** NoteEditAction type */
                type?: (SyncAction.SyncActionValue.NoteEditAction.NoteType|null);

                /** NoteEditAction chatJid */
                chatJid?: (string|null);

                /** NoteEditAction createdAt */
                createdAt?: (number|Long|null);

                /** NoteEditAction deleted */
                deleted?: (boolean|null);

                /** NoteEditAction unstructuredContent */
                unstructuredContent?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NoteEditAction. */
            type $Shape = SyncAction.SyncActionValue.NoteEditAction.$Properties;

            /** NoteType enum. */
            enum NoteType {

                /** UNSTRUCTURED value */
                UNSTRUCTURED = 1,

                /** STRUCTURED value */
                STRUCTURED = 2
            }
        }

        /**
         * Properties of a NotificationActivitySettingAction.
         * @deprecated Use SyncAction.SyncActionValue.NotificationActivitySettingAction.$Properties instead.
         */
        interface INotificationActivitySettingAction extends SyncAction.SyncActionValue.NotificationActivitySettingAction.$Properties {
        }

        /** Represents a NotificationActivitySettingAction. */
        class NotificationActivitySettingAction {

            /**
             * Constructs a new NotificationActivitySettingAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.NotificationActivitySettingAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** NotificationActivitySettingAction notificationActivitySetting. */
            notificationActivitySetting?: (SyncAction.SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting|null);

            /**
             * Creates a new NotificationActivitySettingAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotificationActivitySettingAction instance
             */
            static create(properties: SyncAction.SyncActionValue.NotificationActivitySettingAction.$Shape): SyncAction.SyncActionValue.NotificationActivitySettingAction & SyncAction.SyncActionValue.NotificationActivitySettingAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.NotificationActivitySettingAction.$Properties): SyncAction.SyncActionValue.NotificationActivitySettingAction;

            /**
             * Encodes the specified NotificationActivitySettingAction message. Does not implicitly {@link SyncAction.SyncActionValue.NotificationActivitySettingAction.verify|verify} messages.
             * @param message NotificationActivitySettingAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.NotificationActivitySettingAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotificationActivitySettingAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.NotificationActivitySettingAction.verify|verify} messages.
             * @param message NotificationActivitySettingAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.NotificationActivitySettingAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotificationActivitySettingAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.NotificationActivitySettingAction & SyncAction.SyncActionValue.NotificationActivitySettingAction.$Shape} NotificationActivitySettingAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.NotificationActivitySettingAction & SyncAction.SyncActionValue.NotificationActivitySettingAction.$Shape;

            /**
             * Decodes a NotificationActivitySettingAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.NotificationActivitySettingAction & SyncAction.SyncActionValue.NotificationActivitySettingAction.$Shape} NotificationActivitySettingAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.NotificationActivitySettingAction & SyncAction.SyncActionValue.NotificationActivitySettingAction.$Shape;

            /**
             * Verifies a NotificationActivitySettingAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NotificationActivitySettingAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NotificationActivitySettingAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.NotificationActivitySettingAction;

            /**
             * Creates a plain object from a NotificationActivitySettingAction message. Also converts values to other types if specified.
             * @param message NotificationActivitySettingAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.NotificationActivitySettingAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NotificationActivitySettingAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NotificationActivitySettingAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NotificationActivitySettingAction {

            /** Properties of a NotificationActivitySettingAction. */
            interface $Properties {

                /** NotificationActivitySettingAction notificationActivitySetting */
                notificationActivitySetting?: (SyncAction.SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NotificationActivitySettingAction. */
            type $Shape = SyncAction.SyncActionValue.NotificationActivitySettingAction.$Properties;

            /** NotificationActivitySetting enum. */
            enum NotificationActivitySetting {

                /** DEFAULT_ALL_MESSAGES value */
                DEFAULT_ALL_MESSAGES = 0,

                /** ALL_MESSAGES value */
                ALL_MESSAGES = 1,

                /** HIGHLIGHTS value */
                HIGHLIGHTS = 2,

                /** DEFAULT_HIGHLIGHTS value */
                DEFAULT_HIGHLIGHTS = 3
            }
        }

        /**
         * Properties of a NuxAction.
         * @deprecated Use SyncAction.SyncActionValue.NuxAction.$Properties instead.
         */
        interface INuxAction extends SyncAction.SyncActionValue.NuxAction.$Properties {
        }

        /** Represents a NuxAction. */
        class NuxAction {

            /**
             * Constructs a new NuxAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.NuxAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** NuxAction acknowledged. */
            acknowledged?: (boolean|null);

            /**
             * Creates a new NuxAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NuxAction instance
             */
            static create(properties: SyncAction.SyncActionValue.NuxAction.$Shape): SyncAction.SyncActionValue.NuxAction & SyncAction.SyncActionValue.NuxAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.NuxAction.$Properties): SyncAction.SyncActionValue.NuxAction;

            /**
             * Encodes the specified NuxAction message. Does not implicitly {@link SyncAction.SyncActionValue.NuxAction.verify|verify} messages.
             * @param message NuxAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.NuxAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NuxAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.NuxAction.verify|verify} messages.
             * @param message NuxAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.NuxAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NuxAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.NuxAction & SyncAction.SyncActionValue.NuxAction.$Shape} NuxAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.NuxAction & SyncAction.SyncActionValue.NuxAction.$Shape;

            /**
             * Decodes a NuxAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.NuxAction & SyncAction.SyncActionValue.NuxAction.$Shape} NuxAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.NuxAction & SyncAction.SyncActionValue.NuxAction.$Shape;

            /**
             * Verifies a NuxAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NuxAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NuxAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.NuxAction;

            /**
             * Creates a plain object from a NuxAction message. Also converts values to other types if specified.
             * @param message NuxAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.NuxAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NuxAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NuxAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NuxAction {

            /** Properties of a NuxAction. */
            interface $Properties {

                /** NuxAction acknowledged */
                acknowledged?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NuxAction. */
            type $Shape = SyncAction.SyncActionValue.NuxAction.$Properties;
        }

        /**
         * Properties of an OutContactAction.
         * @deprecated Use SyncAction.SyncActionValue.OutContactAction.$Properties instead.
         */
        interface IOutContactAction extends SyncAction.SyncActionValue.OutContactAction.$Properties {
        }

        /** Represents an OutContactAction. */
        class OutContactAction {

            /**
             * Constructs a new OutContactAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.OutContactAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** OutContactAction fullName. */
            fullName?: (string|null);

            /** OutContactAction firstName. */
            firstName?: (string|null);

            /**
             * Creates a new OutContactAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OutContactAction instance
             */
            static create(properties: SyncAction.SyncActionValue.OutContactAction.$Shape): SyncAction.SyncActionValue.OutContactAction & SyncAction.SyncActionValue.OutContactAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.OutContactAction.$Properties): SyncAction.SyncActionValue.OutContactAction;

            /**
             * Encodes the specified OutContactAction message. Does not implicitly {@link SyncAction.SyncActionValue.OutContactAction.verify|verify} messages.
             * @param message OutContactAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.OutContactAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OutContactAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.OutContactAction.verify|verify} messages.
             * @param message OutContactAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.OutContactAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OutContactAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.OutContactAction & SyncAction.SyncActionValue.OutContactAction.$Shape} OutContactAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.OutContactAction & SyncAction.SyncActionValue.OutContactAction.$Shape;

            /**
             * Decodes an OutContactAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.OutContactAction & SyncAction.SyncActionValue.OutContactAction.$Shape} OutContactAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.OutContactAction & SyncAction.SyncActionValue.OutContactAction.$Shape;

            /**
             * Verifies an OutContactAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OutContactAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OutContactAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.OutContactAction;

            /**
             * Creates a plain object from an OutContactAction message. Also converts values to other types if specified.
             * @param message OutContactAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.OutContactAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OutContactAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for OutContactAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace OutContactAction {

            /** Properties of an OutContactAction. */
            interface $Properties {

                /** OutContactAction fullName */
                fullName?: (string|null);

                /** OutContactAction firstName */
                firstName?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an OutContactAction. */
            type $Shape = SyncAction.SyncActionValue.OutContactAction.$Properties;
        }

        /**
         * Properties of a PaymentInfoAction.
         * @deprecated Use SyncAction.SyncActionValue.PaymentInfoAction.$Properties instead.
         */
        interface IPaymentInfoAction extends SyncAction.SyncActionValue.PaymentInfoAction.$Properties {
        }

        /** Represents a PaymentInfoAction. */
        class PaymentInfoAction {

            /**
             * Constructs a new PaymentInfoAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.PaymentInfoAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PaymentInfoAction cpi. */
            cpi?: (string|null);

            /**
             * Creates a new PaymentInfoAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PaymentInfoAction instance
             */
            static create(properties: SyncAction.SyncActionValue.PaymentInfoAction.$Shape): SyncAction.SyncActionValue.PaymentInfoAction & SyncAction.SyncActionValue.PaymentInfoAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.PaymentInfoAction.$Properties): SyncAction.SyncActionValue.PaymentInfoAction;

            /**
             * Encodes the specified PaymentInfoAction message. Does not implicitly {@link SyncAction.SyncActionValue.PaymentInfoAction.verify|verify} messages.
             * @param message PaymentInfoAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.PaymentInfoAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PaymentInfoAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PaymentInfoAction.verify|verify} messages.
             * @param message PaymentInfoAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.PaymentInfoAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PaymentInfoAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.PaymentInfoAction & SyncAction.SyncActionValue.PaymentInfoAction.$Shape} PaymentInfoAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PaymentInfoAction & SyncAction.SyncActionValue.PaymentInfoAction.$Shape;

            /**
             * Decodes a PaymentInfoAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.PaymentInfoAction & SyncAction.SyncActionValue.PaymentInfoAction.$Shape} PaymentInfoAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PaymentInfoAction & SyncAction.SyncActionValue.PaymentInfoAction.$Shape;

            /**
             * Verifies a PaymentInfoAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PaymentInfoAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PaymentInfoAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PaymentInfoAction;

            /**
             * Creates a plain object from a PaymentInfoAction message. Also converts values to other types if specified.
             * @param message PaymentInfoAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.PaymentInfoAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PaymentInfoAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PaymentInfoAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PaymentInfoAction {

            /** Properties of a PaymentInfoAction. */
            interface $Properties {

                /** PaymentInfoAction cpi */
                cpi?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PaymentInfoAction. */
            type $Shape = SyncAction.SyncActionValue.PaymentInfoAction.$Properties;
        }

        /**
         * Properties of a PaymentTosAction.
         * @deprecated Use SyncAction.SyncActionValue.PaymentTosAction.$Properties instead.
         */
        interface IPaymentTosAction extends SyncAction.SyncActionValue.PaymentTosAction.$Properties {
        }

        /** Represents a PaymentTosAction. */
        class PaymentTosAction {

            /**
             * Constructs a new PaymentTosAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.PaymentTosAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PaymentTosAction paymentNotice. */
            paymentNotice?: (SyncAction.SyncActionValue.PaymentTosAction.PaymentNotice|null);

            /** PaymentTosAction accepted. */
            accepted?: (boolean|null);

            /**
             * Creates a new PaymentTosAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PaymentTosAction instance
             */
            static create(properties: SyncAction.SyncActionValue.PaymentTosAction.$Shape): SyncAction.SyncActionValue.PaymentTosAction & SyncAction.SyncActionValue.PaymentTosAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.PaymentTosAction.$Properties): SyncAction.SyncActionValue.PaymentTosAction;

            /**
             * Encodes the specified PaymentTosAction message. Does not implicitly {@link SyncAction.SyncActionValue.PaymentTosAction.verify|verify} messages.
             * @param message PaymentTosAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.PaymentTosAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PaymentTosAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PaymentTosAction.verify|verify} messages.
             * @param message PaymentTosAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.PaymentTosAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PaymentTosAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.PaymentTosAction & SyncAction.SyncActionValue.PaymentTosAction.$Shape} PaymentTosAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PaymentTosAction & SyncAction.SyncActionValue.PaymentTosAction.$Shape;

            /**
             * Decodes a PaymentTosAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.PaymentTosAction & SyncAction.SyncActionValue.PaymentTosAction.$Shape} PaymentTosAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PaymentTosAction & SyncAction.SyncActionValue.PaymentTosAction.$Shape;

            /**
             * Verifies a PaymentTosAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PaymentTosAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PaymentTosAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PaymentTosAction;

            /**
             * Creates a plain object from a PaymentTosAction message. Also converts values to other types if specified.
             * @param message PaymentTosAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.PaymentTosAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PaymentTosAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PaymentTosAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PaymentTosAction {

            /** Properties of a PaymentTosAction. */
            interface $Properties {

                /** PaymentTosAction paymentNotice */
                paymentNotice?: (SyncAction.SyncActionValue.PaymentTosAction.PaymentNotice|null);

                /** PaymentTosAction accepted */
                accepted?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PaymentTosAction. */
            type $Shape = SyncAction.SyncActionValue.PaymentTosAction.$Properties;

            /** PaymentNotice enum. */
            enum PaymentNotice {

                /** BR_PAY_PRIVACY_POLICY value */
                BR_PAY_PRIVACY_POLICY = 0
            }
        }

        /**
         * Properties of a PinAction.
         * @deprecated Use SyncAction.SyncActionValue.PinAction.$Properties instead.
         */
        interface IPinAction extends SyncAction.SyncActionValue.PinAction.$Properties {
        }

        /** Represents a PinAction. */
        class PinAction {

            /**
             * Constructs a new PinAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.PinAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PinAction pinned. */
            pinned?: (boolean|null);

            /**
             * Creates a new PinAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PinAction instance
             */
            static create(properties: SyncAction.SyncActionValue.PinAction.$Shape): SyncAction.SyncActionValue.PinAction & SyncAction.SyncActionValue.PinAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.PinAction.$Properties): SyncAction.SyncActionValue.PinAction;

            /**
             * Encodes the specified PinAction message. Does not implicitly {@link SyncAction.SyncActionValue.PinAction.verify|verify} messages.
             * @param message PinAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.PinAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PinAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PinAction.verify|verify} messages.
             * @param message PinAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.PinAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PinAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.PinAction & SyncAction.SyncActionValue.PinAction.$Shape} PinAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PinAction & SyncAction.SyncActionValue.PinAction.$Shape;

            /**
             * Decodes a PinAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.PinAction & SyncAction.SyncActionValue.PinAction.$Shape} PinAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PinAction & SyncAction.SyncActionValue.PinAction.$Shape;

            /**
             * Verifies a PinAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PinAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PinAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PinAction;

            /**
             * Creates a plain object from a PinAction message. Also converts values to other types if specified.
             * @param message PinAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.PinAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PinAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PinAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PinAction {

            /** Properties of a PinAction. */
            interface $Properties {

                /** PinAction pinned */
                pinned?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PinAction. */
            type $Shape = SyncAction.SyncActionValue.PinAction.$Properties;
        }

        /**
         * Properties of a PnForLidChatAction.
         * @deprecated Use SyncAction.SyncActionValue.PnForLidChatAction.$Properties instead.
         */
        interface IPnForLidChatAction extends SyncAction.SyncActionValue.PnForLidChatAction.$Properties {
        }

        /** Represents a PnForLidChatAction. */
        class PnForLidChatAction {

            /**
             * Constructs a new PnForLidChatAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.PnForLidChatAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PnForLidChatAction pnJid. */
            pnJid?: (string|null);

            /**
             * Creates a new PnForLidChatAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PnForLidChatAction instance
             */
            static create(properties: SyncAction.SyncActionValue.PnForLidChatAction.$Shape): SyncAction.SyncActionValue.PnForLidChatAction & SyncAction.SyncActionValue.PnForLidChatAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.PnForLidChatAction.$Properties): SyncAction.SyncActionValue.PnForLidChatAction;

            /**
             * Encodes the specified PnForLidChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.PnForLidChatAction.verify|verify} messages.
             * @param message PnForLidChatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.PnForLidChatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PnForLidChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PnForLidChatAction.verify|verify} messages.
             * @param message PnForLidChatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.PnForLidChatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PnForLidChatAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.PnForLidChatAction & SyncAction.SyncActionValue.PnForLidChatAction.$Shape} PnForLidChatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PnForLidChatAction & SyncAction.SyncActionValue.PnForLidChatAction.$Shape;

            /**
             * Decodes a PnForLidChatAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.PnForLidChatAction & SyncAction.SyncActionValue.PnForLidChatAction.$Shape} PnForLidChatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PnForLidChatAction & SyncAction.SyncActionValue.PnForLidChatAction.$Shape;

            /**
             * Verifies a PnForLidChatAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PnForLidChatAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PnForLidChatAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PnForLidChatAction;

            /**
             * Creates a plain object from a PnForLidChatAction message. Also converts values to other types if specified.
             * @param message PnForLidChatAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.PnForLidChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PnForLidChatAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PnForLidChatAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PnForLidChatAction {

            /** Properties of a PnForLidChatAction. */
            interface $Properties {

                /** PnForLidChatAction pnJid */
                pnJid?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PnForLidChatAction. */
            type $Shape = SyncAction.SyncActionValue.PnForLidChatAction.$Properties;
        }

        /**
         * Properties of a PrimaryFeature.
         * @deprecated Use SyncAction.SyncActionValue.PrimaryFeature.$Properties instead.
         */
        interface IPrimaryFeature extends SyncAction.SyncActionValue.PrimaryFeature.$Properties {
        }

        /** Represents a PrimaryFeature. */
        class PrimaryFeature {

            /**
             * Constructs a new PrimaryFeature.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.PrimaryFeature.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PrimaryFeature flags. */
            flags: string[];

            /**
             * Creates a new PrimaryFeature instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrimaryFeature instance
             */
            static create(properties: SyncAction.SyncActionValue.PrimaryFeature.$Shape): SyncAction.SyncActionValue.PrimaryFeature & SyncAction.SyncActionValue.PrimaryFeature.$Shape;
            static create(properties?: SyncAction.SyncActionValue.PrimaryFeature.$Properties): SyncAction.SyncActionValue.PrimaryFeature;

            /**
             * Encodes the specified PrimaryFeature message. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryFeature.verify|verify} messages.
             * @param message PrimaryFeature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.PrimaryFeature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrimaryFeature message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryFeature.verify|verify} messages.
             * @param message PrimaryFeature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.PrimaryFeature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrimaryFeature message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.PrimaryFeature & SyncAction.SyncActionValue.PrimaryFeature.$Shape} PrimaryFeature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PrimaryFeature & SyncAction.SyncActionValue.PrimaryFeature.$Shape;

            /**
             * Decodes a PrimaryFeature message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.PrimaryFeature & SyncAction.SyncActionValue.PrimaryFeature.$Shape} PrimaryFeature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PrimaryFeature & SyncAction.SyncActionValue.PrimaryFeature.$Shape;

            /**
             * Verifies a PrimaryFeature message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrimaryFeature message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrimaryFeature
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PrimaryFeature;

            /**
             * Creates a plain object from a PrimaryFeature message. Also converts values to other types if specified.
             * @param message PrimaryFeature
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.PrimaryFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrimaryFeature to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PrimaryFeature
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PrimaryFeature {

            /** Properties of a PrimaryFeature. */
            interface $Properties {

                /** PrimaryFeature flags */
                flags?: (string[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PrimaryFeature. */
            type $Shape = SyncAction.SyncActionValue.PrimaryFeature.$Properties;
        }

        /**
         * Properties of a PrimaryVersionAction.
         * @deprecated Use SyncAction.SyncActionValue.PrimaryVersionAction.$Properties instead.
         */
        interface IPrimaryVersionAction extends SyncAction.SyncActionValue.PrimaryVersionAction.$Properties {
        }

        /** Represents a PrimaryVersionAction. */
        class PrimaryVersionAction {

            /**
             * Constructs a new PrimaryVersionAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.PrimaryVersionAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PrimaryVersionAction version. */
            version?: (string|null);

            /**
             * Creates a new PrimaryVersionAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrimaryVersionAction instance
             */
            static create(properties: SyncAction.SyncActionValue.PrimaryVersionAction.$Shape): SyncAction.SyncActionValue.PrimaryVersionAction & SyncAction.SyncActionValue.PrimaryVersionAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.PrimaryVersionAction.$Properties): SyncAction.SyncActionValue.PrimaryVersionAction;

            /**
             * Encodes the specified PrimaryVersionAction message. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryVersionAction.verify|verify} messages.
             * @param message PrimaryVersionAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.PrimaryVersionAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrimaryVersionAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryVersionAction.verify|verify} messages.
             * @param message PrimaryVersionAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.PrimaryVersionAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrimaryVersionAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.PrimaryVersionAction & SyncAction.SyncActionValue.PrimaryVersionAction.$Shape} PrimaryVersionAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PrimaryVersionAction & SyncAction.SyncActionValue.PrimaryVersionAction.$Shape;

            /**
             * Decodes a PrimaryVersionAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.PrimaryVersionAction & SyncAction.SyncActionValue.PrimaryVersionAction.$Shape} PrimaryVersionAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PrimaryVersionAction & SyncAction.SyncActionValue.PrimaryVersionAction.$Shape;

            /**
             * Verifies a PrimaryVersionAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrimaryVersionAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrimaryVersionAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PrimaryVersionAction;

            /**
             * Creates a plain object from a PrimaryVersionAction message. Also converts values to other types if specified.
             * @param message PrimaryVersionAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.PrimaryVersionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrimaryVersionAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PrimaryVersionAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PrimaryVersionAction {

            /** Properties of a PrimaryVersionAction. */
            interface $Properties {

                /** PrimaryVersionAction version */
                version?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PrimaryVersionAction. */
            type $Shape = SyncAction.SyncActionValue.PrimaryVersionAction.$Properties;
        }

        /**
         * Properties of a PrivacySettingChannelsPersonalisedRecommendationAction.
         * @deprecated Use SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Properties instead.
         */
        interface IPrivacySettingChannelsPersonalisedRecommendationAction extends SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Properties {
        }

        /** Represents a PrivacySettingChannelsPersonalisedRecommendationAction. */
        class PrivacySettingChannelsPersonalisedRecommendationAction {

            /**
             * Constructs a new PrivacySettingChannelsPersonalisedRecommendationAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PrivacySettingChannelsPersonalisedRecommendationAction isUserOptedOut. */
            isUserOptedOut?: (boolean|null);

            /**
             * Creates a new PrivacySettingChannelsPersonalisedRecommendationAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrivacySettingChannelsPersonalisedRecommendationAction instance
             */
            static create(properties: SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Shape): SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction & SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Properties): SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction;

            /**
             * Encodes the specified PrivacySettingChannelsPersonalisedRecommendationAction message. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.verify|verify} messages.
             * @param message PrivacySettingChannelsPersonalisedRecommendationAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrivacySettingChannelsPersonalisedRecommendationAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.verify|verify} messages.
             * @param message PrivacySettingChannelsPersonalisedRecommendationAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrivacySettingChannelsPersonalisedRecommendationAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction & SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Shape} PrivacySettingChannelsPersonalisedRecommendationAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction & SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Shape;

            /**
             * Decodes a PrivacySettingChannelsPersonalisedRecommendationAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction & SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Shape} PrivacySettingChannelsPersonalisedRecommendationAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction & SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Shape;

            /**
             * Verifies a PrivacySettingChannelsPersonalisedRecommendationAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrivacySettingChannelsPersonalisedRecommendationAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrivacySettingChannelsPersonalisedRecommendationAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction;

            /**
             * Creates a plain object from a PrivacySettingChannelsPersonalisedRecommendationAction message. Also converts values to other types if specified.
             * @param message PrivacySettingChannelsPersonalisedRecommendationAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrivacySettingChannelsPersonalisedRecommendationAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PrivacySettingChannelsPersonalisedRecommendationAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PrivacySettingChannelsPersonalisedRecommendationAction {

            /** Properties of a PrivacySettingChannelsPersonalisedRecommendationAction. */
            interface $Properties {

                /** PrivacySettingChannelsPersonalisedRecommendationAction isUserOptedOut */
                isUserOptedOut?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PrivacySettingChannelsPersonalisedRecommendationAction. */
            type $Shape = SyncAction.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.$Properties;
        }

        /**
         * Properties of a PrivacySettingDisableLinkPreviewsAction.
         * @deprecated Use SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Properties instead.
         */
        interface IPrivacySettingDisableLinkPreviewsAction extends SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Properties {
        }

        /** Represents a PrivacySettingDisableLinkPreviewsAction. */
        class PrivacySettingDisableLinkPreviewsAction {

            /**
             * Constructs a new PrivacySettingDisableLinkPreviewsAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PrivacySettingDisableLinkPreviewsAction isPreviewsDisabled. */
            isPreviewsDisabled?: (boolean|null);

            /**
             * Creates a new PrivacySettingDisableLinkPreviewsAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrivacySettingDisableLinkPreviewsAction instance
             */
            static create(properties: SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Shape): SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction & SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Properties): SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction;

            /**
             * Encodes the specified PrivacySettingDisableLinkPreviewsAction message. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.verify|verify} messages.
             * @param message PrivacySettingDisableLinkPreviewsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrivacySettingDisableLinkPreviewsAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.verify|verify} messages.
             * @param message PrivacySettingDisableLinkPreviewsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrivacySettingDisableLinkPreviewsAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction & SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Shape} PrivacySettingDisableLinkPreviewsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction & SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Shape;

            /**
             * Decodes a PrivacySettingDisableLinkPreviewsAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction & SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Shape} PrivacySettingDisableLinkPreviewsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction & SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Shape;

            /**
             * Verifies a PrivacySettingDisableLinkPreviewsAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrivacySettingDisableLinkPreviewsAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrivacySettingDisableLinkPreviewsAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction;

            /**
             * Creates a plain object from a PrivacySettingDisableLinkPreviewsAction message. Also converts values to other types if specified.
             * @param message PrivacySettingDisableLinkPreviewsAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrivacySettingDisableLinkPreviewsAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PrivacySettingDisableLinkPreviewsAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PrivacySettingDisableLinkPreviewsAction {

            /** Properties of a PrivacySettingDisableLinkPreviewsAction. */
            interface $Properties {

                /** PrivacySettingDisableLinkPreviewsAction isPreviewsDisabled */
                isPreviewsDisabled?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PrivacySettingDisableLinkPreviewsAction. */
            type $Shape = SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.$Properties;
        }

        /**
         * Properties of a PrivacySettingRelayAllCalls.
         * @deprecated Use SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Properties instead.
         */
        interface IPrivacySettingRelayAllCalls extends SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Properties {
        }

        /** Represents a PrivacySettingRelayAllCalls. */
        class PrivacySettingRelayAllCalls {

            /**
             * Constructs a new PrivacySettingRelayAllCalls.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PrivacySettingRelayAllCalls isEnabled. */
            isEnabled?: (boolean|null);

            /**
             * Creates a new PrivacySettingRelayAllCalls instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrivacySettingRelayAllCalls instance
             */
            static create(properties: SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Shape): SyncAction.SyncActionValue.PrivacySettingRelayAllCalls & SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Shape;
            static create(properties?: SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Properties): SyncAction.SyncActionValue.PrivacySettingRelayAllCalls;

            /**
             * Encodes the specified PrivacySettingRelayAllCalls message. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.verify|verify} messages.
             * @param message PrivacySettingRelayAllCalls message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrivacySettingRelayAllCalls message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.verify|verify} messages.
             * @param message PrivacySettingRelayAllCalls message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrivacySettingRelayAllCalls message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.PrivacySettingRelayAllCalls & SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Shape} PrivacySettingRelayAllCalls
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PrivacySettingRelayAllCalls & SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Shape;

            /**
             * Decodes a PrivacySettingRelayAllCalls message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.PrivacySettingRelayAllCalls & SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Shape} PrivacySettingRelayAllCalls
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PrivacySettingRelayAllCalls & SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Shape;

            /**
             * Verifies a PrivacySettingRelayAllCalls message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrivacySettingRelayAllCalls message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrivacySettingRelayAllCalls
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PrivacySettingRelayAllCalls;

            /**
             * Creates a plain object from a PrivacySettingRelayAllCalls message. Also converts values to other types if specified.
             * @param message PrivacySettingRelayAllCalls
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.PrivacySettingRelayAllCalls, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrivacySettingRelayAllCalls to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PrivacySettingRelayAllCalls
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PrivacySettingRelayAllCalls {

            /** Properties of a PrivacySettingRelayAllCalls. */
            interface $Properties {

                /** PrivacySettingRelayAllCalls isEnabled */
                isEnabled?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PrivacySettingRelayAllCalls. */
            type $Shape = SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.$Properties;
        }

        /**
         * Properties of a PrivateProcessingSettingAction.
         * @deprecated Use SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Properties instead.
         */
        interface IPrivateProcessingSettingAction extends SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Properties {
        }

        /** Represents a PrivateProcessingSettingAction. */
        class PrivateProcessingSettingAction {

            /**
             * Constructs a new PrivateProcessingSettingAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PrivateProcessingSettingAction privateProcessingStatus. */
            privateProcessingStatus?: (SyncAction.SyncActionValue.PrivateProcessingSettingAction.PrivateProcessingStatus|null);

            /**
             * Creates a new PrivateProcessingSettingAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrivateProcessingSettingAction instance
             */
            static create(properties: SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Shape): SyncAction.SyncActionValue.PrivateProcessingSettingAction & SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Properties): SyncAction.SyncActionValue.PrivateProcessingSettingAction;

            /**
             * Encodes the specified PrivateProcessingSettingAction message. Does not implicitly {@link SyncAction.SyncActionValue.PrivateProcessingSettingAction.verify|verify} messages.
             * @param message PrivateProcessingSettingAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrivateProcessingSettingAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrivateProcessingSettingAction.verify|verify} messages.
             * @param message PrivateProcessingSettingAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrivateProcessingSettingAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.PrivateProcessingSettingAction & SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Shape} PrivateProcessingSettingAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PrivateProcessingSettingAction & SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Shape;

            /**
             * Decodes a PrivateProcessingSettingAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.PrivateProcessingSettingAction & SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Shape} PrivateProcessingSettingAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PrivateProcessingSettingAction & SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Shape;

            /**
             * Verifies a PrivateProcessingSettingAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrivateProcessingSettingAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrivateProcessingSettingAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PrivateProcessingSettingAction;

            /**
             * Creates a plain object from a PrivateProcessingSettingAction message. Also converts values to other types if specified.
             * @param message PrivateProcessingSettingAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.PrivateProcessingSettingAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrivateProcessingSettingAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PrivateProcessingSettingAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PrivateProcessingSettingAction {

            /** Properties of a PrivateProcessingSettingAction. */
            interface $Properties {

                /** PrivateProcessingSettingAction privateProcessingStatus */
                privateProcessingStatus?: (SyncAction.SyncActionValue.PrivateProcessingSettingAction.PrivateProcessingStatus|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PrivateProcessingSettingAction. */
            type $Shape = SyncAction.SyncActionValue.PrivateProcessingSettingAction.$Properties;

            /** PrivateProcessingStatus enum. */
            enum PrivateProcessingStatus {

                /** UNDEFINED value */
                UNDEFINED = 0,

                /** ENABLED value */
                ENABLED = 1,

                /** DISABLED value */
                DISABLED = 2
            }
        }

        /**
         * Properties of a PushNameSetting.
         * @deprecated Use SyncAction.SyncActionValue.PushNameSetting.$Properties instead.
         */
        interface IPushNameSetting extends SyncAction.SyncActionValue.PushNameSetting.$Properties {
        }

        /** Represents a PushNameSetting. */
        class PushNameSetting {

            /**
             * Constructs a new PushNameSetting.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.PushNameSetting.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PushNameSetting name. */
            name?: (string|null);

            /**
             * Creates a new PushNameSetting instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PushNameSetting instance
             */
            static create(properties: SyncAction.SyncActionValue.PushNameSetting.$Shape): SyncAction.SyncActionValue.PushNameSetting & SyncAction.SyncActionValue.PushNameSetting.$Shape;
            static create(properties?: SyncAction.SyncActionValue.PushNameSetting.$Properties): SyncAction.SyncActionValue.PushNameSetting;

            /**
             * Encodes the specified PushNameSetting message. Does not implicitly {@link SyncAction.SyncActionValue.PushNameSetting.verify|verify} messages.
             * @param message PushNameSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.PushNameSetting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PushNameSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PushNameSetting.verify|verify} messages.
             * @param message PushNameSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.PushNameSetting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PushNameSetting message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.PushNameSetting & SyncAction.SyncActionValue.PushNameSetting.$Shape} PushNameSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PushNameSetting & SyncAction.SyncActionValue.PushNameSetting.$Shape;

            /**
             * Decodes a PushNameSetting message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.PushNameSetting & SyncAction.SyncActionValue.PushNameSetting.$Shape} PushNameSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PushNameSetting & SyncAction.SyncActionValue.PushNameSetting.$Shape;

            /**
             * Verifies a PushNameSetting message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PushNameSetting message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PushNameSetting
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PushNameSetting;

            /**
             * Creates a plain object from a PushNameSetting message. Also converts values to other types if specified.
             * @param message PushNameSetting
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.PushNameSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PushNameSetting to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PushNameSetting
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PushNameSetting {

            /** Properties of a PushNameSetting. */
            interface $Properties {

                /** PushNameSetting name */
                name?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PushNameSetting. */
            type $Shape = SyncAction.SyncActionValue.PushNameSetting.$Properties;
        }

        /**
         * Properties of a QuickReplyAction.
         * @deprecated Use SyncAction.SyncActionValue.QuickReplyAction.$Properties instead.
         */
        interface IQuickReplyAction extends SyncAction.SyncActionValue.QuickReplyAction.$Properties {
        }

        /** Represents a QuickReplyAction. */
        class QuickReplyAction {

            /**
             * Constructs a new QuickReplyAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.QuickReplyAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** QuickReplyAction shortcut. */
            shortcut?: (string|null);

            /** QuickReplyAction message. */
            message?: (string|null);

            /** QuickReplyAction keywords. */
            keywords: string[];

            /** QuickReplyAction count. */
            count?: (number|null);

            /** QuickReplyAction deleted. */
            deleted?: (boolean|null);

            /** QuickReplyAction associatedLabelIds. */
            associatedLabelIds: string[];

            /**
             * Creates a new QuickReplyAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QuickReplyAction instance
             */
            static create(properties: SyncAction.SyncActionValue.QuickReplyAction.$Shape): SyncAction.SyncActionValue.QuickReplyAction & SyncAction.SyncActionValue.QuickReplyAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.QuickReplyAction.$Properties): SyncAction.SyncActionValue.QuickReplyAction;

            /**
             * Encodes the specified QuickReplyAction message. Does not implicitly {@link SyncAction.SyncActionValue.QuickReplyAction.verify|verify} messages.
             * @param message QuickReplyAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.QuickReplyAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QuickReplyAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.QuickReplyAction.verify|verify} messages.
             * @param message QuickReplyAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.QuickReplyAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QuickReplyAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.QuickReplyAction & SyncAction.SyncActionValue.QuickReplyAction.$Shape} QuickReplyAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.QuickReplyAction & SyncAction.SyncActionValue.QuickReplyAction.$Shape;

            /**
             * Decodes a QuickReplyAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.QuickReplyAction & SyncAction.SyncActionValue.QuickReplyAction.$Shape} QuickReplyAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.QuickReplyAction & SyncAction.SyncActionValue.QuickReplyAction.$Shape;

            /**
             * Verifies a QuickReplyAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QuickReplyAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QuickReplyAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.QuickReplyAction;

            /**
             * Creates a plain object from a QuickReplyAction message. Also converts values to other types if specified.
             * @param message QuickReplyAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.QuickReplyAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QuickReplyAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for QuickReplyAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace QuickReplyAction {

            /** Properties of a QuickReplyAction. */
            interface $Properties {

                /** QuickReplyAction shortcut */
                shortcut?: (string|null);

                /** QuickReplyAction message */
                message?: (string|null);

                /** QuickReplyAction keywords */
                keywords?: (string[]|null);

                /** QuickReplyAction count */
                count?: (number|null);

                /** QuickReplyAction deleted */
                deleted?: (boolean|null);

                /** QuickReplyAction associatedLabelIds */
                associatedLabelIds?: (string[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a QuickReplyAction. */
            type $Shape = SyncAction.SyncActionValue.QuickReplyAction.$Properties;
        }

        /**
         * Properties of a RecentEmojiWeightsAction.
         * @deprecated Use SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Properties instead.
         */
        interface IRecentEmojiWeightsAction extends SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Properties {
        }

        /** Represents a RecentEmojiWeightsAction. */
        class RecentEmojiWeightsAction {

            /**
             * Constructs a new RecentEmojiWeightsAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** RecentEmojiWeightsAction weights. */
            weights: SyncAction.RecentEmojiWeight.$Properties[];

            /**
             * Creates a new RecentEmojiWeightsAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RecentEmojiWeightsAction instance
             */
            static create(properties: SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Shape): SyncAction.SyncActionValue.RecentEmojiWeightsAction & SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Properties): SyncAction.SyncActionValue.RecentEmojiWeightsAction;

            /**
             * Encodes the specified RecentEmojiWeightsAction message. Does not implicitly {@link SyncAction.SyncActionValue.RecentEmojiWeightsAction.verify|verify} messages.
             * @param message RecentEmojiWeightsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RecentEmojiWeightsAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.RecentEmojiWeightsAction.verify|verify} messages.
             * @param message RecentEmojiWeightsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RecentEmojiWeightsAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.RecentEmojiWeightsAction & SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Shape} RecentEmojiWeightsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.RecentEmojiWeightsAction & SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Shape;

            /**
             * Decodes a RecentEmojiWeightsAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.RecentEmojiWeightsAction & SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Shape} RecentEmojiWeightsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.RecentEmojiWeightsAction & SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Shape;

            /**
             * Verifies a RecentEmojiWeightsAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RecentEmojiWeightsAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RecentEmojiWeightsAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.RecentEmojiWeightsAction;

            /**
             * Creates a plain object from a RecentEmojiWeightsAction message. Also converts values to other types if specified.
             * @param message RecentEmojiWeightsAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.RecentEmojiWeightsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RecentEmojiWeightsAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RecentEmojiWeightsAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RecentEmojiWeightsAction {

            /** Properties of a RecentEmojiWeightsAction. */
            interface $Properties {

                /** RecentEmojiWeightsAction weights */
                weights?: (SyncAction.RecentEmojiWeight.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RecentEmojiWeightsAction. */
            type $Shape = SyncAction.SyncActionValue.RecentEmojiWeightsAction.$Properties;
        }

        /**
         * Properties of a RemoveRecentStickerAction.
         * @deprecated Use SyncAction.SyncActionValue.RemoveRecentStickerAction.$Properties instead.
         */
        interface IRemoveRecentStickerAction extends SyncAction.SyncActionValue.RemoveRecentStickerAction.$Properties {
        }

        /** Represents a RemoveRecentStickerAction. */
        class RemoveRecentStickerAction {

            /**
             * Constructs a new RemoveRecentStickerAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.RemoveRecentStickerAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** RemoveRecentStickerAction lastStickerSentTs. */
            lastStickerSentTs?: (number|Long|null);

            /**
             * Creates a new RemoveRecentStickerAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoveRecentStickerAction instance
             */
            static create(properties: SyncAction.SyncActionValue.RemoveRecentStickerAction.$Shape): SyncAction.SyncActionValue.RemoveRecentStickerAction & SyncAction.SyncActionValue.RemoveRecentStickerAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.RemoveRecentStickerAction.$Properties): SyncAction.SyncActionValue.RemoveRecentStickerAction;

            /**
             * Encodes the specified RemoveRecentStickerAction message. Does not implicitly {@link SyncAction.SyncActionValue.RemoveRecentStickerAction.verify|verify} messages.
             * @param message RemoveRecentStickerAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.RemoveRecentStickerAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveRecentStickerAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.RemoveRecentStickerAction.verify|verify} messages.
             * @param message RemoveRecentStickerAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.RemoveRecentStickerAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveRecentStickerAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.RemoveRecentStickerAction & SyncAction.SyncActionValue.RemoveRecentStickerAction.$Shape} RemoveRecentStickerAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.RemoveRecentStickerAction & SyncAction.SyncActionValue.RemoveRecentStickerAction.$Shape;

            /**
             * Decodes a RemoveRecentStickerAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.RemoveRecentStickerAction & SyncAction.SyncActionValue.RemoveRecentStickerAction.$Shape} RemoveRecentStickerAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.RemoveRecentStickerAction & SyncAction.SyncActionValue.RemoveRecentStickerAction.$Shape;

            /**
             * Verifies a RemoveRecentStickerAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RemoveRecentStickerAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoveRecentStickerAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.RemoveRecentStickerAction;

            /**
             * Creates a plain object from a RemoveRecentStickerAction message. Also converts values to other types if specified.
             * @param message RemoveRecentStickerAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.RemoveRecentStickerAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveRecentStickerAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RemoveRecentStickerAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RemoveRecentStickerAction {

            /** Properties of a RemoveRecentStickerAction. */
            interface $Properties {

                /** RemoveRecentStickerAction lastStickerSentTs */
                lastStickerSentTs?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RemoveRecentStickerAction. */
            type $Shape = SyncAction.SyncActionValue.RemoveRecentStickerAction.$Properties;
        }

        /**
         * Properties of a SettingsSyncAction.
         * @deprecated Use SyncAction.SyncActionValue.SettingsSyncAction.$Properties instead.
         */
        interface ISettingsSyncAction extends SyncAction.SyncActionValue.SettingsSyncAction.$Properties {
        }

        /** Represents a SettingsSyncAction. */
        class SettingsSyncAction {

            /**
             * Constructs a new SettingsSyncAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.SettingsSyncAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SettingsSyncAction startAtLogin. */
            startAtLogin?: (boolean|null);

            /** SettingsSyncAction minimizeToTray. */
            minimizeToTray?: (boolean|null);

            /** SettingsSyncAction language. */
            language?: (string|null);

            /** SettingsSyncAction replaceTextWithEmoji. */
            replaceTextWithEmoji?: (boolean|null);

            /** SettingsSyncAction bannerNotificationDisplayMode. */
            bannerNotificationDisplayMode?: (SyncAction.SyncActionValue.SettingsSyncAction.DisplayMode|null);

            /** SettingsSyncAction unreadCounterBadgeDisplayMode. */
            unreadCounterBadgeDisplayMode?: (SyncAction.SyncActionValue.SettingsSyncAction.DisplayMode|null);

            /** SettingsSyncAction isMessagesNotificationEnabled. */
            isMessagesNotificationEnabled?: (boolean|null);

            /** SettingsSyncAction isCallsNotificationEnabled. */
            isCallsNotificationEnabled?: (boolean|null);

            /** SettingsSyncAction isReactionsNotificationEnabled. */
            isReactionsNotificationEnabled?: (boolean|null);

            /** SettingsSyncAction isStatusReactionsNotificationEnabled. */
            isStatusReactionsNotificationEnabled?: (boolean|null);

            /** SettingsSyncAction isTextPreviewForNotificationEnabled. */
            isTextPreviewForNotificationEnabled?: (boolean|null);

            /** SettingsSyncAction defaultNotificationToneId. */
            defaultNotificationToneId?: (number|null);

            /** SettingsSyncAction groupDefaultNotificationToneId. */
            groupDefaultNotificationToneId?: (number|null);

            /** SettingsSyncAction appTheme. */
            appTheme?: (number|null);

            /** SettingsSyncAction wallpaperId. */
            wallpaperId?: (number|null);

            /** SettingsSyncAction isDoodleWallpaperEnabled. */
            isDoodleWallpaperEnabled?: (boolean|null);

            /** SettingsSyncAction fontSize. */
            fontSize?: (number|null);

            /** SettingsSyncAction isPhotosAutodownloadEnabled. */
            isPhotosAutodownloadEnabled?: (boolean|null);

            /** SettingsSyncAction isAudiosAutodownloadEnabled. */
            isAudiosAutodownloadEnabled?: (boolean|null);

            /** SettingsSyncAction isVideosAutodownloadEnabled. */
            isVideosAutodownloadEnabled?: (boolean|null);

            /** SettingsSyncAction isDocumentsAutodownloadEnabled. */
            isDocumentsAutodownloadEnabled?: (boolean|null);

            /** SettingsSyncAction disableLinkPreviews. */
            disableLinkPreviews?: (boolean|null);

            /** SettingsSyncAction notificationToneId. */
            notificationToneId?: (number|null);

            /** SettingsSyncAction mediaUploadQuality. */
            mediaUploadQuality?: (SyncAction.SyncActionValue.SettingsSyncAction.MediaQualitySetting|null);

            /** SettingsSyncAction isSpellCheckEnabled. */
            isSpellCheckEnabled?: (boolean|null);

            /** SettingsSyncAction isEnterToSendEnabled. */
            isEnterToSendEnabled?: (boolean|null);

            /** SettingsSyncAction isGroupMessageNotificationEnabled. */
            isGroupMessageNotificationEnabled?: (boolean|null);

            /** SettingsSyncAction isGroupReactionsNotificationEnabled. */
            isGroupReactionsNotificationEnabled?: (boolean|null);

            /** SettingsSyncAction isStatusNotificationEnabled. */
            isStatusNotificationEnabled?: (boolean|null);

            /** SettingsSyncAction statusNotificationToneId. */
            statusNotificationToneId?: (number|null);

            /** SettingsSyncAction shouldPlaySoundForCallNotification. */
            shouldPlaySoundForCallNotification?: (boolean|null);

            /** SettingsSyncAction chatThemeId. */
            chatThemeId?: (string|null);

            /** SettingsSyncAction colorSchemeId. */
            colorSchemeId?: (string|null);

            /** SettingsSyncAction stockWallpaperImageId. */
            stockWallpaperImageId?: (string|null);

            /** SettingsSyncAction mediaAutoDownloadQuality. */
            mediaAutoDownloadQuality?: (SyncAction.SyncActionValue.SettingsSyncAction.MediaAutoDownloadQualitySetting|null);

            /**
             * Creates a new SettingsSyncAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SettingsSyncAction instance
             */
            static create(properties: SyncAction.SyncActionValue.SettingsSyncAction.$Shape): SyncAction.SyncActionValue.SettingsSyncAction & SyncAction.SyncActionValue.SettingsSyncAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.SettingsSyncAction.$Properties): SyncAction.SyncActionValue.SettingsSyncAction;

            /**
             * Encodes the specified SettingsSyncAction message. Does not implicitly {@link SyncAction.SyncActionValue.SettingsSyncAction.verify|verify} messages.
             * @param message SettingsSyncAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.SettingsSyncAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SettingsSyncAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SettingsSyncAction.verify|verify} messages.
             * @param message SettingsSyncAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.SettingsSyncAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SettingsSyncAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.SettingsSyncAction & SyncAction.SyncActionValue.SettingsSyncAction.$Shape} SettingsSyncAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SettingsSyncAction & SyncAction.SyncActionValue.SettingsSyncAction.$Shape;

            /**
             * Decodes a SettingsSyncAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.SettingsSyncAction & SyncAction.SyncActionValue.SettingsSyncAction.$Shape} SettingsSyncAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SettingsSyncAction & SyncAction.SyncActionValue.SettingsSyncAction.$Shape;

            /**
             * Verifies a SettingsSyncAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SettingsSyncAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SettingsSyncAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SettingsSyncAction;

            /**
             * Creates a plain object from a SettingsSyncAction message. Also converts values to other types if specified.
             * @param message SettingsSyncAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.SettingsSyncAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SettingsSyncAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SettingsSyncAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SettingsSyncAction {

            /** Properties of a SettingsSyncAction. */
            interface $Properties {

                /** SettingsSyncAction startAtLogin */
                startAtLogin?: (boolean|null);

                /** SettingsSyncAction minimizeToTray */
                minimizeToTray?: (boolean|null);

                /** SettingsSyncAction language */
                language?: (string|null);

                /** SettingsSyncAction replaceTextWithEmoji */
                replaceTextWithEmoji?: (boolean|null);

                /** SettingsSyncAction bannerNotificationDisplayMode */
                bannerNotificationDisplayMode?: (SyncAction.SyncActionValue.SettingsSyncAction.DisplayMode|null);

                /** SettingsSyncAction unreadCounterBadgeDisplayMode */
                unreadCounterBadgeDisplayMode?: (SyncAction.SyncActionValue.SettingsSyncAction.DisplayMode|null);

                /** SettingsSyncAction isMessagesNotificationEnabled */
                isMessagesNotificationEnabled?: (boolean|null);

                /** SettingsSyncAction isCallsNotificationEnabled */
                isCallsNotificationEnabled?: (boolean|null);

                /** SettingsSyncAction isReactionsNotificationEnabled */
                isReactionsNotificationEnabled?: (boolean|null);

                /** SettingsSyncAction isStatusReactionsNotificationEnabled */
                isStatusReactionsNotificationEnabled?: (boolean|null);

                /** SettingsSyncAction isTextPreviewForNotificationEnabled */
                isTextPreviewForNotificationEnabled?: (boolean|null);

                /** SettingsSyncAction defaultNotificationToneId */
                defaultNotificationToneId?: (number|null);

                /** SettingsSyncAction groupDefaultNotificationToneId */
                groupDefaultNotificationToneId?: (number|null);

                /** SettingsSyncAction appTheme */
                appTheme?: (number|null);

                /** SettingsSyncAction wallpaperId */
                wallpaperId?: (number|null);

                /** SettingsSyncAction isDoodleWallpaperEnabled */
                isDoodleWallpaperEnabled?: (boolean|null);

                /** SettingsSyncAction fontSize */
                fontSize?: (number|null);

                /** SettingsSyncAction isPhotosAutodownloadEnabled */
                isPhotosAutodownloadEnabled?: (boolean|null);

                /** SettingsSyncAction isAudiosAutodownloadEnabled */
                isAudiosAutodownloadEnabled?: (boolean|null);

                /** SettingsSyncAction isVideosAutodownloadEnabled */
                isVideosAutodownloadEnabled?: (boolean|null);

                /** SettingsSyncAction isDocumentsAutodownloadEnabled */
                isDocumentsAutodownloadEnabled?: (boolean|null);

                /** SettingsSyncAction disableLinkPreviews */
                disableLinkPreviews?: (boolean|null);

                /** SettingsSyncAction notificationToneId */
                notificationToneId?: (number|null);

                /** SettingsSyncAction mediaUploadQuality */
                mediaUploadQuality?: (SyncAction.SyncActionValue.SettingsSyncAction.MediaQualitySetting|null);

                /** SettingsSyncAction isSpellCheckEnabled */
                isSpellCheckEnabled?: (boolean|null);

                /** SettingsSyncAction isEnterToSendEnabled */
                isEnterToSendEnabled?: (boolean|null);

                /** SettingsSyncAction isGroupMessageNotificationEnabled */
                isGroupMessageNotificationEnabled?: (boolean|null);

                /** SettingsSyncAction isGroupReactionsNotificationEnabled */
                isGroupReactionsNotificationEnabled?: (boolean|null);

                /** SettingsSyncAction isStatusNotificationEnabled */
                isStatusNotificationEnabled?: (boolean|null);

                /** SettingsSyncAction statusNotificationToneId */
                statusNotificationToneId?: (number|null);

                /** SettingsSyncAction shouldPlaySoundForCallNotification */
                shouldPlaySoundForCallNotification?: (boolean|null);

                /** SettingsSyncAction chatThemeId */
                chatThemeId?: (string|null);

                /** SettingsSyncAction colorSchemeId */
                colorSchemeId?: (string|null);

                /** SettingsSyncAction stockWallpaperImageId */
                stockWallpaperImageId?: (string|null);

                /** SettingsSyncAction mediaAutoDownloadQuality */
                mediaAutoDownloadQuality?: (SyncAction.SyncActionValue.SettingsSyncAction.MediaAutoDownloadQualitySetting|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SettingsSyncAction. */
            type $Shape = SyncAction.SyncActionValue.SettingsSyncAction.$Properties;

            /** DisplayMode enum. */
            enum DisplayMode {

                /** DISPLAY_MODE_UNKNOWN value */
                DISPLAY_MODE_UNKNOWN = 0,

                /** ALWAYS value */
                ALWAYS = 1,

                /** NEVER value */
                NEVER = 2,

                /** ONLY_WHEN_APP_IS_OPEN value */
                ONLY_WHEN_APP_IS_OPEN = 3
            }

            /** MediaAutoDownloadQualitySetting enum. */
            enum MediaAutoDownloadQualitySetting {

                /** MEDIA_AUTO_DOWNLOAD_QUALITY_UNKNOWN value */
                MEDIA_AUTO_DOWNLOAD_QUALITY_UNKNOWN = 0,

                /** MEDIA_AUTO_DOWNLOAD_QUALITY_STANDARD value */
                MEDIA_AUTO_DOWNLOAD_QUALITY_STANDARD = 1,

                /** MEDIA_AUTO_DOWNLOAD_QUALITY_HD value */
                MEDIA_AUTO_DOWNLOAD_QUALITY_HD = 2,

                /** MEDIA_AUTO_DOWNLOAD_QUALITY_AUTO value */
                MEDIA_AUTO_DOWNLOAD_QUALITY_AUTO = 3
            }

            /** MediaQualitySetting enum. */
            enum MediaQualitySetting {

                /** MEDIA_QUALITY_UNKNOWN value */
                MEDIA_QUALITY_UNKNOWN = 0,

                /** STANDARD value */
                STANDARD = 1,

                /** HD value */
                HD = 2
            }

            /** SettingKey enum. */
            enum SettingKey {

                /** SETTING_KEY_UNKNOWN value */
                SETTING_KEY_UNKNOWN = 0,

                /** START_AT_LOGIN value */
                START_AT_LOGIN = 1,

                /** MINIMIZE_TO_TRAY value */
                MINIMIZE_TO_TRAY = 2,

                /** LANGUAGE value */
                LANGUAGE = 3,

                /** REPLACE_TEXT_WITH_EMOJI value */
                REPLACE_TEXT_WITH_EMOJI = 4,

                /** BANNER_NOTIFICATION_DISPLAY_MODE value */
                BANNER_NOTIFICATION_DISPLAY_MODE = 5,

                /** UNREAD_COUNTER_BADGE_DISPLAY_MODE value */
                UNREAD_COUNTER_BADGE_DISPLAY_MODE = 6,

                /** IS_MESSAGES_NOTIFICATION_ENABLED value */
                IS_MESSAGES_NOTIFICATION_ENABLED = 7,

                /** IS_CALLS_NOTIFICATION_ENABLED value */
                IS_CALLS_NOTIFICATION_ENABLED = 8,

                /** IS_REACTIONS_NOTIFICATION_ENABLED value */
                IS_REACTIONS_NOTIFICATION_ENABLED = 9,

                /** IS_STATUS_REACTIONS_NOTIFICATION_ENABLED value */
                IS_STATUS_REACTIONS_NOTIFICATION_ENABLED = 10,

                /** IS_TEXT_PREVIEW_FOR_NOTIFICATION_ENABLED value */
                IS_TEXT_PREVIEW_FOR_NOTIFICATION_ENABLED = 11,

                /** DEFAULT_NOTIFICATION_TONE_ID value */
                DEFAULT_NOTIFICATION_TONE_ID = 12,

                /** GROUP_DEFAULT_NOTIFICATION_TONE_ID value */
                GROUP_DEFAULT_NOTIFICATION_TONE_ID = 13,

                /** APP_THEME value */
                APP_THEME = 14,

                /** WALLPAPER_ID value */
                WALLPAPER_ID = 15,

                /** IS_DOODLE_WALLPAPER_ENABLED value */
                IS_DOODLE_WALLPAPER_ENABLED = 16,

                /** FONT_SIZE value */
                FONT_SIZE = 17,

                /** IS_PHOTOS_AUTODOWNLOAD_ENABLED value */
                IS_PHOTOS_AUTODOWNLOAD_ENABLED = 18,

                /** IS_AUDIOS_AUTODOWNLOAD_ENABLED value */
                IS_AUDIOS_AUTODOWNLOAD_ENABLED = 19,

                /** IS_VIDEOS_AUTODOWNLOAD_ENABLED value */
                IS_VIDEOS_AUTODOWNLOAD_ENABLED = 20,

                /** IS_DOCUMENTS_AUTODOWNLOAD_ENABLED value */
                IS_DOCUMENTS_AUTODOWNLOAD_ENABLED = 21,

                /** DISABLE_LINK_PREVIEWS value */
                DISABLE_LINK_PREVIEWS = 22,

                /** NOTIFICATION_TONE_ID value */
                NOTIFICATION_TONE_ID = 23,

                /** MEDIA_UPLOAD_QUALITY value */
                MEDIA_UPLOAD_QUALITY = 24,

                /** IS_SPELL_CHECK_ENABLED value */
                IS_SPELL_CHECK_ENABLED = 25,

                /** IS_ENTER_TO_SEND_ENABLED value */
                IS_ENTER_TO_SEND_ENABLED = 26,

                /** IS_GROUP_MESSAGE_NOTIFICATION_ENABLED value */
                IS_GROUP_MESSAGE_NOTIFICATION_ENABLED = 27,

                /** IS_GROUP_REACTIONS_NOTIFICATION_ENABLED value */
                IS_GROUP_REACTIONS_NOTIFICATION_ENABLED = 28,

                /** IS_STATUS_NOTIFICATION_ENABLED value */
                IS_STATUS_NOTIFICATION_ENABLED = 29,

                /** STATUS_NOTIFICATION_TONE_ID value */
                STATUS_NOTIFICATION_TONE_ID = 30,

                /** SHOULD_PLAY_SOUND_FOR_CALL_NOTIFICATION value */
                SHOULD_PLAY_SOUND_FOR_CALL_NOTIFICATION = 31,

                /** CHAT_THEME_ID value */
                CHAT_THEME_ID = 32,

                /** COLOR_SCHEME_ID value */
                COLOR_SCHEME_ID = 33,

                /** STOCK_WALLPAPER_IMAGE_ID value */
                STOCK_WALLPAPER_IMAGE_ID = 34,

                /** MEDIA_AUTO_DOWNLOAD_QUALITY value */
                MEDIA_AUTO_DOWNLOAD_QUALITY = 35
            }

            /** SettingPlatform enum. */
            enum SettingPlatform {

                /** PLATFORM_UNKNOWN value */
                PLATFORM_UNKNOWN = 0,

                /** WEB value */
                WEB = 1,

                /** HYBRID value */
                HYBRID = 2,

                /** WINDOWS value */
                WINDOWS = 3,

                /** MAC value */
                MAC = 4
            }
        }

        /**
         * Properties of a SharedDeviceAllowlistAction.
         * @deprecated Use SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Properties instead.
         */
        interface ISharedDeviceAllowlistAction extends SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Properties {
        }

        /** Represents a SharedDeviceAllowlistAction. */
        class SharedDeviceAllowlistAction {

            /**
             * Constructs a new SharedDeviceAllowlistAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SharedDeviceAllowlistAction allowed. */
            allowed?: (boolean|null);

            /**
             * Creates a new SharedDeviceAllowlistAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SharedDeviceAllowlistAction instance
             */
            static create(properties: SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Shape): SyncAction.SyncActionValue.SharedDeviceAllowlistAction & SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Properties): SyncAction.SyncActionValue.SharedDeviceAllowlistAction;

            /**
             * Encodes the specified SharedDeviceAllowlistAction message. Does not implicitly {@link SyncAction.SyncActionValue.SharedDeviceAllowlistAction.verify|verify} messages.
             * @param message SharedDeviceAllowlistAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SharedDeviceAllowlistAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SharedDeviceAllowlistAction.verify|verify} messages.
             * @param message SharedDeviceAllowlistAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SharedDeviceAllowlistAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.SharedDeviceAllowlistAction & SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Shape} SharedDeviceAllowlistAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SharedDeviceAllowlistAction & SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Shape;

            /**
             * Decodes a SharedDeviceAllowlistAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.SharedDeviceAllowlistAction & SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Shape} SharedDeviceAllowlistAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SharedDeviceAllowlistAction & SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Shape;

            /**
             * Verifies a SharedDeviceAllowlistAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SharedDeviceAllowlistAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SharedDeviceAllowlistAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SharedDeviceAllowlistAction;

            /**
             * Creates a plain object from a SharedDeviceAllowlistAction message. Also converts values to other types if specified.
             * @param message SharedDeviceAllowlistAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.SharedDeviceAllowlistAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SharedDeviceAllowlistAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SharedDeviceAllowlistAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SharedDeviceAllowlistAction {

            /** Properties of a SharedDeviceAllowlistAction. */
            interface $Properties {

                /** SharedDeviceAllowlistAction allowed */
                allowed?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SharedDeviceAllowlistAction. */
            type $Shape = SyncAction.SyncActionValue.SharedDeviceAllowlistAction.$Properties;
        }

        /**
         * Properties of a SharedDeviceSecretAction.
         * @deprecated Use SyncAction.SyncActionValue.SharedDeviceSecretAction.$Properties instead.
         */
        interface ISharedDeviceSecretAction extends SyncAction.SyncActionValue.SharedDeviceSecretAction.$Properties {
        }

        /** Represents a SharedDeviceSecretAction. */
        class SharedDeviceSecretAction {

            /**
             * Constructs a new SharedDeviceSecretAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.SharedDeviceSecretAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SharedDeviceSecretAction secret. */
            secret?: (Uint8Array|null);

            /** SharedDeviceSecretAction ttlMs. */
            ttlMs?: (number|Long|null);

            /**
             * Creates a new SharedDeviceSecretAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SharedDeviceSecretAction instance
             */
            static create(properties: SyncAction.SyncActionValue.SharedDeviceSecretAction.$Shape): SyncAction.SyncActionValue.SharedDeviceSecretAction & SyncAction.SyncActionValue.SharedDeviceSecretAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.SharedDeviceSecretAction.$Properties): SyncAction.SyncActionValue.SharedDeviceSecretAction;

            /**
             * Encodes the specified SharedDeviceSecretAction message. Does not implicitly {@link SyncAction.SyncActionValue.SharedDeviceSecretAction.verify|verify} messages.
             * @param message SharedDeviceSecretAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.SharedDeviceSecretAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SharedDeviceSecretAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SharedDeviceSecretAction.verify|verify} messages.
             * @param message SharedDeviceSecretAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.SharedDeviceSecretAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SharedDeviceSecretAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.SharedDeviceSecretAction & SyncAction.SyncActionValue.SharedDeviceSecretAction.$Shape} SharedDeviceSecretAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SharedDeviceSecretAction & SyncAction.SyncActionValue.SharedDeviceSecretAction.$Shape;

            /**
             * Decodes a SharedDeviceSecretAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.SharedDeviceSecretAction & SyncAction.SyncActionValue.SharedDeviceSecretAction.$Shape} SharedDeviceSecretAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SharedDeviceSecretAction & SyncAction.SyncActionValue.SharedDeviceSecretAction.$Shape;

            /**
             * Verifies a SharedDeviceSecretAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SharedDeviceSecretAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SharedDeviceSecretAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SharedDeviceSecretAction;

            /**
             * Creates a plain object from a SharedDeviceSecretAction message. Also converts values to other types if specified.
             * @param message SharedDeviceSecretAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.SharedDeviceSecretAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SharedDeviceSecretAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SharedDeviceSecretAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SharedDeviceSecretAction {

            /** Properties of a SharedDeviceSecretAction. */
            interface $Properties {

                /** SharedDeviceSecretAction secret */
                secret?: (Uint8Array|null);

                /** SharedDeviceSecretAction ttlMs */
                ttlMs?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SharedDeviceSecretAction. */
            type $Shape = SyncAction.SyncActionValue.SharedDeviceSecretAction.$Properties;
        }

        /**
         * Properties of a StarAction.
         * @deprecated Use SyncAction.SyncActionValue.StarAction.$Properties instead.
         */
        interface IStarAction extends SyncAction.SyncActionValue.StarAction.$Properties {
        }

        /** Represents a StarAction. */
        class StarAction {

            /**
             * Constructs a new StarAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.StarAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** StarAction starred. */
            starred?: (boolean|null);

            /**
             * Creates a new StarAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StarAction instance
             */
            static create(properties: SyncAction.SyncActionValue.StarAction.$Shape): SyncAction.SyncActionValue.StarAction & SyncAction.SyncActionValue.StarAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.StarAction.$Properties): SyncAction.SyncActionValue.StarAction;

            /**
             * Encodes the specified StarAction message. Does not implicitly {@link SyncAction.SyncActionValue.StarAction.verify|verify} messages.
             * @param message StarAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.StarAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StarAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.StarAction.verify|verify} messages.
             * @param message StarAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.StarAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StarAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.StarAction & SyncAction.SyncActionValue.StarAction.$Shape} StarAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.StarAction & SyncAction.SyncActionValue.StarAction.$Shape;

            /**
             * Decodes a StarAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.StarAction & SyncAction.SyncActionValue.StarAction.$Shape} StarAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.StarAction & SyncAction.SyncActionValue.StarAction.$Shape;

            /**
             * Verifies a StarAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StarAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StarAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.StarAction;

            /**
             * Creates a plain object from a StarAction message. Also converts values to other types if specified.
             * @param message StarAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.StarAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StarAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for StarAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace StarAction {

            /** Properties of a StarAction. */
            interface $Properties {

                /** StarAction starred */
                starred?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a StarAction. */
            type $Shape = SyncAction.SyncActionValue.StarAction.$Properties;
        }

        /**
         * Properties of a StatusPostOptInNotificationPreferencesAction.
         * @deprecated Use SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Properties instead.
         */
        interface IStatusPostOptInNotificationPreferencesAction extends SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Properties {
        }

        /** Represents a StatusPostOptInNotificationPreferencesAction. */
        class StatusPostOptInNotificationPreferencesAction {

            /**
             * Constructs a new StatusPostOptInNotificationPreferencesAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** StatusPostOptInNotificationPreferencesAction enabled. */
            enabled?: (boolean|null);

            /**
             * Creates a new StatusPostOptInNotificationPreferencesAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusPostOptInNotificationPreferencesAction instance
             */
            static create(properties: SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Shape): SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction & SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Properties): SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction;

            /**
             * Encodes the specified StatusPostOptInNotificationPreferencesAction message. Does not implicitly {@link SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.verify|verify} messages.
             * @param message StatusPostOptInNotificationPreferencesAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusPostOptInNotificationPreferencesAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.verify|verify} messages.
             * @param message StatusPostOptInNotificationPreferencesAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusPostOptInNotificationPreferencesAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction & SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Shape} StatusPostOptInNotificationPreferencesAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction & SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Shape;

            /**
             * Decodes a StatusPostOptInNotificationPreferencesAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction & SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Shape} StatusPostOptInNotificationPreferencesAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction & SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Shape;

            /**
             * Verifies a StatusPostOptInNotificationPreferencesAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatusPostOptInNotificationPreferencesAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatusPostOptInNotificationPreferencesAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction;

            /**
             * Creates a plain object from a StatusPostOptInNotificationPreferencesAction message. Also converts values to other types if specified.
             * @param message StatusPostOptInNotificationPreferencesAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatusPostOptInNotificationPreferencesAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for StatusPostOptInNotificationPreferencesAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace StatusPostOptInNotificationPreferencesAction {

            /** Properties of a StatusPostOptInNotificationPreferencesAction. */
            interface $Properties {

                /** StatusPostOptInNotificationPreferencesAction enabled */
                enabled?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a StatusPostOptInNotificationPreferencesAction. */
            type $Shape = SyncAction.SyncActionValue.StatusPostOptInNotificationPreferencesAction.$Properties;
        }

        /**
         * Properties of a StatusPrivacyAction.
         * @deprecated Use SyncAction.SyncActionValue.StatusPrivacyAction.$Properties instead.
         */
        interface IStatusPrivacyAction extends SyncAction.SyncActionValue.StatusPrivacyAction.$Properties {
        }

        /** Represents a StatusPrivacyAction. */
        class StatusPrivacyAction {

            /**
             * Constructs a new StatusPrivacyAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.StatusPrivacyAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** StatusPrivacyAction mode. */
            mode?: (SyncAction.SyncActionValue.StatusPrivacyAction.StatusDistributionMode|null);

            /** StatusPrivacyAction userJid. */
            userJid: string[];

            /** StatusPrivacyAction shareToFb. */
            shareToFb?: (boolean|null);

            /** StatusPrivacyAction shareToIg. */
            shareToIg?: (boolean|null);

            /** StatusPrivacyAction customLists. */
            customLists: SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Properties[];

            /** StatusPrivacyAction modes. */
            modes: SyncAction.SyncActionValue.StatusPrivacyAction.StatusDistributionMode[];

            /**
             * Creates a new StatusPrivacyAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusPrivacyAction instance
             */
            static create(properties: SyncAction.SyncActionValue.StatusPrivacyAction.$Shape): SyncAction.SyncActionValue.StatusPrivacyAction & SyncAction.SyncActionValue.StatusPrivacyAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.StatusPrivacyAction.$Properties): SyncAction.SyncActionValue.StatusPrivacyAction;

            /**
             * Encodes the specified StatusPrivacyAction message. Does not implicitly {@link SyncAction.SyncActionValue.StatusPrivacyAction.verify|verify} messages.
             * @param message StatusPrivacyAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.StatusPrivacyAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusPrivacyAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.StatusPrivacyAction.verify|verify} messages.
             * @param message StatusPrivacyAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.StatusPrivacyAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusPrivacyAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.StatusPrivacyAction & SyncAction.SyncActionValue.StatusPrivacyAction.$Shape} StatusPrivacyAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.StatusPrivacyAction & SyncAction.SyncActionValue.StatusPrivacyAction.$Shape;

            /**
             * Decodes a StatusPrivacyAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.StatusPrivacyAction & SyncAction.SyncActionValue.StatusPrivacyAction.$Shape} StatusPrivacyAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.StatusPrivacyAction & SyncAction.SyncActionValue.StatusPrivacyAction.$Shape;

            /**
             * Verifies a StatusPrivacyAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatusPrivacyAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatusPrivacyAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.StatusPrivacyAction;

            /**
             * Creates a plain object from a StatusPrivacyAction message. Also converts values to other types if specified.
             * @param message StatusPrivacyAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.StatusPrivacyAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatusPrivacyAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for StatusPrivacyAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace StatusPrivacyAction {

            /** Properties of a StatusPrivacyAction. */
            interface $Properties {

                /** StatusPrivacyAction mode */
                mode?: (SyncAction.SyncActionValue.StatusPrivacyAction.StatusDistributionMode|null);

                /** StatusPrivacyAction userJid */
                userJid?: (string[]|null);

                /** StatusPrivacyAction shareToFb */
                shareToFb?: (boolean|null);

                /** StatusPrivacyAction shareToIg */
                shareToIg?: (boolean|null);

                /** StatusPrivacyAction customLists */
                customLists?: (SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Properties[]|null);

                /** StatusPrivacyAction modes */
                modes?: (SyncAction.SyncActionValue.StatusPrivacyAction.StatusDistributionMode[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a StatusPrivacyAction. */
            type $Shape = SyncAction.SyncActionValue.StatusPrivacyAction.$Properties;

            /**
             * Properties of a CustomList.
             * @deprecated Use SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Properties instead.
             */
            interface ICustomList extends SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Properties {
            }

            /** Represents a CustomList. */
            class CustomList {

                /**
                 * Constructs a new CustomList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** CustomList listId. */
                listId?: (string|null);

                /** CustomList name. */
                name?: (string|null);

                /** CustomList emoji. */
                emoji?: (string|null);

                /** CustomList isSelected. */
                isSelected?: (boolean|null);

                /** CustomList userJid. */
                userJid: string[];

                /**
                 * Creates a new CustomList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CustomList instance
                 */
                static create(properties: SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Shape): SyncAction.SyncActionValue.StatusPrivacyAction.CustomList & SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Shape;
                static create(properties?: SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Properties): SyncAction.SyncActionValue.StatusPrivacyAction.CustomList;

                /**
                 * Encodes the specified CustomList message. Does not implicitly {@link SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.verify|verify} messages.
                 * @param message CustomList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CustomList message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.verify|verify} messages.
                 * @param message CustomList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CustomList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {SyncAction.SyncActionValue.StatusPrivacyAction.CustomList & SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Shape} CustomList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.StatusPrivacyAction.CustomList & SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Shape;

                /**
                 * Decodes a CustomList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {SyncAction.SyncActionValue.StatusPrivacyAction.CustomList & SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Shape} CustomList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.StatusPrivacyAction.CustomList & SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Shape;

                /**
                 * Verifies a CustomList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CustomList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CustomList
                 */
                static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.StatusPrivacyAction.CustomList;

                /**
                 * Creates a plain object from a CustomList message. Also converts values to other types if specified.
                 * @param message CustomList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: SyncAction.SyncActionValue.StatusPrivacyAction.CustomList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CustomList to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for CustomList
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace CustomList {

                /** Properties of a CustomList. */
                interface $Properties {

                    /** CustomList listId */
                    listId?: (string|null);

                    /** CustomList name */
                    name?: (string|null);

                    /** CustomList emoji */
                    emoji?: (string|null);

                    /** CustomList isSelected */
                    isSelected?: (boolean|null);

                    /** CustomList userJid */
                    userJid?: (string[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a CustomList. */
                type $Shape = SyncAction.SyncActionValue.StatusPrivacyAction.CustomList.$Properties;
            }

            /** StatusDistributionMode enum. */
            enum StatusDistributionMode {

                /** ALLOW_LIST value */
                ALLOW_LIST = 0,

                /** DENY_LIST value */
                DENY_LIST = 1,

                /** CONTACTS value */
                CONTACTS = 2,

                /** CLOSE_FRIENDS value */
                CLOSE_FRIENDS = 3,

                /** CUSTOM_LIST value */
                CUSTOM_LIST = 4
            }
        }

        /**
         * Properties of a StickerAction.
         * @deprecated Use SyncAction.SyncActionValue.StickerAction.$Properties instead.
         */
        interface IStickerAction extends SyncAction.SyncActionValue.StickerAction.$Properties {
        }

        /** Represents a StickerAction. */
        class StickerAction {

            /**
             * Constructs a new StickerAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.StickerAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** StickerAction url. */
            url?: (string|null);

            /** StickerAction fileEncSha256. */
            fileEncSha256?: (Uint8Array|null);

            /** StickerAction mediaKey. */
            mediaKey?: (Uint8Array|null);

            /** StickerAction mimetype. */
            mimetype?: (string|null);

            /** StickerAction height. */
            height?: (number|null);

            /** StickerAction width. */
            width?: (number|null);

            /** StickerAction directPath. */
            directPath?: (string|null);

            /** StickerAction fileLength. */
            fileLength?: (number|Long|null);

            /** StickerAction isFavorite. */
            isFavorite?: (boolean|null);

            /** StickerAction deviceIdHint. */
            deviceIdHint?: (number|null);

            /** StickerAction isLottie. */
            isLottie?: (boolean|null);

            /** StickerAction imageHash. */
            imageHash?: (string|null);

            /** StickerAction isAvatarSticker. */
            isAvatarSticker?: (boolean|null);

            /**
             * Creates a new StickerAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StickerAction instance
             */
            static create(properties: SyncAction.SyncActionValue.StickerAction.$Shape): SyncAction.SyncActionValue.StickerAction & SyncAction.SyncActionValue.StickerAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.StickerAction.$Properties): SyncAction.SyncActionValue.StickerAction;

            /**
             * Encodes the specified StickerAction message. Does not implicitly {@link SyncAction.SyncActionValue.StickerAction.verify|verify} messages.
             * @param message StickerAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.StickerAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StickerAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.StickerAction.verify|verify} messages.
             * @param message StickerAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.StickerAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StickerAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.StickerAction & SyncAction.SyncActionValue.StickerAction.$Shape} StickerAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.StickerAction & SyncAction.SyncActionValue.StickerAction.$Shape;

            /**
             * Decodes a StickerAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.StickerAction & SyncAction.SyncActionValue.StickerAction.$Shape} StickerAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.StickerAction & SyncAction.SyncActionValue.StickerAction.$Shape;

            /**
             * Verifies a StickerAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StickerAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StickerAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.StickerAction;

            /**
             * Creates a plain object from a StickerAction message. Also converts values to other types if specified.
             * @param message StickerAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.StickerAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StickerAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for StickerAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace StickerAction {

            /** Properties of a StickerAction. */
            interface $Properties {

                /** StickerAction url */
                url?: (string|null);

                /** StickerAction fileEncSha256 */
                fileEncSha256?: (Uint8Array|null);

                /** StickerAction mediaKey */
                mediaKey?: (Uint8Array|null);

                /** StickerAction mimetype */
                mimetype?: (string|null);

                /** StickerAction height */
                height?: (number|null);

                /** StickerAction width */
                width?: (number|null);

                /** StickerAction directPath */
                directPath?: (string|null);

                /** StickerAction fileLength */
                fileLength?: (number|Long|null);

                /** StickerAction isFavorite */
                isFavorite?: (boolean|null);

                /** StickerAction deviceIdHint */
                deviceIdHint?: (number|null);

                /** StickerAction isLottie */
                isLottie?: (boolean|null);

                /** StickerAction imageHash */
                imageHash?: (string|null);

                /** StickerAction isAvatarSticker */
                isAvatarSticker?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a StickerAction. */
            type $Shape = SyncAction.SyncActionValue.StickerAction.$Properties;
        }

        /**
         * Properties of a SubscriptionAction.
         * @deprecated Use SyncAction.SyncActionValue.SubscriptionAction.$Properties instead.
         */
        interface ISubscriptionAction extends SyncAction.SyncActionValue.SubscriptionAction.$Properties {
        }

        /** Represents a SubscriptionAction. */
        class SubscriptionAction {

            /**
             * Constructs a new SubscriptionAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.SubscriptionAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SubscriptionAction isDeactivated. */
            isDeactivated?: (boolean|null);

            /** SubscriptionAction isAutoRenewing. */
            isAutoRenewing?: (boolean|null);

            /** SubscriptionAction expirationDate. */
            expirationDate?: (number|Long|null);

            /**
             * Creates a new SubscriptionAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubscriptionAction instance
             */
            static create(properties: SyncAction.SyncActionValue.SubscriptionAction.$Shape): SyncAction.SyncActionValue.SubscriptionAction & SyncAction.SyncActionValue.SubscriptionAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.SubscriptionAction.$Properties): SyncAction.SyncActionValue.SubscriptionAction;

            /**
             * Encodes the specified SubscriptionAction message. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionAction.verify|verify} messages.
             * @param message SubscriptionAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.SubscriptionAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubscriptionAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionAction.verify|verify} messages.
             * @param message SubscriptionAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.SubscriptionAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubscriptionAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.SubscriptionAction & SyncAction.SyncActionValue.SubscriptionAction.$Shape} SubscriptionAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SubscriptionAction & SyncAction.SyncActionValue.SubscriptionAction.$Shape;

            /**
             * Decodes a SubscriptionAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.SubscriptionAction & SyncAction.SyncActionValue.SubscriptionAction.$Shape} SubscriptionAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SubscriptionAction & SyncAction.SyncActionValue.SubscriptionAction.$Shape;

            /**
             * Verifies a SubscriptionAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SubscriptionAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SubscriptionAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SubscriptionAction;

            /**
             * Creates a plain object from a SubscriptionAction message. Also converts values to other types if specified.
             * @param message SubscriptionAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.SubscriptionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SubscriptionAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SubscriptionAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SubscriptionAction {

            /** Properties of a SubscriptionAction. */
            interface $Properties {

                /** SubscriptionAction isDeactivated */
                isDeactivated?: (boolean|null);

                /** SubscriptionAction isAutoRenewing */
                isAutoRenewing?: (boolean|null);

                /** SubscriptionAction expirationDate */
                expirationDate?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SubscriptionAction. */
            type $Shape = SyncAction.SyncActionValue.SubscriptionAction.$Properties;
        }

        /**
         * Properties of a SubscriptionsSyncV2Action.
         * @deprecated Use SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Properties instead.
         */
        interface ISubscriptionsSyncV2Action extends SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Properties {
        }

        /** Represents a SubscriptionsSyncV2Action. */
        class SubscriptionsSyncV2Action {

            /**
             * Constructs a new SubscriptionsSyncV2Action.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SubscriptionsSyncV2Action subscriptions. */
            subscriptions: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Properties[];

            /** SubscriptionsSyncV2Action paidFeature. */
            paidFeature: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Properties[];

            /**
             * Creates a new SubscriptionsSyncV2Action instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubscriptionsSyncV2Action instance
             */
            static create(properties: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Shape): SyncAction.SyncActionValue.SubscriptionsSyncV2Action & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Shape;
            static create(properties?: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Properties): SyncAction.SyncActionValue.SubscriptionsSyncV2Action;

            /**
             * Encodes the specified SubscriptionsSyncV2Action message. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionsSyncV2Action.verify|verify} messages.
             * @param message SubscriptionsSyncV2Action message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubscriptionsSyncV2Action message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionsSyncV2Action.verify|verify} messages.
             * @param message SubscriptionsSyncV2Action message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubscriptionsSyncV2Action message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.SubscriptionsSyncV2Action & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Shape} SubscriptionsSyncV2Action
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SubscriptionsSyncV2Action & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Shape;

            /**
             * Decodes a SubscriptionsSyncV2Action message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.SubscriptionsSyncV2Action & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Shape} SubscriptionsSyncV2Action
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SubscriptionsSyncV2Action & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Shape;

            /**
             * Verifies a SubscriptionsSyncV2Action message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SubscriptionsSyncV2Action message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SubscriptionsSyncV2Action
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SubscriptionsSyncV2Action;

            /**
             * Creates a plain object from a SubscriptionsSyncV2Action message. Also converts values to other types if specified.
             * @param message SubscriptionsSyncV2Action
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.SubscriptionsSyncV2Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SubscriptionsSyncV2Action to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SubscriptionsSyncV2Action
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SubscriptionsSyncV2Action {

            /** Properties of a SubscriptionsSyncV2Action. */
            interface $Properties {

                /** SubscriptionsSyncV2Action subscriptions */
                subscriptions?: (SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Properties[]|null);

                /** SubscriptionsSyncV2Action paidFeature */
                paidFeature?: (SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SubscriptionsSyncV2Action. */
            type $Shape = SyncAction.SyncActionValue.SubscriptionsSyncV2Action.$Properties;

            /**
             * Properties of a PaidFeature.
             * @deprecated Use SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Properties instead.
             */
            interface IPaidFeature extends SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Properties {
            }

            /** Represents a PaidFeature. */
            class PaidFeature {

                /**
                 * Constructs a new PaidFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** PaidFeature name. */
                name?: (string|null);

                /** PaidFeature enabled. */
                enabled?: (boolean|null);

                /** PaidFeature limit. */
                limit?: (number|null);

                /** PaidFeature expirationTime. */
                expirationTime?: (number|Long|null);

                /**
                 * Creates a new PaidFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PaidFeature instance
                 */
                static create(properties: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Shape): SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Shape;
                static create(properties?: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Properties): SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature;

                /**
                 * Encodes the specified PaidFeature message. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.verify|verify} messages.
                 * @param message PaidFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PaidFeature message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.verify|verify} messages.
                 * @param message PaidFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PaidFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Shape} PaidFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Shape;

                /**
                 * Decodes a PaidFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Shape} PaidFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Shape;

                /**
                 * Verifies a PaidFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PaidFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PaidFeature
                 */
                static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature;

                /**
                 * Creates a plain object from a PaidFeature message. Also converts values to other types if specified.
                 * @param message PaidFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PaidFeature to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for PaidFeature
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PaidFeature {

                /** Properties of a PaidFeature. */
                interface $Properties {

                    /** PaidFeature name */
                    name?: (string|null);

                    /** PaidFeature enabled */
                    enabled?: (boolean|null);

                    /** PaidFeature limit */
                    limit?: (number|null);

                    /** PaidFeature expirationTime */
                    expirationTime?: (number|Long|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PaidFeature. */
                type $Shape = SyncAction.SyncActionValue.SubscriptionsSyncV2Action.PaidFeature.$Properties;
            }

            /**
             * Properties of a SubscriptionInfo.
             * @deprecated Use SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Properties instead.
             */
            interface ISubscriptionInfo extends SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Properties {
            }

            /** Represents a SubscriptionInfo. */
            class SubscriptionInfo {

                /**
                 * Constructs a new SubscriptionInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SubscriptionInfo id. */
                id?: (string|null);

                /** SubscriptionInfo tier. */
                tier?: (number|null);

                /** SubscriptionInfo status. */
                status?: (string|null);

                /** SubscriptionInfo startTime. */
                startTime?: (number|Long|null);

                /** SubscriptionInfo endTime. */
                endTime?: (number|Long|null);

                /** SubscriptionInfo isPlatformChanged. */
                isPlatformChanged?: (boolean|null);

                /** SubscriptionInfo source. */
                source?: (string|null);

                /** SubscriptionInfo creationTime. */
                creationTime?: (number|Long|null);

                /**
                 * Creates a new SubscriptionInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SubscriptionInfo instance
                 */
                static create(properties: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Shape): SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Shape;
                static create(properties?: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Properties): SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo;

                /**
                 * Encodes the specified SubscriptionInfo message. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.verify|verify} messages.
                 * @param message SubscriptionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SubscriptionInfo message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.verify|verify} messages.
                 * @param message SubscriptionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SubscriptionInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Shape} SubscriptionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Shape;

                /**
                 * Decodes a SubscriptionInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Shape} SubscriptionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo & SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Shape;

                /**
                 * Verifies a SubscriptionInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SubscriptionInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SubscriptionInfo
                 */
                static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo;

                /**
                 * Creates a plain object from a SubscriptionInfo message. Also converts values to other types if specified.
                 * @param message SubscriptionInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SubscriptionInfo to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for SubscriptionInfo
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SubscriptionInfo {

                /** Properties of a SubscriptionInfo. */
                interface $Properties {

                    /** SubscriptionInfo id */
                    id?: (string|null);

                    /** SubscriptionInfo tier */
                    tier?: (number|null);

                    /** SubscriptionInfo status */
                    status?: (string|null);

                    /** SubscriptionInfo startTime */
                    startTime?: (number|Long|null);

                    /** SubscriptionInfo endTime */
                    endTime?: (number|Long|null);

                    /** SubscriptionInfo isPlatformChanged */
                    isPlatformChanged?: (boolean|null);

                    /** SubscriptionInfo source */
                    source?: (string|null);

                    /** SubscriptionInfo creationTime */
                    creationTime?: (number|Long|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a SubscriptionInfo. */
                type $Shape = SyncAction.SyncActionValue.SubscriptionsSyncV2Action.SubscriptionInfo.$Properties;
            }
        }

        /**
         * Properties of a SyncActionMessage.
         * @deprecated Use SyncAction.SyncActionValue.SyncActionMessage.$Properties instead.
         */
        interface ISyncActionMessage extends SyncAction.SyncActionValue.SyncActionMessage.$Properties {
        }

        /** Represents a SyncActionMessage. */
        class SyncActionMessage {

            /**
             * Constructs a new SyncActionMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.SyncActionMessage.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SyncActionMessage key. */
            key?: (Protocol.MessageKey.$Properties|null);

            /** SyncActionMessage timestamp. */
            timestamp?: (number|Long|null);

            /**
             * Creates a new SyncActionMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SyncActionMessage instance
             */
            static create(properties: SyncAction.SyncActionValue.SyncActionMessage.$Shape): SyncAction.SyncActionValue.SyncActionMessage & SyncAction.SyncActionValue.SyncActionMessage.$Shape;
            static create(properties?: SyncAction.SyncActionValue.SyncActionMessage.$Properties): SyncAction.SyncActionValue.SyncActionMessage;

            /**
             * Encodes the specified SyncActionMessage message. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessage.verify|verify} messages.
             * @param message SyncActionMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.SyncActionMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SyncActionMessage message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessage.verify|verify} messages.
             * @param message SyncActionMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.SyncActionMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SyncActionMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.SyncActionMessage & SyncAction.SyncActionValue.SyncActionMessage.$Shape} SyncActionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SyncActionMessage & SyncAction.SyncActionValue.SyncActionMessage.$Shape;

            /**
             * Decodes a SyncActionMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.SyncActionMessage & SyncAction.SyncActionValue.SyncActionMessage.$Shape} SyncActionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SyncActionMessage & SyncAction.SyncActionValue.SyncActionMessage.$Shape;

            /**
             * Verifies a SyncActionMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SyncActionMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SyncActionMessage
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SyncActionMessage;

            /**
             * Creates a plain object from a SyncActionMessage message. Also converts values to other types if specified.
             * @param message SyncActionMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.SyncActionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SyncActionMessage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SyncActionMessage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SyncActionMessage {

            /** Properties of a SyncActionMessage. */
            interface $Properties {

                /** SyncActionMessage key */
                key?: (Protocol.MessageKey.$Properties|null);

                /** SyncActionMessage timestamp */
                timestamp?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SyncActionMessage. */
            type $Shape = SyncAction.SyncActionValue.SyncActionMessage.$Properties;
        }

        /**
         * Properties of a SyncActionMessageRange.
         * @deprecated Use SyncAction.SyncActionValue.SyncActionMessageRange.$Properties instead.
         */
        interface ISyncActionMessageRange extends SyncAction.SyncActionValue.SyncActionMessageRange.$Properties {
        }

        /** Represents a SyncActionMessageRange. */
        class SyncActionMessageRange {

            /**
             * Constructs a new SyncActionMessageRange.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.SyncActionMessageRange.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SyncActionMessageRange lastMessageTimestamp. */
            lastMessageTimestamp?: (number|Long|null);

            /** SyncActionMessageRange lastSystemMessageTimestamp. */
            lastSystemMessageTimestamp?: (number|Long|null);

            /** SyncActionMessageRange messages. */
            messages: SyncAction.SyncActionValue.SyncActionMessage.$Properties[];

            /**
             * Creates a new SyncActionMessageRange instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SyncActionMessageRange instance
             */
            static create(properties: SyncAction.SyncActionValue.SyncActionMessageRange.$Shape): SyncAction.SyncActionValue.SyncActionMessageRange & SyncAction.SyncActionValue.SyncActionMessageRange.$Shape;
            static create(properties?: SyncAction.SyncActionValue.SyncActionMessageRange.$Properties): SyncAction.SyncActionValue.SyncActionMessageRange;

            /**
             * Encodes the specified SyncActionMessageRange message. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessageRange.verify|verify} messages.
             * @param message SyncActionMessageRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.SyncActionMessageRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SyncActionMessageRange message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessageRange.verify|verify} messages.
             * @param message SyncActionMessageRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.SyncActionMessageRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SyncActionMessageRange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.SyncActionMessageRange & SyncAction.SyncActionValue.SyncActionMessageRange.$Shape} SyncActionMessageRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SyncActionMessageRange & SyncAction.SyncActionValue.SyncActionMessageRange.$Shape;

            /**
             * Decodes a SyncActionMessageRange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.SyncActionMessageRange & SyncAction.SyncActionValue.SyncActionMessageRange.$Shape} SyncActionMessageRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SyncActionMessageRange & SyncAction.SyncActionValue.SyncActionMessageRange.$Shape;

            /**
             * Verifies a SyncActionMessageRange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SyncActionMessageRange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SyncActionMessageRange
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SyncActionMessageRange;

            /**
             * Creates a plain object from a SyncActionMessageRange message. Also converts values to other types if specified.
             * @param message SyncActionMessageRange
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.SyncActionMessageRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SyncActionMessageRange to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SyncActionMessageRange
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SyncActionMessageRange {

            /** Properties of a SyncActionMessageRange. */
            interface $Properties {

                /** SyncActionMessageRange lastMessageTimestamp */
                lastMessageTimestamp?: (number|Long|null);

                /** SyncActionMessageRange lastSystemMessageTimestamp */
                lastSystemMessageTimestamp?: (number|Long|null);

                /** SyncActionMessageRange messages */
                messages?: (SyncAction.SyncActionValue.SyncActionMessage.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SyncActionMessageRange. */
            type $Shape = SyncAction.SyncActionValue.SyncActionMessageRange.$Properties;
        }

        /**
         * Properties of a ThreadPinAction.
         * @deprecated Use SyncAction.SyncActionValue.ThreadPinAction.$Properties instead.
         */
        interface IThreadPinAction extends SyncAction.SyncActionValue.ThreadPinAction.$Properties {
        }

        /** Represents a ThreadPinAction. */
        class ThreadPinAction {

            /**
             * Constructs a new ThreadPinAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.ThreadPinAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ThreadPinAction pinned. */
            pinned?: (boolean|null);

            /**
             * Creates a new ThreadPinAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ThreadPinAction instance
             */
            static create(properties: SyncAction.SyncActionValue.ThreadPinAction.$Shape): SyncAction.SyncActionValue.ThreadPinAction & SyncAction.SyncActionValue.ThreadPinAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.ThreadPinAction.$Properties): SyncAction.SyncActionValue.ThreadPinAction;

            /**
             * Encodes the specified ThreadPinAction message. Does not implicitly {@link SyncAction.SyncActionValue.ThreadPinAction.verify|verify} messages.
             * @param message ThreadPinAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.ThreadPinAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ThreadPinAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ThreadPinAction.verify|verify} messages.
             * @param message ThreadPinAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.ThreadPinAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ThreadPinAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.ThreadPinAction & SyncAction.SyncActionValue.ThreadPinAction.$Shape} ThreadPinAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ThreadPinAction & SyncAction.SyncActionValue.ThreadPinAction.$Shape;

            /**
             * Decodes a ThreadPinAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.ThreadPinAction & SyncAction.SyncActionValue.ThreadPinAction.$Shape} ThreadPinAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ThreadPinAction & SyncAction.SyncActionValue.ThreadPinAction.$Shape;

            /**
             * Verifies a ThreadPinAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ThreadPinAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ThreadPinAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ThreadPinAction;

            /**
             * Creates a plain object from a ThreadPinAction message. Also converts values to other types if specified.
             * @param message ThreadPinAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.ThreadPinAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ThreadPinAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ThreadPinAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ThreadPinAction {

            /** Properties of a ThreadPinAction. */
            interface $Properties {

                /** ThreadPinAction pinned */
                pinned?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ThreadPinAction. */
            type $Shape = SyncAction.SyncActionValue.ThreadPinAction.$Properties;
        }

        /**
         * Properties of a TimeFormatAction.
         * @deprecated Use SyncAction.SyncActionValue.TimeFormatAction.$Properties instead.
         */
        interface ITimeFormatAction extends SyncAction.SyncActionValue.TimeFormatAction.$Properties {
        }

        /** Represents a TimeFormatAction. */
        class TimeFormatAction {

            /**
             * Constructs a new TimeFormatAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.TimeFormatAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** TimeFormatAction isTwentyFourHourFormatEnabled. */
            isTwentyFourHourFormatEnabled?: (boolean|null);

            /**
             * Creates a new TimeFormatAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeFormatAction instance
             */
            static create(properties: SyncAction.SyncActionValue.TimeFormatAction.$Shape): SyncAction.SyncActionValue.TimeFormatAction & SyncAction.SyncActionValue.TimeFormatAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.TimeFormatAction.$Properties): SyncAction.SyncActionValue.TimeFormatAction;

            /**
             * Encodes the specified TimeFormatAction message. Does not implicitly {@link SyncAction.SyncActionValue.TimeFormatAction.verify|verify} messages.
             * @param message TimeFormatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.TimeFormatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeFormatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.TimeFormatAction.verify|verify} messages.
             * @param message TimeFormatAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.TimeFormatAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeFormatAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.TimeFormatAction & SyncAction.SyncActionValue.TimeFormatAction.$Shape} TimeFormatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.TimeFormatAction & SyncAction.SyncActionValue.TimeFormatAction.$Shape;

            /**
             * Decodes a TimeFormatAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.TimeFormatAction & SyncAction.SyncActionValue.TimeFormatAction.$Shape} TimeFormatAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.TimeFormatAction & SyncAction.SyncActionValue.TimeFormatAction.$Shape;

            /**
             * Verifies a TimeFormatAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeFormatAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeFormatAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.TimeFormatAction;

            /**
             * Creates a plain object from a TimeFormatAction message. Also converts values to other types if specified.
             * @param message TimeFormatAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.TimeFormatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeFormatAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for TimeFormatAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace TimeFormatAction {

            /** Properties of a TimeFormatAction. */
            interface $Properties {

                /** TimeFormatAction isTwentyFourHourFormatEnabled */
                isTwentyFourHourFormatEnabled?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a TimeFormatAction. */
            type $Shape = SyncAction.SyncActionValue.TimeFormatAction.$Properties;
        }

        /**
         * Properties of a UGCBot.
         * @deprecated Use SyncAction.SyncActionValue.UGCBot.$Properties instead.
         */
        interface IUGCBot extends SyncAction.SyncActionValue.UGCBot.$Properties {
        }

        /** Represents a UGCBot. */
        class UGCBot {

            /**
             * Constructs a new UGCBot.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.UGCBot.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UGCBot definition. */
            definition?: (Uint8Array|null);

            /**
             * Creates a new UGCBot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UGCBot instance
             */
            static create(properties: SyncAction.SyncActionValue.UGCBot.$Shape): SyncAction.SyncActionValue.UGCBot & SyncAction.SyncActionValue.UGCBot.$Shape;
            static create(properties?: SyncAction.SyncActionValue.UGCBot.$Properties): SyncAction.SyncActionValue.UGCBot;

            /**
             * Encodes the specified UGCBot message. Does not implicitly {@link SyncAction.SyncActionValue.UGCBot.verify|verify} messages.
             * @param message UGCBot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.UGCBot.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UGCBot message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.UGCBot.verify|verify} messages.
             * @param message UGCBot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.UGCBot.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UGCBot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.UGCBot & SyncAction.SyncActionValue.UGCBot.$Shape} UGCBot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.UGCBot & SyncAction.SyncActionValue.UGCBot.$Shape;

            /**
             * Decodes a UGCBot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.UGCBot & SyncAction.SyncActionValue.UGCBot.$Shape} UGCBot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.UGCBot & SyncAction.SyncActionValue.UGCBot.$Shape;

            /**
             * Verifies a UGCBot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UGCBot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UGCBot
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.UGCBot;

            /**
             * Creates a plain object from a UGCBot message. Also converts values to other types if specified.
             * @param message UGCBot
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.UGCBot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UGCBot to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UGCBot
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UGCBot {

            /** Properties of a UGCBot. */
            interface $Properties {

                /** UGCBot definition */
                definition?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a UGCBot. */
            type $Shape = SyncAction.SyncActionValue.UGCBot.$Properties;
        }

        /**
         * Properties of an UnarchiveChatsSetting.
         * @deprecated Use SyncAction.SyncActionValue.UnarchiveChatsSetting.$Properties instead.
         */
        interface IUnarchiveChatsSetting extends SyncAction.SyncActionValue.UnarchiveChatsSetting.$Properties {
        }

        /** Represents an UnarchiveChatsSetting. */
        class UnarchiveChatsSetting {

            /**
             * Constructs a new UnarchiveChatsSetting.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.UnarchiveChatsSetting.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UnarchiveChatsSetting unarchiveChats. */
            unarchiveChats?: (boolean|null);

            /**
             * Creates a new UnarchiveChatsSetting instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UnarchiveChatsSetting instance
             */
            static create(properties: SyncAction.SyncActionValue.UnarchiveChatsSetting.$Shape): SyncAction.SyncActionValue.UnarchiveChatsSetting & SyncAction.SyncActionValue.UnarchiveChatsSetting.$Shape;
            static create(properties?: SyncAction.SyncActionValue.UnarchiveChatsSetting.$Properties): SyncAction.SyncActionValue.UnarchiveChatsSetting;

            /**
             * Encodes the specified UnarchiveChatsSetting message. Does not implicitly {@link SyncAction.SyncActionValue.UnarchiveChatsSetting.verify|verify} messages.
             * @param message UnarchiveChatsSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.UnarchiveChatsSetting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnarchiveChatsSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.UnarchiveChatsSetting.verify|verify} messages.
             * @param message UnarchiveChatsSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.UnarchiveChatsSetting.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnarchiveChatsSetting message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.UnarchiveChatsSetting & SyncAction.SyncActionValue.UnarchiveChatsSetting.$Shape} UnarchiveChatsSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.UnarchiveChatsSetting & SyncAction.SyncActionValue.UnarchiveChatsSetting.$Shape;

            /**
             * Decodes an UnarchiveChatsSetting message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.UnarchiveChatsSetting & SyncAction.SyncActionValue.UnarchiveChatsSetting.$Shape} UnarchiveChatsSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.UnarchiveChatsSetting & SyncAction.SyncActionValue.UnarchiveChatsSetting.$Shape;

            /**
             * Verifies an UnarchiveChatsSetting message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnarchiveChatsSetting message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnarchiveChatsSetting
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.UnarchiveChatsSetting;

            /**
             * Creates a plain object from an UnarchiveChatsSetting message. Also converts values to other types if specified.
             * @param message UnarchiveChatsSetting
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.UnarchiveChatsSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnarchiveChatsSetting to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UnarchiveChatsSetting
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UnarchiveChatsSetting {

            /** Properties of an UnarchiveChatsSetting. */
            interface $Properties {

                /** UnarchiveChatsSetting unarchiveChats */
                unarchiveChats?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an UnarchiveChatsSetting. */
            type $Shape = SyncAction.SyncActionValue.UnarchiveChatsSetting.$Properties;
        }

        /**
         * Properties of a UserStatusMuteAction.
         * @deprecated Use SyncAction.SyncActionValue.UserStatusMuteAction.$Properties instead.
         */
        interface IUserStatusMuteAction extends SyncAction.SyncActionValue.UserStatusMuteAction.$Properties {
        }

        /** Represents a UserStatusMuteAction. */
        class UserStatusMuteAction {

            /**
             * Constructs a new UserStatusMuteAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.UserStatusMuteAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UserStatusMuteAction muted. */
            muted?: (boolean|null);

            /**
             * Creates a new UserStatusMuteAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserStatusMuteAction instance
             */
            static create(properties: SyncAction.SyncActionValue.UserStatusMuteAction.$Shape): SyncAction.SyncActionValue.UserStatusMuteAction & SyncAction.SyncActionValue.UserStatusMuteAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.UserStatusMuteAction.$Properties): SyncAction.SyncActionValue.UserStatusMuteAction;

            /**
             * Encodes the specified UserStatusMuteAction message. Does not implicitly {@link SyncAction.SyncActionValue.UserStatusMuteAction.verify|verify} messages.
             * @param message UserStatusMuteAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.UserStatusMuteAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserStatusMuteAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.UserStatusMuteAction.verify|verify} messages.
             * @param message UserStatusMuteAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.UserStatusMuteAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserStatusMuteAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.UserStatusMuteAction & SyncAction.SyncActionValue.UserStatusMuteAction.$Shape} UserStatusMuteAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.UserStatusMuteAction & SyncAction.SyncActionValue.UserStatusMuteAction.$Shape;

            /**
             * Decodes a UserStatusMuteAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.UserStatusMuteAction & SyncAction.SyncActionValue.UserStatusMuteAction.$Shape} UserStatusMuteAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.UserStatusMuteAction & SyncAction.SyncActionValue.UserStatusMuteAction.$Shape;

            /**
             * Verifies a UserStatusMuteAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserStatusMuteAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserStatusMuteAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.UserStatusMuteAction;

            /**
             * Creates a plain object from a UserStatusMuteAction message. Also converts values to other types if specified.
             * @param message UserStatusMuteAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.UserStatusMuteAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserStatusMuteAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UserStatusMuteAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UserStatusMuteAction {

            /** Properties of a UserStatusMuteAction. */
            interface $Properties {

                /** UserStatusMuteAction muted */
                muted?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a UserStatusMuteAction. */
            type $Shape = SyncAction.SyncActionValue.UserStatusMuteAction.$Properties;
        }

        /**
         * Properties of a UsernameChatStartModeAction.
         * @deprecated Use SyncAction.SyncActionValue.UsernameChatStartModeAction.$Properties instead.
         */
        interface IUsernameChatStartModeAction extends SyncAction.SyncActionValue.UsernameChatStartModeAction.$Properties {
        }

        /** Represents a UsernameChatStartModeAction. */
        class UsernameChatStartModeAction {

            /**
             * Constructs a new UsernameChatStartModeAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.UsernameChatStartModeAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UsernameChatStartModeAction chatStartMode. */
            chatStartMode?: (SyncAction.SyncActionValue.UsernameChatStartModeAction.ChatStartMode|null);

            /**
             * Creates a new UsernameChatStartModeAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UsernameChatStartModeAction instance
             */
            static create(properties: SyncAction.SyncActionValue.UsernameChatStartModeAction.$Shape): SyncAction.SyncActionValue.UsernameChatStartModeAction & SyncAction.SyncActionValue.UsernameChatStartModeAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.UsernameChatStartModeAction.$Properties): SyncAction.SyncActionValue.UsernameChatStartModeAction;

            /**
             * Encodes the specified UsernameChatStartModeAction message. Does not implicitly {@link SyncAction.SyncActionValue.UsernameChatStartModeAction.verify|verify} messages.
             * @param message UsernameChatStartModeAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.UsernameChatStartModeAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UsernameChatStartModeAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.UsernameChatStartModeAction.verify|verify} messages.
             * @param message UsernameChatStartModeAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.UsernameChatStartModeAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UsernameChatStartModeAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.UsernameChatStartModeAction & SyncAction.SyncActionValue.UsernameChatStartModeAction.$Shape} UsernameChatStartModeAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.UsernameChatStartModeAction & SyncAction.SyncActionValue.UsernameChatStartModeAction.$Shape;

            /**
             * Decodes a UsernameChatStartModeAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.UsernameChatStartModeAction & SyncAction.SyncActionValue.UsernameChatStartModeAction.$Shape} UsernameChatStartModeAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.UsernameChatStartModeAction & SyncAction.SyncActionValue.UsernameChatStartModeAction.$Shape;

            /**
             * Verifies a UsernameChatStartModeAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UsernameChatStartModeAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UsernameChatStartModeAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.UsernameChatStartModeAction;

            /**
             * Creates a plain object from a UsernameChatStartModeAction message. Also converts values to other types if specified.
             * @param message UsernameChatStartModeAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.UsernameChatStartModeAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UsernameChatStartModeAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UsernameChatStartModeAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UsernameChatStartModeAction {

            /** Properties of a UsernameChatStartModeAction. */
            interface $Properties {

                /** UsernameChatStartModeAction chatStartMode */
                chatStartMode?: (SyncAction.SyncActionValue.UsernameChatStartModeAction.ChatStartMode|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a UsernameChatStartModeAction. */
            type $Shape = SyncAction.SyncActionValue.UsernameChatStartModeAction.$Properties;

            /** ChatStartMode enum. */
            enum ChatStartMode {

                /** LID value */
                LID = 1,

                /** PN value */
                PN = 2
            }
        }

        /**
         * Properties of a WASARootSecretAction.
         * @deprecated Use SyncAction.SyncActionValue.WASARootSecretAction.$Properties instead.
         */
        interface IWASARootSecretAction extends SyncAction.SyncActionValue.WASARootSecretAction.$Properties {
        }

        /** Represents a WASARootSecretAction. */
        class WASARootSecretAction {

            /**
             * Constructs a new WASARootSecretAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.WASARootSecretAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WASARootSecretAction secrets. */
            secrets: SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Properties[];

            /**
             * Creates a new WASARootSecretAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WASARootSecretAction instance
             */
            static create(properties: SyncAction.SyncActionValue.WASARootSecretAction.$Shape): SyncAction.SyncActionValue.WASARootSecretAction & SyncAction.SyncActionValue.WASARootSecretAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.WASARootSecretAction.$Properties): SyncAction.SyncActionValue.WASARootSecretAction;

            /**
             * Encodes the specified WASARootSecretAction message. Does not implicitly {@link SyncAction.SyncActionValue.WASARootSecretAction.verify|verify} messages.
             * @param message WASARootSecretAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.WASARootSecretAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WASARootSecretAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.WASARootSecretAction.verify|verify} messages.
             * @param message WASARootSecretAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.WASARootSecretAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WASARootSecretAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.WASARootSecretAction & SyncAction.SyncActionValue.WASARootSecretAction.$Shape} WASARootSecretAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.WASARootSecretAction & SyncAction.SyncActionValue.WASARootSecretAction.$Shape;

            /**
             * Decodes a WASARootSecretAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.WASARootSecretAction & SyncAction.SyncActionValue.WASARootSecretAction.$Shape} WASARootSecretAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.WASARootSecretAction & SyncAction.SyncActionValue.WASARootSecretAction.$Shape;

            /**
             * Verifies a WASARootSecretAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WASARootSecretAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WASARootSecretAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.WASARootSecretAction;

            /**
             * Creates a plain object from a WASARootSecretAction message. Also converts values to other types if specified.
             * @param message WASARootSecretAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.WASARootSecretAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WASARootSecretAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WASARootSecretAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WASARootSecretAction {

            /** Properties of a WASARootSecretAction. */
            interface $Properties {

                /** WASARootSecretAction secrets */
                secrets?: (SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WASARootSecretAction. */
            type $Shape = SyncAction.SyncActionValue.WASARootSecretAction.$Properties;

            /**
             * Properties of a RootSecretEntry.
             * @deprecated Use SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Properties instead.
             */
            interface IRootSecretEntry extends SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Properties {
            }

            /** Represents a RootSecretEntry. */
            class RootSecretEntry {

                /**
                 * Constructs a new RootSecretEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** RootSecretEntry id. */
                id?: (string|null);

                /** RootSecretEntry rootSecret. */
                rootSecret?: (Uint8Array|null);

                /** RootSecretEntry epoch. */
                epoch?: (number|Long|null);

                /** RootSecretEntry status. */
                status?: (SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.Status|null);

                /**
                 * Creates a new RootSecretEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RootSecretEntry instance
                 */
                static create(properties: SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Shape): SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry & SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Shape;
                static create(properties?: SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Properties): SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry;

                /**
                 * Encodes the specified RootSecretEntry message. Does not implicitly {@link SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.verify|verify} messages.
                 * @param message RootSecretEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RootSecretEntry message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.verify|verify} messages.
                 * @param message RootSecretEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RootSecretEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry & SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Shape} RootSecretEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry & SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Shape;

                /**
                 * Decodes a RootSecretEntry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry & SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Shape} RootSecretEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry & SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Shape;

                /**
                 * Verifies a RootSecretEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RootSecretEntry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RootSecretEntry
                 */
                static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry;

                /**
                 * Creates a plain object from a RootSecretEntry message. Also converts values to other types if specified.
                 * @param message RootSecretEntry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RootSecretEntry to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for RootSecretEntry
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace RootSecretEntry {

                /** Properties of a RootSecretEntry. */
                interface $Properties {

                    /** RootSecretEntry id */
                    id?: (string|null);

                    /** RootSecretEntry rootSecret */
                    rootSecret?: (Uint8Array|null);

                    /** RootSecretEntry epoch */
                    epoch?: (number|Long|null);

                    /** RootSecretEntry status */
                    status?: (SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.Status|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a RootSecretEntry. */
                type $Shape = SyncAction.SyncActionValue.WASARootSecretAction.RootSecretEntry.$Properties;

                /** Status enum. */
                enum Status {

                    /** INACTIVE value */
                    INACTIVE = 0,

                    /** ACTIVE value */
                    ACTIVE = 1
                }
            }
        }

        /**
         * Properties of a WaffleAccountLinkStateAction.
         * @deprecated Use SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Properties instead.
         */
        interface IWaffleAccountLinkStateAction extends SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Properties {
        }

        /** Represents a WaffleAccountLinkStateAction. */
        class WaffleAccountLinkStateAction {

            /**
             * Constructs a new WaffleAccountLinkStateAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WaffleAccountLinkStateAction linkState. */
            linkState?: (SyncAction.SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState|null);

            /**
             * Creates a new WaffleAccountLinkStateAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaffleAccountLinkStateAction instance
             */
            static create(properties: SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Shape): SyncAction.SyncActionValue.WaffleAccountLinkStateAction & SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Properties): SyncAction.SyncActionValue.WaffleAccountLinkStateAction;

            /**
             * Encodes the specified WaffleAccountLinkStateAction message. Does not implicitly {@link SyncAction.SyncActionValue.WaffleAccountLinkStateAction.verify|verify} messages.
             * @param message WaffleAccountLinkStateAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaffleAccountLinkStateAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.WaffleAccountLinkStateAction.verify|verify} messages.
             * @param message WaffleAccountLinkStateAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaffleAccountLinkStateAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.WaffleAccountLinkStateAction & SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Shape} WaffleAccountLinkStateAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.WaffleAccountLinkStateAction & SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Shape;

            /**
             * Decodes a WaffleAccountLinkStateAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.WaffleAccountLinkStateAction & SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Shape} WaffleAccountLinkStateAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.WaffleAccountLinkStateAction & SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Shape;

            /**
             * Verifies a WaffleAccountLinkStateAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaffleAccountLinkStateAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaffleAccountLinkStateAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.WaffleAccountLinkStateAction;

            /**
             * Creates a plain object from a WaffleAccountLinkStateAction message. Also converts values to other types if specified.
             * @param message WaffleAccountLinkStateAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.WaffleAccountLinkStateAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaffleAccountLinkStateAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WaffleAccountLinkStateAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WaffleAccountLinkStateAction {

            /** Properties of a WaffleAccountLinkStateAction. */
            interface $Properties {

                /** WaffleAccountLinkStateAction linkState */
                linkState?: (SyncAction.SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WaffleAccountLinkStateAction. */
            type $Shape = SyncAction.SyncActionValue.WaffleAccountLinkStateAction.$Properties;

            /** AccountLinkState enum. */
            enum AccountLinkState {

                /** ACTIVE value */
                ACTIVE = 0,

                /** PAUSED value */
                PAUSED = 1,

                /** UNLINKED value */
                UNLINKED = 2
            }
        }

        /**
         * Properties of a WamoUserIdentifierAction.
         * @deprecated Use SyncAction.SyncActionValue.WamoUserIdentifierAction.$Properties instead.
         */
        interface IWamoUserIdentifierAction extends SyncAction.SyncActionValue.WamoUserIdentifierAction.$Properties {
        }

        /** Represents a WamoUserIdentifierAction. */
        class WamoUserIdentifierAction {

            /**
             * Constructs a new WamoUserIdentifierAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.SyncActionValue.WamoUserIdentifierAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WamoUserIdentifierAction identifier. */
            identifier?: (string|null);

            /**
             * Creates a new WamoUserIdentifierAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WamoUserIdentifierAction instance
             */
            static create(properties: SyncAction.SyncActionValue.WamoUserIdentifierAction.$Shape): SyncAction.SyncActionValue.WamoUserIdentifierAction & SyncAction.SyncActionValue.WamoUserIdentifierAction.$Shape;
            static create(properties?: SyncAction.SyncActionValue.WamoUserIdentifierAction.$Properties): SyncAction.SyncActionValue.WamoUserIdentifierAction;

            /**
             * Encodes the specified WamoUserIdentifierAction message. Does not implicitly {@link SyncAction.SyncActionValue.WamoUserIdentifierAction.verify|verify} messages.
             * @param message WamoUserIdentifierAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.SyncActionValue.WamoUserIdentifierAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WamoUserIdentifierAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.WamoUserIdentifierAction.verify|verify} messages.
             * @param message WamoUserIdentifierAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.SyncActionValue.WamoUserIdentifierAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WamoUserIdentifierAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.SyncActionValue.WamoUserIdentifierAction & SyncAction.SyncActionValue.WamoUserIdentifierAction.$Shape} WamoUserIdentifierAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.WamoUserIdentifierAction & SyncAction.SyncActionValue.WamoUserIdentifierAction.$Shape;

            /**
             * Decodes a WamoUserIdentifierAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.SyncActionValue.WamoUserIdentifierAction & SyncAction.SyncActionValue.WamoUserIdentifierAction.$Shape} WamoUserIdentifierAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.WamoUserIdentifierAction & SyncAction.SyncActionValue.WamoUserIdentifierAction.$Shape;

            /**
             * Verifies a WamoUserIdentifierAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WamoUserIdentifierAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WamoUserIdentifierAction
             */
            static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.WamoUserIdentifierAction;

            /**
             * Creates a plain object from a WamoUserIdentifierAction message. Also converts values to other types if specified.
             * @param message WamoUserIdentifierAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.SyncActionValue.WamoUserIdentifierAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WamoUserIdentifierAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WamoUserIdentifierAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WamoUserIdentifierAction {

            /** Properties of a WamoUserIdentifierAction. */
            interface $Properties {

                /** WamoUserIdentifierAction identifier */
                identifier?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WamoUserIdentifierAction. */
            type $Shape = SyncAction.SyncActionValue.WamoUserIdentifierAction.$Properties;
        }
    }

    /**
     * Properties of a CallLogRecord.
     * @deprecated Use SyncAction.CallLogRecord.$Properties instead.
     */
    interface ICallLogRecord extends SyncAction.CallLogRecord.$Properties {
    }

    /** Represents a CallLogRecord. */
    class CallLogRecord {

        /**
         * Constructs a new CallLogRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: SyncAction.CallLogRecord.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CallLogRecord callResult. */
        callResult?: (SyncAction.CallLogRecord.CallResult|null);

        /** CallLogRecord isDndMode. */
        isDndMode?: (boolean|null);

        /** CallLogRecord silenceReason. */
        silenceReason?: (SyncAction.CallLogRecord.SilenceReason|null);

        /** CallLogRecord duration. */
        duration?: (number|Long|null);

        /** CallLogRecord startTime. */
        startTime?: (number|Long|null);

        /** CallLogRecord isIncoming. */
        isIncoming?: (boolean|null);

        /** CallLogRecord isVideo. */
        isVideo?: (boolean|null);

        /** CallLogRecord isCallLink. */
        isCallLink?: (boolean|null);

        /** CallLogRecord callLinkToken. */
        callLinkToken?: (string|null);

        /** CallLogRecord scheduledCallId. */
        scheduledCallId?: (string|null);

        /** CallLogRecord callId. */
        callId?: (string|null);

        /** CallLogRecord callCreatorJid. */
        callCreatorJid?: (string|null);

        /** CallLogRecord groupJid. */
        groupJid?: (string|null);

        /** CallLogRecord participants. */
        participants: SyncAction.CallLogRecord.ParticipantInfo.$Properties[];

        /** CallLogRecord callType. */
        callType?: (SyncAction.CallLogRecord.CallType|null);

        /**
         * Creates a new CallLogRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CallLogRecord instance
         */
        static create(properties: SyncAction.CallLogRecord.$Shape): SyncAction.CallLogRecord & SyncAction.CallLogRecord.$Shape;
        static create(properties?: SyncAction.CallLogRecord.$Properties): SyncAction.CallLogRecord;

        /**
         * Encodes the specified CallLogRecord message. Does not implicitly {@link SyncAction.CallLogRecord.verify|verify} messages.
         * @param message CallLogRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SyncAction.CallLogRecord.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CallLogRecord message, length delimited. Does not implicitly {@link SyncAction.CallLogRecord.verify|verify} messages.
         * @param message CallLogRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SyncAction.CallLogRecord.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CallLogRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SyncAction.CallLogRecord & SyncAction.CallLogRecord.$Shape} CallLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.CallLogRecord & SyncAction.CallLogRecord.$Shape;

        /**
         * Decodes a CallLogRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SyncAction.CallLogRecord & SyncAction.CallLogRecord.$Shape} CallLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.CallLogRecord & SyncAction.CallLogRecord.$Shape;

        /**
         * Verifies a CallLogRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CallLogRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CallLogRecord
         */
        static fromObject(object: { [k: string]: any }): SyncAction.CallLogRecord;

        /**
         * Creates a plain object from a CallLogRecord message. Also converts values to other types if specified.
         * @param message CallLogRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SyncAction.CallLogRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CallLogRecord to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CallLogRecord
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CallLogRecord {

        /** Properties of a CallLogRecord. */
        interface $Properties {

            /** CallLogRecord callResult */
            callResult?: (SyncAction.CallLogRecord.CallResult|null);

            /** CallLogRecord isDndMode */
            isDndMode?: (boolean|null);

            /** CallLogRecord silenceReason */
            silenceReason?: (SyncAction.CallLogRecord.SilenceReason|null);

            /** CallLogRecord duration */
            duration?: (number|Long|null);

            /** CallLogRecord startTime */
            startTime?: (number|Long|null);

            /** CallLogRecord isIncoming */
            isIncoming?: (boolean|null);

            /** CallLogRecord isVideo */
            isVideo?: (boolean|null);

            /** CallLogRecord isCallLink */
            isCallLink?: (boolean|null);

            /** CallLogRecord callLinkToken */
            callLinkToken?: (string|null);

            /** CallLogRecord scheduledCallId */
            scheduledCallId?: (string|null);

            /** CallLogRecord callId */
            callId?: (string|null);

            /** CallLogRecord callCreatorJid */
            callCreatorJid?: (string|null);

            /** CallLogRecord groupJid */
            groupJid?: (string|null);

            /** CallLogRecord participants */
            participants?: (SyncAction.CallLogRecord.ParticipantInfo.$Properties[]|null);

            /** CallLogRecord callType */
            callType?: (SyncAction.CallLogRecord.CallType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CallLogRecord. */
        type $Shape = SyncAction.CallLogRecord.$Properties;

        /** CallResult enum. */
        enum CallResult {

            /** CONNECTED value */
            CONNECTED = 0,

            /** REJECTED value */
            REJECTED = 1,

            /** CANCELLED value */
            CANCELLED = 2,

            /** ACCEPTEDELSEWHERE value */
            ACCEPTEDELSEWHERE = 3,

            /** MISSED value */
            MISSED = 4,

            /** INVALID value */
            INVALID = 5,

            /** UNAVAILABLE value */
            UNAVAILABLE = 6,

            /** UPCOMING value */
            UPCOMING = 7,

            /** FAILED value */
            FAILED = 8,

            /** ABANDONED value */
            ABANDONED = 9,

            /** ONGOING value */
            ONGOING = 10
        }

        /** CallType enum. */
        enum CallType {

            /** REGULAR value */
            REGULAR = 0,

            /** SCHEDULED_CALL value */
            SCHEDULED_CALL = 1,

            /** VOICE_CHAT value */
            VOICE_CHAT = 2
        }

        /**
         * Properties of a GuestInfo.
         * @deprecated Use SyncAction.CallLogRecord.GuestInfo.$Properties instead.
         */
        interface IGuestInfo extends SyncAction.CallLogRecord.GuestInfo.$Properties {
        }

        /** Represents a GuestInfo. */
        class GuestInfo {

            /**
             * Constructs a new GuestInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.CallLogRecord.GuestInfo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GuestInfo pushName. */
            pushName?: (string|null);

            /**
             * Creates a new GuestInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GuestInfo instance
             */
            static create(properties: SyncAction.CallLogRecord.GuestInfo.$Shape): SyncAction.CallLogRecord.GuestInfo & SyncAction.CallLogRecord.GuestInfo.$Shape;
            static create(properties?: SyncAction.CallLogRecord.GuestInfo.$Properties): SyncAction.CallLogRecord.GuestInfo;

            /**
             * Encodes the specified GuestInfo message. Does not implicitly {@link SyncAction.CallLogRecord.GuestInfo.verify|verify} messages.
             * @param message GuestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.CallLogRecord.GuestInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GuestInfo message, length delimited. Does not implicitly {@link SyncAction.CallLogRecord.GuestInfo.verify|verify} messages.
             * @param message GuestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.CallLogRecord.GuestInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GuestInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.CallLogRecord.GuestInfo & SyncAction.CallLogRecord.GuestInfo.$Shape} GuestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.CallLogRecord.GuestInfo & SyncAction.CallLogRecord.GuestInfo.$Shape;

            /**
             * Decodes a GuestInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.CallLogRecord.GuestInfo & SyncAction.CallLogRecord.GuestInfo.$Shape} GuestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.CallLogRecord.GuestInfo & SyncAction.CallLogRecord.GuestInfo.$Shape;

            /**
             * Verifies a GuestInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GuestInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GuestInfo
             */
            static fromObject(object: { [k: string]: any }): SyncAction.CallLogRecord.GuestInfo;

            /**
             * Creates a plain object from a GuestInfo message. Also converts values to other types if specified.
             * @param message GuestInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.CallLogRecord.GuestInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GuestInfo to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GuestInfo
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GuestInfo {

            /** Properties of a GuestInfo. */
            interface $Properties {

                /** GuestInfo pushName */
                pushName?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GuestInfo. */
            type $Shape = SyncAction.CallLogRecord.GuestInfo.$Properties;
        }

        /**
         * Properties of a ParticipantInfo.
         * @deprecated Use SyncAction.CallLogRecord.ParticipantInfo.$Properties instead.
         */
        interface IParticipantInfo extends SyncAction.CallLogRecord.ParticipantInfo.$Properties {
        }

        /** Represents a ParticipantInfo. */
        class ParticipantInfo {

            /**
             * Constructs a new ParticipantInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: SyncAction.CallLogRecord.ParticipantInfo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ParticipantInfo userJid. */
            userJid?: (string|null);

            /** ParticipantInfo callResult. */
            callResult?: (SyncAction.CallLogRecord.CallResult|null);

            /** ParticipantInfo guestInfo. */
            guestInfo?: (SyncAction.CallLogRecord.GuestInfo.$Properties|null);

            /**
             * Creates a new ParticipantInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ParticipantInfo instance
             */
            static create(properties: SyncAction.CallLogRecord.ParticipantInfo.$Shape): SyncAction.CallLogRecord.ParticipantInfo & SyncAction.CallLogRecord.ParticipantInfo.$Shape;
            static create(properties?: SyncAction.CallLogRecord.ParticipantInfo.$Properties): SyncAction.CallLogRecord.ParticipantInfo;

            /**
             * Encodes the specified ParticipantInfo message. Does not implicitly {@link SyncAction.CallLogRecord.ParticipantInfo.verify|verify} messages.
             * @param message ParticipantInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: SyncAction.CallLogRecord.ParticipantInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ParticipantInfo message, length delimited. Does not implicitly {@link SyncAction.CallLogRecord.ParticipantInfo.verify|verify} messages.
             * @param message ParticipantInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: SyncAction.CallLogRecord.ParticipantInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParticipantInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {SyncAction.CallLogRecord.ParticipantInfo & SyncAction.CallLogRecord.ParticipantInfo.$Shape} ParticipantInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.CallLogRecord.ParticipantInfo & SyncAction.CallLogRecord.ParticipantInfo.$Shape;

            /**
             * Decodes a ParticipantInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {SyncAction.CallLogRecord.ParticipantInfo & SyncAction.CallLogRecord.ParticipantInfo.$Shape} ParticipantInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.CallLogRecord.ParticipantInfo & SyncAction.CallLogRecord.ParticipantInfo.$Shape;

            /**
             * Verifies a ParticipantInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ParticipantInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ParticipantInfo
             */
            static fromObject(object: { [k: string]: any }): SyncAction.CallLogRecord.ParticipantInfo;

            /**
             * Creates a plain object from a ParticipantInfo message. Also converts values to other types if specified.
             * @param message ParticipantInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: SyncAction.CallLogRecord.ParticipantInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ParticipantInfo to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ParticipantInfo
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ParticipantInfo {

            /** Properties of a ParticipantInfo. */
            interface $Properties {

                /** ParticipantInfo userJid */
                userJid?: (string|null);

                /** ParticipantInfo callResult */
                callResult?: (SyncAction.CallLogRecord.CallResult|null);

                /** ParticipantInfo guestInfo */
                guestInfo?: (SyncAction.CallLogRecord.GuestInfo.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ParticipantInfo. */
            type $Shape = SyncAction.CallLogRecord.ParticipantInfo.$Properties;
        }

        /** SilenceReason enum. */
        enum SilenceReason {

            /** NONE value */
            NONE = 0,

            /** SCHEDULED value */
            SCHEDULED = 1,

            /** PRIVACY value */
            PRIVACY = 2,

            /** LIGHTWEIGHT value */
            LIGHTWEIGHT = 3
        }
    }

    /**
     * Properties of a RecentEmojiWeight.
     * @deprecated Use SyncAction.RecentEmojiWeight.$Properties instead.
     */
    interface IRecentEmojiWeight extends SyncAction.RecentEmojiWeight.$Properties {
    }

    /** Represents a RecentEmojiWeight. */
    class RecentEmojiWeight {

        /**
         * Constructs a new RecentEmojiWeight.
         * @param [properties] Properties to set
         */
        constructor(properties?: SyncAction.RecentEmojiWeight.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RecentEmojiWeight emoji. */
        emoji?: (string|null);

        /** RecentEmojiWeight weight. */
        weight?: (number|null);

        /**
         * Creates a new RecentEmojiWeight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecentEmojiWeight instance
         */
        static create(properties: SyncAction.RecentEmojiWeight.$Shape): SyncAction.RecentEmojiWeight & SyncAction.RecentEmojiWeight.$Shape;
        static create(properties?: SyncAction.RecentEmojiWeight.$Properties): SyncAction.RecentEmojiWeight;

        /**
         * Encodes the specified RecentEmojiWeight message. Does not implicitly {@link SyncAction.RecentEmojiWeight.verify|verify} messages.
         * @param message RecentEmojiWeight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: SyncAction.RecentEmojiWeight.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecentEmojiWeight message, length delimited. Does not implicitly {@link SyncAction.RecentEmojiWeight.verify|verify} messages.
         * @param message RecentEmojiWeight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: SyncAction.RecentEmojiWeight.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecentEmojiWeight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {SyncAction.RecentEmojiWeight & SyncAction.RecentEmojiWeight.$Shape} RecentEmojiWeight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.RecentEmojiWeight & SyncAction.RecentEmojiWeight.$Shape;

        /**
         * Decodes a RecentEmojiWeight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {SyncAction.RecentEmojiWeight & SyncAction.RecentEmojiWeight.$Shape} RecentEmojiWeight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.RecentEmojiWeight & SyncAction.RecentEmojiWeight.$Shape;

        /**
         * Verifies a RecentEmojiWeight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecentEmojiWeight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecentEmojiWeight
         */
        static fromObject(object: { [k: string]: any }): SyncAction.RecentEmojiWeight;

        /**
         * Creates a plain object from a RecentEmojiWeight message. Also converts values to other types if specified.
         * @param message RecentEmojiWeight
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: SyncAction.RecentEmojiWeight, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecentEmojiWeight to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RecentEmojiWeight
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RecentEmojiWeight {

        /** Properties of a RecentEmojiWeight. */
        interface $Properties {

            /** RecentEmojiWeight emoji */
            emoji?: (string|null);

            /** RecentEmojiWeight weight */
            weight?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RecentEmojiWeight. */
        type $Shape = SyncAction.RecentEmojiWeight.$Properties;
    }

    /** MutationProps enum. */
    enum MutationProps {

        /** STAR_ACTION value */
        STAR_ACTION = 2,

        /** CONTACT_ACTION value */
        CONTACT_ACTION = 3,

        /** MUTE_ACTION value */
        MUTE_ACTION = 4,

        /** PIN_ACTION value */
        PIN_ACTION = 5,

        /** SECURITY_NOTIFICATION_SETTING value */
        SECURITY_NOTIFICATION_SETTING = 6,

        /** PUSH_NAME_SETTING value */
        PUSH_NAME_SETTING = 7,

        /** QUICK_REPLY_ACTION value */
        QUICK_REPLY_ACTION = 8,

        /** RECENT_EMOJI_WEIGHTS_ACTION value */
        RECENT_EMOJI_WEIGHTS_ACTION = 11,

        /** LABEL_MESSAGE_ACTION value */
        LABEL_MESSAGE_ACTION = 13,

        /** LABEL_EDIT_ACTION value */
        LABEL_EDIT_ACTION = 14,

        /** LABEL_ASSOCIATION_ACTION value */
        LABEL_ASSOCIATION_ACTION = 15,

        /** LOCALE_SETTING value */
        LOCALE_SETTING = 16,

        /** ARCHIVE_CHAT_ACTION value */
        ARCHIVE_CHAT_ACTION = 17,

        /** DELETE_MESSAGE_FOR_ME_ACTION value */
        DELETE_MESSAGE_FOR_ME_ACTION = 18,

        /** KEY_EXPIRATION value */
        KEY_EXPIRATION = 19,

        /** MARK_CHAT_AS_READ_ACTION value */
        MARK_CHAT_AS_READ_ACTION = 20,

        /** CLEAR_CHAT_ACTION value */
        CLEAR_CHAT_ACTION = 21,

        /** DELETE_CHAT_ACTION value */
        DELETE_CHAT_ACTION = 22,

        /** UNARCHIVE_CHATS_SETTING value */
        UNARCHIVE_CHATS_SETTING = 23,

        /** PRIMARY_FEATURE value */
        PRIMARY_FEATURE = 24,

        /** ANDROID_UNSUPPORTED_ACTIONS value */
        ANDROID_UNSUPPORTED_ACTIONS = 26,

        /** AGENT_ACTION value */
        AGENT_ACTION = 27,

        /** SUBSCRIPTION_ACTION value */
        SUBSCRIPTION_ACTION = 28,

        /** USER_STATUS_MUTE_ACTION value */
        USER_STATUS_MUTE_ACTION = 29,

        /** TIME_FORMAT_ACTION value */
        TIME_FORMAT_ACTION = 30,

        /** NUX_ACTION value */
        NUX_ACTION = 31,

        /** PRIMARY_VERSION_ACTION value */
        PRIMARY_VERSION_ACTION = 32,

        /** STICKER_ACTION value */
        STICKER_ACTION = 33,

        /** REMOVE_RECENT_STICKER_ACTION value */
        REMOVE_RECENT_STICKER_ACTION = 34,

        /** CHAT_ASSIGNMENT value */
        CHAT_ASSIGNMENT = 35,

        /** CHAT_ASSIGNMENT_OPENED_STATUS value */
        CHAT_ASSIGNMENT_OPENED_STATUS = 36,

        /** PN_FOR_LID_CHAT_ACTION value */
        PN_FOR_LID_CHAT_ACTION = 37,

        /** MARKETING_MESSAGE_ACTION value */
        MARKETING_MESSAGE_ACTION = 38,

        /** MARKETING_MESSAGE_BROADCAST_ACTION value */
        MARKETING_MESSAGE_BROADCAST_ACTION = 39,

        /** EXTERNAL_WEB_BETA_ACTION value */
        EXTERNAL_WEB_BETA_ACTION = 40,

        /** PRIVACY_SETTING_RELAY_ALL_CALLS value */
        PRIVACY_SETTING_RELAY_ALL_CALLS = 41,

        /** CALL_LOG_ACTION value */
        CALL_LOG_ACTION = 42,

        /** UGC_BOT value */
        UGC_BOT = 43,

        /** STATUS_PRIVACY value */
        STATUS_PRIVACY = 44,

        /** BOT_WELCOME_REQUEST_ACTION value */
        BOT_WELCOME_REQUEST_ACTION = 45,

        /** DELETE_INDIVIDUAL_CALL_LOG value */
        DELETE_INDIVIDUAL_CALL_LOG = 46,

        /** LABEL_REORDERING_ACTION value */
        LABEL_REORDERING_ACTION = 47,

        /** PAYMENT_INFO_ACTION value */
        PAYMENT_INFO_ACTION = 48,

        /** CUSTOM_PAYMENT_METHODS_ACTION value */
        CUSTOM_PAYMENT_METHODS_ACTION = 49,

        /** LOCK_CHAT_ACTION value */
        LOCK_CHAT_ACTION = 50,

        /** CHAT_LOCK_SETTINGS value */
        CHAT_LOCK_SETTINGS = 51,

        /** WAMO_USER_IDENTIFIER_ACTION value */
        WAMO_USER_IDENTIFIER_ACTION = 52,

        /** PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION value */
        PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION = 53,

        /** DEVICE_CAPABILITIES value */
        DEVICE_CAPABILITIES = 54,

        /** NOTE_EDIT_ACTION value */
        NOTE_EDIT_ACTION = 55,

        /** FAVORITES_ACTION value */
        FAVORITES_ACTION = 56,

        /** MERCHANT_PAYMENT_PARTNER_ACTION value */
        MERCHANT_PAYMENT_PARTNER_ACTION = 57,

        /** WAFFLE_ACCOUNT_LINK_STATE_ACTION value */
        WAFFLE_ACCOUNT_LINK_STATE_ACTION = 58,

        /** USERNAME_CHAT_START_MODE value */
        USERNAME_CHAT_START_MODE = 59,

        /** NOTIFICATION_ACTIVITY_SETTING_ACTION value */
        NOTIFICATION_ACTIVITY_SETTING_ACTION = 60,

        /** LID_CONTACT_ACTION value */
        LID_CONTACT_ACTION = 61,

        /** CTWA_PER_CUSTOMER_DATA_SHARING_ACTION value */
        CTWA_PER_CUSTOMER_DATA_SHARING_ACTION = 62,

        /** PAYMENT_TOS_ACTION value */
        PAYMENT_TOS_ACTION = 63,

        /** PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION value */
        PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION = 64,

        /** BUSINESS_BROADCAST_ASSOCIATION_ACTION value */
        BUSINESS_BROADCAST_ASSOCIATION_ACTION = 65,

        /** DETECTED_OUTCOMES_STATUS_ACTION value */
        DETECTED_OUTCOMES_STATUS_ACTION = 66,

        /** MAIBA_AI_FEATURES_CONTROL_ACTION value */
        MAIBA_AI_FEATURES_CONTROL_ACTION = 68,

        /** BUSINESS_BROADCAST_LIST_ACTION value */
        BUSINESS_BROADCAST_LIST_ACTION = 69,

        /** MUSIC_USER_ID_ACTION value */
        MUSIC_USER_ID_ACTION = 70,

        /** STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION value */
        STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION = 71,

        /** AVATAR_UPDATED_ACTION value */
        AVATAR_UPDATED_ACTION = 72,

        /** GALAXY_FLOW_ACTION value */
        GALAXY_FLOW_ACTION = 73,

        /** PRIVATE_PROCESSING_SETTING_ACTION value */
        PRIVATE_PROCESSING_SETTING_ACTION = 74,

        /** NEWSLETTER_SAVED_INTERESTS_ACTION value */
        NEWSLETTER_SAVED_INTERESTS_ACTION = 75,

        /** AI_THREAD_RENAME_ACTION value */
        AI_THREAD_RENAME_ACTION = 76,

        /** INTERACTIVE_MESSAGE_ACTION value */
        INTERACTIVE_MESSAGE_ACTION = 77,

        /** SETTINGS_SYNC_ACTION value */
        SETTINGS_SYNC_ACTION = 78,

        /** OUT_CONTACT_ACTION value */
        OUT_CONTACT_ACTION = 79,

        /** NCT_SALT_SYNC_ACTION value */
        NCT_SALT_SYNC_ACTION = 80,

        /** BUSINESS_BROADCAST_CAMPAIGN_ACTION value */
        BUSINESS_BROADCAST_CAMPAIGN_ACTION = 81,

        /** BUSINESS_BROADCAST_INSIGHTS_ACTION value */
        BUSINESS_BROADCAST_INSIGHTS_ACTION = 82,

        /** CUSTOMER_DATA_ACTION value */
        CUSTOMER_DATA_ACTION = 83,

        /** SUBSCRIPTIONS_SYNC_V2_ACTION value */
        SUBSCRIPTIONS_SYNC_V2_ACTION = 84,

        /** THREAD_PIN_ACTION value */
        THREAD_PIN_ACTION = 85,

        /** AUTO_ORGANIZE_BUSINESS_CHAT_SETTING value */
        AUTO_ORGANIZE_BUSINESS_CHAT_SETTING = 86,

        /** BIZ_AI_SETTINGS_NUDGE_ACTION value */
        BIZ_AI_SETTINGS_NUDGE_ACTION = 87,

        /** COEX_V2_VERSION_ACTION value */
        COEX_V2_VERSION_ACTION = 88,

        /** WASA_ROOT_SECRET_ACTION value */
        WASA_ROOT_SECRET_ACTION = 89,

        /** BUBBLE_LOCK_MESSAGE_ACTION value */
        BUBBLE_LOCK_MESSAGE_ACTION = 90,

        /** LABEL_SUBLIST_ACTION value */
        LABEL_SUBLIST_ACTION = 91,

        /** DEVICE_CAPABILITIES_V2 value */
        DEVICE_CAPABILITIES_V2 = 92,

        /** CTWA_MESSAGE_RECEIVED_ACTION value */
        CTWA_MESSAGE_RECEIVED_ACTION = 93,

        /** SHARED_DEVICE_ALLOWLIST_ACTION value */
        SHARED_DEVICE_ALLOWLIST_ACTION = 94,

        /** CONTACT_MANAGER_METADATA_ACTION value */
        CONTACT_MANAGER_METADATA_ACTION = 95,

        /** BUSINESS_FOLDER_ACTIVATION_ACTION value */
        BUSINESS_FOLDER_ACTIVATION_ACTION = 96,

        /** GROUP_HISTORY_TOGGLE_ACTION value */
        GROUP_HISTORY_TOGGLE_ACTION = 97,

        /** BB_PRO_PENDING_CUSTOMER_BASE_ACTION value */
        BB_PRO_PENDING_CUSTOMER_BASE_ACTION = 98,

        /** COMMUNITY_NESTING_STATE_ACTION value */
        COMMUNITY_NESTING_STATE_ACTION = 99,

        /** SHARED_DEVICE_SECRET_ACTION value */
        SHARED_DEVICE_SECRET_ACTION = 100,

        /** HATCH_CVM_SECRET_ACTION value */
        HATCH_CVM_SECRET_ACTION = 101,

        /** SHARE_OWN_PN value */
        SHARE_OWN_PN = 10001,

        /** BUSINESS_BROADCAST_ACTION value */
        BUSINESS_BROADCAST_ACTION = 10002,

        /** AI_THREAD_DELETE_ACTION value */
        AI_THREAD_DELETE_ACTION = 10003
    }

    /** CollectionName enum. */
    enum CollectionName {

        /** COLLECTION_NAME_UNKNOWN value */
        COLLECTION_NAME_UNKNOWN = 0,

        /** REGULAR value */
        REGULAR = 1,

        /** REGULAR_LOW value */
        REGULAR_LOW = 2,

        /** REGULAR_HIGH value */
        REGULAR_HIGH = 3,

        /** CRITICAL_BLOCK value */
        CRITICAL_BLOCK = 4,

        /** CRITICAL_UNBLOCK_LOW value */
        CRITICAL_UNBLOCK_LOW = 5
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

/** Namespace DeviceCapabilities. */
export namespace DeviceCapabilities {

    /**
     * Properties of a DeviceCapabilities.
     * @deprecated Use DeviceCapabilities.DeviceCapabilities.$Properties instead.
     */
    interface IDeviceCapabilities extends DeviceCapabilities.DeviceCapabilities.$Properties {
    }

    /** Represents a DeviceCapabilities. */
    class DeviceCapabilities {

        /**
         * Constructs a new DeviceCapabilities.
         * @param [properties] Properties to set
         */
        constructor(properties?: DeviceCapabilities.DeviceCapabilities.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DeviceCapabilities chatLockSupportLevel. */
        chatLockSupportLevel?: (DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel|null);

        /** DeviceCapabilities lidMigration. */
        lidMigration?: (DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties|null);

        /** DeviceCapabilities businessBroadcast. */
        businessBroadcast?: (DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties|null);

        /** DeviceCapabilities userHasAvatar. */
        userHasAvatar?: (DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties|null);

        /** DeviceCapabilities memberNameTagPrimarySupport. */
        memberNameTagPrimarySupport?: (DeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport|null);

        /** DeviceCapabilities aiThread. */
        aiThread?: (DeviceCapabilities.DeviceCapabilities.AiThread.$Properties|null);

        /** DeviceCapabilities aiFbidMigration. */
        aiFbidMigration?: (DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties|null);

        /** DeviceCapabilities bizAiSettingsSync. */
        bizAiSettingsSync?: (DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties|null);

        /** DeviceCapabilities contactRefresh. */
        contactRefresh?: (DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties|null);

        /** DeviceCapabilities reverseHistorySync. */
        reverseHistorySync?: (DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Properties|null);

        /** DeviceCapabilities newsletterChatsMigration. */
        newsletterChatsMigration?: (DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Properties|null);

        /** DeviceCapabilities hostWriteMutationSupport. */
        hostWriteMutationSupport?: (DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Properties|null);

        /** DeviceCapabilities bizAiWebOnboarding. */
        bizAiWebOnboarding?: (DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Properties|null);

        /** DeviceCapabilities phoneNumberSharing. */
        phoneNumberSharing?: (DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Properties|null);

        /**
         * Creates a new DeviceCapabilities instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceCapabilities instance
         */
        static create(properties: DeviceCapabilities.DeviceCapabilities.$Shape): DeviceCapabilities.DeviceCapabilities & DeviceCapabilities.DeviceCapabilities.$Shape;
        static create(properties?: DeviceCapabilities.DeviceCapabilities.$Properties): DeviceCapabilities.DeviceCapabilities;

        /**
         * Encodes the specified DeviceCapabilities message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.verify|verify} messages.
         * @param message DeviceCapabilities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: DeviceCapabilities.DeviceCapabilities.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceCapabilities message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.verify|verify} messages.
         * @param message DeviceCapabilities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceCapabilities message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {DeviceCapabilities.DeviceCapabilities & DeviceCapabilities.DeviceCapabilities.$Shape} DeviceCapabilities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities & DeviceCapabilities.DeviceCapabilities.$Shape;

        /**
         * Decodes a DeviceCapabilities message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {DeviceCapabilities.DeviceCapabilities & DeviceCapabilities.DeviceCapabilities.$Shape} DeviceCapabilities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities & DeviceCapabilities.DeviceCapabilities.$Shape;

        /**
         * Verifies a DeviceCapabilities message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceCapabilities message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceCapabilities
         */
        static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities;

        /**
         * Creates a plain object from a DeviceCapabilities message. Also converts values to other types if specified.
         * @param message DeviceCapabilities
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: DeviceCapabilities.DeviceCapabilities, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceCapabilities to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DeviceCapabilities
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DeviceCapabilities {

        /** Properties of a DeviceCapabilities. */
        interface $Properties {

            /** DeviceCapabilities chatLockSupportLevel */
            chatLockSupportLevel?: (DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel|null);

            /** DeviceCapabilities lidMigration */
            lidMigration?: (DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties|null);

            /** DeviceCapabilities businessBroadcast */
            businessBroadcast?: (DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties|null);

            /** DeviceCapabilities userHasAvatar */
            userHasAvatar?: (DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties|null);

            /** DeviceCapabilities memberNameTagPrimarySupport */
            memberNameTagPrimarySupport?: (DeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport|null);

            /** DeviceCapabilities aiThread */
            aiThread?: (DeviceCapabilities.DeviceCapabilities.AiThread.$Properties|null);

            /** DeviceCapabilities aiFbidMigration */
            aiFbidMigration?: (DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties|null);

            /** DeviceCapabilities bizAiSettingsSync */
            bizAiSettingsSync?: (DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties|null);

            /** DeviceCapabilities contactRefresh */
            contactRefresh?: (DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties|null);

            /** DeviceCapabilities reverseHistorySync */
            reverseHistorySync?: (DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Properties|null);

            /** DeviceCapabilities newsletterChatsMigration */
            newsletterChatsMigration?: (DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Properties|null);

            /** DeviceCapabilities hostWriteMutationSupport */
            hostWriteMutationSupport?: (DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Properties|null);

            /** DeviceCapabilities bizAiWebOnboarding */
            bizAiWebOnboarding?: (DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Properties|null);

            /** DeviceCapabilities phoneNumberSharing */
            phoneNumberSharing?: (DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DeviceCapabilities. */
        type $Shape = DeviceCapabilities.DeviceCapabilities.$Properties;

        /**
         * Properties of an AiFbidMigration.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties instead.
         */
        interface IAiFbidMigration extends DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties {
        }

        /** Represents an AiFbidMigration. */
        class AiFbidMigration {

            /**
             * Constructs a new AiFbidMigration.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AiFbidMigration chatDbMigrationTimestamp. */
            chatDbMigrationTimestamp?: (number|Long|null);

            /** AiFbidMigration supportVersion. */
            supportVersion?: (number|null);

            /**
             * Creates a new AiFbidMigration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AiFbidMigration instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Shape): DeviceCapabilities.DeviceCapabilities.AiFbidMigration & DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties): DeviceCapabilities.DeviceCapabilities.AiFbidMigration;

            /**
             * Encodes the specified AiFbidMigration message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.AiFbidMigration.verify|verify} messages.
             * @param message AiFbidMigration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AiFbidMigration message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.AiFbidMigration.verify|verify} messages.
             * @param message AiFbidMigration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AiFbidMigration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.AiFbidMigration & DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Shape} AiFbidMigration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.AiFbidMigration & DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Shape;

            /**
             * Decodes an AiFbidMigration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.AiFbidMigration & DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Shape} AiFbidMigration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.AiFbidMigration & DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Shape;

            /**
             * Verifies an AiFbidMigration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AiFbidMigration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AiFbidMigration
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.AiFbidMigration;

            /**
             * Creates a plain object from an AiFbidMigration message. Also converts values to other types if specified.
             * @param message AiFbidMigration
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.AiFbidMigration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AiFbidMigration to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AiFbidMigration
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AiFbidMigration {

            /** Properties of an AiFbidMigration. */
            interface $Properties {

                /** AiFbidMigration chatDbMigrationTimestamp */
                chatDbMigrationTimestamp?: (number|Long|null);

                /** AiFbidMigration supportVersion */
                supportVersion?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AiFbidMigration. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties;
        }

        /**
         * Properties of an AiThread.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.AiThread.$Properties instead.
         */
        interface IAiThread extends DeviceCapabilities.DeviceCapabilities.AiThread.$Properties {
        }

        /** Represents an AiThread. */
        class AiThread {

            /**
             * Constructs a new AiThread.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.AiThread.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AiThread supportLevel. */
            supportLevel?: (DeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel|null);

            /**
             * Creates a new AiThread instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AiThread instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.AiThread.$Shape): DeviceCapabilities.DeviceCapabilities.AiThread & DeviceCapabilities.DeviceCapabilities.AiThread.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.AiThread.$Properties): DeviceCapabilities.DeviceCapabilities.AiThread;

            /**
             * Encodes the specified AiThread message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.AiThread.verify|verify} messages.
             * @param message AiThread message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.AiThread.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AiThread message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.AiThread.verify|verify} messages.
             * @param message AiThread message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.AiThread.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AiThread message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.AiThread & DeviceCapabilities.DeviceCapabilities.AiThread.$Shape} AiThread
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.AiThread & DeviceCapabilities.DeviceCapabilities.AiThread.$Shape;

            /**
             * Decodes an AiThread message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.AiThread & DeviceCapabilities.DeviceCapabilities.AiThread.$Shape} AiThread
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.AiThread & DeviceCapabilities.DeviceCapabilities.AiThread.$Shape;

            /**
             * Verifies an AiThread message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AiThread message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AiThread
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.AiThread;

            /**
             * Creates a plain object from an AiThread message. Also converts values to other types if specified.
             * @param message AiThread
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.AiThread, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AiThread to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AiThread
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AiThread {

            /** Properties of an AiThread. */
            interface $Properties {

                /** AiThread supportLevel */
                supportLevel?: (DeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AiThread. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.AiThread.$Properties;

            /** SupportLevel enum. */
            enum SupportLevel {

                /** NONE value */
                NONE = 0,

                /** INFRA value */
                INFRA = 1,

                /** FULL value */
                FULL = 2
            }
        }

        /**
         * Properties of a BizAiSettingsSync.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties instead.
         */
        interface IBizAiSettingsSync extends DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties {
        }

        /** Represents a BizAiSettingsSync. */
        class BizAiSettingsSync {

            /**
             * Constructs a new BizAiSettingsSync.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BizAiSettingsSync handoffRemovalTimingEnabled. */
            handoffRemovalTimingEnabled?: (boolean|null);

            /**
             * Creates a new BizAiSettingsSync instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BizAiSettingsSync instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Shape): DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync & DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties): DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync;

            /**
             * Encodes the specified BizAiSettingsSync message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.verify|verify} messages.
             * @param message BizAiSettingsSync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BizAiSettingsSync message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.verify|verify} messages.
             * @param message BizAiSettingsSync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BizAiSettingsSync message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync & DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Shape} BizAiSettingsSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync & DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Shape;

            /**
             * Decodes a BizAiSettingsSync message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync & DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Shape} BizAiSettingsSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync & DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Shape;

            /**
             * Verifies a BizAiSettingsSync message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BizAiSettingsSync message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BizAiSettingsSync
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync;

            /**
             * Creates a plain object from a BizAiSettingsSync message. Also converts values to other types if specified.
             * @param message BizAiSettingsSync
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BizAiSettingsSync to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BizAiSettingsSync
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BizAiSettingsSync {

            /** Properties of a BizAiSettingsSync. */
            interface $Properties {

                /** BizAiSettingsSync handoffRemovalTimingEnabled */
                handoffRemovalTimingEnabled?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BizAiSettingsSync. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties;
        }

        /**
         * Properties of a BizAiWebOnboarding.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Properties instead.
         */
        interface IBizAiWebOnboarding extends DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Properties {
        }

        /** Represents a BizAiWebOnboarding. */
        class BizAiWebOnboarding {

            /**
             * Constructs a new BizAiWebOnboarding.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BizAiWebOnboarding version. */
            version?: (number|null);

            /**
             * Creates a new BizAiWebOnboarding instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BizAiWebOnboarding instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Shape): DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding & DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Properties): DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding;

            /**
             * Encodes the specified BizAiWebOnboarding message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.verify|verify} messages.
             * @param message BizAiWebOnboarding message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BizAiWebOnboarding message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.verify|verify} messages.
             * @param message BizAiWebOnboarding message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BizAiWebOnboarding message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding & DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Shape} BizAiWebOnboarding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding & DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Shape;

            /**
             * Decodes a BizAiWebOnboarding message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding & DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Shape} BizAiWebOnboarding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding & DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Shape;

            /**
             * Verifies a BizAiWebOnboarding message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BizAiWebOnboarding message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BizAiWebOnboarding
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding;

            /**
             * Creates a plain object from a BizAiWebOnboarding message. Also converts values to other types if specified.
             * @param message BizAiWebOnboarding
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BizAiWebOnboarding to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BizAiWebOnboarding
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BizAiWebOnboarding {

            /** Properties of a BizAiWebOnboarding. */
            interface $Properties {

                /** BizAiWebOnboarding version */
                version?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BizAiWebOnboarding. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.BizAiWebOnboarding.$Properties;
        }

        /**
         * Properties of a BusinessBroadcast.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties instead.
         */
        interface IBusinessBroadcast extends DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties {
        }

        /** Represents a BusinessBroadcast. */
        class BusinessBroadcast {

            /**
             * Constructs a new BusinessBroadcast.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BusinessBroadcast importListEnabled. */
            importListEnabled?: (boolean|null);

            /** BusinessBroadcast companionSupportEnabled. */
            companionSupportEnabled?: (boolean|null);

            /** BusinessBroadcast campaignSyncEnabled. */
            campaignSyncEnabled?: (boolean|null);

            /** BusinessBroadcast insightsSyncEnabled. */
            insightsSyncEnabled?: (boolean|null);

            /** BusinessBroadcast recipientLimit. */
            recipientLimit?: (number|null);

            /** BusinessBroadcast proCompanionSupportEnabled. */
            proCompanionSupportEnabled?: (boolean|null);

            /**
             * Creates a new BusinessBroadcast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BusinessBroadcast instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Shape): DeviceCapabilities.DeviceCapabilities.BusinessBroadcast & DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties): DeviceCapabilities.DeviceCapabilities.BusinessBroadcast;

            /**
             * Encodes the specified BusinessBroadcast message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.verify|verify} messages.
             * @param message BusinessBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BusinessBroadcast message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.verify|verify} messages.
             * @param message BusinessBroadcast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BusinessBroadcast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast & DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Shape} BusinessBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.BusinessBroadcast & DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Shape;

            /**
             * Decodes a BusinessBroadcast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast & DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Shape} BusinessBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.BusinessBroadcast & DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Shape;

            /**
             * Verifies a BusinessBroadcast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BusinessBroadcast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BusinessBroadcast
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.BusinessBroadcast;

            /**
             * Creates a plain object from a BusinessBroadcast message. Also converts values to other types if specified.
             * @param message BusinessBroadcast
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.BusinessBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BusinessBroadcast to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BusinessBroadcast
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BusinessBroadcast {

            /** Properties of a BusinessBroadcast. */
            interface $Properties {

                /** BusinessBroadcast importListEnabled */
                importListEnabled?: (boolean|null);

                /** BusinessBroadcast companionSupportEnabled */
                companionSupportEnabled?: (boolean|null);

                /** BusinessBroadcast campaignSyncEnabled */
                campaignSyncEnabled?: (boolean|null);

                /** BusinessBroadcast insightsSyncEnabled */
                insightsSyncEnabled?: (boolean|null);

                /** BusinessBroadcast recipientLimit */
                recipientLimit?: (number|null);

                /** BusinessBroadcast proCompanionSupportEnabled */
                proCompanionSupportEnabled?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BusinessBroadcast. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties;
        }

        /** ChatLockSupportLevel enum. */
        enum ChatLockSupportLevel {

            /** NONE value */
            NONE = 0,

            /** MINIMAL value */
            MINIMAL = 1,

            /** FULL value */
            FULL = 2
        }

        /**
         * Properties of a ContactRefresh.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties instead.
         */
        interface IContactRefresh extends DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties {
        }

        /** Represents a ContactRefresh. */
        class ContactRefresh {

            /**
             * Constructs a new ContactRefresh.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ContactRefresh refreshSupported. */
            refreshSupported?: (boolean|null);

            /**
             * Creates a new ContactRefresh instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContactRefresh instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Shape): DeviceCapabilities.DeviceCapabilities.ContactRefresh & DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties): DeviceCapabilities.DeviceCapabilities.ContactRefresh;

            /**
             * Encodes the specified ContactRefresh message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.ContactRefresh.verify|verify} messages.
             * @param message ContactRefresh message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContactRefresh message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.ContactRefresh.verify|verify} messages.
             * @param message ContactRefresh message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContactRefresh message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.ContactRefresh & DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Shape} ContactRefresh
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.ContactRefresh & DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Shape;

            /**
             * Decodes a ContactRefresh message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.ContactRefresh & DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Shape} ContactRefresh
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.ContactRefresh & DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Shape;

            /**
             * Verifies a ContactRefresh message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContactRefresh message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContactRefresh
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.ContactRefresh;

            /**
             * Creates a plain object from a ContactRefresh message. Also converts values to other types if specified.
             * @param message ContactRefresh
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.ContactRefresh, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContactRefresh to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ContactRefresh
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ContactRefresh {

            /** Properties of a ContactRefresh. */
            interface $Properties {

                /** ContactRefresh refreshSupported */
                refreshSupported?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ContactRefresh. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties;
        }

        /**
         * Properties of a HostWriteMutationSupport.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Properties instead.
         */
        interface IHostWriteMutationSupport extends DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Properties {
        }

        /** Represents a HostWriteMutationSupport. */
        class HostWriteMutationSupport {

            /**
             * Constructs a new HostWriteMutationSupport.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** HostWriteMutationSupport mutationNames. */
            mutationNames: string[];

            /**
             * Creates a new HostWriteMutationSupport instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HostWriteMutationSupport instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Shape): DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport & DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Properties): DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport;

            /**
             * Encodes the specified HostWriteMutationSupport message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.verify|verify} messages.
             * @param message HostWriteMutationSupport message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HostWriteMutationSupport message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.verify|verify} messages.
             * @param message HostWriteMutationSupport message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HostWriteMutationSupport message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport & DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Shape} HostWriteMutationSupport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport & DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Shape;

            /**
             * Decodes a HostWriteMutationSupport message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport & DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Shape} HostWriteMutationSupport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport & DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Shape;

            /**
             * Verifies a HostWriteMutationSupport message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HostWriteMutationSupport message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HostWriteMutationSupport
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport;

            /**
             * Creates a plain object from a HostWriteMutationSupport message. Also converts values to other types if specified.
             * @param message HostWriteMutationSupport
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HostWriteMutationSupport to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for HostWriteMutationSupport
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace HostWriteMutationSupport {

            /** Properties of a HostWriteMutationSupport. */
            interface $Properties {

                /** HostWriteMutationSupport mutationNames */
                mutationNames?: (string[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a HostWriteMutationSupport. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.HostWriteMutationSupport.$Properties;
        }

        /**
         * Properties of a LIDMigration.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties instead.
         */
        interface ILIDMigration extends DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties {
        }

        /** Represents a LIDMigration. */
        class LIDMigration {

            /**
             * Constructs a new LIDMigration.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** LIDMigration chatDbMigrationTimestamp. */
            chatDbMigrationTimestamp?: (number|Long|null);

            /**
             * Creates a new LIDMigration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LIDMigration instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.LIDMigration.$Shape): DeviceCapabilities.DeviceCapabilities.LIDMigration & DeviceCapabilities.DeviceCapabilities.LIDMigration.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties): DeviceCapabilities.DeviceCapabilities.LIDMigration;

            /**
             * Encodes the specified LIDMigration message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.LIDMigration.verify|verify} messages.
             * @param message LIDMigration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LIDMigration message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.LIDMigration.verify|verify} messages.
             * @param message LIDMigration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LIDMigration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.LIDMigration & DeviceCapabilities.DeviceCapabilities.LIDMigration.$Shape} LIDMigration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.LIDMigration & DeviceCapabilities.DeviceCapabilities.LIDMigration.$Shape;

            /**
             * Decodes a LIDMigration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.LIDMigration & DeviceCapabilities.DeviceCapabilities.LIDMigration.$Shape} LIDMigration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.LIDMigration & DeviceCapabilities.DeviceCapabilities.LIDMigration.$Shape;

            /**
             * Verifies a LIDMigration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LIDMigration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LIDMigration
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.LIDMigration;

            /**
             * Creates a plain object from a LIDMigration message. Also converts values to other types if specified.
             * @param message LIDMigration
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.LIDMigration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LIDMigration to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LIDMigration
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LIDMigration {

            /** Properties of a LIDMigration. */
            interface $Properties {

                /** LIDMigration chatDbMigrationTimestamp */
                chatDbMigrationTimestamp?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LIDMigration. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties;
        }

        /** MemberNameTagPrimarySupport enum. */
        enum MemberNameTagPrimarySupport {

            /** DISABLED value */
            DISABLED = 0,

            /** RECEIVER_ENABLED value */
            RECEIVER_ENABLED = 1,

            /** SENDER_ENABLED value */
            SENDER_ENABLED = 2
        }

        /**
         * Properties of a NewsletterChatsMigration.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Properties instead.
         */
        interface INewsletterChatsMigration extends DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Properties {
        }

        /** Represents a NewsletterChatsMigration. */
        class NewsletterChatsMigration {

            /**
             * Constructs a new NewsletterChatsMigration.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** NewsletterChatsMigration effectiveMigrated. */
            effectiveMigrated?: (boolean|null);

            /** NewsletterChatsMigration countdownEndsAt. */
            countdownEndsAt?: (number|Long|null);

            /** NewsletterChatsMigration rolledBack. */
            rolledBack?: (boolean|null);

            /**
             * Creates a new NewsletterChatsMigration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NewsletterChatsMigration instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Shape): DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration & DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Properties): DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration;

            /**
             * Encodes the specified NewsletterChatsMigration message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.verify|verify} messages.
             * @param message NewsletterChatsMigration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NewsletterChatsMigration message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.verify|verify} messages.
             * @param message NewsletterChatsMigration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NewsletterChatsMigration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration & DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Shape} NewsletterChatsMigration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration & DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Shape;

            /**
             * Decodes a NewsletterChatsMigration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration & DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Shape} NewsletterChatsMigration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration & DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Shape;

            /**
             * Verifies a NewsletterChatsMigration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NewsletterChatsMigration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NewsletterChatsMigration
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration;

            /**
             * Creates a plain object from a NewsletterChatsMigration message. Also converts values to other types if specified.
             * @param message NewsletterChatsMigration
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NewsletterChatsMigration to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NewsletterChatsMigration
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NewsletterChatsMigration {

            /** Properties of a NewsletterChatsMigration. */
            interface $Properties {

                /** NewsletterChatsMigration effectiveMigrated */
                effectiveMigrated?: (boolean|null);

                /** NewsletterChatsMigration countdownEndsAt */
                countdownEndsAt?: (number|Long|null);

                /** NewsletterChatsMigration rolledBack */
                rolledBack?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NewsletterChatsMigration. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.NewsletterChatsMigration.$Properties;
        }

        /**
         * Properties of a PhoneNumberSharing.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Properties instead.
         */
        interface IPhoneNumberSharing extends DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Properties {
        }

        /** Represents a PhoneNumberSharing. */
        class PhoneNumberSharing {

            /**
             * Constructs a new PhoneNumberSharing.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PhoneNumberSharing phoneSharingSupported. */
            phoneSharingSupported?: (boolean|null);

            /**
             * Creates a new PhoneNumberSharing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhoneNumberSharing instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Shape): DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing & DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Properties): DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing;

            /**
             * Encodes the specified PhoneNumberSharing message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.verify|verify} messages.
             * @param message PhoneNumberSharing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhoneNumberSharing message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.verify|verify} messages.
             * @param message PhoneNumberSharing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhoneNumberSharing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing & DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Shape} PhoneNumberSharing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing & DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Shape;

            /**
             * Decodes a PhoneNumberSharing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing & DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Shape} PhoneNumberSharing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing & DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Shape;

            /**
             * Verifies a PhoneNumberSharing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhoneNumberSharing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhoneNumberSharing
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing;

            /**
             * Creates a plain object from a PhoneNumberSharing message. Also converts values to other types if specified.
             * @param message PhoneNumberSharing
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhoneNumberSharing to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PhoneNumberSharing
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PhoneNumberSharing {

            /** Properties of a PhoneNumberSharing. */
            interface $Properties {

                /** PhoneNumberSharing phoneSharingSupported */
                phoneSharingSupported?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PhoneNumberSharing. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.PhoneNumberSharing.$Properties;
        }

        /**
         * Properties of a ReverseHistorySync.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Properties instead.
         */
        interface IReverseHistorySync extends DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Properties {
        }

        /** Represents a ReverseHistorySync. */
        class ReverseHistorySync {

            /**
             * Constructs a new ReverseHistorySync.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ReverseHistorySync enabledProducts. */
            enabledProducts: DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.Product[];

            /**
             * Creates a new ReverseHistorySync instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReverseHistorySync instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Shape): DeviceCapabilities.DeviceCapabilities.ReverseHistorySync & DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Properties): DeviceCapabilities.DeviceCapabilities.ReverseHistorySync;

            /**
             * Encodes the specified ReverseHistorySync message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.verify|verify} messages.
             * @param message ReverseHistorySync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReverseHistorySync message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.verify|verify} messages.
             * @param message ReverseHistorySync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReverseHistorySync message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.ReverseHistorySync & DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Shape} ReverseHistorySync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.ReverseHistorySync & DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Shape;

            /**
             * Decodes a ReverseHistorySync message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.ReverseHistorySync & DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Shape} ReverseHistorySync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.ReverseHistorySync & DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Shape;

            /**
             * Verifies a ReverseHistorySync message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReverseHistorySync message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReverseHistorySync
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.ReverseHistorySync;

            /**
             * Creates a plain object from a ReverseHistorySync message. Also converts values to other types if specified.
             * @param message ReverseHistorySync
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.ReverseHistorySync, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReverseHistorySync to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ReverseHistorySync
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ReverseHistorySync {

            /** Properties of a ReverseHistorySync. */
            interface $Properties {

                /** ReverseHistorySync enabledProducts */
                enabledProducts?: (DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.Product[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ReverseHistorySync. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.ReverseHistorySync.$Properties;

            /** Product enum. */
            enum Product {

                /** PRODUCT_UNSPECIFIED value */
                PRODUCT_UNSPECIFIED = 0,

                /** HATCH value */
                HATCH = 1
            }
        }

        /**
         * Properties of a UserHasAvatar.
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties instead.
         */
        interface IUserHasAvatar extends DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties {
        }

        /** Represents a UserHasAvatar. */
        class UserHasAvatar {

            /**
             * Constructs a new UserHasAvatar.
             * @param [properties] Properties to set
             */
            constructor(properties?: DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UserHasAvatar userHasAvatar. */
            userHasAvatar?: (boolean|null);

            /**
             * Creates a new UserHasAvatar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserHasAvatar instance
             */
            static create(properties: DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Shape): DeviceCapabilities.DeviceCapabilities.UserHasAvatar & DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Shape;
            static create(properties?: DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties): DeviceCapabilities.DeviceCapabilities.UserHasAvatar;

            /**
             * Encodes the specified UserHasAvatar message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.UserHasAvatar.verify|verify} messages.
             * @param message UserHasAvatar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserHasAvatar message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.UserHasAvatar.verify|verify} messages.
             * @param message UserHasAvatar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserHasAvatar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.UserHasAvatar & DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Shape} UserHasAvatar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.UserHasAvatar & DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Shape;

            /**
             * Decodes a UserHasAvatar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.UserHasAvatar & DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Shape} UserHasAvatar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.UserHasAvatar & DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Shape;

            /**
             * Verifies a UserHasAvatar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserHasAvatar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserHasAvatar
             */
            static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.UserHasAvatar;

            /**
             * Creates a plain object from a UserHasAvatar message. Also converts values to other types if specified.
             * @param message UserHasAvatar
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: DeviceCapabilities.DeviceCapabilities.UserHasAvatar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserHasAvatar to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UserHasAvatar
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UserHasAvatar {

            /** Properties of a UserHasAvatar. */
            interface $Properties {

                /** UserHasAvatar userHasAvatar */
                userHasAvatar?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a UserHasAvatar. */
            type $Shape = DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties;
        }
    }
}

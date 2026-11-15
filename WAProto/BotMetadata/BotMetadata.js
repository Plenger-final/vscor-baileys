/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $String = $util.global.String, $Array = $util.global.Array, $Boolean = $util.global.Boolean, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt, $Number = $util.global.Number;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.BotMetadata = (function() {

    /**
     * Namespace BotMetadata.
     * @exports BotMetadata
     * @namespace
     */
    var BotMetadata = {};

    BotMetadata.BotMetadata = (function() {

        /**
         * Properties of a BotMetadata.
         * @typedef {Object} BotMetadata.BotMetadata.$Properties
         * @property {BotMetadata.BotAvatarMetadata.$Properties|null} [avatarMetadata] BotMetadata avatarMetadata
         * @property {string|null} [personaId] BotMetadata personaId
         * @property {BotMetadata.BotPluginMetadata.$Properties|null} [pluginMetadata] BotMetadata pluginMetadata
         * @property {BotMetadata.BotSuggestedPromptMetadata.$Properties|null} [suggestedPromptMetadata] BotMetadata suggestedPromptMetadata
         * @property {string|null} [invokerJid] BotMetadata invokerJid
         * @property {BotMetadata.BotSessionMetadata.$Properties|null} [sessionMetadata] BotMetadata sessionMetadata
         * @property {BotMetadata.BotMemuMetadata.$Properties|null} [memuMetadata] BotMetadata memuMetadata
         * @property {string|null} [timezone] BotMetadata timezone
         * @property {BotMetadata.BotReminderMetadata.$Properties|null} [reminderMetadata] BotMetadata reminderMetadata
         * @property {BotMetadata.BotModelMetadata.$Properties|null} [modelMetadata] BotMetadata modelMetadata
         * @property {string|null} [messageDisclaimerText] BotMetadata messageDisclaimerText
         * @property {BotMetadata.BotProgressIndicatorMetadata.$Properties|null} [progressIndicatorMetadata] BotMetadata progressIndicatorMetadata
         * @property {BotMetadata.BotCapabilityMetadata.$Properties|null} [capabilityMetadata] BotMetadata capabilityMetadata
         * @property {BotMetadata.BotImagineMetadata.$Properties|null} [imagineMetadata] BotMetadata imagineMetadata
         * @property {BotMetadata.BotMemoryMetadata.$Properties|null} [memoryMetadata] BotMetadata memoryMetadata
         * @property {BotMetadata.BotRenderingMetadata.$Properties|null} [renderingMetadata] BotMetadata renderingMetadata
         * @property {BotMetadata.BotMetricsMetadata.$Properties|null} [botMetricsMetadata] BotMetadata botMetricsMetadata
         * @property {BotMetadata.BotLinkedAccountsMetadata.$Properties|null} [botLinkedAccountsMetadata] BotMetadata botLinkedAccountsMetadata
         * @property {BotMetadata.BotSourcesMetadata.$Properties|null} [richResponseSourcesMetadata] BotMetadata richResponseSourcesMetadata
         * @property {Uint8Array|null} [aiConversationContext] BotMetadata aiConversationContext
         * @property {BotMetadata.BotPromotionMessageMetadata.$Properties|null} [botPromotionMessageMetadata] BotMetadata botPromotionMessageMetadata
         * @property {BotMetadata.BotModeSelectionMetadata.$Properties|null} [botModeSelectionMetadata] BotMetadata botModeSelectionMetadata
         * @property {BotMetadata.BotQuotaMetadata.$Properties|null} [botQuotaMetadata] BotMetadata botQuotaMetadata
         * @property {BotMetadata.BotAgeCollectionMetadata.$Properties|null} [botAgeCollectionMetadata] BotMetadata botAgeCollectionMetadata
         * @property {string|null} [conversationStarterPromptId] BotMetadata conversationStarterPromptId
         * @property {string|null} [botResponseId] BotMetadata botResponseId
         * @property {BotMetadata.BotSignatureVerificationMetadata.$Properties|null} [verificationMetadata] BotMetadata verificationMetadata
         * @property {BotMetadata.BotUnifiedResponseMutation.$Properties|null} [unifiedResponseMutation] BotMetadata unifiedResponseMutation
         * @property {BotMetadata.BotMessageOriginMetadata.$Properties|null} [botMessageOriginMetadata] BotMetadata botMessageOriginMetadata
         * @property {BotMetadata.InThreadSurveyMetadata.$Properties|null} [inThreadSurveyMetadata] BotMetadata inThreadSurveyMetadata
         * @property {BotMetadata.AIThreadInfo.$Properties|null} [botThreadInfo] BotMetadata botThreadInfo
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotMetadata.
         * @memberof BotMetadata
         * @interface IBotMetadata
         * @augments BotMetadata.BotMetadata.$Properties
         * @deprecated Use BotMetadata.BotMetadata.$Properties instead.
         */

        /**
         * Shape of a BotMetadata.
         * @typedef {BotMetadata.BotMetadata.$Properties} BotMetadata.BotMetadata.$Shape
         */

        /**
         * Constructs a new BotMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotMetadata.
         * @constructor
         * @param {BotMetadata.BotMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotMetadata = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotMetadata avatarMetadata.
         * @member {BotMetadata.BotAvatarMetadata.$Properties|null|undefined} avatarMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.avatarMetadata = null;

        /**
         * BotMetadata personaId.
         * @member {string|null|undefined} personaId
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.personaId = null;

        /**
         * BotMetadata pluginMetadata.
         * @member {BotMetadata.BotPluginMetadata.$Properties|null|undefined} pluginMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.pluginMetadata = null;

        /**
         * BotMetadata suggestedPromptMetadata.
         * @member {BotMetadata.BotSuggestedPromptMetadata.$Properties|null|undefined} suggestedPromptMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.suggestedPromptMetadata = null;

        /**
         * BotMetadata invokerJid.
         * @member {string|null|undefined} invokerJid
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.invokerJid = null;

        /**
         * BotMetadata sessionMetadata.
         * @member {BotMetadata.BotSessionMetadata.$Properties|null|undefined} sessionMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.sessionMetadata = null;

        /**
         * BotMetadata memuMetadata.
         * @member {BotMetadata.BotMemuMetadata.$Properties|null|undefined} memuMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.memuMetadata = null;

        /**
         * BotMetadata timezone.
         * @member {string|null|undefined} timezone
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.timezone = null;

        /**
         * BotMetadata reminderMetadata.
         * @member {BotMetadata.BotReminderMetadata.$Properties|null|undefined} reminderMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.reminderMetadata = null;

        /**
         * BotMetadata modelMetadata.
         * @member {BotMetadata.BotModelMetadata.$Properties|null|undefined} modelMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.modelMetadata = null;

        /**
         * BotMetadata messageDisclaimerText.
         * @member {string|null|undefined} messageDisclaimerText
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.messageDisclaimerText = null;

        /**
         * BotMetadata progressIndicatorMetadata.
         * @member {BotMetadata.BotProgressIndicatorMetadata.$Properties|null|undefined} progressIndicatorMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.progressIndicatorMetadata = null;

        /**
         * BotMetadata capabilityMetadata.
         * @member {BotMetadata.BotCapabilityMetadata.$Properties|null|undefined} capabilityMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.capabilityMetadata = null;

        /**
         * BotMetadata imagineMetadata.
         * @member {BotMetadata.BotImagineMetadata.$Properties|null|undefined} imagineMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.imagineMetadata = null;

        /**
         * BotMetadata memoryMetadata.
         * @member {BotMetadata.BotMemoryMetadata.$Properties|null|undefined} memoryMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.memoryMetadata = null;

        /**
         * BotMetadata renderingMetadata.
         * @member {BotMetadata.BotRenderingMetadata.$Properties|null|undefined} renderingMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.renderingMetadata = null;

        /**
         * BotMetadata botMetricsMetadata.
         * @member {BotMetadata.BotMetricsMetadata.$Properties|null|undefined} botMetricsMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.botMetricsMetadata = null;

        /**
         * BotMetadata botLinkedAccountsMetadata.
         * @member {BotMetadata.BotLinkedAccountsMetadata.$Properties|null|undefined} botLinkedAccountsMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.botLinkedAccountsMetadata = null;

        /**
         * BotMetadata richResponseSourcesMetadata.
         * @member {BotMetadata.BotSourcesMetadata.$Properties|null|undefined} richResponseSourcesMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.richResponseSourcesMetadata = null;

        /**
         * BotMetadata aiConversationContext.
         * @member {Uint8Array|null|undefined} aiConversationContext
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.aiConversationContext = null;

        /**
         * BotMetadata botPromotionMessageMetadata.
         * @member {BotMetadata.BotPromotionMessageMetadata.$Properties|null|undefined} botPromotionMessageMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.botPromotionMessageMetadata = null;

        /**
         * BotMetadata botModeSelectionMetadata.
         * @member {BotMetadata.BotModeSelectionMetadata.$Properties|null|undefined} botModeSelectionMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.botModeSelectionMetadata = null;

        /**
         * BotMetadata botQuotaMetadata.
         * @member {BotMetadata.BotQuotaMetadata.$Properties|null|undefined} botQuotaMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.botQuotaMetadata = null;

        /**
         * BotMetadata botAgeCollectionMetadata.
         * @member {BotMetadata.BotAgeCollectionMetadata.$Properties|null|undefined} botAgeCollectionMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.botAgeCollectionMetadata = null;

        /**
         * BotMetadata conversationStarterPromptId.
         * @member {string|null|undefined} conversationStarterPromptId
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.conversationStarterPromptId = null;

        /**
         * BotMetadata botResponseId.
         * @member {string|null|undefined} botResponseId
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.botResponseId = null;

        /**
         * BotMetadata verificationMetadata.
         * @member {BotMetadata.BotSignatureVerificationMetadata.$Properties|null|undefined} verificationMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.verificationMetadata = null;

        /**
         * BotMetadata unifiedResponseMutation.
         * @member {BotMetadata.BotUnifiedResponseMutation.$Properties|null|undefined} unifiedResponseMutation
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.unifiedResponseMutation = null;

        /**
         * BotMetadata botMessageOriginMetadata.
         * @member {BotMetadata.BotMessageOriginMetadata.$Properties|null|undefined} botMessageOriginMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.botMessageOriginMetadata = null;

        /**
         * BotMetadata inThreadSurveyMetadata.
         * @member {BotMetadata.InThreadSurveyMetadata.$Properties|null|undefined} inThreadSurveyMetadata
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.inThreadSurveyMetadata = null;

        /**
         * BotMetadata botThreadInfo.
         * @member {BotMetadata.AIThreadInfo.$Properties|null|undefined} botThreadInfo
         * @memberof BotMetadata.BotMetadata
         * @instance
         */
        BotMetadata.prototype.botThreadInfo = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_avatarMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["avatarMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_personaId", {
            get: $util.oneOfGetter($oneOfFields = ["personaId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_pluginMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["pluginMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_suggestedPromptMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["suggestedPromptMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_invokerJid", {
            get: $util.oneOfGetter($oneOfFields = ["invokerJid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_sessionMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["sessionMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_memuMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["memuMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_timezone", {
            get: $util.oneOfGetter($oneOfFields = ["timezone"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_reminderMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["reminderMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_modelMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["modelMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_messageDisclaimerText", {
            get: $util.oneOfGetter($oneOfFields = ["messageDisclaimerText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_progressIndicatorMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["progressIndicatorMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_capabilityMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["capabilityMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_imagineMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["imagineMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_memoryMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["memoryMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_renderingMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["renderingMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_botMetricsMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botMetricsMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_botLinkedAccountsMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botLinkedAccountsMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_richResponseSourcesMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["richResponseSourcesMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_aiConversationContext", {
            get: $util.oneOfGetter($oneOfFields = ["aiConversationContext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_botPromotionMessageMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botPromotionMessageMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_botModeSelectionMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botModeSelectionMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_botQuotaMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botQuotaMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_botAgeCollectionMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botAgeCollectionMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_conversationStarterPromptId", {
            get: $util.oneOfGetter($oneOfFields = ["conversationStarterPromptId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_botResponseId", {
            get: $util.oneOfGetter($oneOfFields = ["botResponseId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_verificationMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["verificationMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_unifiedResponseMutation", {
            get: $util.oneOfGetter($oneOfFields = ["unifiedResponseMutation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_botMessageOriginMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botMessageOriginMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_inThreadSurveyMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["inThreadSurveyMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetadata.prototype, "_botThreadInfo", {
            get: $util.oneOfGetter($oneOfFields = ["botThreadInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotMetadata
         * @static
         * @param {BotMetadata.BotMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotMetadata} BotMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotMetadata.$Shape): BotMetadata.BotMetadata & BotMetadata.BotMetadata.$Shape;
         *   (properties?: BotMetadata.BotMetadata.$Properties): BotMetadata.BotMetadata;
         * }}
         */
        BotMetadata.create = function(properties) {
            return new BotMetadata(properties);
        };

        /**
         * Encodes the specified BotMetadata message. Does not implicitly {@link BotMetadata.BotMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotMetadata
         * @static
         * @param {BotMetadata.BotMetadata.$Properties} message BotMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.avatarMetadata != null && $Object.hasOwnProperty.call(message, "avatarMetadata"))
                $root.BotMetadata.BotAvatarMetadata.encode(message.avatarMetadata, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.personaId != null && $Object.hasOwnProperty.call(message, "personaId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.personaId);
            if (message.pluginMetadata != null && $Object.hasOwnProperty.call(message, "pluginMetadata"))
                $root.BotMetadata.BotPluginMetadata.encode(message.pluginMetadata, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.suggestedPromptMetadata != null && $Object.hasOwnProperty.call(message, "suggestedPromptMetadata"))
                $root.BotMetadata.BotSuggestedPromptMetadata.encode(message.suggestedPromptMetadata, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.invokerJid != null && $Object.hasOwnProperty.call(message, "invokerJid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.invokerJid);
            if (message.sessionMetadata != null && $Object.hasOwnProperty.call(message, "sessionMetadata"))
                $root.BotMetadata.BotSessionMetadata.encode(message.sessionMetadata, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.memuMetadata != null && $Object.hasOwnProperty.call(message, "memuMetadata"))
                $root.BotMetadata.BotMemuMetadata.encode(message.memuMetadata, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.timezone != null && $Object.hasOwnProperty.call(message, "timezone"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.timezone);
            if (message.reminderMetadata != null && $Object.hasOwnProperty.call(message, "reminderMetadata"))
                $root.BotMetadata.BotReminderMetadata.encode(message.reminderMetadata, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
            if (message.modelMetadata != null && $Object.hasOwnProperty.call(message, "modelMetadata"))
                $root.BotMetadata.BotModelMetadata.encode(message.modelMetadata, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
            if (message.messageDisclaimerText != null && $Object.hasOwnProperty.call(message, "messageDisclaimerText"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.messageDisclaimerText);
            if (message.progressIndicatorMetadata != null && $Object.hasOwnProperty.call(message, "progressIndicatorMetadata"))
                $root.BotMetadata.BotProgressIndicatorMetadata.encode(message.progressIndicatorMetadata, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
            if (message.capabilityMetadata != null && $Object.hasOwnProperty.call(message, "capabilityMetadata"))
                $root.BotMetadata.BotCapabilityMetadata.encode(message.capabilityMetadata, writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
            if (message.imagineMetadata != null && $Object.hasOwnProperty.call(message, "imagineMetadata"))
                $root.BotMetadata.BotImagineMetadata.encode(message.imagineMetadata, writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
            if (message.memoryMetadata != null && $Object.hasOwnProperty.call(message, "memoryMetadata"))
                $root.BotMetadata.BotMemoryMetadata.encode(message.memoryMetadata, writer.uint32(/* id 15, wireType 2 =*/122).fork(), _depth + 1).ldelim();
            if (message.renderingMetadata != null && $Object.hasOwnProperty.call(message, "renderingMetadata"))
                $root.BotMetadata.BotRenderingMetadata.encode(message.renderingMetadata, writer.uint32(/* id 16, wireType 2 =*/130).fork(), _depth + 1).ldelim();
            if (message.botMetricsMetadata != null && $Object.hasOwnProperty.call(message, "botMetricsMetadata"))
                $root.BotMetadata.BotMetricsMetadata.encode(message.botMetricsMetadata, writer.uint32(/* id 17, wireType 2 =*/138).fork(), _depth + 1).ldelim();
            if (message.botLinkedAccountsMetadata != null && $Object.hasOwnProperty.call(message, "botLinkedAccountsMetadata"))
                $root.BotMetadata.BotLinkedAccountsMetadata.encode(message.botLinkedAccountsMetadata, writer.uint32(/* id 18, wireType 2 =*/146).fork(), _depth + 1).ldelim();
            if (message.richResponseSourcesMetadata != null && $Object.hasOwnProperty.call(message, "richResponseSourcesMetadata"))
                $root.BotMetadata.BotSourcesMetadata.encode(message.richResponseSourcesMetadata, writer.uint32(/* id 19, wireType 2 =*/154).fork(), _depth + 1).ldelim();
            if (message.aiConversationContext != null && $Object.hasOwnProperty.call(message, "aiConversationContext"))
                writer.uint32(/* id 20, wireType 2 =*/162).bytes(message.aiConversationContext);
            if (message.botPromotionMessageMetadata != null && $Object.hasOwnProperty.call(message, "botPromotionMessageMetadata"))
                $root.BotMetadata.BotPromotionMessageMetadata.encode(message.botPromotionMessageMetadata, writer.uint32(/* id 21, wireType 2 =*/170).fork(), _depth + 1).ldelim();
            if (message.botModeSelectionMetadata != null && $Object.hasOwnProperty.call(message, "botModeSelectionMetadata"))
                $root.BotMetadata.BotModeSelectionMetadata.encode(message.botModeSelectionMetadata, writer.uint32(/* id 22, wireType 2 =*/178).fork(), _depth + 1).ldelim();
            if (message.botQuotaMetadata != null && $Object.hasOwnProperty.call(message, "botQuotaMetadata"))
                $root.BotMetadata.BotQuotaMetadata.encode(message.botQuotaMetadata, writer.uint32(/* id 23, wireType 2 =*/186).fork(), _depth + 1).ldelim();
            if (message.botAgeCollectionMetadata != null && $Object.hasOwnProperty.call(message, "botAgeCollectionMetadata"))
                $root.BotMetadata.BotAgeCollectionMetadata.encode(message.botAgeCollectionMetadata, writer.uint32(/* id 24, wireType 2 =*/194).fork(), _depth + 1).ldelim();
            if (message.conversationStarterPromptId != null && $Object.hasOwnProperty.call(message, "conversationStarterPromptId"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.conversationStarterPromptId);
            if (message.botResponseId != null && $Object.hasOwnProperty.call(message, "botResponseId"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.botResponseId);
            if (message.verificationMetadata != null && $Object.hasOwnProperty.call(message, "verificationMetadata"))
                $root.BotMetadata.BotSignatureVerificationMetadata.encode(message.verificationMetadata, writer.uint32(/* id 27, wireType 2 =*/218).fork(), _depth + 1).ldelim();
            if (message.unifiedResponseMutation != null && $Object.hasOwnProperty.call(message, "unifiedResponseMutation"))
                $root.BotMetadata.BotUnifiedResponseMutation.encode(message.unifiedResponseMutation, writer.uint32(/* id 28, wireType 2 =*/226).fork(), _depth + 1).ldelim();
            if (message.botMessageOriginMetadata != null && $Object.hasOwnProperty.call(message, "botMessageOriginMetadata"))
                $root.BotMetadata.BotMessageOriginMetadata.encode(message.botMessageOriginMetadata, writer.uint32(/* id 29, wireType 2 =*/234).fork(), _depth + 1).ldelim();
            if (message.inThreadSurveyMetadata != null && $Object.hasOwnProperty.call(message, "inThreadSurveyMetadata"))
                $root.BotMetadata.InThreadSurveyMetadata.encode(message.inThreadSurveyMetadata, writer.uint32(/* id 30, wireType 2 =*/242).fork(), _depth + 1).ldelim();
            if (message.botThreadInfo != null && $Object.hasOwnProperty.call(message, "botThreadInfo"))
                $root.BotMetadata.AIThreadInfo.encode(message.botThreadInfo, writer.uint32(/* id 31, wireType 2 =*/250).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotMetadata
         * @static
         * @param {BotMetadata.BotMetadata.$Properties} message BotMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotMetadata & BotMetadata.BotMetadata.$Shape} BotMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.avatarMetadata = $root.BotMetadata.BotAvatarMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.avatarMetadata);
                        message._avatarMetadata = "avatarMetadata";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.personaId = reader.stringVerify();
                        message._personaId = "personaId";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.pluginMetadata = $root.BotMetadata.BotPluginMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.pluginMetadata);
                        message._pluginMetadata = "pluginMetadata";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.suggestedPromptMetadata = $root.BotMetadata.BotSuggestedPromptMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.suggestedPromptMetadata);
                        message._suggestedPromptMetadata = "suggestedPromptMetadata";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.invokerJid = reader.stringVerify();
                        message._invokerJid = "invokerJid";
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.sessionMetadata = $root.BotMetadata.BotSessionMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.sessionMetadata);
                        message._sessionMetadata = "sessionMetadata";
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        message.memuMetadata = $root.BotMetadata.BotMemuMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.memuMetadata);
                        message._memuMetadata = "memuMetadata";
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        message.timezone = reader.stringVerify();
                        message._timezone = "timezone";
                        continue;
                    }
                case 9: {
                        if (wireType !== 2)
                            break;
                        message.reminderMetadata = $root.BotMetadata.BotReminderMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.reminderMetadata);
                        message._reminderMetadata = "reminderMetadata";
                        continue;
                    }
                case 10: {
                        if (wireType !== 2)
                            break;
                        message.modelMetadata = $root.BotMetadata.BotModelMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.modelMetadata);
                        message._modelMetadata = "modelMetadata";
                        continue;
                    }
                case 11: {
                        if (wireType !== 2)
                            break;
                        message.messageDisclaimerText = reader.stringVerify();
                        message._messageDisclaimerText = "messageDisclaimerText";
                        continue;
                    }
                case 12: {
                        if (wireType !== 2)
                            break;
                        message.progressIndicatorMetadata = $root.BotMetadata.BotProgressIndicatorMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.progressIndicatorMetadata);
                        message._progressIndicatorMetadata = "progressIndicatorMetadata";
                        continue;
                    }
                case 13: {
                        if (wireType !== 2)
                            break;
                        message.capabilityMetadata = $root.BotMetadata.BotCapabilityMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.capabilityMetadata);
                        message._capabilityMetadata = "capabilityMetadata";
                        continue;
                    }
                case 14: {
                        if (wireType !== 2)
                            break;
                        message.imagineMetadata = $root.BotMetadata.BotImagineMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.imagineMetadata);
                        message._imagineMetadata = "imagineMetadata";
                        continue;
                    }
                case 15: {
                        if (wireType !== 2)
                            break;
                        message.memoryMetadata = $root.BotMetadata.BotMemoryMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.memoryMetadata);
                        message._memoryMetadata = "memoryMetadata";
                        continue;
                    }
                case 16: {
                        if (wireType !== 2)
                            break;
                        message.renderingMetadata = $root.BotMetadata.BotRenderingMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.renderingMetadata);
                        message._renderingMetadata = "renderingMetadata";
                        continue;
                    }
                case 17: {
                        if (wireType !== 2)
                            break;
                        message.botMetricsMetadata = $root.BotMetadata.BotMetricsMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.botMetricsMetadata);
                        message._botMetricsMetadata = "botMetricsMetadata";
                        continue;
                    }
                case 18: {
                        if (wireType !== 2)
                            break;
                        message.botLinkedAccountsMetadata = $root.BotMetadata.BotLinkedAccountsMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.botLinkedAccountsMetadata);
                        message._botLinkedAccountsMetadata = "botLinkedAccountsMetadata";
                        continue;
                    }
                case 19: {
                        if (wireType !== 2)
                            break;
                        message.richResponseSourcesMetadata = $root.BotMetadata.BotSourcesMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.richResponseSourcesMetadata);
                        message._richResponseSourcesMetadata = "richResponseSourcesMetadata";
                        continue;
                    }
                case 20: {
                        if (wireType !== 2)
                            break;
                        message.aiConversationContext = reader.bytes();
                        message._aiConversationContext = "aiConversationContext";
                        continue;
                    }
                case 21: {
                        if (wireType !== 2)
                            break;
                        message.botPromotionMessageMetadata = $root.BotMetadata.BotPromotionMessageMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.botPromotionMessageMetadata);
                        message._botPromotionMessageMetadata = "botPromotionMessageMetadata";
                        continue;
                    }
                case 22: {
                        if (wireType !== 2)
                            break;
                        message.botModeSelectionMetadata = $root.BotMetadata.BotModeSelectionMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.botModeSelectionMetadata);
                        message._botModeSelectionMetadata = "botModeSelectionMetadata";
                        continue;
                    }
                case 23: {
                        if (wireType !== 2)
                            break;
                        message.botQuotaMetadata = $root.BotMetadata.BotQuotaMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.botQuotaMetadata);
                        message._botQuotaMetadata = "botQuotaMetadata";
                        continue;
                    }
                case 24: {
                        if (wireType !== 2)
                            break;
                        message.botAgeCollectionMetadata = $root.BotMetadata.BotAgeCollectionMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.botAgeCollectionMetadata);
                        message._botAgeCollectionMetadata = "botAgeCollectionMetadata";
                        continue;
                    }
                case 25: {
                        if (wireType !== 2)
                            break;
                        message.conversationStarterPromptId = reader.stringVerify();
                        message._conversationStarterPromptId = "conversationStarterPromptId";
                        continue;
                    }
                case 26: {
                        if (wireType !== 2)
                            break;
                        message.botResponseId = reader.stringVerify();
                        message._botResponseId = "botResponseId";
                        continue;
                    }
                case 27: {
                        if (wireType !== 2)
                            break;
                        message.verificationMetadata = $root.BotMetadata.BotSignatureVerificationMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.verificationMetadata);
                        message._verificationMetadata = "verificationMetadata";
                        continue;
                    }
                case 28: {
                        if (wireType !== 2)
                            break;
                        message.unifiedResponseMutation = $root.BotMetadata.BotUnifiedResponseMutation.decode(reader, reader.size(), $undefined, _depth + 1, message.unifiedResponseMutation);
                        message._unifiedResponseMutation = "unifiedResponseMutation";
                        continue;
                    }
                case 29: {
                        if (wireType !== 2)
                            break;
                        message.botMessageOriginMetadata = $root.BotMetadata.BotMessageOriginMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.botMessageOriginMetadata);
                        message._botMessageOriginMetadata = "botMessageOriginMetadata";
                        continue;
                    }
                case 30: {
                        if (wireType !== 2)
                            break;
                        message.inThreadSurveyMetadata = $root.BotMetadata.InThreadSurveyMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.inThreadSurveyMetadata);
                        message._inThreadSurveyMetadata = "inThreadSurveyMetadata";
                        continue;
                    }
                case 31: {
                        if (wireType !== 2)
                            break;
                        message.botThreadInfo = $root.BotMetadata.AIThreadInfo.decode(reader, reader.size(), $undefined, _depth + 1, message.botThreadInfo);
                        message._botThreadInfo = "botThreadInfo";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMetadata & BotMetadata.BotMetadata.$Shape} BotMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotMetadata message.
         * @function verify
         * @memberof BotMetadata.BotMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.avatarMetadata != null && $Object.hasOwnProperty.call(message, "avatarMetadata")) {
                properties._avatarMetadata = 1;
                {
                    var error = $root.BotMetadata.BotAvatarMetadata.verify(message.avatarMetadata, _depth + 1);
                    if (error)
                        return "avatarMetadata." + error;
                }
            }
            if (message.personaId != null && $Object.hasOwnProperty.call(message, "personaId")) {
                properties._personaId = 1;
                if (!$util.isString(message.personaId))
                    return "personaId: string expected";
            }
            if (message.pluginMetadata != null && $Object.hasOwnProperty.call(message, "pluginMetadata")) {
                properties._pluginMetadata = 1;
                {
                    var error = $root.BotMetadata.BotPluginMetadata.verify(message.pluginMetadata, _depth + 1);
                    if (error)
                        return "pluginMetadata." + error;
                }
            }
            if (message.suggestedPromptMetadata != null && $Object.hasOwnProperty.call(message, "suggestedPromptMetadata")) {
                properties._suggestedPromptMetadata = 1;
                {
                    var error = $root.BotMetadata.BotSuggestedPromptMetadata.verify(message.suggestedPromptMetadata, _depth + 1);
                    if (error)
                        return "suggestedPromptMetadata." + error;
                }
            }
            if (message.invokerJid != null && $Object.hasOwnProperty.call(message, "invokerJid")) {
                properties._invokerJid = 1;
                if (!$util.isString(message.invokerJid))
                    return "invokerJid: string expected";
            }
            if (message.sessionMetadata != null && $Object.hasOwnProperty.call(message, "sessionMetadata")) {
                properties._sessionMetadata = 1;
                {
                    var error = $root.BotMetadata.BotSessionMetadata.verify(message.sessionMetadata, _depth + 1);
                    if (error)
                        return "sessionMetadata." + error;
                }
            }
            if (message.memuMetadata != null && $Object.hasOwnProperty.call(message, "memuMetadata")) {
                properties._memuMetadata = 1;
                {
                    var error = $root.BotMetadata.BotMemuMetadata.verify(message.memuMetadata, _depth + 1);
                    if (error)
                        return "memuMetadata." + error;
                }
            }
            if (message.timezone != null && $Object.hasOwnProperty.call(message, "timezone")) {
                properties._timezone = 1;
                if (!$util.isString(message.timezone))
                    return "timezone: string expected";
            }
            if (message.reminderMetadata != null && $Object.hasOwnProperty.call(message, "reminderMetadata")) {
                properties._reminderMetadata = 1;
                {
                    var error = $root.BotMetadata.BotReminderMetadata.verify(message.reminderMetadata, _depth + 1);
                    if (error)
                        return "reminderMetadata." + error;
                }
            }
            if (message.modelMetadata != null && $Object.hasOwnProperty.call(message, "modelMetadata")) {
                properties._modelMetadata = 1;
                {
                    var error = $root.BotMetadata.BotModelMetadata.verify(message.modelMetadata, _depth + 1);
                    if (error)
                        return "modelMetadata." + error;
                }
            }
            if (message.messageDisclaimerText != null && $Object.hasOwnProperty.call(message, "messageDisclaimerText")) {
                properties._messageDisclaimerText = 1;
                if (!$util.isString(message.messageDisclaimerText))
                    return "messageDisclaimerText: string expected";
            }
            if (message.progressIndicatorMetadata != null && $Object.hasOwnProperty.call(message, "progressIndicatorMetadata")) {
                properties._progressIndicatorMetadata = 1;
                {
                    var error = $root.BotMetadata.BotProgressIndicatorMetadata.verify(message.progressIndicatorMetadata, _depth + 1);
                    if (error)
                        return "progressIndicatorMetadata." + error;
                }
            }
            if (message.capabilityMetadata != null && $Object.hasOwnProperty.call(message, "capabilityMetadata")) {
                properties._capabilityMetadata = 1;
                {
                    var error = $root.BotMetadata.BotCapabilityMetadata.verify(message.capabilityMetadata, _depth + 1);
                    if (error)
                        return "capabilityMetadata." + error;
                }
            }
            if (message.imagineMetadata != null && $Object.hasOwnProperty.call(message, "imagineMetadata")) {
                properties._imagineMetadata = 1;
                {
                    var error = $root.BotMetadata.BotImagineMetadata.verify(message.imagineMetadata, _depth + 1);
                    if (error)
                        return "imagineMetadata." + error;
                }
            }
            if (message.memoryMetadata != null && $Object.hasOwnProperty.call(message, "memoryMetadata")) {
                properties._memoryMetadata = 1;
                {
                    var error = $root.BotMetadata.BotMemoryMetadata.verify(message.memoryMetadata, _depth + 1);
                    if (error)
                        return "memoryMetadata." + error;
                }
            }
            if (message.renderingMetadata != null && $Object.hasOwnProperty.call(message, "renderingMetadata")) {
                properties._renderingMetadata = 1;
                {
                    var error = $root.BotMetadata.BotRenderingMetadata.verify(message.renderingMetadata, _depth + 1);
                    if (error)
                        return "renderingMetadata." + error;
                }
            }
            if (message.botMetricsMetadata != null && $Object.hasOwnProperty.call(message, "botMetricsMetadata")) {
                properties._botMetricsMetadata = 1;
                {
                    var error = $root.BotMetadata.BotMetricsMetadata.verify(message.botMetricsMetadata, _depth + 1);
                    if (error)
                        return "botMetricsMetadata." + error;
                }
            }
            if (message.botLinkedAccountsMetadata != null && $Object.hasOwnProperty.call(message, "botLinkedAccountsMetadata")) {
                properties._botLinkedAccountsMetadata = 1;
                {
                    var error = $root.BotMetadata.BotLinkedAccountsMetadata.verify(message.botLinkedAccountsMetadata, _depth + 1);
                    if (error)
                        return "botLinkedAccountsMetadata." + error;
                }
            }
            if (message.richResponseSourcesMetadata != null && $Object.hasOwnProperty.call(message, "richResponseSourcesMetadata")) {
                properties._richResponseSourcesMetadata = 1;
                {
                    var error = $root.BotMetadata.BotSourcesMetadata.verify(message.richResponseSourcesMetadata, _depth + 1);
                    if (error)
                        return "richResponseSourcesMetadata." + error;
                }
            }
            if (message.aiConversationContext != null && $Object.hasOwnProperty.call(message, "aiConversationContext")) {
                properties._aiConversationContext = 1;
                if (!(message.aiConversationContext && typeof message.aiConversationContext.length === "number" || $util.isString(message.aiConversationContext)))
                    return "aiConversationContext: buffer expected";
            }
            if (message.botPromotionMessageMetadata != null && $Object.hasOwnProperty.call(message, "botPromotionMessageMetadata")) {
                properties._botPromotionMessageMetadata = 1;
                {
                    var error = $root.BotMetadata.BotPromotionMessageMetadata.verify(message.botPromotionMessageMetadata, _depth + 1);
                    if (error)
                        return "botPromotionMessageMetadata." + error;
                }
            }
            if (message.botModeSelectionMetadata != null && $Object.hasOwnProperty.call(message, "botModeSelectionMetadata")) {
                properties._botModeSelectionMetadata = 1;
                {
                    var error = $root.BotMetadata.BotModeSelectionMetadata.verify(message.botModeSelectionMetadata, _depth + 1);
                    if (error)
                        return "botModeSelectionMetadata." + error;
                }
            }
            if (message.botQuotaMetadata != null && $Object.hasOwnProperty.call(message, "botQuotaMetadata")) {
                properties._botQuotaMetadata = 1;
                {
                    var error = $root.BotMetadata.BotQuotaMetadata.verify(message.botQuotaMetadata, _depth + 1);
                    if (error)
                        return "botQuotaMetadata." + error;
                }
            }
            if (message.botAgeCollectionMetadata != null && $Object.hasOwnProperty.call(message, "botAgeCollectionMetadata")) {
                properties._botAgeCollectionMetadata = 1;
                {
                    var error = $root.BotMetadata.BotAgeCollectionMetadata.verify(message.botAgeCollectionMetadata, _depth + 1);
                    if (error)
                        return "botAgeCollectionMetadata." + error;
                }
            }
            if (message.conversationStarterPromptId != null && $Object.hasOwnProperty.call(message, "conversationStarterPromptId")) {
                properties._conversationStarterPromptId = 1;
                if (!$util.isString(message.conversationStarterPromptId))
                    return "conversationStarterPromptId: string expected";
            }
            if (message.botResponseId != null && $Object.hasOwnProperty.call(message, "botResponseId")) {
                properties._botResponseId = 1;
                if (!$util.isString(message.botResponseId))
                    return "botResponseId: string expected";
            }
            if (message.verificationMetadata != null && $Object.hasOwnProperty.call(message, "verificationMetadata")) {
                properties._verificationMetadata = 1;
                {
                    var error = $root.BotMetadata.BotSignatureVerificationMetadata.verify(message.verificationMetadata, _depth + 1);
                    if (error)
                        return "verificationMetadata." + error;
                }
            }
            if (message.unifiedResponseMutation != null && $Object.hasOwnProperty.call(message, "unifiedResponseMutation")) {
                properties._unifiedResponseMutation = 1;
                {
                    var error = $root.BotMetadata.BotUnifiedResponseMutation.verify(message.unifiedResponseMutation, _depth + 1);
                    if (error)
                        return "unifiedResponseMutation." + error;
                }
            }
            if (message.botMessageOriginMetadata != null && $Object.hasOwnProperty.call(message, "botMessageOriginMetadata")) {
                properties._botMessageOriginMetadata = 1;
                {
                    var error = $root.BotMetadata.BotMessageOriginMetadata.verify(message.botMessageOriginMetadata, _depth + 1);
                    if (error)
                        return "botMessageOriginMetadata." + error;
                }
            }
            if (message.inThreadSurveyMetadata != null && $Object.hasOwnProperty.call(message, "inThreadSurveyMetadata")) {
                properties._inThreadSurveyMetadata = 1;
                {
                    var error = $root.BotMetadata.InThreadSurveyMetadata.verify(message.inThreadSurveyMetadata, _depth + 1);
                    if (error)
                        return "inThreadSurveyMetadata." + error;
                }
            }
            if (message.botThreadInfo != null && $Object.hasOwnProperty.call(message, "botThreadInfo")) {
                properties._botThreadInfo = 1;
                {
                    var error = $root.BotMetadata.AIThreadInfo.verify(message.botThreadInfo, _depth + 1);
                    if (error)
                        return "botThreadInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BotMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotMetadata} BotMetadata
         */
        BotMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotMetadata();
            if (object.avatarMetadata != null) {
                if (!$util.isObject(object.avatarMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.avatarMetadata: object expected");
                message.avatarMetadata = $root.BotMetadata.BotAvatarMetadata.fromObject(object.avatarMetadata, _depth + 1);
            }
            if (object.personaId != null)
                message.personaId = $String(object.personaId);
            if (object.pluginMetadata != null) {
                if (!$util.isObject(object.pluginMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.pluginMetadata: object expected");
                message.pluginMetadata = $root.BotMetadata.BotPluginMetadata.fromObject(object.pluginMetadata, _depth + 1);
            }
            if (object.suggestedPromptMetadata != null) {
                if (!$util.isObject(object.suggestedPromptMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.suggestedPromptMetadata: object expected");
                message.suggestedPromptMetadata = $root.BotMetadata.BotSuggestedPromptMetadata.fromObject(object.suggestedPromptMetadata, _depth + 1);
            }
            if (object.invokerJid != null)
                message.invokerJid = $String(object.invokerJid);
            if (object.sessionMetadata != null) {
                if (!$util.isObject(object.sessionMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.sessionMetadata: object expected");
                message.sessionMetadata = $root.BotMetadata.BotSessionMetadata.fromObject(object.sessionMetadata, _depth + 1);
            }
            if (object.memuMetadata != null) {
                if (!$util.isObject(object.memuMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.memuMetadata: object expected");
                message.memuMetadata = $root.BotMetadata.BotMemuMetadata.fromObject(object.memuMetadata, _depth + 1);
            }
            if (object.timezone != null)
                message.timezone = $String(object.timezone);
            if (object.reminderMetadata != null) {
                if (!$util.isObject(object.reminderMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.reminderMetadata: object expected");
                message.reminderMetadata = $root.BotMetadata.BotReminderMetadata.fromObject(object.reminderMetadata, _depth + 1);
            }
            if (object.modelMetadata != null) {
                if (!$util.isObject(object.modelMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.modelMetadata: object expected");
                message.modelMetadata = $root.BotMetadata.BotModelMetadata.fromObject(object.modelMetadata, _depth + 1);
            }
            if (object.messageDisclaimerText != null)
                message.messageDisclaimerText = $String(object.messageDisclaimerText);
            if (object.progressIndicatorMetadata != null) {
                if (!$util.isObject(object.progressIndicatorMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.progressIndicatorMetadata: object expected");
                message.progressIndicatorMetadata = $root.BotMetadata.BotProgressIndicatorMetadata.fromObject(object.progressIndicatorMetadata, _depth + 1);
            }
            if (object.capabilityMetadata != null) {
                if (!$util.isObject(object.capabilityMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.capabilityMetadata: object expected");
                message.capabilityMetadata = $root.BotMetadata.BotCapabilityMetadata.fromObject(object.capabilityMetadata, _depth + 1);
            }
            if (object.imagineMetadata != null) {
                if (!$util.isObject(object.imagineMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.imagineMetadata: object expected");
                message.imagineMetadata = $root.BotMetadata.BotImagineMetadata.fromObject(object.imagineMetadata, _depth + 1);
            }
            if (object.memoryMetadata != null) {
                if (!$util.isObject(object.memoryMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.memoryMetadata: object expected");
                message.memoryMetadata = $root.BotMetadata.BotMemoryMetadata.fromObject(object.memoryMetadata, _depth + 1);
            }
            if (object.renderingMetadata != null) {
                if (!$util.isObject(object.renderingMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.renderingMetadata: object expected");
                message.renderingMetadata = $root.BotMetadata.BotRenderingMetadata.fromObject(object.renderingMetadata, _depth + 1);
            }
            if (object.botMetricsMetadata != null) {
                if (!$util.isObject(object.botMetricsMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.botMetricsMetadata: object expected");
                message.botMetricsMetadata = $root.BotMetadata.BotMetricsMetadata.fromObject(object.botMetricsMetadata, _depth + 1);
            }
            if (object.botLinkedAccountsMetadata != null) {
                if (!$util.isObject(object.botLinkedAccountsMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.botLinkedAccountsMetadata: object expected");
                message.botLinkedAccountsMetadata = $root.BotMetadata.BotLinkedAccountsMetadata.fromObject(object.botLinkedAccountsMetadata, _depth + 1);
            }
            if (object.richResponseSourcesMetadata != null) {
                if (!$util.isObject(object.richResponseSourcesMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.richResponseSourcesMetadata: object expected");
                message.richResponseSourcesMetadata = $root.BotMetadata.BotSourcesMetadata.fromObject(object.richResponseSourcesMetadata, _depth + 1);
            }
            if (object.aiConversationContext != null)
                if (typeof object.aiConversationContext === "string")
                    $util.base64.decode(object.aiConversationContext, message.aiConversationContext = $util.newBuffer($util.base64.length(object.aiConversationContext)), 0);
                else if (object.aiConversationContext.length >= 0)
                    message.aiConversationContext = object.aiConversationContext;
            if (object.botPromotionMessageMetadata != null) {
                if (!$util.isObject(object.botPromotionMessageMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.botPromotionMessageMetadata: object expected");
                message.botPromotionMessageMetadata = $root.BotMetadata.BotPromotionMessageMetadata.fromObject(object.botPromotionMessageMetadata, _depth + 1);
            }
            if (object.botModeSelectionMetadata != null) {
                if (!$util.isObject(object.botModeSelectionMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.botModeSelectionMetadata: object expected");
                message.botModeSelectionMetadata = $root.BotMetadata.BotModeSelectionMetadata.fromObject(object.botModeSelectionMetadata, _depth + 1);
            }
            if (object.botQuotaMetadata != null) {
                if (!$util.isObject(object.botQuotaMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.botQuotaMetadata: object expected");
                message.botQuotaMetadata = $root.BotMetadata.BotQuotaMetadata.fromObject(object.botQuotaMetadata, _depth + 1);
            }
            if (object.botAgeCollectionMetadata != null) {
                if (!$util.isObject(object.botAgeCollectionMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.botAgeCollectionMetadata: object expected");
                message.botAgeCollectionMetadata = $root.BotMetadata.BotAgeCollectionMetadata.fromObject(object.botAgeCollectionMetadata, _depth + 1);
            }
            if (object.conversationStarterPromptId != null)
                message.conversationStarterPromptId = $String(object.conversationStarterPromptId);
            if (object.botResponseId != null)
                message.botResponseId = $String(object.botResponseId);
            if (object.verificationMetadata != null) {
                if (!$util.isObject(object.verificationMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.verificationMetadata: object expected");
                message.verificationMetadata = $root.BotMetadata.BotSignatureVerificationMetadata.fromObject(object.verificationMetadata, _depth + 1);
            }
            if (object.unifiedResponseMutation != null) {
                if (!$util.isObject(object.unifiedResponseMutation))
                    throw $TypeError(".BotMetadata.BotMetadata.unifiedResponseMutation: object expected");
                message.unifiedResponseMutation = $root.BotMetadata.BotUnifiedResponseMutation.fromObject(object.unifiedResponseMutation, _depth + 1);
            }
            if (object.botMessageOriginMetadata != null) {
                if (!$util.isObject(object.botMessageOriginMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.botMessageOriginMetadata: object expected");
                message.botMessageOriginMetadata = $root.BotMetadata.BotMessageOriginMetadata.fromObject(object.botMessageOriginMetadata, _depth + 1);
            }
            if (object.inThreadSurveyMetadata != null) {
                if (!$util.isObject(object.inThreadSurveyMetadata))
                    throw $TypeError(".BotMetadata.BotMetadata.inThreadSurveyMetadata: object expected");
                message.inThreadSurveyMetadata = $root.BotMetadata.InThreadSurveyMetadata.fromObject(object.inThreadSurveyMetadata, _depth + 1);
            }
            if (object.botThreadInfo != null) {
                if (!$util.isObject(object.botThreadInfo))
                    throw $TypeError(".BotMetadata.BotMetadata.botThreadInfo: object expected");
                message.botThreadInfo = $root.BotMetadata.AIThreadInfo.fromObject(object.botThreadInfo, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a BotMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotMetadata
         * @static
         * @param {BotMetadata.BotMetadata} message BotMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.avatarMetadata != null && $Object.hasOwnProperty.call(message, "avatarMetadata"))
                object.avatarMetadata = $root.BotMetadata.BotAvatarMetadata.toObject(message.avatarMetadata, options, _depth + 1);
            if (message.personaId != null && $Object.hasOwnProperty.call(message, "personaId"))
                object.personaId = message.personaId;
            if (message.pluginMetadata != null && $Object.hasOwnProperty.call(message, "pluginMetadata"))
                object.pluginMetadata = $root.BotMetadata.BotPluginMetadata.toObject(message.pluginMetadata, options, _depth + 1);
            if (message.suggestedPromptMetadata != null && $Object.hasOwnProperty.call(message, "suggestedPromptMetadata"))
                object.suggestedPromptMetadata = $root.BotMetadata.BotSuggestedPromptMetadata.toObject(message.suggestedPromptMetadata, options, _depth + 1);
            if (message.invokerJid != null && $Object.hasOwnProperty.call(message, "invokerJid"))
                object.invokerJid = message.invokerJid;
            if (message.sessionMetadata != null && $Object.hasOwnProperty.call(message, "sessionMetadata"))
                object.sessionMetadata = $root.BotMetadata.BotSessionMetadata.toObject(message.sessionMetadata, options, _depth + 1);
            if (message.memuMetadata != null && $Object.hasOwnProperty.call(message, "memuMetadata"))
                object.memuMetadata = $root.BotMetadata.BotMemuMetadata.toObject(message.memuMetadata, options, _depth + 1);
            if (message.timezone != null && $Object.hasOwnProperty.call(message, "timezone"))
                object.timezone = message.timezone;
            if (message.reminderMetadata != null && $Object.hasOwnProperty.call(message, "reminderMetadata"))
                object.reminderMetadata = $root.BotMetadata.BotReminderMetadata.toObject(message.reminderMetadata, options, _depth + 1);
            if (message.modelMetadata != null && $Object.hasOwnProperty.call(message, "modelMetadata"))
                object.modelMetadata = $root.BotMetadata.BotModelMetadata.toObject(message.modelMetadata, options, _depth + 1);
            if (message.messageDisclaimerText != null && $Object.hasOwnProperty.call(message, "messageDisclaimerText"))
                object.messageDisclaimerText = message.messageDisclaimerText;
            if (message.progressIndicatorMetadata != null && $Object.hasOwnProperty.call(message, "progressIndicatorMetadata"))
                object.progressIndicatorMetadata = $root.BotMetadata.BotProgressIndicatorMetadata.toObject(message.progressIndicatorMetadata, options, _depth + 1);
            if (message.capabilityMetadata != null && $Object.hasOwnProperty.call(message, "capabilityMetadata"))
                object.capabilityMetadata = $root.BotMetadata.BotCapabilityMetadata.toObject(message.capabilityMetadata, options, _depth + 1);
            if (message.imagineMetadata != null && $Object.hasOwnProperty.call(message, "imagineMetadata"))
                object.imagineMetadata = $root.BotMetadata.BotImagineMetadata.toObject(message.imagineMetadata, options, _depth + 1);
            if (message.memoryMetadata != null && $Object.hasOwnProperty.call(message, "memoryMetadata"))
                object.memoryMetadata = $root.BotMetadata.BotMemoryMetadata.toObject(message.memoryMetadata, options, _depth + 1);
            if (message.renderingMetadata != null && $Object.hasOwnProperty.call(message, "renderingMetadata"))
                object.renderingMetadata = $root.BotMetadata.BotRenderingMetadata.toObject(message.renderingMetadata, options, _depth + 1);
            if (message.botMetricsMetadata != null && $Object.hasOwnProperty.call(message, "botMetricsMetadata"))
                object.botMetricsMetadata = $root.BotMetadata.BotMetricsMetadata.toObject(message.botMetricsMetadata, options, _depth + 1);
            if (message.botLinkedAccountsMetadata != null && $Object.hasOwnProperty.call(message, "botLinkedAccountsMetadata"))
                object.botLinkedAccountsMetadata = $root.BotMetadata.BotLinkedAccountsMetadata.toObject(message.botLinkedAccountsMetadata, options, _depth + 1);
            if (message.richResponseSourcesMetadata != null && $Object.hasOwnProperty.call(message, "richResponseSourcesMetadata"))
                object.richResponseSourcesMetadata = $root.BotMetadata.BotSourcesMetadata.toObject(message.richResponseSourcesMetadata, options, _depth + 1);
            if (message.aiConversationContext != null && $Object.hasOwnProperty.call(message, "aiConversationContext"))
                object.aiConversationContext = options.bytes === $String ? $util.base64.encode(message.aiConversationContext, 0, message.aiConversationContext.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.aiConversationContext) : message.aiConversationContext;
            if (message.botPromotionMessageMetadata != null && $Object.hasOwnProperty.call(message, "botPromotionMessageMetadata"))
                object.botPromotionMessageMetadata = $root.BotMetadata.BotPromotionMessageMetadata.toObject(message.botPromotionMessageMetadata, options, _depth + 1);
            if (message.botModeSelectionMetadata != null && $Object.hasOwnProperty.call(message, "botModeSelectionMetadata"))
                object.botModeSelectionMetadata = $root.BotMetadata.BotModeSelectionMetadata.toObject(message.botModeSelectionMetadata, options, _depth + 1);
            if (message.botQuotaMetadata != null && $Object.hasOwnProperty.call(message, "botQuotaMetadata"))
                object.botQuotaMetadata = $root.BotMetadata.BotQuotaMetadata.toObject(message.botQuotaMetadata, options, _depth + 1);
            if (message.botAgeCollectionMetadata != null && $Object.hasOwnProperty.call(message, "botAgeCollectionMetadata"))
                object.botAgeCollectionMetadata = $root.BotMetadata.BotAgeCollectionMetadata.toObject(message.botAgeCollectionMetadata, options, _depth + 1);
            if (message.conversationStarterPromptId != null && $Object.hasOwnProperty.call(message, "conversationStarterPromptId"))
                object.conversationStarterPromptId = message.conversationStarterPromptId;
            if (message.botResponseId != null && $Object.hasOwnProperty.call(message, "botResponseId"))
                object.botResponseId = message.botResponseId;
            if (message.verificationMetadata != null && $Object.hasOwnProperty.call(message, "verificationMetadata"))
                object.verificationMetadata = $root.BotMetadata.BotSignatureVerificationMetadata.toObject(message.verificationMetadata, options, _depth + 1);
            if (message.unifiedResponseMutation != null && $Object.hasOwnProperty.call(message, "unifiedResponseMutation"))
                object.unifiedResponseMutation = $root.BotMetadata.BotUnifiedResponseMutation.toObject(message.unifiedResponseMutation, options, _depth + 1);
            if (message.botMessageOriginMetadata != null && $Object.hasOwnProperty.call(message, "botMessageOriginMetadata"))
                object.botMessageOriginMetadata = $root.BotMetadata.BotMessageOriginMetadata.toObject(message.botMessageOriginMetadata, options, _depth + 1);
            if (message.inThreadSurveyMetadata != null && $Object.hasOwnProperty.call(message, "inThreadSurveyMetadata"))
                object.inThreadSurveyMetadata = $root.BotMetadata.InThreadSurveyMetadata.toObject(message.inThreadSurveyMetadata, options, _depth + 1);
            if (message.botThreadInfo != null && $Object.hasOwnProperty.call(message, "botThreadInfo"))
                object.botThreadInfo = $root.BotMetadata.AIThreadInfo.toObject(message.botThreadInfo, options, _depth + 1);
            return object;
        };

        /**
         * Converts this BotMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotMetadata.prototype.toJSON = function() {
            return BotMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotMetadata";
        };

        return BotMetadata;
    })();

    BotMetadata.AIThreadInfo = (function() {

        /**
         * Properties of a AIThreadInfo.
         * @typedef {Object} BotMetadata.AIThreadInfo.$Properties
         * @property {BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties|null} [serverInfo] AIThreadInfo serverInfo
         * @property {BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties|null} [clientInfo] AIThreadInfo clientInfo
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a AIThreadInfo.
         * @memberof BotMetadata
         * @interface IAIThreadInfo
         * @augments BotMetadata.AIThreadInfo.$Properties
         * @deprecated Use BotMetadata.AIThreadInfo.$Properties instead.
         */

        /**
         * Shape of a AIThreadInfo.
         * @typedef {BotMetadata.AIThreadInfo.$Properties} BotMetadata.AIThreadInfo.$Shape
         */

        /**
         * Constructs a new AIThreadInfo.
         * @memberof BotMetadata
         * @classdesc Represents a AIThreadInfo.
         * @constructor
         * @param {BotMetadata.AIThreadInfo.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var AIThreadInfo = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * AIThreadInfo serverInfo.
         * @member {BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties|null|undefined} serverInfo
         * @memberof BotMetadata.AIThreadInfo
         * @instance
         */
        AIThreadInfo.prototype.serverInfo = null;

        /**
         * AIThreadInfo clientInfo.
         * @member {BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties|null|undefined} clientInfo
         * @memberof BotMetadata.AIThreadInfo
         * @instance
         */
        AIThreadInfo.prototype.clientInfo = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AIThreadInfo.prototype, "_serverInfo", {
            get: $util.oneOfGetter($oneOfFields = ["serverInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AIThreadInfo.prototype, "_clientInfo", {
            get: $util.oneOfGetter($oneOfFields = ["clientInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AIThreadInfo instance using the specified properties.
         * @function create
         * @memberof BotMetadata.AIThreadInfo
         * @static
         * @param {BotMetadata.AIThreadInfo.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.AIThreadInfo} AIThreadInfo instance
         * @type {{
         *   (properties: BotMetadata.AIThreadInfo.$Shape): BotMetadata.AIThreadInfo & BotMetadata.AIThreadInfo.$Shape;
         *   (properties?: BotMetadata.AIThreadInfo.$Properties): BotMetadata.AIThreadInfo;
         * }}
         */
        AIThreadInfo.create = function(properties) {
            return new AIThreadInfo(properties);
        };

        /**
         * Encodes the specified AIThreadInfo message. Does not implicitly {@link BotMetadata.AIThreadInfo.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.AIThreadInfo
         * @static
         * @param {BotMetadata.AIThreadInfo.$Properties} message AIThreadInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIThreadInfo.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.serverInfo != null && $Object.hasOwnProperty.call(message, "serverInfo"))
                $root.BotMetadata.AIThreadInfo.AIThreadServerInfo.encode(message.serverInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.clientInfo != null && $Object.hasOwnProperty.call(message, "clientInfo"))
                $root.BotMetadata.AIThreadInfo.AIThreadClientInfo.encode(message.clientInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AIThreadInfo message, length delimited. Does not implicitly {@link BotMetadata.AIThreadInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.AIThreadInfo
         * @static
         * @param {BotMetadata.AIThreadInfo.$Properties} message AIThreadInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIThreadInfo.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a AIThreadInfo message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.AIThreadInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.AIThreadInfo & BotMetadata.AIThreadInfo.$Shape} AIThreadInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIThreadInfo.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.AIThreadInfo();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.serverInfo = $root.BotMetadata.AIThreadInfo.AIThreadServerInfo.decode(reader, reader.size(), $undefined, _depth + 1, message.serverInfo);
                        message._serverInfo = "serverInfo";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.clientInfo = $root.BotMetadata.AIThreadInfo.AIThreadClientInfo.decode(reader, reader.size(), $undefined, _depth + 1, message.clientInfo);
                        message._clientInfo = "clientInfo";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a AIThreadInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.AIThreadInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.AIThreadInfo & BotMetadata.AIThreadInfo.$Shape} AIThreadInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIThreadInfo.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a AIThreadInfo message.
         * @function verify
         * @memberof BotMetadata.AIThreadInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AIThreadInfo.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.serverInfo != null && $Object.hasOwnProperty.call(message, "serverInfo")) {
                properties._serverInfo = 1;
                {
                    var error = $root.BotMetadata.AIThreadInfo.AIThreadServerInfo.verify(message.serverInfo, _depth + 1);
                    if (error)
                        return "serverInfo." + error;
                }
            }
            if (message.clientInfo != null && $Object.hasOwnProperty.call(message, "clientInfo")) {
                properties._clientInfo = 1;
                {
                    var error = $root.BotMetadata.AIThreadInfo.AIThreadClientInfo.verify(message.clientInfo, _depth + 1);
                    if (error)
                        return "clientInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a AIThreadInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.AIThreadInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.AIThreadInfo} AIThreadInfo
         */
        AIThreadInfo.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.AIThreadInfo)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.AIThreadInfo: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.AIThreadInfo();
            if (object.serverInfo != null) {
                if (!$util.isObject(object.serverInfo))
                    throw $TypeError(".BotMetadata.AIThreadInfo.serverInfo: object expected");
                message.serverInfo = $root.BotMetadata.AIThreadInfo.AIThreadServerInfo.fromObject(object.serverInfo, _depth + 1);
            }
            if (object.clientInfo != null) {
                if (!$util.isObject(object.clientInfo))
                    throw $TypeError(".BotMetadata.AIThreadInfo.clientInfo: object expected");
                message.clientInfo = $root.BotMetadata.AIThreadInfo.AIThreadClientInfo.fromObject(object.clientInfo, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a AIThreadInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.AIThreadInfo
         * @static
         * @param {BotMetadata.AIThreadInfo} message AIThreadInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AIThreadInfo.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.serverInfo != null && $Object.hasOwnProperty.call(message, "serverInfo"))
                object.serverInfo = $root.BotMetadata.AIThreadInfo.AIThreadServerInfo.toObject(message.serverInfo, options, _depth + 1);
            if (message.clientInfo != null && $Object.hasOwnProperty.call(message, "clientInfo"))
                object.clientInfo = $root.BotMetadata.AIThreadInfo.AIThreadClientInfo.toObject(message.clientInfo, options, _depth + 1);
            return object;
        };

        /**
         * Converts this AIThreadInfo to JSON.
         * @function toJSON
         * @memberof BotMetadata.AIThreadInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AIThreadInfo.prototype.toJSON = function() {
            return AIThreadInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AIThreadInfo
         * @function getTypeUrl
         * @memberof BotMetadata.AIThreadInfo
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AIThreadInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.AIThreadInfo";
        };

        AIThreadInfo.AIThreadClientInfo = (function() {

            /**
             * Properties of a AIThreadClientInfo.
             * @typedef {Object} BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties
             * @property {BotMetadata.AIThreadInfo.AIThreadClientInfo.AIThreadType|null} [type] AIThreadClientInfo type
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a AIThreadClientInfo.
             * @memberof BotMetadata.AIThreadInfo
             * @interface IAIThreadClientInfo
             * @augments BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties
             * @deprecated Use BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties instead.
             */

            /**
             * Shape of a AIThreadClientInfo.
             * @typedef {BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties} BotMetadata.AIThreadInfo.AIThreadClientInfo.$Shape
             */

            /**
             * Constructs a new AIThreadClientInfo.
             * @memberof BotMetadata.AIThreadInfo
             * @classdesc Represents a AIThreadClientInfo.
             * @constructor
             * @param {BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var AIThreadClientInfo = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * AIThreadClientInfo type.
             * @member {BotMetadata.AIThreadInfo.AIThreadClientInfo.AIThreadType|null|undefined} type
             * @memberof BotMetadata.AIThreadInfo.AIThreadClientInfo
             * @instance
             */
            AIThreadClientInfo.prototype.type = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AIThreadClientInfo.prototype, "_type", {
                get: $util.oneOfGetter($oneOfFields = ["type"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AIThreadClientInfo instance using the specified properties.
             * @function create
             * @memberof BotMetadata.AIThreadInfo.AIThreadClientInfo
             * @static
             * @param {BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties=} [properties] Properties to set
             * @returns {BotMetadata.AIThreadInfo.AIThreadClientInfo} AIThreadClientInfo instance
             * @type {{
             *   (properties: BotMetadata.AIThreadInfo.AIThreadClientInfo.$Shape): BotMetadata.AIThreadInfo.AIThreadClientInfo & BotMetadata.AIThreadInfo.AIThreadClientInfo.$Shape;
             *   (properties?: BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties): BotMetadata.AIThreadInfo.AIThreadClientInfo;
             * }}
             */
            AIThreadClientInfo.create = function(properties) {
                return new AIThreadClientInfo(properties);
            };

            /**
             * Encodes the specified AIThreadClientInfo message. Does not implicitly {@link BotMetadata.AIThreadInfo.AIThreadClientInfo.verify|verify} messages.
             * @function encode
             * @memberof BotMetadata.AIThreadInfo.AIThreadClientInfo
             * @static
             * @param {BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties} message AIThreadClientInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIThreadClientInfo.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AIThreadClientInfo message, length delimited. Does not implicitly {@link BotMetadata.AIThreadInfo.AIThreadClientInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BotMetadata.AIThreadInfo.AIThreadClientInfo
             * @static
             * @param {BotMetadata.AIThreadInfo.AIThreadClientInfo.$Properties} message AIThreadClientInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIThreadClientInfo.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a AIThreadClientInfo message from the specified reader or buffer.
             * @function decode
             * @memberof BotMetadata.AIThreadInfo.AIThreadClientInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BotMetadata.AIThreadInfo.AIThreadClientInfo & BotMetadata.AIThreadInfo.AIThreadClientInfo.$Shape} AIThreadClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIThreadClientInfo.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.BotMetadata.AIThreadInfo.AIThreadClientInfo();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.type = reader.int32();
                            message._type = "type";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a AIThreadClientInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BotMetadata.AIThreadInfo.AIThreadClientInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BotMetadata.AIThreadInfo.AIThreadClientInfo & BotMetadata.AIThreadInfo.AIThreadClientInfo.$Shape} AIThreadClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIThreadClientInfo.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.size());
            };

            /**
             * Verifies a AIThreadClientInfo message.
             * @function verify
             * @memberof BotMetadata.AIThreadInfo.AIThreadClientInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AIThreadClientInfo.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.type != null && $Object.hasOwnProperty.call(message, "type")) {
                    properties._type = 1;
                    if (typeof message.type !== "number" || (message.type | 0) !== message.type)
                        return "type: enum value expected";
                }
                return null;
            };

            /**
             * Creates a AIThreadClientInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BotMetadata.AIThreadInfo.AIThreadClientInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BotMetadata.AIThreadInfo.AIThreadClientInfo} AIThreadClientInfo
             */
            AIThreadClientInfo.fromObject = function (object, _depth) {
                if (object instanceof $root.BotMetadata.AIThreadInfo.AIThreadClientInfo)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BotMetadata.AIThreadInfo.AIThreadClientInfo: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.BotMetadata.AIThreadInfo.AIThreadClientInfo();
                switch (object.type) {
                case "UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "DEFAULT":
                case 1:
                    message.type = 1;
                    break;
                case "INCOGNITO":
                case 2:
                    message.type = 2;
                    break;
                default:
                    if (typeof object.type === "number" && (object.type | 0) === object.type)
                        message.type = object.type;
                }
                return message;
            };

            /**
             * Creates a plain object from a AIThreadClientInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BotMetadata.AIThreadInfo.AIThreadClientInfo
             * @static
             * @param {BotMetadata.AIThreadInfo.AIThreadClientInfo} message AIThreadClientInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AIThreadClientInfo.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                    object.type = options.enums === $String ? $root.BotMetadata.AIThreadInfo.AIThreadClientInfo.AIThreadType[message.type] === $undefined ? message.type : $root.BotMetadata.AIThreadInfo.AIThreadClientInfo.AIThreadType[message.type] : message.type;
                return object;
            };

            /**
             * Converts this AIThreadClientInfo to JSON.
             * @function toJSON
             * @memberof BotMetadata.AIThreadInfo.AIThreadClientInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AIThreadClientInfo.prototype.toJSON = function() {
                return AIThreadClientInfo.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AIThreadClientInfo
             * @function getTypeUrl
             * @memberof BotMetadata.AIThreadInfo.AIThreadClientInfo
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AIThreadClientInfo.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BotMetadata.AIThreadInfo.AIThreadClientInfo";
            };

            /**
             * AIThreadType enum.
             * @name BotMetadata.AIThreadInfo.AIThreadClientInfo.AIThreadType
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} DEFAULT=1 DEFAULT value
             * @property {number} INCOGNITO=2 INCOGNITO value
             */
            AIThreadClientInfo.AIThreadType = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "DEFAULT"] = 1;
                values[valuesById[2] = "INCOGNITO"] = 2;
                return values;
            })();

            return AIThreadClientInfo;
        })();

        AIThreadInfo.AIThreadServerInfo = (function() {

            /**
             * Properties of a AIThreadServerInfo.
             * @typedef {Object} BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties
             * @property {string|null} [title] AIThreadServerInfo title
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a AIThreadServerInfo.
             * @memberof BotMetadata.AIThreadInfo
             * @interface IAIThreadServerInfo
             * @augments BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties
             * @deprecated Use BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties instead.
             */

            /**
             * Shape of a AIThreadServerInfo.
             * @typedef {BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties} BotMetadata.AIThreadInfo.AIThreadServerInfo.$Shape
             */

            /**
             * Constructs a new AIThreadServerInfo.
             * @memberof BotMetadata.AIThreadInfo
             * @classdesc Represents a AIThreadServerInfo.
             * @constructor
             * @param {BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var AIThreadServerInfo = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * AIThreadServerInfo title.
             * @member {string|null|undefined} title
             * @memberof BotMetadata.AIThreadInfo.AIThreadServerInfo
             * @instance
             */
            AIThreadServerInfo.prototype.title = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AIThreadServerInfo.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AIThreadServerInfo instance using the specified properties.
             * @function create
             * @memberof BotMetadata.AIThreadInfo.AIThreadServerInfo
             * @static
             * @param {BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties=} [properties] Properties to set
             * @returns {BotMetadata.AIThreadInfo.AIThreadServerInfo} AIThreadServerInfo instance
             * @type {{
             *   (properties: BotMetadata.AIThreadInfo.AIThreadServerInfo.$Shape): BotMetadata.AIThreadInfo.AIThreadServerInfo & BotMetadata.AIThreadInfo.AIThreadServerInfo.$Shape;
             *   (properties?: BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties): BotMetadata.AIThreadInfo.AIThreadServerInfo;
             * }}
             */
            AIThreadServerInfo.create = function(properties) {
                return new AIThreadServerInfo(properties);
            };

            /**
             * Encodes the specified AIThreadServerInfo message. Does not implicitly {@link BotMetadata.AIThreadInfo.AIThreadServerInfo.verify|verify} messages.
             * @function encode
             * @memberof BotMetadata.AIThreadInfo.AIThreadServerInfo
             * @static
             * @param {BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties} message AIThreadServerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIThreadServerInfo.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AIThreadServerInfo message, length delimited. Does not implicitly {@link BotMetadata.AIThreadInfo.AIThreadServerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BotMetadata.AIThreadInfo.AIThreadServerInfo
             * @static
             * @param {BotMetadata.AIThreadInfo.AIThreadServerInfo.$Properties} message AIThreadServerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIThreadServerInfo.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a AIThreadServerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof BotMetadata.AIThreadInfo.AIThreadServerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BotMetadata.AIThreadInfo.AIThreadServerInfo & BotMetadata.AIThreadInfo.AIThreadServerInfo.$Shape} AIThreadServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIThreadServerInfo.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.BotMetadata.AIThreadInfo.AIThreadServerInfo();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.title = reader.stringVerify();
                            message._title = "title";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a AIThreadServerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BotMetadata.AIThreadInfo.AIThreadServerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BotMetadata.AIThreadInfo.AIThreadServerInfo & BotMetadata.AIThreadInfo.AIThreadServerInfo.$Shape} AIThreadServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIThreadServerInfo.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.size());
            };

            /**
             * Verifies a AIThreadServerInfo message.
             * @function verify
             * @memberof BotMetadata.AIThreadInfo.AIThreadServerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AIThreadServerInfo.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.title != null && $Object.hasOwnProperty.call(message, "title")) {
                    properties._title = 1;
                    if (!$util.isString(message.title))
                        return "title: string expected";
                }
                return null;
            };

            /**
             * Creates a AIThreadServerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BotMetadata.AIThreadInfo.AIThreadServerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BotMetadata.AIThreadInfo.AIThreadServerInfo} AIThreadServerInfo
             */
            AIThreadServerInfo.fromObject = function (object, _depth) {
                if (object instanceof $root.BotMetadata.AIThreadInfo.AIThreadServerInfo)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BotMetadata.AIThreadInfo.AIThreadServerInfo: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.BotMetadata.AIThreadInfo.AIThreadServerInfo();
                if (object.title != null)
                    message.title = $String(object.title);
                return message;
            };

            /**
             * Creates a plain object from a AIThreadServerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BotMetadata.AIThreadInfo.AIThreadServerInfo
             * @static
             * @param {BotMetadata.AIThreadInfo.AIThreadServerInfo} message AIThreadServerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AIThreadServerInfo.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    object.title = message.title;
                return object;
            };

            /**
             * Converts this AIThreadServerInfo to JSON.
             * @function toJSON
             * @memberof BotMetadata.AIThreadInfo.AIThreadServerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AIThreadServerInfo.prototype.toJSON = function() {
                return AIThreadServerInfo.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AIThreadServerInfo
             * @function getTypeUrl
             * @memberof BotMetadata.AIThreadInfo.AIThreadServerInfo
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AIThreadServerInfo.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BotMetadata.AIThreadInfo.AIThreadServerInfo";
            };

            return AIThreadServerInfo;
        })();

        return AIThreadInfo;
    })();

    BotMetadata.BotUnifiedResponseMutation = (function() {

        /**
         * Properties of a BotUnifiedResponseMutation.
         * @typedef {Object} BotMetadata.BotUnifiedResponseMutation.$Properties
         * @property {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties|null} [sbsMetadata] BotUnifiedResponseMutation sbsMetadata
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotUnifiedResponseMutation.
         * @memberof BotMetadata
         * @interface IBotUnifiedResponseMutation
         * @augments BotMetadata.BotUnifiedResponseMutation.$Properties
         * @deprecated Use BotMetadata.BotUnifiedResponseMutation.$Properties instead.
         */

        /**
         * Shape of a BotUnifiedResponseMutation.
         * @typedef {BotMetadata.BotUnifiedResponseMutation.$Properties} BotMetadata.BotUnifiedResponseMutation.$Shape
         */

        /**
         * Constructs a new BotUnifiedResponseMutation.
         * @memberof BotMetadata
         * @classdesc Represents a BotUnifiedResponseMutation.
         * @constructor
         * @param {BotMetadata.BotUnifiedResponseMutation.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotUnifiedResponseMutation = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotUnifiedResponseMutation sbsMetadata.
         * @member {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties|null|undefined} sbsMetadata
         * @memberof BotMetadata.BotUnifiedResponseMutation
         * @instance
         */
        BotUnifiedResponseMutation.prototype.sbsMetadata = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotUnifiedResponseMutation.prototype, "_sbsMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["sbsMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotUnifiedResponseMutation instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotUnifiedResponseMutation
         * @static
         * @param {BotMetadata.BotUnifiedResponseMutation.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotUnifiedResponseMutation} BotUnifiedResponseMutation instance
         * @type {{
         *   (properties: BotMetadata.BotUnifiedResponseMutation.$Shape): BotMetadata.BotUnifiedResponseMutation & BotMetadata.BotUnifiedResponseMutation.$Shape;
         *   (properties?: BotMetadata.BotUnifiedResponseMutation.$Properties): BotMetadata.BotUnifiedResponseMutation;
         * }}
         */
        BotUnifiedResponseMutation.create = function(properties) {
            return new BotUnifiedResponseMutation(properties);
        };

        /**
         * Encodes the specified BotUnifiedResponseMutation message. Does not implicitly {@link BotMetadata.BotUnifiedResponseMutation.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotUnifiedResponseMutation
         * @static
         * @param {BotMetadata.BotUnifiedResponseMutation.$Properties} message BotUnifiedResponseMutation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotUnifiedResponseMutation.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.sbsMetadata != null && $Object.hasOwnProperty.call(message, "sbsMetadata"))
                $root.BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.encode(message.sbsMetadata, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotUnifiedResponseMutation message, length delimited. Does not implicitly {@link BotMetadata.BotUnifiedResponseMutation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotUnifiedResponseMutation
         * @static
         * @param {BotMetadata.BotUnifiedResponseMutation.$Properties} message BotUnifiedResponseMutation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotUnifiedResponseMutation.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotUnifiedResponseMutation message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotUnifiedResponseMutation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotUnifiedResponseMutation & BotMetadata.BotUnifiedResponseMutation.$Shape} BotUnifiedResponseMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotUnifiedResponseMutation.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotUnifiedResponseMutation();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.sbsMetadata = $root.BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.decode(reader, reader.size(), $undefined, _depth + 1, message.sbsMetadata);
                        message._sbsMetadata = "sbsMetadata";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotUnifiedResponseMutation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotUnifiedResponseMutation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotUnifiedResponseMutation & BotMetadata.BotUnifiedResponseMutation.$Shape} BotUnifiedResponseMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotUnifiedResponseMutation.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotUnifiedResponseMutation message.
         * @function verify
         * @memberof BotMetadata.BotUnifiedResponseMutation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotUnifiedResponseMutation.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.sbsMetadata != null && $Object.hasOwnProperty.call(message, "sbsMetadata")) {
                properties._sbsMetadata = 1;
                {
                    var error = $root.BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.verify(message.sbsMetadata, _depth + 1);
                    if (error)
                        return "sbsMetadata." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BotUnifiedResponseMutation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotUnifiedResponseMutation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotUnifiedResponseMutation} BotUnifiedResponseMutation
         */
        BotUnifiedResponseMutation.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotUnifiedResponseMutation)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotUnifiedResponseMutation: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotUnifiedResponseMutation();
            if (object.sbsMetadata != null) {
                if (!$util.isObject(object.sbsMetadata))
                    throw $TypeError(".BotMetadata.BotUnifiedResponseMutation.sbsMetadata: object expected");
                message.sbsMetadata = $root.BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.fromObject(object.sbsMetadata, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a BotUnifiedResponseMutation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotUnifiedResponseMutation
         * @static
         * @param {BotMetadata.BotUnifiedResponseMutation} message BotUnifiedResponseMutation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotUnifiedResponseMutation.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.sbsMetadata != null && $Object.hasOwnProperty.call(message, "sbsMetadata"))
                object.sbsMetadata = $root.BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.toObject(message.sbsMetadata, options, _depth + 1);
            return object;
        };

        /**
         * Converts this BotUnifiedResponseMutation to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotUnifiedResponseMutation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotUnifiedResponseMutation.prototype.toJSON = function() {
            return BotUnifiedResponseMutation.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotUnifiedResponseMutation
         * @function getTypeUrl
         * @memberof BotMetadata.BotUnifiedResponseMutation
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotUnifiedResponseMutation.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotUnifiedResponseMutation";
        };

        BotUnifiedResponseMutation.SideBySideMetadata = (function() {

            /**
             * Properties of a SideBySideMetadata.
             * @typedef {Object} BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties
             * @property {string|null} [primaryResponseId] SideBySideMetadata primaryResponseId
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SideBySideMetadata.
             * @memberof BotMetadata.BotUnifiedResponseMutation
             * @interface ISideBySideMetadata
             * @augments BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties
             * @deprecated Use BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties instead.
             */

            /**
             * Shape of a SideBySideMetadata.
             * @typedef {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties} BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Shape
             */

            /**
             * Constructs a new SideBySideMetadata.
             * @memberof BotMetadata.BotUnifiedResponseMutation
             * @classdesc Represents a SideBySideMetadata.
             * @constructor
             * @param {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var SideBySideMetadata = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SideBySideMetadata primaryResponseId.
             * @member {string|null|undefined} primaryResponseId
             * @memberof BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata
             * @instance
             */
            SideBySideMetadata.prototype.primaryResponseId = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(SideBySideMetadata.prototype, "_primaryResponseId", {
                get: $util.oneOfGetter($oneOfFields = ["primaryResponseId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SideBySideMetadata instance using the specified properties.
             * @function create
             * @memberof BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata
             * @static
             * @param {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties=} [properties] Properties to set
             * @returns {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata} SideBySideMetadata instance
             * @type {{
             *   (properties: BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Shape): BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata & BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Shape;
             *   (properties?: BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties): BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata;
             * }}
             */
            SideBySideMetadata.create = function(properties) {
                return new SideBySideMetadata(properties);
            };

            /**
             * Encodes the specified SideBySideMetadata message. Does not implicitly {@link BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.verify|verify} messages.
             * @function encode
             * @memberof BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata
             * @static
             * @param {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties} message SideBySideMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SideBySideMetadata.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.primaryResponseId != null && $Object.hasOwnProperty.call(message, "primaryResponseId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.primaryResponseId);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SideBySideMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata
             * @static
             * @param {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Properties} message SideBySideMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SideBySideMetadata.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SideBySideMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata & BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Shape} SideBySideMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SideBySideMetadata.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.primaryResponseId = reader.stringVerify();
                            message._primaryResponseId = "primaryResponseId";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a SideBySideMetadata message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata & BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata.$Shape} SideBySideMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SideBySideMetadata.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.size());
            };

            /**
             * Verifies a SideBySideMetadata message.
             * @function verify
             * @memberof BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SideBySideMetadata.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.primaryResponseId != null && $Object.hasOwnProperty.call(message, "primaryResponseId")) {
                    properties._primaryResponseId = 1;
                    if (!$util.isString(message.primaryResponseId))
                        return "primaryResponseId: string expected";
                }
                return null;
            };

            /**
             * Creates a SideBySideMetadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata} SideBySideMetadata
             */
            SideBySideMetadata.fromObject = function (object, _depth) {
                if (object instanceof $root.BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata();
                if (object.primaryResponseId != null)
                    message.primaryResponseId = $String(object.primaryResponseId);
                return message;
            };

            /**
             * Creates a plain object from a SideBySideMetadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata
             * @static
             * @param {BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata} message SideBySideMetadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SideBySideMetadata.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.primaryResponseId != null && $Object.hasOwnProperty.call(message, "primaryResponseId"))
                    object.primaryResponseId = message.primaryResponseId;
                return object;
            };

            /**
             * Converts this SideBySideMetadata to JSON.
             * @function toJSON
             * @memberof BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SideBySideMetadata.prototype.toJSON = function() {
                return SideBySideMetadata.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SideBySideMetadata
             * @function getTypeUrl
             * @memberof BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SideBySideMetadata.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BotMetadata.BotUnifiedResponseMutation.SideBySideMetadata";
            };

            return SideBySideMetadata;
        })();

        return BotUnifiedResponseMutation;
    })();

    BotMetadata.BotMessageOrigin = (function() {

        /**
         * Properties of a BotMessageOrigin.
         * @typedef {Object} BotMetadata.BotMessageOrigin.$Properties
         * @property {BotMetadata.BotMessageOrigin.BotMessageOriginType|null} [type] BotMessageOrigin type
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotMessageOrigin.
         * @memberof BotMetadata
         * @interface IBotMessageOrigin
         * @augments BotMetadata.BotMessageOrigin.$Properties
         * @deprecated Use BotMetadata.BotMessageOrigin.$Properties instead.
         */

        /**
         * Shape of a BotMessageOrigin.
         * @typedef {BotMetadata.BotMessageOrigin.$Properties} BotMetadata.BotMessageOrigin.$Shape
         */

        /**
         * Constructs a new BotMessageOrigin.
         * @memberof BotMetadata
         * @classdesc Represents a BotMessageOrigin.
         * @constructor
         * @param {BotMetadata.BotMessageOrigin.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotMessageOrigin = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotMessageOrigin type.
         * @member {BotMetadata.BotMessageOrigin.BotMessageOriginType|null|undefined} type
         * @memberof BotMetadata.BotMessageOrigin
         * @instance
         */
        BotMessageOrigin.prototype.type = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMessageOrigin.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotMessageOrigin instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotMessageOrigin
         * @static
         * @param {BotMetadata.BotMessageOrigin.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotMessageOrigin} BotMessageOrigin instance
         * @type {{
         *   (properties: BotMetadata.BotMessageOrigin.$Shape): BotMetadata.BotMessageOrigin & BotMetadata.BotMessageOrigin.$Shape;
         *   (properties?: BotMetadata.BotMessageOrigin.$Properties): BotMetadata.BotMessageOrigin;
         * }}
         */
        BotMessageOrigin.create = function(properties) {
            return new BotMessageOrigin(properties);
        };

        /**
         * Encodes the specified BotMessageOrigin message. Does not implicitly {@link BotMetadata.BotMessageOrigin.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotMessageOrigin
         * @static
         * @param {BotMetadata.BotMessageOrigin.$Properties} message BotMessageOrigin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMessageOrigin.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotMessageOrigin message, length delimited. Does not implicitly {@link BotMetadata.BotMessageOrigin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotMessageOrigin
         * @static
         * @param {BotMetadata.BotMessageOrigin.$Properties} message BotMessageOrigin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMessageOrigin.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotMessageOrigin message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotMessageOrigin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotMessageOrigin & BotMetadata.BotMessageOrigin.$Shape} BotMessageOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMessageOrigin.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotMessageOrigin();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.type = reader.int32();
                        message._type = "type";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotMessageOrigin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotMessageOrigin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMessageOrigin & BotMetadata.BotMessageOrigin.$Shape} BotMessageOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMessageOrigin.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotMessageOrigin message.
         * @function verify
         * @memberof BotMetadata.BotMessageOrigin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotMessageOrigin.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.type != null && $Object.hasOwnProperty.call(message, "type")) {
                properties._type = 1;
                if (typeof message.type !== "number" || (message.type | 0) !== message.type)
                    return "type: enum value expected";
            }
            return null;
        };

        /**
         * Creates a BotMessageOrigin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotMessageOrigin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotMessageOrigin} BotMessageOrigin
         */
        BotMessageOrigin.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotMessageOrigin)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotMessageOrigin: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotMessageOrigin();
            switch (object.type) {
            case "BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED":
            case 0:
                message.type = 0;
                break;
            default:
                if (typeof object.type === "number" && (object.type | 0) === object.type)
                    message.type = object.type;
            }
            return message;
        };

        /**
         * Creates a plain object from a BotMessageOrigin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotMessageOrigin
         * @static
         * @param {BotMetadata.BotMessageOrigin} message BotMessageOrigin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotMessageOrigin.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                object.type = options.enums === $String ? $root.BotMetadata.BotMessageOrigin.BotMessageOriginType[message.type] === $undefined ? message.type : $root.BotMetadata.BotMessageOrigin.BotMessageOriginType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this BotMessageOrigin to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotMessageOrigin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotMessageOrigin.prototype.toJSON = function() {
            return BotMessageOrigin.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotMessageOrigin
         * @function getTypeUrl
         * @memberof BotMetadata.BotMessageOrigin
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotMessageOrigin.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotMessageOrigin";
        };

        /**
         * BotMessageOriginType enum.
         * @name BotMetadata.BotMessageOrigin.BotMessageOriginType
         * @enum {number}
         * @property {number} BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED=0 BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED value
         */
        BotMessageOrigin.BotMessageOriginType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED"] = 0;
            return values;
        })();

        return BotMessageOrigin;
    })();

    BotMetadata.BotMessageOriginMetadata = (function() {

        /**
         * Properties of a BotMessageOriginMetadata.
         * @typedef {Object} BotMetadata.BotMessageOriginMetadata.$Properties
         * @property {Array.<BotMetadata.BotMessageOrigin.$Properties>|null} [origins] BotMessageOriginMetadata origins
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotMessageOriginMetadata.
         * @memberof BotMetadata
         * @interface IBotMessageOriginMetadata
         * @augments BotMetadata.BotMessageOriginMetadata.$Properties
         * @deprecated Use BotMetadata.BotMessageOriginMetadata.$Properties instead.
         */

        /**
         * Shape of a BotMessageOriginMetadata.
         * @typedef {BotMetadata.BotMessageOriginMetadata.$Properties} BotMetadata.BotMessageOriginMetadata.$Shape
         */

        /**
         * Constructs a new BotMessageOriginMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotMessageOriginMetadata.
         * @constructor
         * @param {BotMetadata.BotMessageOriginMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotMessageOriginMetadata = function (properties) {
            this.origins = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotMessageOriginMetadata origins.
         * @member {Array.<BotMetadata.BotMessageOrigin.$Properties>} origins
         * @memberof BotMetadata.BotMessageOriginMetadata
         * @instance
         */
        BotMessageOriginMetadata.prototype.origins = $util.emptyArray;

        /**
         * Creates a new BotMessageOriginMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotMessageOriginMetadata
         * @static
         * @param {BotMetadata.BotMessageOriginMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotMessageOriginMetadata} BotMessageOriginMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotMessageOriginMetadata.$Shape): BotMetadata.BotMessageOriginMetadata & BotMetadata.BotMessageOriginMetadata.$Shape;
         *   (properties?: BotMetadata.BotMessageOriginMetadata.$Properties): BotMetadata.BotMessageOriginMetadata;
         * }}
         */
        BotMessageOriginMetadata.create = function(properties) {
            return new BotMessageOriginMetadata(properties);
        };

        /**
         * Encodes the specified BotMessageOriginMetadata message. Does not implicitly {@link BotMetadata.BotMessageOriginMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotMessageOriginMetadata
         * @static
         * @param {BotMetadata.BotMessageOriginMetadata.$Properties} message BotMessageOriginMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMessageOriginMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.origins != null && message.origins.length)
                for (var i = 0; i < message.origins.length; ++i)
                    $root.BotMetadata.BotMessageOrigin.encode(message.origins[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotMessageOriginMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMessageOriginMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotMessageOriginMetadata
         * @static
         * @param {BotMetadata.BotMessageOriginMetadata.$Properties} message BotMessageOriginMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMessageOriginMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotMessageOriginMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotMessageOriginMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotMessageOriginMetadata & BotMetadata.BotMessageOriginMetadata.$Shape} BotMessageOriginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMessageOriginMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotMessageOriginMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.origins && message.origins.length))
                            message.origins = [];
                        message.origins.push($root.BotMetadata.BotMessageOrigin.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotMessageOriginMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotMessageOriginMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMessageOriginMetadata & BotMetadata.BotMessageOriginMetadata.$Shape} BotMessageOriginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMessageOriginMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotMessageOriginMetadata message.
         * @function verify
         * @memberof BotMetadata.BotMessageOriginMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotMessageOriginMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.origins != null && $Object.hasOwnProperty.call(message, "origins")) {
                if (!$Array.isArray(message.origins))
                    return "origins: array expected";
                for (var i = 0; i < message.origins.length; ++i) {
                    var error = $root.BotMetadata.BotMessageOrigin.verify(message.origins[i], _depth + 1);
                    if (error)
                        return "origins." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BotMessageOriginMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotMessageOriginMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotMessageOriginMetadata} BotMessageOriginMetadata
         */
        BotMessageOriginMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotMessageOriginMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotMessageOriginMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotMessageOriginMetadata();
            if (object.origins) {
                if (!$Array.isArray(object.origins))
                    throw $TypeError(".BotMetadata.BotMessageOriginMetadata.origins: array expected");
                message.origins = $Array(object.origins.length);
                for (var i = 0; i < object.origins.length; ++i) {
                    if (!$util.isObject(object.origins[i]))
                        throw $TypeError(".BotMetadata.BotMessageOriginMetadata.origins: object expected");
                    message.origins[i] = $root.BotMetadata.BotMessageOrigin.fromObject(object.origins[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BotMessageOriginMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotMessageOriginMetadata
         * @static
         * @param {BotMetadata.BotMessageOriginMetadata} message BotMessageOriginMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotMessageOriginMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.origins = [];
            if (message.origins && message.origins.length) {
                object.origins = $Array(message.origins.length);
                for (var j = 0; j < message.origins.length; ++j)
                    object.origins[j] = $root.BotMetadata.BotMessageOrigin.toObject(message.origins[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this BotMessageOriginMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotMessageOriginMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotMessageOriginMetadata.prototype.toJSON = function() {
            return BotMessageOriginMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotMessageOriginMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotMessageOriginMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotMessageOriginMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotMessageOriginMetadata";
        };

        return BotMessageOriginMetadata;
    })();

    BotMetadata.InThreadSurveyMetadata = (function() {

        /**
         * Properties of an InThreadSurveyMetadata.
         * @typedef {Object} BotMetadata.InThreadSurveyMetadata.$Properties
         * @property {string|null} [tessaSessionId] InThreadSurveyMetadata tessaSessionId
         * @property {string|null} [simonSessionId] InThreadSurveyMetadata simonSessionId
         * @property {string|null} [simonSurveyId] InThreadSurveyMetadata simonSurveyId
         * @property {string|null} [tessaRootId] InThreadSurveyMetadata tessaRootId
         * @property {string|null} [requestId] InThreadSurveyMetadata requestId
         * @property {string|null} [tessaEvent] InThreadSurveyMetadata tessaEvent
         * @property {string|null} [invitationHeaderText] InThreadSurveyMetadata invitationHeaderText
         * @property {string|null} [invitationBodyText] InThreadSurveyMetadata invitationBodyText
         * @property {string|null} [invitationCtaText] InThreadSurveyMetadata invitationCtaText
         * @property {string|null} [invitationCtaUrl] InThreadSurveyMetadata invitationCtaUrl
         * @property {string|null} [surveyTitle] InThreadSurveyMetadata surveyTitle
         * @property {Array.<BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties>|null} [questions] InThreadSurveyMetadata questions
         * @property {string|null} [surveyContinueButtonText] InThreadSurveyMetadata surveyContinueButtonText
         * @property {string|null} [surveySubmitButtonText] InThreadSurveyMetadata surveySubmitButtonText
         * @property {string|null} [privacyStatementFull] InThreadSurveyMetadata privacyStatementFull
         * @property {Array.<BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties>|null} [privacyStatementParts] InThreadSurveyMetadata privacyStatementParts
         * @property {string|null} [feedbackToastText] InThreadSurveyMetadata feedbackToastText
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an InThreadSurveyMetadata.
         * @memberof BotMetadata
         * @interface IInThreadSurveyMetadata
         * @augments BotMetadata.InThreadSurveyMetadata.$Properties
         * @deprecated Use BotMetadata.InThreadSurveyMetadata.$Properties instead.
         */

        /**
         * Shape of an InThreadSurveyMetadata.
         * @typedef {BotMetadata.InThreadSurveyMetadata.$Properties} BotMetadata.InThreadSurveyMetadata.$Shape
         */

        /**
         * Constructs a new InThreadSurveyMetadata.
         * @memberof BotMetadata
         * @classdesc Represents an InThreadSurveyMetadata.
         * @constructor
         * @param {BotMetadata.InThreadSurveyMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var InThreadSurveyMetadata = function (properties) {
            this.questions = [];
            this.privacyStatementParts = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * InThreadSurveyMetadata tessaSessionId.
         * @member {string|null|undefined} tessaSessionId
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.tessaSessionId = null;

        /**
         * InThreadSurveyMetadata simonSessionId.
         * @member {string|null|undefined} simonSessionId
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.simonSessionId = null;

        /**
         * InThreadSurveyMetadata simonSurveyId.
         * @member {string|null|undefined} simonSurveyId
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.simonSurveyId = null;

        /**
         * InThreadSurveyMetadata tessaRootId.
         * @member {string|null|undefined} tessaRootId
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.tessaRootId = null;

        /**
         * InThreadSurveyMetadata requestId.
         * @member {string|null|undefined} requestId
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.requestId = null;

        /**
         * InThreadSurveyMetadata tessaEvent.
         * @member {string|null|undefined} tessaEvent
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.tessaEvent = null;

        /**
         * InThreadSurveyMetadata invitationHeaderText.
         * @member {string|null|undefined} invitationHeaderText
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.invitationHeaderText = null;

        /**
         * InThreadSurveyMetadata invitationBodyText.
         * @member {string|null|undefined} invitationBodyText
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.invitationBodyText = null;

        /**
         * InThreadSurveyMetadata invitationCtaText.
         * @member {string|null|undefined} invitationCtaText
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.invitationCtaText = null;

        /**
         * InThreadSurveyMetadata invitationCtaUrl.
         * @member {string|null|undefined} invitationCtaUrl
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.invitationCtaUrl = null;

        /**
         * InThreadSurveyMetadata surveyTitle.
         * @member {string|null|undefined} surveyTitle
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.surveyTitle = null;

        /**
         * InThreadSurveyMetadata questions.
         * @member {Array.<BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties>} questions
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.questions = $util.emptyArray;

        /**
         * InThreadSurveyMetadata surveyContinueButtonText.
         * @member {string|null|undefined} surveyContinueButtonText
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.surveyContinueButtonText = null;

        /**
         * InThreadSurveyMetadata surveySubmitButtonText.
         * @member {string|null|undefined} surveySubmitButtonText
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.surveySubmitButtonText = null;

        /**
         * InThreadSurveyMetadata privacyStatementFull.
         * @member {string|null|undefined} privacyStatementFull
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.privacyStatementFull = null;

        /**
         * InThreadSurveyMetadata privacyStatementParts.
         * @member {Array.<BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties>} privacyStatementParts
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.privacyStatementParts = $util.emptyArray;

        /**
         * InThreadSurveyMetadata feedbackToastText.
         * @member {string|null|undefined} feedbackToastText
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         */
        InThreadSurveyMetadata.prototype.feedbackToastText = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_tessaSessionId", {
            get: $util.oneOfGetter($oneOfFields = ["tessaSessionId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_simonSessionId", {
            get: $util.oneOfGetter($oneOfFields = ["simonSessionId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_simonSurveyId", {
            get: $util.oneOfGetter($oneOfFields = ["simonSurveyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_tessaRootId", {
            get: $util.oneOfGetter($oneOfFields = ["tessaRootId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_requestId", {
            get: $util.oneOfGetter($oneOfFields = ["requestId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_tessaEvent", {
            get: $util.oneOfGetter($oneOfFields = ["tessaEvent"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_invitationHeaderText", {
            get: $util.oneOfGetter($oneOfFields = ["invitationHeaderText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_invitationBodyText", {
            get: $util.oneOfGetter($oneOfFields = ["invitationBodyText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_invitationCtaText", {
            get: $util.oneOfGetter($oneOfFields = ["invitationCtaText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_invitationCtaUrl", {
            get: $util.oneOfGetter($oneOfFields = ["invitationCtaUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_surveyTitle", {
            get: $util.oneOfGetter($oneOfFields = ["surveyTitle"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_surveyContinueButtonText", {
            get: $util.oneOfGetter($oneOfFields = ["surveyContinueButtonText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_surveySubmitButtonText", {
            get: $util.oneOfGetter($oneOfFields = ["surveySubmitButtonText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_privacyStatementFull", {
            get: $util.oneOfGetter($oneOfFields = ["privacyStatementFull"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(InThreadSurveyMetadata.prototype, "_feedbackToastText", {
            get: $util.oneOfGetter($oneOfFields = ["feedbackToastText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new InThreadSurveyMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @static
         * @param {BotMetadata.InThreadSurveyMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.InThreadSurveyMetadata} InThreadSurveyMetadata instance
         * @type {{
         *   (properties: BotMetadata.InThreadSurveyMetadata.$Shape): BotMetadata.InThreadSurveyMetadata & BotMetadata.InThreadSurveyMetadata.$Shape;
         *   (properties?: BotMetadata.InThreadSurveyMetadata.$Properties): BotMetadata.InThreadSurveyMetadata;
         * }}
         */
        InThreadSurveyMetadata.create = function(properties) {
            return new InThreadSurveyMetadata(properties);
        };

        /**
         * Encodes the specified InThreadSurveyMetadata message. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @static
         * @param {BotMetadata.InThreadSurveyMetadata.$Properties} message InThreadSurveyMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InThreadSurveyMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.tessaSessionId != null && $Object.hasOwnProperty.call(message, "tessaSessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tessaSessionId);
            if (message.simonSessionId != null && $Object.hasOwnProperty.call(message, "simonSessionId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.simonSessionId);
            if (message.simonSurveyId != null && $Object.hasOwnProperty.call(message, "simonSurveyId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.simonSurveyId);
            if (message.tessaRootId != null && $Object.hasOwnProperty.call(message, "tessaRootId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tessaRootId);
            if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.requestId);
            if (message.tessaEvent != null && $Object.hasOwnProperty.call(message, "tessaEvent"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.tessaEvent);
            if (message.invitationHeaderText != null && $Object.hasOwnProperty.call(message, "invitationHeaderText"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.invitationHeaderText);
            if (message.invitationBodyText != null && $Object.hasOwnProperty.call(message, "invitationBodyText"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.invitationBodyText);
            if (message.invitationCtaText != null && $Object.hasOwnProperty.call(message, "invitationCtaText"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.invitationCtaText);
            if (message.invitationCtaUrl != null && $Object.hasOwnProperty.call(message, "invitationCtaUrl"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.invitationCtaUrl);
            if (message.surveyTitle != null && $Object.hasOwnProperty.call(message, "surveyTitle"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.surveyTitle);
            if (message.questions != null && message.questions.length)
                for (var i = 0; i < message.questions.length; ++i)
                    $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.encode(message.questions[i], writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
            if (message.surveyContinueButtonText != null && $Object.hasOwnProperty.call(message, "surveyContinueButtonText"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.surveyContinueButtonText);
            if (message.surveySubmitButtonText != null && $Object.hasOwnProperty.call(message, "surveySubmitButtonText"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.surveySubmitButtonText);
            if (message.privacyStatementFull != null && $Object.hasOwnProperty.call(message, "privacyStatementFull"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.privacyStatementFull);
            if (message.privacyStatementParts != null && message.privacyStatementParts.length)
                for (var i = 0; i < message.privacyStatementParts.length; ++i)
                    $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.encode(message.privacyStatementParts[i], writer.uint32(/* id 16, wireType 2 =*/130).fork(), _depth + 1).ldelim();
            if (message.feedbackToastText != null && $Object.hasOwnProperty.call(message, "feedbackToastText"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.feedbackToastText);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified InThreadSurveyMetadata message, length delimited. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @static
         * @param {BotMetadata.InThreadSurveyMetadata.$Properties} message InThreadSurveyMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InThreadSurveyMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an InThreadSurveyMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.InThreadSurveyMetadata & BotMetadata.InThreadSurveyMetadata.$Shape} InThreadSurveyMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InThreadSurveyMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.InThreadSurveyMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.tessaSessionId = reader.stringVerify();
                        message._tessaSessionId = "tessaSessionId";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.simonSessionId = reader.stringVerify();
                        message._simonSessionId = "simonSessionId";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.simonSurveyId = reader.stringVerify();
                        message._simonSurveyId = "simonSurveyId";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.tessaRootId = reader.stringVerify();
                        message._tessaRootId = "tessaRootId";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.requestId = reader.stringVerify();
                        message._requestId = "requestId";
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.tessaEvent = reader.stringVerify();
                        message._tessaEvent = "tessaEvent";
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        message.invitationHeaderText = reader.stringVerify();
                        message._invitationHeaderText = "invitationHeaderText";
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        message.invitationBodyText = reader.stringVerify();
                        message._invitationBodyText = "invitationBodyText";
                        continue;
                    }
                case 9: {
                        if (wireType !== 2)
                            break;
                        message.invitationCtaText = reader.stringVerify();
                        message._invitationCtaText = "invitationCtaText";
                        continue;
                    }
                case 10: {
                        if (wireType !== 2)
                            break;
                        message.invitationCtaUrl = reader.stringVerify();
                        message._invitationCtaUrl = "invitationCtaUrl";
                        continue;
                    }
                case 11: {
                        if (wireType !== 2)
                            break;
                        message.surveyTitle = reader.stringVerify();
                        message._surveyTitle = "surveyTitle";
                        continue;
                    }
                case 12: {
                        if (wireType !== 2)
                            break;
                        if (!(message.questions && message.questions.length))
                            message.questions = [];
                        message.questions.push($root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                case 13: {
                        if (wireType !== 2)
                            break;
                        message.surveyContinueButtonText = reader.stringVerify();
                        message._surveyContinueButtonText = "surveyContinueButtonText";
                        continue;
                    }
                case 14: {
                        if (wireType !== 2)
                            break;
                        message.surveySubmitButtonText = reader.stringVerify();
                        message._surveySubmitButtonText = "surveySubmitButtonText";
                        continue;
                    }
                case 15: {
                        if (wireType !== 2)
                            break;
                        message.privacyStatementFull = reader.stringVerify();
                        message._privacyStatementFull = "privacyStatementFull";
                        continue;
                    }
                case 16: {
                        if (wireType !== 2)
                            break;
                        if (!(message.privacyStatementParts && message.privacyStatementParts.length))
                            message.privacyStatementParts = [];
                        message.privacyStatementParts.push($root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                case 17: {
                        if (wireType !== 2)
                            break;
                        message.feedbackToastText = reader.stringVerify();
                        message._feedbackToastText = "feedbackToastText";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an InThreadSurveyMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.InThreadSurveyMetadata & BotMetadata.InThreadSurveyMetadata.$Shape} InThreadSurveyMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InThreadSurveyMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies an InThreadSurveyMetadata message.
         * @function verify
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InThreadSurveyMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.tessaSessionId != null && $Object.hasOwnProperty.call(message, "tessaSessionId")) {
                properties._tessaSessionId = 1;
                if (!$util.isString(message.tessaSessionId))
                    return "tessaSessionId: string expected";
            }
            if (message.simonSessionId != null && $Object.hasOwnProperty.call(message, "simonSessionId")) {
                properties._simonSessionId = 1;
                if (!$util.isString(message.simonSessionId))
                    return "simonSessionId: string expected";
            }
            if (message.simonSurveyId != null && $Object.hasOwnProperty.call(message, "simonSurveyId")) {
                properties._simonSurveyId = 1;
                if (!$util.isString(message.simonSurveyId))
                    return "simonSurveyId: string expected";
            }
            if (message.tessaRootId != null && $Object.hasOwnProperty.call(message, "tessaRootId")) {
                properties._tessaRootId = 1;
                if (!$util.isString(message.tessaRootId))
                    return "tessaRootId: string expected";
            }
            if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId")) {
                properties._requestId = 1;
                if (!$util.isString(message.requestId))
                    return "requestId: string expected";
            }
            if (message.tessaEvent != null && $Object.hasOwnProperty.call(message, "tessaEvent")) {
                properties._tessaEvent = 1;
                if (!$util.isString(message.tessaEvent))
                    return "tessaEvent: string expected";
            }
            if (message.invitationHeaderText != null && $Object.hasOwnProperty.call(message, "invitationHeaderText")) {
                properties._invitationHeaderText = 1;
                if (!$util.isString(message.invitationHeaderText))
                    return "invitationHeaderText: string expected";
            }
            if (message.invitationBodyText != null && $Object.hasOwnProperty.call(message, "invitationBodyText")) {
                properties._invitationBodyText = 1;
                if (!$util.isString(message.invitationBodyText))
                    return "invitationBodyText: string expected";
            }
            if (message.invitationCtaText != null && $Object.hasOwnProperty.call(message, "invitationCtaText")) {
                properties._invitationCtaText = 1;
                if (!$util.isString(message.invitationCtaText))
                    return "invitationCtaText: string expected";
            }
            if (message.invitationCtaUrl != null && $Object.hasOwnProperty.call(message, "invitationCtaUrl")) {
                properties._invitationCtaUrl = 1;
                if (!$util.isString(message.invitationCtaUrl))
                    return "invitationCtaUrl: string expected";
            }
            if (message.surveyTitle != null && $Object.hasOwnProperty.call(message, "surveyTitle")) {
                properties._surveyTitle = 1;
                if (!$util.isString(message.surveyTitle))
                    return "surveyTitle: string expected";
            }
            if (message.questions != null && $Object.hasOwnProperty.call(message, "questions")) {
                if (!$Array.isArray(message.questions))
                    return "questions: array expected";
                for (var i = 0; i < message.questions.length; ++i) {
                    var error = $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.verify(message.questions[i], _depth + 1);
                    if (error)
                        return "questions." + error;
                }
            }
            if (message.surveyContinueButtonText != null && $Object.hasOwnProperty.call(message, "surveyContinueButtonText")) {
                properties._surveyContinueButtonText = 1;
                if (!$util.isString(message.surveyContinueButtonText))
                    return "surveyContinueButtonText: string expected";
            }
            if (message.surveySubmitButtonText != null && $Object.hasOwnProperty.call(message, "surveySubmitButtonText")) {
                properties._surveySubmitButtonText = 1;
                if (!$util.isString(message.surveySubmitButtonText))
                    return "surveySubmitButtonText: string expected";
            }
            if (message.privacyStatementFull != null && $Object.hasOwnProperty.call(message, "privacyStatementFull")) {
                properties._privacyStatementFull = 1;
                if (!$util.isString(message.privacyStatementFull))
                    return "privacyStatementFull: string expected";
            }
            if (message.privacyStatementParts != null && $Object.hasOwnProperty.call(message, "privacyStatementParts")) {
                if (!$Array.isArray(message.privacyStatementParts))
                    return "privacyStatementParts: array expected";
                for (var i = 0; i < message.privacyStatementParts.length; ++i) {
                    var error = $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.verify(message.privacyStatementParts[i], _depth + 1);
                    if (error)
                        return "privacyStatementParts." + error;
                }
            }
            if (message.feedbackToastText != null && $Object.hasOwnProperty.call(message, "feedbackToastText")) {
                properties._feedbackToastText = 1;
                if (!$util.isString(message.feedbackToastText))
                    return "feedbackToastText: string expected";
            }
            return null;
        };

        /**
         * Creates an InThreadSurveyMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.InThreadSurveyMetadata} InThreadSurveyMetadata
         */
        InThreadSurveyMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.InThreadSurveyMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.InThreadSurveyMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.InThreadSurveyMetadata();
            if (object.tessaSessionId != null)
                message.tessaSessionId = $String(object.tessaSessionId);
            if (object.simonSessionId != null)
                message.simonSessionId = $String(object.simonSessionId);
            if (object.simonSurveyId != null)
                message.simonSurveyId = $String(object.simonSurveyId);
            if (object.tessaRootId != null)
                message.tessaRootId = $String(object.tessaRootId);
            if (object.requestId != null)
                message.requestId = $String(object.requestId);
            if (object.tessaEvent != null)
                message.tessaEvent = $String(object.tessaEvent);
            if (object.invitationHeaderText != null)
                message.invitationHeaderText = $String(object.invitationHeaderText);
            if (object.invitationBodyText != null)
                message.invitationBodyText = $String(object.invitationBodyText);
            if (object.invitationCtaText != null)
                message.invitationCtaText = $String(object.invitationCtaText);
            if (object.invitationCtaUrl != null)
                message.invitationCtaUrl = $String(object.invitationCtaUrl);
            if (object.surveyTitle != null)
                message.surveyTitle = $String(object.surveyTitle);
            if (object.questions) {
                if (!$Array.isArray(object.questions))
                    throw $TypeError(".BotMetadata.InThreadSurveyMetadata.questions: array expected");
                message.questions = $Array(object.questions.length);
                for (var i = 0; i < object.questions.length; ++i) {
                    if (!$util.isObject(object.questions[i]))
                        throw $TypeError(".BotMetadata.InThreadSurveyMetadata.questions: object expected");
                    message.questions[i] = $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.fromObject(object.questions[i], _depth + 1);
                }
            }
            if (object.surveyContinueButtonText != null)
                message.surveyContinueButtonText = $String(object.surveyContinueButtonText);
            if (object.surveySubmitButtonText != null)
                message.surveySubmitButtonText = $String(object.surveySubmitButtonText);
            if (object.privacyStatementFull != null)
                message.privacyStatementFull = $String(object.privacyStatementFull);
            if (object.privacyStatementParts) {
                if (!$Array.isArray(object.privacyStatementParts))
                    throw $TypeError(".BotMetadata.InThreadSurveyMetadata.privacyStatementParts: array expected");
                message.privacyStatementParts = $Array(object.privacyStatementParts.length);
                for (var i = 0; i < object.privacyStatementParts.length; ++i) {
                    if (!$util.isObject(object.privacyStatementParts[i]))
                        throw $TypeError(".BotMetadata.InThreadSurveyMetadata.privacyStatementParts: object expected");
                    message.privacyStatementParts[i] = $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.fromObject(object.privacyStatementParts[i], _depth + 1);
                }
            }
            if (object.feedbackToastText != null)
                message.feedbackToastText = $String(object.feedbackToastText);
            return message;
        };

        /**
         * Creates a plain object from an InThreadSurveyMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @static
         * @param {BotMetadata.InThreadSurveyMetadata} message InThreadSurveyMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InThreadSurveyMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults) {
                object.questions = [];
                object.privacyStatementParts = [];
            }
            if (message.tessaSessionId != null && $Object.hasOwnProperty.call(message, "tessaSessionId"))
                object.tessaSessionId = message.tessaSessionId;
            if (message.simonSessionId != null && $Object.hasOwnProperty.call(message, "simonSessionId"))
                object.simonSessionId = message.simonSessionId;
            if (message.simonSurveyId != null && $Object.hasOwnProperty.call(message, "simonSurveyId"))
                object.simonSurveyId = message.simonSurveyId;
            if (message.tessaRootId != null && $Object.hasOwnProperty.call(message, "tessaRootId"))
                object.tessaRootId = message.tessaRootId;
            if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                object.requestId = message.requestId;
            if (message.tessaEvent != null && $Object.hasOwnProperty.call(message, "tessaEvent"))
                object.tessaEvent = message.tessaEvent;
            if (message.invitationHeaderText != null && $Object.hasOwnProperty.call(message, "invitationHeaderText"))
                object.invitationHeaderText = message.invitationHeaderText;
            if (message.invitationBodyText != null && $Object.hasOwnProperty.call(message, "invitationBodyText"))
                object.invitationBodyText = message.invitationBodyText;
            if (message.invitationCtaText != null && $Object.hasOwnProperty.call(message, "invitationCtaText"))
                object.invitationCtaText = message.invitationCtaText;
            if (message.invitationCtaUrl != null && $Object.hasOwnProperty.call(message, "invitationCtaUrl"))
                object.invitationCtaUrl = message.invitationCtaUrl;
            if (message.surveyTitle != null && $Object.hasOwnProperty.call(message, "surveyTitle"))
                object.surveyTitle = message.surveyTitle;
            if (message.questions && message.questions.length) {
                object.questions = $Array(message.questions.length);
                for (var j = 0; j < message.questions.length; ++j)
                    object.questions[j] = $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.toObject(message.questions[j], options, _depth + 1);
            }
            if (message.surveyContinueButtonText != null && $Object.hasOwnProperty.call(message, "surveyContinueButtonText"))
                object.surveyContinueButtonText = message.surveyContinueButtonText;
            if (message.surveySubmitButtonText != null && $Object.hasOwnProperty.call(message, "surveySubmitButtonText"))
                object.surveySubmitButtonText = message.surveySubmitButtonText;
            if (message.privacyStatementFull != null && $Object.hasOwnProperty.call(message, "privacyStatementFull"))
                object.privacyStatementFull = message.privacyStatementFull;
            if (message.privacyStatementParts && message.privacyStatementParts.length) {
                object.privacyStatementParts = $Array(message.privacyStatementParts.length);
                for (var j = 0; j < message.privacyStatementParts.length; ++j)
                    object.privacyStatementParts[j] = $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.toObject(message.privacyStatementParts[j], options, _depth + 1);
            }
            if (message.feedbackToastText != null && $Object.hasOwnProperty.call(message, "feedbackToastText"))
                object.feedbackToastText = message.feedbackToastText;
            return object;
        };

        /**
         * Converts this InThreadSurveyMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InThreadSurveyMetadata.prototype.toJSON = function() {
            return InThreadSurveyMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for InThreadSurveyMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.InThreadSurveyMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        InThreadSurveyMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.InThreadSurveyMetadata";
        };

        InThreadSurveyMetadata.InThreadSurveyOption = (function() {

            /**
             * Properties of an InThreadSurveyOption.
             * @typedef {Object} BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties
             * @property {string|null} [stringValue] InThreadSurveyOption stringValue
             * @property {number|null} [numericValue] InThreadSurveyOption numericValue
             * @property {string|null} [textTranslated] InThreadSurveyOption textTranslated
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an InThreadSurveyOption.
             * @memberof BotMetadata.InThreadSurveyMetadata
             * @interface IInThreadSurveyOption
             * @augments BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties
             * @deprecated Use BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties instead.
             */

            /**
             * Shape of an InThreadSurveyOption.
             * @typedef {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties} BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Shape
             */

            /**
             * Constructs a new InThreadSurveyOption.
             * @memberof BotMetadata.InThreadSurveyMetadata
             * @classdesc Represents an InThreadSurveyOption.
             * @constructor
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var InThreadSurveyOption = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * InThreadSurveyOption stringValue.
             * @member {string|null|undefined} stringValue
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @instance
             */
            InThreadSurveyOption.prototype.stringValue = null;

            /**
             * InThreadSurveyOption numericValue.
             * @member {number|null|undefined} numericValue
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @instance
             */
            InThreadSurveyOption.prototype.numericValue = null;

            /**
             * InThreadSurveyOption textTranslated.
             * @member {string|null|undefined} textTranslated
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @instance
             */
            InThreadSurveyOption.prototype.textTranslated = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(InThreadSurveyOption.prototype, "_stringValue", {
                get: $util.oneOfGetter($oneOfFields = ["stringValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(InThreadSurveyOption.prototype, "_numericValue", {
                get: $util.oneOfGetter($oneOfFields = ["numericValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(InThreadSurveyOption.prototype, "_textTranslated", {
                get: $util.oneOfGetter($oneOfFields = ["textTranslated"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new InThreadSurveyOption instance using the specified properties.
             * @function create
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties=} [properties] Properties to set
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption} InThreadSurveyOption instance
             * @type {{
             *   (properties: BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Shape): BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption & BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Shape;
             *   (properties?: BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties): BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption;
             * }}
             */
            InThreadSurveyOption.create = function(properties) {
                return new InThreadSurveyOption(properties);
            };

            /**
             * Encodes the specified InThreadSurveyOption message. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.verify|verify} messages.
             * @function encode
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties} message InThreadSurveyOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InThreadSurveyOption.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.stringValue != null && $Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringValue);
                if (message.numericValue != null && $Object.hasOwnProperty.call(message, "numericValue"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.numericValue);
                if (message.textTranslated != null && $Object.hasOwnProperty.call(message, "textTranslated"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.textTranslated);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified InThreadSurveyOption message, length delimited. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties} message InThreadSurveyOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InThreadSurveyOption.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an InThreadSurveyOption message from the specified reader or buffer.
             * @function decode
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption & BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Shape} InThreadSurveyOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InThreadSurveyOption.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.stringValue = reader.stringVerify();
                            message._stringValue = "stringValue";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.numericValue = reader.uint32();
                            message._numericValue = "numericValue";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.textTranslated = reader.stringVerify();
                            message._textTranslated = "textTranslated";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an InThreadSurveyOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption & BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Shape} InThreadSurveyOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InThreadSurveyOption.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.size());
            };

            /**
             * Verifies an InThreadSurveyOption message.
             * @function verify
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InThreadSurveyOption.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.stringValue != null && $Object.hasOwnProperty.call(message, "stringValue")) {
                    properties._stringValue = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.numericValue != null && $Object.hasOwnProperty.call(message, "numericValue")) {
                    properties._numericValue = 1;
                    if (!$util.isInteger(message.numericValue))
                        return "numericValue: integer expected";
                }
                if (message.textTranslated != null && $Object.hasOwnProperty.call(message, "textTranslated")) {
                    properties._textTranslated = 1;
                    if (!$util.isString(message.textTranslated))
                        return "textTranslated: string expected";
                }
                return null;
            };

            /**
             * Creates an InThreadSurveyOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption} InThreadSurveyOption
             */
            InThreadSurveyOption.fromObject = function (object, _depth) {
                if (object instanceof $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption();
                if (object.stringValue != null)
                    message.stringValue = $String(object.stringValue);
                if (object.numericValue != null)
                    message.numericValue = object.numericValue >>> 0;
                if (object.textTranslated != null)
                    message.textTranslated = $String(object.textTranslated);
                return message;
            };

            /**
             * Creates a plain object from an InThreadSurveyOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption} message InThreadSurveyOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InThreadSurveyOption.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.stringValue != null && $Object.hasOwnProperty.call(message, "stringValue"))
                    object.stringValue = message.stringValue;
                if (message.numericValue != null && $Object.hasOwnProperty.call(message, "numericValue"))
                    object.numericValue = message.numericValue;
                if (message.textTranslated != null && $Object.hasOwnProperty.call(message, "textTranslated"))
                    object.textTranslated = message.textTranslated;
                return object;
            };

            /**
             * Converts this InThreadSurveyOption to JSON.
             * @function toJSON
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InThreadSurveyOption.prototype.toJSON = function() {
                return InThreadSurveyOption.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for InThreadSurveyOption
             * @function getTypeUrl
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            InThreadSurveyOption.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption";
            };

            return InThreadSurveyOption;
        })();

        InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart = (function() {

            /**
             * Properties of an InThreadSurveyPrivacyStatementPart.
             * @typedef {Object} BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties
             * @property {string|null} [text] InThreadSurveyPrivacyStatementPart text
             * @property {string|null} [url] InThreadSurveyPrivacyStatementPart url
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an InThreadSurveyPrivacyStatementPart.
             * @memberof BotMetadata.InThreadSurveyMetadata
             * @interface IInThreadSurveyPrivacyStatementPart
             * @augments BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties
             * @deprecated Use BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties instead.
             */

            /**
             * Shape of an InThreadSurveyPrivacyStatementPart.
             * @typedef {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties} BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape
             */

            /**
             * Constructs a new InThreadSurveyPrivacyStatementPart.
             * @memberof BotMetadata.InThreadSurveyMetadata
             * @classdesc Represents an InThreadSurveyPrivacyStatementPart.
             * @constructor
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var InThreadSurveyPrivacyStatementPart = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * InThreadSurveyPrivacyStatementPart text.
             * @member {string|null|undefined} text
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @instance
             */
            InThreadSurveyPrivacyStatementPart.prototype.text = null;

            /**
             * InThreadSurveyPrivacyStatementPart url.
             * @member {string|null|undefined} url
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @instance
             */
            InThreadSurveyPrivacyStatementPart.prototype.url = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(InThreadSurveyPrivacyStatementPart.prototype, "_text", {
                get: $util.oneOfGetter($oneOfFields = ["text"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(InThreadSurveyPrivacyStatementPart.prototype, "_url", {
                get: $util.oneOfGetter($oneOfFields = ["url"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new InThreadSurveyPrivacyStatementPart instance using the specified properties.
             * @function create
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties=} [properties] Properties to set
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart} InThreadSurveyPrivacyStatementPart instance
             * @type {{
             *   (properties: BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape): BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape;
             *   (properties?: BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties): BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;
             * }}
             */
            InThreadSurveyPrivacyStatementPart.create = function(properties) {
                return new InThreadSurveyPrivacyStatementPart(properties);
            };

            /**
             * Encodes the specified InThreadSurveyPrivacyStatementPart message. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.verify|verify} messages.
             * @function encode
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties} message InThreadSurveyPrivacyStatementPart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InThreadSurveyPrivacyStatementPart.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                if (message.url != null && $Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified InThreadSurveyPrivacyStatementPart message, length delimited. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Properties} message InThreadSurveyPrivacyStatementPart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InThreadSurveyPrivacyStatementPart.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an InThreadSurveyPrivacyStatementPart message from the specified reader or buffer.
             * @function decode
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape} InThreadSurveyPrivacyStatementPart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InThreadSurveyPrivacyStatementPart.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.text = reader.stringVerify();
                            message._text = "text";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.url = reader.stringVerify();
                            message._url = "url";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an InThreadSurveyPrivacyStatementPart message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart & BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.$Shape} InThreadSurveyPrivacyStatementPart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InThreadSurveyPrivacyStatementPart.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.size());
            };

            /**
             * Verifies an InThreadSurveyPrivacyStatementPart message.
             * @function verify
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InThreadSurveyPrivacyStatementPart.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.text != null && $Object.hasOwnProperty.call(message, "text")) {
                    properties._text = 1;
                    if (!$util.isString(message.text))
                        return "text: string expected";
                }
                if (message.url != null && $Object.hasOwnProperty.call(message, "url")) {
                    properties._url = 1;
                    if (!$util.isString(message.url))
                        return "url: string expected";
                }
                return null;
            };

            /**
             * Creates an InThreadSurveyPrivacyStatementPart message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart} InThreadSurveyPrivacyStatementPart
             */
            InThreadSurveyPrivacyStatementPart.fromObject = function (object, _depth) {
                if (object instanceof $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart();
                if (object.text != null)
                    message.text = $String(object.text);
                if (object.url != null)
                    message.url = $String(object.url);
                return message;
            };

            /**
             * Creates a plain object from an InThreadSurveyPrivacyStatementPart message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart} message InThreadSurveyPrivacyStatementPart
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InThreadSurveyPrivacyStatementPart.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    object.text = message.text;
                if (message.url != null && $Object.hasOwnProperty.call(message, "url"))
                    object.url = message.url;
                return object;
            };

            /**
             * Converts this InThreadSurveyPrivacyStatementPart to JSON.
             * @function toJSON
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InThreadSurveyPrivacyStatementPart.prototype.toJSON = function() {
                return InThreadSurveyPrivacyStatementPart.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for InThreadSurveyPrivacyStatementPart
             * @function getTypeUrl
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            InThreadSurveyPrivacyStatementPart.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BotMetadata.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart";
            };

            return InThreadSurveyPrivacyStatementPart;
        })();

        InThreadSurveyMetadata.InThreadSurveyQuestion = (function() {

            /**
             * Properties of an InThreadSurveyQuestion.
             * @typedef {Object} BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties
             * @property {string|null} [questionText] InThreadSurveyQuestion questionText
             * @property {string|null} [questionId] InThreadSurveyQuestion questionId
             * @property {Array.<BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties>|null} [questionOptions] InThreadSurveyQuestion questionOptions
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an InThreadSurveyQuestion.
             * @memberof BotMetadata.InThreadSurveyMetadata
             * @interface IInThreadSurveyQuestion
             * @augments BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties
             * @deprecated Use BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties instead.
             */

            /**
             * Shape of an InThreadSurveyQuestion.
             * @typedef {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties} BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape
             */

            /**
             * Constructs a new InThreadSurveyQuestion.
             * @memberof BotMetadata.InThreadSurveyMetadata
             * @classdesc Represents an InThreadSurveyQuestion.
             * @constructor
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var InThreadSurveyQuestion = function (properties) {
                this.questionOptions = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * InThreadSurveyQuestion questionText.
             * @member {string|null|undefined} questionText
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @instance
             */
            InThreadSurveyQuestion.prototype.questionText = null;

            /**
             * InThreadSurveyQuestion questionId.
             * @member {string|null|undefined} questionId
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @instance
             */
            InThreadSurveyQuestion.prototype.questionId = null;

            /**
             * InThreadSurveyQuestion questionOptions.
             * @member {Array.<BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.$Properties>} questionOptions
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @instance
             */
            InThreadSurveyQuestion.prototype.questionOptions = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(InThreadSurveyQuestion.prototype, "_questionText", {
                get: $util.oneOfGetter($oneOfFields = ["questionText"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(InThreadSurveyQuestion.prototype, "_questionId", {
                get: $util.oneOfGetter($oneOfFields = ["questionId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new InThreadSurveyQuestion instance using the specified properties.
             * @function create
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties=} [properties] Properties to set
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion} InThreadSurveyQuestion instance
             * @type {{
             *   (properties: BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape): BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion & BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape;
             *   (properties?: BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties): BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion;
             * }}
             */
            InThreadSurveyQuestion.create = function(properties) {
                return new InThreadSurveyQuestion(properties);
            };

            /**
             * Encodes the specified InThreadSurveyQuestion message. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.verify|verify} messages.
             * @function encode
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties} message InThreadSurveyQuestion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InThreadSurveyQuestion.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.questionText != null && $Object.hasOwnProperty.call(message, "questionText"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.questionText);
                if (message.questionId != null && $Object.hasOwnProperty.call(message, "questionId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.questionId);
                if (message.questionOptions != null && message.questionOptions.length)
                    for (var i = 0; i < message.questionOptions.length; ++i)
                        $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.encode(message.questionOptions[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified InThreadSurveyQuestion message, length delimited. Does not implicitly {@link BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Properties} message InThreadSurveyQuestion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InThreadSurveyQuestion.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an InThreadSurveyQuestion message from the specified reader or buffer.
             * @function decode
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion & BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape} InThreadSurveyQuestion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InThreadSurveyQuestion.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.questionText = reader.stringVerify();
                            message._questionText = "questionText";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.questionId = reader.stringVerify();
                            message._questionId = "questionId";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (!(message.questionOptions && message.questionOptions.length))
                                message.questionOptions = [];
                            message.questionOptions.push($root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an InThreadSurveyQuestion message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion & BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.$Shape} InThreadSurveyQuestion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InThreadSurveyQuestion.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.size());
            };

            /**
             * Verifies an InThreadSurveyQuestion message.
             * @function verify
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InThreadSurveyQuestion.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.questionText != null && $Object.hasOwnProperty.call(message, "questionText")) {
                    properties._questionText = 1;
                    if (!$util.isString(message.questionText))
                        return "questionText: string expected";
                }
                if (message.questionId != null && $Object.hasOwnProperty.call(message, "questionId")) {
                    properties._questionId = 1;
                    if (!$util.isString(message.questionId))
                        return "questionId: string expected";
                }
                if (message.questionOptions != null && $Object.hasOwnProperty.call(message, "questionOptions")) {
                    if (!$Array.isArray(message.questionOptions))
                        return "questionOptions: array expected";
                    for (var i = 0; i < message.questionOptions.length; ++i) {
                        var error = $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.verify(message.questionOptions[i], _depth + 1);
                        if (error)
                            return "questionOptions." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an InThreadSurveyQuestion message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion} InThreadSurveyQuestion
             */
            InThreadSurveyQuestion.fromObject = function (object, _depth) {
                if (object instanceof $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion();
                if (object.questionText != null)
                    message.questionText = $String(object.questionText);
                if (object.questionId != null)
                    message.questionId = $String(object.questionId);
                if (object.questionOptions) {
                    if (!$Array.isArray(object.questionOptions))
                        throw $TypeError(".BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.questionOptions: array expected");
                    message.questionOptions = $Array(object.questionOptions.length);
                    for (var i = 0; i < object.questionOptions.length; ++i) {
                        if (!$util.isObject(object.questionOptions[i]))
                            throw $TypeError(".BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion.questionOptions: object expected");
                        message.questionOptions[i] = $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.fromObject(object.questionOptions[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an InThreadSurveyQuestion message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @static
             * @param {BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion} message InThreadSurveyQuestion
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InThreadSurveyQuestion.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.questionOptions = [];
                if (message.questionText != null && $Object.hasOwnProperty.call(message, "questionText"))
                    object.questionText = message.questionText;
                if (message.questionId != null && $Object.hasOwnProperty.call(message, "questionId"))
                    object.questionId = message.questionId;
                if (message.questionOptions && message.questionOptions.length) {
                    object.questionOptions = $Array(message.questionOptions.length);
                    for (var j = 0; j < message.questionOptions.length; ++j)
                        object.questionOptions[j] = $root.BotMetadata.InThreadSurveyMetadata.InThreadSurveyOption.toObject(message.questionOptions[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this InThreadSurveyQuestion to JSON.
             * @function toJSON
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InThreadSurveyQuestion.prototype.toJSON = function() {
                return InThreadSurveyQuestion.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for InThreadSurveyQuestion
             * @function getTypeUrl
             * @memberof BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            InThreadSurveyQuestion.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BotMetadata.InThreadSurveyMetadata.InThreadSurveyQuestion";
            };

            return InThreadSurveyQuestion;
        })();

        return InThreadSurveyMetadata;
    })();

    BotMetadata.BotSourcesMetadata = (function() {

        /**
         * Properties of a BotSourcesMetadata.
         * @typedef {Object} BotMetadata.BotSourcesMetadata.$Properties
         * @property {Array.<BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties>|null} [sources] BotSourcesMetadata sources
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotSourcesMetadata.
         * @memberof BotMetadata
         * @interface IBotSourcesMetadata
         * @augments BotMetadata.BotSourcesMetadata.$Properties
         * @deprecated Use BotMetadata.BotSourcesMetadata.$Properties instead.
         */

        /**
         * Shape of a BotSourcesMetadata.
         * @typedef {BotMetadata.BotSourcesMetadata.$Properties} BotMetadata.BotSourcesMetadata.$Shape
         */

        /**
         * Constructs a new BotSourcesMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotSourcesMetadata.
         * @constructor
         * @param {BotMetadata.BotSourcesMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotSourcesMetadata = function (properties) {
            this.sources = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotSourcesMetadata sources.
         * @member {Array.<BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties>} sources
         * @memberof BotMetadata.BotSourcesMetadata
         * @instance
         */
        BotSourcesMetadata.prototype.sources = $util.emptyArray;

        /**
         * Creates a new BotSourcesMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotSourcesMetadata
         * @static
         * @param {BotMetadata.BotSourcesMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotSourcesMetadata} BotSourcesMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotSourcesMetadata.$Shape): BotMetadata.BotSourcesMetadata & BotMetadata.BotSourcesMetadata.$Shape;
         *   (properties?: BotMetadata.BotSourcesMetadata.$Properties): BotMetadata.BotSourcesMetadata;
         * }}
         */
        BotSourcesMetadata.create = function(properties) {
            return new BotSourcesMetadata(properties);
        };

        /**
         * Encodes the specified BotSourcesMetadata message. Does not implicitly {@link BotMetadata.BotSourcesMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotSourcesMetadata
         * @static
         * @param {BotMetadata.BotSourcesMetadata.$Properties} message BotSourcesMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSourcesMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.sources != null && message.sources.length)
                for (var i = 0; i < message.sources.length; ++i)
                    $root.BotMetadata.BotSourcesMetadata.BotSourceItem.encode(message.sources[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotSourcesMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotSourcesMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotSourcesMetadata
         * @static
         * @param {BotMetadata.BotSourcesMetadata.$Properties} message BotSourcesMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSourcesMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotSourcesMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotSourcesMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotSourcesMetadata & BotMetadata.BotSourcesMetadata.$Shape} BotSourcesMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSourcesMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotSourcesMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.sources && message.sources.length))
                            message.sources = [];
                        message.sources.push($root.BotMetadata.BotSourcesMetadata.BotSourceItem.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotSourcesMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotSourcesMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotSourcesMetadata & BotMetadata.BotSourcesMetadata.$Shape} BotSourcesMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSourcesMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotSourcesMetadata message.
         * @function verify
         * @memberof BotMetadata.BotSourcesMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotSourcesMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.sources != null && $Object.hasOwnProperty.call(message, "sources")) {
                if (!$Array.isArray(message.sources))
                    return "sources: array expected";
                for (var i = 0; i < message.sources.length; ++i) {
                    var error = $root.BotMetadata.BotSourcesMetadata.BotSourceItem.verify(message.sources[i], _depth + 1);
                    if (error)
                        return "sources." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BotSourcesMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotSourcesMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotSourcesMetadata} BotSourcesMetadata
         */
        BotSourcesMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotSourcesMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotSourcesMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotSourcesMetadata();
            if (object.sources) {
                if (!$Array.isArray(object.sources))
                    throw $TypeError(".BotMetadata.BotSourcesMetadata.sources: array expected");
                message.sources = $Array(object.sources.length);
                for (var i = 0; i < object.sources.length; ++i) {
                    if (!$util.isObject(object.sources[i]))
                        throw $TypeError(".BotMetadata.BotSourcesMetadata.sources: object expected");
                    message.sources[i] = $root.BotMetadata.BotSourcesMetadata.BotSourceItem.fromObject(object.sources[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BotSourcesMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotSourcesMetadata
         * @static
         * @param {BotMetadata.BotSourcesMetadata} message BotSourcesMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotSourcesMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.sources = [];
            if (message.sources && message.sources.length) {
                object.sources = $Array(message.sources.length);
                for (var j = 0; j < message.sources.length; ++j)
                    object.sources[j] = $root.BotMetadata.BotSourcesMetadata.BotSourceItem.toObject(message.sources[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this BotSourcesMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotSourcesMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotSourcesMetadata.prototype.toJSON = function() {
            return BotSourcesMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotSourcesMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotSourcesMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotSourcesMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotSourcesMetadata";
        };

        BotSourcesMetadata.BotSourceItem = (function() {

            /**
             * Properties of a BotSourceItem.
             * @typedef {Object} BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties
             * @property {BotMetadata.BotSourcesMetadata.BotSourceItem.SourceProvider|null} [provider] BotSourceItem provider
             * @property {string|null} [thumbnailCdnUrl] BotSourceItem thumbnailCdnUrl
             * @property {string|null} [sourceProviderUrl] BotSourceItem sourceProviderUrl
             * @property {string|null} [sourceQuery] BotSourceItem sourceQuery
             * @property {string|null} [faviconCdnUrl] BotSourceItem faviconCdnUrl
             * @property {number|null} [citationNumber] BotSourceItem citationNumber
             * @property {string|null} [sourceTitle] BotSourceItem sourceTitle
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a BotSourceItem.
             * @memberof BotMetadata.BotSourcesMetadata
             * @interface IBotSourceItem
             * @augments BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties
             * @deprecated Use BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties instead.
             */

            /**
             * Shape of a BotSourceItem.
             * @typedef {BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties} BotMetadata.BotSourcesMetadata.BotSourceItem.$Shape
             */

            /**
             * Constructs a new BotSourceItem.
             * @memberof BotMetadata.BotSourcesMetadata
             * @classdesc Represents a BotSourceItem.
             * @constructor
             * @param {BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var BotSourceItem = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * BotSourceItem provider.
             * @member {BotMetadata.BotSourcesMetadata.BotSourceItem.SourceProvider|null|undefined} provider
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @instance
             */
            BotSourceItem.prototype.provider = null;

            /**
             * BotSourceItem thumbnailCdnUrl.
             * @member {string|null|undefined} thumbnailCdnUrl
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @instance
             */
            BotSourceItem.prototype.thumbnailCdnUrl = null;

            /**
             * BotSourceItem sourceProviderUrl.
             * @member {string|null|undefined} sourceProviderUrl
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @instance
             */
            BotSourceItem.prototype.sourceProviderUrl = null;

            /**
             * BotSourceItem sourceQuery.
             * @member {string|null|undefined} sourceQuery
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @instance
             */
            BotSourceItem.prototype.sourceQuery = null;

            /**
             * BotSourceItem faviconCdnUrl.
             * @member {string|null|undefined} faviconCdnUrl
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @instance
             */
            BotSourceItem.prototype.faviconCdnUrl = null;

            /**
             * BotSourceItem citationNumber.
             * @member {number|null|undefined} citationNumber
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @instance
             */
            BotSourceItem.prototype.citationNumber = null;

            /**
             * BotSourceItem sourceTitle.
             * @member {string|null|undefined} sourceTitle
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @instance
             */
            BotSourceItem.prototype.sourceTitle = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotSourceItem.prototype, "_provider", {
                get: $util.oneOfGetter($oneOfFields = ["provider"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotSourceItem.prototype, "_thumbnailCdnUrl", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailCdnUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotSourceItem.prototype, "_sourceProviderUrl", {
                get: $util.oneOfGetter($oneOfFields = ["sourceProviderUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotSourceItem.prototype, "_sourceQuery", {
                get: $util.oneOfGetter($oneOfFields = ["sourceQuery"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotSourceItem.prototype, "_faviconCdnUrl", {
                get: $util.oneOfGetter($oneOfFields = ["faviconCdnUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotSourceItem.prototype, "_citationNumber", {
                get: $util.oneOfGetter($oneOfFields = ["citationNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotSourceItem.prototype, "_sourceTitle", {
                get: $util.oneOfGetter($oneOfFields = ["sourceTitle"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BotSourceItem instance using the specified properties.
             * @function create
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @static
             * @param {BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties=} [properties] Properties to set
             * @returns {BotMetadata.BotSourcesMetadata.BotSourceItem} BotSourceItem instance
             * @type {{
             *   (properties: BotMetadata.BotSourcesMetadata.BotSourceItem.$Shape): BotMetadata.BotSourcesMetadata.BotSourceItem & BotMetadata.BotSourcesMetadata.BotSourceItem.$Shape;
             *   (properties?: BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties): BotMetadata.BotSourcesMetadata.BotSourceItem;
             * }}
             */
            BotSourceItem.create = function(properties) {
                return new BotSourceItem(properties);
            };

            /**
             * Encodes the specified BotSourceItem message. Does not implicitly {@link BotMetadata.BotSourcesMetadata.BotSourceItem.verify|verify} messages.
             * @function encode
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @static
             * @param {BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties} message BotSourceItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BotSourceItem.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.provider != null && $Object.hasOwnProperty.call(message, "provider"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.provider);
                if (message.thumbnailCdnUrl != null && $Object.hasOwnProperty.call(message, "thumbnailCdnUrl"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.thumbnailCdnUrl);
                if (message.sourceProviderUrl != null && $Object.hasOwnProperty.call(message, "sourceProviderUrl"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.sourceProviderUrl);
                if (message.sourceQuery != null && $Object.hasOwnProperty.call(message, "sourceQuery"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.sourceQuery);
                if (message.faviconCdnUrl != null && $Object.hasOwnProperty.call(message, "faviconCdnUrl"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.faviconCdnUrl);
                if (message.citationNumber != null && $Object.hasOwnProperty.call(message, "citationNumber"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.citationNumber);
                if (message.sourceTitle != null && $Object.hasOwnProperty.call(message, "sourceTitle"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.sourceTitle);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BotSourceItem message, length delimited. Does not implicitly {@link BotMetadata.BotSourcesMetadata.BotSourceItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @static
             * @param {BotMetadata.BotSourcesMetadata.BotSourceItem.$Properties} message BotSourceItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BotSourceItem.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a BotSourceItem message from the specified reader or buffer.
             * @function decode
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BotMetadata.BotSourcesMetadata.BotSourceItem & BotMetadata.BotSourcesMetadata.BotSourceItem.$Shape} BotSourceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BotSourceItem.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.BotMetadata.BotSourcesMetadata.BotSourceItem();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.provider = reader.int32();
                            message._provider = "provider";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.thumbnailCdnUrl = reader.stringVerify();
                            message._thumbnailCdnUrl = "thumbnailCdnUrl";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.sourceProviderUrl = reader.stringVerify();
                            message._sourceProviderUrl = "sourceProviderUrl";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.sourceQuery = reader.stringVerify();
                            message._sourceQuery = "sourceQuery";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.faviconCdnUrl = reader.stringVerify();
                            message._faviconCdnUrl = "faviconCdnUrl";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            message.citationNumber = reader.uint32();
                            message._citationNumber = "citationNumber";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.sourceTitle = reader.stringVerify();
                            message._sourceTitle = "sourceTitle";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a BotSourceItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BotMetadata.BotSourcesMetadata.BotSourceItem & BotMetadata.BotSourcesMetadata.BotSourceItem.$Shape} BotSourceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BotSourceItem.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.size());
            };

            /**
             * Verifies a BotSourceItem message.
             * @function verify
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BotSourceItem.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.provider != null && $Object.hasOwnProperty.call(message, "provider")) {
                    properties._provider = 1;
                    if (typeof message.provider !== "number" || (message.provider | 0) !== message.provider)
                        return "provider: enum value expected";
                }
                if (message.thumbnailCdnUrl != null && $Object.hasOwnProperty.call(message, "thumbnailCdnUrl")) {
                    properties._thumbnailCdnUrl = 1;
                    if (!$util.isString(message.thumbnailCdnUrl))
                        return "thumbnailCdnUrl: string expected";
                }
                if (message.sourceProviderUrl != null && $Object.hasOwnProperty.call(message, "sourceProviderUrl")) {
                    properties._sourceProviderUrl = 1;
                    if (!$util.isString(message.sourceProviderUrl))
                        return "sourceProviderUrl: string expected";
                }
                if (message.sourceQuery != null && $Object.hasOwnProperty.call(message, "sourceQuery")) {
                    properties._sourceQuery = 1;
                    if (!$util.isString(message.sourceQuery))
                        return "sourceQuery: string expected";
                }
                if (message.faviconCdnUrl != null && $Object.hasOwnProperty.call(message, "faviconCdnUrl")) {
                    properties._faviconCdnUrl = 1;
                    if (!$util.isString(message.faviconCdnUrl))
                        return "faviconCdnUrl: string expected";
                }
                if (message.citationNumber != null && $Object.hasOwnProperty.call(message, "citationNumber")) {
                    properties._citationNumber = 1;
                    if (!$util.isInteger(message.citationNumber))
                        return "citationNumber: integer expected";
                }
                if (message.sourceTitle != null && $Object.hasOwnProperty.call(message, "sourceTitle")) {
                    properties._sourceTitle = 1;
                    if (!$util.isString(message.sourceTitle))
                        return "sourceTitle: string expected";
                }
                return null;
            };

            /**
             * Creates a BotSourceItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BotMetadata.BotSourcesMetadata.BotSourceItem} BotSourceItem
             */
            BotSourceItem.fromObject = function (object, _depth) {
                if (object instanceof $root.BotMetadata.BotSourcesMetadata.BotSourceItem)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BotMetadata.BotSourcesMetadata.BotSourceItem: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.BotMetadata.BotSourcesMetadata.BotSourceItem();
                switch (object.provider) {
                case "UNKNOWN":
                case 0:
                    message.provider = 0;
                    break;
                case "BING":
                case 1:
                    message.provider = 1;
                    break;
                case "GOOGLE":
                case 2:
                    message.provider = 2;
                    break;
                case "SUPPORT":
                case 3:
                    message.provider = 3;
                    break;
                case "OTHER":
                case 4:
                    message.provider = 4;
                    break;
                default:
                    if (typeof object.provider === "number" && (object.provider | 0) === object.provider)
                        message.provider = object.provider;
                }
                if (object.thumbnailCdnUrl != null)
                    message.thumbnailCdnUrl = $String(object.thumbnailCdnUrl);
                if (object.sourceProviderUrl != null)
                    message.sourceProviderUrl = $String(object.sourceProviderUrl);
                if (object.sourceQuery != null)
                    message.sourceQuery = $String(object.sourceQuery);
                if (object.faviconCdnUrl != null)
                    message.faviconCdnUrl = $String(object.faviconCdnUrl);
                if (object.citationNumber != null)
                    message.citationNumber = object.citationNumber >>> 0;
                if (object.sourceTitle != null)
                    message.sourceTitle = $String(object.sourceTitle);
                return message;
            };

            /**
             * Creates a plain object from a BotSourceItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @static
             * @param {BotMetadata.BotSourcesMetadata.BotSourceItem} message BotSourceItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BotSourceItem.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.provider != null && $Object.hasOwnProperty.call(message, "provider"))
                    object.provider = options.enums === $String ? $root.BotMetadata.BotSourcesMetadata.BotSourceItem.SourceProvider[message.provider] === $undefined ? message.provider : $root.BotMetadata.BotSourcesMetadata.BotSourceItem.SourceProvider[message.provider] : message.provider;
                if (message.thumbnailCdnUrl != null && $Object.hasOwnProperty.call(message, "thumbnailCdnUrl"))
                    object.thumbnailCdnUrl = message.thumbnailCdnUrl;
                if (message.sourceProviderUrl != null && $Object.hasOwnProperty.call(message, "sourceProviderUrl"))
                    object.sourceProviderUrl = message.sourceProviderUrl;
                if (message.sourceQuery != null && $Object.hasOwnProperty.call(message, "sourceQuery"))
                    object.sourceQuery = message.sourceQuery;
                if (message.faviconCdnUrl != null && $Object.hasOwnProperty.call(message, "faviconCdnUrl"))
                    object.faviconCdnUrl = message.faviconCdnUrl;
                if (message.citationNumber != null && $Object.hasOwnProperty.call(message, "citationNumber"))
                    object.citationNumber = message.citationNumber;
                if (message.sourceTitle != null && $Object.hasOwnProperty.call(message, "sourceTitle"))
                    object.sourceTitle = message.sourceTitle;
                return object;
            };

            /**
             * Converts this BotSourceItem to JSON.
             * @function toJSON
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BotSourceItem.prototype.toJSON = function() {
                return BotSourceItem.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BotSourceItem
             * @function getTypeUrl
             * @memberof BotMetadata.BotSourcesMetadata.BotSourceItem
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BotSourceItem.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BotMetadata.BotSourcesMetadata.BotSourceItem";
            };

            /**
             * SourceProvider enum.
             * @name BotMetadata.BotSourcesMetadata.BotSourceItem.SourceProvider
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} BING=1 BING value
             * @property {number} GOOGLE=2 GOOGLE value
             * @property {number} SUPPORT=3 SUPPORT value
             * @property {number} OTHER=4 OTHER value
             */
            BotSourceItem.SourceProvider = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "BING"] = 1;
                values[valuesById[2] = "GOOGLE"] = 2;
                values[valuesById[3] = "SUPPORT"] = 3;
                values[valuesById[4] = "OTHER"] = 4;
                return values;
            })();

            return BotSourceItem;
        })();

        return BotSourcesMetadata;
    })();

    BotMetadata.BotAgeCollectionMetadata = (function() {

        /**
         * Properties of a BotAgeCollectionMetadata.
         * @typedef {Object} BotMetadata.BotAgeCollectionMetadata.$Properties
         * @property {boolean|null} [ageCollectionEligible] BotAgeCollectionMetadata ageCollectionEligible
         * @property {boolean|null} [shouldTriggerAgeCollectionOnClient] BotAgeCollectionMetadata shouldTriggerAgeCollectionOnClient
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotAgeCollectionMetadata.
         * @memberof BotMetadata
         * @interface IBotAgeCollectionMetadata
         * @augments BotMetadata.BotAgeCollectionMetadata.$Properties
         * @deprecated Use BotMetadata.BotAgeCollectionMetadata.$Properties instead.
         */

        /**
         * Shape of a BotAgeCollectionMetadata.
         * @typedef {BotMetadata.BotAgeCollectionMetadata.$Properties} BotMetadata.BotAgeCollectionMetadata.$Shape
         */

        /**
         * Constructs a new BotAgeCollectionMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotAgeCollectionMetadata.
         * @constructor
         * @param {BotMetadata.BotAgeCollectionMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotAgeCollectionMetadata = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotAgeCollectionMetadata ageCollectionEligible.
         * @member {boolean|null|undefined} ageCollectionEligible
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @instance
         */
        BotAgeCollectionMetadata.prototype.ageCollectionEligible = null;

        /**
         * BotAgeCollectionMetadata shouldTriggerAgeCollectionOnClient.
         * @member {boolean|null|undefined} shouldTriggerAgeCollectionOnClient
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @instance
         */
        BotAgeCollectionMetadata.prototype.shouldTriggerAgeCollectionOnClient = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotAgeCollectionMetadata.prototype, "_ageCollectionEligible", {
            get: $util.oneOfGetter($oneOfFields = ["ageCollectionEligible"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotAgeCollectionMetadata.prototype, "_shouldTriggerAgeCollectionOnClient", {
            get: $util.oneOfGetter($oneOfFields = ["shouldTriggerAgeCollectionOnClient"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotAgeCollectionMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @static
         * @param {BotMetadata.BotAgeCollectionMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotAgeCollectionMetadata} BotAgeCollectionMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotAgeCollectionMetadata.$Shape): BotMetadata.BotAgeCollectionMetadata & BotMetadata.BotAgeCollectionMetadata.$Shape;
         *   (properties?: BotMetadata.BotAgeCollectionMetadata.$Properties): BotMetadata.BotAgeCollectionMetadata;
         * }}
         */
        BotAgeCollectionMetadata.create = function(properties) {
            return new BotAgeCollectionMetadata(properties);
        };

        /**
         * Encodes the specified BotAgeCollectionMetadata message. Does not implicitly {@link BotMetadata.BotAgeCollectionMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @static
         * @param {BotMetadata.BotAgeCollectionMetadata.$Properties} message BotAgeCollectionMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotAgeCollectionMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.ageCollectionEligible != null && $Object.hasOwnProperty.call(message, "ageCollectionEligible"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ageCollectionEligible);
            if (message.shouldTriggerAgeCollectionOnClient != null && $Object.hasOwnProperty.call(message, "shouldTriggerAgeCollectionOnClient"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.shouldTriggerAgeCollectionOnClient);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotAgeCollectionMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotAgeCollectionMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @static
         * @param {BotMetadata.BotAgeCollectionMetadata.$Properties} message BotAgeCollectionMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotAgeCollectionMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotAgeCollectionMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotAgeCollectionMetadata & BotMetadata.BotAgeCollectionMetadata.$Shape} BotAgeCollectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotAgeCollectionMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotAgeCollectionMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.ageCollectionEligible = reader.bool();
                        message._ageCollectionEligible = "ageCollectionEligible";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.shouldTriggerAgeCollectionOnClient = reader.bool();
                        message._shouldTriggerAgeCollectionOnClient = "shouldTriggerAgeCollectionOnClient";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotAgeCollectionMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotAgeCollectionMetadata & BotMetadata.BotAgeCollectionMetadata.$Shape} BotAgeCollectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotAgeCollectionMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotAgeCollectionMetadata message.
         * @function verify
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotAgeCollectionMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.ageCollectionEligible != null && $Object.hasOwnProperty.call(message, "ageCollectionEligible")) {
                properties._ageCollectionEligible = 1;
                if (typeof message.ageCollectionEligible !== "boolean")
                    return "ageCollectionEligible: boolean expected";
            }
            if (message.shouldTriggerAgeCollectionOnClient != null && $Object.hasOwnProperty.call(message, "shouldTriggerAgeCollectionOnClient")) {
                properties._shouldTriggerAgeCollectionOnClient = 1;
                if (typeof message.shouldTriggerAgeCollectionOnClient !== "boolean")
                    return "shouldTriggerAgeCollectionOnClient: boolean expected";
            }
            return null;
        };

        /**
         * Creates a BotAgeCollectionMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotAgeCollectionMetadata} BotAgeCollectionMetadata
         */
        BotAgeCollectionMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotAgeCollectionMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotAgeCollectionMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotAgeCollectionMetadata();
            if (object.ageCollectionEligible != null)
                message.ageCollectionEligible = $Boolean(object.ageCollectionEligible);
            if (object.shouldTriggerAgeCollectionOnClient != null)
                message.shouldTriggerAgeCollectionOnClient = $Boolean(object.shouldTriggerAgeCollectionOnClient);
            return message;
        };

        /**
         * Creates a plain object from a BotAgeCollectionMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @static
         * @param {BotMetadata.BotAgeCollectionMetadata} message BotAgeCollectionMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotAgeCollectionMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.ageCollectionEligible != null && $Object.hasOwnProperty.call(message, "ageCollectionEligible"))
                object.ageCollectionEligible = message.ageCollectionEligible;
            if (message.shouldTriggerAgeCollectionOnClient != null && $Object.hasOwnProperty.call(message, "shouldTriggerAgeCollectionOnClient"))
                object.shouldTriggerAgeCollectionOnClient = message.shouldTriggerAgeCollectionOnClient;
            return object;
        };

        /**
         * Converts this BotAgeCollectionMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotAgeCollectionMetadata.prototype.toJSON = function() {
            return BotAgeCollectionMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotAgeCollectionMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotAgeCollectionMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotAgeCollectionMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotAgeCollectionMetadata";
        };

        return BotAgeCollectionMetadata;
    })();

    BotMetadata.BotImagineMetadata = (function() {

        /**
         * Properties of a BotImagineMetadata.
         * @typedef {Object} BotMetadata.BotImagineMetadata.$Properties
         * @property {BotMetadata.BotImagineMetadata.ImagineType|null} [imagineType] BotImagineMetadata imagineType
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotImagineMetadata.
         * @memberof BotMetadata
         * @interface IBotImagineMetadata
         * @augments BotMetadata.BotImagineMetadata.$Properties
         * @deprecated Use BotMetadata.BotImagineMetadata.$Properties instead.
         */

        /**
         * Shape of a BotImagineMetadata.
         * @typedef {BotMetadata.BotImagineMetadata.$Properties} BotMetadata.BotImagineMetadata.$Shape
         */

        /**
         * Constructs a new BotImagineMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotImagineMetadata.
         * @constructor
         * @param {BotMetadata.BotImagineMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotImagineMetadata = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotImagineMetadata imagineType.
         * @member {BotMetadata.BotImagineMetadata.ImagineType|null|undefined} imagineType
         * @memberof BotMetadata.BotImagineMetadata
         * @instance
         */
        BotImagineMetadata.prototype.imagineType = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotImagineMetadata.prototype, "_imagineType", {
            get: $util.oneOfGetter($oneOfFields = ["imagineType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotImagineMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotImagineMetadata
         * @static
         * @param {BotMetadata.BotImagineMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotImagineMetadata} BotImagineMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotImagineMetadata.$Shape): BotMetadata.BotImagineMetadata & BotMetadata.BotImagineMetadata.$Shape;
         *   (properties?: BotMetadata.BotImagineMetadata.$Properties): BotMetadata.BotImagineMetadata;
         * }}
         */
        BotImagineMetadata.create = function(properties) {
            return new BotImagineMetadata(properties);
        };

        /**
         * Encodes the specified BotImagineMetadata message. Does not implicitly {@link BotMetadata.BotImagineMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotImagineMetadata
         * @static
         * @param {BotMetadata.BotImagineMetadata.$Properties} message BotImagineMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotImagineMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.imagineType != null && $Object.hasOwnProperty.call(message, "imagineType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.imagineType);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotImagineMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotImagineMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotImagineMetadata
         * @static
         * @param {BotMetadata.BotImagineMetadata.$Properties} message BotImagineMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotImagineMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotImagineMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotImagineMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotImagineMetadata & BotMetadata.BotImagineMetadata.$Shape} BotImagineMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotImagineMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotImagineMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.imagineType = reader.int32();
                        message._imagineType = "imagineType";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotImagineMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotImagineMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotImagineMetadata & BotMetadata.BotImagineMetadata.$Shape} BotImagineMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotImagineMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotImagineMetadata message.
         * @function verify
         * @memberof BotMetadata.BotImagineMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotImagineMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.imagineType != null && $Object.hasOwnProperty.call(message, "imagineType")) {
                properties._imagineType = 1;
                if (typeof message.imagineType !== "number" || (message.imagineType | 0) !== message.imagineType)
                    return "imagineType: enum value expected";
            }
            return null;
        };

        /**
         * Creates a BotImagineMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotImagineMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotImagineMetadata} BotImagineMetadata
         */
        BotImagineMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotImagineMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotImagineMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotImagineMetadata();
            switch (object.imagineType) {
            case "UNKNOWN":
            case 0:
                message.imagineType = 0;
                break;
            case "IMAGINE":
            case 1:
                message.imagineType = 1;
                break;
            case "MEMU":
            case 2:
                message.imagineType = 2;
                break;
            case "FLASH":
            case 3:
                message.imagineType = 3;
                break;
            case "EDIT":
            case 4:
                message.imagineType = 4;
                break;
            default:
                if (typeof object.imagineType === "number" && (object.imagineType | 0) === object.imagineType)
                    message.imagineType = object.imagineType;
            }
            return message;
        };

        /**
         * Creates a plain object from a BotImagineMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotImagineMetadata
         * @static
         * @param {BotMetadata.BotImagineMetadata} message BotImagineMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotImagineMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.imagineType != null && $Object.hasOwnProperty.call(message, "imagineType"))
                object.imagineType = options.enums === $String ? $root.BotMetadata.BotImagineMetadata.ImagineType[message.imagineType] === $undefined ? message.imagineType : $root.BotMetadata.BotImagineMetadata.ImagineType[message.imagineType] : message.imagineType;
            return object;
        };

        /**
         * Converts this BotImagineMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotImagineMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotImagineMetadata.prototype.toJSON = function() {
            return BotImagineMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotImagineMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotImagineMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotImagineMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotImagineMetadata";
        };

        /**
         * ImagineType enum.
         * @name BotMetadata.BotImagineMetadata.ImagineType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} IMAGINE=1 IMAGINE value
         * @property {number} MEMU=2 MEMU value
         * @property {number} FLASH=3 FLASH value
         * @property {number} EDIT=4 EDIT value
         */
        BotImagineMetadata.ImagineType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "IMAGINE"] = 1;
            values[valuesById[2] = "MEMU"] = 2;
            values[valuesById[3] = "FLASH"] = 3;
            values[valuesById[4] = "EDIT"] = 4;
            return values;
        })();

        return BotImagineMetadata;
    })();

    BotMetadata.BotQuotaMetadata = (function() {

        /**
         * Properties of a BotQuotaMetadata.
         * @typedef {Object} BotMetadata.BotQuotaMetadata.$Properties
         * @property {Array.<BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties>|null} [botFeatureQuotaMetadata] BotQuotaMetadata botFeatureQuotaMetadata
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotQuotaMetadata.
         * @memberof BotMetadata
         * @interface IBotQuotaMetadata
         * @augments BotMetadata.BotQuotaMetadata.$Properties
         * @deprecated Use BotMetadata.BotQuotaMetadata.$Properties instead.
         */

        /**
         * Shape of a BotQuotaMetadata.
         * @typedef {BotMetadata.BotQuotaMetadata.$Properties} BotMetadata.BotQuotaMetadata.$Shape
         */

        /**
         * Constructs a new BotQuotaMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotQuotaMetadata.
         * @constructor
         * @param {BotMetadata.BotQuotaMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotQuotaMetadata = function (properties) {
            this.botFeatureQuotaMetadata = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotQuotaMetadata botFeatureQuotaMetadata.
         * @member {Array.<BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties>} botFeatureQuotaMetadata
         * @memberof BotMetadata.BotQuotaMetadata
         * @instance
         */
        BotQuotaMetadata.prototype.botFeatureQuotaMetadata = $util.emptyArray;

        /**
         * Creates a new BotQuotaMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotQuotaMetadata
         * @static
         * @param {BotMetadata.BotQuotaMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotQuotaMetadata} BotQuotaMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotQuotaMetadata.$Shape): BotMetadata.BotQuotaMetadata & BotMetadata.BotQuotaMetadata.$Shape;
         *   (properties?: BotMetadata.BotQuotaMetadata.$Properties): BotMetadata.BotQuotaMetadata;
         * }}
         */
        BotQuotaMetadata.create = function(properties) {
            return new BotQuotaMetadata(properties);
        };

        /**
         * Encodes the specified BotQuotaMetadata message. Does not implicitly {@link BotMetadata.BotQuotaMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotQuotaMetadata
         * @static
         * @param {BotMetadata.BotQuotaMetadata.$Properties} message BotQuotaMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotQuotaMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.botFeatureQuotaMetadata != null && message.botFeatureQuotaMetadata.length)
                for (var i = 0; i < message.botFeatureQuotaMetadata.length; ++i)
                    $root.BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.encode(message.botFeatureQuotaMetadata[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotQuotaMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotQuotaMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotQuotaMetadata
         * @static
         * @param {BotMetadata.BotQuotaMetadata.$Properties} message BotQuotaMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotQuotaMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotQuotaMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotQuotaMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotQuotaMetadata & BotMetadata.BotQuotaMetadata.$Shape} BotQuotaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotQuotaMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotQuotaMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.botFeatureQuotaMetadata && message.botFeatureQuotaMetadata.length))
                            message.botFeatureQuotaMetadata = [];
                        message.botFeatureQuotaMetadata.push($root.BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotQuotaMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotQuotaMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotQuotaMetadata & BotMetadata.BotQuotaMetadata.$Shape} BotQuotaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotQuotaMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotQuotaMetadata message.
         * @function verify
         * @memberof BotMetadata.BotQuotaMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotQuotaMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.botFeatureQuotaMetadata != null && $Object.hasOwnProperty.call(message, "botFeatureQuotaMetadata")) {
                if (!$Array.isArray(message.botFeatureQuotaMetadata))
                    return "botFeatureQuotaMetadata: array expected";
                for (var i = 0; i < message.botFeatureQuotaMetadata.length; ++i) {
                    var error = $root.BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.verify(message.botFeatureQuotaMetadata[i], _depth + 1);
                    if (error)
                        return "botFeatureQuotaMetadata." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BotQuotaMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotQuotaMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotQuotaMetadata} BotQuotaMetadata
         */
        BotQuotaMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotQuotaMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotQuotaMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotQuotaMetadata();
            if (object.botFeatureQuotaMetadata) {
                if (!$Array.isArray(object.botFeatureQuotaMetadata))
                    throw $TypeError(".BotMetadata.BotQuotaMetadata.botFeatureQuotaMetadata: array expected");
                message.botFeatureQuotaMetadata = $Array(object.botFeatureQuotaMetadata.length);
                for (var i = 0; i < object.botFeatureQuotaMetadata.length; ++i) {
                    if (!$util.isObject(object.botFeatureQuotaMetadata[i]))
                        throw $TypeError(".BotMetadata.BotQuotaMetadata.botFeatureQuotaMetadata: object expected");
                    message.botFeatureQuotaMetadata[i] = $root.BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.fromObject(object.botFeatureQuotaMetadata[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BotQuotaMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotQuotaMetadata
         * @static
         * @param {BotMetadata.BotQuotaMetadata} message BotQuotaMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotQuotaMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.botFeatureQuotaMetadata = [];
            if (message.botFeatureQuotaMetadata && message.botFeatureQuotaMetadata.length) {
                object.botFeatureQuotaMetadata = $Array(message.botFeatureQuotaMetadata.length);
                for (var j = 0; j < message.botFeatureQuotaMetadata.length; ++j)
                    object.botFeatureQuotaMetadata[j] = $root.BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.toObject(message.botFeatureQuotaMetadata[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this BotQuotaMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotQuotaMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotQuotaMetadata.prototype.toJSON = function() {
            return BotQuotaMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotQuotaMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotQuotaMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotQuotaMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotQuotaMetadata";
        };

        BotQuotaMetadata.BotFeatureQuotaMetadata = (function() {

            /**
             * Properties of a BotFeatureQuotaMetadata.
             * @typedef {Object} BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties
             * @property {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType|null} [featureType] BotFeatureQuotaMetadata featureType
             * @property {number|null} [remainingQuota] BotFeatureQuotaMetadata remainingQuota
             * @property {number|Long|null} [expirationTimestamp] BotFeatureQuotaMetadata expirationTimestamp
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a BotFeatureQuotaMetadata.
             * @memberof BotMetadata.BotQuotaMetadata
             * @interface IBotFeatureQuotaMetadata
             * @augments BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties
             * @deprecated Use BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties instead.
             */

            /**
             * Shape of a BotFeatureQuotaMetadata.
             * @typedef {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties} BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape
             */

            /**
             * Constructs a new BotFeatureQuotaMetadata.
             * @memberof BotMetadata.BotQuotaMetadata
             * @classdesc Represents a BotFeatureQuotaMetadata.
             * @constructor
             * @param {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var BotFeatureQuotaMetadata = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * BotFeatureQuotaMetadata featureType.
             * @member {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType|null|undefined} featureType
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @instance
             */
            BotFeatureQuotaMetadata.prototype.featureType = null;

            /**
             * BotFeatureQuotaMetadata remainingQuota.
             * @member {number|null|undefined} remainingQuota
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @instance
             */
            BotFeatureQuotaMetadata.prototype.remainingQuota = null;

            /**
             * BotFeatureQuotaMetadata expirationTimestamp.
             * @member {number|Long|null|undefined} expirationTimestamp
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @instance
             */
            BotFeatureQuotaMetadata.prototype.expirationTimestamp = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotFeatureQuotaMetadata.prototype, "_featureType", {
                get: $util.oneOfGetter($oneOfFields = ["featureType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotFeatureQuotaMetadata.prototype, "_remainingQuota", {
                get: $util.oneOfGetter($oneOfFields = ["remainingQuota"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotFeatureQuotaMetadata.prototype, "_expirationTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["expirationTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BotFeatureQuotaMetadata instance using the specified properties.
             * @function create
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @static
             * @param {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties=} [properties] Properties to set
             * @returns {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata} BotFeatureQuotaMetadata instance
             * @type {{
             *   (properties: BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape): BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata & BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape;
             *   (properties?: BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties): BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata;
             * }}
             */
            BotFeatureQuotaMetadata.create = function(properties) {
                return new BotFeatureQuotaMetadata(properties);
            };

            /**
             * Encodes the specified BotFeatureQuotaMetadata message. Does not implicitly {@link BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.verify|verify} messages.
             * @function encode
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @static
             * @param {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties} message BotFeatureQuotaMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BotFeatureQuotaMetadata.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.featureType != null && $Object.hasOwnProperty.call(message, "featureType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.featureType);
                if (message.remainingQuota != null && $Object.hasOwnProperty.call(message, "remainingQuota"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.remainingQuota);
                if (message.expirationTimestamp != null && $Object.hasOwnProperty.call(message, "expirationTimestamp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.expirationTimestamp);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BotFeatureQuotaMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @static
             * @param {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Properties} message BotFeatureQuotaMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BotFeatureQuotaMetadata.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a BotFeatureQuotaMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata & BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape} BotFeatureQuotaMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BotFeatureQuotaMetadata.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.featureType = reader.int32();
                            message._featureType = "featureType";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.remainingQuota = reader.uint32();
                            message._remainingQuota = "remainingQuota";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.expirationTimestamp = reader.uint64();
                            message._expirationTimestamp = "expirationTimestamp";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a BotFeatureQuotaMetadata message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata & BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.$Shape} BotFeatureQuotaMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BotFeatureQuotaMetadata.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.size());
            };

            /**
             * Verifies a BotFeatureQuotaMetadata message.
             * @function verify
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BotFeatureQuotaMetadata.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.featureType != null && $Object.hasOwnProperty.call(message, "featureType")) {
                    properties._featureType = 1;
                    if (typeof message.featureType !== "number" || (message.featureType | 0) !== message.featureType)
                        return "featureType: enum value expected";
                }
                if (message.remainingQuota != null && $Object.hasOwnProperty.call(message, "remainingQuota")) {
                    properties._remainingQuota = 1;
                    if (!$util.isInteger(message.remainingQuota))
                        return "remainingQuota: integer expected";
                }
                if (message.expirationTimestamp != null && $Object.hasOwnProperty.call(message, "expirationTimestamp")) {
                    properties._expirationTimestamp = 1;
                    if (!$util.isInteger(message.expirationTimestamp) && !(message.expirationTimestamp && $util.isInteger(message.expirationTimestamp.low) && $util.isInteger(message.expirationTimestamp.high)))
                        return "expirationTimestamp: integer|Long expected";
                }
                return null;
            };

            /**
             * Creates a BotFeatureQuotaMetadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata} BotFeatureQuotaMetadata
             */
            BotFeatureQuotaMetadata.fromObject = function (object, _depth) {
                if (object instanceof $root.BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata();
                switch (object.featureType) {
                case "UNKNOWN_FEATURE":
                case 0:
                    message.featureType = 0;
                    break;
                case "REASONING_FEATURE":
                case 1:
                    message.featureType = 1;
                    break;
                default:
                    if (typeof object.featureType === "number" && (object.featureType | 0) === object.featureType)
                        message.featureType = object.featureType;
                }
                if (object.remainingQuota != null)
                    message.remainingQuota = object.remainingQuota >>> 0;
                if (object.expirationTimestamp != null)
                    if ($util.Long)
                        message.expirationTimestamp = $util.Long.fromValue(object.expirationTimestamp, true);
                    else if (typeof object.expirationTimestamp === "string")
                        message.expirationTimestamp = $parseInt(object.expirationTimestamp, 10);
                    else if (typeof object.expirationTimestamp === "number")
                        message.expirationTimestamp = object.expirationTimestamp;
                    else if (typeof object.expirationTimestamp === "object")
                        message.expirationTimestamp = new $util.LongBits(object.expirationTimestamp.low >>> 0, object.expirationTimestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a BotFeatureQuotaMetadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @static
             * @param {BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata} message BotFeatureQuotaMetadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BotFeatureQuotaMetadata.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.featureType != null && $Object.hasOwnProperty.call(message, "featureType"))
                    object.featureType = options.enums === $String ? $root.BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType[message.featureType] === $undefined ? message.featureType : $root.BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType[message.featureType] : message.featureType;
                if (message.remainingQuota != null && $Object.hasOwnProperty.call(message, "remainingQuota"))
                    object.remainingQuota = message.remainingQuota;
                if (message.expirationTimestamp != null && $Object.hasOwnProperty.call(message, "expirationTimestamp"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.expirationTimestamp = typeof message.expirationTimestamp === "number" ? $BigInt(message.expirationTimestamp) : $util.Long.fromBits(message.expirationTimestamp.low >>> 0, message.expirationTimestamp.high >>> 0, true).toBigInt();
                    else if (typeof message.expirationTimestamp === "number")
                        object.expirationTimestamp = options.longs === $String ? $String(message.expirationTimestamp) : message.expirationTimestamp;
                    else
                        object.expirationTimestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.expirationTimestamp) : options.longs === $Number ? new $util.LongBits(message.expirationTimestamp.low >>> 0, message.expirationTimestamp.high >>> 0).toNumber(true) : message.expirationTimestamp;
                return object;
            };

            /**
             * Converts this BotFeatureQuotaMetadata to JSON.
             * @function toJSON
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BotFeatureQuotaMetadata.prototype.toJSON = function() {
                return BotFeatureQuotaMetadata.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BotFeatureQuotaMetadata
             * @function getTypeUrl
             * @memberof BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BotFeatureQuotaMetadata.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata";
            };

            /**
             * BotFeatureType enum.
             * @name BotMetadata.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType
             * @enum {number}
             * @property {number} UNKNOWN_FEATURE=0 UNKNOWN_FEATURE value
             * @property {number} REASONING_FEATURE=1 REASONING_FEATURE value
             */
            BotFeatureQuotaMetadata.BotFeatureType = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_FEATURE"] = 0;
                values[valuesById[1] = "REASONING_FEATURE"] = 1;
                return values;
            })();

            return BotFeatureQuotaMetadata;
        })();

        return BotQuotaMetadata;
    })();

    BotMetadata.BotModeSelectionMetadata = (function() {

        /**
         * Properties of a BotModeSelectionMetadata.
         * @typedef {Object} BotMetadata.BotModeSelectionMetadata.$Properties
         * @property {Array.<BotMetadata.BotModeSelectionMetadata.BotUserSelectionMode>|null} [mode] BotModeSelectionMetadata mode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotModeSelectionMetadata.
         * @memberof BotMetadata
         * @interface IBotModeSelectionMetadata
         * @augments BotMetadata.BotModeSelectionMetadata.$Properties
         * @deprecated Use BotMetadata.BotModeSelectionMetadata.$Properties instead.
         */

        /**
         * Shape of a BotModeSelectionMetadata.
         * @typedef {BotMetadata.BotModeSelectionMetadata.$Properties} BotMetadata.BotModeSelectionMetadata.$Shape
         */

        /**
         * Constructs a new BotModeSelectionMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotModeSelectionMetadata.
         * @constructor
         * @param {BotMetadata.BotModeSelectionMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotModeSelectionMetadata = function (properties) {
            this.mode = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotModeSelectionMetadata mode.
         * @member {Array.<BotMetadata.BotModeSelectionMetadata.BotUserSelectionMode>} mode
         * @memberof BotMetadata.BotModeSelectionMetadata
         * @instance
         */
        BotModeSelectionMetadata.prototype.mode = $util.emptyArray;

        /**
         * Creates a new BotModeSelectionMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotModeSelectionMetadata
         * @static
         * @param {BotMetadata.BotModeSelectionMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotModeSelectionMetadata} BotModeSelectionMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotModeSelectionMetadata.$Shape): BotMetadata.BotModeSelectionMetadata & BotMetadata.BotModeSelectionMetadata.$Shape;
         *   (properties?: BotMetadata.BotModeSelectionMetadata.$Properties): BotMetadata.BotModeSelectionMetadata;
         * }}
         */
        BotModeSelectionMetadata.create = function(properties) {
            return new BotModeSelectionMetadata(properties);
        };

        /**
         * Encodes the specified BotModeSelectionMetadata message. Does not implicitly {@link BotMetadata.BotModeSelectionMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotModeSelectionMetadata
         * @static
         * @param {BotMetadata.BotModeSelectionMetadata.$Properties} message BotModeSelectionMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotModeSelectionMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mode != null && message.mode.length)
                writer.uint32(/* id 1, wireType 2 =*/10).int32s(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotModeSelectionMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotModeSelectionMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotModeSelectionMetadata
         * @static
         * @param {BotMetadata.BotModeSelectionMetadata.$Properties} message BotModeSelectionMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotModeSelectionMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotModeSelectionMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotModeSelectionMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotModeSelectionMetadata & BotMetadata.BotModeSelectionMetadata.$Shape} BotModeSelectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotModeSelectionMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotModeSelectionMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType === 2) {
                            if (!(message.mode && message.mode.length))
                                message.mode = [];
                            reader.int32s(message.mode);
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.mode && message.mode.length))
                            message.mode = [];
                        message.mode.push(reader.int32());
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotModeSelectionMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotModeSelectionMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotModeSelectionMetadata & BotMetadata.BotModeSelectionMetadata.$Shape} BotModeSelectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotModeSelectionMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotModeSelectionMetadata message.
         * @function verify
         * @memberof BotMetadata.BotModeSelectionMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotModeSelectionMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode")) {
                if (!$Array.isArray(message.mode))
                    return "mode: array expected";
                for (var i = 0; i < message.mode.length; ++i)
                    if (typeof message.mode[i] !== "number" || (message.mode[i] | 0) !== message.mode[i])
                        return "mode: enum value[] expected";
            }
            return null;
        };

        /**
         * Creates a BotModeSelectionMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotModeSelectionMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotModeSelectionMetadata} BotModeSelectionMetadata
         */
        BotModeSelectionMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotModeSelectionMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotModeSelectionMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotModeSelectionMetadata();
            if (object.mode) {
                if (!$Array.isArray(object.mode))
                    throw $TypeError(".BotMetadata.BotModeSelectionMetadata.mode: array expected");
                message.mode = [];
                for (var i = 0; i < object.mode.length; ++i)
                    switch (object.mode[i]) {
                    case "UNKNOWN_MODE":
                    case 0:
                        message.mode[message.mode.length] = 0;
                        break;
                    case "REASONING_MODE":
                    case 1:
                        message.mode[message.mode.length] = 1;
                        break;
                    default:
                        if (typeof object.mode[i] === "number" && (object.mode[i] | 0) === object.mode[i])
                            message.mode[message.mode.length] = object.mode[i];
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a BotModeSelectionMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotModeSelectionMetadata
         * @static
         * @param {BotMetadata.BotModeSelectionMetadata} message BotModeSelectionMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotModeSelectionMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.mode = [];
            if (message.mode && message.mode.length) {
                object.mode = $Array(message.mode.length);
                for (var j = 0; j < message.mode.length; ++j)
                    object.mode[j] = options.enums === $String ? $root.BotMetadata.BotModeSelectionMetadata.BotUserSelectionMode[message.mode[j]] === $undefined ? message.mode[j] : $root.BotMetadata.BotModeSelectionMetadata.BotUserSelectionMode[message.mode[j]] : message.mode[j];
            }
            return object;
        };

        /**
         * Converts this BotModeSelectionMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotModeSelectionMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotModeSelectionMetadata.prototype.toJSON = function() {
            return BotModeSelectionMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotModeSelectionMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotModeSelectionMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotModeSelectionMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotModeSelectionMetadata";
        };

        /**
         * BotUserSelectionMode enum.
         * @name BotMetadata.BotModeSelectionMetadata.BotUserSelectionMode
         * @enum {number}
         * @property {number} UNKNOWN_MODE=0 UNKNOWN_MODE value
         * @property {number} REASONING_MODE=1 REASONING_MODE value
         */
        BotModeSelectionMetadata.BotUserSelectionMode = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_MODE"] = 0;
            values[valuesById[1] = "REASONING_MODE"] = 1;
            return values;
        })();

        return BotModeSelectionMetadata;
    })();

    BotMetadata.BotCapabilityMetadata = (function() {

        /**
         * Properties of a BotCapabilityMetadata.
         * @typedef {Object} BotMetadata.BotCapabilityMetadata.$Properties
         * @property {Array.<BotMetadata.BotCapabilityMetadata.BotCapabilityType>|null} [capabilities] BotCapabilityMetadata capabilities
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotCapabilityMetadata.
         * @memberof BotMetadata
         * @interface IBotCapabilityMetadata
         * @augments BotMetadata.BotCapabilityMetadata.$Properties
         * @deprecated Use BotMetadata.BotCapabilityMetadata.$Properties instead.
         */

        /**
         * Shape of a BotCapabilityMetadata.
         * @typedef {BotMetadata.BotCapabilityMetadata.$Properties} BotMetadata.BotCapabilityMetadata.$Shape
         */

        /**
         * Constructs a new BotCapabilityMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotCapabilityMetadata.
         * @constructor
         * @param {BotMetadata.BotCapabilityMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotCapabilityMetadata = function (properties) {
            this.capabilities = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotCapabilityMetadata capabilities.
         * @member {Array.<BotMetadata.BotCapabilityMetadata.BotCapabilityType>} capabilities
         * @memberof BotMetadata.BotCapabilityMetadata
         * @instance
         */
        BotCapabilityMetadata.prototype.capabilities = $util.emptyArray;

        /**
         * Creates a new BotCapabilityMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotCapabilityMetadata
         * @static
         * @param {BotMetadata.BotCapabilityMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotCapabilityMetadata} BotCapabilityMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotCapabilityMetadata.$Shape): BotMetadata.BotCapabilityMetadata & BotMetadata.BotCapabilityMetadata.$Shape;
         *   (properties?: BotMetadata.BotCapabilityMetadata.$Properties): BotMetadata.BotCapabilityMetadata;
         * }}
         */
        BotCapabilityMetadata.create = function(properties) {
            return new BotCapabilityMetadata(properties);
        };

        /**
         * Encodes the specified BotCapabilityMetadata message. Does not implicitly {@link BotMetadata.BotCapabilityMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotCapabilityMetadata
         * @static
         * @param {BotMetadata.BotCapabilityMetadata.$Properties} message BotCapabilityMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotCapabilityMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.capabilities != null && message.capabilities.length)
                writer.uint32(/* id 1, wireType 2 =*/10).int32s(message.capabilities);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotCapabilityMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotCapabilityMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotCapabilityMetadata
         * @static
         * @param {BotMetadata.BotCapabilityMetadata.$Properties} message BotCapabilityMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotCapabilityMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotCapabilityMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotCapabilityMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotCapabilityMetadata & BotMetadata.BotCapabilityMetadata.$Shape} BotCapabilityMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotCapabilityMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotCapabilityMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType === 2) {
                            if (!(message.capabilities && message.capabilities.length))
                                message.capabilities = [];
                            reader.int32s(message.capabilities);
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.capabilities && message.capabilities.length))
                            message.capabilities = [];
                        message.capabilities.push(reader.int32());
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotCapabilityMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotCapabilityMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotCapabilityMetadata & BotMetadata.BotCapabilityMetadata.$Shape} BotCapabilityMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotCapabilityMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotCapabilityMetadata message.
         * @function verify
         * @memberof BotMetadata.BotCapabilityMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotCapabilityMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.capabilities != null && $Object.hasOwnProperty.call(message, "capabilities")) {
                if (!$Array.isArray(message.capabilities))
                    return "capabilities: array expected";
                for (var i = 0; i < message.capabilities.length; ++i)
                    if (typeof message.capabilities[i] !== "number" || (message.capabilities[i] | 0) !== message.capabilities[i])
                        return "capabilities: enum value[] expected";
            }
            return null;
        };

        /**
         * Creates a BotCapabilityMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotCapabilityMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotCapabilityMetadata} BotCapabilityMetadata
         */
        BotCapabilityMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotCapabilityMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotCapabilityMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotCapabilityMetadata();
            if (object.capabilities) {
                if (!$Array.isArray(object.capabilities))
                    throw $TypeError(".BotMetadata.BotCapabilityMetadata.capabilities: array expected");
                message.capabilities = [];
                for (var i = 0; i < object.capabilities.length; ++i)
                    switch (object.capabilities[i]) {
                    case "UNKNOWN":
                    case 0:
                        message.capabilities[message.capabilities.length] = 0;
                        break;
                    case "PROGRESS_INDICATOR":
                    case 1:
                        message.capabilities[message.capabilities.length] = 1;
                        break;
                    case "RICH_RESPONSE_HEADING":
                    case 2:
                        message.capabilities[message.capabilities.length] = 2;
                        break;
                    case "RICH_RESPONSE_NESTED_LIST":
                    case 3:
                        message.capabilities[message.capabilities.length] = 3;
                        break;
                    case "AI_MEMORY":
                    case 4:
                        message.capabilities[message.capabilities.length] = 4;
                        break;
                    case "RICH_RESPONSE_THREAD_SURFING":
                    case 5:
                        message.capabilities[message.capabilities.length] = 5;
                        break;
                    case "RICH_RESPONSE_TABLE":
                    case 6:
                        message.capabilities[message.capabilities.length] = 6;
                        break;
                    case "RICH_RESPONSE_CODE":
                    case 7:
                        message.capabilities[message.capabilities.length] = 7;
                        break;
                    case "RICH_RESPONSE_STRUCTURED_RESPONSE":
                    case 8:
                        message.capabilities[message.capabilities.length] = 8;
                        break;
                    case "RICH_RESPONSE_INLINE_IMAGE":
                    case 9:
                        message.capabilities[message.capabilities.length] = 9;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_CONTROL":
                    case 10:
                        message.capabilities[message.capabilities.length] = 10;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_1":
                    case 11:
                        message.capabilities[message.capabilities.length] = 11;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_2":
                    case 12:
                        message.capabilities[message.capabilities.length] = 12;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_3":
                    case 13:
                        message.capabilities[message.capabilities.length] = 13;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_4":
                    case 14:
                        message.capabilities[message.capabilities.length] = 14;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_5":
                    case 15:
                        message.capabilities[message.capabilities.length] = 15;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_6":
                    case 16:
                        message.capabilities[message.capabilities.length] = 16;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_7":
                    case 17:
                        message.capabilities[message.capabilities.length] = 17;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_8":
                    case 18:
                        message.capabilities[message.capabilities.length] = 18;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_9":
                    case 19:
                        message.capabilities[message.capabilities.length] = 19;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_10":
                    case 20:
                        message.capabilities[message.capabilities.length] = 20;
                        break;
                    case "RICH_RESPONSE_SUB_HEADING":
                    case 21:
                        message.capabilities[message.capabilities.length] = 21;
                        break;
                    case "RICH_RESPONSE_GRID_IMAGE":
                    case 22:
                        message.capabilities[message.capabilities.length] = 22;
                        break;
                    case "AI_STUDIO_UGC_MEMORY":
                    case 23:
                        message.capabilities[message.capabilities.length] = 23;
                        break;
                    case "RICH_RESPONSE_LATEX":
                    case 24:
                        message.capabilities[message.capabilities.length] = 24;
                        break;
                    case "RICH_RESPONSE_MAPS":
                    case 25:
                        message.capabilities[message.capabilities.length] = 25;
                        break;
                    case "RICH_RESPONSE_INLINE_REELS":
                    case 26:
                        message.capabilities[message.capabilities.length] = 26;
                        break;
                    case "AGENTIC_PLANNING":
                    case 27:
                        message.capabilities[message.capabilities.length] = 27;
                        break;
                    case "ACCOUNT_LINKING":
                    case 28:
                        message.capabilities[message.capabilities.length] = 28;
                        break;
                    case "STREAMING_DISAGGREGATION":
                    case 29:
                        message.capabilities[message.capabilities.length] = 29;
                        break;
                    case "RICH_RESPONSE_GRID_IMAGE_3P":
                    case 30:
                        message.capabilities[message.capabilities.length] = 30;
                        break;
                    case "RICH_RESPONSE_LATEX_INLINE":
                    case 31:
                        message.capabilities[message.capabilities.length] = 31;
                        break;
                    case "QUERY_PLAN":
                    case 32:
                        message.capabilities[message.capabilities.length] = 32;
                        break;
                    case "PROACTIVE_MESSAGE":
                    case 33:
                        message.capabilities[message.capabilities.length] = 33;
                        break;
                    case "RICH_RESPONSE_UNIFIED_RESPONSE":
                    case 34:
                        message.capabilities[message.capabilities.length] = 34;
                        break;
                    case "PROMOTION_MESSAGE":
                    case 35:
                        message.capabilities[message.capabilities.length] = 35;
                        break;
                    case "SIMPLIFIED_PROFILE_PAGE":
                    case 36:
                        message.capabilities[message.capabilities.length] = 36;
                        break;
                    case "RICH_RESPONSE_SOURCES_IN_MESSAGE":
                    case 37:
                        message.capabilities[message.capabilities.length] = 37;
                        break;
                    case "RICH_RESPONSE_SIDE_BY_SIDE_SURVEY":
                    case 38:
                        message.capabilities[message.capabilities.length] = 38;
                        break;
                    case "RICH_RESPONSE_UNIFIED_TEXT_COMPONENT":
                    case 39:
                        message.capabilities[message.capabilities.length] = 39;
                        break;
                    case "AI_SHARED_MEMORY":
                    case 40:
                        message.capabilities[message.capabilities.length] = 40;
                        break;
                    case "RICH_RESPONSE_UNIFIED_SOURCES":
                    case 41:
                        message.capabilities[message.capabilities.length] = 41;
                        break;
                    case "RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS":
                    case 42:
                        message.capabilities[message.capabilities.length] = 42;
                        break;
                    default:
                        if (typeof object.capabilities[i] === "number" && (object.capabilities[i] | 0) === object.capabilities[i])
                            message.capabilities[message.capabilities.length] = object.capabilities[i];
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a BotCapabilityMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotCapabilityMetadata
         * @static
         * @param {BotMetadata.BotCapabilityMetadata} message BotCapabilityMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotCapabilityMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.capabilities = [];
            if (message.capabilities && message.capabilities.length) {
                object.capabilities = $Array(message.capabilities.length);
                for (var j = 0; j < message.capabilities.length; ++j)
                    object.capabilities[j] = options.enums === $String ? $root.BotMetadata.BotCapabilityMetadata.BotCapabilityType[message.capabilities[j]] === $undefined ? message.capabilities[j] : $root.BotMetadata.BotCapabilityMetadata.BotCapabilityType[message.capabilities[j]] : message.capabilities[j];
            }
            return object;
        };

        /**
         * Converts this BotCapabilityMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotCapabilityMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotCapabilityMetadata.prototype.toJSON = function() {
            return BotCapabilityMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotCapabilityMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotCapabilityMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotCapabilityMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotCapabilityMetadata";
        };

        /**
         * BotCapabilityType enum.
         * @name BotMetadata.BotCapabilityMetadata.BotCapabilityType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} PROGRESS_INDICATOR=1 PROGRESS_INDICATOR value
         * @property {number} RICH_RESPONSE_HEADING=2 RICH_RESPONSE_HEADING value
         * @property {number} RICH_RESPONSE_NESTED_LIST=3 RICH_RESPONSE_NESTED_LIST value
         * @property {number} AI_MEMORY=4 AI_MEMORY value
         * @property {number} RICH_RESPONSE_THREAD_SURFING=5 RICH_RESPONSE_THREAD_SURFING value
         * @property {number} RICH_RESPONSE_TABLE=6 RICH_RESPONSE_TABLE value
         * @property {number} RICH_RESPONSE_CODE=7 RICH_RESPONSE_CODE value
         * @property {number} RICH_RESPONSE_STRUCTURED_RESPONSE=8 RICH_RESPONSE_STRUCTURED_RESPONSE value
         * @property {number} RICH_RESPONSE_INLINE_IMAGE=9 RICH_RESPONSE_INLINE_IMAGE value
         * @property {number} WA_IG_1P_PLUGIN_RANKING_CONTROL=10 WA_IG_1P_PLUGIN_RANKING_CONTROL value
         * @property {number} WA_IG_1P_PLUGIN_RANKING_UPDATE_1=11 WA_IG_1P_PLUGIN_RANKING_UPDATE_1 value
         * @property {number} WA_IG_1P_PLUGIN_RANKING_UPDATE_2=12 WA_IG_1P_PLUGIN_RANKING_UPDATE_2 value
         * @property {number} WA_IG_1P_PLUGIN_RANKING_UPDATE_3=13 WA_IG_1P_PLUGIN_RANKING_UPDATE_3 value
         * @property {number} WA_IG_1P_PLUGIN_RANKING_UPDATE_4=14 WA_IG_1P_PLUGIN_RANKING_UPDATE_4 value
         * @property {number} WA_IG_1P_PLUGIN_RANKING_UPDATE_5=15 WA_IG_1P_PLUGIN_RANKING_UPDATE_5 value
         * @property {number} WA_IG_1P_PLUGIN_RANKING_UPDATE_6=16 WA_IG_1P_PLUGIN_RANKING_UPDATE_6 value
         * @property {number} WA_IG_1P_PLUGIN_RANKING_UPDATE_7=17 WA_IG_1P_PLUGIN_RANKING_UPDATE_7 value
         * @property {number} WA_IG_1P_PLUGIN_RANKING_UPDATE_8=18 WA_IG_1P_PLUGIN_RANKING_UPDATE_8 value
         * @property {number} WA_IG_1P_PLUGIN_RANKING_UPDATE_9=19 WA_IG_1P_PLUGIN_RANKING_UPDATE_9 value
         * @property {number} WA_IG_1P_PLUGIN_RANKING_UPDATE_10=20 WA_IG_1P_PLUGIN_RANKING_UPDATE_10 value
         * @property {number} RICH_RESPONSE_SUB_HEADING=21 RICH_RESPONSE_SUB_HEADING value
         * @property {number} RICH_RESPONSE_GRID_IMAGE=22 RICH_RESPONSE_GRID_IMAGE value
         * @property {number} AI_STUDIO_UGC_MEMORY=23 AI_STUDIO_UGC_MEMORY value
         * @property {number} RICH_RESPONSE_LATEX=24 RICH_RESPONSE_LATEX value
         * @property {number} RICH_RESPONSE_MAPS=25 RICH_RESPONSE_MAPS value
         * @property {number} RICH_RESPONSE_INLINE_REELS=26 RICH_RESPONSE_INLINE_REELS value
         * @property {number} AGENTIC_PLANNING=27 AGENTIC_PLANNING value
         * @property {number} ACCOUNT_LINKING=28 ACCOUNT_LINKING value
         * @property {number} STREAMING_DISAGGREGATION=29 STREAMING_DISAGGREGATION value
         * @property {number} RICH_RESPONSE_GRID_IMAGE_3P=30 RICH_RESPONSE_GRID_IMAGE_3P value
         * @property {number} RICH_RESPONSE_LATEX_INLINE=31 RICH_RESPONSE_LATEX_INLINE value
         * @property {number} QUERY_PLAN=32 QUERY_PLAN value
         * @property {number} PROACTIVE_MESSAGE=33 PROACTIVE_MESSAGE value
         * @property {number} RICH_RESPONSE_UNIFIED_RESPONSE=34 RICH_RESPONSE_UNIFIED_RESPONSE value
         * @property {number} PROMOTION_MESSAGE=35 PROMOTION_MESSAGE value
         * @property {number} SIMPLIFIED_PROFILE_PAGE=36 SIMPLIFIED_PROFILE_PAGE value
         * @property {number} RICH_RESPONSE_SOURCES_IN_MESSAGE=37 RICH_RESPONSE_SOURCES_IN_MESSAGE value
         * @property {number} RICH_RESPONSE_SIDE_BY_SIDE_SURVEY=38 RICH_RESPONSE_SIDE_BY_SIDE_SURVEY value
         * @property {number} RICH_RESPONSE_UNIFIED_TEXT_COMPONENT=39 RICH_RESPONSE_UNIFIED_TEXT_COMPONENT value
         * @property {number} AI_SHARED_MEMORY=40 AI_SHARED_MEMORY value
         * @property {number} RICH_RESPONSE_UNIFIED_SOURCES=41 RICH_RESPONSE_UNIFIED_SOURCES value
         * @property {number} RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS=42 RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS value
         */
        BotCapabilityMetadata.BotCapabilityType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PROGRESS_INDICATOR"] = 1;
            values[valuesById[2] = "RICH_RESPONSE_HEADING"] = 2;
            values[valuesById[3] = "RICH_RESPONSE_NESTED_LIST"] = 3;
            values[valuesById[4] = "AI_MEMORY"] = 4;
            values[valuesById[5] = "RICH_RESPONSE_THREAD_SURFING"] = 5;
            values[valuesById[6] = "RICH_RESPONSE_TABLE"] = 6;
            values[valuesById[7] = "RICH_RESPONSE_CODE"] = 7;
            values[valuesById[8] = "RICH_RESPONSE_STRUCTURED_RESPONSE"] = 8;
            values[valuesById[9] = "RICH_RESPONSE_INLINE_IMAGE"] = 9;
            values[valuesById[10] = "WA_IG_1P_PLUGIN_RANKING_CONTROL"] = 10;
            values[valuesById[11] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_1"] = 11;
            values[valuesById[12] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_2"] = 12;
            values[valuesById[13] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_3"] = 13;
            values[valuesById[14] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_4"] = 14;
            values[valuesById[15] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_5"] = 15;
            values[valuesById[16] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_6"] = 16;
            values[valuesById[17] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_7"] = 17;
            values[valuesById[18] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_8"] = 18;
            values[valuesById[19] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_9"] = 19;
            values[valuesById[20] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_10"] = 20;
            values[valuesById[21] = "RICH_RESPONSE_SUB_HEADING"] = 21;
            values[valuesById[22] = "RICH_RESPONSE_GRID_IMAGE"] = 22;
            values[valuesById[23] = "AI_STUDIO_UGC_MEMORY"] = 23;
            values[valuesById[24] = "RICH_RESPONSE_LATEX"] = 24;
            values[valuesById[25] = "RICH_RESPONSE_MAPS"] = 25;
            values[valuesById[26] = "RICH_RESPONSE_INLINE_REELS"] = 26;
            values[valuesById[27] = "AGENTIC_PLANNING"] = 27;
            values[valuesById[28] = "ACCOUNT_LINKING"] = 28;
            values[valuesById[29] = "STREAMING_DISAGGREGATION"] = 29;
            values[valuesById[30] = "RICH_RESPONSE_GRID_IMAGE_3P"] = 30;
            values[valuesById[31] = "RICH_RESPONSE_LATEX_INLINE"] = 31;
            values[valuesById[32] = "QUERY_PLAN"] = 32;
            values[valuesById[33] = "PROACTIVE_MESSAGE"] = 33;
            values[valuesById[34] = "RICH_RESPONSE_UNIFIED_RESPONSE"] = 34;
            values[valuesById[35] = "PROMOTION_MESSAGE"] = 35;
            values[valuesById[36] = "SIMPLIFIED_PROFILE_PAGE"] = 36;
            values[valuesById[37] = "RICH_RESPONSE_SOURCES_IN_MESSAGE"] = 37;
            values[valuesById[38] = "RICH_RESPONSE_SIDE_BY_SIDE_SURVEY"] = 38;
            values[valuesById[39] = "RICH_RESPONSE_UNIFIED_TEXT_COMPONENT"] = 39;
            values[valuesById[40] = "AI_SHARED_MEMORY"] = 40;
            values[valuesById[41] = "RICH_RESPONSE_UNIFIED_SOURCES"] = 41;
            values[valuesById[42] = "RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS"] = 42;
            return values;
        })();

        return BotCapabilityMetadata;
    })();

    BotMetadata.BotProgressIndicatorMetadata = (function() {

        /**
         * Properties of a BotProgressIndicatorMetadata.
         * @typedef {Object} BotMetadata.BotProgressIndicatorMetadata.$Properties
         * @property {string|null} [progressDescription] BotProgressIndicatorMetadata progressDescription
         * @property {Array.<BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties>|null} [stepsMetadata] BotProgressIndicatorMetadata stepsMetadata
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotProgressIndicatorMetadata.
         * @memberof BotMetadata
         * @interface IBotProgressIndicatorMetadata
         * @augments BotMetadata.BotProgressIndicatorMetadata.$Properties
         * @deprecated Use BotMetadata.BotProgressIndicatorMetadata.$Properties instead.
         */

        /**
         * Shape of a BotProgressIndicatorMetadata.
         * @typedef {BotMetadata.BotProgressIndicatorMetadata.$Properties} BotMetadata.BotProgressIndicatorMetadata.$Shape
         */

        /**
         * Constructs a new BotProgressIndicatorMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotProgressIndicatorMetadata.
         * @constructor
         * @param {BotMetadata.BotProgressIndicatorMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotProgressIndicatorMetadata = function (properties) {
            this.stepsMetadata = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotProgressIndicatorMetadata progressDescription.
         * @member {string|null|undefined} progressDescription
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @instance
         */
        BotProgressIndicatorMetadata.prototype.progressDescription = null;

        /**
         * BotProgressIndicatorMetadata stepsMetadata.
         * @member {Array.<BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties>} stepsMetadata
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @instance
         */
        BotProgressIndicatorMetadata.prototype.stepsMetadata = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotProgressIndicatorMetadata.prototype, "_progressDescription", {
            get: $util.oneOfGetter($oneOfFields = ["progressDescription"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotProgressIndicatorMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @static
         * @param {BotMetadata.BotProgressIndicatorMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotProgressIndicatorMetadata} BotProgressIndicatorMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotProgressIndicatorMetadata.$Shape): BotMetadata.BotProgressIndicatorMetadata & BotMetadata.BotProgressIndicatorMetadata.$Shape;
         *   (properties?: BotMetadata.BotProgressIndicatorMetadata.$Properties): BotMetadata.BotProgressIndicatorMetadata;
         * }}
         */
        BotProgressIndicatorMetadata.create = function(properties) {
            return new BotProgressIndicatorMetadata(properties);
        };

        /**
         * Encodes the specified BotProgressIndicatorMetadata message. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @static
         * @param {BotMetadata.BotProgressIndicatorMetadata.$Properties} message BotProgressIndicatorMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotProgressIndicatorMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.progressDescription != null && $Object.hasOwnProperty.call(message, "progressDescription"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.progressDescription);
            if (message.stepsMetadata != null && message.stepsMetadata.length)
                for (var i = 0; i < message.stepsMetadata.length; ++i)
                    $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.encode(message.stepsMetadata[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotProgressIndicatorMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @static
         * @param {BotMetadata.BotProgressIndicatorMetadata.$Properties} message BotProgressIndicatorMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotProgressIndicatorMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotProgressIndicatorMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotProgressIndicatorMetadata & BotMetadata.BotProgressIndicatorMetadata.$Shape} BotProgressIndicatorMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotProgressIndicatorMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotProgressIndicatorMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.progressDescription = reader.stringVerify();
                        message._progressDescription = "progressDescription";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.stepsMetadata && message.stepsMetadata.length))
                            message.stepsMetadata = [];
                        message.stepsMetadata.push($root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotProgressIndicatorMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotProgressIndicatorMetadata & BotMetadata.BotProgressIndicatorMetadata.$Shape} BotProgressIndicatorMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotProgressIndicatorMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotProgressIndicatorMetadata message.
         * @function verify
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotProgressIndicatorMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.progressDescription != null && $Object.hasOwnProperty.call(message, "progressDescription")) {
                properties._progressDescription = 1;
                if (!$util.isString(message.progressDescription))
                    return "progressDescription: string expected";
            }
            if (message.stepsMetadata != null && $Object.hasOwnProperty.call(message, "stepsMetadata")) {
                if (!$Array.isArray(message.stepsMetadata))
                    return "stepsMetadata: array expected";
                for (var i = 0; i < message.stepsMetadata.length; ++i) {
                    var error = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.verify(message.stepsMetadata[i], _depth + 1);
                    if (error)
                        return "stepsMetadata." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BotProgressIndicatorMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotProgressIndicatorMetadata} BotProgressIndicatorMetadata
         */
        BotProgressIndicatorMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotProgressIndicatorMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotProgressIndicatorMetadata();
            if (object.progressDescription != null)
                message.progressDescription = $String(object.progressDescription);
            if (object.stepsMetadata) {
                if (!$Array.isArray(object.stepsMetadata))
                    throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.stepsMetadata: array expected");
                message.stepsMetadata = $Array(object.stepsMetadata.length);
                for (var i = 0; i < object.stepsMetadata.length; ++i) {
                    if (!$util.isObject(object.stepsMetadata[i]))
                        throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.stepsMetadata: object expected");
                    message.stepsMetadata[i] = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.fromObject(object.stepsMetadata[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BotProgressIndicatorMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @static
         * @param {BotMetadata.BotProgressIndicatorMetadata} message BotProgressIndicatorMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotProgressIndicatorMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.stepsMetadata = [];
            if (message.progressDescription != null && $Object.hasOwnProperty.call(message, "progressDescription"))
                object.progressDescription = message.progressDescription;
            if (message.stepsMetadata && message.stepsMetadata.length) {
                object.stepsMetadata = $Array(message.stepsMetadata.length);
                for (var j = 0; j < message.stepsMetadata.length; ++j)
                    object.stepsMetadata[j] = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.toObject(message.stepsMetadata[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this BotProgressIndicatorMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotProgressIndicatorMetadata.prototype.toJSON = function() {
            return BotProgressIndicatorMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotProgressIndicatorMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotProgressIndicatorMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotProgressIndicatorMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotProgressIndicatorMetadata";
        };

        BotProgressIndicatorMetadata.BotPlanningStepMetadata = (function() {

            /**
             * Properties of a BotPlanningStepMetadata.
             * @typedef {Object} BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties
             * @property {string|null} [statusTitle] BotPlanningStepMetadata statusTitle
             * @property {string|null} [statusBody] BotPlanningStepMetadata statusBody
             * @property {Array.<BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties>|null} [sourcesMetadata] BotPlanningStepMetadata sourcesMetadata
             * @property {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus|null} [status] BotPlanningStepMetadata status
             * @property {boolean|null} [isReasoning] BotPlanningStepMetadata isReasoning
             * @property {boolean|null} [isEnhancedSearch] BotPlanningStepMetadata isEnhancedSearch
             * @property {Array.<BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties>|null} [sections] BotPlanningStepMetadata sections
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a BotPlanningStepMetadata.
             * @memberof BotMetadata.BotProgressIndicatorMetadata
             * @interface IBotPlanningStepMetadata
             * @augments BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties
             * @deprecated Use BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties instead.
             */

            /**
             * Shape of a BotPlanningStepMetadata.
             * @typedef {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties} BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape
             */

            /**
             * Constructs a new BotPlanningStepMetadata.
             * @memberof BotMetadata.BotProgressIndicatorMetadata
             * @classdesc Represents a BotPlanningStepMetadata.
             * @constructor
             * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var BotPlanningStepMetadata = function (properties) {
                this.sourcesMetadata = [];
                this.sections = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * BotPlanningStepMetadata statusTitle.
             * @member {string|null|undefined} statusTitle
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @instance
             */
            BotPlanningStepMetadata.prototype.statusTitle = null;

            /**
             * BotPlanningStepMetadata statusBody.
             * @member {string|null|undefined} statusBody
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @instance
             */
            BotPlanningStepMetadata.prototype.statusBody = null;

            /**
             * BotPlanningStepMetadata sourcesMetadata.
             * @member {Array.<BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties>} sourcesMetadata
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @instance
             */
            BotPlanningStepMetadata.prototype.sourcesMetadata = $util.emptyArray;

            /**
             * BotPlanningStepMetadata status.
             * @member {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus|null|undefined} status
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @instance
             */
            BotPlanningStepMetadata.prototype.status = null;

            /**
             * BotPlanningStepMetadata isReasoning.
             * @member {boolean|null|undefined} isReasoning
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @instance
             */
            BotPlanningStepMetadata.prototype.isReasoning = null;

            /**
             * BotPlanningStepMetadata isEnhancedSearch.
             * @member {boolean|null|undefined} isEnhancedSearch
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @instance
             */
            BotPlanningStepMetadata.prototype.isEnhancedSearch = null;

            /**
             * BotPlanningStepMetadata sections.
             * @member {Array.<BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties>} sections
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @instance
             */
            BotPlanningStepMetadata.prototype.sections = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotPlanningStepMetadata.prototype, "_statusTitle", {
                get: $util.oneOfGetter($oneOfFields = ["statusTitle"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotPlanningStepMetadata.prototype, "_statusBody", {
                get: $util.oneOfGetter($oneOfFields = ["statusBody"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotPlanningStepMetadata.prototype, "_status", {
                get: $util.oneOfGetter($oneOfFields = ["status"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotPlanningStepMetadata.prototype, "_isReasoning", {
                get: $util.oneOfGetter($oneOfFields = ["isReasoning"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BotPlanningStepMetadata.prototype, "_isEnhancedSearch", {
                get: $util.oneOfGetter($oneOfFields = ["isEnhancedSearch"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BotPlanningStepMetadata instance using the specified properties.
             * @function create
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @static
             * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties=} [properties] Properties to set
             * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata} BotPlanningStepMetadata instance
             * @type {{
             *   (properties: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape;
             *   (properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata;
             * }}
             */
            BotPlanningStepMetadata.create = function(properties) {
                return new BotPlanningStepMetadata(properties);
            };

            /**
             * Encodes the specified BotPlanningStepMetadata message. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.verify|verify} messages.
             * @function encode
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @static
             * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties} message BotPlanningStepMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BotPlanningStepMetadata.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.statusTitle != null && $Object.hasOwnProperty.call(message, "statusTitle"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.statusTitle);
                if (message.statusBody != null && $Object.hasOwnProperty.call(message, "statusBody"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.statusBody);
                if (message.sourcesMetadata != null && message.sourcesMetadata.length)
                    for (var i = 0; i < message.sourcesMetadata.length; ++i)
                        $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.encode(message.sourcesMetadata[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
                if (message.isReasoning != null && $Object.hasOwnProperty.call(message, "isReasoning"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isReasoning);
                if (message.isEnhancedSearch != null && $Object.hasOwnProperty.call(message, "isEnhancedSearch"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isEnhancedSearch);
                if (message.sections != null && message.sections.length)
                    for (var i = 0; i < message.sections.length; ++i)
                        $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.encode(message.sections[i], writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BotPlanningStepMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @static
             * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Properties} message BotPlanningStepMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BotPlanningStepMetadata.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a BotPlanningStepMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape} BotPlanningStepMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BotPlanningStepMetadata.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.statusTitle = reader.stringVerify();
                            message._statusTitle = "statusTitle";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.statusBody = reader.stringVerify();
                            message._statusBody = "statusBody";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (!(message.sourcesMetadata && message.sourcesMetadata.length))
                                message.sourcesMetadata = [];
                            message.sourcesMetadata.push($root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.status = reader.int32();
                            message._status = "status";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.isReasoning = reader.bool();
                            message._isReasoning = "isReasoning";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            message.isEnhancedSearch = reader.bool();
                            message._isEnhancedSearch = "isEnhancedSearch";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            if (!(message.sections && message.sections.length))
                                message.sections = [];
                            message.sections.push($root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a BotPlanningStepMetadata message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.$Shape} BotPlanningStepMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BotPlanningStepMetadata.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.size());
            };

            /**
             * Verifies a BotPlanningStepMetadata message.
             * @function verify
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BotPlanningStepMetadata.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.statusTitle != null && $Object.hasOwnProperty.call(message, "statusTitle")) {
                    properties._statusTitle = 1;
                    if (!$util.isString(message.statusTitle))
                        return "statusTitle: string expected";
                }
                if (message.statusBody != null && $Object.hasOwnProperty.call(message, "statusBody")) {
                    properties._statusBody = 1;
                    if (!$util.isString(message.statusBody))
                        return "statusBody: string expected";
                }
                if (message.sourcesMetadata != null && $Object.hasOwnProperty.call(message, "sourcesMetadata")) {
                    if (!$Array.isArray(message.sourcesMetadata))
                        return "sourcesMetadata: array expected";
                    for (var i = 0; i < message.sourcesMetadata.length; ++i) {
                        var error = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.verify(message.sourcesMetadata[i], _depth + 1);
                        if (error)
                            return "sourcesMetadata." + error;
                    }
                }
                if (message.status != null && $Object.hasOwnProperty.call(message, "status")) {
                    properties._status = 1;
                    if (typeof message.status !== "number" || (message.status | 0) !== message.status)
                        return "status: enum value expected";
                }
                if (message.isReasoning != null && $Object.hasOwnProperty.call(message, "isReasoning")) {
                    properties._isReasoning = 1;
                    if (typeof message.isReasoning !== "boolean")
                        return "isReasoning: boolean expected";
                }
                if (message.isEnhancedSearch != null && $Object.hasOwnProperty.call(message, "isEnhancedSearch")) {
                    properties._isEnhancedSearch = 1;
                    if (typeof message.isEnhancedSearch !== "boolean")
                        return "isEnhancedSearch: boolean expected";
                }
                if (message.sections != null && $Object.hasOwnProperty.call(message, "sections")) {
                    if (!$Array.isArray(message.sections))
                        return "sections: array expected";
                    for (var i = 0; i < message.sections.length; ++i) {
                        var error = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.verify(message.sections[i], _depth + 1);
                        if (error)
                            return "sections." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a BotPlanningStepMetadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata} BotPlanningStepMetadata
             */
            BotPlanningStepMetadata.fromObject = function (object, _depth) {
                if (object instanceof $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata();
                if (object.statusTitle != null)
                    message.statusTitle = $String(object.statusTitle);
                if (object.statusBody != null)
                    message.statusBody = $String(object.statusBody);
                if (object.sourcesMetadata) {
                    if (!$Array.isArray(object.sourcesMetadata))
                        throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sourcesMetadata: array expected");
                    message.sourcesMetadata = $Array(object.sourcesMetadata.length);
                    for (var i = 0; i < object.sourcesMetadata.length; ++i) {
                        if (!$util.isObject(object.sourcesMetadata[i]))
                            throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sourcesMetadata: object expected");
                        message.sourcesMetadata[i] = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.fromObject(object.sourcesMetadata[i], _depth + 1);
                    }
                }
                switch (object.status) {
                case "UNKNOWN":
                case 0:
                    message.status = 0;
                    break;
                case "PLANNED":
                case 1:
                    message.status = 1;
                    break;
                case "EXECUTING":
                case 2:
                    message.status = 2;
                    break;
                case "FINISHED":
                case 3:
                    message.status = 3;
                    break;
                default:
                    if (typeof object.status === "number" && (object.status | 0) === object.status)
                        message.status = object.status;
                }
                if (object.isReasoning != null)
                    message.isReasoning = $Boolean(object.isReasoning);
                if (object.isEnhancedSearch != null)
                    message.isEnhancedSearch = $Boolean(object.isEnhancedSearch);
                if (object.sections) {
                    if (!$Array.isArray(object.sections))
                        throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sections: array expected");
                    message.sections = $Array(object.sections.length);
                    for (var i = 0; i < object.sections.length; ++i) {
                        if (!$util.isObject(object.sections[i]))
                            throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sections: object expected");
                        message.sections[i] = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.fromObject(object.sections[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a BotPlanningStepMetadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @static
             * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata} message BotPlanningStepMetadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BotPlanningStepMetadata.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults) {
                    object.sourcesMetadata = [];
                    object.sections = [];
                }
                if (message.statusTitle != null && $Object.hasOwnProperty.call(message, "statusTitle"))
                    object.statusTitle = message.statusTitle;
                if (message.statusBody != null && $Object.hasOwnProperty.call(message, "statusBody"))
                    object.statusBody = message.statusBody;
                if (message.sourcesMetadata && message.sourcesMetadata.length) {
                    object.sourcesMetadata = $Array(message.sourcesMetadata.length);
                    for (var j = 0; j < message.sourcesMetadata.length; ++j)
                        object.sourcesMetadata[j] = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.toObject(message.sourcesMetadata[j], options, _depth + 1);
                }
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    object.status = options.enums === $String ? $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus[message.status] === $undefined ? message.status : $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus[message.status] : message.status;
                if (message.isReasoning != null && $Object.hasOwnProperty.call(message, "isReasoning"))
                    object.isReasoning = message.isReasoning;
                if (message.isEnhancedSearch != null && $Object.hasOwnProperty.call(message, "isEnhancedSearch"))
                    object.isEnhancedSearch = message.isEnhancedSearch;
                if (message.sections && message.sections.length) {
                    object.sections = $Array(message.sections.length);
                    for (var j = 0; j < message.sections.length; ++j)
                        object.sections[j] = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.toObject(message.sections[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this BotPlanningStepMetadata to JSON.
             * @function toJSON
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BotPlanningStepMetadata.prototype.toJSON = function() {
                return BotPlanningStepMetadata.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BotPlanningStepMetadata
             * @function getTypeUrl
             * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BotPlanningStepMetadata.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata";
            };

            BotPlanningStepMetadata.BotPlanningSearchSourceMetadata = (function() {

                /**
                 * Properties of a BotPlanningSearchSourceMetadata.
                 * @typedef {Object} BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties
                 * @property {string|null} [title] BotPlanningSearchSourceMetadata title
                 * @property {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider|null} [provider] BotPlanningSearchSourceMetadata provider
                 * @property {string|null} [sourceUrl] BotPlanningSearchSourceMetadata sourceUrl
                 * @property {string|null} [favIconUrl] BotPlanningSearchSourceMetadata favIconUrl
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a BotPlanningSearchSourceMetadata.
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
                 * @interface IBotPlanningSearchSourceMetadata
                 * @augments BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties
                 * @deprecated Use BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties instead.
                 */

                /**
                 * Shape of a BotPlanningSearchSourceMetadata.
                 * @typedef {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties} BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape
                 */

                /**
                 * Constructs a new BotPlanningSearchSourceMetadata.
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
                 * @classdesc Represents a BotPlanningSearchSourceMetadata.
                 * @constructor
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var BotPlanningSearchSourceMetadata = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * BotPlanningSearchSourceMetadata title.
                 * @member {string|null|undefined} title
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @instance
                 */
                BotPlanningSearchSourceMetadata.prototype.title = null;

                /**
                 * BotPlanningSearchSourceMetadata provider.
                 * @member {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider|null|undefined} provider
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @instance
                 */
                BotPlanningSearchSourceMetadata.prototype.provider = null;

                /**
                 * BotPlanningSearchSourceMetadata sourceUrl.
                 * @member {string|null|undefined} sourceUrl
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @instance
                 */
                BotPlanningSearchSourceMetadata.prototype.sourceUrl = null;

                /**
                 * BotPlanningSearchSourceMetadata favIconUrl.
                 * @member {string|null|undefined} favIconUrl
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @instance
                 */
                BotPlanningSearchSourceMetadata.prototype.favIconUrl = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(BotPlanningSearchSourceMetadata.prototype, "_title", {
                    get: $util.oneOfGetter($oneOfFields = ["title"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(BotPlanningSearchSourceMetadata.prototype, "_provider", {
                    get: $util.oneOfGetter($oneOfFields = ["provider"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(BotPlanningSearchSourceMetadata.prototype, "_sourceUrl", {
                    get: $util.oneOfGetter($oneOfFields = ["sourceUrl"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(BotPlanningSearchSourceMetadata.prototype, "_favIconUrl", {
                    get: $util.oneOfGetter($oneOfFields = ["favIconUrl"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new BotPlanningSearchSourceMetadata instance using the specified properties.
                 * @function create
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties=} [properties] Properties to set
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata} BotPlanningSearchSourceMetadata instance
                 * @type {{
                 *   (properties: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape;
                 *   (properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;
                 * }}
                 */
                BotPlanningSearchSourceMetadata.create = function(properties) {
                    return new BotPlanningSearchSourceMetadata(properties);
                };

                /**
                 * Encodes the specified BotPlanningSearchSourceMetadata message. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.verify|verify} messages.
                 * @function encode
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties} message BotPlanningSearchSourceMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BotPlanningSearchSourceMetadata.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                    if (message.provider != null && $Object.hasOwnProperty.call(message, "provider"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.provider);
                    if (message.sourceUrl != null && $Object.hasOwnProperty.call(message, "sourceUrl"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.sourceUrl);
                    if (message.favIconUrl != null && $Object.hasOwnProperty.call(message, "favIconUrl"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.favIconUrl);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified BotPlanningSearchSourceMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties} message BotPlanningSearchSourceMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BotPlanningSearchSourceMetadata.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a BotPlanningSearchSourceMetadata message from the specified reader or buffer.
                 * @function decode
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape} BotPlanningSearchSourceMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BotPlanningSearchSourceMetadata.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                message.title = reader.stringVerify();
                                message._title = "title";
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.provider = reader.int32();
                                message._provider = "provider";
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.sourceUrl = reader.stringVerify();
                                message._sourceUrl = "sourceUrl";
                                continue;
                            }
                        case 4: {
                                if (wireType !== 2)
                                    break;
                                message.favIconUrl = reader.stringVerify();
                                message._favIconUrl = "favIconUrl";
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a BotPlanningSearchSourceMetadata message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Shape} BotPlanningSearchSourceMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BotPlanningSearchSourceMetadata.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };

                /**
                 * Verifies a BotPlanningSearchSourceMetadata message.
                 * @function verify
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BotPlanningSearchSourceMetadata.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    var properties = {};
                    if (message.title != null && $Object.hasOwnProperty.call(message, "title")) {
                        properties._title = 1;
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    }
                    if (message.provider != null && $Object.hasOwnProperty.call(message, "provider")) {
                        properties._provider = 1;
                        if (typeof message.provider !== "number" || (message.provider | 0) !== message.provider)
                            return "provider: enum value expected";
                    }
                    if (message.sourceUrl != null && $Object.hasOwnProperty.call(message, "sourceUrl")) {
                        properties._sourceUrl = 1;
                        if (!$util.isString(message.sourceUrl))
                            return "sourceUrl: string expected";
                    }
                    if (message.favIconUrl != null && $Object.hasOwnProperty.call(message, "favIconUrl")) {
                        properties._favIconUrl = 1;
                        if (!$util.isString(message.favIconUrl))
                            return "favIconUrl: string expected";
                    }
                    return null;
                };

                /**
                 * Creates a BotPlanningSearchSourceMetadata message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata} BotPlanningSearchSourceMetadata
                 */
                BotPlanningSearchSourceMetadata.fromObject = function (object, _depth) {
                    if (object instanceof $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata();
                    if (object.title != null)
                        message.title = $String(object.title);
                    switch (object.provider) {
                    case "UNKNOWN_PROVIDER":
                    case 0:
                        message.provider = 0;
                        break;
                    case "OTHER":
                    case 1:
                        message.provider = 1;
                        break;
                    case "GOOGLE":
                    case 2:
                        message.provider = 2;
                        break;
                    case "BING":
                    case 3:
                        message.provider = 3;
                        break;
                    default:
                        if (typeof object.provider === "number" && (object.provider | 0) === object.provider)
                            message.provider = object.provider;
                    }
                    if (object.sourceUrl != null)
                        message.sourceUrl = $String(object.sourceUrl);
                    if (object.favIconUrl != null)
                        message.favIconUrl = $String(object.favIconUrl);
                    return message;
                };

                /**
                 * Creates a plain object from a BotPlanningSearchSourceMetadata message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata} message BotPlanningSearchSourceMetadata
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BotPlanningSearchSourceMetadata.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                        object.title = message.title;
                    if (message.provider != null && $Object.hasOwnProperty.call(message, "provider"))
                        object.provider = options.enums === $String ? $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider[message.provider] === $undefined ? message.provider : $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider[message.provider] : message.provider;
                    if (message.sourceUrl != null && $Object.hasOwnProperty.call(message, "sourceUrl"))
                        object.sourceUrl = message.sourceUrl;
                    if (message.favIconUrl != null && $Object.hasOwnProperty.call(message, "favIconUrl"))
                        object.favIconUrl = message.favIconUrl;
                    return object;
                };

                /**
                 * Converts this BotPlanningSearchSourceMetadata to JSON.
                 * @function toJSON
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BotPlanningSearchSourceMetadata.prototype.toJSON = function() {
                    return BotPlanningSearchSourceMetadata.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for BotPlanningSearchSourceMetadata
                 * @function getTypeUrl
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                BotPlanningSearchSourceMetadata.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata";
                };

                return BotPlanningSearchSourceMetadata;
            })();

            BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata = (function() {

                /**
                 * Properties of a BotPlanningSearchSourcesMetadata.
                 * @typedef {Object} BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties
                 * @property {string|null} [sourceTitle] BotPlanningSearchSourcesMetadata sourceTitle
                 * @property {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider|null} [provider] BotPlanningSearchSourcesMetadata provider
                 * @property {string|null} [sourceUrl] BotPlanningSearchSourcesMetadata sourceUrl
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a BotPlanningSearchSourcesMetadata.
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
                 * @interface IBotPlanningSearchSourcesMetadata
                 * @augments BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties
                 * @deprecated Use BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties instead.
                 */

                /**
                 * Shape of a BotPlanningSearchSourcesMetadata.
                 * @typedef {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties} BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape
                 */

                /**
                 * Constructs a new BotPlanningSearchSourcesMetadata.
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
                 * @classdesc Represents a BotPlanningSearchSourcesMetadata.
                 * @constructor
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var BotPlanningSearchSourcesMetadata = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * BotPlanningSearchSourcesMetadata sourceTitle.
                 * @member {string|null|undefined} sourceTitle
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @instance
                 */
                BotPlanningSearchSourcesMetadata.prototype.sourceTitle = null;

                /**
                 * BotPlanningSearchSourcesMetadata provider.
                 * @member {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider|null|undefined} provider
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @instance
                 */
                BotPlanningSearchSourcesMetadata.prototype.provider = null;

                /**
                 * BotPlanningSearchSourcesMetadata sourceUrl.
                 * @member {string|null|undefined} sourceUrl
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @instance
                 */
                BotPlanningSearchSourcesMetadata.prototype.sourceUrl = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(BotPlanningSearchSourcesMetadata.prototype, "_sourceTitle", {
                    get: $util.oneOfGetter($oneOfFields = ["sourceTitle"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(BotPlanningSearchSourcesMetadata.prototype, "_provider", {
                    get: $util.oneOfGetter($oneOfFields = ["provider"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(BotPlanningSearchSourcesMetadata.prototype, "_sourceUrl", {
                    get: $util.oneOfGetter($oneOfFields = ["sourceUrl"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new BotPlanningSearchSourcesMetadata instance using the specified properties.
                 * @function create
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties=} [properties] Properties to set
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata} BotPlanningSearchSourcesMetadata instance
                 * @type {{
                 *   (properties: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape;
                 *   (properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;
                 * }}
                 */
                BotPlanningSearchSourcesMetadata.create = function(properties) {
                    return new BotPlanningSearchSourcesMetadata(properties);
                };

                /**
                 * Encodes the specified BotPlanningSearchSourcesMetadata message. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.verify|verify} messages.
                 * @function encode
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties} message BotPlanningSearchSourcesMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BotPlanningSearchSourcesMetadata.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.sourceTitle != null && $Object.hasOwnProperty.call(message, "sourceTitle"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.sourceTitle);
                    if (message.provider != null && $Object.hasOwnProperty.call(message, "provider"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.provider);
                    if (message.sourceUrl != null && $Object.hasOwnProperty.call(message, "sourceUrl"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.sourceUrl);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified BotPlanningSearchSourcesMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Properties} message BotPlanningSearchSourcesMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BotPlanningSearchSourcesMetadata.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a BotPlanningSearchSourcesMetadata message from the specified reader or buffer.
                 * @function decode
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape} BotPlanningSearchSourcesMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BotPlanningSearchSourcesMetadata.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                message.sourceTitle = reader.stringVerify();
                                message._sourceTitle = "sourceTitle";
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.provider = reader.int32();
                                message._provider = "provider";
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.sourceUrl = reader.stringVerify();
                                message._sourceUrl = "sourceUrl";
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a BotPlanningSearchSourcesMetadata message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.$Shape} BotPlanningSearchSourcesMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BotPlanningSearchSourcesMetadata.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };

                /**
                 * Verifies a BotPlanningSearchSourcesMetadata message.
                 * @function verify
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BotPlanningSearchSourcesMetadata.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    var properties = {};
                    if (message.sourceTitle != null && $Object.hasOwnProperty.call(message, "sourceTitle")) {
                        properties._sourceTitle = 1;
                        if (!$util.isString(message.sourceTitle))
                            return "sourceTitle: string expected";
                    }
                    if (message.provider != null && $Object.hasOwnProperty.call(message, "provider")) {
                        properties._provider = 1;
                        if (typeof message.provider !== "number" || (message.provider | 0) !== message.provider)
                            return "provider: enum value expected";
                    }
                    if (message.sourceUrl != null && $Object.hasOwnProperty.call(message, "sourceUrl")) {
                        properties._sourceUrl = 1;
                        if (!$util.isString(message.sourceUrl))
                            return "sourceUrl: string expected";
                    }
                    return null;
                };

                /**
                 * Creates a BotPlanningSearchSourcesMetadata message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata} BotPlanningSearchSourcesMetadata
                 */
                BotPlanningSearchSourcesMetadata.fromObject = function (object, _depth) {
                    if (object instanceof $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata();
                    if (object.sourceTitle != null)
                        message.sourceTitle = $String(object.sourceTitle);
                    switch (object.provider) {
                    case "UNKNOWN":
                    case 0:
                        message.provider = 0;
                        break;
                    case "OTHER":
                    case 1:
                        message.provider = 1;
                        break;
                    case "GOOGLE":
                    case 2:
                        message.provider = 2;
                        break;
                    case "BING":
                    case 3:
                        message.provider = 3;
                        break;
                    default:
                        if (typeof object.provider === "number" && (object.provider | 0) === object.provider)
                            message.provider = object.provider;
                    }
                    if (object.sourceUrl != null)
                        message.sourceUrl = $String(object.sourceUrl);
                    return message;
                };

                /**
                 * Creates a plain object from a BotPlanningSearchSourcesMetadata message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata} message BotPlanningSearchSourcesMetadata
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BotPlanningSearchSourcesMetadata.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (message.sourceTitle != null && $Object.hasOwnProperty.call(message, "sourceTitle"))
                        object.sourceTitle = message.sourceTitle;
                    if (message.provider != null && $Object.hasOwnProperty.call(message, "provider"))
                        object.provider = options.enums === $String ? $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider[message.provider] === $undefined ? message.provider : $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider[message.provider] : message.provider;
                    if (message.sourceUrl != null && $Object.hasOwnProperty.call(message, "sourceUrl"))
                        object.sourceUrl = message.sourceUrl;
                    return object;
                };

                /**
                 * Converts this BotPlanningSearchSourcesMetadata to JSON.
                 * @function toJSON
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BotPlanningSearchSourcesMetadata.prototype.toJSON = function() {
                    return BotPlanningSearchSourcesMetadata.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for BotPlanningSearchSourcesMetadata
                 * @function getTypeUrl
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                BotPlanningSearchSourcesMetadata.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata";
                };

                /**
                 * BotPlanningSearchSourceProvider enum.
                 * @name BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} OTHER=1 OTHER value
                 * @property {number} GOOGLE=2 GOOGLE value
                 * @property {number} BING=3 BING value
                 */
                BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider = (function() {
                    var valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "OTHER"] = 1;
                    values[valuesById[2] = "GOOGLE"] = 2;
                    values[valuesById[3] = "BING"] = 3;
                    return values;
                })();

                return BotPlanningSearchSourcesMetadata;
            })();

            BotPlanningStepMetadata.BotPlanningStepSectionMetadata = (function() {

                /**
                 * Properties of a BotPlanningStepSectionMetadata.
                 * @typedef {Object} BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties
                 * @property {string|null} [sectionTitle] BotPlanningStepSectionMetadata sectionTitle
                 * @property {string|null} [sectionBody] BotPlanningStepSectionMetadata sectionBody
                 * @property {Array.<BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties>|null} [sourcesMetadata] BotPlanningStepSectionMetadata sourcesMetadata
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a BotPlanningStepSectionMetadata.
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
                 * @interface IBotPlanningStepSectionMetadata
                 * @augments BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties
                 * @deprecated Use BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties instead.
                 */

                /**
                 * Shape of a BotPlanningStepSectionMetadata.
                 * @typedef {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties} BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape
                 */

                /**
                 * Constructs a new BotPlanningStepSectionMetadata.
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata
                 * @classdesc Represents a BotPlanningStepSectionMetadata.
                 * @constructor
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var BotPlanningStepSectionMetadata = function (properties) {
                    this.sourcesMetadata = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * BotPlanningStepSectionMetadata sectionTitle.
                 * @member {string|null|undefined} sectionTitle
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @instance
                 */
                BotPlanningStepSectionMetadata.prototype.sectionTitle = null;

                /**
                 * BotPlanningStepSectionMetadata sectionBody.
                 * @member {string|null|undefined} sectionBody
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @instance
                 */
                BotPlanningStepSectionMetadata.prototype.sectionBody = null;

                /**
                 * BotPlanningStepSectionMetadata sourcesMetadata.
                 * @member {Array.<BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.$Properties>} sourcesMetadata
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @instance
                 */
                BotPlanningStepSectionMetadata.prototype.sourcesMetadata = $util.emptyArray;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(BotPlanningStepSectionMetadata.prototype, "_sectionTitle", {
                    get: $util.oneOfGetter($oneOfFields = ["sectionTitle"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(BotPlanningStepSectionMetadata.prototype, "_sectionBody", {
                    get: $util.oneOfGetter($oneOfFields = ["sectionBody"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new BotPlanningStepSectionMetadata instance using the specified properties.
                 * @function create
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties=} [properties] Properties to set
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata} BotPlanningStepSectionMetadata instance
                 * @type {{
                 *   (properties: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape;
                 *   (properties?: BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties): BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;
                 * }}
                 */
                BotPlanningStepSectionMetadata.create = function(properties) {
                    return new BotPlanningStepSectionMetadata(properties);
                };

                /**
                 * Encodes the specified BotPlanningStepSectionMetadata message. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.verify|verify} messages.
                 * @function encode
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties} message BotPlanningStepSectionMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BotPlanningStepSectionMetadata.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.sectionTitle != null && $Object.hasOwnProperty.call(message, "sectionTitle"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.sectionTitle);
                    if (message.sectionBody != null && $Object.hasOwnProperty.call(message, "sectionBody"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sectionBody);
                    if (message.sourcesMetadata != null && message.sourcesMetadata.length)
                        for (var i = 0; i < message.sourcesMetadata.length; ++i)
                            $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.encode(message.sourcesMetadata[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified BotPlanningStepSectionMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Properties} message BotPlanningStepSectionMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BotPlanningStepSectionMetadata.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a BotPlanningStepSectionMetadata message from the specified reader or buffer.
                 * @function decode
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape} BotPlanningStepSectionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BotPlanningStepSectionMetadata.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                message.sectionTitle = reader.stringVerify();
                                message._sectionTitle = "sectionTitle";
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.sectionBody = reader.stringVerify();
                                message._sectionBody = "sectionBody";
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.sourcesMetadata && message.sourcesMetadata.length))
                                    message.sourcesMetadata = [];
                                message.sourcesMetadata.push($root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a BotPlanningStepSectionMetadata message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata & BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.$Shape} BotPlanningStepSectionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BotPlanningStepSectionMetadata.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };

                /**
                 * Verifies a BotPlanningStepSectionMetadata message.
                 * @function verify
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BotPlanningStepSectionMetadata.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    var properties = {};
                    if (message.sectionTitle != null && $Object.hasOwnProperty.call(message, "sectionTitle")) {
                        properties._sectionTitle = 1;
                        if (!$util.isString(message.sectionTitle))
                            return "sectionTitle: string expected";
                    }
                    if (message.sectionBody != null && $Object.hasOwnProperty.call(message, "sectionBody")) {
                        properties._sectionBody = 1;
                        if (!$util.isString(message.sectionBody))
                            return "sectionBody: string expected";
                    }
                    if (message.sourcesMetadata != null && $Object.hasOwnProperty.call(message, "sourcesMetadata")) {
                        if (!$Array.isArray(message.sourcesMetadata))
                            return "sourcesMetadata: array expected";
                        for (var i = 0; i < message.sourcesMetadata.length; ++i) {
                            var error = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.verify(message.sourcesMetadata[i], _depth + 1);
                            if (error)
                                return "sourcesMetadata." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a BotPlanningStepSectionMetadata message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata} BotPlanningStepSectionMetadata
                 */
                BotPlanningStepSectionMetadata.fromObject = function (object, _depth) {
                    if (object instanceof $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata();
                    if (object.sectionTitle != null)
                        message.sectionTitle = $String(object.sectionTitle);
                    if (object.sectionBody != null)
                        message.sectionBody = $String(object.sectionBody);
                    if (object.sourcesMetadata) {
                        if (!$Array.isArray(object.sourcesMetadata))
                            throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.sourcesMetadata: array expected");
                        message.sourcesMetadata = $Array(object.sourcesMetadata.length);
                        for (var i = 0; i < object.sourcesMetadata.length; ++i) {
                            if (!$util.isObject(object.sourcesMetadata[i]))
                                throw $TypeError(".BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.sourcesMetadata: object expected");
                            message.sourcesMetadata[i] = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.fromObject(object.sourcesMetadata[i], _depth + 1);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a BotPlanningStepSectionMetadata message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @static
                 * @param {BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata} message BotPlanningStepSectionMetadata
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BotPlanningStepSectionMetadata.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.sourcesMetadata = [];
                    if (message.sectionTitle != null && $Object.hasOwnProperty.call(message, "sectionTitle"))
                        object.sectionTitle = message.sectionTitle;
                    if (message.sectionBody != null && $Object.hasOwnProperty.call(message, "sectionBody"))
                        object.sectionBody = message.sectionBody;
                    if (message.sourcesMetadata && message.sourcesMetadata.length) {
                        object.sourcesMetadata = $Array(message.sourcesMetadata.length);
                        for (var j = 0; j < message.sourcesMetadata.length; ++j)
                            object.sourcesMetadata[j] = $root.BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.toObject(message.sourcesMetadata[j], options, _depth + 1);
                    }
                    return object;
                };

                /**
                 * Converts this BotPlanningStepSectionMetadata to JSON.
                 * @function toJSON
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BotPlanningStepSectionMetadata.prototype.toJSON = function() {
                    return BotPlanningStepSectionMetadata.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for BotPlanningStepSectionMetadata
                 * @function getTypeUrl
                 * @memberof BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                BotPlanningStepSectionMetadata.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata";
                };

                return BotPlanningStepSectionMetadata;
            })();

            /**
             * BotSearchSourceProvider enum.
             * @name BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider
             * @enum {number}
             * @property {number} UNKNOWN_PROVIDER=0 UNKNOWN_PROVIDER value
             * @property {number} OTHER=1 OTHER value
             * @property {number} GOOGLE=2 GOOGLE value
             * @property {number} BING=3 BING value
             */
            BotPlanningStepMetadata.BotSearchSourceProvider = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_PROVIDER"] = 0;
                values[valuesById[1] = "OTHER"] = 1;
                values[valuesById[2] = "GOOGLE"] = 2;
                values[valuesById[3] = "BING"] = 3;
                return values;
            })();

            /**
             * PlanningStepStatus enum.
             * @name BotMetadata.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} PLANNED=1 PLANNED value
             * @property {number} EXECUTING=2 EXECUTING value
             * @property {number} FINISHED=3 FINISHED value
             */
            BotPlanningStepMetadata.PlanningStepStatus = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "PLANNED"] = 1;
                values[valuesById[2] = "EXECUTING"] = 2;
                values[valuesById[3] = "FINISHED"] = 3;
                return values;
            })();

            return BotPlanningStepMetadata;
        })();

        return BotProgressIndicatorMetadata;
    })();

    BotMetadata.BotModelMetadata = (function() {

        /**
         * Properties of a BotModelMetadata.
         * @typedef {Object} BotMetadata.BotModelMetadata.$Properties
         * @property {BotMetadata.BotModelMetadata.ModelType|null} [modelType] BotModelMetadata modelType
         * @property {BotMetadata.BotModelMetadata.PremiumModelStatus|null} [premiumModelStatus] BotModelMetadata premiumModelStatus
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotModelMetadata.
         * @memberof BotMetadata
         * @interface IBotModelMetadata
         * @augments BotMetadata.BotModelMetadata.$Properties
         * @deprecated Use BotMetadata.BotModelMetadata.$Properties instead.
         */

        /**
         * Shape of a BotModelMetadata.
         * @typedef {BotMetadata.BotModelMetadata.$Properties} BotMetadata.BotModelMetadata.$Shape
         */

        /**
         * Constructs a new BotModelMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotModelMetadata.
         * @constructor
         * @param {BotMetadata.BotModelMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotModelMetadata = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotModelMetadata modelType.
         * @member {BotMetadata.BotModelMetadata.ModelType|null|undefined} modelType
         * @memberof BotMetadata.BotModelMetadata
         * @instance
         */
        BotModelMetadata.prototype.modelType = null;

        /**
         * BotModelMetadata premiumModelStatus.
         * @member {BotMetadata.BotModelMetadata.PremiumModelStatus|null|undefined} premiumModelStatus
         * @memberof BotMetadata.BotModelMetadata
         * @instance
         */
        BotModelMetadata.prototype.premiumModelStatus = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotModelMetadata.prototype, "_modelType", {
            get: $util.oneOfGetter($oneOfFields = ["modelType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotModelMetadata.prototype, "_premiumModelStatus", {
            get: $util.oneOfGetter($oneOfFields = ["premiumModelStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotModelMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotModelMetadata
         * @static
         * @param {BotMetadata.BotModelMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotModelMetadata} BotModelMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotModelMetadata.$Shape): BotMetadata.BotModelMetadata & BotMetadata.BotModelMetadata.$Shape;
         *   (properties?: BotMetadata.BotModelMetadata.$Properties): BotMetadata.BotModelMetadata;
         * }}
         */
        BotModelMetadata.create = function(properties) {
            return new BotModelMetadata(properties);
        };

        /**
         * Encodes the specified BotModelMetadata message. Does not implicitly {@link BotMetadata.BotModelMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotModelMetadata
         * @static
         * @param {BotMetadata.BotModelMetadata.$Properties} message BotModelMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotModelMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.modelType != null && $Object.hasOwnProperty.call(message, "modelType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.modelType);
            if (message.premiumModelStatus != null && $Object.hasOwnProperty.call(message, "premiumModelStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.premiumModelStatus);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotModelMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotModelMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotModelMetadata
         * @static
         * @param {BotMetadata.BotModelMetadata.$Properties} message BotModelMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotModelMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotModelMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotModelMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotModelMetadata & BotMetadata.BotModelMetadata.$Shape} BotModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotModelMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotModelMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.modelType = reader.int32();
                        message._modelType = "modelType";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.premiumModelStatus = reader.int32();
                        message._premiumModelStatus = "premiumModelStatus";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotModelMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotModelMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotModelMetadata & BotMetadata.BotModelMetadata.$Shape} BotModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotModelMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotModelMetadata message.
         * @function verify
         * @memberof BotMetadata.BotModelMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotModelMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.modelType != null && $Object.hasOwnProperty.call(message, "modelType")) {
                properties._modelType = 1;
                if (typeof message.modelType !== "number" || (message.modelType | 0) !== message.modelType)
                    return "modelType: enum value expected";
            }
            if (message.premiumModelStatus != null && $Object.hasOwnProperty.call(message, "premiumModelStatus")) {
                properties._premiumModelStatus = 1;
                if (typeof message.premiumModelStatus !== "number" || (message.premiumModelStatus | 0) !== message.premiumModelStatus)
                    return "premiumModelStatus: enum value expected";
            }
            return null;
        };

        /**
         * Creates a BotModelMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotModelMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotModelMetadata} BotModelMetadata
         */
        BotModelMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotModelMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotModelMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotModelMetadata();
            switch (object.modelType) {
            case "UNKNOWN_TYPE":
            case 0:
                message.modelType = 0;
                break;
            case "LLAMA_PROD":
            case 1:
                message.modelType = 1;
                break;
            case "LLAMA_PROD_PREMIUM":
            case 2:
                message.modelType = 2;
                break;
            default:
                if (typeof object.modelType === "number" && (object.modelType | 0) === object.modelType)
                    message.modelType = object.modelType;
            }
            switch (object.premiumModelStatus) {
            case "UNKNOWN_STATUS":
            case 0:
                message.premiumModelStatus = 0;
                break;
            case "AVAILABLE":
            case 1:
                message.premiumModelStatus = 1;
                break;
            case "QUOTA_EXCEED_LIMIT":
            case 2:
                message.premiumModelStatus = 2;
                break;
            default:
                if (typeof object.premiumModelStatus === "number" && (object.premiumModelStatus | 0) === object.premiumModelStatus)
                    message.premiumModelStatus = object.premiumModelStatus;
            }
            return message;
        };

        /**
         * Creates a plain object from a BotModelMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotModelMetadata
         * @static
         * @param {BotMetadata.BotModelMetadata} message BotModelMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotModelMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.modelType != null && $Object.hasOwnProperty.call(message, "modelType"))
                object.modelType = options.enums === $String ? $root.BotMetadata.BotModelMetadata.ModelType[message.modelType] === $undefined ? message.modelType : $root.BotMetadata.BotModelMetadata.ModelType[message.modelType] : message.modelType;
            if (message.premiumModelStatus != null && $Object.hasOwnProperty.call(message, "premiumModelStatus"))
                object.premiumModelStatus = options.enums === $String ? $root.BotMetadata.BotModelMetadata.PremiumModelStatus[message.premiumModelStatus] === $undefined ? message.premiumModelStatus : $root.BotMetadata.BotModelMetadata.PremiumModelStatus[message.premiumModelStatus] : message.premiumModelStatus;
            return object;
        };

        /**
         * Converts this BotModelMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotModelMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotModelMetadata.prototype.toJSON = function() {
            return BotModelMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotModelMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotModelMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotModelMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotModelMetadata";
        };

        /**
         * ModelType enum.
         * @name BotMetadata.BotModelMetadata.ModelType
         * @enum {number}
         * @property {number} UNKNOWN_TYPE=0 UNKNOWN_TYPE value
         * @property {number} LLAMA_PROD=1 LLAMA_PROD value
         * @property {number} LLAMA_PROD_PREMIUM=2 LLAMA_PROD_PREMIUM value
         */
        BotModelMetadata.ModelType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "LLAMA_PROD"] = 1;
            values[valuesById[2] = "LLAMA_PROD_PREMIUM"] = 2;
            return values;
        })();

        /**
         * PremiumModelStatus enum.
         * @name BotMetadata.BotModelMetadata.PremiumModelStatus
         * @enum {number}
         * @property {number} UNKNOWN_STATUS=0 UNKNOWN_STATUS value
         * @property {number} AVAILABLE=1 AVAILABLE value
         * @property {number} QUOTA_EXCEED_LIMIT=2 QUOTA_EXCEED_LIMIT value
         */
        BotModelMetadata.PremiumModelStatus = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_STATUS"] = 0;
            values[valuesById[1] = "AVAILABLE"] = 1;
            values[valuesById[2] = "QUOTA_EXCEED_LIMIT"] = 2;
            return values;
        })();

        return BotModelMetadata;
    })();

    BotMetadata.BotReminderMetadata = (function() {

        /**
         * Properties of a BotReminderMetadata.
         * @typedef {Object} BotMetadata.BotReminderMetadata.$Properties
         * @property {Protocol.MessageKey.$Properties|null} [requestMessageKey] BotReminderMetadata requestMessageKey
         * @property {BotMetadata.BotReminderMetadata.ReminderAction|null} [action] BotReminderMetadata action
         * @property {string|null} [name] BotReminderMetadata name
         * @property {number|Long|null} [nextTriggerTimestamp] BotReminderMetadata nextTriggerTimestamp
         * @property {BotMetadata.BotReminderMetadata.ReminderFrequency|null} [frequency] BotReminderMetadata frequency
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotReminderMetadata.
         * @memberof BotMetadata
         * @interface IBotReminderMetadata
         * @augments BotMetadata.BotReminderMetadata.$Properties
         * @deprecated Use BotMetadata.BotReminderMetadata.$Properties instead.
         */

        /**
         * Shape of a BotReminderMetadata.
         * @typedef {BotMetadata.BotReminderMetadata.$Properties} BotMetadata.BotReminderMetadata.$Shape
         */

        /**
         * Constructs a new BotReminderMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotReminderMetadata.
         * @constructor
         * @param {BotMetadata.BotReminderMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotReminderMetadata = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotReminderMetadata requestMessageKey.
         * @member {Protocol.MessageKey.$Properties|null|undefined} requestMessageKey
         * @memberof BotMetadata.BotReminderMetadata
         * @instance
         */
        BotReminderMetadata.prototype.requestMessageKey = null;

        /**
         * BotReminderMetadata action.
         * @member {BotMetadata.BotReminderMetadata.ReminderAction|null|undefined} action
         * @memberof BotMetadata.BotReminderMetadata
         * @instance
         */
        BotReminderMetadata.prototype.action = null;

        /**
         * BotReminderMetadata name.
         * @member {string|null|undefined} name
         * @memberof BotMetadata.BotReminderMetadata
         * @instance
         */
        BotReminderMetadata.prototype.name = null;

        /**
         * BotReminderMetadata nextTriggerTimestamp.
         * @member {number|Long|null|undefined} nextTriggerTimestamp
         * @memberof BotMetadata.BotReminderMetadata
         * @instance
         */
        BotReminderMetadata.prototype.nextTriggerTimestamp = null;

        /**
         * BotReminderMetadata frequency.
         * @member {BotMetadata.BotReminderMetadata.ReminderFrequency|null|undefined} frequency
         * @memberof BotMetadata.BotReminderMetadata
         * @instance
         */
        BotReminderMetadata.prototype.frequency = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotReminderMetadata.prototype, "_requestMessageKey", {
            get: $util.oneOfGetter($oneOfFields = ["requestMessageKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotReminderMetadata.prototype, "_action", {
            get: $util.oneOfGetter($oneOfFields = ["action"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotReminderMetadata.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotReminderMetadata.prototype, "_nextTriggerTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["nextTriggerTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotReminderMetadata.prototype, "_frequency", {
            get: $util.oneOfGetter($oneOfFields = ["frequency"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotReminderMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotReminderMetadata
         * @static
         * @param {BotMetadata.BotReminderMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotReminderMetadata} BotReminderMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotReminderMetadata.$Shape): BotMetadata.BotReminderMetadata & BotMetadata.BotReminderMetadata.$Shape;
         *   (properties?: BotMetadata.BotReminderMetadata.$Properties): BotMetadata.BotReminderMetadata;
         * }}
         */
        BotReminderMetadata.create = function(properties) {
            return new BotReminderMetadata(properties);
        };

        /**
         * Encodes the specified BotReminderMetadata message. Does not implicitly {@link BotMetadata.BotReminderMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotReminderMetadata
         * @static
         * @param {BotMetadata.BotReminderMetadata.$Properties} message BotReminderMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotReminderMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.requestMessageKey != null && $Object.hasOwnProperty.call(message, "requestMessageKey"))
                $root.Protocol.MessageKey.encode(message.requestMessageKey, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.action != null && $Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.nextTriggerTimestamp != null && $Object.hasOwnProperty.call(message, "nextTriggerTimestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.nextTriggerTimestamp);
            if (message.frequency != null && $Object.hasOwnProperty.call(message, "frequency"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.frequency);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotReminderMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotReminderMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotReminderMetadata
         * @static
         * @param {BotMetadata.BotReminderMetadata.$Properties} message BotReminderMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotReminderMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotReminderMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotReminderMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotReminderMetadata & BotMetadata.BotReminderMetadata.$Shape} BotReminderMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotReminderMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotReminderMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.requestMessageKey = $root.Protocol.MessageKey.decode(reader, reader.size(), $undefined, _depth + 1, message.requestMessageKey);
                        message._requestMessageKey = "requestMessageKey";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.action = reader.int32();
                        message._action = "action";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.name = reader.stringVerify();
                        message._name = "name";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.nextTriggerTimestamp = reader.uint64();
                        message._nextTriggerTimestamp = "nextTriggerTimestamp";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.frequency = reader.int32();
                        message._frequency = "frequency";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotReminderMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotReminderMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotReminderMetadata & BotMetadata.BotReminderMetadata.$Shape} BotReminderMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotReminderMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotReminderMetadata message.
         * @function verify
         * @memberof BotMetadata.BotReminderMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotReminderMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.requestMessageKey != null && $Object.hasOwnProperty.call(message, "requestMessageKey")) {
                properties._requestMessageKey = 1;
                {
                    var error = $root.Protocol.MessageKey.verify(message.requestMessageKey, _depth + 1);
                    if (error)
                        return "requestMessageKey." + error;
                }
            }
            if (message.action != null && $Object.hasOwnProperty.call(message, "action")) {
                properties._action = 1;
                if (typeof message.action !== "number" || (message.action | 0) !== message.action)
                    return "action: enum value expected";
            }
            if (message.name != null && $Object.hasOwnProperty.call(message, "name")) {
                properties._name = 1;
                if (!$util.isString(message.name))
                    return "name: string expected";
            }
            if (message.nextTriggerTimestamp != null && $Object.hasOwnProperty.call(message, "nextTriggerTimestamp")) {
                properties._nextTriggerTimestamp = 1;
                if (!$util.isInteger(message.nextTriggerTimestamp) && !(message.nextTriggerTimestamp && $util.isInteger(message.nextTriggerTimestamp.low) && $util.isInteger(message.nextTriggerTimestamp.high)))
                    return "nextTriggerTimestamp: integer|Long expected";
            }
            if (message.frequency != null && $Object.hasOwnProperty.call(message, "frequency")) {
                properties._frequency = 1;
                if (typeof message.frequency !== "number" || (message.frequency | 0) !== message.frequency)
                    return "frequency: enum value expected";
            }
            return null;
        };

        /**
         * Creates a BotReminderMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotReminderMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotReminderMetadata} BotReminderMetadata
         */
        BotReminderMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotReminderMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotReminderMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotReminderMetadata();
            if (object.requestMessageKey != null) {
                if (!$util.isObject(object.requestMessageKey))
                    throw $TypeError(".BotMetadata.BotReminderMetadata.requestMessageKey: object expected");
                message.requestMessageKey = $root.Protocol.MessageKey.fromObject(object.requestMessageKey, _depth + 1);
            }
            switch (object.action) {
            case "NOTIFY":
            case 1:
                message.action = 1;
                break;
            case "CREATE":
            case 2:
                message.action = 2;
                break;
            case "DELETE":
            case 3:
                message.action = 3;
                break;
            case "UPDATE":
            case 4:
                message.action = 4;
                break;
            default:
                if (typeof object.action === "number" && (object.action | 0) === object.action)
                    message.action = object.action;
            }
            if (object.name != null)
                message.name = $String(object.name);
            if (object.nextTriggerTimestamp != null)
                if ($util.Long)
                    message.nextTriggerTimestamp = $util.Long.fromValue(object.nextTriggerTimestamp, true);
                else if (typeof object.nextTriggerTimestamp === "string")
                    message.nextTriggerTimestamp = $parseInt(object.nextTriggerTimestamp, 10);
                else if (typeof object.nextTriggerTimestamp === "number")
                    message.nextTriggerTimestamp = object.nextTriggerTimestamp;
                else if (typeof object.nextTriggerTimestamp === "object")
                    message.nextTriggerTimestamp = new $util.LongBits(object.nextTriggerTimestamp.low >>> 0, object.nextTriggerTimestamp.high >>> 0).toNumber(true);
            switch (object.frequency) {
            case "ONCE":
            case 1:
                message.frequency = 1;
                break;
            case "DAILY":
            case 2:
                message.frequency = 2;
                break;
            case "WEEKLY":
            case 3:
                message.frequency = 3;
                break;
            case "BIWEEKLY":
            case 4:
                message.frequency = 4;
                break;
            case "MONTHLY":
            case 5:
                message.frequency = 5;
                break;
            default:
                if (typeof object.frequency === "number" && (object.frequency | 0) === object.frequency)
                    message.frequency = object.frequency;
            }
            return message;
        };

        /**
         * Creates a plain object from a BotReminderMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotReminderMetadata
         * @static
         * @param {BotMetadata.BotReminderMetadata} message BotReminderMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotReminderMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.requestMessageKey != null && $Object.hasOwnProperty.call(message, "requestMessageKey"))
                object.requestMessageKey = $root.Protocol.MessageKey.toObject(message.requestMessageKey, options, _depth + 1);
            if (message.action != null && $Object.hasOwnProperty.call(message, "action"))
                object.action = options.enums === $String ? $root.BotMetadata.BotReminderMetadata.ReminderAction[message.action] === $undefined ? message.action : $root.BotMetadata.BotReminderMetadata.ReminderAction[message.action] : message.action;
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                object.name = message.name;
            if (message.nextTriggerTimestamp != null && $Object.hasOwnProperty.call(message, "nextTriggerTimestamp"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.nextTriggerTimestamp = typeof message.nextTriggerTimestamp === "number" ? $BigInt(message.nextTriggerTimestamp) : $util.Long.fromBits(message.nextTriggerTimestamp.low >>> 0, message.nextTriggerTimestamp.high >>> 0, true).toBigInt();
                else if (typeof message.nextTriggerTimestamp === "number")
                    object.nextTriggerTimestamp = options.longs === $String ? $String(message.nextTriggerTimestamp) : message.nextTriggerTimestamp;
                else
                    object.nextTriggerTimestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.nextTriggerTimestamp) : options.longs === $Number ? new $util.LongBits(message.nextTriggerTimestamp.low >>> 0, message.nextTriggerTimestamp.high >>> 0).toNumber(true) : message.nextTriggerTimestamp;
            if (message.frequency != null && $Object.hasOwnProperty.call(message, "frequency"))
                object.frequency = options.enums === $String ? $root.BotMetadata.BotReminderMetadata.ReminderFrequency[message.frequency] === $undefined ? message.frequency : $root.BotMetadata.BotReminderMetadata.ReminderFrequency[message.frequency] : message.frequency;
            return object;
        };

        /**
         * Converts this BotReminderMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotReminderMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotReminderMetadata.prototype.toJSON = function() {
            return BotReminderMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotReminderMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotReminderMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotReminderMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotReminderMetadata";
        };

        /**
         * ReminderAction enum.
         * @name BotMetadata.BotReminderMetadata.ReminderAction
         * @enum {number}
         * @property {number} NOTIFY=1 NOTIFY value
         * @property {number} CREATE=2 CREATE value
         * @property {number} DELETE=3 DELETE value
         * @property {number} UPDATE=4 UPDATE value
         */
        BotReminderMetadata.ReminderAction = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[1] = "NOTIFY"] = 1;
            values[valuesById[2] = "CREATE"] = 2;
            values[valuesById[3] = "DELETE"] = 3;
            values[valuesById[4] = "UPDATE"] = 4;
            return values;
        })();

        /**
         * ReminderFrequency enum.
         * @name BotMetadata.BotReminderMetadata.ReminderFrequency
         * @enum {number}
         * @property {number} ONCE=1 ONCE value
         * @property {number} DAILY=2 DAILY value
         * @property {number} WEEKLY=3 WEEKLY value
         * @property {number} BIWEEKLY=4 BIWEEKLY value
         * @property {number} MONTHLY=5 MONTHLY value
         */
        BotReminderMetadata.ReminderFrequency = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[1] = "ONCE"] = 1;
            values[valuesById[2] = "DAILY"] = 2;
            values[valuesById[3] = "WEEKLY"] = 3;
            values[valuesById[4] = "BIWEEKLY"] = 4;
            values[valuesById[5] = "MONTHLY"] = 5;
            return values;
        })();

        return BotReminderMetadata;
    })();

    BotMetadata.BotMemuMetadata = (function() {

        /**
         * Properties of a BotMemuMetadata.
         * @typedef {Object} BotMetadata.BotMemuMetadata.$Properties
         * @property {Array.<BotMetadata.BotMediaMetadata.$Properties>|null} [faceImages] BotMemuMetadata faceImages
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotMemuMetadata.
         * @memberof BotMetadata
         * @interface IBotMemuMetadata
         * @augments BotMetadata.BotMemuMetadata.$Properties
         * @deprecated Use BotMetadata.BotMemuMetadata.$Properties instead.
         */

        /**
         * Shape of a BotMemuMetadata.
         * @typedef {BotMetadata.BotMemuMetadata.$Properties} BotMetadata.BotMemuMetadata.$Shape
         */

        /**
         * Constructs a new BotMemuMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotMemuMetadata.
         * @constructor
         * @param {BotMetadata.BotMemuMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotMemuMetadata = function (properties) {
            this.faceImages = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotMemuMetadata faceImages.
         * @member {Array.<BotMetadata.BotMediaMetadata.$Properties>} faceImages
         * @memberof BotMetadata.BotMemuMetadata
         * @instance
         */
        BotMemuMetadata.prototype.faceImages = $util.emptyArray;

        /**
         * Creates a new BotMemuMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotMemuMetadata
         * @static
         * @param {BotMetadata.BotMemuMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotMemuMetadata} BotMemuMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotMemuMetadata.$Shape): BotMetadata.BotMemuMetadata & BotMetadata.BotMemuMetadata.$Shape;
         *   (properties?: BotMetadata.BotMemuMetadata.$Properties): BotMetadata.BotMemuMetadata;
         * }}
         */
        BotMemuMetadata.create = function(properties) {
            return new BotMemuMetadata(properties);
        };

        /**
         * Encodes the specified BotMemuMetadata message. Does not implicitly {@link BotMetadata.BotMemuMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotMemuMetadata
         * @static
         * @param {BotMetadata.BotMemuMetadata.$Properties} message BotMemuMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMemuMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.faceImages != null && message.faceImages.length)
                for (var i = 0; i < message.faceImages.length; ++i)
                    $root.BotMetadata.BotMediaMetadata.encode(message.faceImages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotMemuMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMemuMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotMemuMetadata
         * @static
         * @param {BotMetadata.BotMemuMetadata.$Properties} message BotMemuMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMemuMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotMemuMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotMemuMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotMemuMetadata & BotMetadata.BotMemuMetadata.$Shape} BotMemuMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMemuMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotMemuMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.faceImages && message.faceImages.length))
                            message.faceImages = [];
                        message.faceImages.push($root.BotMetadata.BotMediaMetadata.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotMemuMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotMemuMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMemuMetadata & BotMetadata.BotMemuMetadata.$Shape} BotMemuMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMemuMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotMemuMetadata message.
         * @function verify
         * @memberof BotMetadata.BotMemuMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotMemuMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.faceImages != null && $Object.hasOwnProperty.call(message, "faceImages")) {
                if (!$Array.isArray(message.faceImages))
                    return "faceImages: array expected";
                for (var i = 0; i < message.faceImages.length; ++i) {
                    var error = $root.BotMetadata.BotMediaMetadata.verify(message.faceImages[i], _depth + 1);
                    if (error)
                        return "faceImages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BotMemuMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotMemuMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotMemuMetadata} BotMemuMetadata
         */
        BotMemuMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotMemuMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotMemuMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotMemuMetadata();
            if (object.faceImages) {
                if (!$Array.isArray(object.faceImages))
                    throw $TypeError(".BotMetadata.BotMemuMetadata.faceImages: array expected");
                message.faceImages = $Array(object.faceImages.length);
                for (var i = 0; i < object.faceImages.length; ++i) {
                    if (!$util.isObject(object.faceImages[i]))
                        throw $TypeError(".BotMetadata.BotMemuMetadata.faceImages: object expected");
                    message.faceImages[i] = $root.BotMetadata.BotMediaMetadata.fromObject(object.faceImages[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BotMemuMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotMemuMetadata
         * @static
         * @param {BotMetadata.BotMemuMetadata} message BotMemuMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotMemuMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.faceImages = [];
            if (message.faceImages && message.faceImages.length) {
                object.faceImages = $Array(message.faceImages.length);
                for (var j = 0; j < message.faceImages.length; ++j)
                    object.faceImages[j] = $root.BotMetadata.BotMediaMetadata.toObject(message.faceImages[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this BotMemuMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotMemuMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotMemuMetadata.prototype.toJSON = function() {
            return BotMemuMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotMemuMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotMemuMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotMemuMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotMemuMetadata";
        };

        return BotMemuMetadata;
    })();

    BotMetadata.BotMediaMetadata = (function() {

        /**
         * Properties of a BotMediaMetadata.
         * @typedef {Object} BotMetadata.BotMediaMetadata.$Properties
         * @property {string|null} [fileSha256] BotMediaMetadata fileSha256
         * @property {string|null} [mediaKey] BotMediaMetadata mediaKey
         * @property {string|null} [fileEncSha256] BotMediaMetadata fileEncSha256
         * @property {string|null} [directPath] BotMediaMetadata directPath
         * @property {number|Long|null} [mediaKeyTimestamp] BotMediaMetadata mediaKeyTimestamp
         * @property {string|null} [mimetype] BotMediaMetadata mimetype
         * @property {BotMetadata.BotMediaMetadata.OrientationType|null} [orientationType] BotMediaMetadata orientationType
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotMediaMetadata.
         * @memberof BotMetadata
         * @interface IBotMediaMetadata
         * @augments BotMetadata.BotMediaMetadata.$Properties
         * @deprecated Use BotMetadata.BotMediaMetadata.$Properties instead.
         */

        /**
         * Shape of a BotMediaMetadata.
         * @typedef {BotMetadata.BotMediaMetadata.$Properties} BotMetadata.BotMediaMetadata.$Shape
         */

        /**
         * Constructs a new BotMediaMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotMediaMetadata.
         * @constructor
         * @param {BotMetadata.BotMediaMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotMediaMetadata = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotMediaMetadata fileSha256.
         * @member {string|null|undefined} fileSha256
         * @memberof BotMetadata.BotMediaMetadata
         * @instance
         */
        BotMediaMetadata.prototype.fileSha256 = null;

        /**
         * BotMediaMetadata mediaKey.
         * @member {string|null|undefined} mediaKey
         * @memberof BotMetadata.BotMediaMetadata
         * @instance
         */
        BotMediaMetadata.prototype.mediaKey = null;

        /**
         * BotMediaMetadata fileEncSha256.
         * @member {string|null|undefined} fileEncSha256
         * @memberof BotMetadata.BotMediaMetadata
         * @instance
         */
        BotMediaMetadata.prototype.fileEncSha256 = null;

        /**
         * BotMediaMetadata directPath.
         * @member {string|null|undefined} directPath
         * @memberof BotMetadata.BotMediaMetadata
         * @instance
         */
        BotMediaMetadata.prototype.directPath = null;

        /**
         * BotMediaMetadata mediaKeyTimestamp.
         * @member {number|Long|null|undefined} mediaKeyTimestamp
         * @memberof BotMetadata.BotMediaMetadata
         * @instance
         */
        BotMediaMetadata.prototype.mediaKeyTimestamp = null;

        /**
         * BotMediaMetadata mimetype.
         * @member {string|null|undefined} mimetype
         * @memberof BotMetadata.BotMediaMetadata
         * @instance
         */
        BotMediaMetadata.prototype.mimetype = null;

        /**
         * BotMediaMetadata orientationType.
         * @member {BotMetadata.BotMediaMetadata.OrientationType|null|undefined} orientationType
         * @memberof BotMetadata.BotMediaMetadata
         * @instance
         */
        BotMediaMetadata.prototype.orientationType = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMediaMetadata.prototype, "_fileSha256", {
            get: $util.oneOfGetter($oneOfFields = ["fileSha256"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMediaMetadata.prototype, "_mediaKey", {
            get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMediaMetadata.prototype, "_fileEncSha256", {
            get: $util.oneOfGetter($oneOfFields = ["fileEncSha256"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMediaMetadata.prototype, "_directPath", {
            get: $util.oneOfGetter($oneOfFields = ["directPath"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMediaMetadata.prototype, "_mediaKeyTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["mediaKeyTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMediaMetadata.prototype, "_mimetype", {
            get: $util.oneOfGetter($oneOfFields = ["mimetype"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMediaMetadata.prototype, "_orientationType", {
            get: $util.oneOfGetter($oneOfFields = ["orientationType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotMediaMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotMediaMetadata
         * @static
         * @param {BotMetadata.BotMediaMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotMediaMetadata} BotMediaMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotMediaMetadata.$Shape): BotMetadata.BotMediaMetadata & BotMetadata.BotMediaMetadata.$Shape;
         *   (properties?: BotMetadata.BotMediaMetadata.$Properties): BotMetadata.BotMediaMetadata;
         * }}
         */
        BotMediaMetadata.create = function(properties) {
            return new BotMediaMetadata(properties);
        };

        /**
         * Encodes the specified BotMediaMetadata message. Does not implicitly {@link BotMetadata.BotMediaMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotMediaMetadata
         * @static
         * @param {BotMetadata.BotMediaMetadata.$Properties} message BotMediaMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMediaMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.fileSha256 != null && $Object.hasOwnProperty.call(message, "fileSha256"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileSha256);
            if (message.mediaKey != null && $Object.hasOwnProperty.call(message, "mediaKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mediaKey);
            if (message.fileEncSha256 != null && $Object.hasOwnProperty.call(message, "fileEncSha256"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fileEncSha256);
            if (message.directPath != null && $Object.hasOwnProperty.call(message, "directPath"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.directPath);
            if (message.mediaKeyTimestamp != null && $Object.hasOwnProperty.call(message, "mediaKeyTimestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.mediaKeyTimestamp);
            if (message.mimetype != null && $Object.hasOwnProperty.call(message, "mimetype"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.mimetype);
            if (message.orientationType != null && $Object.hasOwnProperty.call(message, "orientationType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.orientationType);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotMediaMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMediaMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotMediaMetadata
         * @static
         * @param {BotMetadata.BotMediaMetadata.$Properties} message BotMediaMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMediaMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotMediaMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotMediaMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotMediaMetadata & BotMetadata.BotMediaMetadata.$Shape} BotMediaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMediaMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotMediaMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.fileSha256 = reader.stringVerify();
                        message._fileSha256 = "fileSha256";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.mediaKey = reader.stringVerify();
                        message._mediaKey = "mediaKey";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.fileEncSha256 = reader.stringVerify();
                        message._fileEncSha256 = "fileEncSha256";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.directPath = reader.stringVerify();
                        message._directPath = "directPath";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.mediaKeyTimestamp = reader.int64();
                        message._mediaKeyTimestamp = "mediaKeyTimestamp";
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.mimetype = reader.stringVerify();
                        message._mimetype = "mimetype";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.orientationType = reader.int32();
                        message._orientationType = "orientationType";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotMediaMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotMediaMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMediaMetadata & BotMetadata.BotMediaMetadata.$Shape} BotMediaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMediaMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotMediaMetadata message.
         * @function verify
         * @memberof BotMetadata.BotMediaMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotMediaMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.fileSha256 != null && $Object.hasOwnProperty.call(message, "fileSha256")) {
                properties._fileSha256 = 1;
                if (!$util.isString(message.fileSha256))
                    return "fileSha256: string expected";
            }
            if (message.mediaKey != null && $Object.hasOwnProperty.call(message, "mediaKey")) {
                properties._mediaKey = 1;
                if (!$util.isString(message.mediaKey))
                    return "mediaKey: string expected";
            }
            if (message.fileEncSha256 != null && $Object.hasOwnProperty.call(message, "fileEncSha256")) {
                properties._fileEncSha256 = 1;
                if (!$util.isString(message.fileEncSha256))
                    return "fileEncSha256: string expected";
            }
            if (message.directPath != null && $Object.hasOwnProperty.call(message, "directPath")) {
                properties._directPath = 1;
                if (!$util.isString(message.directPath))
                    return "directPath: string expected";
            }
            if (message.mediaKeyTimestamp != null && $Object.hasOwnProperty.call(message, "mediaKeyTimestamp")) {
                properties._mediaKeyTimestamp = 1;
                if (!$util.isInteger(message.mediaKeyTimestamp) && !(message.mediaKeyTimestamp && $util.isInteger(message.mediaKeyTimestamp.low) && $util.isInteger(message.mediaKeyTimestamp.high)))
                    return "mediaKeyTimestamp: integer|Long expected";
            }
            if (message.mimetype != null && $Object.hasOwnProperty.call(message, "mimetype")) {
                properties._mimetype = 1;
                if (!$util.isString(message.mimetype))
                    return "mimetype: string expected";
            }
            if (message.orientationType != null && $Object.hasOwnProperty.call(message, "orientationType")) {
                properties._orientationType = 1;
                if (typeof message.orientationType !== "number" || (message.orientationType | 0) !== message.orientationType)
                    return "orientationType: enum value expected";
            }
            return null;
        };

        /**
         * Creates a BotMediaMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotMediaMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotMediaMetadata} BotMediaMetadata
         */
        BotMediaMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotMediaMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotMediaMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotMediaMetadata();
            if (object.fileSha256 != null)
                message.fileSha256 = $String(object.fileSha256);
            if (object.mediaKey != null)
                message.mediaKey = $String(object.mediaKey);
            if (object.fileEncSha256 != null)
                message.fileEncSha256 = $String(object.fileEncSha256);
            if (object.directPath != null)
                message.directPath = $String(object.directPath);
            if (object.mediaKeyTimestamp != null)
                if ($util.Long)
                    message.mediaKeyTimestamp = $util.Long.fromValue(object.mediaKeyTimestamp, false);
                else if (typeof object.mediaKeyTimestamp === "string")
                    message.mediaKeyTimestamp = $parseInt(object.mediaKeyTimestamp, 10);
                else if (typeof object.mediaKeyTimestamp === "number")
                    message.mediaKeyTimestamp = object.mediaKeyTimestamp;
                else if (typeof object.mediaKeyTimestamp === "object")
                    message.mediaKeyTimestamp = new $util.LongBits(object.mediaKeyTimestamp.low >>> 0, object.mediaKeyTimestamp.high >>> 0).toNumber();
            if (object.mimetype != null)
                message.mimetype = $String(object.mimetype);
            switch (object.orientationType) {
            case "CENTER":
            case 1:
                message.orientationType = 1;
                break;
            case "LEFT":
            case 2:
                message.orientationType = 2;
                break;
            case "RIGHT":
            case 3:
                message.orientationType = 3;
                break;
            default:
                if (typeof object.orientationType === "number" && (object.orientationType | 0) === object.orientationType)
                    message.orientationType = object.orientationType;
            }
            return message;
        };

        /**
         * Creates a plain object from a BotMediaMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotMediaMetadata
         * @static
         * @param {BotMetadata.BotMediaMetadata} message BotMediaMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotMediaMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.fileSha256 != null && $Object.hasOwnProperty.call(message, "fileSha256"))
                object.fileSha256 = message.fileSha256;
            if (message.mediaKey != null && $Object.hasOwnProperty.call(message, "mediaKey"))
                object.mediaKey = message.mediaKey;
            if (message.fileEncSha256 != null && $Object.hasOwnProperty.call(message, "fileEncSha256"))
                object.fileEncSha256 = message.fileEncSha256;
            if (message.directPath != null && $Object.hasOwnProperty.call(message, "directPath"))
                object.directPath = message.directPath;
            if (message.mediaKeyTimestamp != null && $Object.hasOwnProperty.call(message, "mediaKeyTimestamp"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.mediaKeyTimestamp = typeof message.mediaKeyTimestamp === "number" ? $BigInt(message.mediaKeyTimestamp) : $util.Long.fromBits(message.mediaKeyTimestamp.low >>> 0, message.mediaKeyTimestamp.high >>> 0, false).toBigInt();
                else if (typeof message.mediaKeyTimestamp === "number")
                    object.mediaKeyTimestamp = options.longs === $String ? $String(message.mediaKeyTimestamp) : message.mediaKeyTimestamp;
                else
                    object.mediaKeyTimestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.mediaKeyTimestamp) : options.longs === $Number ? new $util.LongBits(message.mediaKeyTimestamp.low >>> 0, message.mediaKeyTimestamp.high >>> 0).toNumber() : message.mediaKeyTimestamp;
            if (message.mimetype != null && $Object.hasOwnProperty.call(message, "mimetype"))
                object.mimetype = message.mimetype;
            if (message.orientationType != null && $Object.hasOwnProperty.call(message, "orientationType"))
                object.orientationType = options.enums === $String ? $root.BotMetadata.BotMediaMetadata.OrientationType[message.orientationType] === $undefined ? message.orientationType : $root.BotMetadata.BotMediaMetadata.OrientationType[message.orientationType] : message.orientationType;
            return object;
        };

        /**
         * Converts this BotMediaMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotMediaMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotMediaMetadata.prototype.toJSON = function() {
            return BotMediaMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotMediaMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotMediaMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotMediaMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotMediaMetadata";
        };

        /**
         * OrientationType enum.
         * @name BotMetadata.BotMediaMetadata.OrientationType
         * @enum {number}
         * @property {number} CENTER=1 CENTER value
         * @property {number} LEFT=2 LEFT value
         * @property {number} RIGHT=3 RIGHT value
         */
        BotMediaMetadata.OrientationType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[1] = "CENTER"] = 1;
            values[valuesById[2] = "LEFT"] = 2;
            values[valuesById[3] = "RIGHT"] = 3;
            return values;
        })();

        return BotMediaMetadata;
    })();

    BotMetadata.BotSessionMetadata = (function() {

        /**
         * Properties of a BotSessionMetadata.
         * @typedef {Object} BotMetadata.BotSessionMetadata.$Properties
         * @property {string|null} [sessionId] BotSessionMetadata sessionId
         * @property {BotMetadata.BotSessionSource|null} [sessionSource] BotSessionMetadata sessionSource
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotSessionMetadata.
         * @memberof BotMetadata
         * @interface IBotSessionMetadata
         * @augments BotMetadata.BotSessionMetadata.$Properties
         * @deprecated Use BotMetadata.BotSessionMetadata.$Properties instead.
         */

        /**
         * Shape of a BotSessionMetadata.
         * @typedef {BotMetadata.BotSessionMetadata.$Properties} BotMetadata.BotSessionMetadata.$Shape
         */

        /**
         * Constructs a new BotSessionMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotSessionMetadata.
         * @constructor
         * @param {BotMetadata.BotSessionMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotSessionMetadata = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotSessionMetadata sessionId.
         * @member {string|null|undefined} sessionId
         * @memberof BotMetadata.BotSessionMetadata
         * @instance
         */
        BotSessionMetadata.prototype.sessionId = null;

        /**
         * BotSessionMetadata sessionSource.
         * @member {BotMetadata.BotSessionSource|null|undefined} sessionSource
         * @memberof BotMetadata.BotSessionMetadata
         * @instance
         */
        BotSessionMetadata.prototype.sessionSource = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotSessionMetadata.prototype, "_sessionId", {
            get: $util.oneOfGetter($oneOfFields = ["sessionId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotSessionMetadata.prototype, "_sessionSource", {
            get: $util.oneOfGetter($oneOfFields = ["sessionSource"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotSessionMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotSessionMetadata
         * @static
         * @param {BotMetadata.BotSessionMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotSessionMetadata} BotSessionMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotSessionMetadata.$Shape): BotMetadata.BotSessionMetadata & BotMetadata.BotSessionMetadata.$Shape;
         *   (properties?: BotMetadata.BotSessionMetadata.$Properties): BotMetadata.BotSessionMetadata;
         * }}
         */
        BotSessionMetadata.create = function(properties) {
            return new BotSessionMetadata(properties);
        };

        /**
         * Encodes the specified BotSessionMetadata message. Does not implicitly {@link BotMetadata.BotSessionMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotSessionMetadata
         * @static
         * @param {BotMetadata.BotSessionMetadata.$Properties} message BotSessionMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSessionMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.sessionId != null && $Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.sessionSource != null && $Object.hasOwnProperty.call(message, "sessionSource"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sessionSource);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotSessionMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotSessionMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotSessionMetadata
         * @static
         * @param {BotMetadata.BotSessionMetadata.$Properties} message BotSessionMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSessionMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotSessionMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotSessionMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotSessionMetadata & BotMetadata.BotSessionMetadata.$Shape} BotSessionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSessionMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotSessionMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.sessionId = reader.stringVerify();
                        message._sessionId = "sessionId";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.sessionSource = reader.int32();
                        message._sessionSource = "sessionSource";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotSessionMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotSessionMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotSessionMetadata & BotMetadata.BotSessionMetadata.$Shape} BotSessionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSessionMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotSessionMetadata message.
         * @function verify
         * @memberof BotMetadata.BotSessionMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotSessionMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.sessionId != null && $Object.hasOwnProperty.call(message, "sessionId")) {
                properties._sessionId = 1;
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            }
            if (message.sessionSource != null && $Object.hasOwnProperty.call(message, "sessionSource")) {
                properties._sessionSource = 1;
                if (typeof message.sessionSource !== "number" || (message.sessionSource | 0) !== message.sessionSource)
                    return "sessionSource: enum value expected";
            }
            return null;
        };

        /**
         * Creates a BotSessionMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotSessionMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotSessionMetadata} BotSessionMetadata
         */
        BotSessionMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotSessionMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotSessionMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotSessionMetadata();
            if (object.sessionId != null)
                message.sessionId = $String(object.sessionId);
            switch (object.sessionSource) {
            case "NONE":
            case 0:
                message.sessionSource = 0;
                break;
            case "NULL_STATE":
            case 1:
                message.sessionSource = 1;
                break;
            case "TYPEAHEAD":
            case 2:
                message.sessionSource = 2;
                break;
            case "USER_INPUT":
            case 3:
                message.sessionSource = 3;
                break;
            case "EMU_FLASH":
            case 4:
                message.sessionSource = 4;
                break;
            case "EMU_FLASH_FOLLOWUP":
            case 5:
                message.sessionSource = 5;
                break;
            case "VOICE":
            case 6:
                message.sessionSource = 6;
                break;
            default:
                if (typeof object.sessionSource === "number" && (object.sessionSource | 0) === object.sessionSource)
                    message.sessionSource = object.sessionSource;
            }
            return message;
        };

        /**
         * Creates a plain object from a BotSessionMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotSessionMetadata
         * @static
         * @param {BotMetadata.BotSessionMetadata} message BotSessionMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotSessionMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.sessionId != null && $Object.hasOwnProperty.call(message, "sessionId"))
                object.sessionId = message.sessionId;
            if (message.sessionSource != null && $Object.hasOwnProperty.call(message, "sessionSource"))
                object.sessionSource = options.enums === $String ? $root.BotMetadata.BotSessionSource[message.sessionSource] === $undefined ? message.sessionSource : $root.BotMetadata.BotSessionSource[message.sessionSource] : message.sessionSource;
            return object;
        };

        /**
         * Converts this BotSessionMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotSessionMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotSessionMetadata.prototype.toJSON = function() {
            return BotSessionMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotSessionMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotSessionMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotSessionMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotSessionMetadata";
        };

        return BotSessionMetadata;
    })();

    BotMetadata.BotMetricsMetadata = (function() {

        /**
         * Properties of a BotMetricsMetadata.
         * @typedef {Object} BotMetadata.BotMetricsMetadata.$Properties
         * @property {string|null} [destinationId] BotMetricsMetadata destinationId
         * @property {BotMetadata.BotMetricsEntryPoint|null} [destinationEntryPoint] BotMetricsMetadata destinationEntryPoint
         * @property {BotMetadata.BotMetricsThreadEntryPoint|null} [threadOrigin] BotMetricsMetadata threadOrigin
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotMetricsMetadata.
         * @memberof BotMetadata
         * @interface IBotMetricsMetadata
         * @augments BotMetadata.BotMetricsMetadata.$Properties
         * @deprecated Use BotMetadata.BotMetricsMetadata.$Properties instead.
         */

        /**
         * Shape of a BotMetricsMetadata.
         * @typedef {BotMetadata.BotMetricsMetadata.$Properties} BotMetadata.BotMetricsMetadata.$Shape
         */

        /**
         * Constructs a new BotMetricsMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotMetricsMetadata.
         * @constructor
         * @param {BotMetadata.BotMetricsMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotMetricsMetadata = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotMetricsMetadata destinationId.
         * @member {string|null|undefined} destinationId
         * @memberof BotMetadata.BotMetricsMetadata
         * @instance
         */
        BotMetricsMetadata.prototype.destinationId = null;

        /**
         * BotMetricsMetadata destinationEntryPoint.
         * @member {BotMetadata.BotMetricsEntryPoint|null|undefined} destinationEntryPoint
         * @memberof BotMetadata.BotMetricsMetadata
         * @instance
         */
        BotMetricsMetadata.prototype.destinationEntryPoint = null;

        /**
         * BotMetricsMetadata threadOrigin.
         * @member {BotMetadata.BotMetricsThreadEntryPoint|null|undefined} threadOrigin
         * @memberof BotMetadata.BotMetricsMetadata
         * @instance
         */
        BotMetricsMetadata.prototype.threadOrigin = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetricsMetadata.prototype, "_destinationId", {
            get: $util.oneOfGetter($oneOfFields = ["destinationId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetricsMetadata.prototype, "_destinationEntryPoint", {
            get: $util.oneOfGetter($oneOfFields = ["destinationEntryPoint"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMetricsMetadata.prototype, "_threadOrigin", {
            get: $util.oneOfGetter($oneOfFields = ["threadOrigin"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotMetricsMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotMetricsMetadata
         * @static
         * @param {BotMetadata.BotMetricsMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotMetricsMetadata} BotMetricsMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotMetricsMetadata.$Shape): BotMetadata.BotMetricsMetadata & BotMetadata.BotMetricsMetadata.$Shape;
         *   (properties?: BotMetadata.BotMetricsMetadata.$Properties): BotMetadata.BotMetricsMetadata;
         * }}
         */
        BotMetricsMetadata.create = function(properties) {
            return new BotMetricsMetadata(properties);
        };

        /**
         * Encodes the specified BotMetricsMetadata message. Does not implicitly {@link BotMetadata.BotMetricsMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotMetricsMetadata
         * @static
         * @param {BotMetadata.BotMetricsMetadata.$Properties} message BotMetricsMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMetricsMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.destinationId != null && $Object.hasOwnProperty.call(message, "destinationId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.destinationId);
            if (message.destinationEntryPoint != null && $Object.hasOwnProperty.call(message, "destinationEntryPoint"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.destinationEntryPoint);
            if (message.threadOrigin != null && $Object.hasOwnProperty.call(message, "threadOrigin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.threadOrigin);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotMetricsMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMetricsMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotMetricsMetadata
         * @static
         * @param {BotMetadata.BotMetricsMetadata.$Properties} message BotMetricsMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMetricsMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotMetricsMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotMetricsMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotMetricsMetadata & BotMetadata.BotMetricsMetadata.$Shape} BotMetricsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMetricsMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotMetricsMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.destinationId = reader.stringVerify();
                        message._destinationId = "destinationId";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.destinationEntryPoint = reader.int32();
                        message._destinationEntryPoint = "destinationEntryPoint";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.threadOrigin = reader.int32();
                        message._threadOrigin = "threadOrigin";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotMetricsMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotMetricsMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMetricsMetadata & BotMetadata.BotMetricsMetadata.$Shape} BotMetricsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMetricsMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotMetricsMetadata message.
         * @function verify
         * @memberof BotMetadata.BotMetricsMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotMetricsMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.destinationId != null && $Object.hasOwnProperty.call(message, "destinationId")) {
                properties._destinationId = 1;
                if (!$util.isString(message.destinationId))
                    return "destinationId: string expected";
            }
            if (message.destinationEntryPoint != null && $Object.hasOwnProperty.call(message, "destinationEntryPoint")) {
                properties._destinationEntryPoint = 1;
                if (typeof message.destinationEntryPoint !== "number" || (message.destinationEntryPoint | 0) !== message.destinationEntryPoint)
                    return "destinationEntryPoint: enum value expected";
            }
            if (message.threadOrigin != null && $Object.hasOwnProperty.call(message, "threadOrigin")) {
                properties._threadOrigin = 1;
                if (typeof message.threadOrigin !== "number" || (message.threadOrigin | 0) !== message.threadOrigin)
                    return "threadOrigin: enum value expected";
            }
            return null;
        };

        /**
         * Creates a BotMetricsMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotMetricsMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotMetricsMetadata} BotMetricsMetadata
         */
        BotMetricsMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotMetricsMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotMetricsMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotMetricsMetadata();
            if (object.destinationId != null)
                message.destinationId = $String(object.destinationId);
            switch (object.destinationEntryPoint) {
            case "FAVICON":
            case 1:
                message.destinationEntryPoint = 1;
                break;
            case "CHATLIST":
            case 2:
                message.destinationEntryPoint = 2;
                break;
            case "AISEARCH_NULL_STATE_PAPER_PLANE":
            case 3:
                message.destinationEntryPoint = 3;
                break;
            case "AISEARCH_NULL_STATE_SUGGESTION":
            case 4:
                message.destinationEntryPoint = 4;
                break;
            case "AISEARCH_TYPE_AHEAD_SUGGESTION":
            case 5:
                message.destinationEntryPoint = 5;
                break;
            case "AISEARCH_TYPE_AHEAD_PAPER_PLANE":
            case 6:
                message.destinationEntryPoint = 6;
                break;
            case "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST":
            case 7:
                message.destinationEntryPoint = 7;
                break;
            case "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES":
            case 8:
                message.destinationEntryPoint = 8;
                break;
            case "AIVOICE_SEARCH_BAR":
            case 9:
                message.destinationEntryPoint = 9;
                break;
            case "AIVOICE_FAVICON":
            case 10:
                message.destinationEntryPoint = 10;
                break;
            case "AISTUDIO":
            case 11:
                message.destinationEntryPoint = 11;
                break;
            case "DEEPLINK":
            case 12:
                message.destinationEntryPoint = 12;
                break;
            case "NOTIFICATION":
            case 13:
                message.destinationEntryPoint = 13;
                break;
            case "PROFILE_MESSAGE_BUTTON":
            case 14:
                message.destinationEntryPoint = 14;
                break;
            case "FORWARD":
            case 15:
                message.destinationEntryPoint = 15;
                break;
            case "APP_SHORTCUT":
            case 16:
                message.destinationEntryPoint = 16;
                break;
            case "FF_FAMILY":
            case 17:
                message.destinationEntryPoint = 17;
                break;
            case "AI_TAB":
            case 18:
                message.destinationEntryPoint = 18;
                break;
            case "AI_HOME":
            case 19:
                message.destinationEntryPoint = 19;
                break;
            case "AI_DEEPLINK_IMMERSIVE":
            case 20:
                message.destinationEntryPoint = 20;
                break;
            case "AI_DEEPLINK":
            case 21:
                message.destinationEntryPoint = 21;
                break;
            case "META_AI_CHAT_SHORTCUT_AI_STUDIO":
            case 22:
                message.destinationEntryPoint = 22;
                break;
            case "UGC_CHAT_SHORTCUT_AI_STUDIO":
            case 23:
                message.destinationEntryPoint = 23;
                break;
            case "NEW_CHAT_AI_STUDIO":
            case 24:
                message.destinationEntryPoint = 24;
                break;
            case "AIVOICE_FAVICON_CALL_HISTORY":
            case 25:
                message.destinationEntryPoint = 25;
                break;
            case "ASK_META_AI_CONTEXT_MENU":
            case 26:
                message.destinationEntryPoint = 26;
                break;
            case "ASK_META_AI_CONTEXT_MENU_1ON1":
            case 27:
                message.destinationEntryPoint = 27;
                break;
            case "ASK_META_AI_CONTEXT_MENU_GROUP":
            case 28:
                message.destinationEntryPoint = 28;
                break;
            case "INVOKE_META_AI_1ON1":
            case 29:
                message.destinationEntryPoint = 29;
                break;
            case "INVOKE_META_AI_GROUP":
            case 30:
                message.destinationEntryPoint = 30;
                break;
            case "META_AI_FORWARD":
            case 31:
                message.destinationEntryPoint = 31;
                break;
            default:
                if (typeof object.destinationEntryPoint === "number" && (object.destinationEntryPoint | 0) === object.destinationEntryPoint)
                    message.destinationEntryPoint = object.destinationEntryPoint;
            }
            switch (object.threadOrigin) {
            case "AI_TAB_THREAD":
            case 1:
                message.threadOrigin = 1;
                break;
            case "AI_HOME_THREAD":
            case 2:
                message.threadOrigin = 2;
                break;
            case "AI_DEEPLINK_IMMERSIVE_THREAD":
            case 3:
                message.threadOrigin = 3;
                break;
            case "AI_DEEPLINK_THREAD":
            case 4:
                message.threadOrigin = 4;
                break;
            case "ASK_META_AI_CONTEXT_MENU_THREAD":
            case 5:
                message.threadOrigin = 5;
                break;
            default:
                if (typeof object.threadOrigin === "number" && (object.threadOrigin | 0) === object.threadOrigin)
                    message.threadOrigin = object.threadOrigin;
            }
            return message;
        };

        /**
         * Creates a plain object from a BotMetricsMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotMetricsMetadata
         * @static
         * @param {BotMetadata.BotMetricsMetadata} message BotMetricsMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotMetricsMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.destinationId != null && $Object.hasOwnProperty.call(message, "destinationId"))
                object.destinationId = message.destinationId;
            if (message.destinationEntryPoint != null && $Object.hasOwnProperty.call(message, "destinationEntryPoint"))
                object.destinationEntryPoint = options.enums === $String ? $root.BotMetadata.BotMetricsEntryPoint[message.destinationEntryPoint] === $undefined ? message.destinationEntryPoint : $root.BotMetadata.BotMetricsEntryPoint[message.destinationEntryPoint] : message.destinationEntryPoint;
            if (message.threadOrigin != null && $Object.hasOwnProperty.call(message, "threadOrigin"))
                object.threadOrigin = options.enums === $String ? $root.BotMetadata.BotMetricsThreadEntryPoint[message.threadOrigin] === $undefined ? message.threadOrigin : $root.BotMetadata.BotMetricsThreadEntryPoint[message.threadOrigin] : message.threadOrigin;
            return object;
        };

        /**
         * Converts this BotMetricsMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotMetricsMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotMetricsMetadata.prototype.toJSON = function() {
            return BotMetricsMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotMetricsMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotMetricsMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotMetricsMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotMetricsMetadata";
        };

        return BotMetricsMetadata;
    })();

    BotMetadata.BotRenderingMetadata = (function() {

        /**
         * Properties of a BotRenderingMetadata.
         * @typedef {Object} BotMetadata.BotRenderingMetadata.$Properties
         * @property {Array.<BotMetadata.BotRenderingMetadata.Keyword.$Properties>|null} [keywords] BotRenderingMetadata keywords
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotRenderingMetadata.
         * @memberof BotMetadata
         * @interface IBotRenderingMetadata
         * @augments BotMetadata.BotRenderingMetadata.$Properties
         * @deprecated Use BotMetadata.BotRenderingMetadata.$Properties instead.
         */

        /**
         * Shape of a BotRenderingMetadata.
         * @typedef {BotMetadata.BotRenderingMetadata.$Properties} BotMetadata.BotRenderingMetadata.$Shape
         */

        /**
         * Constructs a new BotRenderingMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotRenderingMetadata.
         * @constructor
         * @param {BotMetadata.BotRenderingMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotRenderingMetadata = function (properties) {
            this.keywords = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotRenderingMetadata keywords.
         * @member {Array.<BotMetadata.BotRenderingMetadata.Keyword.$Properties>} keywords
         * @memberof BotMetadata.BotRenderingMetadata
         * @instance
         */
        BotRenderingMetadata.prototype.keywords = $util.emptyArray;

        /**
         * Creates a new BotRenderingMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotRenderingMetadata
         * @static
         * @param {BotMetadata.BotRenderingMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotRenderingMetadata} BotRenderingMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotRenderingMetadata.$Shape): BotMetadata.BotRenderingMetadata & BotMetadata.BotRenderingMetadata.$Shape;
         *   (properties?: BotMetadata.BotRenderingMetadata.$Properties): BotMetadata.BotRenderingMetadata;
         * }}
         */
        BotRenderingMetadata.create = function(properties) {
            return new BotRenderingMetadata(properties);
        };

        /**
         * Encodes the specified BotRenderingMetadata message. Does not implicitly {@link BotMetadata.BotRenderingMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotRenderingMetadata
         * @static
         * @param {BotMetadata.BotRenderingMetadata.$Properties} message BotRenderingMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotRenderingMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.keywords != null && message.keywords.length)
                for (var i = 0; i < message.keywords.length; ++i)
                    $root.BotMetadata.BotRenderingMetadata.Keyword.encode(message.keywords[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotRenderingMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotRenderingMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotRenderingMetadata
         * @static
         * @param {BotMetadata.BotRenderingMetadata.$Properties} message BotRenderingMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotRenderingMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotRenderingMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotRenderingMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotRenderingMetadata & BotMetadata.BotRenderingMetadata.$Shape} BotRenderingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotRenderingMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotRenderingMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.keywords && message.keywords.length))
                            message.keywords = [];
                        message.keywords.push($root.BotMetadata.BotRenderingMetadata.Keyword.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotRenderingMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotRenderingMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotRenderingMetadata & BotMetadata.BotRenderingMetadata.$Shape} BotRenderingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotRenderingMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotRenderingMetadata message.
         * @function verify
         * @memberof BotMetadata.BotRenderingMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotRenderingMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.keywords != null && $Object.hasOwnProperty.call(message, "keywords")) {
                if (!$Array.isArray(message.keywords))
                    return "keywords: array expected";
                for (var i = 0; i < message.keywords.length; ++i) {
                    var error = $root.BotMetadata.BotRenderingMetadata.Keyword.verify(message.keywords[i], _depth + 1);
                    if (error)
                        return "keywords." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BotRenderingMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotRenderingMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotRenderingMetadata} BotRenderingMetadata
         */
        BotRenderingMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotRenderingMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotRenderingMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotRenderingMetadata();
            if (object.keywords) {
                if (!$Array.isArray(object.keywords))
                    throw $TypeError(".BotMetadata.BotRenderingMetadata.keywords: array expected");
                message.keywords = $Array(object.keywords.length);
                for (var i = 0; i < object.keywords.length; ++i) {
                    if (!$util.isObject(object.keywords[i]))
                        throw $TypeError(".BotMetadata.BotRenderingMetadata.keywords: object expected");
                    message.keywords[i] = $root.BotMetadata.BotRenderingMetadata.Keyword.fromObject(object.keywords[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BotRenderingMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotRenderingMetadata
         * @static
         * @param {BotMetadata.BotRenderingMetadata} message BotRenderingMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotRenderingMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.keywords = [];
            if (message.keywords && message.keywords.length) {
                object.keywords = $Array(message.keywords.length);
                for (var j = 0; j < message.keywords.length; ++j)
                    object.keywords[j] = $root.BotMetadata.BotRenderingMetadata.Keyword.toObject(message.keywords[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this BotRenderingMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotRenderingMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotRenderingMetadata.prototype.toJSON = function() {
            return BotRenderingMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotRenderingMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotRenderingMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotRenderingMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotRenderingMetadata";
        };

        BotRenderingMetadata.Keyword = (function() {

            /**
             * Properties of a Keyword.
             * @typedef {Object} BotMetadata.BotRenderingMetadata.Keyword.$Properties
             * @property {string|null} [value] Keyword value
             * @property {Array.<string>|null} [associatedPrompts] Keyword associatedPrompts
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Keyword.
             * @memberof BotMetadata.BotRenderingMetadata
             * @interface IKeyword
             * @augments BotMetadata.BotRenderingMetadata.Keyword.$Properties
             * @deprecated Use BotMetadata.BotRenderingMetadata.Keyword.$Properties instead.
             */

            /**
             * Shape of a Keyword.
             * @typedef {BotMetadata.BotRenderingMetadata.Keyword.$Properties} BotMetadata.BotRenderingMetadata.Keyword.$Shape
             */

            /**
             * Constructs a new Keyword.
             * @memberof BotMetadata.BotRenderingMetadata
             * @classdesc Represents a Keyword.
             * @constructor
             * @param {BotMetadata.BotRenderingMetadata.Keyword.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var Keyword = function (properties) {
                this.associatedPrompts = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Keyword value.
             * @member {string|null|undefined} value
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @instance
             */
            Keyword.prototype.value = null;

            /**
             * Keyword associatedPrompts.
             * @member {Array.<string>} associatedPrompts
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @instance
             */
            Keyword.prototype.associatedPrompts = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Keyword.prototype, "_value", {
                get: $util.oneOfGetter($oneOfFields = ["value"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Keyword instance using the specified properties.
             * @function create
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @static
             * @param {BotMetadata.BotRenderingMetadata.Keyword.$Properties=} [properties] Properties to set
             * @returns {BotMetadata.BotRenderingMetadata.Keyword} Keyword instance
             * @type {{
             *   (properties: BotMetadata.BotRenderingMetadata.Keyword.$Shape): BotMetadata.BotRenderingMetadata.Keyword & BotMetadata.BotRenderingMetadata.Keyword.$Shape;
             *   (properties?: BotMetadata.BotRenderingMetadata.Keyword.$Properties): BotMetadata.BotRenderingMetadata.Keyword;
             * }}
             */
            Keyword.create = function(properties) {
                return new Keyword(properties);
            };

            /**
             * Encodes the specified Keyword message. Does not implicitly {@link BotMetadata.BotRenderingMetadata.Keyword.verify|verify} messages.
             * @function encode
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @static
             * @param {BotMetadata.BotRenderingMetadata.Keyword.$Properties} message Keyword message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Keyword.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                if (message.associatedPrompts != null && message.associatedPrompts.length)
                    for (var i = 0; i < message.associatedPrompts.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.associatedPrompts[i]);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Keyword message, length delimited. Does not implicitly {@link BotMetadata.BotRenderingMetadata.Keyword.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @static
             * @param {BotMetadata.BotRenderingMetadata.Keyword.$Properties} message Keyword message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Keyword.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Keyword message from the specified reader or buffer.
             * @function decode
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BotMetadata.BotRenderingMetadata.Keyword & BotMetadata.BotRenderingMetadata.Keyword.$Shape} Keyword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Keyword.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.BotMetadata.BotRenderingMetadata.Keyword();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.value = reader.stringVerify();
                            message._value = "value";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.associatedPrompts && message.associatedPrompts.length))
                                message.associatedPrompts = [];
                            message.associatedPrompts.push(reader.stringVerify());
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Keyword message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BotMetadata.BotRenderingMetadata.Keyword & BotMetadata.BotRenderingMetadata.Keyword.$Shape} Keyword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Keyword.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.size());
            };

            /**
             * Verifies a Keyword message.
             * @function verify
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Keyword.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.value != null && $Object.hasOwnProperty.call(message, "value")) {
                    properties._value = 1;
                    if (!$util.isString(message.value))
                        return "value: string expected";
                }
                if (message.associatedPrompts != null && $Object.hasOwnProperty.call(message, "associatedPrompts")) {
                    if (!$Array.isArray(message.associatedPrompts))
                        return "associatedPrompts: array expected";
                    for (var i = 0; i < message.associatedPrompts.length; ++i)
                        if (!$util.isString(message.associatedPrompts[i]))
                            return "associatedPrompts: string[] expected";
                }
                return null;
            };

            /**
             * Creates a Keyword message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BotMetadata.BotRenderingMetadata.Keyword} Keyword
             */
            Keyword.fromObject = function (object, _depth) {
                if (object instanceof $root.BotMetadata.BotRenderingMetadata.Keyword)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BotMetadata.BotRenderingMetadata.Keyword: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.BotMetadata.BotRenderingMetadata.Keyword();
                if (object.value != null)
                    message.value = $String(object.value);
                if (object.associatedPrompts) {
                    if (!$Array.isArray(object.associatedPrompts))
                        throw $TypeError(".BotMetadata.BotRenderingMetadata.Keyword.associatedPrompts: array expected");
                    message.associatedPrompts = $Array(object.associatedPrompts.length);
                    for (var i = 0; i < object.associatedPrompts.length; ++i)
                        message.associatedPrompts[i] = $String(object.associatedPrompts[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Keyword message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @static
             * @param {BotMetadata.BotRenderingMetadata.Keyword} message Keyword
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Keyword.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.associatedPrompts = [];
                if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                    object.value = message.value;
                if (message.associatedPrompts && message.associatedPrompts.length) {
                    object.associatedPrompts = $Array(message.associatedPrompts.length);
                    for (var j = 0; j < message.associatedPrompts.length; ++j)
                        object.associatedPrompts[j] = message.associatedPrompts[j];
                }
                return object;
            };

            /**
             * Converts this Keyword to JSON.
             * @function toJSON
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Keyword.prototype.toJSON = function() {
                return Keyword.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Keyword
             * @function getTypeUrl
             * @memberof BotMetadata.BotRenderingMetadata.Keyword
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Keyword.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BotMetadata.BotRenderingMetadata.Keyword";
            };

            return Keyword;
        })();

        return BotRenderingMetadata;
    })();

    BotMetadata.BotPromotionMessageMetadata = (function() {

        /**
         * Properties of a BotPromotionMessageMetadata.
         * @typedef {Object} BotMetadata.BotPromotionMessageMetadata.$Properties
         * @property {BotMetadata.BotPromotionMessageMetadata.BotPromotionType|null} [promotionType] BotPromotionMessageMetadata promotionType
         * @property {string|null} [buttonTitle] BotPromotionMessageMetadata buttonTitle
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotPromotionMessageMetadata.
         * @memberof BotMetadata
         * @interface IBotPromotionMessageMetadata
         * @augments BotMetadata.BotPromotionMessageMetadata.$Properties
         * @deprecated Use BotMetadata.BotPromotionMessageMetadata.$Properties instead.
         */

        /**
         * Shape of a BotPromotionMessageMetadata.
         * @typedef {BotMetadata.BotPromotionMessageMetadata.$Properties} BotMetadata.BotPromotionMessageMetadata.$Shape
         */

        /**
         * Constructs a new BotPromotionMessageMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotPromotionMessageMetadata.
         * @constructor
         * @param {BotMetadata.BotPromotionMessageMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotPromotionMessageMetadata = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotPromotionMessageMetadata promotionType.
         * @member {BotMetadata.BotPromotionMessageMetadata.BotPromotionType|null|undefined} promotionType
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @instance
         */
        BotPromotionMessageMetadata.prototype.promotionType = null;

        /**
         * BotPromotionMessageMetadata buttonTitle.
         * @member {string|null|undefined} buttonTitle
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @instance
         */
        BotPromotionMessageMetadata.prototype.buttonTitle = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPromotionMessageMetadata.prototype, "_promotionType", {
            get: $util.oneOfGetter($oneOfFields = ["promotionType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPromotionMessageMetadata.prototype, "_buttonTitle", {
            get: $util.oneOfGetter($oneOfFields = ["buttonTitle"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotPromotionMessageMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @static
         * @param {BotMetadata.BotPromotionMessageMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotPromotionMessageMetadata} BotPromotionMessageMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotPromotionMessageMetadata.$Shape): BotMetadata.BotPromotionMessageMetadata & BotMetadata.BotPromotionMessageMetadata.$Shape;
         *   (properties?: BotMetadata.BotPromotionMessageMetadata.$Properties): BotMetadata.BotPromotionMessageMetadata;
         * }}
         */
        BotPromotionMessageMetadata.create = function(properties) {
            return new BotPromotionMessageMetadata(properties);
        };

        /**
         * Encodes the specified BotPromotionMessageMetadata message. Does not implicitly {@link BotMetadata.BotPromotionMessageMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @static
         * @param {BotMetadata.BotPromotionMessageMetadata.$Properties} message BotPromotionMessageMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotPromotionMessageMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.promotionType != null && $Object.hasOwnProperty.call(message, "promotionType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.promotionType);
            if (message.buttonTitle != null && $Object.hasOwnProperty.call(message, "buttonTitle"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.buttonTitle);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotPromotionMessageMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotPromotionMessageMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @static
         * @param {BotMetadata.BotPromotionMessageMetadata.$Properties} message BotPromotionMessageMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotPromotionMessageMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotPromotionMessageMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotPromotionMessageMetadata & BotMetadata.BotPromotionMessageMetadata.$Shape} BotPromotionMessageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotPromotionMessageMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotPromotionMessageMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.promotionType = reader.int32();
                        message._promotionType = "promotionType";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.buttonTitle = reader.stringVerify();
                        message._buttonTitle = "buttonTitle";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotPromotionMessageMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotPromotionMessageMetadata & BotMetadata.BotPromotionMessageMetadata.$Shape} BotPromotionMessageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotPromotionMessageMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotPromotionMessageMetadata message.
         * @function verify
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotPromotionMessageMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.promotionType != null && $Object.hasOwnProperty.call(message, "promotionType")) {
                properties._promotionType = 1;
                if (typeof message.promotionType !== "number" || (message.promotionType | 0) !== message.promotionType)
                    return "promotionType: enum value expected";
            }
            if (message.buttonTitle != null && $Object.hasOwnProperty.call(message, "buttonTitle")) {
                properties._buttonTitle = 1;
                if (!$util.isString(message.buttonTitle))
                    return "buttonTitle: string expected";
            }
            return null;
        };

        /**
         * Creates a BotPromotionMessageMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotPromotionMessageMetadata} BotPromotionMessageMetadata
         */
        BotPromotionMessageMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotPromotionMessageMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotPromotionMessageMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotPromotionMessageMetadata();
            switch (object.promotionType) {
            case "UNKNOWN_TYPE":
            case 0:
                message.promotionType = 0;
                break;
            case "C50":
            case 1:
                message.promotionType = 1;
                break;
            case "SURVEY_PLATFORM":
            case 2:
                message.promotionType = 2;
                break;
            default:
                if (typeof object.promotionType === "number" && (object.promotionType | 0) === object.promotionType)
                    message.promotionType = object.promotionType;
            }
            if (object.buttonTitle != null)
                message.buttonTitle = $String(object.buttonTitle);
            return message;
        };

        /**
         * Creates a plain object from a BotPromotionMessageMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @static
         * @param {BotMetadata.BotPromotionMessageMetadata} message BotPromotionMessageMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotPromotionMessageMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.promotionType != null && $Object.hasOwnProperty.call(message, "promotionType"))
                object.promotionType = options.enums === $String ? $root.BotMetadata.BotPromotionMessageMetadata.BotPromotionType[message.promotionType] === $undefined ? message.promotionType : $root.BotMetadata.BotPromotionMessageMetadata.BotPromotionType[message.promotionType] : message.promotionType;
            if (message.buttonTitle != null && $Object.hasOwnProperty.call(message, "buttonTitle"))
                object.buttonTitle = message.buttonTitle;
            return object;
        };

        /**
         * Converts this BotPromotionMessageMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotPromotionMessageMetadata.prototype.toJSON = function() {
            return BotPromotionMessageMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotPromotionMessageMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotPromotionMessageMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotPromotionMessageMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotPromotionMessageMetadata";
        };

        /**
         * BotPromotionType enum.
         * @name BotMetadata.BotPromotionMessageMetadata.BotPromotionType
         * @enum {number}
         * @property {number} UNKNOWN_TYPE=0 UNKNOWN_TYPE value
         * @property {number} C50=1 C50 value
         * @property {number} SURVEY_PLATFORM=2 SURVEY_PLATFORM value
         */
        BotPromotionMessageMetadata.BotPromotionType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "C50"] = 1;
            values[valuesById[2] = "SURVEY_PLATFORM"] = 2;
            return values;
        })();

        return BotPromotionMessageMetadata;
    })();

    BotMetadata.BotSignatureVerificationUseCaseProof = (function() {

        /**
         * Properties of a BotSignatureVerificationUseCaseProof.
         * @typedef {Object} BotMetadata.BotSignatureVerificationUseCaseProof.$Properties
         * @property {number|null} [version] BotSignatureVerificationUseCaseProof version
         * @property {BotMetadata.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null} [useCase] BotSignatureVerificationUseCaseProof useCase
         * @property {Uint8Array|null} [signature] BotSignatureVerificationUseCaseProof signature
         * @property {Uint8Array|null} [certificateChain] BotSignatureVerificationUseCaseProof certificateChain
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotSignatureVerificationUseCaseProof.
         * @memberof BotMetadata
         * @interface IBotSignatureVerificationUseCaseProof
         * @augments BotMetadata.BotSignatureVerificationUseCaseProof.$Properties
         * @deprecated Use BotMetadata.BotSignatureVerificationUseCaseProof.$Properties instead.
         */

        /**
         * Shape of a BotSignatureVerificationUseCaseProof.
         * @typedef {BotMetadata.BotSignatureVerificationUseCaseProof.$Properties} BotMetadata.BotSignatureVerificationUseCaseProof.$Shape
         */

        /**
         * Constructs a new BotSignatureVerificationUseCaseProof.
         * @memberof BotMetadata
         * @classdesc Represents a BotSignatureVerificationUseCaseProof.
         * @constructor
         * @param {BotMetadata.BotSignatureVerificationUseCaseProof.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotSignatureVerificationUseCaseProof = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotSignatureVerificationUseCaseProof version.
         * @member {number|null|undefined} version
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @instance
         */
        BotSignatureVerificationUseCaseProof.prototype.version = null;

        /**
         * BotSignatureVerificationUseCaseProof useCase.
         * @member {BotMetadata.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null|undefined} useCase
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @instance
         */
        BotSignatureVerificationUseCaseProof.prototype.useCase = null;

        /**
         * BotSignatureVerificationUseCaseProof signature.
         * @member {Uint8Array|null|undefined} signature
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @instance
         */
        BotSignatureVerificationUseCaseProof.prototype.signature = null;

        /**
         * BotSignatureVerificationUseCaseProof certificateChain.
         * @member {Uint8Array|null|undefined} certificateChain
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @instance
         */
        BotSignatureVerificationUseCaseProof.prototype.certificateChain = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotSignatureVerificationUseCaseProof.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotSignatureVerificationUseCaseProof.prototype, "_useCase", {
            get: $util.oneOfGetter($oneOfFields = ["useCase"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotSignatureVerificationUseCaseProof.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotSignatureVerificationUseCaseProof.prototype, "_certificateChain", {
            get: $util.oneOfGetter($oneOfFields = ["certificateChain"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotSignatureVerificationUseCaseProof instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @static
         * @param {BotMetadata.BotSignatureVerificationUseCaseProof.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotSignatureVerificationUseCaseProof} BotSignatureVerificationUseCaseProof instance
         * @type {{
         *   (properties: BotMetadata.BotSignatureVerificationUseCaseProof.$Shape): BotMetadata.BotSignatureVerificationUseCaseProof & BotMetadata.BotSignatureVerificationUseCaseProof.$Shape;
         *   (properties?: BotMetadata.BotSignatureVerificationUseCaseProof.$Properties): BotMetadata.BotSignatureVerificationUseCaseProof;
         * }}
         */
        BotSignatureVerificationUseCaseProof.create = function(properties) {
            return new BotSignatureVerificationUseCaseProof(properties);
        };

        /**
         * Encodes the specified BotSignatureVerificationUseCaseProof message. Does not implicitly {@link BotMetadata.BotSignatureVerificationUseCaseProof.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @static
         * @param {BotMetadata.BotSignatureVerificationUseCaseProof.$Properties} message BotSignatureVerificationUseCaseProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSignatureVerificationUseCaseProof.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            if (message.useCase != null && $Object.hasOwnProperty.call(message, "useCase"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.useCase);
            if (message.signature != null && $Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signature);
            if (message.certificateChain != null && $Object.hasOwnProperty.call(message, "certificateChain"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.certificateChain);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotSignatureVerificationUseCaseProof message, length delimited. Does not implicitly {@link BotMetadata.BotSignatureVerificationUseCaseProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @static
         * @param {BotMetadata.BotSignatureVerificationUseCaseProof.$Properties} message BotSignatureVerificationUseCaseProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSignatureVerificationUseCaseProof.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotSignatureVerificationUseCaseProof message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotSignatureVerificationUseCaseProof & BotMetadata.BotSignatureVerificationUseCaseProof.$Shape} BotSignatureVerificationUseCaseProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSignatureVerificationUseCaseProof.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotSignatureVerificationUseCaseProof();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.version = reader.int32();
                        message._version = "version";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.useCase = reader.int32();
                        message._useCase = "useCase";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.signature = reader.bytes();
                        message._signature = "signature";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.certificateChain = reader.bytes();
                        message._certificateChain = "certificateChain";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotSignatureVerificationUseCaseProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotSignatureVerificationUseCaseProof & BotMetadata.BotSignatureVerificationUseCaseProof.$Shape} BotSignatureVerificationUseCaseProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSignatureVerificationUseCaseProof.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotSignatureVerificationUseCaseProof message.
         * @function verify
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotSignatureVerificationUseCaseProof.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.version != null && $Object.hasOwnProperty.call(message, "version")) {
                properties._version = 1;
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            }
            if (message.useCase != null && $Object.hasOwnProperty.call(message, "useCase")) {
                properties._useCase = 1;
                if (typeof message.useCase !== "number" || (message.useCase | 0) !== message.useCase)
                    return "useCase: enum value expected";
            }
            if (message.signature != null && $Object.hasOwnProperty.call(message, "signature")) {
                properties._signature = 1;
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            }
            if (message.certificateChain != null && $Object.hasOwnProperty.call(message, "certificateChain")) {
                properties._certificateChain = 1;
                if (!(message.certificateChain && typeof message.certificateChain.length === "number" || $util.isString(message.certificateChain)))
                    return "certificateChain: buffer expected";
            }
            return null;
        };

        /**
         * Creates a BotSignatureVerificationUseCaseProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotSignatureVerificationUseCaseProof} BotSignatureVerificationUseCaseProof
         */
        BotSignatureVerificationUseCaseProof.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotSignatureVerificationUseCaseProof)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotSignatureVerificationUseCaseProof: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotSignatureVerificationUseCaseProof();
            if (object.version != null)
                message.version = object.version | 0;
            switch (object.useCase) {
            case "WA_BOT_MSG":
            case 0:
                message.useCase = 0;
                break;
            default:
                if (typeof object.useCase === "number" && (object.useCase | 0) === object.useCase)
                    message.useCase = object.useCase;
            }
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            if (object.certificateChain != null)
                if (typeof object.certificateChain === "string")
                    $util.base64.decode(object.certificateChain, message.certificateChain = $util.newBuffer($util.base64.length(object.certificateChain)), 0);
                else if (object.certificateChain.length >= 0)
                    message.certificateChain = object.certificateChain;
            return message;
        };

        /**
         * Creates a plain object from a BotSignatureVerificationUseCaseProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @static
         * @param {BotMetadata.BotSignatureVerificationUseCaseProof} message BotSignatureVerificationUseCaseProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotSignatureVerificationUseCaseProof.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                object.version = message.version;
            if (message.useCase != null && $Object.hasOwnProperty.call(message, "useCase"))
                object.useCase = options.enums === $String ? $root.BotMetadata.BotSignatureVerificationUseCaseProof.BotSignatureUseCase[message.useCase] === $undefined ? message.useCase : $root.BotMetadata.BotSignatureVerificationUseCaseProof.BotSignatureUseCase[message.useCase] : message.useCase;
            if (message.signature != null && $Object.hasOwnProperty.call(message, "signature"))
                object.signature = options.bytes === $String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.signature) : message.signature;
            if (message.certificateChain != null && $Object.hasOwnProperty.call(message, "certificateChain"))
                object.certificateChain = options.bytes === $String ? $util.base64.encode(message.certificateChain, 0, message.certificateChain.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.certificateChain) : message.certificateChain;
            return object;
        };

        /**
         * Converts this BotSignatureVerificationUseCaseProof to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotSignatureVerificationUseCaseProof.prototype.toJSON = function() {
            return BotSignatureVerificationUseCaseProof.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotSignatureVerificationUseCaseProof
         * @function getTypeUrl
         * @memberof BotMetadata.BotSignatureVerificationUseCaseProof
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotSignatureVerificationUseCaseProof.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotSignatureVerificationUseCaseProof";
        };

        /**
         * BotSignatureUseCase enum.
         * @name BotMetadata.BotSignatureVerificationUseCaseProof.BotSignatureUseCase
         * @enum {number}
         * @property {number} WA_BOT_MSG=0 WA_BOT_MSG value
         */
        BotSignatureVerificationUseCaseProof.BotSignatureUseCase = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "WA_BOT_MSG"] = 0;
            return values;
        })();

        return BotSignatureVerificationUseCaseProof;
    })();

    BotMetadata.BotSignatureVerificationMetadata = (function() {

        /**
         * Properties of a BotSignatureVerificationMetadata.
         * @typedef {Object} BotMetadata.BotSignatureVerificationMetadata.$Properties
         * @property {Array.<BotMetadata.BotSignatureVerificationUseCaseProof.$Properties>|null} [proofs] BotSignatureVerificationMetadata proofs
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotSignatureVerificationMetadata.
         * @memberof BotMetadata
         * @interface IBotSignatureVerificationMetadata
         * @augments BotMetadata.BotSignatureVerificationMetadata.$Properties
         * @deprecated Use BotMetadata.BotSignatureVerificationMetadata.$Properties instead.
         */

        /**
         * Shape of a BotSignatureVerificationMetadata.
         * @typedef {BotMetadata.BotSignatureVerificationMetadata.$Properties} BotMetadata.BotSignatureVerificationMetadata.$Shape
         */

        /**
         * Constructs a new BotSignatureVerificationMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotSignatureVerificationMetadata.
         * @constructor
         * @param {BotMetadata.BotSignatureVerificationMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotSignatureVerificationMetadata = function (properties) {
            this.proofs = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotSignatureVerificationMetadata proofs.
         * @member {Array.<BotMetadata.BotSignatureVerificationUseCaseProof.$Properties>} proofs
         * @memberof BotMetadata.BotSignatureVerificationMetadata
         * @instance
         */
        BotSignatureVerificationMetadata.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new BotSignatureVerificationMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotSignatureVerificationMetadata
         * @static
         * @param {BotMetadata.BotSignatureVerificationMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotSignatureVerificationMetadata} BotSignatureVerificationMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotSignatureVerificationMetadata.$Shape): BotMetadata.BotSignatureVerificationMetadata & BotMetadata.BotSignatureVerificationMetadata.$Shape;
         *   (properties?: BotMetadata.BotSignatureVerificationMetadata.$Properties): BotMetadata.BotSignatureVerificationMetadata;
         * }}
         */
        BotSignatureVerificationMetadata.create = function(properties) {
            return new BotSignatureVerificationMetadata(properties);
        };

        /**
         * Encodes the specified BotSignatureVerificationMetadata message. Does not implicitly {@link BotMetadata.BotSignatureVerificationMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotSignatureVerificationMetadata
         * @static
         * @param {BotMetadata.BotSignatureVerificationMetadata.$Properties} message BotSignatureVerificationMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSignatureVerificationMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    $root.BotMetadata.BotSignatureVerificationUseCaseProof.encode(message.proofs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotSignatureVerificationMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotSignatureVerificationMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotSignatureVerificationMetadata
         * @static
         * @param {BotMetadata.BotSignatureVerificationMetadata.$Properties} message BotSignatureVerificationMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSignatureVerificationMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotSignatureVerificationMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotSignatureVerificationMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotSignatureVerificationMetadata & BotMetadata.BotSignatureVerificationMetadata.$Shape} BotSignatureVerificationMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSignatureVerificationMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotSignatureVerificationMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.proofs && message.proofs.length))
                            message.proofs = [];
                        message.proofs.push($root.BotMetadata.BotSignatureVerificationUseCaseProof.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotSignatureVerificationMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotSignatureVerificationMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotSignatureVerificationMetadata & BotMetadata.BotSignatureVerificationMetadata.$Shape} BotSignatureVerificationMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSignatureVerificationMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotSignatureVerificationMetadata message.
         * @function verify
         * @memberof BotMetadata.BotSignatureVerificationMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotSignatureVerificationMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.proofs != null && $Object.hasOwnProperty.call(message, "proofs")) {
                if (!$Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i) {
                    var error = $root.BotMetadata.BotSignatureVerificationUseCaseProof.verify(message.proofs[i], _depth + 1);
                    if (error)
                        return "proofs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BotSignatureVerificationMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotSignatureVerificationMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotSignatureVerificationMetadata} BotSignatureVerificationMetadata
         */
        BotSignatureVerificationMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotSignatureVerificationMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotSignatureVerificationMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotSignatureVerificationMetadata();
            if (object.proofs) {
                if (!$Array.isArray(object.proofs))
                    throw $TypeError(".BotMetadata.BotSignatureVerificationMetadata.proofs: array expected");
                message.proofs = $Array(object.proofs.length);
                for (var i = 0; i < object.proofs.length; ++i) {
                    if (!$util.isObject(object.proofs[i]))
                        throw $TypeError(".BotMetadata.BotSignatureVerificationMetadata.proofs: object expected");
                    message.proofs[i] = $root.BotMetadata.BotSignatureVerificationUseCaseProof.fromObject(object.proofs[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BotSignatureVerificationMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotSignatureVerificationMetadata
         * @static
         * @param {BotMetadata.BotSignatureVerificationMetadata} message BotSignatureVerificationMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotSignatureVerificationMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (message.proofs && message.proofs.length) {
                object.proofs = $Array(message.proofs.length);
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = $root.BotMetadata.BotSignatureVerificationUseCaseProof.toObject(message.proofs[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this BotSignatureVerificationMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotSignatureVerificationMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotSignatureVerificationMetadata.prototype.toJSON = function() {
            return BotSignatureVerificationMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotSignatureVerificationMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotSignatureVerificationMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotSignatureVerificationMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotSignatureVerificationMetadata";
        };

        return BotSignatureVerificationMetadata;
    })();

    BotMetadata.BotMemoryFact = (function() {

        /**
         * Properties of a BotMemoryFact.
         * @typedef {Object} BotMetadata.BotMemoryFact.$Properties
         * @property {string|null} [fact] BotMemoryFact fact
         * @property {string|null} [factId] BotMemoryFact factId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotMemoryFact.
         * @memberof BotMetadata
         * @interface IBotMemoryFact
         * @augments BotMetadata.BotMemoryFact.$Properties
         * @deprecated Use BotMetadata.BotMemoryFact.$Properties instead.
         */

        /**
         * Shape of a BotMemoryFact.
         * @typedef {BotMetadata.BotMemoryFact.$Properties} BotMetadata.BotMemoryFact.$Shape
         */

        /**
         * Constructs a new BotMemoryFact.
         * @memberof BotMetadata
         * @classdesc Represents a BotMemoryFact.
         * @constructor
         * @param {BotMetadata.BotMemoryFact.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotMemoryFact = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotMemoryFact fact.
         * @member {string|null|undefined} fact
         * @memberof BotMetadata.BotMemoryFact
         * @instance
         */
        BotMemoryFact.prototype.fact = null;

        /**
         * BotMemoryFact factId.
         * @member {string|null|undefined} factId
         * @memberof BotMetadata.BotMemoryFact
         * @instance
         */
        BotMemoryFact.prototype.factId = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMemoryFact.prototype, "_fact", {
            get: $util.oneOfGetter($oneOfFields = ["fact"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMemoryFact.prototype, "_factId", {
            get: $util.oneOfGetter($oneOfFields = ["factId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotMemoryFact instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotMemoryFact
         * @static
         * @param {BotMetadata.BotMemoryFact.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotMemoryFact} BotMemoryFact instance
         * @type {{
         *   (properties: BotMetadata.BotMemoryFact.$Shape): BotMetadata.BotMemoryFact & BotMetadata.BotMemoryFact.$Shape;
         *   (properties?: BotMetadata.BotMemoryFact.$Properties): BotMetadata.BotMemoryFact;
         * }}
         */
        BotMemoryFact.create = function(properties) {
            return new BotMemoryFact(properties);
        };

        /**
         * Encodes the specified BotMemoryFact message. Does not implicitly {@link BotMetadata.BotMemoryFact.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotMemoryFact
         * @static
         * @param {BotMetadata.BotMemoryFact.$Properties} message BotMemoryFact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMemoryFact.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.fact != null && $Object.hasOwnProperty.call(message, "fact"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fact);
            if (message.factId != null && $Object.hasOwnProperty.call(message, "factId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.factId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotMemoryFact message, length delimited. Does not implicitly {@link BotMetadata.BotMemoryFact.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotMemoryFact
         * @static
         * @param {BotMetadata.BotMemoryFact.$Properties} message BotMemoryFact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMemoryFact.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotMemoryFact message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotMemoryFact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotMemoryFact & BotMetadata.BotMemoryFact.$Shape} BotMemoryFact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMemoryFact.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotMemoryFact();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.fact = reader.stringVerify();
                        message._fact = "fact";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.factId = reader.stringVerify();
                        message._factId = "factId";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotMemoryFact message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotMemoryFact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMemoryFact & BotMetadata.BotMemoryFact.$Shape} BotMemoryFact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMemoryFact.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotMemoryFact message.
         * @function verify
         * @memberof BotMetadata.BotMemoryFact
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotMemoryFact.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.fact != null && $Object.hasOwnProperty.call(message, "fact")) {
                properties._fact = 1;
                if (!$util.isString(message.fact))
                    return "fact: string expected";
            }
            if (message.factId != null && $Object.hasOwnProperty.call(message, "factId")) {
                properties._factId = 1;
                if (!$util.isString(message.factId))
                    return "factId: string expected";
            }
            return null;
        };

        /**
         * Creates a BotMemoryFact message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotMemoryFact
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotMemoryFact} BotMemoryFact
         */
        BotMemoryFact.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotMemoryFact)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotMemoryFact: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotMemoryFact();
            if (object.fact != null)
                message.fact = $String(object.fact);
            if (object.factId != null)
                message.factId = $String(object.factId);
            return message;
        };

        /**
         * Creates a plain object from a BotMemoryFact message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotMemoryFact
         * @static
         * @param {BotMetadata.BotMemoryFact} message BotMemoryFact
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotMemoryFact.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.fact != null && $Object.hasOwnProperty.call(message, "fact"))
                object.fact = message.fact;
            if (message.factId != null && $Object.hasOwnProperty.call(message, "factId"))
                object.factId = message.factId;
            return object;
        };

        /**
         * Converts this BotMemoryFact to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotMemoryFact
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotMemoryFact.prototype.toJSON = function() {
            return BotMemoryFact.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotMemoryFact
         * @function getTypeUrl
         * @memberof BotMetadata.BotMemoryFact
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotMemoryFact.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotMemoryFact";
        };

        return BotMemoryFact;
    })();

    BotMetadata.BotMemoryMetadata = (function() {

        /**
         * Properties of a BotMemoryMetadata.
         * @typedef {Object} BotMetadata.BotMemoryMetadata.$Properties
         * @property {Array.<BotMetadata.BotMemoryFact.$Properties>|null} [addedFacts] BotMemoryMetadata addedFacts
         * @property {Array.<BotMetadata.BotMemoryFact.$Properties>|null} [removedFacts] BotMemoryMetadata removedFacts
         * @property {string|null} [disclaimer] BotMemoryMetadata disclaimer
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotMemoryMetadata.
         * @memberof BotMetadata
         * @interface IBotMemoryMetadata
         * @augments BotMetadata.BotMemoryMetadata.$Properties
         * @deprecated Use BotMetadata.BotMemoryMetadata.$Properties instead.
         */

        /**
         * Shape of a BotMemoryMetadata.
         * @typedef {BotMetadata.BotMemoryMetadata.$Properties} BotMetadata.BotMemoryMetadata.$Shape
         */

        /**
         * Constructs a new BotMemoryMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotMemoryMetadata.
         * @constructor
         * @param {BotMetadata.BotMemoryMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotMemoryMetadata = function (properties) {
            this.addedFacts = [];
            this.removedFacts = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotMemoryMetadata addedFacts.
         * @member {Array.<BotMetadata.BotMemoryFact.$Properties>} addedFacts
         * @memberof BotMetadata.BotMemoryMetadata
         * @instance
         */
        BotMemoryMetadata.prototype.addedFacts = $util.emptyArray;

        /**
         * BotMemoryMetadata removedFacts.
         * @member {Array.<BotMetadata.BotMemoryFact.$Properties>} removedFacts
         * @memberof BotMetadata.BotMemoryMetadata
         * @instance
         */
        BotMemoryMetadata.prototype.removedFacts = $util.emptyArray;

        /**
         * BotMemoryMetadata disclaimer.
         * @member {string|null|undefined} disclaimer
         * @memberof BotMetadata.BotMemoryMetadata
         * @instance
         */
        BotMemoryMetadata.prototype.disclaimer = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotMemoryMetadata.prototype, "_disclaimer", {
            get: $util.oneOfGetter($oneOfFields = ["disclaimer"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotMemoryMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotMemoryMetadata
         * @static
         * @param {BotMetadata.BotMemoryMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotMemoryMetadata} BotMemoryMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotMemoryMetadata.$Shape): BotMetadata.BotMemoryMetadata & BotMetadata.BotMemoryMetadata.$Shape;
         *   (properties?: BotMetadata.BotMemoryMetadata.$Properties): BotMetadata.BotMemoryMetadata;
         * }}
         */
        BotMemoryMetadata.create = function(properties) {
            return new BotMemoryMetadata(properties);
        };

        /**
         * Encodes the specified BotMemoryMetadata message. Does not implicitly {@link BotMetadata.BotMemoryMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotMemoryMetadata
         * @static
         * @param {BotMetadata.BotMemoryMetadata.$Properties} message BotMemoryMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMemoryMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.addedFacts != null && message.addedFacts.length)
                for (var i = 0; i < message.addedFacts.length; ++i)
                    $root.BotMetadata.BotMemoryFact.encode(message.addedFacts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.removedFacts != null && message.removedFacts.length)
                for (var i = 0; i < message.removedFacts.length; ++i)
                    $root.BotMetadata.BotMemoryFact.encode(message.removedFacts[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.disclaimer != null && $Object.hasOwnProperty.call(message, "disclaimer"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.disclaimer);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotMemoryMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotMemoryMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotMemoryMetadata
         * @static
         * @param {BotMetadata.BotMemoryMetadata.$Properties} message BotMemoryMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotMemoryMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotMemoryMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotMemoryMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotMemoryMetadata & BotMetadata.BotMemoryMetadata.$Shape} BotMemoryMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMemoryMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotMemoryMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.addedFacts && message.addedFacts.length))
                            message.addedFacts = [];
                        message.addedFacts.push($root.BotMetadata.BotMemoryFact.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.removedFacts && message.removedFacts.length))
                            message.removedFacts = [];
                        message.removedFacts.push($root.BotMetadata.BotMemoryFact.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.disclaimer = reader.stringVerify();
                        message._disclaimer = "disclaimer";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotMemoryMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotMemoryMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotMemoryMetadata & BotMetadata.BotMemoryMetadata.$Shape} BotMemoryMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotMemoryMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotMemoryMetadata message.
         * @function verify
         * @memberof BotMetadata.BotMemoryMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotMemoryMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.addedFacts != null && $Object.hasOwnProperty.call(message, "addedFacts")) {
                if (!$Array.isArray(message.addedFacts))
                    return "addedFacts: array expected";
                for (var i = 0; i < message.addedFacts.length; ++i) {
                    var error = $root.BotMetadata.BotMemoryFact.verify(message.addedFacts[i], _depth + 1);
                    if (error)
                        return "addedFacts." + error;
                }
            }
            if (message.removedFacts != null && $Object.hasOwnProperty.call(message, "removedFacts")) {
                if (!$Array.isArray(message.removedFacts))
                    return "removedFacts: array expected";
                for (var i = 0; i < message.removedFacts.length; ++i) {
                    var error = $root.BotMetadata.BotMemoryFact.verify(message.removedFacts[i], _depth + 1);
                    if (error)
                        return "removedFacts." + error;
                }
            }
            if (message.disclaimer != null && $Object.hasOwnProperty.call(message, "disclaimer")) {
                properties._disclaimer = 1;
                if (!$util.isString(message.disclaimer))
                    return "disclaimer: string expected";
            }
            return null;
        };

        /**
         * Creates a BotMemoryMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotMemoryMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotMemoryMetadata} BotMemoryMetadata
         */
        BotMemoryMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotMemoryMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotMemoryMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotMemoryMetadata();
            if (object.addedFacts) {
                if (!$Array.isArray(object.addedFacts))
                    throw $TypeError(".BotMetadata.BotMemoryMetadata.addedFacts: array expected");
                message.addedFacts = $Array(object.addedFacts.length);
                for (var i = 0; i < object.addedFacts.length; ++i) {
                    if (!$util.isObject(object.addedFacts[i]))
                        throw $TypeError(".BotMetadata.BotMemoryMetadata.addedFacts: object expected");
                    message.addedFacts[i] = $root.BotMetadata.BotMemoryFact.fromObject(object.addedFacts[i], _depth + 1);
                }
            }
            if (object.removedFacts) {
                if (!$Array.isArray(object.removedFacts))
                    throw $TypeError(".BotMetadata.BotMemoryMetadata.removedFacts: array expected");
                message.removedFacts = $Array(object.removedFacts.length);
                for (var i = 0; i < object.removedFacts.length; ++i) {
                    if (!$util.isObject(object.removedFacts[i]))
                        throw $TypeError(".BotMetadata.BotMemoryMetadata.removedFacts: object expected");
                    message.removedFacts[i] = $root.BotMetadata.BotMemoryFact.fromObject(object.removedFacts[i], _depth + 1);
                }
            }
            if (object.disclaimer != null)
                message.disclaimer = $String(object.disclaimer);
            return message;
        };

        /**
         * Creates a plain object from a BotMemoryMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotMemoryMetadata
         * @static
         * @param {BotMetadata.BotMemoryMetadata} message BotMemoryMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotMemoryMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults) {
                object.addedFacts = [];
                object.removedFacts = [];
            }
            if (message.addedFacts && message.addedFacts.length) {
                object.addedFacts = $Array(message.addedFacts.length);
                for (var j = 0; j < message.addedFacts.length; ++j)
                    object.addedFacts[j] = $root.BotMetadata.BotMemoryFact.toObject(message.addedFacts[j], options, _depth + 1);
            }
            if (message.removedFacts && message.removedFacts.length) {
                object.removedFacts = $Array(message.removedFacts.length);
                for (var j = 0; j < message.removedFacts.length; ++j)
                    object.removedFacts[j] = $root.BotMetadata.BotMemoryFact.toObject(message.removedFacts[j], options, _depth + 1);
            }
            if (message.disclaimer != null && $Object.hasOwnProperty.call(message, "disclaimer"))
                object.disclaimer = message.disclaimer;
            return object;
        };

        /**
         * Converts this BotMemoryMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotMemoryMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotMemoryMetadata.prototype.toJSON = function() {
            return BotMemoryMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotMemoryMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotMemoryMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotMemoryMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotMemoryMetadata";
        };

        return BotMemoryMetadata;
    })();

    BotMetadata.BotLinkedAccount = (function() {

        /**
         * Properties of a BotLinkedAccount.
         * @typedef {Object} BotMetadata.BotLinkedAccount.$Properties
         * @property {BotMetadata.BotLinkedAccount.BotLinkedAccountType|null} [type] BotLinkedAccount type
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotLinkedAccount.
         * @memberof BotMetadata
         * @interface IBotLinkedAccount
         * @augments BotMetadata.BotLinkedAccount.$Properties
         * @deprecated Use BotMetadata.BotLinkedAccount.$Properties instead.
         */

        /**
         * Shape of a BotLinkedAccount.
         * @typedef {BotMetadata.BotLinkedAccount.$Properties} BotMetadata.BotLinkedAccount.$Shape
         */

        /**
         * Constructs a new BotLinkedAccount.
         * @memberof BotMetadata
         * @classdesc Represents a BotLinkedAccount.
         * @constructor
         * @param {BotMetadata.BotLinkedAccount.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotLinkedAccount = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotLinkedAccount type.
         * @member {BotMetadata.BotLinkedAccount.BotLinkedAccountType|null|undefined} type
         * @memberof BotMetadata.BotLinkedAccount
         * @instance
         */
        BotLinkedAccount.prototype.type = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotLinkedAccount.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotLinkedAccount instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotLinkedAccount
         * @static
         * @param {BotMetadata.BotLinkedAccount.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotLinkedAccount} BotLinkedAccount instance
         * @type {{
         *   (properties: BotMetadata.BotLinkedAccount.$Shape): BotMetadata.BotLinkedAccount & BotMetadata.BotLinkedAccount.$Shape;
         *   (properties?: BotMetadata.BotLinkedAccount.$Properties): BotMetadata.BotLinkedAccount;
         * }}
         */
        BotLinkedAccount.create = function(properties) {
            return new BotLinkedAccount(properties);
        };

        /**
         * Encodes the specified BotLinkedAccount message. Does not implicitly {@link BotMetadata.BotLinkedAccount.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotLinkedAccount
         * @static
         * @param {BotMetadata.BotLinkedAccount.$Properties} message BotLinkedAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotLinkedAccount.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotLinkedAccount message, length delimited. Does not implicitly {@link BotMetadata.BotLinkedAccount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotLinkedAccount
         * @static
         * @param {BotMetadata.BotLinkedAccount.$Properties} message BotLinkedAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotLinkedAccount.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotLinkedAccount message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotLinkedAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotLinkedAccount & BotMetadata.BotLinkedAccount.$Shape} BotLinkedAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotLinkedAccount.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotLinkedAccount();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.type = reader.int32();
                        message._type = "type";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotLinkedAccount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotLinkedAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotLinkedAccount & BotMetadata.BotLinkedAccount.$Shape} BotLinkedAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotLinkedAccount.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotLinkedAccount message.
         * @function verify
         * @memberof BotMetadata.BotLinkedAccount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotLinkedAccount.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.type != null && $Object.hasOwnProperty.call(message, "type")) {
                properties._type = 1;
                if (typeof message.type !== "number" || (message.type | 0) !== message.type)
                    return "type: enum value expected";
            }
            return null;
        };

        /**
         * Creates a BotLinkedAccount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotLinkedAccount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotLinkedAccount} BotLinkedAccount
         */
        BotLinkedAccount.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotLinkedAccount)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotLinkedAccount: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotLinkedAccount();
            switch (object.type) {
            case "BOT_LINKED_ACCOUNT_TYPE_1P":
            case 0:
                message.type = 0;
                break;
            default:
                if (typeof object.type === "number" && (object.type | 0) === object.type)
                    message.type = object.type;
            }
            return message;
        };

        /**
         * Creates a plain object from a BotLinkedAccount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotLinkedAccount
         * @static
         * @param {BotMetadata.BotLinkedAccount} message BotLinkedAccount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotLinkedAccount.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                object.type = options.enums === $String ? $root.BotMetadata.BotLinkedAccount.BotLinkedAccountType[message.type] === $undefined ? message.type : $root.BotMetadata.BotLinkedAccount.BotLinkedAccountType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this BotLinkedAccount to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotLinkedAccount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotLinkedAccount.prototype.toJSON = function() {
            return BotLinkedAccount.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotLinkedAccount
         * @function getTypeUrl
         * @memberof BotMetadata.BotLinkedAccount
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotLinkedAccount.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotLinkedAccount";
        };

        /**
         * BotLinkedAccountType enum.
         * @name BotMetadata.BotLinkedAccount.BotLinkedAccountType
         * @enum {number}
         * @property {number} BOT_LINKED_ACCOUNT_TYPE_1P=0 BOT_LINKED_ACCOUNT_TYPE_1P value
         */
        BotLinkedAccount.BotLinkedAccountType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "BOT_LINKED_ACCOUNT_TYPE_1P"] = 0;
            return values;
        })();

        return BotLinkedAccount;
    })();

    BotMetadata.BotLinkedAccountsMetadata = (function() {

        /**
         * Properties of a BotLinkedAccountsMetadata.
         * @typedef {Object} BotMetadata.BotLinkedAccountsMetadata.$Properties
         * @property {Array.<BotMetadata.BotLinkedAccount.$Properties>|null} [accounts] BotLinkedAccountsMetadata accounts
         * @property {Uint8Array|null} [acAuthTokens] BotLinkedAccountsMetadata acAuthTokens
         * @property {number|null} [acErrorCode] BotLinkedAccountsMetadata acErrorCode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotLinkedAccountsMetadata.
         * @memberof BotMetadata
         * @interface IBotLinkedAccountsMetadata
         * @augments BotMetadata.BotLinkedAccountsMetadata.$Properties
         * @deprecated Use BotMetadata.BotLinkedAccountsMetadata.$Properties instead.
         */

        /**
         * Shape of a BotLinkedAccountsMetadata.
         * @typedef {BotMetadata.BotLinkedAccountsMetadata.$Properties} BotMetadata.BotLinkedAccountsMetadata.$Shape
         */

        /**
         * Constructs a new BotLinkedAccountsMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotLinkedAccountsMetadata.
         * @constructor
         * @param {BotMetadata.BotLinkedAccountsMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotLinkedAccountsMetadata = function (properties) {
            this.accounts = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotLinkedAccountsMetadata accounts.
         * @member {Array.<BotMetadata.BotLinkedAccount.$Properties>} accounts
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @instance
         */
        BotLinkedAccountsMetadata.prototype.accounts = $util.emptyArray;

        /**
         * BotLinkedAccountsMetadata acAuthTokens.
         * @member {Uint8Array|null|undefined} acAuthTokens
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @instance
         */
        BotLinkedAccountsMetadata.prototype.acAuthTokens = null;

        /**
         * BotLinkedAccountsMetadata acErrorCode.
         * @member {number|null|undefined} acErrorCode
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @instance
         */
        BotLinkedAccountsMetadata.prototype.acErrorCode = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotLinkedAccountsMetadata.prototype, "_acAuthTokens", {
            get: $util.oneOfGetter($oneOfFields = ["acAuthTokens"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotLinkedAccountsMetadata.prototype, "_acErrorCode", {
            get: $util.oneOfGetter($oneOfFields = ["acErrorCode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotLinkedAccountsMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @static
         * @param {BotMetadata.BotLinkedAccountsMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotLinkedAccountsMetadata} BotLinkedAccountsMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotLinkedAccountsMetadata.$Shape): BotMetadata.BotLinkedAccountsMetadata & BotMetadata.BotLinkedAccountsMetadata.$Shape;
         *   (properties?: BotMetadata.BotLinkedAccountsMetadata.$Properties): BotMetadata.BotLinkedAccountsMetadata;
         * }}
         */
        BotLinkedAccountsMetadata.create = function(properties) {
            return new BotLinkedAccountsMetadata(properties);
        };

        /**
         * Encodes the specified BotLinkedAccountsMetadata message. Does not implicitly {@link BotMetadata.BotLinkedAccountsMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @static
         * @param {BotMetadata.BotLinkedAccountsMetadata.$Properties} message BotLinkedAccountsMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotLinkedAccountsMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.accounts != null && message.accounts.length)
                for (var i = 0; i < message.accounts.length; ++i)
                    $root.BotMetadata.BotLinkedAccount.encode(message.accounts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.acAuthTokens != null && $Object.hasOwnProperty.call(message, "acAuthTokens"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.acAuthTokens);
            if (message.acErrorCode != null && $Object.hasOwnProperty.call(message, "acErrorCode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.acErrorCode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotLinkedAccountsMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotLinkedAccountsMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @static
         * @param {BotMetadata.BotLinkedAccountsMetadata.$Properties} message BotLinkedAccountsMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotLinkedAccountsMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotLinkedAccountsMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotLinkedAccountsMetadata & BotMetadata.BotLinkedAccountsMetadata.$Shape} BotLinkedAccountsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotLinkedAccountsMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotLinkedAccountsMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.accounts && message.accounts.length))
                            message.accounts = [];
                        message.accounts.push($root.BotMetadata.BotLinkedAccount.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.acAuthTokens = reader.bytes();
                        message._acAuthTokens = "acAuthTokens";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.acErrorCode = reader.int32();
                        message._acErrorCode = "acErrorCode";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotLinkedAccountsMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotLinkedAccountsMetadata & BotMetadata.BotLinkedAccountsMetadata.$Shape} BotLinkedAccountsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotLinkedAccountsMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotLinkedAccountsMetadata message.
         * @function verify
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotLinkedAccountsMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.accounts != null && $Object.hasOwnProperty.call(message, "accounts")) {
                if (!$Array.isArray(message.accounts))
                    return "accounts: array expected";
                for (var i = 0; i < message.accounts.length; ++i) {
                    var error = $root.BotMetadata.BotLinkedAccount.verify(message.accounts[i], _depth + 1);
                    if (error)
                        return "accounts." + error;
                }
            }
            if (message.acAuthTokens != null && $Object.hasOwnProperty.call(message, "acAuthTokens")) {
                properties._acAuthTokens = 1;
                if (!(message.acAuthTokens && typeof message.acAuthTokens.length === "number" || $util.isString(message.acAuthTokens)))
                    return "acAuthTokens: buffer expected";
            }
            if (message.acErrorCode != null && $Object.hasOwnProperty.call(message, "acErrorCode")) {
                properties._acErrorCode = 1;
                if (!$util.isInteger(message.acErrorCode))
                    return "acErrorCode: integer expected";
            }
            return null;
        };

        /**
         * Creates a BotLinkedAccountsMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotLinkedAccountsMetadata} BotLinkedAccountsMetadata
         */
        BotLinkedAccountsMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotLinkedAccountsMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotLinkedAccountsMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotLinkedAccountsMetadata();
            if (object.accounts) {
                if (!$Array.isArray(object.accounts))
                    throw $TypeError(".BotMetadata.BotLinkedAccountsMetadata.accounts: array expected");
                message.accounts = $Array(object.accounts.length);
                for (var i = 0; i < object.accounts.length; ++i) {
                    if (!$util.isObject(object.accounts[i]))
                        throw $TypeError(".BotMetadata.BotLinkedAccountsMetadata.accounts: object expected");
                    message.accounts[i] = $root.BotMetadata.BotLinkedAccount.fromObject(object.accounts[i], _depth + 1);
                }
            }
            if (object.acAuthTokens != null)
                if (typeof object.acAuthTokens === "string")
                    $util.base64.decode(object.acAuthTokens, message.acAuthTokens = $util.newBuffer($util.base64.length(object.acAuthTokens)), 0);
                else if (object.acAuthTokens.length >= 0)
                    message.acAuthTokens = object.acAuthTokens;
            if (object.acErrorCode != null)
                message.acErrorCode = object.acErrorCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a BotLinkedAccountsMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @static
         * @param {BotMetadata.BotLinkedAccountsMetadata} message BotLinkedAccountsMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotLinkedAccountsMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.accounts = [];
            if (message.accounts && message.accounts.length) {
                object.accounts = $Array(message.accounts.length);
                for (var j = 0; j < message.accounts.length; ++j)
                    object.accounts[j] = $root.BotMetadata.BotLinkedAccount.toObject(message.accounts[j], options, _depth + 1);
            }
            if (message.acAuthTokens != null && $Object.hasOwnProperty.call(message, "acAuthTokens"))
                object.acAuthTokens = options.bytes === $String ? $util.base64.encode(message.acAuthTokens, 0, message.acAuthTokens.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.acAuthTokens) : message.acAuthTokens;
            if (message.acErrorCode != null && $Object.hasOwnProperty.call(message, "acErrorCode"))
                object.acErrorCode = message.acErrorCode;
            return object;
        };

        /**
         * Converts this BotLinkedAccountsMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotLinkedAccountsMetadata.prototype.toJSON = function() {
            return BotLinkedAccountsMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotLinkedAccountsMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotLinkedAccountsMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotLinkedAccountsMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotLinkedAccountsMetadata";
        };

        return BotLinkedAccountsMetadata;
    })();

    BotMetadata.BotPromptSuggestion = (function() {

        /**
         * Properties of a BotPromptSuggestion.
         * @typedef {Object} BotMetadata.BotPromptSuggestion.$Properties
         * @property {string|null} [prompt] BotPromptSuggestion prompt
         * @property {string|null} [promptId] BotPromptSuggestion promptId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotPromptSuggestion.
         * @memberof BotMetadata
         * @interface IBotPromptSuggestion
         * @augments BotMetadata.BotPromptSuggestion.$Properties
         * @deprecated Use BotMetadata.BotPromptSuggestion.$Properties instead.
         */

        /**
         * Shape of a BotPromptSuggestion.
         * @typedef {BotMetadata.BotPromptSuggestion.$Properties} BotMetadata.BotPromptSuggestion.$Shape
         */

        /**
         * Constructs a new BotPromptSuggestion.
         * @memberof BotMetadata
         * @classdesc Represents a BotPromptSuggestion.
         * @constructor
         * @param {BotMetadata.BotPromptSuggestion.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotPromptSuggestion = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotPromptSuggestion prompt.
         * @member {string|null|undefined} prompt
         * @memberof BotMetadata.BotPromptSuggestion
         * @instance
         */
        BotPromptSuggestion.prototype.prompt = null;

        /**
         * BotPromptSuggestion promptId.
         * @member {string|null|undefined} promptId
         * @memberof BotMetadata.BotPromptSuggestion
         * @instance
         */
        BotPromptSuggestion.prototype.promptId = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPromptSuggestion.prototype, "_prompt", {
            get: $util.oneOfGetter($oneOfFields = ["prompt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPromptSuggestion.prototype, "_promptId", {
            get: $util.oneOfGetter($oneOfFields = ["promptId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotPromptSuggestion instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotPromptSuggestion
         * @static
         * @param {BotMetadata.BotPromptSuggestion.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotPromptSuggestion} BotPromptSuggestion instance
         * @type {{
         *   (properties: BotMetadata.BotPromptSuggestion.$Shape): BotMetadata.BotPromptSuggestion & BotMetadata.BotPromptSuggestion.$Shape;
         *   (properties?: BotMetadata.BotPromptSuggestion.$Properties): BotMetadata.BotPromptSuggestion;
         * }}
         */
        BotPromptSuggestion.create = function(properties) {
            return new BotPromptSuggestion(properties);
        };

        /**
         * Encodes the specified BotPromptSuggestion message. Does not implicitly {@link BotMetadata.BotPromptSuggestion.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotPromptSuggestion
         * @static
         * @param {BotMetadata.BotPromptSuggestion.$Properties} message BotPromptSuggestion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotPromptSuggestion.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.prompt != null && $Object.hasOwnProperty.call(message, "prompt"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.prompt);
            if (message.promptId != null && $Object.hasOwnProperty.call(message, "promptId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.promptId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotPromptSuggestion message, length delimited. Does not implicitly {@link BotMetadata.BotPromptSuggestion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotPromptSuggestion
         * @static
         * @param {BotMetadata.BotPromptSuggestion.$Properties} message BotPromptSuggestion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotPromptSuggestion.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotPromptSuggestion message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotPromptSuggestion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotPromptSuggestion & BotMetadata.BotPromptSuggestion.$Shape} BotPromptSuggestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotPromptSuggestion.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotPromptSuggestion();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.prompt = reader.stringVerify();
                        message._prompt = "prompt";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.promptId = reader.stringVerify();
                        message._promptId = "promptId";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotPromptSuggestion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotPromptSuggestion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotPromptSuggestion & BotMetadata.BotPromptSuggestion.$Shape} BotPromptSuggestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotPromptSuggestion.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotPromptSuggestion message.
         * @function verify
         * @memberof BotMetadata.BotPromptSuggestion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotPromptSuggestion.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.prompt != null && $Object.hasOwnProperty.call(message, "prompt")) {
                properties._prompt = 1;
                if (!$util.isString(message.prompt))
                    return "prompt: string expected";
            }
            if (message.promptId != null && $Object.hasOwnProperty.call(message, "promptId")) {
                properties._promptId = 1;
                if (!$util.isString(message.promptId))
                    return "promptId: string expected";
            }
            return null;
        };

        /**
         * Creates a BotPromptSuggestion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotPromptSuggestion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotPromptSuggestion} BotPromptSuggestion
         */
        BotPromptSuggestion.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotPromptSuggestion)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotPromptSuggestion: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotPromptSuggestion();
            if (object.prompt != null)
                message.prompt = $String(object.prompt);
            if (object.promptId != null)
                message.promptId = $String(object.promptId);
            return message;
        };

        /**
         * Creates a plain object from a BotPromptSuggestion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotPromptSuggestion
         * @static
         * @param {BotMetadata.BotPromptSuggestion} message BotPromptSuggestion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotPromptSuggestion.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.prompt != null && $Object.hasOwnProperty.call(message, "prompt"))
                object.prompt = message.prompt;
            if (message.promptId != null && $Object.hasOwnProperty.call(message, "promptId"))
                object.promptId = message.promptId;
            return object;
        };

        /**
         * Converts this BotPromptSuggestion to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotPromptSuggestion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotPromptSuggestion.prototype.toJSON = function() {
            return BotPromptSuggestion.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotPromptSuggestion
         * @function getTypeUrl
         * @memberof BotMetadata.BotPromptSuggestion
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotPromptSuggestion.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotPromptSuggestion";
        };

        return BotPromptSuggestion;
    })();

    BotMetadata.BotPromptSuggestions = (function() {

        /**
         * Properties of a BotPromptSuggestions.
         * @typedef {Object} BotMetadata.BotPromptSuggestions.$Properties
         * @property {Array.<BotMetadata.BotPromptSuggestion.$Properties>|null} [suggestions] BotPromptSuggestions suggestions
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotPromptSuggestions.
         * @memberof BotMetadata
         * @interface IBotPromptSuggestions
         * @augments BotMetadata.BotPromptSuggestions.$Properties
         * @deprecated Use BotMetadata.BotPromptSuggestions.$Properties instead.
         */

        /**
         * Shape of a BotPromptSuggestions.
         * @typedef {BotMetadata.BotPromptSuggestions.$Properties} BotMetadata.BotPromptSuggestions.$Shape
         */

        /**
         * Constructs a new BotPromptSuggestions.
         * @memberof BotMetadata
         * @classdesc Represents a BotPromptSuggestions.
         * @constructor
         * @param {BotMetadata.BotPromptSuggestions.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotPromptSuggestions = function (properties) {
            this.suggestions = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotPromptSuggestions suggestions.
         * @member {Array.<BotMetadata.BotPromptSuggestion.$Properties>} suggestions
         * @memberof BotMetadata.BotPromptSuggestions
         * @instance
         */
        BotPromptSuggestions.prototype.suggestions = $util.emptyArray;

        /**
         * Creates a new BotPromptSuggestions instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotPromptSuggestions
         * @static
         * @param {BotMetadata.BotPromptSuggestions.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotPromptSuggestions} BotPromptSuggestions instance
         * @type {{
         *   (properties: BotMetadata.BotPromptSuggestions.$Shape): BotMetadata.BotPromptSuggestions & BotMetadata.BotPromptSuggestions.$Shape;
         *   (properties?: BotMetadata.BotPromptSuggestions.$Properties): BotMetadata.BotPromptSuggestions;
         * }}
         */
        BotPromptSuggestions.create = function(properties) {
            return new BotPromptSuggestions(properties);
        };

        /**
         * Encodes the specified BotPromptSuggestions message. Does not implicitly {@link BotMetadata.BotPromptSuggestions.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotPromptSuggestions
         * @static
         * @param {BotMetadata.BotPromptSuggestions.$Properties} message BotPromptSuggestions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotPromptSuggestions.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.suggestions != null && message.suggestions.length)
                for (var i = 0; i < message.suggestions.length; ++i)
                    $root.BotMetadata.BotPromptSuggestion.encode(message.suggestions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotPromptSuggestions message, length delimited. Does not implicitly {@link BotMetadata.BotPromptSuggestions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotPromptSuggestions
         * @static
         * @param {BotMetadata.BotPromptSuggestions.$Properties} message BotPromptSuggestions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotPromptSuggestions.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotPromptSuggestions message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotPromptSuggestions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotPromptSuggestions & BotMetadata.BotPromptSuggestions.$Shape} BotPromptSuggestions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotPromptSuggestions.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotPromptSuggestions();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.suggestions && message.suggestions.length))
                            message.suggestions = [];
                        message.suggestions.push($root.BotMetadata.BotPromptSuggestion.decode(reader, reader.size(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotPromptSuggestions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotPromptSuggestions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotPromptSuggestions & BotMetadata.BotPromptSuggestions.$Shape} BotPromptSuggestions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotPromptSuggestions.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotPromptSuggestions message.
         * @function verify
         * @memberof BotMetadata.BotPromptSuggestions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotPromptSuggestions.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.suggestions != null && $Object.hasOwnProperty.call(message, "suggestions")) {
                if (!$Array.isArray(message.suggestions))
                    return "suggestions: array expected";
                for (var i = 0; i < message.suggestions.length; ++i) {
                    var error = $root.BotMetadata.BotPromptSuggestion.verify(message.suggestions[i], _depth + 1);
                    if (error)
                        return "suggestions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BotPromptSuggestions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotPromptSuggestions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotPromptSuggestions} BotPromptSuggestions
         */
        BotPromptSuggestions.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotPromptSuggestions)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotPromptSuggestions: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotPromptSuggestions();
            if (object.suggestions) {
                if (!$Array.isArray(object.suggestions))
                    throw $TypeError(".BotMetadata.BotPromptSuggestions.suggestions: array expected");
                message.suggestions = $Array(object.suggestions.length);
                for (var i = 0; i < object.suggestions.length; ++i) {
                    if (!$util.isObject(object.suggestions[i]))
                        throw $TypeError(".BotMetadata.BotPromptSuggestions.suggestions: object expected");
                    message.suggestions[i] = $root.BotMetadata.BotPromptSuggestion.fromObject(object.suggestions[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BotPromptSuggestions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotPromptSuggestions
         * @static
         * @param {BotMetadata.BotPromptSuggestions} message BotPromptSuggestions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotPromptSuggestions.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.suggestions = [];
            if (message.suggestions && message.suggestions.length) {
                object.suggestions = $Array(message.suggestions.length);
                for (var j = 0; j < message.suggestions.length; ++j)
                    object.suggestions[j] = $root.BotMetadata.BotPromptSuggestion.toObject(message.suggestions[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this BotPromptSuggestions to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotPromptSuggestions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotPromptSuggestions.prototype.toJSON = function() {
            return BotPromptSuggestions.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotPromptSuggestions
         * @function getTypeUrl
         * @memberof BotMetadata.BotPromptSuggestions
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotPromptSuggestions.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotPromptSuggestions";
        };

        return BotPromptSuggestions;
    })();

    BotMetadata.BotSuggestedPromptMetadata = (function() {

        /**
         * Properties of a BotSuggestedPromptMetadata.
         * @typedef {Object} BotMetadata.BotSuggestedPromptMetadata.$Properties
         * @property {Array.<string>|null} [suggestedPrompts] BotSuggestedPromptMetadata suggestedPrompts
         * @property {number|null} [selectedPromptIndex] BotSuggestedPromptMetadata selectedPromptIndex
         * @property {BotMetadata.BotPromptSuggestions.$Properties|null} [promptSuggestions] BotSuggestedPromptMetadata promptSuggestions
         * @property {string|null} [selectedPromptId] BotSuggestedPromptMetadata selectedPromptId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotSuggestedPromptMetadata.
         * @memberof BotMetadata
         * @interface IBotSuggestedPromptMetadata
         * @augments BotMetadata.BotSuggestedPromptMetadata.$Properties
         * @deprecated Use BotMetadata.BotSuggestedPromptMetadata.$Properties instead.
         */

        /**
         * Shape of a BotSuggestedPromptMetadata.
         * @typedef {BotMetadata.BotSuggestedPromptMetadata.$Properties} BotMetadata.BotSuggestedPromptMetadata.$Shape
         */

        /**
         * Constructs a new BotSuggestedPromptMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotSuggestedPromptMetadata.
         * @constructor
         * @param {BotMetadata.BotSuggestedPromptMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotSuggestedPromptMetadata = function (properties) {
            this.suggestedPrompts = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotSuggestedPromptMetadata suggestedPrompts.
         * @member {Array.<string>} suggestedPrompts
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @instance
         */
        BotSuggestedPromptMetadata.prototype.suggestedPrompts = $util.emptyArray;

        /**
         * BotSuggestedPromptMetadata selectedPromptIndex.
         * @member {number|null|undefined} selectedPromptIndex
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @instance
         */
        BotSuggestedPromptMetadata.prototype.selectedPromptIndex = null;

        /**
         * BotSuggestedPromptMetadata promptSuggestions.
         * @member {BotMetadata.BotPromptSuggestions.$Properties|null|undefined} promptSuggestions
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @instance
         */
        BotSuggestedPromptMetadata.prototype.promptSuggestions = null;

        /**
         * BotSuggestedPromptMetadata selectedPromptId.
         * @member {string|null|undefined} selectedPromptId
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @instance
         */
        BotSuggestedPromptMetadata.prototype.selectedPromptId = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotSuggestedPromptMetadata.prototype, "_selectedPromptIndex", {
            get: $util.oneOfGetter($oneOfFields = ["selectedPromptIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotSuggestedPromptMetadata.prototype, "_promptSuggestions", {
            get: $util.oneOfGetter($oneOfFields = ["promptSuggestions"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotSuggestedPromptMetadata.prototype, "_selectedPromptId", {
            get: $util.oneOfGetter($oneOfFields = ["selectedPromptId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotSuggestedPromptMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @static
         * @param {BotMetadata.BotSuggestedPromptMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotSuggestedPromptMetadata} BotSuggestedPromptMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotSuggestedPromptMetadata.$Shape): BotMetadata.BotSuggestedPromptMetadata & BotMetadata.BotSuggestedPromptMetadata.$Shape;
         *   (properties?: BotMetadata.BotSuggestedPromptMetadata.$Properties): BotMetadata.BotSuggestedPromptMetadata;
         * }}
         */
        BotSuggestedPromptMetadata.create = function(properties) {
            return new BotSuggestedPromptMetadata(properties);
        };

        /**
         * Encodes the specified BotSuggestedPromptMetadata message. Does not implicitly {@link BotMetadata.BotSuggestedPromptMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @static
         * @param {BotMetadata.BotSuggestedPromptMetadata.$Properties} message BotSuggestedPromptMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSuggestedPromptMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.suggestedPrompts != null && message.suggestedPrompts.length)
                for (var i = 0; i < message.suggestedPrompts.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.suggestedPrompts[i]);
            if (message.selectedPromptIndex != null && $Object.hasOwnProperty.call(message, "selectedPromptIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.selectedPromptIndex);
            if (message.promptSuggestions != null && $Object.hasOwnProperty.call(message, "promptSuggestions"))
                $root.BotMetadata.BotPromptSuggestions.encode(message.promptSuggestions, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.selectedPromptId != null && $Object.hasOwnProperty.call(message, "selectedPromptId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.selectedPromptId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotSuggestedPromptMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotSuggestedPromptMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @static
         * @param {BotMetadata.BotSuggestedPromptMetadata.$Properties} message BotSuggestedPromptMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotSuggestedPromptMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotSuggestedPromptMetadata & BotMetadata.BotSuggestedPromptMetadata.$Shape} BotSuggestedPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSuggestedPromptMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotSuggestedPromptMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.suggestedPrompts && message.suggestedPrompts.length))
                            message.suggestedPrompts = [];
                        message.suggestedPrompts.push(reader.stringVerify());
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.selectedPromptIndex = reader.uint32();
                        message._selectedPromptIndex = "selectedPromptIndex";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.promptSuggestions = $root.BotMetadata.BotPromptSuggestions.decode(reader, reader.size(), $undefined, _depth + 1, message.promptSuggestions);
                        message._promptSuggestions = "promptSuggestions";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.selectedPromptId = reader.stringVerify();
                        message._selectedPromptId = "selectedPromptId";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotSuggestedPromptMetadata & BotMetadata.BotSuggestedPromptMetadata.$Shape} BotSuggestedPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotSuggestedPromptMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotSuggestedPromptMetadata message.
         * @function verify
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotSuggestedPromptMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.suggestedPrompts != null && $Object.hasOwnProperty.call(message, "suggestedPrompts")) {
                if (!$Array.isArray(message.suggestedPrompts))
                    return "suggestedPrompts: array expected";
                for (var i = 0; i < message.suggestedPrompts.length; ++i)
                    if (!$util.isString(message.suggestedPrompts[i]))
                        return "suggestedPrompts: string[] expected";
            }
            if (message.selectedPromptIndex != null && $Object.hasOwnProperty.call(message, "selectedPromptIndex")) {
                properties._selectedPromptIndex = 1;
                if (!$util.isInteger(message.selectedPromptIndex))
                    return "selectedPromptIndex: integer expected";
            }
            if (message.promptSuggestions != null && $Object.hasOwnProperty.call(message, "promptSuggestions")) {
                properties._promptSuggestions = 1;
                {
                    var error = $root.BotMetadata.BotPromptSuggestions.verify(message.promptSuggestions, _depth + 1);
                    if (error)
                        return "promptSuggestions." + error;
                }
            }
            if (message.selectedPromptId != null && $Object.hasOwnProperty.call(message, "selectedPromptId")) {
                properties._selectedPromptId = 1;
                if (!$util.isString(message.selectedPromptId))
                    return "selectedPromptId: string expected";
            }
            return null;
        };

        /**
         * Creates a BotSuggestedPromptMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotSuggestedPromptMetadata} BotSuggestedPromptMetadata
         */
        BotSuggestedPromptMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotSuggestedPromptMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotSuggestedPromptMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotSuggestedPromptMetadata();
            if (object.suggestedPrompts) {
                if (!$Array.isArray(object.suggestedPrompts))
                    throw $TypeError(".BotMetadata.BotSuggestedPromptMetadata.suggestedPrompts: array expected");
                message.suggestedPrompts = $Array(object.suggestedPrompts.length);
                for (var i = 0; i < object.suggestedPrompts.length; ++i)
                    message.suggestedPrompts[i] = $String(object.suggestedPrompts[i]);
            }
            if (object.selectedPromptIndex != null)
                message.selectedPromptIndex = object.selectedPromptIndex >>> 0;
            if (object.promptSuggestions != null) {
                if (!$util.isObject(object.promptSuggestions))
                    throw $TypeError(".BotMetadata.BotSuggestedPromptMetadata.promptSuggestions: object expected");
                message.promptSuggestions = $root.BotMetadata.BotPromptSuggestions.fromObject(object.promptSuggestions, _depth + 1);
            }
            if (object.selectedPromptId != null)
                message.selectedPromptId = $String(object.selectedPromptId);
            return message;
        };

        /**
         * Creates a plain object from a BotSuggestedPromptMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @static
         * @param {BotMetadata.BotSuggestedPromptMetadata} message BotSuggestedPromptMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotSuggestedPromptMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.suggestedPrompts = [];
            if (message.suggestedPrompts && message.suggestedPrompts.length) {
                object.suggestedPrompts = $Array(message.suggestedPrompts.length);
                for (var j = 0; j < message.suggestedPrompts.length; ++j)
                    object.suggestedPrompts[j] = message.suggestedPrompts[j];
            }
            if (message.selectedPromptIndex != null && $Object.hasOwnProperty.call(message, "selectedPromptIndex"))
                object.selectedPromptIndex = message.selectedPromptIndex;
            if (message.promptSuggestions != null && $Object.hasOwnProperty.call(message, "promptSuggestions"))
                object.promptSuggestions = $root.BotMetadata.BotPromptSuggestions.toObject(message.promptSuggestions, options, _depth + 1);
            if (message.selectedPromptId != null && $Object.hasOwnProperty.call(message, "selectedPromptId"))
                object.selectedPromptId = message.selectedPromptId;
            return object;
        };

        /**
         * Converts this BotSuggestedPromptMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotSuggestedPromptMetadata.prototype.toJSON = function() {
            return BotSuggestedPromptMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotSuggestedPromptMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotSuggestedPromptMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotSuggestedPromptMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotSuggestedPromptMetadata";
        };

        return BotSuggestedPromptMetadata;
    })();

    BotMetadata.BotPluginMetadata = (function() {

        /**
         * Properties of a BotPluginMetadata.
         * @typedef {Object} BotMetadata.BotPluginMetadata.$Properties
         * @property {BotMetadata.BotPluginMetadata.SearchProvider|null} [provider] BotPluginMetadata provider
         * @property {BotMetadata.BotPluginMetadata.PluginType|null} [pluginType] BotPluginMetadata pluginType
         * @property {string|null} [thumbnailCdnUrl] BotPluginMetadata thumbnailCdnUrl
         * @property {string|null} [profilePhotoCdnUrl] BotPluginMetadata profilePhotoCdnUrl
         * @property {string|null} [searchProviderUrl] BotPluginMetadata searchProviderUrl
         * @property {number|null} [referenceIndex] BotPluginMetadata referenceIndex
         * @property {number|null} [expectedLinksCount] BotPluginMetadata expectedLinksCount
         * @property {string|null} [searchQuery] BotPluginMetadata searchQuery
         * @property {Protocol.MessageKey.$Properties|null} [parentPluginMessageKey] BotPluginMetadata parentPluginMessageKey
         * @property {BotMetadata.BotPluginMetadata.PluginType|null} [deprecatedField] BotPluginMetadata deprecatedField
         * @property {BotMetadata.BotPluginMetadata.PluginType|null} [parentPluginType] BotPluginMetadata parentPluginType
         * @property {string|null} [faviconCdnUrl] BotPluginMetadata faviconCdnUrl
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotPluginMetadata.
         * @memberof BotMetadata
         * @interface IBotPluginMetadata
         * @augments BotMetadata.BotPluginMetadata.$Properties
         * @deprecated Use BotMetadata.BotPluginMetadata.$Properties instead.
         */

        /**
         * Shape of a BotPluginMetadata.
         * @typedef {BotMetadata.BotPluginMetadata.$Properties} BotMetadata.BotPluginMetadata.$Shape
         */

        /**
         * Constructs a new BotPluginMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotPluginMetadata.
         * @constructor
         * @param {BotMetadata.BotPluginMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotPluginMetadata = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotPluginMetadata provider.
         * @member {BotMetadata.BotPluginMetadata.SearchProvider|null|undefined} provider
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.provider = null;

        /**
         * BotPluginMetadata pluginType.
         * @member {BotMetadata.BotPluginMetadata.PluginType|null|undefined} pluginType
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.pluginType = null;

        /**
         * BotPluginMetadata thumbnailCdnUrl.
         * @member {string|null|undefined} thumbnailCdnUrl
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.thumbnailCdnUrl = null;

        /**
         * BotPluginMetadata profilePhotoCdnUrl.
         * @member {string|null|undefined} profilePhotoCdnUrl
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.profilePhotoCdnUrl = null;

        /**
         * BotPluginMetadata searchProviderUrl.
         * @member {string|null|undefined} searchProviderUrl
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.searchProviderUrl = null;

        /**
         * BotPluginMetadata referenceIndex.
         * @member {number|null|undefined} referenceIndex
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.referenceIndex = null;

        /**
         * BotPluginMetadata expectedLinksCount.
         * @member {number|null|undefined} expectedLinksCount
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.expectedLinksCount = null;

        /**
         * BotPluginMetadata searchQuery.
         * @member {string|null|undefined} searchQuery
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.searchQuery = null;

        /**
         * BotPluginMetadata parentPluginMessageKey.
         * @member {Protocol.MessageKey.$Properties|null|undefined} parentPluginMessageKey
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.parentPluginMessageKey = null;

        /**
         * BotPluginMetadata deprecatedField.
         * @member {BotMetadata.BotPluginMetadata.PluginType|null|undefined} deprecatedField
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.deprecatedField = null;

        /**
         * BotPluginMetadata parentPluginType.
         * @member {BotMetadata.BotPluginMetadata.PluginType|null|undefined} parentPluginType
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.parentPluginType = null;

        /**
         * BotPluginMetadata faviconCdnUrl.
         * @member {string|null|undefined} faviconCdnUrl
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         */
        BotPluginMetadata.prototype.faviconCdnUrl = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_provider", {
            get: $util.oneOfGetter($oneOfFields = ["provider"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_pluginType", {
            get: $util.oneOfGetter($oneOfFields = ["pluginType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_thumbnailCdnUrl", {
            get: $util.oneOfGetter($oneOfFields = ["thumbnailCdnUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_profilePhotoCdnUrl", {
            get: $util.oneOfGetter($oneOfFields = ["profilePhotoCdnUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_searchProviderUrl", {
            get: $util.oneOfGetter($oneOfFields = ["searchProviderUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_referenceIndex", {
            get: $util.oneOfGetter($oneOfFields = ["referenceIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_expectedLinksCount", {
            get: $util.oneOfGetter($oneOfFields = ["expectedLinksCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_searchQuery", {
            get: $util.oneOfGetter($oneOfFields = ["searchQuery"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_parentPluginMessageKey", {
            get: $util.oneOfGetter($oneOfFields = ["parentPluginMessageKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_deprecatedField", {
            get: $util.oneOfGetter($oneOfFields = ["deprecatedField"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_parentPluginType", {
            get: $util.oneOfGetter($oneOfFields = ["parentPluginType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotPluginMetadata.prototype, "_faviconCdnUrl", {
            get: $util.oneOfGetter($oneOfFields = ["faviconCdnUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotPluginMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotPluginMetadata
         * @static
         * @param {BotMetadata.BotPluginMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotPluginMetadata} BotPluginMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotPluginMetadata.$Shape): BotMetadata.BotPluginMetadata & BotMetadata.BotPluginMetadata.$Shape;
         *   (properties?: BotMetadata.BotPluginMetadata.$Properties): BotMetadata.BotPluginMetadata;
         * }}
         */
        BotPluginMetadata.create = function(properties) {
            return new BotPluginMetadata(properties);
        };

        /**
         * Encodes the specified BotPluginMetadata message. Does not implicitly {@link BotMetadata.BotPluginMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotPluginMetadata
         * @static
         * @param {BotMetadata.BotPluginMetadata.$Properties} message BotPluginMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotPluginMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.provider != null && $Object.hasOwnProperty.call(message, "provider"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.provider);
            if (message.pluginType != null && $Object.hasOwnProperty.call(message, "pluginType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pluginType);
            if (message.thumbnailCdnUrl != null && $Object.hasOwnProperty.call(message, "thumbnailCdnUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.thumbnailCdnUrl);
            if (message.profilePhotoCdnUrl != null && $Object.hasOwnProperty.call(message, "profilePhotoCdnUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.profilePhotoCdnUrl);
            if (message.searchProviderUrl != null && $Object.hasOwnProperty.call(message, "searchProviderUrl"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.searchProviderUrl);
            if (message.referenceIndex != null && $Object.hasOwnProperty.call(message, "referenceIndex"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.referenceIndex);
            if (message.expectedLinksCount != null && $Object.hasOwnProperty.call(message, "expectedLinksCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.expectedLinksCount);
            if (message.searchQuery != null && $Object.hasOwnProperty.call(message, "searchQuery"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.searchQuery);
            if (message.parentPluginMessageKey != null && $Object.hasOwnProperty.call(message, "parentPluginMessageKey"))
                $root.Protocol.MessageKey.encode(message.parentPluginMessageKey, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
            if (message.deprecatedField != null && $Object.hasOwnProperty.call(message, "deprecatedField"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.deprecatedField);
            if (message.parentPluginType != null && $Object.hasOwnProperty.call(message, "parentPluginType"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.parentPluginType);
            if (message.faviconCdnUrl != null && $Object.hasOwnProperty.call(message, "faviconCdnUrl"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.faviconCdnUrl);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotPluginMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotPluginMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotPluginMetadata
         * @static
         * @param {BotMetadata.BotPluginMetadata.$Properties} message BotPluginMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotPluginMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotPluginMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotPluginMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotPluginMetadata & BotMetadata.BotPluginMetadata.$Shape} BotPluginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotPluginMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotPluginMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.provider = reader.int32();
                        message._provider = "provider";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.pluginType = reader.int32();
                        message._pluginType = "pluginType";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.thumbnailCdnUrl = reader.stringVerify();
                        message._thumbnailCdnUrl = "thumbnailCdnUrl";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.profilePhotoCdnUrl = reader.stringVerify();
                        message._profilePhotoCdnUrl = "profilePhotoCdnUrl";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.searchProviderUrl = reader.stringVerify();
                        message._searchProviderUrl = "searchProviderUrl";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.referenceIndex = reader.uint32();
                        message._referenceIndex = "referenceIndex";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.expectedLinksCount = reader.uint32();
                        message._expectedLinksCount = "expectedLinksCount";
                        continue;
                    }
                case 9: {
                        if (wireType !== 2)
                            break;
                        message.searchQuery = reader.stringVerify();
                        message._searchQuery = "searchQuery";
                        continue;
                    }
                case 10: {
                        if (wireType !== 2)
                            break;
                        message.parentPluginMessageKey = $root.Protocol.MessageKey.decode(reader, reader.size(), $undefined, _depth + 1, message.parentPluginMessageKey);
                        message._parentPluginMessageKey = "parentPluginMessageKey";
                        continue;
                    }
                case 11: {
                        if (wireType !== 0)
                            break;
                        message.deprecatedField = reader.int32();
                        message._deprecatedField = "deprecatedField";
                        continue;
                    }
                case 12: {
                        if (wireType !== 0)
                            break;
                        message.parentPluginType = reader.int32();
                        message._parentPluginType = "parentPluginType";
                        continue;
                    }
                case 13: {
                        if (wireType !== 2)
                            break;
                        message.faviconCdnUrl = reader.stringVerify();
                        message._faviconCdnUrl = "faviconCdnUrl";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotPluginMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotPluginMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotPluginMetadata & BotMetadata.BotPluginMetadata.$Shape} BotPluginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotPluginMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotPluginMetadata message.
         * @function verify
         * @memberof BotMetadata.BotPluginMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotPluginMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.provider != null && $Object.hasOwnProperty.call(message, "provider")) {
                properties._provider = 1;
                if (typeof message.provider !== "number" || (message.provider | 0) !== message.provider)
                    return "provider: enum value expected";
            }
            if (message.pluginType != null && $Object.hasOwnProperty.call(message, "pluginType")) {
                properties._pluginType = 1;
                if (typeof message.pluginType !== "number" || (message.pluginType | 0) !== message.pluginType)
                    return "pluginType: enum value expected";
            }
            if (message.thumbnailCdnUrl != null && $Object.hasOwnProperty.call(message, "thumbnailCdnUrl")) {
                properties._thumbnailCdnUrl = 1;
                if (!$util.isString(message.thumbnailCdnUrl))
                    return "thumbnailCdnUrl: string expected";
            }
            if (message.profilePhotoCdnUrl != null && $Object.hasOwnProperty.call(message, "profilePhotoCdnUrl")) {
                properties._profilePhotoCdnUrl = 1;
                if (!$util.isString(message.profilePhotoCdnUrl))
                    return "profilePhotoCdnUrl: string expected";
            }
            if (message.searchProviderUrl != null && $Object.hasOwnProperty.call(message, "searchProviderUrl")) {
                properties._searchProviderUrl = 1;
                if (!$util.isString(message.searchProviderUrl))
                    return "searchProviderUrl: string expected";
            }
            if (message.referenceIndex != null && $Object.hasOwnProperty.call(message, "referenceIndex")) {
                properties._referenceIndex = 1;
                if (!$util.isInteger(message.referenceIndex))
                    return "referenceIndex: integer expected";
            }
            if (message.expectedLinksCount != null && $Object.hasOwnProperty.call(message, "expectedLinksCount")) {
                properties._expectedLinksCount = 1;
                if (!$util.isInteger(message.expectedLinksCount))
                    return "expectedLinksCount: integer expected";
            }
            if (message.searchQuery != null && $Object.hasOwnProperty.call(message, "searchQuery")) {
                properties._searchQuery = 1;
                if (!$util.isString(message.searchQuery))
                    return "searchQuery: string expected";
            }
            if (message.parentPluginMessageKey != null && $Object.hasOwnProperty.call(message, "parentPluginMessageKey")) {
                properties._parentPluginMessageKey = 1;
                {
                    var error = $root.Protocol.MessageKey.verify(message.parentPluginMessageKey, _depth + 1);
                    if (error)
                        return "parentPluginMessageKey." + error;
                }
            }
            if (message.deprecatedField != null && $Object.hasOwnProperty.call(message, "deprecatedField")) {
                properties._deprecatedField = 1;
                if (typeof message.deprecatedField !== "number" || (message.deprecatedField | 0) !== message.deprecatedField)
                    return "deprecatedField: enum value expected";
            }
            if (message.parentPluginType != null && $Object.hasOwnProperty.call(message, "parentPluginType")) {
                properties._parentPluginType = 1;
                if (typeof message.parentPluginType !== "number" || (message.parentPluginType | 0) !== message.parentPluginType)
                    return "parentPluginType: enum value expected";
            }
            if (message.faviconCdnUrl != null && $Object.hasOwnProperty.call(message, "faviconCdnUrl")) {
                properties._faviconCdnUrl = 1;
                if (!$util.isString(message.faviconCdnUrl))
                    return "faviconCdnUrl: string expected";
            }
            return null;
        };

        /**
         * Creates a BotPluginMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotPluginMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotPluginMetadata} BotPluginMetadata
         */
        BotPluginMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotPluginMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotPluginMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotPluginMetadata();
            switch (object.provider) {
            case "UNKNOWN":
            case 0:
                message.provider = 0;
                break;
            case "BING":
            case 1:
                message.provider = 1;
                break;
            case "GOOGLE":
            case 2:
                message.provider = 2;
                break;
            case "SUPPORT":
            case 3:
                message.provider = 3;
                break;
            default:
                if (typeof object.provider === "number" && (object.provider | 0) === object.provider)
                    message.provider = object.provider;
            }
            switch (object.pluginType) {
            case "UNKNOWN_PLUGIN":
            case 0:
                message.pluginType = 0;
                break;
            case "REELS":
            case 1:
                message.pluginType = 1;
                break;
            case "SEARCH":
            case 2:
                message.pluginType = 2;
                break;
            default:
                if (typeof object.pluginType === "number" && (object.pluginType | 0) === object.pluginType)
                    message.pluginType = object.pluginType;
            }
            if (object.thumbnailCdnUrl != null)
                message.thumbnailCdnUrl = $String(object.thumbnailCdnUrl);
            if (object.profilePhotoCdnUrl != null)
                message.profilePhotoCdnUrl = $String(object.profilePhotoCdnUrl);
            if (object.searchProviderUrl != null)
                message.searchProviderUrl = $String(object.searchProviderUrl);
            if (object.referenceIndex != null)
                message.referenceIndex = object.referenceIndex >>> 0;
            if (object.expectedLinksCount != null)
                message.expectedLinksCount = object.expectedLinksCount >>> 0;
            if (object.searchQuery != null)
                message.searchQuery = $String(object.searchQuery);
            if (object.parentPluginMessageKey != null) {
                if (!$util.isObject(object.parentPluginMessageKey))
                    throw $TypeError(".BotMetadata.BotPluginMetadata.parentPluginMessageKey: object expected");
                message.parentPluginMessageKey = $root.Protocol.MessageKey.fromObject(object.parentPluginMessageKey, _depth + 1);
            }
            switch (object.deprecatedField) {
            case "UNKNOWN_PLUGIN":
            case 0:
                message.deprecatedField = 0;
                break;
            case "REELS":
            case 1:
                message.deprecatedField = 1;
                break;
            case "SEARCH":
            case 2:
                message.deprecatedField = 2;
                break;
            default:
                if (typeof object.deprecatedField === "number" && (object.deprecatedField | 0) === object.deprecatedField)
                    message.deprecatedField = object.deprecatedField;
            }
            switch (object.parentPluginType) {
            case "UNKNOWN_PLUGIN":
            case 0:
                message.parentPluginType = 0;
                break;
            case "REELS":
            case 1:
                message.parentPluginType = 1;
                break;
            case "SEARCH":
            case 2:
                message.parentPluginType = 2;
                break;
            default:
                if (typeof object.parentPluginType === "number" && (object.parentPluginType | 0) === object.parentPluginType)
                    message.parentPluginType = object.parentPluginType;
            }
            if (object.faviconCdnUrl != null)
                message.faviconCdnUrl = $String(object.faviconCdnUrl);
            return message;
        };

        /**
         * Creates a plain object from a BotPluginMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotPluginMetadata
         * @static
         * @param {BotMetadata.BotPluginMetadata} message BotPluginMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotPluginMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.provider != null && $Object.hasOwnProperty.call(message, "provider"))
                object.provider = options.enums === $String ? $root.BotMetadata.BotPluginMetadata.SearchProvider[message.provider] === $undefined ? message.provider : $root.BotMetadata.BotPluginMetadata.SearchProvider[message.provider] : message.provider;
            if (message.pluginType != null && $Object.hasOwnProperty.call(message, "pluginType"))
                object.pluginType = options.enums === $String ? $root.BotMetadata.BotPluginMetadata.PluginType[message.pluginType] === $undefined ? message.pluginType : $root.BotMetadata.BotPluginMetadata.PluginType[message.pluginType] : message.pluginType;
            if (message.thumbnailCdnUrl != null && $Object.hasOwnProperty.call(message, "thumbnailCdnUrl"))
                object.thumbnailCdnUrl = message.thumbnailCdnUrl;
            if (message.profilePhotoCdnUrl != null && $Object.hasOwnProperty.call(message, "profilePhotoCdnUrl"))
                object.profilePhotoCdnUrl = message.profilePhotoCdnUrl;
            if (message.searchProviderUrl != null && $Object.hasOwnProperty.call(message, "searchProviderUrl"))
                object.searchProviderUrl = message.searchProviderUrl;
            if (message.referenceIndex != null && $Object.hasOwnProperty.call(message, "referenceIndex"))
                object.referenceIndex = message.referenceIndex;
            if (message.expectedLinksCount != null && $Object.hasOwnProperty.call(message, "expectedLinksCount"))
                object.expectedLinksCount = message.expectedLinksCount;
            if (message.searchQuery != null && $Object.hasOwnProperty.call(message, "searchQuery"))
                object.searchQuery = message.searchQuery;
            if (message.parentPluginMessageKey != null && $Object.hasOwnProperty.call(message, "parentPluginMessageKey"))
                object.parentPluginMessageKey = $root.Protocol.MessageKey.toObject(message.parentPluginMessageKey, options, _depth + 1);
            if (message.deprecatedField != null && $Object.hasOwnProperty.call(message, "deprecatedField"))
                object.deprecatedField = options.enums === $String ? $root.BotMetadata.BotPluginMetadata.PluginType[message.deprecatedField] === $undefined ? message.deprecatedField : $root.BotMetadata.BotPluginMetadata.PluginType[message.deprecatedField] : message.deprecatedField;
            if (message.parentPluginType != null && $Object.hasOwnProperty.call(message, "parentPluginType"))
                object.parentPluginType = options.enums === $String ? $root.BotMetadata.BotPluginMetadata.PluginType[message.parentPluginType] === $undefined ? message.parentPluginType : $root.BotMetadata.BotPluginMetadata.PluginType[message.parentPluginType] : message.parentPluginType;
            if (message.faviconCdnUrl != null && $Object.hasOwnProperty.call(message, "faviconCdnUrl"))
                object.faviconCdnUrl = message.faviconCdnUrl;
            return object;
        };

        /**
         * Converts this BotPluginMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotPluginMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotPluginMetadata.prototype.toJSON = function() {
            return BotPluginMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotPluginMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotPluginMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotPluginMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotPluginMetadata";
        };

        /**
         * PluginType enum.
         * @name BotMetadata.BotPluginMetadata.PluginType
         * @enum {number}
         * @property {number} UNKNOWN_PLUGIN=0 UNKNOWN_PLUGIN value
         * @property {number} REELS=1 REELS value
         * @property {number} SEARCH=2 SEARCH value
         */
        BotPluginMetadata.PluginType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_PLUGIN"] = 0;
            values[valuesById[1] = "REELS"] = 1;
            values[valuesById[2] = "SEARCH"] = 2;
            return values;
        })();

        /**
         * SearchProvider enum.
         * @name BotMetadata.BotPluginMetadata.SearchProvider
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} BING=1 BING value
         * @property {number} GOOGLE=2 GOOGLE value
         * @property {number} SUPPORT=3 SUPPORT value
         */
        BotPluginMetadata.SearchProvider = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "BING"] = 1;
            values[valuesById[2] = "GOOGLE"] = 2;
            values[valuesById[3] = "SUPPORT"] = 3;
            return values;
        })();

        return BotPluginMetadata;
    })();

    BotMetadata.BotAvatarMetadata = (function() {

        /**
         * Properties of a BotAvatarMetadata.
         * @typedef {Object} BotMetadata.BotAvatarMetadata.$Properties
         * @property {number|null} [sentiment] BotAvatarMetadata sentiment
         * @property {string|null} [behaviorGraph] BotAvatarMetadata behaviorGraph
         * @property {number|null} [action] BotAvatarMetadata action
         * @property {number|null} [intensity] BotAvatarMetadata intensity
         * @property {number|null} [wordCount] BotAvatarMetadata wordCount
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BotAvatarMetadata.
         * @memberof BotMetadata
         * @interface IBotAvatarMetadata
         * @augments BotMetadata.BotAvatarMetadata.$Properties
         * @deprecated Use BotMetadata.BotAvatarMetadata.$Properties instead.
         */

        /**
         * Shape of a BotAvatarMetadata.
         * @typedef {BotMetadata.BotAvatarMetadata.$Properties} BotMetadata.BotAvatarMetadata.$Shape
         */

        /**
         * Constructs a new BotAvatarMetadata.
         * @memberof BotMetadata
         * @classdesc Represents a BotAvatarMetadata.
         * @constructor
         * @param {BotMetadata.BotAvatarMetadata.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BotAvatarMetadata = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BotAvatarMetadata sentiment.
         * @member {number|null|undefined} sentiment
         * @memberof BotMetadata.BotAvatarMetadata
         * @instance
         */
        BotAvatarMetadata.prototype.sentiment = null;

        /**
         * BotAvatarMetadata behaviorGraph.
         * @member {string|null|undefined} behaviorGraph
         * @memberof BotMetadata.BotAvatarMetadata
         * @instance
         */
        BotAvatarMetadata.prototype.behaviorGraph = null;

        /**
         * BotAvatarMetadata action.
         * @member {number|null|undefined} action
         * @memberof BotMetadata.BotAvatarMetadata
         * @instance
         */
        BotAvatarMetadata.prototype.action = null;

        /**
         * BotAvatarMetadata intensity.
         * @member {number|null|undefined} intensity
         * @memberof BotMetadata.BotAvatarMetadata
         * @instance
         */
        BotAvatarMetadata.prototype.intensity = null;

        /**
         * BotAvatarMetadata wordCount.
         * @member {number|null|undefined} wordCount
         * @memberof BotMetadata.BotAvatarMetadata
         * @instance
         */
        BotAvatarMetadata.prototype.wordCount = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotAvatarMetadata.prototype, "_sentiment", {
            get: $util.oneOfGetter($oneOfFields = ["sentiment"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotAvatarMetadata.prototype, "_behaviorGraph", {
            get: $util.oneOfGetter($oneOfFields = ["behaviorGraph"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotAvatarMetadata.prototype, "_action", {
            get: $util.oneOfGetter($oneOfFields = ["action"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotAvatarMetadata.prototype, "_intensity", {
            get: $util.oneOfGetter($oneOfFields = ["intensity"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BotAvatarMetadata.prototype, "_wordCount", {
            get: $util.oneOfGetter($oneOfFields = ["wordCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotAvatarMetadata instance using the specified properties.
         * @function create
         * @memberof BotMetadata.BotAvatarMetadata
         * @static
         * @param {BotMetadata.BotAvatarMetadata.$Properties=} [properties] Properties to set
         * @returns {BotMetadata.BotAvatarMetadata} BotAvatarMetadata instance
         * @type {{
         *   (properties: BotMetadata.BotAvatarMetadata.$Shape): BotMetadata.BotAvatarMetadata & BotMetadata.BotAvatarMetadata.$Shape;
         *   (properties?: BotMetadata.BotAvatarMetadata.$Properties): BotMetadata.BotAvatarMetadata;
         * }}
         */
        BotAvatarMetadata.create = function(properties) {
            return new BotAvatarMetadata(properties);
        };

        /**
         * Encodes the specified BotAvatarMetadata message. Does not implicitly {@link BotMetadata.BotAvatarMetadata.verify|verify} messages.
         * @function encode
         * @memberof BotMetadata.BotAvatarMetadata
         * @static
         * @param {BotMetadata.BotAvatarMetadata.$Properties} message BotAvatarMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotAvatarMetadata.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.sentiment != null && $Object.hasOwnProperty.call(message, "sentiment"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sentiment);
            if (message.behaviorGraph != null && $Object.hasOwnProperty.call(message, "behaviorGraph"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.behaviorGraph);
            if (message.action != null && $Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.action);
            if (message.intensity != null && $Object.hasOwnProperty.call(message, "intensity"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.intensity);
            if (message.wordCount != null && $Object.hasOwnProperty.call(message, "wordCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.wordCount);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BotAvatarMetadata message, length delimited. Does not implicitly {@link BotMetadata.BotAvatarMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BotMetadata.BotAvatarMetadata
         * @static
         * @param {BotMetadata.BotAvatarMetadata.$Properties} message BotAvatarMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotAvatarMetadata.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BotAvatarMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof BotMetadata.BotAvatarMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BotMetadata.BotAvatarMetadata & BotMetadata.BotAvatarMetadata.$Shape} BotAvatarMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotAvatarMetadata.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.BotMetadata.BotAvatarMetadata();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.sentiment = reader.uint32();
                        message._sentiment = "sentiment";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.behaviorGraph = reader.stringVerify();
                        message._behaviorGraph = "behaviorGraph";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.action = reader.uint32();
                        message._action = "action";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.intensity = reader.uint32();
                        message._intensity = "intensity";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.wordCount = reader.uint32();
                        message._wordCount = "wordCount";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BotAvatarMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BotMetadata.BotAvatarMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BotMetadata.BotAvatarMetadata & BotMetadata.BotAvatarMetadata.$Shape} BotAvatarMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotAvatarMetadata.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a BotAvatarMetadata message.
         * @function verify
         * @memberof BotMetadata.BotAvatarMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotAvatarMetadata.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.sentiment != null && $Object.hasOwnProperty.call(message, "sentiment")) {
                properties._sentiment = 1;
                if (!$util.isInteger(message.sentiment))
                    return "sentiment: integer expected";
            }
            if (message.behaviorGraph != null && $Object.hasOwnProperty.call(message, "behaviorGraph")) {
                properties._behaviorGraph = 1;
                if (!$util.isString(message.behaviorGraph))
                    return "behaviorGraph: string expected";
            }
            if (message.action != null && $Object.hasOwnProperty.call(message, "action")) {
                properties._action = 1;
                if (!$util.isInteger(message.action))
                    return "action: integer expected";
            }
            if (message.intensity != null && $Object.hasOwnProperty.call(message, "intensity")) {
                properties._intensity = 1;
                if (!$util.isInteger(message.intensity))
                    return "intensity: integer expected";
            }
            if (message.wordCount != null && $Object.hasOwnProperty.call(message, "wordCount")) {
                properties._wordCount = 1;
                if (!$util.isInteger(message.wordCount))
                    return "wordCount: integer expected";
            }
            return null;
        };

        /**
         * Creates a BotAvatarMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BotMetadata.BotAvatarMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BotMetadata.BotAvatarMetadata} BotAvatarMetadata
         */
        BotAvatarMetadata.fromObject = function (object, _depth) {
            if (object instanceof $root.BotMetadata.BotAvatarMetadata)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".BotMetadata.BotAvatarMetadata: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.BotMetadata.BotAvatarMetadata();
            if (object.sentiment != null)
                message.sentiment = object.sentiment >>> 0;
            if (object.behaviorGraph != null)
                message.behaviorGraph = $String(object.behaviorGraph);
            if (object.action != null)
                message.action = object.action >>> 0;
            if (object.intensity != null)
                message.intensity = object.intensity >>> 0;
            if (object.wordCount != null)
                message.wordCount = object.wordCount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a BotAvatarMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BotMetadata.BotAvatarMetadata
         * @static
         * @param {BotMetadata.BotAvatarMetadata} message BotAvatarMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotAvatarMetadata.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.sentiment != null && $Object.hasOwnProperty.call(message, "sentiment"))
                object.sentiment = message.sentiment;
            if (message.behaviorGraph != null && $Object.hasOwnProperty.call(message, "behaviorGraph"))
                object.behaviorGraph = message.behaviorGraph;
            if (message.action != null && $Object.hasOwnProperty.call(message, "action"))
                object.action = message.action;
            if (message.intensity != null && $Object.hasOwnProperty.call(message, "intensity"))
                object.intensity = message.intensity;
            if (message.wordCount != null && $Object.hasOwnProperty.call(message, "wordCount"))
                object.wordCount = message.wordCount;
            return object;
        };

        /**
         * Converts this BotAvatarMetadata to JSON.
         * @function toJSON
         * @memberof BotMetadata.BotAvatarMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotAvatarMetadata.prototype.toJSON = function() {
            return BotAvatarMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BotAvatarMetadata
         * @function getTypeUrl
         * @memberof BotMetadata.BotAvatarMetadata
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BotAvatarMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/BotMetadata.BotAvatarMetadata";
        };

        return BotAvatarMetadata;
    })();

    /**
     * BotSessionSource enum.
     * @name BotMetadata.BotSessionSource
     * @enum {number}
     * @property {number} NONE=0 NONE value
     * @property {number} NULL_STATE=1 NULL_STATE value
     * @property {number} TYPEAHEAD=2 TYPEAHEAD value
     * @property {number} USER_INPUT=3 USER_INPUT value
     * @property {number} EMU_FLASH=4 EMU_FLASH value
     * @property {number} EMU_FLASH_FOLLOWUP=5 EMU_FLASH_FOLLOWUP value
     * @property {number} VOICE=6 VOICE value
     */
    BotMetadata.BotSessionSource = (function() {
        var valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "NULL_STATE"] = 1;
        values[valuesById[2] = "TYPEAHEAD"] = 2;
        values[valuesById[3] = "USER_INPUT"] = 3;
        values[valuesById[4] = "EMU_FLASH"] = 4;
        values[valuesById[5] = "EMU_FLASH_FOLLOWUP"] = 5;
        values[valuesById[6] = "VOICE"] = 6;
        return values;
    })();

    /**
     * BotMetricsThreadEntryPoint enum.
     * @name BotMetadata.BotMetricsThreadEntryPoint
     * @enum {number}
     * @property {number} AI_TAB_THREAD=1 AI_TAB_THREAD value
     * @property {number} AI_HOME_THREAD=2 AI_HOME_THREAD value
     * @property {number} AI_DEEPLINK_IMMERSIVE_THREAD=3 AI_DEEPLINK_IMMERSIVE_THREAD value
     * @property {number} AI_DEEPLINK_THREAD=4 AI_DEEPLINK_THREAD value
     * @property {number} ASK_META_AI_CONTEXT_MENU_THREAD=5 ASK_META_AI_CONTEXT_MENU_THREAD value
     */
    BotMetadata.BotMetricsThreadEntryPoint = (function() {
        var valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[1] = "AI_TAB_THREAD"] = 1;
        values[valuesById[2] = "AI_HOME_THREAD"] = 2;
        values[valuesById[3] = "AI_DEEPLINK_IMMERSIVE_THREAD"] = 3;
        values[valuesById[4] = "AI_DEEPLINK_THREAD"] = 4;
        values[valuesById[5] = "ASK_META_AI_CONTEXT_MENU_THREAD"] = 5;
        return values;
    })();

    /**
     * BotMetricsEntryPoint enum.
     * @name BotMetadata.BotMetricsEntryPoint
     * @enum {number}
     * @property {number} FAVICON=1 FAVICON value
     * @property {number} CHATLIST=2 CHATLIST value
     * @property {number} AISEARCH_NULL_STATE_PAPER_PLANE=3 AISEARCH_NULL_STATE_PAPER_PLANE value
     * @property {number} AISEARCH_NULL_STATE_SUGGESTION=4 AISEARCH_NULL_STATE_SUGGESTION value
     * @property {number} AISEARCH_TYPE_AHEAD_SUGGESTION=5 AISEARCH_TYPE_AHEAD_SUGGESTION value
     * @property {number} AISEARCH_TYPE_AHEAD_PAPER_PLANE=6 AISEARCH_TYPE_AHEAD_PAPER_PLANE value
     * @property {number} AISEARCH_TYPE_AHEAD_RESULT_CHATLIST=7 AISEARCH_TYPE_AHEAD_RESULT_CHATLIST value
     * @property {number} AISEARCH_TYPE_AHEAD_RESULT_MESSAGES=8 AISEARCH_TYPE_AHEAD_RESULT_MESSAGES value
     * @property {number} AIVOICE_SEARCH_BAR=9 AIVOICE_SEARCH_BAR value
     * @property {number} AIVOICE_FAVICON=10 AIVOICE_FAVICON value
     * @property {number} AISTUDIO=11 AISTUDIO value
     * @property {number} DEEPLINK=12 DEEPLINK value
     * @property {number} NOTIFICATION=13 NOTIFICATION value
     * @property {number} PROFILE_MESSAGE_BUTTON=14 PROFILE_MESSAGE_BUTTON value
     * @property {number} FORWARD=15 FORWARD value
     * @property {number} APP_SHORTCUT=16 APP_SHORTCUT value
     * @property {number} FF_FAMILY=17 FF_FAMILY value
     * @property {number} AI_TAB=18 AI_TAB value
     * @property {number} AI_HOME=19 AI_HOME value
     * @property {number} AI_DEEPLINK_IMMERSIVE=20 AI_DEEPLINK_IMMERSIVE value
     * @property {number} AI_DEEPLINK=21 AI_DEEPLINK value
     * @property {number} META_AI_CHAT_SHORTCUT_AI_STUDIO=22 META_AI_CHAT_SHORTCUT_AI_STUDIO value
     * @property {number} UGC_CHAT_SHORTCUT_AI_STUDIO=23 UGC_CHAT_SHORTCUT_AI_STUDIO value
     * @property {number} NEW_CHAT_AI_STUDIO=24 NEW_CHAT_AI_STUDIO value
     * @property {number} AIVOICE_FAVICON_CALL_HISTORY=25 AIVOICE_FAVICON_CALL_HISTORY value
     * @property {number} ASK_META_AI_CONTEXT_MENU=26 ASK_META_AI_CONTEXT_MENU value
     * @property {number} ASK_META_AI_CONTEXT_MENU_1ON1=27 ASK_META_AI_CONTEXT_MENU_1ON1 value
     * @property {number} ASK_META_AI_CONTEXT_MENU_GROUP=28 ASK_META_AI_CONTEXT_MENU_GROUP value
     * @property {number} INVOKE_META_AI_1ON1=29 INVOKE_META_AI_1ON1 value
     * @property {number} INVOKE_META_AI_GROUP=30 INVOKE_META_AI_GROUP value
     * @property {number} META_AI_FORWARD=31 META_AI_FORWARD value
     */
    BotMetadata.BotMetricsEntryPoint = (function() {
        var valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[1] = "FAVICON"] = 1;
        values[valuesById[2] = "CHATLIST"] = 2;
        values[valuesById[3] = "AISEARCH_NULL_STATE_PAPER_PLANE"] = 3;
        values[valuesById[4] = "AISEARCH_NULL_STATE_SUGGESTION"] = 4;
        values[valuesById[5] = "AISEARCH_TYPE_AHEAD_SUGGESTION"] = 5;
        values[valuesById[6] = "AISEARCH_TYPE_AHEAD_PAPER_PLANE"] = 6;
        values[valuesById[7] = "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST"] = 7;
        values[valuesById[8] = "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES"] = 8;
        values[valuesById[9] = "AIVOICE_SEARCH_BAR"] = 9;
        values[valuesById[10] = "AIVOICE_FAVICON"] = 10;
        values[valuesById[11] = "AISTUDIO"] = 11;
        values[valuesById[12] = "DEEPLINK"] = 12;
        values[valuesById[13] = "NOTIFICATION"] = 13;
        values[valuesById[14] = "PROFILE_MESSAGE_BUTTON"] = 14;
        values[valuesById[15] = "FORWARD"] = 15;
        values[valuesById[16] = "APP_SHORTCUT"] = 16;
        values[valuesById[17] = "FF_FAMILY"] = 17;
        values[valuesById[18] = "AI_TAB"] = 18;
        values[valuesById[19] = "AI_HOME"] = 19;
        values[valuesById[20] = "AI_DEEPLINK_IMMERSIVE"] = 20;
        values[valuesById[21] = "AI_DEEPLINK"] = 21;
        values[valuesById[22] = "META_AI_CHAT_SHORTCUT_AI_STUDIO"] = 22;
        values[valuesById[23] = "UGC_CHAT_SHORTCUT_AI_STUDIO"] = 23;
        values[valuesById[24] = "NEW_CHAT_AI_STUDIO"] = 24;
        values[valuesById[25] = "AIVOICE_FAVICON_CALL_HISTORY"] = 25;
        values[valuesById[26] = "ASK_META_AI_CONTEXT_MENU"] = 26;
        values[valuesById[27] = "ASK_META_AI_CONTEXT_MENU_1ON1"] = 27;
        values[valuesById[28] = "ASK_META_AI_CONTEXT_MENU_GROUP"] = 28;
        values[valuesById[29] = "INVOKE_META_AI_1ON1"] = 29;
        values[valuesById[30] = "INVOKE_META_AI_GROUP"] = 30;
        values[valuesById[31] = "META_AI_FORWARD"] = 31;
        return values;
    })();

    return BotMetadata;
})();

$root.Protocol = (function() {

    /**
     * Namespace Protocol.
     * @exports Protocol
     * @namespace
     */
    var Protocol = {};

    Protocol.ACP2Setting = (function() {

        /**
         * Properties of a ACP2Setting.
         * @typedef {Object} Protocol.ACP2Setting.$Properties
         * @property {boolean|null} [enabled] ACP2Setting enabled
         * @property {Protocol.LimitSharing.TriggerType|null} [trigger] ACP2Setting trigger
         * @property {number|Long|null} [settingTimestamp] ACP2Setting settingTimestamp
         * @property {boolean|null} [initiatedByMe] ACP2Setting initiatedByMe
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ACP2Setting.
         * @memberof Protocol
         * @interface IACP2Setting
         * @augments Protocol.ACP2Setting.$Properties
         * @deprecated Use Protocol.ACP2Setting.$Properties instead.
         */

        /**
         * Shape of a ACP2Setting.
         * @typedef {Protocol.ACP2Setting.$Properties} Protocol.ACP2Setting.$Shape
         */

        /**
         * Constructs a new ACP2Setting.
         * @memberof Protocol
         * @classdesc Represents a ACP2Setting.
         * @constructor
         * @param {Protocol.ACP2Setting.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var ACP2Setting = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ACP2Setting enabled.
         * @member {boolean|null|undefined} enabled
         * @memberof Protocol.ACP2Setting
         * @instance
         */
        ACP2Setting.prototype.enabled = null;

        /**
         * ACP2Setting trigger.
         * @member {Protocol.LimitSharing.TriggerType|null|undefined} trigger
         * @memberof Protocol.ACP2Setting
         * @instance
         */
        ACP2Setting.prototype.trigger = null;

        /**
         * ACP2Setting settingTimestamp.
         * @member {number|Long|null|undefined} settingTimestamp
         * @memberof Protocol.ACP2Setting
         * @instance
         */
        ACP2Setting.prototype.settingTimestamp = null;

        /**
         * ACP2Setting initiatedByMe.
         * @member {boolean|null|undefined} initiatedByMe
         * @memberof Protocol.ACP2Setting
         * @instance
         */
        ACP2Setting.prototype.initiatedByMe = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ACP2Setting.prototype, "_enabled", {
            get: $util.oneOfGetter($oneOfFields = ["enabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ACP2Setting.prototype, "_trigger", {
            get: $util.oneOfGetter($oneOfFields = ["trigger"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ACP2Setting.prototype, "_settingTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["settingTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ACP2Setting.prototype, "_initiatedByMe", {
            get: $util.oneOfGetter($oneOfFields = ["initiatedByMe"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ACP2Setting instance using the specified properties.
         * @function create
         * @memberof Protocol.ACP2Setting
         * @static
         * @param {Protocol.ACP2Setting.$Properties=} [properties] Properties to set
         * @returns {Protocol.ACP2Setting} ACP2Setting instance
         * @type {{
         *   (properties: Protocol.ACP2Setting.$Shape): Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape;
         *   (properties?: Protocol.ACP2Setting.$Properties): Protocol.ACP2Setting;
         * }}
         */
        ACP2Setting.create = function(properties) {
            return new ACP2Setting(properties);
        };

        /**
         * Encodes the specified ACP2Setting message. Does not implicitly {@link Protocol.ACP2Setting.verify|verify} messages.
         * @function encode
         * @memberof Protocol.ACP2Setting
         * @static
         * @param {Protocol.ACP2Setting.$Properties} message ACP2Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ACP2Setting.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.enabled != null && $Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
            if (message.trigger != null && $Object.hasOwnProperty.call(message, "trigger"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.trigger);
            if (message.settingTimestamp != null && $Object.hasOwnProperty.call(message, "settingTimestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.settingTimestamp);
            if (message.initiatedByMe != null && $Object.hasOwnProperty.call(message, "initiatedByMe"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.initiatedByMe);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ACP2Setting message, length delimited. Does not implicitly {@link Protocol.ACP2Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.ACP2Setting
         * @static
         * @param {Protocol.ACP2Setting.$Properties} message ACP2Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ACP2Setting.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ACP2Setting message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.ACP2Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape} ACP2Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ACP2Setting.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.Protocol.ACP2Setting();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.enabled = reader.bool();
                        message._enabled = "enabled";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.trigger = reader.int32();
                        message._trigger = "trigger";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.settingTimestamp = reader.int64();
                        message._settingTimestamp = "settingTimestamp";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.initiatedByMe = reader.bool();
                        message._initiatedByMe = "initiatedByMe";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ACP2Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.ACP2Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.ACP2Setting & Protocol.ACP2Setting.$Shape} ACP2Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ACP2Setting.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a ACP2Setting message.
         * @function verify
         * @memberof Protocol.ACP2Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ACP2Setting.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.enabled != null && $Object.hasOwnProperty.call(message, "enabled")) {
                properties._enabled = 1;
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            }
            if (message.trigger != null && $Object.hasOwnProperty.call(message, "trigger")) {
                properties._trigger = 1;
                if (typeof message.trigger !== "number" || (message.trigger | 0) !== message.trigger)
                    return "trigger: enum value expected";
            }
            if (message.settingTimestamp != null && $Object.hasOwnProperty.call(message, "settingTimestamp")) {
                properties._settingTimestamp = 1;
                if (!$util.isInteger(message.settingTimestamp) && !(message.settingTimestamp && $util.isInteger(message.settingTimestamp.low) && $util.isInteger(message.settingTimestamp.high)))
                    return "settingTimestamp: integer|Long expected";
            }
            if (message.initiatedByMe != null && $Object.hasOwnProperty.call(message, "initiatedByMe")) {
                properties._initiatedByMe = 1;
                if (typeof message.initiatedByMe !== "boolean")
                    return "initiatedByMe: boolean expected";
            }
            return null;
        };

        /**
         * Creates a ACP2Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.ACP2Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.ACP2Setting} ACP2Setting
         */
        ACP2Setting.fromObject = function (object, _depth) {
            if (object instanceof $root.Protocol.ACP2Setting)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".Protocol.ACP2Setting: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.Protocol.ACP2Setting();
            if (object.enabled != null)
                message.enabled = $Boolean(object.enabled);
            switch (object.trigger) {
            case "UNKNOWN":
            case 0:
                message.trigger = 0;
                break;
            case "CHAT_SETTING":
            case 1:
                message.trigger = 1;
                break;
            case "BIZ_SUPPORTS_FB_HOSTING":
            case 2:
                message.trigger = 2;
                break;
            case "UNKNOWN_GROUP":
            case 3:
                message.trigger = 3;
                break;
            default:
                if (typeof object.trigger === "number" && (object.trigger | 0) === object.trigger)
                    message.trigger = object.trigger;
            }
            if (object.settingTimestamp != null)
                if ($util.Long)
                    message.settingTimestamp = $util.Long.fromValue(object.settingTimestamp, false);
                else if (typeof object.settingTimestamp === "string")
                    message.settingTimestamp = $parseInt(object.settingTimestamp, 10);
                else if (typeof object.settingTimestamp === "number")
                    message.settingTimestamp = object.settingTimestamp;
                else if (typeof object.settingTimestamp === "object")
                    message.settingTimestamp = new $util.LongBits(object.settingTimestamp.low >>> 0, object.settingTimestamp.high >>> 0).toNumber();
            if (object.initiatedByMe != null)
                message.initiatedByMe = $Boolean(object.initiatedByMe);
            return message;
        };

        /**
         * Creates a plain object from a ACP2Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.ACP2Setting
         * @static
         * @param {Protocol.ACP2Setting} message ACP2Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ACP2Setting.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.enabled != null && $Object.hasOwnProperty.call(message, "enabled"))
                object.enabled = message.enabled;
            if (message.trigger != null && $Object.hasOwnProperty.call(message, "trigger"))
                object.trigger = options.enums === $String ? $root.Protocol.LimitSharing.TriggerType[message.trigger] === $undefined ? message.trigger : $root.Protocol.LimitSharing.TriggerType[message.trigger] : message.trigger;
            if (message.settingTimestamp != null && $Object.hasOwnProperty.call(message, "settingTimestamp"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.settingTimestamp = typeof message.settingTimestamp === "number" ? $BigInt(message.settingTimestamp) : $util.Long.fromBits(message.settingTimestamp.low >>> 0, message.settingTimestamp.high >>> 0, false).toBigInt();
                else if (typeof message.settingTimestamp === "number")
                    object.settingTimestamp = options.longs === $String ? $String(message.settingTimestamp) : message.settingTimestamp;
                else
                    object.settingTimestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.settingTimestamp) : options.longs === $Number ? new $util.LongBits(message.settingTimestamp.low >>> 0, message.settingTimestamp.high >>> 0).toNumber() : message.settingTimestamp;
            if (message.initiatedByMe != null && $Object.hasOwnProperty.call(message, "initiatedByMe"))
                object.initiatedByMe = message.initiatedByMe;
            return object;
        };

        /**
         * Converts this ACP2Setting to JSON.
         * @function toJSON
         * @memberof Protocol.ACP2Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ACP2Setting.prototype.toJSON = function() {
            return ACP2Setting.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ACP2Setting
         * @function getTypeUrl
         * @memberof Protocol.ACP2Setting
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ACP2Setting.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Protocol.ACP2Setting";
        };

        return ACP2Setting;
    })();

    Protocol.LimitSharing = (function() {

        /**
         * Properties of a LimitSharing.
         * @typedef {Object} Protocol.LimitSharing.$Properties
         * @property {boolean|null} [sharingLimited] LimitSharing sharingLimited
         * @property {Protocol.LimitSharing.TriggerType|null} [trigger] LimitSharing trigger
         * @property {number|Long|null} [limitSharingSettingTimestamp] LimitSharing limitSharingSettingTimestamp
         * @property {boolean|null} [initiatedByMe] LimitSharing initiatedByMe
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a LimitSharing.
         * @memberof Protocol
         * @interface ILimitSharing
         * @augments Protocol.LimitSharing.$Properties
         * @deprecated Use Protocol.LimitSharing.$Properties instead.
         */

        /**
         * Shape of a LimitSharing.
         * @typedef {Protocol.LimitSharing.$Properties} Protocol.LimitSharing.$Shape
         */

        /**
         * Constructs a new LimitSharing.
         * @memberof Protocol
         * @classdesc Represents a LimitSharing.
         * @constructor
         * @param {Protocol.LimitSharing.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var LimitSharing = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * LimitSharing sharingLimited.
         * @member {boolean|null|undefined} sharingLimited
         * @memberof Protocol.LimitSharing
         * @instance
         */
        LimitSharing.prototype.sharingLimited = null;

        /**
         * LimitSharing trigger.
         * @member {Protocol.LimitSharing.TriggerType|null|undefined} trigger
         * @memberof Protocol.LimitSharing
         * @instance
         */
        LimitSharing.prototype.trigger = null;

        /**
         * LimitSharing limitSharingSettingTimestamp.
         * @member {number|Long|null|undefined} limitSharingSettingTimestamp
         * @memberof Protocol.LimitSharing
         * @instance
         */
        LimitSharing.prototype.limitSharingSettingTimestamp = null;

        /**
         * LimitSharing initiatedByMe.
         * @member {boolean|null|undefined} initiatedByMe
         * @memberof Protocol.LimitSharing
         * @instance
         */
        LimitSharing.prototype.initiatedByMe = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(LimitSharing.prototype, "_sharingLimited", {
            get: $util.oneOfGetter($oneOfFields = ["sharingLimited"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(LimitSharing.prototype, "_trigger", {
            get: $util.oneOfGetter($oneOfFields = ["trigger"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(LimitSharing.prototype, "_limitSharingSettingTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["limitSharingSettingTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(LimitSharing.prototype, "_initiatedByMe", {
            get: $util.oneOfGetter($oneOfFields = ["initiatedByMe"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LimitSharing instance using the specified properties.
         * @function create
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Protocol.LimitSharing.$Properties=} [properties] Properties to set
         * @returns {Protocol.LimitSharing} LimitSharing instance
         * @type {{
         *   (properties: Protocol.LimitSharing.$Shape): Protocol.LimitSharing & Protocol.LimitSharing.$Shape;
         *   (properties?: Protocol.LimitSharing.$Properties): Protocol.LimitSharing;
         * }}
         */
        LimitSharing.create = function(properties) {
            return new LimitSharing(properties);
        };

        /**
         * Encodes the specified LimitSharing message. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
         * @function encode
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Protocol.LimitSharing.$Properties} message LimitSharing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LimitSharing.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.sharingLimited != null && $Object.hasOwnProperty.call(message, "sharingLimited"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.sharingLimited);
            if (message.trigger != null && $Object.hasOwnProperty.call(message, "trigger"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.trigger);
            if (message.limitSharingSettingTimestamp != null && $Object.hasOwnProperty.call(message, "limitSharingSettingTimestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.limitSharingSettingTimestamp);
            if (message.initiatedByMe != null && $Object.hasOwnProperty.call(message, "initiatedByMe"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.initiatedByMe);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified LimitSharing message, length delimited. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Protocol.LimitSharing.$Properties} message LimitSharing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LimitSharing.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a LimitSharing message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.LimitSharing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.LimitSharing & Protocol.LimitSharing.$Shape} LimitSharing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LimitSharing.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.Protocol.LimitSharing();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.sharingLimited = reader.bool();
                        message._sharingLimited = "sharingLimited";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.trigger = reader.int32();
                        message._trigger = "trigger";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.limitSharingSettingTimestamp = reader.int64();
                        message._limitSharingSettingTimestamp = "limitSharingSettingTimestamp";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.initiatedByMe = reader.bool();
                        message._initiatedByMe = "initiatedByMe";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a LimitSharing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.LimitSharing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.LimitSharing & Protocol.LimitSharing.$Shape} LimitSharing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LimitSharing.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a LimitSharing message.
         * @function verify
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LimitSharing.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.sharingLimited != null && $Object.hasOwnProperty.call(message, "sharingLimited")) {
                properties._sharingLimited = 1;
                if (typeof message.sharingLimited !== "boolean")
                    return "sharingLimited: boolean expected";
            }
            if (message.trigger != null && $Object.hasOwnProperty.call(message, "trigger")) {
                properties._trigger = 1;
                if (typeof message.trigger !== "number" || (message.trigger | 0) !== message.trigger)
                    return "trigger: enum value expected";
            }
            if (message.limitSharingSettingTimestamp != null && $Object.hasOwnProperty.call(message, "limitSharingSettingTimestamp")) {
                properties._limitSharingSettingTimestamp = 1;
                if (!$util.isInteger(message.limitSharingSettingTimestamp) && !(message.limitSharingSettingTimestamp && $util.isInteger(message.limitSharingSettingTimestamp.low) && $util.isInteger(message.limitSharingSettingTimestamp.high)))
                    return "limitSharingSettingTimestamp: integer|Long expected";
            }
            if (message.initiatedByMe != null && $Object.hasOwnProperty.call(message, "initiatedByMe")) {
                properties._initiatedByMe = 1;
                if (typeof message.initiatedByMe !== "boolean")
                    return "initiatedByMe: boolean expected";
            }
            return null;
        };

        /**
         * Creates a LimitSharing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.LimitSharing} LimitSharing
         */
        LimitSharing.fromObject = function (object, _depth) {
            if (object instanceof $root.Protocol.LimitSharing)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".Protocol.LimitSharing: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.Protocol.LimitSharing();
            if (object.sharingLimited != null)
                message.sharingLimited = $Boolean(object.sharingLimited);
            switch (object.trigger) {
            case "UNKNOWN":
            case 0:
                message.trigger = 0;
                break;
            case "CHAT_SETTING":
            case 1:
                message.trigger = 1;
                break;
            case "BIZ_SUPPORTS_FB_HOSTING":
            case 2:
                message.trigger = 2;
                break;
            case "UNKNOWN_GROUP":
            case 3:
                message.trigger = 3;
                break;
            default:
                if (typeof object.trigger === "number" && (object.trigger | 0) === object.trigger)
                    message.trigger = object.trigger;
            }
            if (object.limitSharingSettingTimestamp != null)
                if ($util.Long)
                    message.limitSharingSettingTimestamp = $util.Long.fromValue(object.limitSharingSettingTimestamp, false);
                else if (typeof object.limitSharingSettingTimestamp === "string")
                    message.limitSharingSettingTimestamp = $parseInt(object.limitSharingSettingTimestamp, 10);
                else if (typeof object.limitSharingSettingTimestamp === "number")
                    message.limitSharingSettingTimestamp = object.limitSharingSettingTimestamp;
                else if (typeof object.limitSharingSettingTimestamp === "object")
                    message.limitSharingSettingTimestamp = new $util.LongBits(object.limitSharingSettingTimestamp.low >>> 0, object.limitSharingSettingTimestamp.high >>> 0).toNumber();
            if (object.initiatedByMe != null)
                message.initiatedByMe = $Boolean(object.initiatedByMe);
            return message;
        };

        /**
         * Creates a plain object from a LimitSharing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Protocol.LimitSharing} message LimitSharing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LimitSharing.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.sharingLimited != null && $Object.hasOwnProperty.call(message, "sharingLimited"))
                object.sharingLimited = message.sharingLimited;
            if (message.trigger != null && $Object.hasOwnProperty.call(message, "trigger"))
                object.trigger = options.enums === $String ? $root.Protocol.LimitSharing.TriggerType[message.trigger] === $undefined ? message.trigger : $root.Protocol.LimitSharing.TriggerType[message.trigger] : message.trigger;
            if (message.limitSharingSettingTimestamp != null && $Object.hasOwnProperty.call(message, "limitSharingSettingTimestamp"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.limitSharingSettingTimestamp = typeof message.limitSharingSettingTimestamp === "number" ? $BigInt(message.limitSharingSettingTimestamp) : $util.Long.fromBits(message.limitSharingSettingTimestamp.low >>> 0, message.limitSharingSettingTimestamp.high >>> 0, false).toBigInt();
                else if (typeof message.limitSharingSettingTimestamp === "number")
                    object.limitSharingSettingTimestamp = options.longs === $String ? $String(message.limitSharingSettingTimestamp) : message.limitSharingSettingTimestamp;
                else
                    object.limitSharingSettingTimestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.limitSharingSettingTimestamp) : options.longs === $Number ? new $util.LongBits(message.limitSharingSettingTimestamp.low >>> 0, message.limitSharingSettingTimestamp.high >>> 0).toNumber() : message.limitSharingSettingTimestamp;
            if (message.initiatedByMe != null && $Object.hasOwnProperty.call(message, "initiatedByMe"))
                object.initiatedByMe = message.initiatedByMe;
            return object;
        };

        /**
         * Converts this LimitSharing to JSON.
         * @function toJSON
         * @memberof Protocol.LimitSharing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LimitSharing.prototype.toJSON = function() {
            return LimitSharing.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for LimitSharing
         * @function getTypeUrl
         * @memberof Protocol.LimitSharing
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        LimitSharing.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Protocol.LimitSharing";
        };

        /**
         * TriggerType enum.
         * @name Protocol.LimitSharing.TriggerType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} CHAT_SETTING=1 CHAT_SETTING value
         * @property {number} BIZ_SUPPORTS_FB_HOSTING=2 BIZ_SUPPORTS_FB_HOSTING value
         * @property {number} UNKNOWN_GROUP=3 UNKNOWN_GROUP value
         */
        LimitSharing.TriggerType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHAT_SETTING"] = 1;
            values[valuesById[2] = "BIZ_SUPPORTS_FB_HOSTING"] = 2;
            values[valuesById[3] = "UNKNOWN_GROUP"] = 3;
            return values;
        })();

        return LimitSharing;
    })();

    Protocol.MessageKey = (function() {

        /**
         * Properties of a MessageKey.
         * @typedef {Object} Protocol.MessageKey.$Properties
         * @property {string|null} [remoteJid] MessageKey remoteJid
         * @property {boolean|null} [fromMe] MessageKey fromMe
         * @property {string|null} [id] MessageKey id
         * @property {string|null} [participant] MessageKey participant
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a MessageKey.
         * @memberof Protocol
         * @interface IMessageKey
         * @augments Protocol.MessageKey.$Properties
         * @deprecated Use Protocol.MessageKey.$Properties instead.
         */

        /**
         * Shape of a MessageKey.
         * @typedef {Protocol.MessageKey.$Properties} Protocol.MessageKey.$Shape
         */

        /**
         * Constructs a new MessageKey.
         * @memberof Protocol
         * @classdesc Represents a MessageKey.
         * @constructor
         * @param {Protocol.MessageKey.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var MessageKey = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * MessageKey remoteJid.
         * @member {string|null|undefined} remoteJid
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.remoteJid = null;

        /**
         * MessageKey fromMe.
         * @member {boolean|null|undefined} fromMe
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.fromMe = null;

        /**
         * MessageKey id.
         * @member {string|null|undefined} id
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.id = null;

        /**
         * MessageKey participant.
         * @member {string|null|undefined} participant
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.participant = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MessageKey.prototype, "_remoteJid", {
            get: $util.oneOfGetter($oneOfFields = ["remoteJid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MessageKey.prototype, "_fromMe", {
            get: $util.oneOfGetter($oneOfFields = ["fromMe"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MessageKey.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MessageKey.prototype, "_participant", {
            get: $util.oneOfGetter($oneOfFields = ["participant"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MessageKey instance using the specified properties.
         * @function create
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.MessageKey.$Properties=} [properties] Properties to set
         * @returns {Protocol.MessageKey} MessageKey instance
         * @type {{
         *   (properties: Protocol.MessageKey.$Shape): Protocol.MessageKey & Protocol.MessageKey.$Shape;
         *   (properties?: Protocol.MessageKey.$Properties): Protocol.MessageKey;
         * }}
         */
        MessageKey.create = function(properties) {
            return new MessageKey(properties);
        };

        /**
         * Encodes the specified MessageKey message. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @function encode
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.MessageKey.$Properties} message MessageKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageKey.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.remoteJid != null && $Object.hasOwnProperty.call(message, "remoteJid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.remoteJid);
            if (message.fromMe != null && $Object.hasOwnProperty.call(message, "fromMe"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fromMe);
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            if (message.participant != null && $Object.hasOwnProperty.call(message, "participant"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.participant);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.MessageKey.$Properties} message MessageKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageKey.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a MessageKey message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.MessageKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.MessageKey & Protocol.MessageKey.$Shape} MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageKey.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.Protocol.MessageKey();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.remoteJid = reader.stringVerify();
                        message._remoteJid = "remoteJid";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.fromMe = reader.bool();
                        message._fromMe = "fromMe";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.id = reader.stringVerify();
                        message._id = "id";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.participant = reader.stringVerify();
                        message._participant = "participant";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a MessageKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.MessageKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.MessageKey & Protocol.MessageKey.$Shape} MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageKey.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a MessageKey message.
         * @function verify
         * @memberof Protocol.MessageKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageKey.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.remoteJid != null && $Object.hasOwnProperty.call(message, "remoteJid")) {
                properties._remoteJid = 1;
                if (!$util.isString(message.remoteJid))
                    return "remoteJid: string expected";
            }
            if (message.fromMe != null && $Object.hasOwnProperty.call(message, "fromMe")) {
                properties._fromMe = 1;
                if (typeof message.fromMe !== "boolean")
                    return "fromMe: boolean expected";
            }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id")) {
                properties._id = 1;
                if (!$util.isString(message.id))
                    return "id: string expected";
            }
            if (message.participant != null && $Object.hasOwnProperty.call(message, "participant")) {
                properties._participant = 1;
                if (!$util.isString(message.participant))
                    return "participant: string expected";
            }
            return null;
        };

        /**
         * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.MessageKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.MessageKey} MessageKey
         */
        MessageKey.fromObject = function (object, _depth) {
            if (object instanceof $root.Protocol.MessageKey)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".Protocol.MessageKey: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.Protocol.MessageKey();
            if (object.remoteJid != null)
                message.remoteJid = $String(object.remoteJid);
            if (object.fromMe != null)
                message.fromMe = $Boolean(object.fromMe);
            if (object.id != null)
                message.id = $String(object.id);
            if (object.participant != null)
                message.participant = $String(object.participant);
            return message;
        };

        /**
         * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.MessageKey} message MessageKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageKey.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.remoteJid != null && $Object.hasOwnProperty.call(message, "remoteJid"))
                object.remoteJid = message.remoteJid;
            if (message.fromMe != null && $Object.hasOwnProperty.call(message, "fromMe"))
                object.fromMe = message.fromMe;
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.participant != null && $Object.hasOwnProperty.call(message, "participant"))
                object.participant = message.participant;
            return object;
        };

        /**
         * Converts this MessageKey to JSON.
         * @function toJSON
         * @memberof Protocol.MessageKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageKey.prototype.toJSON = function() {
            return MessageKey.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for MessageKey
         * @function getTypeUrl
         * @memberof Protocol.MessageKey
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        MessageKey.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Protocol.MessageKey";
        };

        return MessageKey;
    })();

    return Protocol;
})();

module.exports = $root;

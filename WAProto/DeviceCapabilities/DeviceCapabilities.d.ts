import * as $protobuf from "protobufjs";
import Long = require("long");

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

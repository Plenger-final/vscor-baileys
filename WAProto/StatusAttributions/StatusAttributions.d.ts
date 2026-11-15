import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace StatusAttributions. */
export namespace StatusAttributions {

    /**
     * Properties of a StatusAttribution.
     * @deprecated Use StatusAttributions.StatusAttribution.$Properties instead.
     */
    interface IStatusAttribution extends StatusAttributions.StatusAttribution.$Properties {
    }

    /** Represents a StatusAttribution. */
    class StatusAttribution {

        /**
         * Constructs a new StatusAttribution.
         * @param [properties] Properties to set
         */
        constructor(properties?: StatusAttributions.StatusAttribution.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** StatusAttribution type. */
        type?: (StatusAttributions.StatusAttribution.Type|null);

        /** StatusAttribution actionUrl. */
        actionUrl?: (string|null);

        /** StatusAttribution statusReshare. */
        statusReshare?: (StatusAttributions.StatusAttribution.StatusReshare.$Properties|null);

        /** StatusAttribution externalShare. */
        externalShare?: (StatusAttributions.StatusAttribution.ExternalShare.$Properties|null);

        /** StatusAttribution music. */
        music?: (StatusAttributions.StatusAttribution.Music.$Properties|null);

        /** StatusAttribution groupStatus. */
        groupStatus?: (StatusAttributions.StatusAttribution.GroupStatus.$Properties|null);

        /** StatusAttribution rlAttribution. */
        rlAttribution?: (StatusAttributions.StatusAttribution.RLAttribution.$Properties|null);

        /** StatusAttribution aiCreatedAttribution. */
        aiCreatedAttribution?: (StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties|null);

        /** StatusAttribution statusTemplate. */
        statusTemplate?: (StatusAttributions.StatusAttribution.StatusTemplate.$Properties|null);

        /** StatusAttribution attributionData. */
        attributionData?: ("statusReshare"|"externalShare"|"music"|"groupStatus"|"rlAttribution"|"aiCreatedAttribution"|"statusTemplate");

        /**
         * Creates a new StatusAttribution instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatusAttribution instance
         */
        static create(properties: StatusAttributions.StatusAttribution.$Shape): StatusAttributions.StatusAttribution & StatusAttributions.StatusAttribution.$Shape;
        static create(properties?: StatusAttributions.StatusAttribution.$Properties): StatusAttributions.StatusAttribution;

        /**
         * Encodes the specified StatusAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
         * @param message StatusAttribution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: StatusAttributions.StatusAttribution.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatusAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
         * @param message StatusAttribution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: StatusAttributions.StatusAttribution.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatusAttribution message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {StatusAttributions.StatusAttribution & StatusAttributions.StatusAttribution.$Shape} StatusAttribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution & StatusAttributions.StatusAttribution.$Shape;

        /**
         * Decodes a StatusAttribution message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {StatusAttributions.StatusAttribution & StatusAttributions.StatusAttribution.$Shape} StatusAttribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution & StatusAttributions.StatusAttribution.$Shape;

        /**
         * Verifies a StatusAttribution message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatusAttribution message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatusAttribution
         */
        static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution;

        /**
         * Creates a plain object from a StatusAttribution message. Also converts values to other types if specified.
         * @param message StatusAttribution
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: StatusAttributions.StatusAttribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatusAttribution to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for StatusAttribution
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StatusAttribution {

        /** Properties of a StatusAttribution. */
        interface $Properties {

            /** StatusAttribution type */
            type?: (StatusAttributions.StatusAttribution.Type|null);

            /** StatusAttribution actionUrl */
            actionUrl?: (string|null);

            /** StatusAttribution statusReshare */
            statusReshare?: (StatusAttributions.StatusAttribution.StatusReshare.$Properties|null);

            /** StatusAttribution externalShare */
            externalShare?: (StatusAttributions.StatusAttribution.ExternalShare.$Properties|null);

            /** StatusAttribution music */
            music?: (StatusAttributions.StatusAttribution.Music.$Properties|null);

            /** StatusAttribution groupStatus */
            groupStatus?: (StatusAttributions.StatusAttribution.GroupStatus.$Properties|null);

            /** StatusAttribution rlAttribution */
            rlAttribution?: (StatusAttributions.StatusAttribution.RLAttribution.$Properties|null);

            /** StatusAttribution aiCreatedAttribution */
            aiCreatedAttribution?: (StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties|null);

            /** StatusAttribution statusTemplate */
            statusTemplate?: (StatusAttributions.StatusAttribution.StatusTemplate.$Properties|null);

            /** StatusAttribution attributionData */
            attributionData?: ("statusReshare"|"externalShare"|"music"|"groupStatus"|"rlAttribution"|"aiCreatedAttribution"|"statusTemplate");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a StatusAttribution. */
        type $Shape = {
          type?: StatusAttributions.StatusAttribution.Type|null;
          actionUrl?: string|null;
          statusReshare?: StatusAttributions.StatusAttribution.StatusReshare.$Shape|null;
          externalShare?: StatusAttributions.StatusAttribution.ExternalShare.$Shape|null;
          music?: StatusAttributions.StatusAttribution.Music.$Shape|null;
          groupStatus?: StatusAttributions.StatusAttribution.GroupStatus.$Shape|null;
          rlAttribution?: StatusAttributions.StatusAttribution.RLAttribution.$Shape|null;
          aiCreatedAttribution?: StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape|null;
          statusTemplate?: StatusAttributions.StatusAttribution.StatusTemplate.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ attributionData?: undefined; statusReshare?: null; externalShare?: null; music?: null; groupStatus?: null; rlAttribution?: null; aiCreatedAttribution?: null; statusTemplate?: null }|{ attributionData?: "statusReshare"; statusReshare: StatusAttributions.StatusAttribution.StatusReshare.$Shape; externalShare?: null; music?: null; groupStatus?: null; rlAttribution?: null; aiCreatedAttribution?: null; statusTemplate?: null }|{ attributionData?: "externalShare"; statusReshare?: null; externalShare: StatusAttributions.StatusAttribution.ExternalShare.$Shape; music?: null; groupStatus?: null; rlAttribution?: null; aiCreatedAttribution?: null; statusTemplate?: null }|{ attributionData?: "music"; statusReshare?: null; externalShare?: null; music: StatusAttributions.StatusAttribution.Music.$Shape; groupStatus?: null; rlAttribution?: null; aiCreatedAttribution?: null; statusTemplate?: null }|{ attributionData?: "groupStatus"; statusReshare?: null; externalShare?: null; music?: null; groupStatus: StatusAttributions.StatusAttribution.GroupStatus.$Shape; rlAttribution?: null; aiCreatedAttribution?: null; statusTemplate?: null }|{ attributionData?: "rlAttribution"; statusReshare?: null; externalShare?: null; music?: null; groupStatus?: null; rlAttribution: StatusAttributions.StatusAttribution.RLAttribution.$Shape; aiCreatedAttribution?: null; statusTemplate?: null }|{ attributionData?: "aiCreatedAttribution"; statusReshare?: null; externalShare?: null; music?: null; groupStatus?: null; rlAttribution?: null; aiCreatedAttribution: StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape; statusTemplate?: null }|{ attributionData?: "statusTemplate"; statusReshare?: null; externalShare?: null; music?: null; groupStatus?: null; rlAttribution?: null; aiCreatedAttribution?: null; statusTemplate: StatusAttributions.StatusAttribution.StatusTemplate.$Shape })
        );

        /**
         * Properties of an AiCreatedAttribution.
         * @deprecated Use StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties instead.
         */
        interface IAiCreatedAttribution extends StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties {
        }

        /** Represents an AiCreatedAttribution. */
        class AiCreatedAttribution {

            /**
             * Constructs a new AiCreatedAttribution.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AiCreatedAttribution source. */
            source?: (StatusAttributions.StatusAttribution.AiCreatedAttribution.Source|null);

            /**
             * Creates a new AiCreatedAttribution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AiCreatedAttribution instance
             */
            static create(properties: StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape): StatusAttributions.StatusAttribution.AiCreatedAttribution & StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape;
            static create(properties?: StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties): StatusAttributions.StatusAttribution.AiCreatedAttribution;

            /**
             * Encodes the specified AiCreatedAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.AiCreatedAttribution.verify|verify} messages.
             * @param message AiCreatedAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AiCreatedAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.AiCreatedAttribution.verify|verify} messages.
             * @param message AiCreatedAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AiCreatedAttribution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.AiCreatedAttribution & StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape} AiCreatedAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.AiCreatedAttribution & StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape;

            /**
             * Decodes an AiCreatedAttribution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.AiCreatedAttribution & StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape} AiCreatedAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.AiCreatedAttribution & StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape;

            /**
             * Verifies an AiCreatedAttribution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AiCreatedAttribution message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AiCreatedAttribution
             */
            static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.AiCreatedAttribution;

            /**
             * Creates a plain object from an AiCreatedAttribution message. Also converts values to other types if specified.
             * @param message AiCreatedAttribution
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: StatusAttributions.StatusAttribution.AiCreatedAttribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AiCreatedAttribution to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AiCreatedAttribution
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AiCreatedAttribution {

            /** Properties of an AiCreatedAttribution. */
            interface $Properties {

                /** AiCreatedAttribution source */
                source?: (StatusAttributions.StatusAttribution.AiCreatedAttribution.Source|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AiCreatedAttribution. */
            type $Shape = StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties;

            /** Source enum. */
            enum Source {

                /** UNKNOWN value */
                UNKNOWN = 0,

                /** STATUS_MIMICRY value */
                STATUS_MIMICRY = 1
            }
        }

        /**
         * Properties of an ExternalShare.
         * @deprecated Use StatusAttributions.StatusAttribution.ExternalShare.$Properties instead.
         */
        interface IExternalShare extends StatusAttributions.StatusAttribution.ExternalShare.$Properties {
        }

        /** Represents an ExternalShare. */
        class ExternalShare {

            /**
             * Constructs a new ExternalShare.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.ExternalShare.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ExternalShare actionUrl. */
            actionUrl?: (string|null);

            /** ExternalShare source. */
            source?: (StatusAttributions.StatusAttribution.ExternalShare.Source|null);

            /** ExternalShare duration. */
            duration?: (number|null);

            /** ExternalShare actionFallbackUrl. */
            actionFallbackUrl?: (string|null);

            /**
             * Creates a new ExternalShare instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExternalShare instance
             */
            static create(properties: StatusAttributions.StatusAttribution.ExternalShare.$Shape): StatusAttributions.StatusAttribution.ExternalShare & StatusAttributions.StatusAttribution.ExternalShare.$Shape;
            static create(properties?: StatusAttributions.StatusAttribution.ExternalShare.$Properties): StatusAttributions.StatusAttribution.ExternalShare;

            /**
             * Encodes the specified ExternalShare message. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
             * @param message ExternalShare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: StatusAttributions.StatusAttribution.ExternalShare.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExternalShare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
             * @param message ExternalShare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: StatusAttributions.StatusAttribution.ExternalShare.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExternalShare message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.ExternalShare & StatusAttributions.StatusAttribution.ExternalShare.$Shape} ExternalShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.ExternalShare & StatusAttributions.StatusAttribution.ExternalShare.$Shape;

            /**
             * Decodes an ExternalShare message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.ExternalShare & StatusAttributions.StatusAttribution.ExternalShare.$Shape} ExternalShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.ExternalShare & StatusAttributions.StatusAttribution.ExternalShare.$Shape;

            /**
             * Verifies an ExternalShare message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExternalShare message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExternalShare
             */
            static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.ExternalShare;

            /**
             * Creates a plain object from an ExternalShare message. Also converts values to other types if specified.
             * @param message ExternalShare
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: StatusAttributions.StatusAttribution.ExternalShare, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExternalShare to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ExternalShare
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ExternalShare {

            /** Properties of an ExternalShare. */
            interface $Properties {

                /** ExternalShare actionUrl */
                actionUrl?: (string|null);

                /** ExternalShare source */
                source?: (StatusAttributions.StatusAttribution.ExternalShare.Source|null);

                /** ExternalShare duration */
                duration?: (number|null);

                /** ExternalShare actionFallbackUrl */
                actionFallbackUrl?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an ExternalShare. */
            type $Shape = StatusAttributions.StatusAttribution.ExternalShare.$Properties;

            /** Source enum. */
            enum Source {

                /** UNKNOWN value */
                UNKNOWN = 0,

                /** INSTAGRAM value */
                INSTAGRAM = 1,

                /** FACEBOOK value */
                FACEBOOK = 2,

                /** MESSENGER value */
                MESSENGER = 3,

                /** SPOTIFY value */
                SPOTIFY = 4,

                /** YOUTUBE value */
                YOUTUBE = 5,

                /** PINTEREST value */
                PINTEREST = 6,

                /** THREADS value */
                THREADS = 7,

                /** APPLE_MUSIC value */
                APPLE_MUSIC = 8,

                /** SHARECHAT value */
                SHARECHAT = 9,

                /** GOOGLE_PHOTOS value */
                GOOGLE_PHOTOS = 10,

                /** SOUNDCLOUD value */
                SOUNDCLOUD = 11,

                /** SHAZAM value */
                SHAZAM = 12,

                /** PICSART value */
                PICSART = 13
            }
        }

        /**
         * Properties of a GroupStatus.
         * @deprecated Use StatusAttributions.StatusAttribution.GroupStatus.$Properties instead.
         */
        interface IGroupStatus extends StatusAttributions.StatusAttribution.GroupStatus.$Properties {
        }

        /** Represents a GroupStatus. */
        class GroupStatus {

            /**
             * Constructs a new GroupStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.GroupStatus.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GroupStatus authorJid. */
            authorJid?: (string|null);

            /**
             * Creates a new GroupStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupStatus instance
             */
            static create(properties: StatusAttributions.StatusAttribution.GroupStatus.$Shape): StatusAttributions.StatusAttribution.GroupStatus & StatusAttributions.StatusAttribution.GroupStatus.$Shape;
            static create(properties?: StatusAttributions.StatusAttribution.GroupStatus.$Properties): StatusAttributions.StatusAttribution.GroupStatus;

            /**
             * Encodes the specified GroupStatus message. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
             * @param message GroupStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: StatusAttributions.StatusAttribution.GroupStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupStatus message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
             * @param message GroupStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: StatusAttributions.StatusAttribution.GroupStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.GroupStatus & StatusAttributions.StatusAttribution.GroupStatus.$Shape} GroupStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.GroupStatus & StatusAttributions.StatusAttribution.GroupStatus.$Shape;

            /**
             * Decodes a GroupStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.GroupStatus & StatusAttributions.StatusAttribution.GroupStatus.$Shape} GroupStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.GroupStatus & StatusAttributions.StatusAttribution.GroupStatus.$Shape;

            /**
             * Verifies a GroupStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupStatus
             */
            static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.GroupStatus;

            /**
             * Creates a plain object from a GroupStatus message. Also converts values to other types if specified.
             * @param message GroupStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: StatusAttributions.StatusAttribution.GroupStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupStatus to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GroupStatus
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GroupStatus {

            /** Properties of a GroupStatus. */
            interface $Properties {

                /** GroupStatus authorJid */
                authorJid?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GroupStatus. */
            type $Shape = StatusAttributions.StatusAttribution.GroupStatus.$Properties;
        }

        /**
         * Properties of a Music.
         * @deprecated Use StatusAttributions.StatusAttribution.Music.$Properties instead.
         */
        interface IMusic extends StatusAttributions.StatusAttribution.Music.$Properties {
        }

        /** Represents a Music. */
        class Music {

            /**
             * Constructs a new Music.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.Music.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Music authorName. */
            authorName?: (string|null);

            /** Music songId. */
            songId?: (string|null);

            /** Music title. */
            title?: (string|null);

            /** Music author. */
            author?: (string|null);

            /** Music artistAttribution. */
            artistAttribution?: (string|null);

            /** Music isExplicit. */
            isExplicit?: (boolean|null);

            /**
             * Creates a new Music instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Music instance
             */
            static create(properties: StatusAttributions.StatusAttribution.Music.$Shape): StatusAttributions.StatusAttribution.Music & StatusAttributions.StatusAttribution.Music.$Shape;
            static create(properties?: StatusAttributions.StatusAttribution.Music.$Properties): StatusAttributions.StatusAttribution.Music;

            /**
             * Encodes the specified Music message. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
             * @param message Music message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: StatusAttributions.StatusAttribution.Music.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Music message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
             * @param message Music message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: StatusAttributions.StatusAttribution.Music.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Music message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.Music & StatusAttributions.StatusAttribution.Music.$Shape} Music
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.Music & StatusAttributions.StatusAttribution.Music.$Shape;

            /**
             * Decodes a Music message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.Music & StatusAttributions.StatusAttribution.Music.$Shape} Music
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.Music & StatusAttributions.StatusAttribution.Music.$Shape;

            /**
             * Verifies a Music message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Music message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Music
             */
            static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.Music;

            /**
             * Creates a plain object from a Music message. Also converts values to other types if specified.
             * @param message Music
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: StatusAttributions.StatusAttribution.Music, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Music to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Music
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Music {

            /** Properties of a Music. */
            interface $Properties {

                /** Music authorName */
                authorName?: (string|null);

                /** Music songId */
                songId?: (string|null);

                /** Music title */
                title?: (string|null);

                /** Music author */
                author?: (string|null);

                /** Music artistAttribution */
                artistAttribution?: (string|null);

                /** Music isExplicit */
                isExplicit?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Music. */
            type $Shape = StatusAttributions.StatusAttribution.Music.$Properties;
        }

        /**
         * Properties of a RLAttribution.
         * @deprecated Use StatusAttributions.StatusAttribution.RLAttribution.$Properties instead.
         */
        interface IRLAttribution extends StatusAttributions.StatusAttribution.RLAttribution.$Properties {
        }

        /** Represents a RLAttribution. */
        class RLAttribution {

            /**
             * Constructs a new RLAttribution.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.RLAttribution.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** RLAttribution source. */
            source?: (StatusAttributions.StatusAttribution.RLAttribution.Source|null);

            /**
             * Creates a new RLAttribution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RLAttribution instance
             */
            static create(properties: StatusAttributions.StatusAttribution.RLAttribution.$Shape): StatusAttributions.StatusAttribution.RLAttribution & StatusAttributions.StatusAttribution.RLAttribution.$Shape;
            static create(properties?: StatusAttributions.StatusAttribution.RLAttribution.$Properties): StatusAttributions.StatusAttribution.RLAttribution;

            /**
             * Encodes the specified RLAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.RLAttribution.verify|verify} messages.
             * @param message RLAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: StatusAttributions.StatusAttribution.RLAttribution.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RLAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.RLAttribution.verify|verify} messages.
             * @param message RLAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: StatusAttributions.StatusAttribution.RLAttribution.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RLAttribution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.RLAttribution & StatusAttributions.StatusAttribution.RLAttribution.$Shape} RLAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.RLAttribution & StatusAttributions.StatusAttribution.RLAttribution.$Shape;

            /**
             * Decodes a RLAttribution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.RLAttribution & StatusAttributions.StatusAttribution.RLAttribution.$Shape} RLAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.RLAttribution & StatusAttributions.StatusAttribution.RLAttribution.$Shape;

            /**
             * Verifies a RLAttribution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RLAttribution message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RLAttribution
             */
            static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.RLAttribution;

            /**
             * Creates a plain object from a RLAttribution message. Also converts values to other types if specified.
             * @param message RLAttribution
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: StatusAttributions.StatusAttribution.RLAttribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RLAttribution to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RLAttribution
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RLAttribution {

            /** Properties of a RLAttribution. */
            interface $Properties {

                /** RLAttribution source */
                source?: (StatusAttributions.StatusAttribution.RLAttribution.Source|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RLAttribution. */
            type $Shape = StatusAttributions.StatusAttribution.RLAttribution.$Properties;

            /** Source enum. */
            enum Source {

                /** UNKNOWN value */
                UNKNOWN = 0,

                /** RAY_BAN_META_GLASSES value */
                RAY_BAN_META_GLASSES = 1,

                /** OAKLEY_META_GLASSES value */
                OAKLEY_META_GLASSES = 2,

                /** HYPERNOVA_GLASSES value */
                HYPERNOVA_GLASSES = 3
            }
        }

        /**
         * Properties of a StatusReshare.
         * @deprecated Use StatusAttributions.StatusAttribution.StatusReshare.$Properties instead.
         */
        interface IStatusReshare extends StatusAttributions.StatusAttribution.StatusReshare.$Properties {
        }

        /** Represents a StatusReshare. */
        class StatusReshare {

            /**
             * Constructs a new StatusReshare.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.StatusReshare.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** StatusReshare source. */
            source?: (StatusAttributions.StatusAttribution.StatusReshare.Source|null);

            /** StatusReshare metadata. */
            metadata?: (StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties|null);

            /**
             * Creates a new StatusReshare instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusReshare instance
             */
            static create(properties: StatusAttributions.StatusAttribution.StatusReshare.$Shape): StatusAttributions.StatusAttribution.StatusReshare & StatusAttributions.StatusAttribution.StatusReshare.$Shape;
            static create(properties?: StatusAttributions.StatusAttribution.StatusReshare.$Properties): StatusAttributions.StatusAttribution.StatusReshare;

            /**
             * Encodes the specified StatusReshare message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
             * @param message StatusReshare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: StatusAttributions.StatusAttribution.StatusReshare.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusReshare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
             * @param message StatusReshare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: StatusAttributions.StatusAttribution.StatusReshare.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusReshare message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.StatusReshare & StatusAttributions.StatusAttribution.StatusReshare.$Shape} StatusReshare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.StatusReshare & StatusAttributions.StatusAttribution.StatusReshare.$Shape;

            /**
             * Decodes a StatusReshare message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.StatusReshare & StatusAttributions.StatusAttribution.StatusReshare.$Shape} StatusReshare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.StatusReshare & StatusAttributions.StatusAttribution.StatusReshare.$Shape;

            /**
             * Verifies a StatusReshare message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatusReshare message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatusReshare
             */
            static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.StatusReshare;

            /**
             * Creates a plain object from a StatusReshare message. Also converts values to other types if specified.
             * @param message StatusReshare
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: StatusAttributions.StatusAttribution.StatusReshare, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatusReshare to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for StatusReshare
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace StatusReshare {

            /** Properties of a StatusReshare. */
            interface $Properties {

                /** StatusReshare source */
                source?: (StatusAttributions.StatusAttribution.StatusReshare.Source|null);

                /** StatusReshare metadata */
                metadata?: (StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a StatusReshare. */
            type $Shape = StatusAttributions.StatusAttribution.StatusReshare.$Properties;

            /**
             * Properties of a Metadata.
             * @deprecated Use StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties instead.
             */
            interface IMetadata extends StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties {
            }

            /** Represents a Metadata. */
            class Metadata {

                /**
                 * Constructs a new Metadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Metadata duration. */
                duration?: (number|null);

                /** Metadata channelJid. */
                channelJid?: (string|null);

                /** Metadata channelMessageId. */
                channelMessageId?: (number|null);

                /** Metadata hasMultipleReshares. */
                hasMultipleReshares?: (boolean|null);

                /**
                 * Creates a new Metadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Metadata instance
                 */
                static create(properties: StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Shape): StatusAttributions.StatusAttribution.StatusReshare.Metadata & StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Shape;
                static create(properties?: StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties): StatusAttributions.StatusAttribution.StatusReshare.Metadata;

                /**
                 * Encodes the specified Metadata message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
                 * @param message Metadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Metadata message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
                 * @param message Metadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Metadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {StatusAttributions.StatusAttribution.StatusReshare.Metadata & StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Shape} Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.StatusReshare.Metadata & StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Shape;

                /**
                 * Decodes a Metadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {StatusAttributions.StatusAttribution.StatusReshare.Metadata & StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Shape} Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.StatusReshare.Metadata & StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Shape;

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
                static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.StatusReshare.Metadata;

                /**
                 * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                 * @param message Metadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: StatusAttributions.StatusAttribution.StatusReshare.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Metadata duration */
                    duration?: (number|null);

                    /** Metadata channelJid */
                    channelJid?: (string|null);

                    /** Metadata channelMessageId */
                    channelMessageId?: (number|null);

                    /** Metadata hasMultipleReshares */
                    hasMultipleReshares?: (boolean|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Metadata. */
                type $Shape = StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties;
            }

            /** Source enum. */
            enum Source {

                /** UNKNOWN value */
                UNKNOWN = 0,

                /** INTERNAL_RESHARE value */
                INTERNAL_RESHARE = 1,

                /** MENTION_RESHARE value */
                MENTION_RESHARE = 2,

                /** CHANNEL_RESHARE value */
                CHANNEL_RESHARE = 3,

                /** FORWARD value */
                FORWARD = 4
            }
        }

        /**
         * Properties of a StatusTemplate.
         * @deprecated Use StatusAttributions.StatusAttribution.StatusTemplate.$Properties instead.
         */
        interface IStatusTemplate extends StatusAttributions.StatusAttribution.StatusTemplate.$Properties {
        }

        /** Represents a StatusTemplate. */
        class StatusTemplate {

            /**
             * Constructs a new StatusTemplate.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.StatusTemplate.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** StatusTemplate templateId. */
            templateId?: (string|null);

            /** StatusTemplate templateName. */
            templateName?: (string|null);

            /** StatusTemplate thumbnailUrl. */
            thumbnailUrl?: (string|null);

            /**
             * Creates a new StatusTemplate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusTemplate instance
             */
            static create(properties: StatusAttributions.StatusAttribution.StatusTemplate.$Shape): StatusAttributions.StatusAttribution.StatusTemplate & StatusAttributions.StatusAttribution.StatusTemplate.$Shape;
            static create(properties?: StatusAttributions.StatusAttribution.StatusTemplate.$Properties): StatusAttributions.StatusAttribution.StatusTemplate;

            /**
             * Encodes the specified StatusTemplate message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusTemplate.verify|verify} messages.
             * @param message StatusTemplate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: StatusAttributions.StatusAttribution.StatusTemplate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusTemplate message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusTemplate.verify|verify} messages.
             * @param message StatusTemplate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: StatusAttributions.StatusAttribution.StatusTemplate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusTemplate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.StatusTemplate & StatusAttributions.StatusAttribution.StatusTemplate.$Shape} StatusTemplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.StatusTemplate & StatusAttributions.StatusAttribution.StatusTemplate.$Shape;

            /**
             * Decodes a StatusTemplate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.StatusTemplate & StatusAttributions.StatusAttribution.StatusTemplate.$Shape} StatusTemplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.StatusTemplate & StatusAttributions.StatusAttribution.StatusTemplate.$Shape;

            /**
             * Verifies a StatusTemplate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatusTemplate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatusTemplate
             */
            static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.StatusTemplate;

            /**
             * Creates a plain object from a StatusTemplate message. Also converts values to other types if specified.
             * @param message StatusTemplate
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: StatusAttributions.StatusAttribution.StatusTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatusTemplate to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for StatusTemplate
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace StatusTemplate {

            /** Properties of a StatusTemplate. */
            interface $Properties {

                /** StatusTemplate templateId */
                templateId?: (string|null);

                /** StatusTemplate templateName */
                templateName?: (string|null);

                /** StatusTemplate thumbnailUrl */
                thumbnailUrl?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a StatusTemplate. */
            type $Shape = StatusAttributions.StatusAttribution.StatusTemplate.$Properties;
        }

        /** Type enum. */
        enum Type {

            /** UNKNOWN value */
            UNKNOWN = 0,

            /** RESHARE value */
            RESHARE = 1,

            /** EXTERNAL_SHARE value */
            EXTERNAL_SHARE = 2,

            /** MUSIC value */
            MUSIC = 3,

            /** STATUS_MENTION value */
            STATUS_MENTION = 4,

            /** GROUP_STATUS value */
            GROUP_STATUS = 5,

            /** RL_ATTRIBUTION value */
            RL_ATTRIBUTION = 6,

            /** AI_CREATED value */
            AI_CREATED = 7,

            /** LAYOUTS value */
            LAYOUTS = 8,

            /** NEWSLETTER_STATUS value */
            NEWSLETTER_STATUS = 9,

            /** STATUS_CLOSE_SHARING value */
            STATUS_CLOSE_SHARING = 10,

            /** PAID_PARTNERSHIP value */
            PAID_PARTNERSHIP = 11,

            /** USERNAME_STATUS value */
            USERNAME_STATUS = 12,

            /** STATUS_TEMPLATES value */
            STATUS_TEMPLATES = 13
        }
    }
}

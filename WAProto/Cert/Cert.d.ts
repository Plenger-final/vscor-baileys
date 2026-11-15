import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace Cert. */
export namespace Cert {

    /**
     * Properties of a CertChain.
     * @deprecated Use Cert.CertChain.$Properties instead.
     */
    interface ICertChain extends Cert.CertChain.$Properties {
    }

    /** Represents a CertChain. */
    class CertChain {

        /**
         * Constructs a new CertChain.
         * @param [properties] Properties to set
         */
        constructor(properties?: Cert.CertChain.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CertChain leaf. */
        leaf?: (Cert.CertChain.NoiseCertificate.$Properties|null);

        /** CertChain intermediate. */
        intermediate?: (Cert.CertChain.NoiseCertificate.$Properties|null);

        /**
         * Creates a new CertChain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CertChain instance
         */
        static create(properties: Cert.CertChain.$Shape): Cert.CertChain & Cert.CertChain.$Shape;
        static create(properties?: Cert.CertChain.$Properties): Cert.CertChain;

        /**
         * Encodes the specified CertChain message. Does not implicitly {@link Cert.CertChain.verify|verify} messages.
         * @param message CertChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Cert.CertChain.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CertChain message, length delimited. Does not implicitly {@link Cert.CertChain.verify|verify} messages.
         * @param message CertChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Cert.CertChain.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CertChain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Cert.CertChain & Cert.CertChain.$Shape} CertChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Cert.CertChain & Cert.CertChain.$Shape;

        /**
         * Decodes a CertChain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Cert.CertChain & Cert.CertChain.$Shape} CertChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Cert.CertChain & Cert.CertChain.$Shape;

        /**
         * Verifies a CertChain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CertChain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CertChain
         */
        static fromObject(object: { [k: string]: any }): Cert.CertChain;

        /**
         * Creates a plain object from a CertChain message. Also converts values to other types if specified.
         * @param message CertChain
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Cert.CertChain, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CertChain to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CertChain
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CertChain {

        /** Properties of a CertChain. */
        interface $Properties {

            /** CertChain leaf */
            leaf?: (Cert.CertChain.NoiseCertificate.$Properties|null);

            /** CertChain intermediate */
            intermediate?: (Cert.CertChain.NoiseCertificate.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CertChain. */
        type $Shape = Cert.CertChain.$Properties;

        /**
         * Properties of a NoiseCertificate.
         * @deprecated Use Cert.CertChain.NoiseCertificate.$Properties instead.
         */
        interface INoiseCertificate extends Cert.CertChain.NoiseCertificate.$Properties {
        }

        /** Represents a NoiseCertificate. */
        class NoiseCertificate {

            /**
             * Constructs a new NoiseCertificate.
             * @param [properties] Properties to set
             */
            constructor(properties?: Cert.CertChain.NoiseCertificate.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** NoiseCertificate details. */
            details?: (Uint8Array|null);

            /** NoiseCertificate signature. */
            signature?: (Uint8Array|null);

            /**
             * Creates a new NoiseCertificate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NoiseCertificate instance
             */
            static create(properties: Cert.CertChain.NoiseCertificate.$Shape): Cert.CertChain.NoiseCertificate & Cert.CertChain.NoiseCertificate.$Shape;
            static create(properties?: Cert.CertChain.NoiseCertificate.$Properties): Cert.CertChain.NoiseCertificate;

            /**
             * Encodes the specified NoiseCertificate message. Does not implicitly {@link Cert.CertChain.NoiseCertificate.verify|verify} messages.
             * @param message NoiseCertificate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Cert.CertChain.NoiseCertificate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NoiseCertificate message, length delimited. Does not implicitly {@link Cert.CertChain.NoiseCertificate.verify|verify} messages.
             * @param message NoiseCertificate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Cert.CertChain.NoiseCertificate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NoiseCertificate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Cert.CertChain.NoiseCertificate & Cert.CertChain.NoiseCertificate.$Shape} NoiseCertificate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Cert.CertChain.NoiseCertificate & Cert.CertChain.NoiseCertificate.$Shape;

            /**
             * Decodes a NoiseCertificate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Cert.CertChain.NoiseCertificate & Cert.CertChain.NoiseCertificate.$Shape} NoiseCertificate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Cert.CertChain.NoiseCertificate & Cert.CertChain.NoiseCertificate.$Shape;

            /**
             * Verifies a NoiseCertificate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NoiseCertificate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NoiseCertificate
             */
            static fromObject(object: { [k: string]: any }): Cert.CertChain.NoiseCertificate;

            /**
             * Creates a plain object from a NoiseCertificate message. Also converts values to other types if specified.
             * @param message NoiseCertificate
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Cert.CertChain.NoiseCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NoiseCertificate to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NoiseCertificate
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NoiseCertificate {

            /** Properties of a NoiseCertificate. */
            interface $Properties {

                /** NoiseCertificate details */
                details?: (Uint8Array|null);

                /** NoiseCertificate signature */
                signature?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NoiseCertificate. */
            type $Shape = Cert.CertChain.NoiseCertificate.$Properties;

            /**
             * Properties of a Details.
             * @deprecated Use Cert.CertChain.NoiseCertificate.Details.$Properties instead.
             */
            interface IDetails extends Cert.CertChain.NoiseCertificate.Details.$Properties {
            }

            /** Represents a Details. */
            class Details {

                /**
                 * Constructs a new Details.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Cert.CertChain.NoiseCertificate.Details.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Details serial. */
                serial?: (number|null);

                /** Details issuerSerial. */
                issuerSerial?: (number|null);

                /** Details key. */
                key?: (Uint8Array|null);

                /** Details notBefore. */
                notBefore?: (number|Long|null);

                /** Details notAfter. */
                notAfter?: (number|Long|null);

                /**
                 * Creates a new Details instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Details instance
                 */
                static create(properties: Cert.CertChain.NoiseCertificate.Details.$Shape): Cert.CertChain.NoiseCertificate.Details & Cert.CertChain.NoiseCertificate.Details.$Shape;
                static create(properties?: Cert.CertChain.NoiseCertificate.Details.$Properties): Cert.CertChain.NoiseCertificate.Details;

                /**
                 * Encodes the specified Details message. Does not implicitly {@link Cert.CertChain.NoiseCertificate.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: Cert.CertChain.NoiseCertificate.Details.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Details message, length delimited. Does not implicitly {@link Cert.CertChain.NoiseCertificate.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: Cert.CertChain.NoiseCertificate.Details.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Details message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {Cert.CertChain.NoiseCertificate.Details & Cert.CertChain.NoiseCertificate.Details.$Shape} Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Cert.CertChain.NoiseCertificate.Details & Cert.CertChain.NoiseCertificate.Details.$Shape;

                /**
                 * Decodes a Details message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {Cert.CertChain.NoiseCertificate.Details & Cert.CertChain.NoiseCertificate.Details.$Shape} Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Cert.CertChain.NoiseCertificate.Details & Cert.CertChain.NoiseCertificate.Details.$Shape;

                /**
                 * Verifies a Details message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Details message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Details
                 */
                static fromObject(object: { [k: string]: any }): Cert.CertChain.NoiseCertificate.Details;

                /**
                 * Creates a plain object from a Details message. Also converts values to other types if specified.
                 * @param message Details
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: Cert.CertChain.NoiseCertificate.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Details to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Details
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Details {

                /** Properties of a Details. */
                interface $Properties {

                    /** Details serial */
                    serial?: (number|null);

                    /** Details issuerSerial */
                    issuerSerial?: (number|null);

                    /** Details key */
                    key?: (Uint8Array|null);

                    /** Details notBefore */
                    notBefore?: (number|Long|null);

                    /** Details notAfter */
                    notAfter?: (number|Long|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Details. */
                type $Shape = Cert.CertChain.NoiseCertificate.Details.$Properties;
            }
        }
    }

    /**
     * Properties of a NoiseCertificate.
     * @deprecated Use Cert.NoiseCertificate.$Properties instead.
     */
    interface INoiseCertificate extends Cert.NoiseCertificate.$Properties {
    }

    /** Represents a NoiseCertificate. */
    class NoiseCertificate {

        /**
         * Constructs a new NoiseCertificate.
         * @param [properties] Properties to set
         */
        constructor(properties?: Cert.NoiseCertificate.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** NoiseCertificate details. */
        details?: (Uint8Array|null);

        /** NoiseCertificate signature. */
        signature?: (Uint8Array|null);

        /**
         * Creates a new NoiseCertificate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoiseCertificate instance
         */
        static create(properties: Cert.NoiseCertificate.$Shape): Cert.NoiseCertificate & Cert.NoiseCertificate.$Shape;
        static create(properties?: Cert.NoiseCertificate.$Properties): Cert.NoiseCertificate;

        /**
         * Encodes the specified NoiseCertificate message. Does not implicitly {@link Cert.NoiseCertificate.verify|verify} messages.
         * @param message NoiseCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: Cert.NoiseCertificate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NoiseCertificate message, length delimited. Does not implicitly {@link Cert.NoiseCertificate.verify|verify} messages.
         * @param message NoiseCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: Cert.NoiseCertificate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NoiseCertificate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {Cert.NoiseCertificate & Cert.NoiseCertificate.$Shape} NoiseCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Cert.NoiseCertificate & Cert.NoiseCertificate.$Shape;

        /**
         * Decodes a NoiseCertificate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {Cert.NoiseCertificate & Cert.NoiseCertificate.$Shape} NoiseCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Cert.NoiseCertificate & Cert.NoiseCertificate.$Shape;

        /**
         * Verifies a NoiseCertificate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NoiseCertificate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoiseCertificate
         */
        static fromObject(object: { [k: string]: any }): Cert.NoiseCertificate;

        /**
         * Creates a plain object from a NoiseCertificate message. Also converts values to other types if specified.
         * @param message NoiseCertificate
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: Cert.NoiseCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoiseCertificate to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for NoiseCertificate
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace NoiseCertificate {

        /** Properties of a NoiseCertificate. */
        interface $Properties {

            /** NoiseCertificate details */
            details?: (Uint8Array|null);

            /** NoiseCertificate signature */
            signature?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a NoiseCertificate. */
        type $Shape = Cert.NoiseCertificate.$Properties;

        /**
         * Properties of a Details.
         * @deprecated Use Cert.NoiseCertificate.Details.$Properties instead.
         */
        interface IDetails extends Cert.NoiseCertificate.Details.$Properties {
        }

        /** Represents a Details. */
        class Details {

            /**
             * Constructs a new Details.
             * @param [properties] Properties to set
             */
            constructor(properties?: Cert.NoiseCertificate.Details.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Details serial. */
            serial?: (number|null);

            /** Details issuer. */
            issuer?: (string|null);

            /** Details expires. */
            expires?: (number|Long|null);

            /** Details subject. */
            subject?: (string|null);

            /** Details key. */
            key?: (Uint8Array|null);

            /**
             * Creates a new Details instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Details instance
             */
            static create(properties: Cert.NoiseCertificate.Details.$Shape): Cert.NoiseCertificate.Details & Cert.NoiseCertificate.Details.$Shape;
            static create(properties?: Cert.NoiseCertificate.Details.$Properties): Cert.NoiseCertificate.Details;

            /**
             * Encodes the specified Details message. Does not implicitly {@link Cert.NoiseCertificate.Details.verify|verify} messages.
             * @param message Details message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Cert.NoiseCertificate.Details.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Details message, length delimited. Does not implicitly {@link Cert.NoiseCertificate.Details.verify|verify} messages.
             * @param message Details message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Cert.NoiseCertificate.Details.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Details message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Cert.NoiseCertificate.Details & Cert.NoiseCertificate.Details.$Shape} Details
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Cert.NoiseCertificate.Details & Cert.NoiseCertificate.Details.$Shape;

            /**
             * Decodes a Details message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Cert.NoiseCertificate.Details & Cert.NoiseCertificate.Details.$Shape} Details
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Cert.NoiseCertificate.Details & Cert.NoiseCertificate.Details.$Shape;

            /**
             * Verifies a Details message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Details message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Details
             */
            static fromObject(object: { [k: string]: any }): Cert.NoiseCertificate.Details;

            /**
             * Creates a plain object from a Details message. Also converts values to other types if specified.
             * @param message Details
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Cert.NoiseCertificate.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Details to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Details
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Details {

            /** Properties of a Details. */
            interface $Properties {

                /** Details serial */
                serial?: (number|null);

                /** Details issuer */
                issuer?: (string|null);

                /** Details expires */
                expires?: (number|Long|null);

                /** Details subject */
                subject?: (string|null);

                /** Details key */
                key?: (Uint8Array|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Details. */
            type $Shape = Cert.NoiseCertificate.Details.$Properties;
        }
    }
}

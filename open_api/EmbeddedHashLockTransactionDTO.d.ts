/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { NetworkTypeEnum } from '.';
/**
 *
 * @export
 * @interface EmbeddedHashLockTransactionDTO
 */
export interface EmbeddedHashLockTransactionDTO {
  /**
   * Public key.
   * @type {string}
   * @memberof EmbeddedHashLockTransactionDTO
   */
  signerPublicKey: string;
  /**
   * Entity version.
   * @type {number}
   * @memberof EmbeddedHashLockTransactionDTO
   */
  version: number;
  /**
   *
   * @type {NetworkTypeEnum}
   * @memberof EmbeddedHashLockTransactionDTO
   */
  network: NetworkTypeEnum;
  /**
   *
   * @type {number}
   * @memberof EmbeddedHashLockTransactionDTO
   */
  type: number;
  /**
   * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
   * is used instead of the real mosaic identifier.
   * @type {string}
   * @memberof EmbeddedHashLockTransactionDTO
   */
  mosaicId: string;
  /**
   * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
   * @type {string}
   * @memberof EmbeddedHashLockTransactionDTO
   */
  amount: string;
  /**
   * Duration expressed in number of blocks.
   * @type {string}
   * @memberof EmbeddedHashLockTransactionDTO
   */
  duration: string;
  /**
   *
   * @type {string}
   * @memberof EmbeddedHashLockTransactionDTO
   */
  hash: string;
}
export declare function EmbeddedHashLockTransactionDTOFromJSON(json: any): EmbeddedHashLockTransactionDTO;
export declare function EmbeddedHashLockTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedHashLockTransactionDTO;
export declare function EmbeddedHashLockTransactionDTOToJSON(value?: EmbeddedHashLockTransactionDTO | null): any;

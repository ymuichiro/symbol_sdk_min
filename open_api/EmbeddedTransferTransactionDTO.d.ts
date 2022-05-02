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
import { NetworkTypeEnum } from './NetworkTypeEnum';
import { UnresolvedMosaic } from "./UnresolvedMosaic";
/**
 *
 * @export
 * @interface EmbeddedTransferTransactionDTO
 */
export interface EmbeddedTransferTransactionDTO {
  /**
   * Public key.
   * @type {string}
   * @memberof EmbeddedTransferTransactionDTO
   */
  signerPublicKey: string;
  /**
   * Entity version.
   * @type {number}
   * @memberof EmbeddedTransferTransactionDTO
   */
  version: number;
  /**
   *
   * @type {NetworkTypeEnum}
   * @memberof EmbeddedTransferTransactionDTO
   */
  network: NetworkTypeEnum;
  /**
   *
   * @type {number}
   * @memberof EmbeddedTransferTransactionDTO
   */
  type: number;
  /**
   * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
   * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA.
   * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
   * @type {string}
   * @memberof EmbeddedTransferTransactionDTO
   */
  recipientAddress: string;
  /**
   * Array of mosaics sent to the recipient.
   * @type {Array<UnresolvedMosaic>}
   * @memberof EmbeddedTransferTransactionDTO
   */
  mosaics: Array<UnresolvedMosaic>;
  /**
   * Transfer transaction message
   * @type {string}
   * @memberof EmbeddedTransferTransactionDTO
   */
  message?: string;
}
export declare function EmbeddedTransferTransactionDTOFromJSON(json: any): EmbeddedTransferTransactionDTO;
export declare function EmbeddedTransferTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransferTransactionDTO;
export declare function EmbeddedTransferTransactionDTOToJSON(value?: EmbeddedTransferTransactionDTO | null): any;

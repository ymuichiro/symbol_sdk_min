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
import { AccountRestrictionFlagsEnum, NetworkTypeEnum } from '.';
/**
 *
 * @export
 * @interface EmbeddedAccountMosaicRestrictionTransactionDTO
 */
export interface EmbeddedAccountMosaicRestrictionTransactionDTO {
  /**
   * Public key.
   * @type {string}
   * @memberof EmbeddedAccountMosaicRestrictionTransactionDTO
   */
  signerPublicKey: string;
  /**
   * Entity version.
   * @type {number}
   * @memberof EmbeddedAccountMosaicRestrictionTransactionDTO
   */
  version: number;
  /**
   *
   * @type {NetworkTypeEnum}
   * @memberof EmbeddedAccountMosaicRestrictionTransactionDTO
   */
  network: NetworkTypeEnum;
  /**
   *
   * @type {number}
   * @memberof EmbeddedAccountMosaicRestrictionTransactionDTO
   */
  type: number;
  /**
   *
   * @type {AccountRestrictionFlagsEnum}
   * @memberof EmbeddedAccountMosaicRestrictionTransactionDTO
   */
  restrictionFlags: AccountRestrictionFlagsEnum;
  /**
   * Account restriction additions.
   * @type {Array<string>}
   * @memberof EmbeddedAccountMosaicRestrictionTransactionDTO
   */
  restrictionAdditions: Array<string>;
  /**
   * Account restriction deletions.
   * @type {Array<string>}
   * @memberof EmbeddedAccountMosaicRestrictionTransactionDTO
   */
  restrictionDeletions: Array<string>;
}
export declare function EmbeddedAccountMosaicRestrictionTransactionDTOFromJSON(json: any): EmbeddedAccountMosaicRestrictionTransactionDTO;
export declare function EmbeddedAccountMosaicRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAccountMosaicRestrictionTransactionDTO;
export declare function EmbeddedAccountMosaicRestrictionTransactionDTOToJSON(value?: EmbeddedAccountMosaicRestrictionTransactionDTO | null): any;
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
import { LinkActionEnum } from './LinkActionEnum';
import { NetworkTypeEnum } from "./NetworkTypeEnum";
/**
 *
 * @export
 * @interface EmbeddedAccountKeyLinkTransactionDTO
 */
export interface EmbeddedAccountKeyLinkTransactionDTO {
  /**
   * Public key.
   * @type {string}
   * @memberof EmbeddedAccountKeyLinkTransactionDTO
   */
  signerPublicKey: string;
  /**
   * Entity version.
   * @type {number}
   * @memberof EmbeddedAccountKeyLinkTransactionDTO
   */
  version: number;
  /**
   *
   * @type {NetworkTypeEnum}
   * @memberof EmbeddedAccountKeyLinkTransactionDTO
   */
  network: NetworkTypeEnum;
  /**
   *
   * @type {number}
   * @memberof EmbeddedAccountKeyLinkTransactionDTO
   */
  type: number;
  /**
   * Public key.
   * @type {string}
   * @memberof EmbeddedAccountKeyLinkTransactionDTO
   */
  linkedPublicKey: string;
  /**
   *
   * @type {LinkActionEnum}
   * @memberof EmbeddedAccountKeyLinkTransactionDTO
   */
  linkAction: LinkActionEnum;
}
export declare function EmbeddedAccountKeyLinkTransactionDTOFromJSON(json: any): EmbeddedAccountKeyLinkTransactionDTO;
export declare function EmbeddedAccountKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAccountKeyLinkTransactionDTO;
export declare function EmbeddedAccountKeyLinkTransactionDTOToJSON(value?: EmbeddedAccountKeyLinkTransactionDTO | null): any;
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
 * @interface EmbeddedVrfKeyLinkTransactionDTO
 */
export interface EmbeddedVrfKeyLinkTransactionDTO {
  /**
   * Public key.
   * @type {string}
   * @memberof EmbeddedVrfKeyLinkTransactionDTO
   */
  signerPublicKey: string;
  /**
   * Entity version.
   * @type {number}
   * @memberof EmbeddedVrfKeyLinkTransactionDTO
   */
  version: number;
  /**
   *
   * @type {NetworkTypeEnum}
   * @memberof EmbeddedVrfKeyLinkTransactionDTO
   */
  network: NetworkTypeEnum;
  /**
   *
   * @type {number}
   * @memberof EmbeddedVrfKeyLinkTransactionDTO
   */
  type: number;
  /**
   * Public key.
   * @type {string}
   * @memberof EmbeddedVrfKeyLinkTransactionDTO
   */
  linkedPublicKey: string;
  /**
   *
   * @type {LinkActionEnum}
   * @memberof EmbeddedVrfKeyLinkTransactionDTO
   */
  linkAction: LinkActionEnum;
}
export declare function EmbeddedVrfKeyLinkTransactionDTOFromJSON(json: any): EmbeddedVrfKeyLinkTransactionDTO;
export declare function EmbeddedVrfKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedVrfKeyLinkTransactionDTO;
export declare function EmbeddedVrfKeyLinkTransactionDTOToJSON(value?: EmbeddedVrfKeyLinkTransactionDTO | null): any;

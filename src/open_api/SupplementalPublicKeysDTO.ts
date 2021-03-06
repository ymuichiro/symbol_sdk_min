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

import { AccountLinkPublicKeyDTO } from "./AccountLinkPublicKeyDTO";
import { AccountLinkVotingKeysDTO } from "./AccountLinkVotingKeysDTO";

/**
 *
 * @export
 * @interface SupplementalPublicKeysDTO
 */
export interface SupplementalPublicKeysDTO {
  /**
   *
   * @type {AccountLinkPublicKeyDTO}
   * @memberof SupplementalPublicKeysDTO
   */
  linked?: AccountLinkPublicKeyDTO;
  /**
   *
   * @type {AccountLinkPublicKeyDTO}
   * @memberof SupplementalPublicKeysDTO
   */
  node?: AccountLinkPublicKeyDTO;
  /**
   *
   * @type {AccountLinkPublicKeyDTO}
   * @memberof SupplementalPublicKeysDTO
   */
  vrf?: AccountLinkPublicKeyDTO;
  /**
   *
   * @type {AccountLinkVotingKeysDTO}
   * @memberof SupplementalPublicKeysDTO
   */
  voting?: AccountLinkVotingKeysDTO;
}
export declare function SupplementalPublicKeysDTOFromJSON(json: any): SupplementalPublicKeysDTO;
export declare function SupplementalPublicKeysDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupplementalPublicKeysDTO;
export declare function SupplementalPublicKeysDTOToJSON(value?: SupplementalPublicKeysDTO | null): any;

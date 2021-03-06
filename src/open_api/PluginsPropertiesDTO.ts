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
import { AccountKeyLinkNetworkPropertiesDTO } from "./AccountKeyLinkNetworkPropertiesDTO";
import { AccountRestrictionNetworkPropertiesDTO } from "./AccountRestrictionNetworkPropertiesDTO";
import { AggregateNetworkPropertiesDTO } from "./AggregateNetworkPropertiesDTO";
import { HashLockNetworkPropertiesDTO } from "./HashLockNetworkPropertiesDTO";
import { MetadataNetworkPropertiesDTO } from "./MetadataNetworkPropertiesDTO";
import { MosaicNetworkPropertiesDTO } from "./MosaicNetworkPropertiesDTO";
import { MosaicRestrictionNetworkPropertiesDTO } from "./MosaicRestrictionNetworkPropertiesDTO";
import { MultisigNetworkPropertiesDTO } from "./MultisigNetworkPropertiesDTO";
import { NamespaceNetworkPropertiesDTO } from "./NamespaceNetworkPropertiesDTO";
import { SecretLockNetworkPropertiesDTO } from "./SecretLockNetworkPropertiesDTO";
import { TransferNetworkPropertiesDTO } from "./TransferNetworkPropertiesDTO";
/**
 * Plugin related configuration properties.
 * @export
 * @interface PluginsPropertiesDTO
 */
export interface PluginsPropertiesDTO {
  /**
   *
   * @type {AccountKeyLinkNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  accountlink?: AccountKeyLinkNetworkPropertiesDTO;
  /**
   *
   * @type {AggregateNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  aggregate?: AggregateNetworkPropertiesDTO;
  /**
   *
   * @type {HashLockNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  lockhash?: HashLockNetworkPropertiesDTO;
  /**
   *
   * @type {SecretLockNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  locksecret?: SecretLockNetworkPropertiesDTO;
  /**
   *
   * @type {MetadataNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  metadata?: MetadataNetworkPropertiesDTO;
  /**
   *
   * @type {MosaicNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  mosaic?: MosaicNetworkPropertiesDTO;
  /**
   *
   * @type {MultisigNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  multisig?: MultisigNetworkPropertiesDTO;
  /**
   *
   * @type {NamespaceNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  namespace?: NamespaceNetworkPropertiesDTO;
  /**
   *
   * @type {AccountRestrictionNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  restrictionaccount?: AccountRestrictionNetworkPropertiesDTO;
  /**
   *
   * @type {MosaicRestrictionNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  restrictionmosaic?: MosaicRestrictionNetworkPropertiesDTO;
  /**
   *
   * @type {TransferNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  transfer?: TransferNetworkPropertiesDTO;
}
export declare function PluginsPropertiesDTOFromJSON(json: any): PluginsPropertiesDTO;
export declare function PluginsPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluginsPropertiesDTO;
export declare function PluginsPropertiesDTOToJSON(value?: PluginsPropertiesDTO | null): any;

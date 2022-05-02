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
import { AliasActionEnum } from "./AliasActionEnum";
import { NetworkTypeEnum } from "./NetworkTypeEnum";

/**
 * Transaction to link a namespace to a mosaic.
 * @export
 * @interface MosaicAliasTransactionDTO
 */
export interface MosaicAliasTransactionDTO {
  /**
   * A number that allows uint 32 values.
   * @type {number}
   * @memberof MosaicAliasTransactionDTO
   */
  size: number;
  /**
   * Entity's signature generated by the signer.
   * @type {string}
   * @memberof MosaicAliasTransactionDTO
   */
  signature: string;
  /**
   * Public key.
   * @type {string}
   * @memberof MosaicAliasTransactionDTO
   */
  signerPublicKey: string;
  /**
   * Entity version.
   * @type {number}
   * @memberof MosaicAliasTransactionDTO
   */
  version: number;
  /**
   *
   * @type {NetworkTypeEnum}
   * @memberof MosaicAliasTransactionDTO
   */
  network: NetworkTypeEnum;
  /**
   *
   * @type {number}
   * @memberof MosaicAliasTransactionDTO
   */
  type: number;
  /**
   * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
   * @type {string}
   * @memberof MosaicAliasTransactionDTO
   */
  maxFee: string;
  /**
   * Duration expressed in number of blocks.
   * @type {string}
   * @memberof MosaicAliasTransactionDTO
   */
  deadline: string;
  /**
   * Namespace identifier.
   * @type {string}
   * @memberof MosaicAliasTransactionDTO
   */
  namespaceId: string;
  /**
   * Mosaic identifier.
   * @type {string}
   * @memberof MosaicAliasTransactionDTO
   */
  mosaicId: string;
  /**
   *
   * @type {AliasActionEnum}
   * @memberof MosaicAliasTransactionDTO
   */
  aliasAction: AliasActionEnum;
}
export declare function MosaicAliasTransactionDTOFromJSON(json: any): MosaicAliasTransactionDTO;
export declare function MosaicAliasTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAliasTransactionDTO;
export declare function MosaicAliasTransactionDTOToJSON(value?: MosaicAliasTransactionDTO | null): any;
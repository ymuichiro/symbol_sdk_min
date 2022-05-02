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
import { MosaicSupplyChangeActionEnum } from './MosaicSupplyChangeActionEnum';
/**
 * Transaction to increase or decrease the supply of a mosaic.
 * @export
 * @interface MosaicSupplyChangeTransactionDTO
 */
export interface MosaicSupplyChangeTransactionDTO {
  /**
   * A number that allows uint 32 values.
   * @type {number}
   * @memberof MosaicSupplyChangeTransactionDTO
   */
  size: number;
  /**
   * Entity's signature generated by the signer.
   * @type {string}
   * @memberof MosaicSupplyChangeTransactionDTO
   */
  signature: string;
  /**
   * Public key.
   * @type {string}
   * @memberof MosaicSupplyChangeTransactionDTO
   */
  signerPublicKey: string;
  /**
   * Entity version.
   * @type {number}
   * @memberof MosaicSupplyChangeTransactionDTO
   */
  version: number;
  /**
   *
   * @type {NetworkTypeEnum}
   * @memberof MosaicSupplyChangeTransactionDTO
   */
  network: NetworkTypeEnum;
  /**
   *
   * @type {number}
   * @memberof MosaicSupplyChangeTransactionDTO
   */
  type: number;
  /**
   * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
   * @type {string}
   * @memberof MosaicSupplyChangeTransactionDTO
   */
  maxFee: string;
  /**
   * Duration expressed in number of blocks.
   * @type {string}
   * @memberof MosaicSupplyChangeTransactionDTO
   */
  deadline: string;
  /**
   * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
   * is used instead of the real mosaic identifier.
   * @type {string}
   * @memberof MosaicSupplyChangeTransactionDTO
   */
  mosaicId: string;
  /**
   * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
   * @type {string}
   * @memberof MosaicSupplyChangeTransactionDTO
   */
  delta: string;
  /**
   *
   * @type {MosaicSupplyChangeActionEnum}
   * @memberof MosaicSupplyChangeTransactionDTO
   */
  action: MosaicSupplyChangeActionEnum;
}
export declare function MosaicSupplyChangeTransactionDTOFromJSON(json: any): MosaicSupplyChangeTransactionDTO;
export declare function MosaicSupplyChangeTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicSupplyChangeTransactionDTO;
export declare function MosaicSupplyChangeTransactionDTOToJSON(value?: MosaicSupplyChangeTransactionDTO | null): any;

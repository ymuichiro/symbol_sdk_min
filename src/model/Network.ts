import { NetworkType } from "symbol-sdk/dist/src/model/network/NetworkType";

export interface ResponseNetworkType {
  /**
   * Network name.
   * @type {NetworkType}
   * @memberof NetworkTypeDTO
   */
  name: NetworkType;
  /**
   * A short text describing the network.
   * @type {string}
   * @memberof NetworkTypeDTO
   */
  description: string;
}


export {
  NetworkType,
};
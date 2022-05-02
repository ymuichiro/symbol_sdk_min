import { NetworkType } from "symbol-sdk/dist/src/model/network/NetworkType";
import { ResponseNetworkType } from "./model/Network";
import { NetworkConfigurationDTO } from "./open_api/NetworkConfigurationDTO";
import { NetworkTypeDTO } from "./open_api/NetworkTypeDTO";
import { TransactionFeesDTO } from "./open_api/TransactionFeesDTO";
import { InternalError } from "./util/errors";
import { UrlControler } from "./util/helpers";
import BaseScripts from "./Base";

const TIME_OUT = 60 * 1000;

export default class NetworkScripts extends BaseScripts {

  /** get current network type */
  static async getCurrentType(uri: string): Promise<ResponseNetworkType> {
    const url = new UrlControler(uri).addPath("network").exec();
    const res = await this.request<NetworkTypeDTO>(url, undefined, { timeout: TIME_OUT });
    return { ...res, name: this.getEnumNetworkType(res.name) };
  }

  /** get network fee at connected node */
  static async getFees(uri: string): Promise<TransactionFeesDTO> {
    const url = new UrlControler(uri).addPath("network", "fees", "transaction").exec();
    return await this.request<TransactionFeesDTO>(url, undefined, { timeout: TIME_OUT });
  }

  /** get network properties at connected node */
  static async getNetworkProperties(uri: string): Promise<NetworkConfigurationDTO> {
    const url = new UrlControler(uri).addPath("network", "properties").exec();
    return await this.request<NetworkConfigurationDTO>(url, undefined, { timeout: TIME_OUT });
  }

  /** get type of enum from type of string at response */
  static getEnumNetworkType(type: "mainnet" | "testnet"): NetworkType {
    switch (type) {
      case "mainnet": return NetworkType.MAIN_NET;
      case "testnet": return NetworkType.TEST_NET;
      default: throw new InternalError(`NetworkType: ${type} is not defined`);
    }
  }

}

import { Address } from "symbol-sdk/dist/src/model/account/Address";
import { SearchNamespacesRequest } from "../model/Namespace";
import { AccountsNamesDTO } from "../open_api/AccountsNamesDTO";
import { MosaicsNamesDTO } from "../open_api/MosaicsNamesDTO";
import { NamespaceInfoDTO } from "../open_api/NamespaceInfoDTO";
import { NamespaceNameDTO } from "../open_api/NamespaceNameDTO";
import { NamespacePage } from "../open_api/NamespacePage";
import { UrlControler } from "../util/helpers";
import BaseScripts from "./Base";

const TIME_OUT = 60 * 1000;

export default class NamespaceScripts extends BaseScripts {

  /** Search namespaces */
  static async search(uri: string, criteria: SearchNamespacesRequest): Promise<NamespacePage> {
    const url = new UrlControler(uri).addPath("namespaces").addQuery(criteria).exec();
    return await this.request<NamespacePage>(url, undefined, { timeout: TIME_OUT });
  }

  /** get namespace info from id */
  static async getNamespaceInfo(uri: string, namespaceId: string): Promise<NamespaceInfoDTO> {
    const url = new UrlControler(uri).addPath("namespaces", namespaceId).exec();
    return await this.request<NamespaceInfoDTO>(url, undefined, { timeout: TIME_OUT });
  }

  /** get readable names for a set of namespaces */
  static async getNamespaceNames(uri: string, namespaceIds: string[]): Promise<NamespaceNameDTO[]> {
    const url = new UrlControler(uri).addPath("namespaces", "names").exec();
    const body = JSON.stringify({ namespaceIds });
    return await this.request<NamespaceNameDTO[]>(url, { method: "POST", body }, { timeout: TIME_OUT });
  }

  /** get readable names for a set of accountIds */
  static async getAccountNames(uri: string, addresses: string[]): Promise<AccountsNamesDTO> {
    const url = new UrlControler(uri).addPath("account", "names").exec();
    const _addresses = await Promise.all(addresses.map(e => Address.createFromRawAddress(e).plain()));
    const body = JSON.stringify({ addresses: _addresses });
    return await this.request<AccountsNamesDTO>(url, { method: "POST", body }, { timeout: TIME_OUT });
  }

  /** get readable names for a set of mosaics */
  static async getMosaicNames(uri: string, mosaicIds: string[]): Promise<MosaicsNamesDTO> {
    const url = new UrlControler(uri).addPath("namespaces", "mosaic", "names").exec();
    const body = JSON.stringify({ mosaicIds });
    return await this.request<MosaicsNamesDTO>(url, { method: "POST", body }, { timeout: TIME_OUT });
  }
}

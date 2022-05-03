import { NetworkType } from "symbol-sdk/dist/src/model/network/NetworkType";
import { UrlControler } from "./util/helpers";
import { BaseScripts } from "./Base";

/**
 * URL Generator for Symbol Explorer
 */
export class SymbolExplorerScripts extends BaseScripts {
  private static readonly TEST_NET: string = "https://testnet.symbol.fyi";
  private static readonly MAIN_NET: string = "https://symbol.fyi";

  /** get explorer url for transaction */
  static getUrlForTransaction(hash: string, type: NetworkType): string {
    const base = type === NetworkType.MAIN_NET ? this.MAIN_NET : this.TEST_NET;
    return new UrlControler(base).addPath("transactions", hash).exec();
  }

  /** get explorer url for account */
  static getUrlForAccount(address: string, type: NetworkType): string {
    const base = type === NetworkType.MAIN_NET ? this.MAIN_NET : this.TEST_NET;
    return new UrlControler(base).addPath("accounts", address).exec();
  }

  /** get explorer url for namespace */
  static getUrlForNamespace(id: string, type: NetworkType): string {
    const base = type === NetworkType.MAIN_NET ? this.MAIN_NET : this.TEST_NET;
    return new UrlControler(base).addPath("namespaces", id).exec();
  }

  /** get explorer url for mosaic */
  static getUrlForMosaic(id: string, type: NetworkType): string {
    const base = type === NetworkType.MAIN_NET ? this.MAIN_NET : this.TEST_NET;
    return new UrlControler(base).addPath("mosaics", id).exec();
  }

  /** get explorer url for block */
  static getUrlForBlock(height: string, type: NetworkType): string {
    const base = type === NetworkType.MAIN_NET ? this.MAIN_NET : this.TEST_NET;
    return new UrlControler(base).addPath("blocks", height).exec();
  }

}
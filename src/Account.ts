import { Account } from "symbol-sdk/dist/src/model/account/Account";
import { Address } from "symbol-sdk/dist/src/model/account/Address";
import { NetworkType } from "symbol-sdk/dist/src/model/network/NetworkType";
import { ExtendedKey, MnemonicPassPhrase, Network, Wallet } from "symbol-hd-wallets";
import BaseScripts from "./Base";
import { UrlControler } from "./util/helpers";
import { InternalError } from "./util/errors";
import { AccountInfoDTO } from "./open_api/AccountInfoDTO";

export default class AccountScripts extends BaseScripts {
  static NETWORK = Network.SYMBOL;
  static TIMEOUT = 60 * 1000;

  /** Create Wallet Path for Symbol-Wallet */
  private static getWalletPath(index: number, networkType: NetworkType): string {
    let code = "";
    if (networkType === NetworkType.MAIN_NET) {
      code = "4343";
    } else if (networkType === NetworkType.TEST_NET) {
      code = "1";
    } else {
      throw new InternalError("The value of the network specification when specifying the wallet path is incorrect.");
    }
    return `m/44\'/${code}\'/${index.toString()}\'/0\'/0\'`;
  }

  /** Get Account by mnemonic for symbol wallet account */
  static createFromMnemonic(mnemonic: string, index: number, type: NetworkType): Account {
    const path = this.getWalletPath(index, type);
    const passPhrase = new MnemonicPassPhrase(mnemonic).toSeed().toString("hex");
    const extKey = ExtendedKey.createFromSeed(passPhrase, this.NETWORK);
    const priateKey = new Wallet(extKey).getChildAccountPrivateKey(path);
    return Account.createFromPrivateKey(priateKey, type);
  }

  /** Get Account by private key for symbol wallet account */
  static createFromPrivateKey(privateKey: string, type: NetworkType): Account {
    return Account.createFromPrivateKey(privateKey, type);
  }

  /** Get wallet account information */
  static async getInfo(uri: string, address: string): Promise<AccountInfoDTO> {
    const _address = Address.createFromRawAddress(address);
    const url = new UrlControler(uri).addPath("accounts", _address.plain()).exec();
    return await this.request<AccountInfoDTO>(url, undefined, { timeout: this.TIMEOUT });
  }
}

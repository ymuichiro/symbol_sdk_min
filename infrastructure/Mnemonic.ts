import { MnemonicPassPhrase } from "symbol-hd-wallets";
import { MnemonicStructure } from "../model/Mnemonic";
import { getUuid } from "../util/helpers";

export default class MnemonicScripts {

  /** generate mnemonic */
  static generate(): MnemonicStructure {
    const mnemonic = MnemonicPassPhrase.createRandom().plain;
    return {
      mnemonic: mnemonic,
      id: getUuid(),
    };
  }

  /** mnemonic verify */
  static isMnemonic(mnemonic: string): boolean {
    return mnemonic.split(/ |　/).length === 24;
  }

}

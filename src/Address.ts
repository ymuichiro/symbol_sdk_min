import { Address } from "symbol-sdk/dist/src/model/account/Address";
import { NetworkType } from "symbol-sdk/dist/src/model/network/NetworkType";
import { InternalError } from "./util/errors";

export class AddressScripts {

  static isRawAddress(address: string): boolean {
    return Address.isValidRawAddress(address);
  }

  /** RawAddress or EncodedAddressを Address に揃えて出力する */
  static createFromAddress(address: string): Address {
    const formatAddress = address.replace(/\-/g, "");
    if (Address.isValidRawAddress(formatAddress)) {
      return Address.createFromRawAddress(formatAddress);
    } else if (Address.isValidEncodedAddress(formatAddress)) {
      return Address.createFromEncoded(formatAddress);
    } else {
      throw new InternalError(`Failed create address: ${address}`);
    }
  }

  /** PublicKey を Address として出力する */
  static createFromPublicKey(publicKey: string, networkType: NetworkType): Address {
    return Address.createFromPublicKey(publicKey, networkType);
  }
}
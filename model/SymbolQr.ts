import { QRCodeType } from "symbol-qr-library/dist/index";
import { NetworkType } from "symbol-sdk/dist/src/model/network/NetworkType";
import { TransactionType } from "symbol-sdk/dist/src/model/transaction/TransactionType";

/** QR object on read */
export interface BaseQrValue {
  v: number;
  type: QRCodeType;
  data: any;
}

/** Transfer Transaction QR Object on Read */
export interface TransferTransactionQRValues extends BaseQrValue {
  network_id: NetworkType,
  chain_id: string,
  data: {
    payload: string,
  };
}

export interface QrReadTransferTransaction {
  transaction: {
    deadline: string,
    maxFee: string,
    message: string,
    mosaics: {
      amount: string,
      id: string,
    }[],
    network: NetworkType,
    recipientAddress: {
      address: string,
      networkType: NetworkType,
    },
    signature: string,
    type: TransactionType,
    version: number,
  };
}

export interface QrReadAddContact {
  v: number,
  type: number,
  network_id: NetworkType,
  chain_id: string,
  data: {
    name: string,
    publicKey: string;
  };
}

import {
  AccountQR,
  AddressQR,
  MnemonicQR,
  QRCodeGenerator,
  QRCodeType,
  TransactionQR,
  ContactQR,
} from 'symbol-qr-library/dist/index';
import { Transaction, TransferTransaction } from 'symbol-sdk/dist/src/model/transaction';
import { NetworkType } from 'symbol-sdk/dist/src/model/network/NetworkType';
import {
  BaseQrValue,
  QrReadAddContact,
  QrReadTransferTransaction,
  TransferTransactionQRValues,
} from '../model/SymbolQr';

export class SymbolQrScripts {
  /** Generate AddressQR from address */
  static getAddressQr(name: string, address: string, type: NetworkType, generationHash: string): AddressQR {
    return QRCodeGenerator.createExportAddress(name, address, type, generationHash);
  }

  /** Generate Mnemonic QR */
  static getMnemonicQr(mnemonic: string, type: NetworkType, generationHash: string, password: string): MnemonicQR {
    return QRCodeGenerator.createExportMnemonic(mnemonic, type, generationHash, password);
  }

  /** Generate Account QR */
  static getAccountQr(privateKey: string, type: NetworkType, generationHash: string, password?: string): AccountQR {
    return QRCodeGenerator.createExportAccount(privateKey, type, generationHash, password);
  }

  /** Generate Transfer Transaction QR */
  static getTransferTransactionQr(transaction: Transaction, type: NetworkType, generationHash: string): TransactionQR {
    return QRCodeGenerator.createTransactionRequest(transaction, type, generationHash);
  }

  /** Generate Contract QR */
  static getContractQr(name: string, publicKey: string, type: NetworkType, generationHash: string): ContactQR {
    return QRCodeGenerator.createAddContact(name, publicKey, type, generationHash);
  }

  /** Get the format of the scanned QR Code */
  static isQrJsonType(jsonStr: string): keyof typeof QRCodeType {
    const json: BaseQrValue = JSON.parse(jsonStr);
    return QRCodeType[json.type] as keyof typeof QRCodeType;
  }

  /** Convert JSON to dictionary type */
  static getExportMnemonicFromQrJson(jsonStr: string) {
    const type = this.isQrJsonType(jsonStr);
    if (type === 'ExportMnemonic') {
      const json = JSON.parse(jsonStr);
      try {
        return {
          v: json.v as number,
          network_id: json.network_id as NetworkType,
          chain_id: json.chain_id as string,
          data: {
            plainMnemonic: json.data.plainMnemonic as string,
          },
        };
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  /** Convert JSON to dictionary type */
  static getExportAccountFromQrJson(jsonStr: string) {
    const type = this.isQrJsonType(jsonStr);
    if (type === 'ExportAccount') {
      const json = JSON.parse(jsonStr);
      try {
        return {
          network_id: json.network_id as NetworkType,
          chain_id: json.chain_id as string,
          data: {
            privateKey: json.data.privateKey,
          },
        };
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  /** Convert JSON to dictionary type */
  static getAddContactFromQRJson(jsonStr: string): QrReadAddContact | null {
    const type = this.isQrJsonType(jsonStr);
    if (type === 'AddContact') {
      return JSON.parse(jsonStr) as QrReadAddContact;
    }
    return null;
  }

  /**
   * Convert JSON to dictionary type
   * TransferTransaction or InnerTransaction の判定は type.TransactionType にて行う
   */
  static getTransferTransactionFromQRJson(jsonStr: string): QrReadTransferTransaction | null {
    const type = this.isQrJsonType(jsonStr);
    if (type === 'RequestTransaction') {
      const json = JSON.parse(jsonStr) as TransferTransactionQRValues;
      try {
        return TransferTransaction.createFromPayload(json.data.payload).toJSON() as QrReadTransferTransaction;
      } catch (_) {
        return null;
      }
    }
    return null;
  }
}

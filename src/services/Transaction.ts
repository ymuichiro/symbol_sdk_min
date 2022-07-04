import { Account } from 'symbol-sdk/dist/src/model/account/Account';
import { Address } from 'symbol-sdk/dist/src/model/account/Address';
import { Deadline } from 'symbol-sdk/dist/src/model/transaction/Deadline';
import { SignedTransaction } from 'symbol-sdk/dist/src/model/transaction/SignedTransaction';
import { TransactionType } from 'symbol-sdk/dist/src/model/transaction/TransactionType';
import { TransferTransaction } from 'symbol-sdk/dist/src/model/transaction/TransferTransaction';
import { PlainMessage } from 'symbol-sdk/dist/src/model/message/PlainMessage';
import { EncryptedMessage } from 'symbol-sdk/dist/src/model/message/EncryptedMessage';
import { MessageFactory } from 'symbol-sdk/dist/src/model/message/MessageFactory';
import { PublicAccount } from 'symbol-sdk/dist/src/model/account/PublicAccount';
import { Mosaic } from 'symbol-sdk/dist/src/model/mosaic/Mosaic';
import { NetworkType } from 'symbol-sdk/dist/src/model/network/NetworkType';
import { SearchTransactionsRequest, TransactionFeeConfig, TransactionGroup } from '../model/Transaction';
import { Message } from 'symbol-sdk/dist/src/model/message/Message';
import { InternalError } from '../util/errors';
import { UrlControler } from '../util/helpers';
import { TransactionFeesDTO } from '../open_api/TransactionFeesDTO';
import { AnnounceTransactionInfoDTO } from '../open_api/AnnounceTransactionInfoDTO';
import { TransactionInfoDTO } from '../open_api/TransactionInfoDTO';
import { TransactionPage } from '../open_api/TransactionPage';
import { BaseScripts } from './Base';

const TIME_OUT = 60 * 1000;

export class TransactionScripts extends BaseScripts {
  /** calculate max fee */
  static calculateFees(
    message: string,
    mosaics: Mosaic[],
    currentNetworkFee: number,
    epochAdjustment: number,
    type: NetworkType
  ): number {
    const dummyAcccount = Account.generateNewAccount(type);
    const msgs = this.getPlainMessage(message);
    const transaction = this.createTransferTransaction(
      dummyAcccount.address.plain(),
      mosaics,
      epochAdjustment,
      type,
      msgs,
      currentNetworkFee
    );
    return transaction.maxFee.compact() / Math.pow(10, 6);
  }

  /** get network fees by selected fee multiplier */
  static async getCurrentNetworkFees(
    selectedFeeMultiplier: TransactionFeeConfig,
    networkFees: TransactionFeesDTO,
    defaultDynamicFeeMultiplier: number
  ): Promise<number> {
    let fee: number = 0;
    if (selectedFeeMultiplier === TransactionFeeConfig.slow) {
      const fees =
        networkFees.lowestFeeMultiplier < networkFees.minFeeMultiplier
          ? networkFees.minFeeMultiplier
          : networkFees.lowestFeeMultiplier;
      fee = fees || defaultDynamicFeeMultiplier;
    } else if (selectedFeeMultiplier === TransactionFeeConfig.normal) {
      const fees =
        networkFees.medianFeeMultiplier < networkFees.minFeeMultiplier
          ? networkFees.minFeeMultiplier
          : networkFees.medianFeeMultiplier;
      fee = fees || defaultDynamicFeeMultiplier;
    } else {
      const fees =
        networkFees.highestFeeMultiplier < networkFees.minFeeMultiplier
          ? networkFees.minFeeMultiplier
          : networkFees.highestFeeMultiplier;
      fee = fees || defaultDynamicFeeMultiplier;
    }
    return fee;
  }

  /** create plain message for transaction */
  static getPlainMessage(message: string): PlainMessage {
    return PlainMessage.create(message);
  }

  /** create encrypt message for transaction */
  static getEncryptMessage(
    message: string,
    toPublicKey: string,
    fromPrivateKey: string,
    type: NetworkType
  ): EncryptedMessage {
    const fromAccount = Account.createFromPrivateKey(fromPrivateKey, type);
    const toAccount = PublicAccount.createFromPublicKey(toPublicKey, type);
    return fromAccount.encryptMessage(message, toAccount);
  }

  /** Decrypt message */
  static readPlainMessage(message: string): string {
    return MessageFactory.createMessageFromHex(message).payload;
  }

  /** Decrypt encrypt message */
  static readEncryptMessage(message: string, fromPublicKey: string, toPrivateKey: string, type: NetworkType): string {
    const fromAccount = PublicAccount.createFromPublicKey(fromPublicKey, type);
    const toAccount = Account.createFromPrivateKey(toPrivateKey, type);
    return toAccount.decryptMessage(MessageFactory.createMessageFromHex(message), fromAccount).payload;
  }

  /** create transfer transaction */
  static createTransferTransaction(
    address: string,
    mosaic: Mosaic[],
    epochAdjustment: number,
    type: NetworkType,
    message: Message,
    currentNetworkFees?: number
  ): TransferTransaction {
    const deadline = Deadline.create(epochAdjustment);
    const _address = Address.createFromRawAddress(address);
    const tx = TransferTransaction.create(deadline, _address, mosaic, message, type);
    if (currentNetworkFees !== undefined && typeof currentNetworkFees === 'number') {
      return tx.setMaxFee(currentNetworkFees) as TransferTransaction;
    } else {
      // ニーズがあれば今後 default fee を指定する
      // const defaultFee = UInt64.fromUint(3000000).compact() / Math.pow(10, 6);
      // return [tx.setMaxFee(defaultFee) as TransferTransaction, undefined];
      return tx;
    }
  }

  /** sign to transaction */
  static sign(
    privateKey: string,
    tx: TransferTransaction,
    type: NetworkType,
    generationHash: string
  ): SignedTransaction {
    return Account.createFromPrivateKey(privateKey, type).sign(tx, generationHash);
  }

  /** announce to network of transfer transaction */
  static async announceTransferTransaction(uri: string, signedTx: SignedTransaction) {
    if (signedTx.type === TransactionType.AGGREGATE_BONDED) {
      throw new InternalError('An incorrect method was used.');
    }
    const url = new UrlControler(uri).addPath('transactions').exec();
    const body = JSON.stringify({ payload: signedTx.payload });
    return await this.request<AnnounceTransactionInfoDTO>(url, { method: 'PUT', body }, { timeout: TIME_OUT });
  }

  /** announce to network of partial transaction (AGGREGATE) */
  static async announcePartialTransaction(uri: string, signedTx: SignedTransaction) {
    if (signedTx.type !== TransactionType.AGGREGATE_BONDED) {
      throw new InternalError('An incorrect method was used.');
    }
    const url = new UrlControler(uri).addPath('transactions', 'partial').exec();
    const body = JSON.stringify({ payload: signedTx.payload });
    return await this.request<AnnounceTransactionInfoDTO>(url, { method: 'PUT', body }, { timeout: TIME_OUT });
  }

  /** get transaction info */
  static async getTransactionInfo(uri: string, path: TransactionGroup, transactionIds: string) {
    const url = new UrlControler(uri).addPath('transactions', path).exec();
    const body = JSON.stringify({ transactionIds });
    return await this.request<TransactionInfoDTO>(url, { method: 'POST', body }, { timeout: TIME_OUT });
  }

  /** get transactions info */
  static async getTransactionsInfo(uri: string, path: TransactionGroup, transactionIds: string[]) {
    const url = new UrlControler(uri).addPath('transactions', path).exec();
    const body = JSON.stringify({ transactionIds });
    return await this.request<TransactionInfoDTO[]>(url, { method: 'POST', body }, { timeout: TIME_OUT });
  }

  /** search transaction */
  static async searchTransactions(uri: string, path: TransactionGroup, criteria: SearchTransactionsRequest) {
    const url = new UrlControler(uri).addPath('transactions', path).addQuery(criteria).exec();
    return await this.request<TransactionPage>(url, undefined, { timeout: TIME_OUT });
  }

  /** get unixtime from timestamp */
  static getUnixTime(timestamp: number, epochAdjustment: number): number {
    return epochAdjustment * 1000 + timestamp;
  }
}

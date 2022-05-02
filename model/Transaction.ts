import { Order } from "../open_api/Order";
import { TransactionTypeEnum } from "../open_api/TransactionTypeEnum";

/** トランザクション手数料の選択肢 */
export enum TransactionFeeConfig {
  slow = "遅い",
  normal = "平均",
  fast = "速い",
}

export type TransactionGroup = "confirmed" | "unconfirmed" | "partial";


export interface SearchTransactionsRequest {
  address?: string;
  recipientAddress?: string;
  signerPublicKey?: string;
  height?: string;
  fromHeight?: string;
  toHeight?: string;
  fromTransferAmount?: string;
  toTransferAmount?: string;
  type?: Array<TransactionTypeEnum>;
  embedded?: boolean;
  transferMosaicId?: string;
  pageSize?: number;
  pageNumber?: number;
  offset?: string;
  order?: Order;
}


/** response of websocket */
export interface WebSocketObservResponse {
  topic: string;
  data: {
    meta: {
      generationHash: string;
      hash: string;
    };
    block: {
      beneficiaryAddress: string;
      difficulty: string;
      feeMultiplier: number;
      height: string;
      network: number;
      previousBlockHash: string;
      proofGamma: string;
      proofScalar: string;
      proofVerificationHash: string;
      receiptsHash: string;
      signature: string;
      signerPublicKey: string;
      stateHash: string;
      timestamp: string;
      transactionsHash: string;
      type: number;
      version: number;
    };
  };
}

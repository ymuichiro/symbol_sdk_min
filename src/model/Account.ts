import { NetworkType } from "symbol-sdk/dist/src/model/network/NetworkType";

/** グローバルストアで表現されるアカウント情報 */
export interface AccountStructure {
  /** アカウント名 */
  name: string;
  /** アプリで表示する為のアバター */
  avatorUri: string;
  /** ウォレットが属するネットワークタイプ */
  networkType: NetworkType;
  /** 公開鍵 */
  publicKey: string;
  /** AAAAAAAA形式のアドレス */
  plainAddress: string;
  /** AAAA-AAAA形式のアドレス */
  formatedAddress: string;
  /** Wallet Pathの index値 undefinedでなければニーモニックで登録されたアカウントを指す */
  walletPathIndex: number | undefined;
}

/** 保存されている秘密鍵の形式 */
export interface PrivateKeyStructure {
  /** アドレス */
  address: string;
  /** 秘密鍵 */
  privateKey: string;
}

/** account info on contract */
export interface ContractStructure {
  id: string;
  name: string;
  address: string;
  publicKey: string;
  avator: string;
  note: string;
  networkType: NetworkType;
}

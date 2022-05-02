/*

 Error class for this system

*/

/** Indicates that the connection to the node failed. */
export class NetworkError extends Error {

  public viewMessage: string;
  public viewTitle: string;

  constructor(consoleMessage: string) {
    super();
    this.name = "NetworkError";
    this.message = consoleMessage;
    this.viewTitle = "ネットワークエラー";
    this.viewMessage = "ノードとの接続に失敗しました。通信状況を確認して下さい";
  }

}

/** Internal or System Error */
export class InternalError extends Error {

  public viewMessage: string;
  public viewTitle: string;

  constructor(consoleMessage: string) {
    super();
    this.name = "InternalError";
    this.message = consoleMessage;
    this.viewTitle = "システムエラー";
    this.viewMessage = "内部的なエラーが発生しました";
  }

}
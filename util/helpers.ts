/** ランダムな36桁のUUIDを生成する */
export const getUuid = (): string => {
  // 指定された長さのランダムな文字列を返す
  const getRandomString = (length: number) => {
    const c = "abcdefghijklmnopqrstuvwxyz0123456789";
    const a = "abcdefghijklmnopqrstuvwxyz";
    const keys = new Array(length).fill("").map(_ => c.charAt(Math.floor(Math.random() * c.length)));
    const header = a.charAt(Math.floor(Math.random() * a.length));
    return `${header}${keys.join("")}`;
  };

  const start = `00000000${new Date().getTime().toString(16)}`.slice(-7);
  const inner = ["", "", ""].map(() => getRandomString(3)).join("-");
  const end = getRandomString(11);
  return `u${start}-${inner}-${end}`;
};

/** 入力された配列を非破壊にランダムに並び替えて返す */
export const shuffle: <T>(v: T[]) => T[] = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/** Perform URL merging processing, etc. */
export class UrlControler {

  private url: URL;
  private params: URLSearchParams;

  constructor(base: string) {
    this.url = new URL(base);
    this.params = new URLSearchParams();
  }

  public addPath(...paths: string[]): this {
    for (const path of paths) {
      this.url.pathname = path;
    }
    return this;
  };

  public addQuery(queries: { [key: string]: any; }): this {
    for (const query of Object.keys(queries)) {
      this.params.set(query, queries[query]);
    }
    return this;
  };

  public exec(): string {
    this.url.search = this.params.toString();
    return this.url.href;
  }

}

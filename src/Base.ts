import { NetworkError } from "./util/errors";

interface RequestOptions {
  /** millisecond */
  timeout?: number;
}

export default class BaseScripts {

  /** 指定されたURLにFetchを実行する */
  static async request<T>(url: RequestInfo, init?: RequestInit, options?: RequestOptions): Promise<T> {
    const controler = new AbortController();
    const t = options ? (options.timeout ? options.timeout : 60 * 1000) : 60 * 1000;
    const timeout = setTimeout(() => controler.abort(), t);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    try {
      const response = await fetch(url, { ...init, headers, signal: controler.signal });
      if (!response.ok || response.status >= 400) {
        throw new NetworkError(`${response.status.toString()} Fetch Error --> ${url.toString()}`);
      }
      return await response.json();
    } finally {
      clearTimeout(timeout);
    }
  }
}

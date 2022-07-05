import { NetworkError } from '../util/errors';

interface RequestOptions {
  /** millisecond */
  timeout?: number;
}

export interface ResponseBase<T> {
  response: Response;
  data: T;
}

export class BaseScripts {
  /**
   * 指定されたURLにFetchを実行する
   */
  static async request<T>(url: RequestInfo, init?: RequestInit, options?: RequestOptions): Promise<ResponseBase<T>> {
    const controler = new AbortController();
    const t = options ? (options.timeout ? options.timeout : 60 * 1000) : 60 * 1000;
    const timeout = setTimeout(() => controler.abort(), t);
    try {
      const response = await fetch(url, {
        ...init,
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controler.signal,
      });
      const data = await response.json();
      return { response, data };
    } catch (e: any) {
      throw new NetworkError(e.message as string);
    } finally {
      clearTimeout(timeout);
    }
  }
}

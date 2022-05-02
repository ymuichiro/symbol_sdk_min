import { UrlControler } from "./util/helpers";
import BaseScripts from "./Base";

interface CurrencyExchangeData {
  price: number | null;
}

const TIME_OUT = 60 * 1000;

export default class CurrencyExchangeScripts extends BaseScripts {
  static apiServiceName: string = "CoinGecko";
  static baseUri: string = "https://api.coingecko.com/api/v3";

  /** get current price */
  static async getExchangePrice(fromId: string, toId: string): Promise<CurrencyExchangeData> {
    const url = new UrlControler(this.baseUri).addPath("simple", "price").addQuery({ ids: fromId, vs_currencies: toId }).exec();
    const response = await this.request<any>(url, undefined, { timeout: TIME_OUT });
    let price: CurrencyExchangeData["price"] = null;
    if (response[fromId] || response[fromId][toId]) {
      price = response[fromId][toId];
    }
    return { price };
  }

  /** get currency symbols */
  static getIds() {
    return {
      from: {
        symbol: "symbol",
      },
      to: {
        jpyYen: "jpy",
        usd: "usd",
      },
    };
  }
}

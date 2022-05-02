import { BlockSearchCriteria } from "../model/Block";
import { BlockInfoDTO } from "../open_api/BlockInfoDTO";
import { BlockPage } from "../open_api/BlockPage";
import { UrlControler } from "../util/helpers";
import BaseScripts from "./Base";

const TIME_OUT = 60 * 1000;

export default class BlockScripts extends BaseScripts {

  /** search blocks */
  static async search(uri: string, criteria: BlockSearchCriteria): Promise<BlockPage> {
    const url = new UrlControler(uri).addPath("blocks").addQuery(criteria).exec();
    return this.request<BlockPage>(url, undefined, { timeout: TIME_OUT });
  }

  /** get block info from block height */
  static async getInfo(uri: string, height: number): Promise<BlockInfoDTO> {
    const url = new UrlControler(uri).addPath("blocks", height.toString()).exec();
    return await this.request<BlockInfoDTO>(url, undefined, { timeout: TIME_OUT });
  }

  /** convert block height time to unix time */
  static getUnixTime(timestamp: number, epochAdjustment: number): number {
    return timestamp + epochAdjustment * 1000;
  }
}

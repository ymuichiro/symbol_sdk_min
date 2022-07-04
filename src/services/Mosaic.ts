import { MosaicId } from 'symbol-sdk/dist/src/model/mosaic/MosaicId';
import { UInt64 } from 'symbol-sdk/dist/src/model/UInt64';
import { MosaicInfoDTO } from '../open_api/MosaicInfoDTO';
import { MosaicPage } from '../open_api/MosaicPage';
import { UrlControler } from '../util/helpers';
import { BaseScripts } from './Base';
import { Mosaic } from 'symbol-sdk/dist/src/model/mosaic/Mosaic';

const TIME_OUT = 60 * 1000;

export { Mosaic, UInt64, MosaicId };

export class MosaicScripts extends BaseScripts {
  /** get absolute amount from relative amount */
  static getRelativeAmount(absoluteAmount: number, divisibility: number): UInt64 {
    return UInt64.fromUint(absoluteAmount === 0 ? 0 : absoluteAmount * Math.pow(10, divisibility));
  }

  /** get relative amount from absolute amount */
  static getAbsoluteAmount(relativeAmount: UInt64, divisibility: number): number {
    const compact = relativeAmount.compact();
    return compact === 0 ? 0 : relativeAmount.compact() / Math.pow(10, divisibility);
  }

  /** get mosaic info from id */
  static async getMosaicInfo(uri: string, mosaicId: string) {
    const url = new UrlControler(uri).addPath('mosaics', new MosaicId(mosaicId).toHex()).exec();
    return await this.request<MosaicInfoDTO>(url, undefined, { timeout: TIME_OUT });
  }

  /** get mosaics info from id array */
  static async getMosaicsInfo(uri: string, mosaicIds: string[]) {
    if (mosaicIds.length === 0) {
      return { data: [], pagination: { pageNumber: 0, pageSize: 0 } };
    } else {
      const url = new UrlControler(uri).addPath('mosaics').exec();
      const body = JSON.stringify({ mosaicIds });
      return await this.request<MosaicPage>(url, { method: 'POST', body }, { timeout: TIME_OUT });
    }
  }
}

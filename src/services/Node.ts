import { BaseScripts } from './Base';
import { NetworkType } from 'symbol-sdk/dist/src/model/network/NetworkType';
import { shuffle, UrlControler } from '../util/helpers';
import { NodeInfo } from '../model/Node';
import { NodeHealthDTO } from '../open_api/NodeHealthDTO';
import { NodeInfoDTO } from '../open_api/NodeInfoDTO';
import { NodeStatusEnum } from '../open_api/NodeStatusEnum';

const TIME_OUT = 60 * 1000;

export class NodeScripts extends BaseScripts {
  /** get node health from uri */
  static async getNodeHealth(uri: string) {
    const url = new UrlControler(uri).addPath('node', 'health').exec();
    return await this.request<NodeHealthDTO>(url, undefined, { timeout: TIME_OUT });
  }

  /** get info on connected node */
  static async getNodeInfo(uri: string) {
    const url = new UrlControler(uri).addPath('node', 'info').exec();
    return await this.request<NodeInfoDTO>(url, undefined, { timeout: TIME_OUT });
  }

  /** check if live for node */
  static async isLive(uri: string): Promise<boolean> {
    try {
      const res = await this.getNodeHealth(uri);
      return res.data.apiNode === NodeStatusEnum.Up;
    } catch (_) {
      return false;
    }
  }

  /** get live default nodes  */
  static async getDefaultNodeList(type: NetworkType): Promise<NodeInfo[]> {
    const n = type === NetworkType.MAIN_NET ? getMainNetNodeList() : getTestNetNodeList();
    let lists: NodeInfo[] = [];
    await Promise.all(
      shuffle(n).map(async (url) => {
        try {
          if (await this.isLive(url)) {
            const nodeInfo = (await this.getNodeInfo(url)).data;
            lists.push({ ...nodeInfo, nodeUrl: url });
          }
        } catch (_) {}
      })
    );
    return lists;
  }

  /** get list of peer node   */
  static async getPeerNodes(uri: string): Promise<NodeInfo[]> {
    const url = new UrlControler(uri).addPath('node', 'peers').exec();
    const response = await this.request<NodeInfoDTO[]>(url, undefined, { timeout: TIME_OUT });
    const ln: NodeInfo[] = [];
    await Promise.all(
      response.data.map(async (r) => {
        try {
          const url = `https://${r.host}`;
          if (await this.isLive(url)) {
            const info = (await this.getNodeInfo(url)).data;
            return ln.push({ ...info, nodeUrl: url });
          }
        } catch (_) {}
        try {
          const url = `http://${r.host}`;
          if (await this.isLive(url)) {
            const info = (await this.getNodeInfo(url)).data;
            return ln.push({ ...info, nodeUrl: url });
          }
        } catch (_) {}
      })
    );
    return ln;
  }
}

function getMainNetNodeList(): string[] {
  return [
    'https://ik1-426-45178.vs.sakura.ne.jp:3001',
    'https://0-0-0-0-0-0-0-0-0-0-0-0-0-0-0.supreme-harvest-node.gym.bond:3001',
    'https://38tt.l.time4vps.cloud:3001',
    'https://0-0-0-0-0-0-0-0-0-0-0-tokyo.full-harvest-orchestra.org:3001',
    'https://23639.xym.stir-hosyu.com:3001',
    'https://xym.misshiy.club:3001',
    'https://00.high-performance.symbol-nodes.org:3001',
    'https://006symbol.open-nodes.com:3001',
    'https://xym01.raset-lab.net:3001',
    'https://symbol-harvesting.tokyo:3001',
    'https://0-0-0-0-0-0-0-0-0-0-0-0-0-0-8.high-performance.symbol-node.jp:3001',
    'https://vmi773370.contaboserver.net:3001',
    'https://0-0-0-0-0-0-0-0-0-0-5-symbol-nodes.harvesting.love:3001',
    'https://01-symbol-node.tokyo:3001',
    'https://02-super-harvest.symbol-platform.com:3001',
    'https://symbol-node.tokyo:3001',
    'https://0-0-0-h-my-gosh.outstanding.symbol-harvesting.work:3001',
    'https://0-0-0-0-0-0-0-0-0-0-3-symbol-nodes.harvesting.love:3001',
    'https://shikinami.starlight.tokyo:3001',
    'https://0-0-0-0-0.high-quality.symbol-harvest.org:3001',
    'https://07.high-performance.symbol-node.jp:3001',
    'https://0-0-0-0-1.supreme-harvest-node.gym.bond:3001',
    'https://0-0-0-0-7.supreme-harvest-node.gym.bond:3001',
    'https://0-0-0-8.supreme-harvest-node.gym.bond:3001',
    'https://xxx-welcome-to-a-powerful-node.com:3001',
    'https://age01.kitsutsuki.tokyo:3001',
    'https://cryptocat-xym-node2.com:3001',
    'https://01.high-performance.symbol-node.jp:3001',
    'https://008.symbol-node.org:3001',
    'https://0-0-0-3.high-performance.symbol-node.jp:3001',
    'https://0-0-0-ebisu.surgestar.com:3001',
    'https://03-super-harvest.symbol-platform.com:3001',
    'https://008symbol.open-nodes.com:3001',
    'https://04.symbol-node.com:3001',
    'https://01.symbol-node.net:3001',
    'https://00.alpaca.symbolist.jp:3001',
    'https://0-0-xym.cubkab-crypto.tokyo:3001',
    'https://symbol01.node.oe-jpy.com:3001',
    'https://0-0-0-0-0-0-0-0-0-0-0-symbol-nodes.harvesting.love:3001',
    'https://amaterasu-02.kamigami.jp:3001',
    'https://0-0-1.super-harvest-program.symbol-gym.org:3001',
    'https://yumeya1.com:3001',
    'https://0-0-0-0-0-0-germany.rich-harvester.club:3001',
    'https://00.high-performance.symbol-nodes.site:3001',
    'https://0-0-0-0-1.harvester-rewards-program.symbol-node.link:3001',
    'https://006fbc67.xym.stir-hosyu.com:3001',
    'https://yukikaze.symbol-nem.net:3001',
    'https://conrad.symbolnode.ninja:3001',
    'https://alpaca.harvestfield.tokyo:3001',
    'https://01.symbol-node.com:3001',
    'https://0-0-0-0-1.build-up-trust-node.symbol.bond:3001',
    'https://sym-main-05.opening-line.jp:3001',
    'https://symbol.nagoya:3001',
    'https://symbol.harvester.earth:3001',
    'https://0-0-0-h-my-gawd.amazing.symbol-harvesting.work:3001',
    'https://symbol-sakura-16.next-web-technology.com:3001',
    'https://0-0-0-0-0-0-0-0-0-0-0-0-0-0-7.special-thanks.symbol-node.org:3001',
    'https://00-high-spec.symbol-node.site:3001',
    'https://0-0-0-3.supreme-harvest-node.gym.bond:3001',
    'https://0-0-0-0-7.special-thanks.symbol-node.org:3001',
    'https://nodeofliberty.com:3001',
    'https://sn3m.newecosym.com:3001',
    'https://paotan03.momotapo.com:3001',
    'https://0-0-0-0-6.supreme-harvest-node.gym.bond:3001',
    'https://0-0-0-0.symbol-nodes.org:3001',
    'https://002.symbol-node.org:3001',
    'https://dual-1.nodes-xym.work:3001',
    'https://0-0symbol-node1.trivill.com:3001',
    'https://02.symbol-node.net:3001',
    'https://aiteruyo.jp:3001',
    'https://age02.kitsutsuki.tokyo:3001',
    'https://00715c1f.xym.stir-hosyu.com:3001',
    'https://0-0-0-h-my-gosh.unbelievable.symbol-harvesting.work:3001',
    'https://0-0-0.japan.symbol.style:3001',
    'https://0-0-0-aaatriple.surgestar.com:3001',
    'https://0055a472.xym.stir-hosyu.com:3001',
    'https://0-0-0-0-0-0-1.high-performance.symbol-node.jp:3001',
    'https://06.symbol-node.net:3001',
    'https://00.cow.symbolist.jp:3001',
    'https://xym-city.com:3001',
    'https://0-0-0-0-0-0-0-0.nice-harvesting.com:3001',
    'https://0-0-0-0-0-0-0-0-0-0-0-0-0-0-2.supreme-harvest-node.gym.bond:3001',
    'https://stallone.gq:3001',
    'https://0-1.peace-begins.with-a-smile.harvest-node.site:3001',
    'https://007symbol.open-nodes.com:3001',
    'https://0-0-0-0-0-0-0-0-0-0-0-0-0-0-0.high-quality.symbol-harvest.org:3001',
    'https://00.elephant.symbolist.jp:3001',
    'https://0-0-0-0-0-0-0-0-0-0-0-0-0-0-4.supreme-harvest-node.gym.bond:3001',
    'https://03.symbol-jp.net:3001',
    'https://symbol-node.xyz:3001',
    'https://0-0.symbol-node.org:3001',
    'https://888.symsym.info:3001',
    'https://00.high-performance.symbol-node.jp:3001',
    'https://0-0-0-0-0-0-netherlands.rich-harvester.club:3001',
    'https://0-0-0-0-2.high-performance.symbol-node.jp:3001',
    'https://0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.xym-farming.harvest-node.site:3001',
    'https://nem1.kitsutsuki.tokyo:3001',
    'https://0-0-0-0-10.supreme-harvest-node.gym.bond:3001',
    'https://nia.symbol.community:3001',
    'https://0-0-0-0-3.symbol-nodes.org:3001',
  ];
}

function getTestNetNodeList(): string[] {
  return [
    'https://symbol-test.next-web-technology.com:3001',
    'https://201-joey-dual.symboltest.net:3001',
    'https://401-joey-dual.symboltest.net:3001',
    'https://pequod.cola-potatochips.net:3001',
    'https://sym-test.opening-line.jp:3001',
    'https://001-joey-dual.symboltest.net:3001',
    'https://stg.harvesting-sweet-potatoes.club:3001',
    'https://6.dusan.gq:3001',
    'https://sym-test-02.opening-line.jp:3001',
    'https://sym-test-03.opening-line.jp:3001',
    'https://sym-test-10.opening-line.jp:3001',
    'https://sym-test-08.opening-line.jp:3001',
    'https://sym-test-07.opening-line.jp:3001',
    'https://sym-test-04.opening-line.jp:3001',
    'https://sym-test-06.opening-line.jp:3001',
    'https://sym-test-05.opening-line.jp:3001',
    'https://mikun-testnet.tk:3001',
    'https://test.hideyoshi-node.net:3001',
    'https://yamatanoorochi.sfn.tools:3001',
    'https://7.dusan.gq:3001',
    'https://sym-test-01.opening-line.jp:3001',
  ];
}

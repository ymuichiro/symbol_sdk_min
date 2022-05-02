import { BlockOrderByEnum } from "../open_api/BlockOrderByEnum";
import { Order } from "../open_api/Order";

/** block search queries */
export interface BlockSearchCriteria {
  signerPublicKey?: string;
  beneficiaryAddress?: string;
  pageSize?: number;
  pageNumber?: number;
  offset?: string;
  order?: Order;
  orderBy?: BlockOrderByEnum;
}
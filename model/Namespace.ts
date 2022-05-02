import { AliasTypeEnum } from "../open_api/AliasTypeEnum";
import { NamespaceRegistrationTypeEnum } from "../open_api/NamespaceRegistrationTypeEnum";
import { Order } from "../open_api/Order";

/** criteria when search namespace */
export interface SearchNamespacesRequest {
  ownerAddress?: string;
  registrationType?: NamespaceRegistrationTypeEnum;
  level0?: string;
  aliasType?: AliasTypeEnum;
  pageSize?: number;
  pageNumber?: number;
  offset?: string;
  order?: Order;
}
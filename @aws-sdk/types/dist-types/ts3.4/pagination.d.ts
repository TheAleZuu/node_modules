import { Client } from "./client";
export type Paginator<T> = AsyncGenerator<T, T, unknown>;
export interface PaginationConfiguration {
  client: Client<any, any, any>;
  pageSize?: number;
  startingToken?: any;
  stopOnSameToken?: boolean;
}

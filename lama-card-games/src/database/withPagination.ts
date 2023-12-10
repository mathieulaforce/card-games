import getPropertyValueByName from "@/lib/getPropertyValueByName";
import { PagingRequest } from "@/lib/paging";
import { AnyColumn, SQLWrapper, asc, desc } from "drizzle-orm";
import { PgSelect } from "drizzle-orm/pg-core";

function withPagination<T extends PgSelect>(
    qb: T ,
    paging: PagingRequest,
  ) {
    const sortDirection = paging.sort?.direction ?? 'asc' == "asc" ? asc: desc;
    const sortPropertyName = paging.sort?.property ?? 'id';
    const sortProperty = getPropertyValueByName(qb, sortPropertyName);
    if(!sortProperty){
        console.warn(`Property ${sortPropertyName} not found, pagination might work incorrectly`)
        return qb.limit(paging.pageSize).offset(paging.page * paging.pageSize);
    }
    return qb.orderBy(sortDirection(sortProperty as never)).limit(paging.pageSize).offset(paging.page * paging.pageSize);
  }

  export default withPagination;
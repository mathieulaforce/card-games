
export interface PagingRequest {
    page: number;
    pageSize: number;
    sort?: {
        property: string;
        direction: 'asc' | 'desc';
    };
}

export interface PagingRequestTyped<T> extends Omit<PagingRequest, 'sort'> {
    sort?: {
        property: keyof T;
        direction: 'asc' | 'desc';
    };
}


export interface Paging extends PagingRequest{
    total?: number;
    totalPages?: number;
}

export interface PagingResult<T> {
    paging: Paging;
    data: T[];
}
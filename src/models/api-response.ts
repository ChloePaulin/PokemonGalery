export interface ApiResponse<T> {
    data:T;
    page:number;
    pageSize:number;
    totalCount:number;
}

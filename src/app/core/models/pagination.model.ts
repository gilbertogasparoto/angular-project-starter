export const DEFAULT_PAGE_SIZE = 10;

export interface iPagedResponse<T> {
    currentPage: number,
    pageSize: number,
    totalRows: number,
    rows: T[],
    totalPages: number
}
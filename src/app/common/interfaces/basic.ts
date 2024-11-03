export interface BasicResponse<T> {
  items: T[]
  currentPageNumber: number
  totalPagesCount: number
  totalItemsCount: number
  maximumItemsPerPageCount: number
}

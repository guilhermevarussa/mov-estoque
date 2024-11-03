export interface BasicResponse<T> {
  items: T[]
  currentPageNumber: number
  totalPagesCount: number
  totalItemsCount: number
  maximumItemsPerPageCount: number
}


export interface TableItem {
  key: string;
  element: string | undefined;
  quantity: number;
  unit: string;
  amount: number;
  currency: string;
}
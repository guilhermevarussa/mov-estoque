export interface StockItem {
    key: string;
    elementKey: string;
    farmKey: string;
    locationKey: string;
    quantity: {
      unit: string;
      magnitude: number;
    };
    amount: {
      currencyCode: string;
      amount: number;
    };
}

export interface StockItemFilter {
  requiredPageNumber: number;
  maximumItemsPerPageCount: number;
  stockItemKeys: string[];
  locationKey: string;
  elementKey: string;
  cropKey: string;
  sortDescending: boolean;
}

export interface StockItemFindAllRequest extends StockItemFilter {}

export interface StockItemFindAllResponse extends StockItem {}
import { BasicResponse } from "../../../common/interfaces/basic";

export interface StockLocation {
    key: string;
    name: string;
    farmKey: string;
  }

  export interface StockLocationFilter {
    requiredPageNumber: number;
    maximumItemsPerPageCount: number;
    stockLocationKeys: string[];
    sortDescending: boolean;
  }


    export interface StockLocationFindAllResponse extends BasicResponse<StockLocation> {}

    export interface StockLocationFindAllResponse extends StockLocation {}
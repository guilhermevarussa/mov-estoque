import { BasicResponse } from "../../../common/interfaces/basic";

export interface Element {
    key: string;
    name: string;
    category: string;
    type: string | null;
    measuringUnit: string;
  }

  export interface ElementFilter {
    requiredPageNumber: number;
    maximumItemsPerPageCount: number;
    elementKeys: string[];
    sortDescending: boolean;
  }
  

export interface ElementFindAllResponse extends BasicResponse<Element> {}

export interface ElementFindAllResponse extends  Element {}
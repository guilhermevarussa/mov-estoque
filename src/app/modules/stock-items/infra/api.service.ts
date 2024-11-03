import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockItem, StockItemFilter, StockItemFindAllRequest } from '../core/types';
import { StockItemService } from '../core/service';

@Injectable()
export class StockItemApiService implements StockItemService {

  constructor(private httpClient:HttpClient) { }


  getStockItems(stockItemKek:string):Observable<StockItem> {
    return this.httpClient.get<StockItem>(`/pub/v1/stock-items/stockItem::${stockItemKek}`);
  }

  stockeItemsFilter(filterItens:StockItemFilter):Observable<StockItemFindAllRequest> {
    return this.httpClient.post<StockItemFindAllRequest>(`/pub/v1/stock-items/filter`,filterItens);
  }




}

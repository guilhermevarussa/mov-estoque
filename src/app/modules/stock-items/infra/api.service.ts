import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockItem, StockItemFilter } from '../core/types';

@Injectable({
  providedIn: 'root'
})
export class StockItemApiService {

  constructor(private httpClient:HttpClient) { }


  getStockItems(stockItemKek:string):Observable<StockItem> {
    return this.httpClient.get<StockItem>(`/pub/v1/stock-items/stockItem::${stockItemKek}`);
  }

  stockeItemsFilter(filterItens:StockItemFilter):Observable<StockItem> {
    return this.httpClient.post<StockItem>(`/pub/v1/stock-items/filter`,filterItens);
  }




}

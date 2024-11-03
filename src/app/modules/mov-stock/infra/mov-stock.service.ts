import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockAddition, StockLog, StockRemoval } from '../core/types';
import { Observable } from 'rxjs';

@Injectable()
export class MovStockApiService {

  constructor(private httpClient:HttpClient) {}

  removeStock(stockMovement:StockRemoval):Observable<StockLog> {
    return this.httpClient.post<StockLog>(`pub/v1/stock-logs/manual-removals`,stockMovement);
  }

  addStock(stockMovement:StockAddition):Observable<StockLog> {
    return this.httpClient.post<StockLog>(`pub/v1/stock-logs/manual-additions`,stockMovement);
  }


}

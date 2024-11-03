import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockLocationService } from '../core/service';
import { StockLocation, StockLocationFilter, StockLocationFindAllResponse } from '../core/types';
import { Observable } from 'rxjs';

@Injectable()
export class StockLocationApiService implements StockLocationService {

  constructor(private httpClient:HttpClient) {}

  getStockLocations(
    stockLocationKey: string
  ): Observable<StockLocation> {
    return this.httpClient.get<StockLocation>(`/pub/v1/stock-locations/${stockLocationKey}`);
  }


  filterStockLocations(filterData:StockLocationFilter):Observable<StockLocationFindAllResponse>{
    return this.httpClient.post<StockLocationFindAllResponse>('/pub/v1/stock-locations/filter',filterData);
  }


  

}

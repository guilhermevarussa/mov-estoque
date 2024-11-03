import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { StockLocationApiService } from '../infra/stock-location.service'
import {
  StockLocation,
  StockLocationFilter,
  StockLocationFindAllResponse
} from './types'

@Injectable({
  providedIn: 'root',
  useClass: StockLocationApiService
})
export abstract class StockLocationService {
  constructor () {}

  abstract getStockLocations(
    stockLocationKey: string
  ): Observable<StockLocation>

  abstract filterStockLocations(
    filterData: StockLocationFilter
  ): Observable<StockLocationFindAllResponse>
}

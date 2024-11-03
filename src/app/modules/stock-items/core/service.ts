import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { StockItem, StockItemFilter } from './types'
import { StockItemApiService } from '../infra/api.service'

@Injectable({
  providedIn: 'root',
  useClass: StockItemApiService
})
export abstract class StockItemService {
  constructor () {}

  abstract getFarms(stockItemKek: string): Observable<StockItem>
  abstract stockeItemsFilter(
    filterItens: StockItemFilter
  ): Observable<StockItemFilter>
}

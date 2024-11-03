import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MovStockApiService } from '../infra/mov-stock.service'
import { StockAddition, StockLog, StockRemoval } from './types'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
  useClass: MovStockApiService
})
export abstract class MovStockService {
  constructor () {}

  abstract removeStock(stockMovement: StockRemoval): Observable<StockLog>
  abstract addStock(stockMovement: StockAddition): Observable<StockLog>
}

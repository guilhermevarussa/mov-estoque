import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { RatingModule } from 'primeng/rating'
import { TableModule } from 'primeng/table'
import { StockItemService } from '../../modules/stock-items/core/service'
import {
  StockItem,
  StockItemFilter,
  StockItemFindAllRequest
} from '../../modules/stock-items/core/types'

@Component({
  selector: 'app-stock-items',
  standalone: true,
  imports: [TableModule, RatingModule, ButtonModule, CommonModule],
  templateUrl: './stock-items.component.html',
  styleUrl: './stock-items.component.scss'
})
export class StockItemsComponent implements OnInit {
  initialFilter: StockItemFilter = {
    requiredPageNumber: 1,
    maximumItemsPerPageCount: 50,
    stockItemKeys: [],
    locationKey: '',
    elementKey: '',
    cropKey: '',
    sortDescending: true
  }

  stockIems: StockItem[] = []

  @Input() locationKey!: string

  constructor (private stockItemsService: StockItemService) {}

  ngOnInit (): void {

    this.getStockItemsByFilters(this.initialFilter)
  }

  getStockItemsByFilters (filter: StockItemFilter) {
    if (this.locationKey) {
      filter.locationKey = this.locationKey
    }

    this.stockItemsService.stockeItemsFilter(filter).subscribe({
      next: (response: StockItemFindAllRequest) => {
        this.stockIems = response.items
        console.log(this.stockIems)
      },
      error: error => {
        console.error(error)
      }
    })
  }
}

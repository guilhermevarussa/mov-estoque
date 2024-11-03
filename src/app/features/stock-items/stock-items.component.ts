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
import { ElementService } from '../../modules/elements/core/service'
import { Element, ElementFilter, ElementFindAllResponse } from '../../modules/elements/core/types'
import { TableItem } from '../../common/interfaces/basic'

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

  initialElementFilter: ElementFilter = {
    requiredPageNumber: 1,
    maximumItemsPerPageCount: 200,
    elementKeys: [],
    sortDescending: true
  }

  stockIems: StockItem[] = []
  elements: Element[] = []

  tableItems: TableItem[] = []
  

  @Input() locationKey!: string

  constructor (private stockItemsService: StockItemService, private elementService:ElementService) {}

  ngOnInit (): void {
    this.getStockItemsByFilters(this.initialFilter)
    this.getElement(this.initialElementFilter)
  }

  getStockItemsByFilters (filter: StockItemFilter) {
    if (this.locationKey) {
      filter.locationKey = this.locationKey
    }
    this.stockItemsService.stockeItemsFilter(filter).subscribe({
      next: (response: StockItemFindAllRequest) => {
        console.log(response)
        this.stockIems = response.items
        this.buildTableItems(); 
      },
      error: error => {
        console.error(error)
      }
    })
  }

  getElement(filters:ElementFilter) {
    this.elementService.filterElements(filters).subscribe({
      next: (response:ElementFindAllResponse) => {
        console.log(response)
        this.elements = response.items
        this.buildTableItems()
      },
      error: error => {
        console.error(error)
      }
    })
  }


  buildTableItems() {
    this.tableItems = []
    this.stockIems.forEach(item => {
      const element = this.elements.find(element => element.key === item.elementKey)
      this.tableItems.push({
        key: item.key,
        element: element?.name ? element.name : 'Nome não informado',
        quantity: item.quantity.magnitude,
        unit: item.quantity.unit,
        amount: item.amount.amount,
        currency: item.amount.currencyCode
      })
    })
  }


}

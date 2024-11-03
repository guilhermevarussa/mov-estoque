import { Component, OnInit } from '@angular/core'
import { StockLocationService } from '../../modules/stock-location/core/service'
import {
  StockLocation,
  StockLocationFilter,
  StockLocationFindAllResponse
} from '../../modules/stock-location/core/types'
import { ButtonModule } from 'primeng/button'
import { CommonModule } from '@angular/common'
import { RatingModule } from 'primeng/rating'
import { TableModule, TableRowExpandEvent } from 'primeng/table'
import { StockItemsComponent } from '../stock-items/stock-items.component'

@Component({
  selector: 'app-stock-locations',
  standalone: true,
  imports: [TableModule, RatingModule, ButtonModule, CommonModule,StockItemsComponent],
  templateUrl: './stock-locations.component.html',
  styleUrl: './stock-locations.component.scss'
})
export class StockLocationsComponent implements OnInit {
  constructor (private stockLocationService: StockLocationService) {}

  initFilter: StockLocationFilter = {
    requiredPageNumber: 2,
    maximumItemsPerPageCount: 10,
    stockLocationKeys: [],
    sortDescending: true
  }

  stockLotations: StockLocation[] = []

  stockLocationKey:string = ''

  expandedRow: { [key: string]: boolean } = {}

  ngOnInit (): void {
    this.getStockLocations(this.initFilter)
    console.log(this.stockLocationKey)
  }

  getStockLocations (filterData: StockLocationFilter) {
    this.stockLocationService.filterStockLocations(filterData).subscribe({
      next: (response: StockLocationFindAllResponse) => {
        this.stockLotations = response.items
      },
      error: error => {
        console.error(error)
      }
    })
  }

  onRowExpand (event: any): void {
    this.expandedRow = {} 
    this.expandedRow[event.data.key] = true
    this.stockLocationKey = event.data.key   
  }

  onRowCollapse (event: any): void {
    delete this.expandedRow[event.data.key]
  }
}

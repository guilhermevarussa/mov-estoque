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
import { icons } from '../../icons-provider'

@Component({
  selector: 'app-stock-locations',
  standalone: true,
  imports: [TableModule, RatingModule, ButtonModule, CommonModule],
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

  stockLotations:StockLocation[] = []

  ngOnInit (): void {
    this.getStockLocations(this.initFilter)
  }

  getStockLocations (filterData: StockLocationFilter) {
    this.stockLocationService.filterStockLocations(filterData).subscribe({
      next: (response: StockLocationFindAllResponse) => {
        this.stockLotations = response.items
        console.log(this.stockLotations)        
      },
      error: error => {
        console.error(error)
      }
    })
  }


  onRowExpand(event:TableRowExpandEvent) {
    return true
    
  }


  onRowCollapse(event:TableRowExpandEvent) {
    return false
}

}

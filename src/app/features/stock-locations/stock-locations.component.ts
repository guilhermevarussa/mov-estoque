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
import { TableModule } from 'primeng/table'
import { StockItemsComponent } from '../stock-items/stock-items.component'
import { DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-stock-locations',
  standalone: true,
  imports: [TableModule, RatingModule, ButtonModule, CommonModule,StockItemsComponent],
  providers: [DialogService],
  templateUrl: './stock-locations.component.html',
  styleUrl: './stock-locations.component.scss'
})
export class StockLocationsComponent implements OnInit {
  constructor (private stockLocationService: StockLocationService,public dialogService: DialogService) {}

  initFilter: StockLocationFilter = {
    requiredPageNumber: 0,
    maximumItemsPerPageCount: 100,
    stockLocationKeys: [],
    sortDescending: true
  }

  stockLotations: StockLocation[] = []

  ref: DynamicDialogRef | undefined

  ngOnInit (): void {
    this.getStockLocations(this.initFilter)
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

  openStockDialog(stockLocation:StockLocation) {
    const ref = this.dialogService.open(StockItemsComponent, {
      header:`Estoque disponível em ${stockLocation.name}`,
      width: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        locationKey: stockLocation.key
      }
    })
  }


 openAddStockDialog() {}
 
 openRemoveStockDialog() {}

}

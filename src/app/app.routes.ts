import { Routes } from '@angular/router'
import { ElementsComponent } from './features/elements/elements.component'
import { StockLocationsComponent } from './features/stock-locations/stock-locations.component'

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ElementsComponent,
      },
      {
        path: 'locais',
        component: StockLocationsComponent,
      }
    ]
  }
]

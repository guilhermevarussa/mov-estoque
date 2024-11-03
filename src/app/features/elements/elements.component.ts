import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../modules/elements/core/service';
import { Element, ElementFilter, ElementFindAllResponse } from '../../modules/elements/core/types';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-elements',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.scss'
})
export class ElementsComponent implements OnInit {

  constructor(private elementService:ElementService) { }

  initFilter: ElementFilter = {
    requiredPageNumber: 1,
    maximumItemsPerPageCount: 10,
    elementKeys: [],
    sortDescending: false
  }

  elements:Element[] = []
  listOfCurrentPageData: Element[] = [];

  ngOnInit(): void {
    this.getElementsByFilter()
  }

  getElementsByFilter() {
    this.elementService.filterElements(this.initFilter).subscribe({
      next: (response:ElementFindAllResponse) => {
        this.elements = response.items
        console.log(this.elements)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  onCurrentPageDataChange($event: Element[]): void {
    this.listOfCurrentPageData = $event;
    // this.refreshCheckedStatus();
  }


}

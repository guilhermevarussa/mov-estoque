import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ElementApiService } from '../infra/element.service'
import { ElementFilter, ElementFindAllResponse } from './types'

@Injectable({
  providedIn: 'root',
  useClass: ElementApiService
})
export abstract class ElementService {
  constructor () {}
  
  abstract getElementByKey(elementKey: string): Observable<Element>

  abstract filterElements(elementFilter: ElementFilter): Observable<ElementFindAllResponse>
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementFilter, ElementFindAllResponse } from '../core/types';
import { ElementService } from '../core/service';

@Injectable()
export class ElementApiService implements ElementService {

  constructor(private httpClient:HttpClient) { }

  getElementByKey(elementKey:string):Observable<Element> {
    return this.httpClient.get<Element>(`/pub/v1/elements/element::${elementKey}`);
  }

  filterElements(elementFilter:ElementFilter):Observable<ElementFindAllResponse> {
    return this.httpClient.post<ElementFindAllResponse>('/pub/v1/elements/filter',elementFilter);
  }


}

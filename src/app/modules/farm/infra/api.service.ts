import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FarmFindAllResponse } from '../core/types';
import { Observable } from 'rxjs';

@Injectable()
export class FarmApiService {

  constructor(private httpClient:HttpClient) {}


  getFarms():Observable<FarmFindAllResponse> {
    return this.httpClient.get<FarmFindAllResponse>('/pub/v1/farms');
  }

}

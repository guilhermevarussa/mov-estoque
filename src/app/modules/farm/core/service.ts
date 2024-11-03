import { Injectable } from '@angular/core'
import { FarmApiService } from '../infra/api.service';
import { FarmFindAllResponse } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useClass: FarmApiService  
})

export abstract class FarmService {
  constructor () {}

  abstract getFarms(): Observable<FarmFindAllResponse>;
  
}

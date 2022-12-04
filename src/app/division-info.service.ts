import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Division } from './division';
import { DIVISIONS } from './fake-divisions';

@Injectable({
  providedIn: 'root'
})
export class DivisionInfoService {

  constructor() { }

  getDivisions(): Observable<Division[]> {
    const divisions = of(DIVISIONS);
    return divisions;
  }
}

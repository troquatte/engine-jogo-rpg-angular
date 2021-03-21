import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Models
import { PositionMap } from '../models/position-map';

//Phases
import { PositionMapPhaseOneService } from './position-map-phase-one.service';
import { PositionMapPhaseTwoService } from './position-map-phase-two.service';

@Injectable({
  providedIn: 'root'
})
export class RouterMapsService {

  constructor(
    private positionMapPhaseOneService: PositionMapPhaseOneService,
    private positionMapPhaseTwoService: PositionMapPhaseTwoService
  ) { }

  public switchMaps(id: string): Observable<Array<PositionMap>> {
    return new Observable((subscribe) => {
      switch (id) {
        case '1':
          subscribe.next(this.positionMapPhaseOneService.getPositionMap())
          break;
        case '2':
          subscribe.next(this.positionMapPhaseTwoService.getPositionMap())
          break;
      }
    })
  }

}

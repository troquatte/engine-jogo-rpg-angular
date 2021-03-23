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

  //MyHero
  private myMaps: Array<PositionMap> = [
    {
      id: 0,
      y: 0,
      x: 0,
      width: 0,
      height: 0,
    }
  ]

  constructor(
    private positionMapPhaseOneService: PositionMapPhaseOneService,
    private positionMapPhaseTwoService: PositionMapPhaseTwoService
  ) { }

  public switchMaps(id: string) {
    switch (id) {
      case '1':
        this.myMaps = this.positionMapPhaseOneService.getPositionMap()
        break;
      case '2':
        this.myMaps = this.positionMapPhaseTwoService.getPositionMap()
        break;
    }
  }

  //Observable Position Hero Services
  public getGamePlayMaps(): Observable<Array<PositionMap>> {
    return new Observable((subscribe) => {
      if (this.myMaps) {
        return subscribe.next(this.myMaps)
      }
    })
  }
}

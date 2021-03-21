import { Injectable } from '@angular/core';

//Models
import { PositionMap } from '../models/position-map';

@Injectable({
  providedIn: 'root'
})
export class PositionMapPhaseTwoService {

  private initialPositionMap: number = 20;

  private positionMap: Array<PositionMap> = [
    {
      id: 1,
      y: this.initialPositionMap + 0,
      x: this.initialPositionMap + 0,
      width: 564,
      height: 564,
      disabled: true,
      background: 'url(assets/images/mapa.jpg)',
    }
  ];

  constructor() { }

  public getPositionMap() {
    return this.positionMap;
  }
}

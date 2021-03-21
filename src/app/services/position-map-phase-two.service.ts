import { Injectable } from '@angular/core';
import { PositionMapPhasesService } from './position-map-phases.service';

//Models
import { PositionMap } from '../models/position-map';
import { PositionHeroService } from './position-hero.service';

@Injectable({
  providedIn: 'root'
})
export class PositionMapPhaseTwoService extends PositionMapPhasesService {

  private positionMap: Array<PositionMap> = [
    {
      id: 1,
      y: 0,
      x: this.initialPositionMap + 0,
      width: 564,
      height: 564,
      disabled: true,
      background: 'url(assets/images/maps/mapa.jpg)',
    }
  ];

  constructor(
    private positionHeroService: PositionHeroService,
  ) {
    super();

    this.initialPositionHeroMap = {
      y: 100,
      x: 200
    }
  }

  public getPositionMap() {
    this.positionHeroService.setGamePlayHero().y = this.initialPositionHeroMap.y;
    this.positionHeroService.setGamePlayHero().x = this.initialPositionHeroMap.x;
    return this.positionMap;
  }
}

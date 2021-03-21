import { Injectable } from '@angular/core';
import { PositionMapPhasesService } from './position-map-phases.service';

//Models
import { PositionMap } from '../models/position-map';

//Position Hero
import { PositionHeroService } from './position-hero.service';

@Injectable({
  providedIn: 'root'
})
export class PositionMapPhaseOneService extends PositionMapPhasesService {

  private positionMap: Array<PositionMap> = [
    {
      id: 1,
      y: 0,
      x: this.initialPositionMap + 0,
      width: 564,
      height: 564,
      disabled: true,
      mapSelected: true,
      background: 'url(assets/images/maps/mapa-baixo.jpg)',
      positionTips: [
        {
          id: 1,
          y: 420,
          x: 420,
          event: "Você é bixão mesmo quer saber mais sobre o assunto? Arrasta pra cima!"
        }
      ],
      positionFromTo: [
        {
          id: 1,
          from: {
            mapaId: 1,
            y: 100, x: 510
          },
          to: {
            mapaId: 2,
            y: 85, x: 70
          }
        },
      ]
    },
    {
      id: 2,
      y: 0,
      x: this.initialPositionMap + 564,
      width: 564,
      height: 564,
      disabled: false,
      background: 'url(assets/images/maps/mapa.jpg)',
      positionTips: [
        {
          id: 5,
          y: 320,
          x: 320,
          event: "Aeeeeee Funfouuuu"
        },
      ],
      positionFromTo: [
        {
          id: 3,
          from: {
            mapaId: 2,
            y: 100, x: 30
          },
          to: {
            mapaId: 1,
            y: 85, x: 430
          }
        }
      ]
    }
  ];

  constructor(
    private positionHeroService: PositionHeroService,
  ) {
    super();

    this.initialPositionHeroMap = {
      y: 100,
      x: 100
    }
  }

  public getPositionMap() {
    this.positionHeroService.setGamePlayHero().y = this.initialPositionHeroMap.y;
    this.positionHeroService.setGamePlayHero().x = this.initialPositionHeroMap.x;
    return this.positionMap;
  }
}

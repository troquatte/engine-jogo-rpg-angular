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
          event: "Testando modal 1 com interação de texto"
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
          event: "Testando modal 2 com interação de texto"
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
      ],
      positionEnemy: [
        {
          id: 1,
          name: 'Orc',
          y: 300,
          x: 300,
          actionFight: false,
          avatar: 'url(assets/images/enemy/orcs/orc-1.jpg)',
          attribute: {
            atk: 0,
            def: 0,
            max_hp: 10,
            hp: 10,
            mana: 0,
            max_mana: 0
          }
        },
        {
          id: 2,
          name: 'Orc',
          y: 200,
          x: 200,
          actionFight: false,
          avatar: 'url(assets/images/enemy/orcs/orc-2.jpg)',
          attribute: {
            atk: 0,
            def: 0,
            max_hp: 10,
            hp: 10,
            mana: 0,
            max_mana: 0
          }
        },
        {
          id: 3,
          name: 'Orc',
          y: 400,
          x: 400,
          actionFight: false,
          avatar: 'url(assets/images/enemy/orcs/orc-3.jpg)',
          attribute: {
            atk: 0,
            def: 0,
            max_hp: 10,
            hp: 10,
            mana: 0,
            max_mana: 0
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

import { Injectable } from '@angular/core';

//Models
import { PositionMap } from '../models/position-map';

@Injectable({
  providedIn: 'root'
})
export class PositionMapPhaseOneService {

  private initialPositionMap: number = 20;

  private positionMap: Array<PositionMap> = [
    {
      id: 1,
      y: this.initialPositionMap + 0,
      x: this.initialPositionMap + 0,
      width: 564,
      height: 564,
      disabled: true,
      background: 'url(assets/images/mapa-baixo.jpg)',
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
      y: this.initialPositionMap + 0,
      x: this.initialPositionMap + 564,
      width: 564,
      height: 564,
      disabled: false,
      background: 'url(assets/images/mapa.jpg)',
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

  constructor() { }

  public getPositionMap() {
    return this.positionMap;
  }
}

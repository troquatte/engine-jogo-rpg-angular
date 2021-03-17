import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

interface Mapa {
  id: number,
  y: number,
  x: number,
  width: number,
  height: number,
  background: string,
  disabled: boolean,
  positionTips?: Array<{ id: number, y: number, x: number; event: string }>,
  positionNextMap?: Array<{ y: number, x: number }>,
  positionFromTo?: Array<{ id: number, from: { mapaId: number, y: number, x: number }, to: { mapaId: number, y: number, x: number } }>
}

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss']
})
export class GamePlayComponent implements OnInit {

  public positionMap: Array<Mapa> = [
    {
      id: 1,
      y: 0,
      x: 0,
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
      y: 0,
      x: 564,
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

  public positionHero: { mapaId: number, y: number, x: number, turn: boolean } = {
    y: 100,
    x: 100,
    turn: true,
    mapaId: 1,
  }

  constructor() { }

  ngOnInit(): void {
    // this.t().subscribe(
    //   res => {
    //     if (!this.positionHero.turn) {
    //       this.positionHero.turn = true;
    //     }
    //   }
    // )

    let audio = new Audio();
    audio.src = "./assets/music-ambient.mp3";
    audio.volume = 0.03;
    audio.loop = true;
    audio.play();
  }

  public moveHeroToMap(idTips: number) {

    if (this.positionHero.turn) {
      let findMap = this.positionMap.find((mapa) => {
        return this.positionHero.mapaId === mapa.id
      });

      if (findMap?.positionTips) {
        let findTips = findMap.positionTips.find(result => {
          return result.id === idTips
        });

        if (findTips) {
          this.positionHero.x = (findMap.x + findTips.x) - (60 - 24);
          this.positionHero.y = (findMap.y + findTips.y) - (60 - 24);

          setTimeout(() => {
            let audio = new Audio();
            audio.src = "./assets/check.mp3";
            audio.volume = 0.05;
            audio.play();
          }, 1000)
        }
      }
    }
  }

  public moveHeroFromToMap(idNextMap: number) {

    if (this.positionHero.turn) {
      let findMap = this.positionMap.find((mapa) => {
        return this.positionHero.mapaId === mapa.id
      });


      if (findMap?.positionFromTo) {

        let findNextMap = findMap.positionFromTo.find(result => {
          return result.to.mapaId === idNextMap
        })

        if (findNextMap) {
          this.positionHero.x = (findNextMap.from.x + findMap.x) - (60 - 24);
          this.positionHero.y = (findNextMap.from.y + findMap.y) - (60 - 24);
          this.positionHero.mapaId = findNextMap.to.mapaId;

          let heroPositionNextMap = this.positionMap.find((mapa) => {
            return findNextMap?.to.mapaId == mapa.id;
          })

          if (heroPositionNextMap?.id == idNextMap) {
            heroPositionNextMap.disabled = true;
          }

          // this.turHero();

          let audio = new Audio();
          audio.src = "./assets/open-door.mp3";
          audio.volume = 0.05;
          audio.play();

          setTimeout(() => {
            if (heroPositionNextMap && findNextMap) {
              this.positionHero.x = (heroPositionNextMap.x + findNextMap.to.x);
              this.positionHero.y = (heroPositionNextMap.y + findNextMap.to.y);
            }
          }, 2000)
        }

      }
    }

  }

  // public turHero() {
  //   switch (this.positionHero.turn) {
  //     case true:
  //       this.positionHero.turn = false;
  //       break;

  //     case false:
  //       this.positionHero.turn = true;
  //       break;
  //   }
  // }

  // public t(): Observable<any> {
  //   return interval(5000).pipe();
  // }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';

//Models
import { PositionMap } from 'src/app/models/position-map';
import { PositionHero } from 'src/app/models/position-hero';

//Services
import { PositionHeroService } from 'src/app/services/position-hero.service';

//Service Router Maps
import { RouterMapsService } from 'src/app/services/router-maps.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'game-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public positionHero: PositionHero = this.positionHeroService.selectHero();

  public stageMap: string = "1";
  public positionMap: Array<PositionMap> = [];

  constructor(
    private routerMapsService: RouterMapsService,
    private positionHeroService: PositionHeroService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      res => {
        if (res.id) {
          this.stageMap = res.id
        }
      },
      error => console.log(error)
    );

    this.positionHeroService.getGamePlayHero().subscribe(
      res => this.positionHero = res
    )

    this.routerMapsService.switchMaps(this.stageMap).subscribe(
      res => this.positionMap = res
    )
  }

  public moveHeroToMap(idTips: number) {

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
          audio.volume = 0.1;
          audio.play();
        }, 1000)
      }
    }

  }

  public moveHeroFromToMap(idNextMap: number) {

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


        let audio = new Audio();
        audio.src = "./assets/open-door.mp3";
        audio.volume = 0.1;
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

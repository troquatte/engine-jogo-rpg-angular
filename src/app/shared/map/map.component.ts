import { Component, DoCheck, OnInit } from '@angular/core';

//Angular Material
import { MatDialog } from '@angular/material/dialog';

//Models
import { PositionMap } from 'src/app/models/position-map';
import { PositionPersons } from 'src/app/models/position-persons';

//Services Hero and Master
import { PositionHeroService } from 'src/app/services/position-hero.service';
import { PositionMitoService } from 'src/app/services/position-mito.service';

//Service Router Maps
import { RouterMapsService } from 'src/app/services/router-maps.service';
import { ActivatedRoute } from '@angular/router';
import { SoundMapService } from 'src/app/services/sound-map.service';
import { ModalTipsComponent } from '../modal/modal-tips/modal-tips.component';

@Component({
  selector: 'game-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, DoCheck {

  //Position Hero
  public positionHero: PositionPersons = this.positionHeroService.selectHero();

  //Selected MapStage
  public stageMap: string = "1";
  //Array actual Map
  public positionMap: Array<PositionMap> = [];

  constructor(
    private routerMapsService: RouterMapsService,
    private positionHeroService: PositionHeroService,
    private positionMasterService: PositionMitoService,
    private activatedRoute: ActivatedRoute,
    private soundMapService: SoundMapService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.routerMapsService.switchMaps(this.stageMap)
    this.positionHero = this.positionHeroService.getGamePlayHero();

    this.activatedRoute.params.subscribe(
      res => {
        if (res.id) {
          this.stageMap = res.id
        }
      },
      error => console.log(error)
    );

    this.routerMapsService.getGamePlayMaps().subscribe(
      res => {
        this.positionMap = res
      }
    );
  }

  async ngDoCheck() {
    this.soundMapService.getPlayAmbientSound();

    await this.positionMasterService.turnGamePlayMito();
  }

  public async moveHeroToTips(idTips: number) {
    if (
      this.positionHeroService.getValidationActionsGamePlayHero() ||
      this.positionHeroService.setGamePlayHero().actionFightStopMove
    ) {
      return;
    }

    let findMap = this.positionMap.find((mapa) => {
      return this.positionHeroService.setGamePlayHero().mapaId === mapa.id
    });

    if (findMap?.positionTips) {
      let findTips = findMap.positionTips.find(result => {
        return result.id === idTips
      });

      if (findTips) {
        this.positionHeroService.setGamePlayHero().x = (findMap.x + findTips.x) - (60 - 15);
        this.positionHeroService.setGamePlayHero().y = (findMap.y + findTips.y) - (60 - 15);

        setTimeout(() => {
          this.soundMapService.getPlayObjectsSound("./assets/sounds/check.mp3");

          //Open Dialog
          this.dialog.closeAll();
          const dialogRef = this.dialog.open(ModalTipsComponent, {
            minWidth: '50%',
            maxWidth: '80%',
            minHeight: '100px',
            data: { event: findTips?.event }
          });

          dialogRef.afterClosed().subscribe(result => {
            //Add Turn Hero
            this.positionHeroService.setValidationActionsGamePlayHero();
          });
          //end Open Dialog
        }, 500)
      }
    }

  }

  public async moveHeroFromToMap(idNextMap: number) {
    if (
      this.positionHeroService.getValidationActionsGamePlayHero() ||
      this.positionHeroService.setGamePlayHero().actionFightStopMove
    ) {
      return;
    }

    let findMap = this.positionMap.find((mapa) => {
      return this.positionHeroService.setGamePlayHero().mapaId === mapa.id
    });

    if (findMap?.positionFromTo) {

      let findNextMap = findMap.positionFromTo.find(result => {
        return result.to.mapaId === idNextMap
      })

      if (findNextMap) {
        this.positionHeroService.setGamePlayHero().x = (findNextMap.from.x + findMap.x) - (60 - 15);
        this.positionHeroService.setGamePlayHero().y = (findNextMap.from.y + findMap.y) - (60 - 15);
        this.positionHeroService.setGamePlayHero().mapaId = findNextMap.to.mapaId;

        let heroPositionNextMap = this.positionMap.find((mapa) => {
          return findNextMap?.to.mapaId == mapa.id;
        })

        if (heroPositionNextMap?.id == idNextMap) {
          heroPositionNextMap.disabled = true;
        }

        if (heroPositionNextMap && findNextMap) {
          this.soundMapService.getPlayObjectsSound("./assets/sounds/open-door.mp3");

          await new Promise(resolve => setTimeout(() => {
            //Apaga os mapas deseativados
            this.positionMap.map((mapa) => {
              if (heroPositionNextMap?.id == mapa.id) {
                return mapa.mapSelected = true;
              }

              return mapa.mapSelected = false;
            })
            resolve(true);
          }, 2000));

          this.positionHeroService.setGamePlayHero().x = (heroPositionNextMap.x + findNextMap.to.x);
          this.positionHeroService.setGamePlayHero().y = (heroPositionNextMap.y + findNextMap.to.y);

          setTimeout(() => {
            this.moveHeroFromToEnemy(idNextMap);
            //Add Turn Hero
            this.positionHeroService.setValidationActionsGamePlayHero();
          }, 1000);
        }

      }

    }
  }

  public moveHeroFromToEnemy(idMap: number) {
    let positionMap = this.positionMap.find(res => {
      return res.id === idMap
    });

    if (positionMap?.positionEnemy?.length) {
      this.positionHeroService.setGamePlayHero().actionFightStopMove = true;
    }
  }

}

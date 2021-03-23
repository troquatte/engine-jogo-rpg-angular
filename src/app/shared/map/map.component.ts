import { Component, DoCheck, OnInit } from '@angular/core';

//Angular Material
import { MatDialog } from '@angular/material/dialog';

//Models
import { PositionMap } from 'src/app/models/position-map';
import { PositionPersons } from 'src/app/models/position-persons';

//Services
import { PositionHeroService } from 'src/app/services/position-hero.service';

//Service Router Maps
import { RouterMapsService } from 'src/app/services/router-maps.service';
import { ActivatedRoute } from '@angular/router';
import { SoundMapService } from 'src/app/services/sound-map.service';
import { ModalTipsComponent } from '../modal/modal-tips/modal-tips.component';

//Service FigthSystem
import { FightingSystemService } from 'src/app/services/fighting-system.service';


@Component({
  selector: 'game-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, DoCheck {

  public positionHero: PositionPersons = this.positionHeroService.selectHero();

  public stageMap: string = "1";
  public positionMap: Array<PositionMap> = [];

  constructor(
    private routerMapsService: RouterMapsService,
    private positionHeroService: PositionHeroService,
    private activatedRoute: ActivatedRoute,
    private soundMapService: SoundMapService,
    private fightingSystemService: FightingSystemService,
    private dialog: MatDialog
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
      res => {
        this.positionHero = res;
      }
    );

    this.routerMapsService.switchMaps(this.stageMap)

    this.routerMapsService.getGamePlayMaps().subscribe(
      res => {
        this.positionMap = res
      }
    );
  }

  ngDoCheck() {
    this.soundMapService.getPlayAmbientSound();
  }

  public moveHeroToTips(idTips: number) {
    if (this.positionHero.actionFight) {
      return;
    }

    let findMap = this.positionMap.find((mapa) => {
      return this.positionHero.mapaId === mapa.id
    });

    if (findMap?.positionTips) {
      let findTips = findMap.positionTips.find(result => {
        return result.id === idTips
      });

      if (findTips) {
        this.positionHero.x = (findMap.x + findTips.x) - (60 - 15);
        this.positionHero.y = (findMap.y + findTips.y) - (60 - 15);

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
            console.log('The dialog was closed');
          });
          //end Open Dialog
        }, 500)
      }
    }

  }

  public async moveHeroFromToMap(idNextMap: number) {
    if (this.positionHero.actionFight) {
      return;
    }

    let findMap = this.positionMap.find((mapa) => {
      return this.positionHero.mapaId === mapa.id
    });

    if (findMap?.positionFromTo) {

      let findNextMap = findMap.positionFromTo.find(result => {
        return result.to.mapaId === idNextMap
      })

      if (findNextMap) {
        this.positionHero.x = (findNextMap.from.x + findMap.x) - (60 - 15);
        this.positionHero.y = (findNextMap.from.y + findMap.y) - (60 - 15);
        this.positionHero.mapaId = findNextMap.to.mapaId;

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

          this.positionHero.x = (heroPositionNextMap.x + findNextMap.to.x);
          this.positionHero.y = (heroPositionNextMap.y + findNextMap.to.y);

          setTimeout(() => {
            this.moveHeroEnemy(idNextMap);
          }, 1000);
        }

      }

    }
  }

  //REFATORAR
  public moveHeroEnemy(idMap: number) {
    let positionMap = this.positionMap.find(res => {
      return res.id === idMap
    });

    if (positionMap?.positionEnemy?.length) {
      this.positionHero.actionFight = true;
    }
  }

  public atkEnemy(enemy: PositionPersons) {
    this.fightingSystemService.setSelectedEnemyId(enemy);
  }
}

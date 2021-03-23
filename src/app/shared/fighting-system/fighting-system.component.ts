import { Component, OnInit } from '@angular/core';

//Models
import { PositionMap } from 'src/app/models/position-map';
import { PositionPersons } from 'src/app/models/position-persons';

//Services
import { RouterMapsService } from 'src/app/services/router-maps.service';
import { PositionHeroService } from 'src/app/services/position-hero.service';
import { FightingSystemService } from 'src/app/services/fighting-system.service';
import { SoundMapService } from 'src/app/services/sound-map.service';

@Component({
  selector: 'game-fighting-system',
  templateUrl: './fighting-system.component.html',
  styleUrls: ['./fighting-system.component.scss']
})
export class FightingSystemComponent implements OnInit {

  public positionHero: PositionPersons = this.positionHeroService.selectHero();
  public positionMap: Array<PositionMap> = [];
  public positionEnemy: Array<PositionPersons> = [];

  constructor(
    private positionHeroService: PositionHeroService,
    private routerMapsService: RouterMapsService,
    private fightingSystemService: FightingSystemService,
    private soundMapService: SoundMapService
  ) { }

  ngOnInit(): void {
    this.positionHeroService.getGamePlayHero().subscribe(
      res => this.positionHero = res
    )

    this.routerMapsService.getGamePlayMaps().subscribe(
      res => this.positionMap = res
    )

  }


  public hideEnemy(hideEnemy: PositionPersons) {

    let findMap = this.positionMap.find(res => {
      return this.positionHero.mapaId === res.id;
    })

    if (findMap?.positionEnemy) {
      let enemy = findMap.positionEnemy.filter((res: any) => {
        if (res.id !== hideEnemy.id) {
          return res
        }
      })

      findMap.positionEnemy = enemy;
    }

    if (!findMap?.positionEnemy?.length) {
      this.positionHero.actionFight = false;
    }
  }

  public async atack(atack: number) {
    this.fightingSystemService.getSelectedEnemy().subscribe(
      async (res) => {
        res.attribute.hp = res.attribute.hp - atack;
        res.actionFightAnimate = true;

        this.soundMapService.getPlayObjectsSound('./assets/images/enemy/orcs/audio/orc.mp3')

        if (res.attribute.hp <= 0) {
          this.hideEnemy(res)
        }

        await new Promise(() => {
          setTimeout(() => {
            res.actionFightAnimate = false;
          }, 1000);
        });
      }
    )
  }
}

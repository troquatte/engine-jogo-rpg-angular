import { Component, OnInit } from '@angular/core';

//Models
import { PositionMap } from 'src/app/models/position-map';
import { PositionPersons } from 'src/app/models/position-persons';

//Services
import { RouterMapsService } from 'src/app/services/router-maps.service';
import { PositionHeroService } from 'src/app/services/position-hero.service';
import { FightingSystemService } from 'src/app/services/fighting-system.service';

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

  public atack(atack: number) {
    this.fightingSystemService.getSelectedEnemy().subscribe(
      res => {
        res.attribute.hp = res.attribute.hp - atack;
        if (res.attribute.hp <= 0) {
          this.hideEnemy(res)
        }
      }
    )
  }
}

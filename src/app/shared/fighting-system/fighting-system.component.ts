import { Component, DoCheck, OnInit } from '@angular/core';

//Models
import { PositionMap } from 'src/app/models/position-map';
import { PositionHero } from 'src/app/models/position-hero';

//Services
import { RouterMapsService } from 'src/app/services/router-maps.service';
import { ActivatedRoute } from '@angular/router';
import { PositionHeroService } from 'src/app/services/position-hero.service';
import { FightingSystemService } from 'src/app/services/fighting-system.service';

@Component({
  selector: 'game-fighting-system',
  templateUrl: './fighting-system.component.html',
  styleUrls: ['./fighting-system.component.scss']
})
export class FightingSystemComponent implements OnInit, DoCheck {

  public positionHero: PositionHero = this.positionHeroService.selectHero();
  public positionMap: Array<PositionMap> = [];
  public positionEnemy: Array<
    {
      id: number,
      name: string,
      y: number,
      x: number,
      avatar: string,
      actionFight: boolean,
      attribute?: {
        atk: number,
        def: number,
        hp: number,
        mana: number
      }
    }
  > = [];

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

  ngDoCheck() {
    this.showEnemy()
  }

  public showEnemy() {
    let enemy = this.positionMap.find(res => {
      return this.positionHero.mapaId === res.id;
    })

    if (enemy?.positionEnemy) {
      return this.positionEnemy = enemy?.positionEnemy
    }

    return this.positionEnemy = []
  }

  public hideEnemy(hideEnemy: {
    id: number,
    name: string,
    y: number,
    x: number,
    avatar: string,
    actionFight: boolean,
    attribute?: {
      atk: number,
      def: number,
      hp: number,
      mana: number
    }
  }) {

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
      this.positionHero.fight = false;
    }
  }

  public atk(atk: number) {
    this.fightingSystemService.getSelectedEnemy().subscribe(
      res => {
        res.attribute.hp = atk - res.attribute.hp;
        if (res.attribute.hp === 0) {
          this.hideEnemy(res)
        }
      }
    )
  }
}

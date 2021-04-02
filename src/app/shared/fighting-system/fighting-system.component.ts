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
    this.positionHero = this.positionHeroService.getGamePlayHero();

    this.routerMapsService.getGamePlayMaps().subscribe(
      res => this.positionMap = res
    )
  }

  public async atackEnemy(atack: number) {
    //Get selected enemy
    let enemy = this.fightingSystemService.getSelectedEnemy();

    //Find position map hero
    let findMap = this.positionMap.find(res => {
      return this.positionHero.mapaId === res.id;
    })

    //Verify map enemy Hero
    if (findMap?.positionEnemy) {
      //Find exists enemy selected in Map
      let selectedEnemy = findMap.positionEnemy.filter((res: any) => {
        return res.id == enemy.id;
      })

      //Validation Atack
      if (!selectedEnemy.length || this.positionHeroService.getValidationActionsGamePlayHero()) {
        return;
      }

      //Add Turn Hero
      this.positionHeroService.setValidationActionsGamePlayHero();

      //Modify Attribute enemy
      enemy.attribute.hp = enemy.attribute.hp - atack;
      enemy.actionFightAnimate = true;

      //Play Sound
      this.soundMapService.getPlayObjectsSound('./assets/sounds/enemy/orcs/audio/orc.mp3')

      //Verify Hp enemy and kill
      if (enemy.attribute.hp <= 0) {
        this.killEnemy(enemy)
      }

      //Await action Animate Fade Figth
      await new Promise(() => {
        setTimeout(() => {
          enemy.actionFightAnimate = false;
        }, 1000);
      });
    }


  }

  public killEnemy(hideEnemy: PositionPersons) {
    //Find position map hero
    let findMap = this.positionMap.find(res => {
      return this.positionHero.mapaId === res.id;
    })

    //Verify map enemy Hero
    if (findMap?.positionEnemy) {
      //Filter kill to enemy
      let enemy = findMap.positionEnemy.filter((res: any) => {
        return res.id !== hideEnemy.id
      })

      //Return actual list enemy array
      findMap.positionEnemy = enemy;
    }

    //Hero enabled move in the map
    if (!findMap?.positionEnemy?.length) {
      this.positionHero.actionFightStopMove = false;
    }
  }

}

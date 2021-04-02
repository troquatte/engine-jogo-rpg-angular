import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { PositionMap } from 'src/app/models/position-map';

//Services
import { PositionHeroService } from 'src/app/services/position-hero.service';
import { RouterMapsService } from 'src/app/services/router-maps.service';
import { SoundMapService } from 'src/app/services/sound-map.service';

@Component({
  selector: 'game-turn-mito',
  templateUrl: './turn-mito.component.html',
  styleUrls: ['./turn-mito.component.scss']
})
export class TurnMitoComponent implements OnInit, DoCheck, OnChanges {

  public turnMito: boolean = false;

  constructor(
    private positionHeroService: PositionHeroService,
    private routerMapsService: RouterMapsService,
    private soundMapService: SoundMapService,
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  ngDoCheck() {
    this.timerMito();
  }

  async atackHero() {
    let findHeroMaps: PositionMap | undefined;

    this.routerMapsService.getGamePlayMaps().subscribe(
      res => {
        findHeroMaps = res.find((findMaps: PositionMap) => {
          return findMaps.id == this.positionHeroService.getGamePlayHero().mapaId
        })
      }
    )

    if (findHeroMaps?.positionEnemy) {
      findHeroMaps.positionEnemy.forEach((enemy) => {
        this.positionHeroService.getGamePlayHero().attribute.hp = this.positionHeroService.getGamePlayHero().attribute.hp - enemy.attribute.atk;
      });

      await new Promise((resolve) => {
        setTimeout(() => {
          this.soundMapService.getPlayObjectsSound('./assets/sounds/enemy/orcs/audio/atack.mp3');
          resolve(true)
        }, 500)
      })
    }
  }

  async timerMito() {
    if (this.positionHeroService.getValidationActionsGamePlayHero()) {

      if (!this.turnMito) {
        this.turnMito = this.positionHeroService.getValidationActionsGamePlayHero();
        this.atackHero();
      }

    } else {
      this.turnMito = false;
    }
  }
}


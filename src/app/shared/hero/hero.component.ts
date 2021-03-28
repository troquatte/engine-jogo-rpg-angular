import { Component, OnInit } from '@angular/core';

//Models
import { PositionPersons } from 'src/app/models/position-persons';

//Services
import { PositionHeroService } from 'src/app/services/position-hero.service';

@Component({
  selector: 'game-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public positionHero: PositionPersons = this.positionHeroService.selectHero('captain');

  constructor(
    private positionHeroService: PositionHeroService
  ) { }

  ngOnInit(): void {
    this.positionHero = this.positionHeroService.getGamePlayHero();
  }

  public lifeHero(i: any) {
    return `${i}%`;
  }
}

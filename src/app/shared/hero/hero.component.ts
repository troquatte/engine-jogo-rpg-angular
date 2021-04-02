import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { PositionPersons } from 'src/app/models/position-persons';

//Services
import { PositionHeroService } from 'src/app/services/position-hero.service';

@Component({
  selector: 'game-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, DoCheck {

  public positionHero: PositionPersons = this.positionHeroService.selectHero('captain');

  constructor(
    private positionHeroService: PositionHeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.positionHero = this.positionHeroService.getGamePlayHero();
  }

  ngDoCheck() {
    if (this.positionHero.attribute.hp <= 0) {
      window.location.href = '';
    }
  }

  public lifeHero(i: any) {
    return `${i}%`;
  }
}

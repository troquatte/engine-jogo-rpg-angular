import { Component, Input, OnInit } from '@angular/core';

//Models
import { PositionHero } from 'src/app/models/position-hero';

//Services
import { PositionHeroService } from 'src/app/services/position-hero.service';

@Component({
  selector: 'game-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public positionHero: PositionHero = this.positionHeroService.selectHero('captain');

  constructor(
    private positionHeroService: PositionHeroService,
  ) { }

  ngOnInit(): void {
    this.positionHeroService.getGamePlayHero().subscribe(
      res => this.positionHero = res
    )
  }

}

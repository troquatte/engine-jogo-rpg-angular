import { Component, DoCheck, OnInit } from '@angular/core';
import { PositionHeroService } from 'src/app/services/position-hero.service';

@Component({
  selector: 'game-turn-mito',
  templateUrl: './turn-mito.component.html',
  styleUrls: ['./turn-mito.component.scss']
})
export class TurnMitoComponent implements OnInit, DoCheck {

  public turnMito: boolean = false;

  constructor(
    private positionHeroService: PositionHeroService
  ) { }

  ngOnInit(): void {
  }

  async ngDoCheck() {
    if (this.positionHeroService.getValidationActionsGamePlayHero()) {
      setTimeout(() => {
        this.turnMito = true;
      }, 500)
    } else {
      this.turnMito = false;
    }
  }
}

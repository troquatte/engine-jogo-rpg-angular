import { Injectable } from '@angular/core';

//Services
import { PositionHeroService } from './position-hero.service';

@Injectable({
  providedIn: 'root'
})
export class PositionMitoService {

  private runningValidationTurnGamePlayHero: boolean = false;

  constructor(
    private positionHeroService: PositionHeroService
  ) { }

  public turnGamePlayMito(): Promise<boolean> {

    return new Promise((resolve) => {
      if (this.positionHeroService.getValidationActionsGamePlayHero() && !this.runningValidationTurnGamePlayHero) {
        this.runningValidationTurnGamePlayHero = true;
        setTimeout(() => {
          //Validation Turn Hero
          this.positionHeroService.setGamePlayHero().actionHeroInMap?.map(turn => {
            return turn.action = false;
          });

          this.runningValidationTurnGamePlayHero = false;
          this.positionHeroService.setTurnGamePlayHero(false);
          return resolve(true);
        }, 5000)
      }
    });

  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Models
import { PositionHero } from '../models/position-hero';

@Injectable({
  providedIn: 'root'
})
export class PositionHeroService {

  //Position null
  private nullHero: PositionHero = {
    y: 0,
    x: 0,
    mapaId: 0,
    avatar: ``
  }

  //Type Heroes
  private captain: PositionHero = {
    y: 100,
    x: 100,
    mapaId: 1,
    avatar: `url('../../../assets/images/hero.jpg')`
  }

  //Hero selected Game Play
  private gamePlayHero: PositionHero = this.nullHero;

  constructor() { }


  //SelectHero
  public selectHero(hero?: string) {

    switch (hero) {
      case `captain`:
        this.gamePlayHero = this.captain;
        break;
    }

    return this.nullHero;

  }

  //Observable Position Hero Services
  public getGamePlayHero(): Observable<any> {
    return new Observable((subscribe) => {
      if (this.gamePlayHero) {
        return subscribe.next(this.gamePlayHero)
      }
    })
  }
}

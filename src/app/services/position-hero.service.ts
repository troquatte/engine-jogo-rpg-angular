import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Models
import { PositionHero } from '../models/position-hero';

@Injectable({
  providedIn: 'root'
})
export class PositionHeroService {

  //MyHero
  private myHero: PositionHero = {
    y: 0,
    x: 0,
    mapaId: 1,
    avatar: ``
  }

  //Type Heroes
  private captain: string = `url('../../../assets/images/heroes/captain.jpg')`

  //Hero selected Game Play
  private gamePlayHero: PositionHero = this.myHero;

  constructor() { }

  //SelectHero
  public selectHero(hero?: string) {

    switch (hero) {
      case `captain`:
        this.myHero.avatar = this.captain;
        break;
    }

    return this.myHero;

  }

  //Observable Position Hero Services
  public getGamePlayHero(): Observable<any> {
    return new Observable((subscribe) => {
      if (this.gamePlayHero) {
        return subscribe.next(this.gamePlayHero)
      }
    })
  }

  public setGamePlayHero() {
    return this.myHero;
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Models
import { PositionPersons } from '../models/position-persons';

@Injectable({
  providedIn: 'root'
})
export class PositionHeroService {

  //MyHero
  private myHero: PositionPersons = {
    id: 0,
    y: 0,
    x: 0,
    mapaId: 1,
    avatar: ``,
    actionFight: false,
    attribute: {
      atk: 0,
      def: 0,
      max_hp: 0,
      hp: 0,
      max_mana: 0,
      mana: 0
    },
    fightAction: [
      {
        name: "atack",
        atk: 3,
      }
    ]
  }

  //Type Heroes
  private captain: string = `url('assets/images/heroes/captain.jpg')`

  //Hero selected Game Play
  private gamePlayHero: PositionPersons = this.myHero;

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

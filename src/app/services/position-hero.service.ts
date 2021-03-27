import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { delay, map, subscribeOn } from 'rxjs/operators';

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
    actionHeroInMap: [
      { action: false },
      { action: false },
      { action: false },
    ],
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

  //Filter Turn Game Play
  private turnGamePlay: boolean = false;

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
  public getGamePlayHero(): Observable<PositionPersons> {
    return new Observable((subscribe) => {
      if (this.gamePlayHero) {
        return subscribe.next(this.gamePlayHero)
      }
    })
  }

  //Use Method in services
  //Set Positions initial maps in services
  public setGamePlayHero(): PositionPersons {
    return this.myHero;
  }

  public setValidationTurnGamePlayHero(): boolean {
    //Validation Turn Hero
    let turnGame = this.gamePlayHero.actionHeroInMap?.find(turn => {
      return turn.action == false;
    });

    if (turnGame?.action == false) {
      turnGame.action = true;
    }
    //end Validation Turn Hero

    const filterAllTurns = this.gamePlayHero.actionHeroInMap?.filter(turn => {
      return turn.action == true
    })

    if (this.gamePlayHero.actionHeroInMap?.length == filterAllTurns?.length) {
      return this.turnGamePlay = true;
    }

    return this.turnGamePlay = false;
    //end Validation All Map Turn Hero
  }

  public getValidationTurnGamePlayHero(): boolean {
    return this.turnGamePlay;
  }

  private runningValidationTurnGamePlayHero: boolean = false;
  public a(): Promise<boolean> {

    return new Promise((resolve) => {
      if (!this.runningValidationTurnGamePlayHero) {
        this.runningValidationTurnGamePlayHero = true;
        setTimeout(() => {
          //Validation Turn Hero
          this.setGamePlayHero().actionHeroInMap?.map(turn => {
            return turn.action = false;
          });

          this.runningValidationTurnGamePlayHero = false;
          this.turnGamePlay = false;
          return resolve(true);
        }, 5000)
      }
    })
  }
}

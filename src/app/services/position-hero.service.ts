import { Injectable } from '@angular/core';

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
    attribute: {
      atk: 0,
      def: 0,
      max_hp: 0,
      hp: 0,
      max_mana: 0,
      mana: 0
    }
  }

  //Hero selected Game Play
  private gamePlayHero: PositionPersons = this.myHero;

  //Filter Turn Game Play
  private turnGamePlay: boolean = false;

  constructor() { }

  //SelectHero
  public selectHero(hero?: string) {

    switch (hero) {
      case `captain`:
        this.myHero.id = 1;
        this.myHero.avatar = `url('assets/images/heroes/captain.jpg')`;
        this.myHero.attribute = {
          atk: 1,
          def: 3,
          max_hp: 10,
          hp: 10,
          max_mana: 0,
          mana: 0
        };
        break;
    }

    return this.myHero;
  }

  //Use Method in services
  //Set Positions initial maps in services
  public setGamePlayHero(): PositionPersons {
    return this.myHero;
  }

  //Position Hero Services
  public getGamePlayHero(): PositionPersons {
    return this.gamePlayHero;
  }

  //Turn Game Play Hero
  public setValidationActionsGamePlayHero(): boolean {
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

  public getValidationActionsGamePlayHero(): boolean {
    return this.turnGamePlay;
  }

  public setTurnGamePlayHero(set: boolean): boolean {
    return this.turnGamePlay = set;
  }
}

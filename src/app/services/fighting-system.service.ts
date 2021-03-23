import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FightingSystemService {

  private selectedEnemy: {
    id: number,
    name: string,
    y: number,
    x: number,
    avatar: string,
    actionFight: boolean,
    attribute: {
      atk: number,
      def: number,
      hp: number,
      mana: number
    }
  } = {
      id: 0,
      name: "",
      y: 0,
      x: 0,
      avatar: "",
      actionFight: false,
      attribute: {
        atk: 0,
        def: 0,
        hp: 0,
        mana: 0
      }
    };

  constructor() { }

  //Observable Position Hero Services
  public getSelectedEnemy(): Observable<{
    id: number,
    name: string,
    y: number,
    x: number,
    avatar: string,
    actionFight: boolean,
    attribute: {
      atk: number,
      def: number,
      hp: number,
      mana: number
    }
  }> {
    return new Observable(subscribe => {
      subscribe.next(this.selectedEnemy);
    });
  }

  public setSelectedEnemyId(idEnemy: {
    id: number,
    name: string,
    y: number,
    x: number,
    avatar: string,
    actionFight: boolean,
    attribute: {
      atk: number,
      def: number,
      hp: number,
      mana: number
    }
  }) {
    return this.selectedEnemy = idEnemy;
  }
}

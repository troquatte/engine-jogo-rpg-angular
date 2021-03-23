import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PositionPersons } from '../models/position-persons';

@Injectable({
  providedIn: 'root'
})
export class FightingSystemService {

  private selectedEnemy: PositionPersons = {
    id: 0,
    name: "",
    y: 0,
    x: 0,
    avatar: "",
    actionFight: false,
    attribute: {
      atk: 0,
      def: 0,
      max_hp: 0,
      hp: 0,
      max_mana: 0,
      mana: 0
    }
  };

  constructor() { }

  //Observable Position Hero Services
  public getSelectedEnemy(): Observable<PositionPersons> {
    return new Observable(subscribe => {
      subscribe.next(this.selectedEnemy);
    });
  }

  public setSelectedEnemyId(enemy: PositionPersons) {
    return this.selectedEnemy = enemy;
  }
}

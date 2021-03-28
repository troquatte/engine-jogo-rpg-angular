import { Component, Input, OnInit } from '@angular/core';

//Models
import { PositionPersons } from 'src/app/models/position-persons';

//Service FigthSystem
import { FightingSystemService } from 'src/app/services/fighting-system.service';

@Component({
  selector: 'game-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.scss']
})
export class EnemyComponent implements OnInit {

  @Input() public mapa: any;

  constructor(
    private fightingSystemService: FightingSystemService
  ) { }

  ngOnInit(): void {
  }


  public selectedEnemy(enemy: PositionPersons) {
    this.fightingSystemService.setSelectedEnemyId(enemy);
  }

  public lifeEnemy(i: any) {
    return `${i}%`;
  }
}

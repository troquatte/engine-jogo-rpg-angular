import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Route
import { PageRoutingModule } from './page.routing.module';

//Pages
import { GamePlayComponent } from './game-play/game-play.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GamePlayComponent
  ],
  exports: [
    GamePlayComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ]
})
export class PageModule { }

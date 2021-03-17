import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Route
import { PageRoutingModule } from './page.routing.module';

//Pages
import { GamePlayComponent } from './game-play/game-play.component';


@NgModule({
  declarations: [
    GamePlayComponent
  ],
  exports: [
    GamePlayComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }

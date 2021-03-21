import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Components
import { GamePlayComponent } from './game-play/game-play.component';



const InitialRoutes: Routes = [
  {
    path: '',
    component: GamePlayComponent
  },
  {
    path: ':id',
    component: GamePlayComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(InitialRoutes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material
import { MatDialogModule } from '@angular/material/dialog';

//Components
import { HeroComponent } from './hero/hero.component';
import { MapComponent } from './map/map.component';
import { SoundComponent } from './sound/sound.component';
import { ModalTipsComponent } from './modal/modal-tips/modal-tips.component';
import { ModalComponent } from './frame/modal/modal.component';



@NgModule({
  declarations: [
    HeroComponent,
    MapComponent,
    SoundComponent,
    ModalTipsComponent,
    ModalComponent
  ],
  exports: [
    HeroComponent,
    MapComponent,
    SoundComponent,
    ModalTipsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class SharedModule { }

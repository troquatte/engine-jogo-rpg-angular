import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { MapComponent } from './map/map.component';
import { SoundComponent } from './sound/sound.component';



@NgModule({
  declarations: [HeroComponent, MapComponent, SoundComponent],
  exports: [HeroComponent, MapComponent, SoundComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

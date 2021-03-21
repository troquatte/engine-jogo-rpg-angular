import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [HeroComponent, MapComponent],
  exports: [HeroComponent, MapComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

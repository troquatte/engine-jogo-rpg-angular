import { Component, OnInit } from '@angular/core';

//Service
import { SoundMapService } from 'src/app/services/sound-map.service';

@Component({
  selector: 'game-button-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss']
})
export class SoundComponent implements OnInit {

  public soundType: boolean = this.soundMapService.pausedAllSound;

  constructor(
    private soundMapService: SoundMapService
  ) { }

  ngOnInit(): void {
  }

  public toggleSound() {
    this.soundType = this.soundMapService.getPouseAllSound();
  }
}

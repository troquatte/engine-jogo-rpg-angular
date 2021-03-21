import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundMapService {

  // AmbientSound
  private playAmbientSound: HTMLAudioElement = new Audio();
  private playAmbientStartVolume: number = 0.2;
  private playAmbientVolume: number = this.playAmbientStartVolume;

  // ObjectSound
  private playObjectsSound: HTMLAudioElement = new Audio();
  private playObjectsStartVolume: number = 0.1;
  private playObjectsSoundVolume: number = this.playObjectsStartVolume;

  // Paused All Volume
  public pausedAllSound: boolean = false;

  constructor() { }

  public getPlayAmbientSound() {
    if (!this.playAmbientSound.src) {
      this.playAmbientSound.src = "./assets/sounds/ambients/music-ambient.mp3";
      this.playAmbientSound.volume = this.playAmbientVolume;
    } else {
      this.playAmbientSound.loop = true;
      this.playAmbientSound.play();
    }
  }

  public getPlayObjectsSound(sound: string) {
    this.playObjectsSound.src = sound;

    //Verify if voume == 0
    if (this.playObjectsSound.volume) {
      this.playObjectsSound.volume = this.playObjectsSoundVolume;
    }

    this.playObjectsSound.play();
  }

  public getPouseAllSound() {
    //Return Game Audio
    if (this.pausedAllSound) {
      this.playAmbientSound.volume = this.playAmbientStartVolume;
      this.playObjectsSound.volume = this.playObjectsStartVolume;

      //Change pausedSound
      return this.pausedAllSound = false;
    }

    //Clean Volume = 0
    this.playAmbientSound.volume = 0;
    this.playObjectsSound.volume = 0;

    //Change pausedSound
    return this.pausedAllSound = true;
  }
}

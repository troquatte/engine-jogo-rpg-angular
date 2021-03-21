import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss']
})
export class GamePlayComponent implements OnInit, DoCheck {

  // public phase: number;
  public gameAudio = new Audio();

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(
    //   res => this.phase = res.id,
    //   error => console.log(error)
    // );

    // this.t().subscribe(
    //   res => {
    //     if (!this.positionHero.turn) {
    //       this.positionHero.turn = true;
    //     }
    //   }
    // )
  }

  ngDoCheck() {
    if (!this.gameAudio?.src) {
      this.gameAudio.src = "./assets/music-ambient.mp3";
      this.gameAudio.volume = 0.2;
      this.gameAudio.loop = true;
    } else {
      this.gameAudio.play();
    }
  }
}

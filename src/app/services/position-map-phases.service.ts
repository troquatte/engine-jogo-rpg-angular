import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionMapPhasesService {

  public initialPositionMap: number = 0;
  public initialPositionHeroMap: { y: number, x: number } = {
    y: 0,
    x: 0
  }

  constructor() { }
}

export interface PositionHero {
  mapaId: number,
  y: number,
  x: number,
  avatar: string,
  fight: boolean,
  fightAction: [
    {
      name: string,
      atk: number
    },
  ]
}

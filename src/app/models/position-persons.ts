export interface PositionPersons {
  id: number,
  name?: string,
  mapaId?: number,
  y: number,
  x: number,
  avatar: string,
  actionFight: boolean,
  attribute: {
    atk: number,
    def: number,
    max_hp: number,
    hp: number,
    max_mana: number,
    mana: number
  }
  fightAction?: [
    {
      name: string,
      atk: number
    },
  ]
}

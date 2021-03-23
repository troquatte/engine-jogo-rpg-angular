export interface PositionPersons {
  id: number,
  name?: string,
  mapaId?: number,
  y: number,
  x: number,
  avatar: string,
  actionFight: boolean,
  actionFightAnimate?: boolean,
  attribute: PersonsAttribute,
  fightAction?: [
    {
      name: string,
      atk: number
    },
  ]
}

export interface PersonsAttribute {
  atk: number,
  def: number,
  max_hp: number,
  hp: number,
  max_mana: number,
  mana: number
}

export interface PositionPersons {
  id: number,
  name?: string,
  mapaId?: number,
  y: number,
  x: number,
  avatar: string,
  actionFightStopMove?: boolean,
  actionFightAnimate?: boolean,
  actionHeroInMap?: Array<{ action: boolean }>,
  attribute: PersonsAttribute,
}

export interface PersonsAttribute {
  atk: number,
  def: number,
  max_hp: number,
  hp: number,
  max_mana: number,
  mana: number
}

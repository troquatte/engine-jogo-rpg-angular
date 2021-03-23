export interface PositionMap {
  id: number,
  y: number,
  x: number,
  width: number,
  height: number,
  mapSelected?: boolean,
  disabled?: boolean,
  background?: string,
  positionTips?: Array<{ id: number, y: number, x: number; event: string }>,
  positionFromTo?: Array<{ id: number, from: { mapaId: number, y: number, x: number }, to: { mapaId: number, y: number, x: number } }>
  positionEnemy?: Array<
    {
      id: number,
      name: string,
      y: number,
      x: number,
      avatar: string,
      actionFight: boolean,
      attribute: {
        atk: number,
        def: number,
        hp: number,
        mana: number
      }
    }
  >
}

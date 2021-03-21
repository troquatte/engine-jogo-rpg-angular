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
}

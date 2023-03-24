export enum BorderStyle {
  Solid = 'solid',
  Dashed = 'dashed',
  Dotted = 'dotted',
  Double = 'double',
  Groove = 'groove',
  Ridge = 'ridge',
  Inset = 'inset',
  Outset = 'outset',
  None = 'none',
  Hidden = 'hidden',
}

export type Border = {
  width?: number
  style?: BorderStyle
  color?: string
}

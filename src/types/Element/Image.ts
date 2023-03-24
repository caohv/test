export enum ObjectFit {
  Fill = 'fill',
  Contain = 'contain',
  Cover = 'cover',
  None = 'none',
  ScaleDown = 'scale-down',
}

export type ImageEl = {
  src?: string
  alt?: string
  objectFit?: ObjectFit
}

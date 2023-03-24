export enum BackgroundType {
  Image = 'image',
  Color = 'color',
  Gradient = 'gradient',
  Video = 'video',
}

export enum BackgroundAttachment {
  Fixed = 'fixed',
  Scroll = 'scroll',
}

export enum BackgroundPosition {
  TopLeft = 'top left',
  TopCenter = 'top center',
  TopRight = 'top right',
  CenterLeft = 'center left',
  CenterCenter = 'center center',
  CenterRight = 'center right',
  BottomLeft = 'bottom left',
  BottomCenter = 'bottom center',
  BottomRight = 'bottom right',
}

export enum BackgroundRepeat {
  Repeat = 'repeat',
  RepeatX = 'repeat-x',
  RepeatY = 'repeat-y',
  NoRepeat = 'no-repeat',
}

export enum GradientType {
  Linear = 'linear-gradient',
  Radial = 'radial-gradient',
}

export type Background = {
  type?: BackgroundType
  image?: string
  video?: string
  size?: string
  attachment?: BackgroundAttachment
  position?: BackgroundPosition
  repeat?: BackgroundRepeat
  opacity?: number
  color?: string
  gradientType?: GradientType
  gradientColor?: string[]
}

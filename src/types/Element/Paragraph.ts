export enum TextDecoration {
  None = 'none',
  Underline = 'underline',
  LineThrough = 'line-through',
  Overline = 'overline',
}

export enum TextTransform {
  None = 'none',
  Capitalize = 'capitalize',
  Uppercase = 'uppercase',
  Lowercase = 'lowercase',
}

export enum FontStyle {
  Normal = 'normal',
  Italic = 'italic',
}

export enum TextAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum FontWeight {
  Normal = 'normal',
  Bold = 'bold',
  Bolder = 'bolder',
  Lighter = 'lighter',
  W100 = '100',
  W200 = '200',
  W300 = '300',
  W400 = '400',
  W500 = '500',
  W600 = '600',
  W700 = '700',
  W800 = '800',
  W900 = '900',
}

export type ParagraphEl = {
  value?: string
  fontSize?: number
  fontWeight?: FontWeight
  fontStyle?: FontStyle
  fontFamily?: string
  lineHeight?: number
  letterSpacing?: number
  textAlign?: TextAlign
  color?: string
  textDecoration?: TextDecoration
  textTransform?: TextTransform
}

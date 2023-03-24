import { ParagraphEl } from '.'

export enum HeadingType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  Div = 'div',
}

export type HeadingEl = ParagraphEl & {
  headingType?: HeadingType
}

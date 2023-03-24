import { Background, Border, BorderRadius, ButtonEl, Filter, HeadingEl, ImageEl, Overlay, ParagraphEl, Transform } from '..'

export * from './Button'
export * from './Heading'
export * from './Paragraph'
export * from './Image'

export enum ElementType {
  Button = 'button',
  Heading = 'heading',
  Paragraph = 'paragraph',
  Image = 'image',
}

export type SettingsCommonElement = {
  position?: {
    x?: number
    y?: number
  }
  width?: number
  height?: number
  background?: Background
  overlay?: Overlay
  filter?: Filter
  transform?: Transform
  border?: Border
  borderRadius?: BorderRadius
  zIndex?: number
}

export type MapElement = SettingsCommonElement & ButtonEl & HeadingEl & ParagraphEl & ImageEl

export type Element = {
  // common attributes
  id?: string
  sectionId?: string
  columnId?: string
  name?: string
  type?: ElementType

  // device attributes
  desktop?: MapElement
  mobile?: MapElement
}

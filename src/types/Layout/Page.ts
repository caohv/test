import { Element, Section } from '..'

export type Page = {
  id?: string
  layoutId?: string
  name?: string
  sections?: Section[]
  elements?: Element[]
}

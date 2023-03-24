import { Background, Filter, Overlay } from '..'

export * from './Overlay'

export type SettingsCommonSection = {
  height?: number
  background?: Background
  overlay?: Overlay
  filter?: Filter
  columns?: {
    id?: string
    span?: number
  }[]
}

export type Section = {
  // common attributes
  id?: string
  name?: string

  // device attributes
  desktop?: SettingsCommonSection
  mobile?: SettingsCommonSection
}

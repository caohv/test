import { Footer, Header } from '.'

export * from './Footer'
export * from './Header'
export * from './Page'

export enum DeviceType {
  Desktop = 'desktop',
  Mobile = 'mobile',
}

export enum ContainerDesktopWidth {
  Medium = 960,
  Large = 1200,
}

export enum ContainerMobileWidth {
  Medium = 320,
  Large = 420,
}

export type Layout = {
  id?: string
  name?: string
  font?: string
  container?: {
    desktop?: {
      width?: ContainerDesktopWidth
    }
    mobile?: {
      width?: ContainerMobileWidth
    }
  }
  desktop?: {
    header?: Header
    footer?: Footer
  }
  mobile?: {
    header?: Header
    footer?: Footer
  }
}

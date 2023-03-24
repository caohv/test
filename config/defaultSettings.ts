import type { Settings as LayoutSettings } from '@ant-design/pro-components'

const Settings: Partial<LayoutSettings> & {
  pwa?: boolean
} = {
  navTheme: 'light',
  colorPrimary: '#fa541c',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: '',
  pwa: true,
  headerRender: false,
}

export default Settings

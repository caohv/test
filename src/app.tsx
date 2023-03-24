import { message } from 'antd'
import { includes } from 'lodash'
import type { Settings as LayoutSettings, MenuDataItem } from '@ant-design/pro-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import type { RunTimeLayoutConfig } from '@umijs/max'
import { history } from '@umijs/max'
import defaultSettings from '../config/defaultSettings'
import { LOGO } from './assets'
import { fetcher } from './hooks'
import { AppProvider } from './providers'

const LOGIN_PATH = '/auth/login'
const REGISTER_PATH = '/auth/register'

library.add(fas, fab, far)

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>
  loading?: boolean
}> {
  return {
    settings: defaultSettings,
  }
}

// ProLayout https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <></>,
    footerRender: false,
    onPageChange: async () => {
      try {
        await fetcher()
      } catch (error) {
        if (!includes([LOGIN_PATH, REGISTER_PATH], window.location.pathname)) {
          message.info('Login expired. Please log in again')
          history.push(LOGIN_PATH)
        }
      }
    },
    menuDataRender: (menuList: MenuDataItem[]): MenuDataItem[] => {
      return menuList.map((item) => {
        return {
          ...item,
          icon: <i className={`icon ${item.icon}`} />,
          children: item.children,
        }
      })
    },
    logo: LOGO,
    menuHeaderRender: undefined,
    childrenRender: (children) => {
      return <AppProvider>{children}</AppProvider>
    },
    ...initialState?.settings,
  }
}

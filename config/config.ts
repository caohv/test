import { defineConfig } from '@umijs/max'
import defaultSettings from './defaultSettings'
import routes from './routes'

const { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY, REACT_APP_API_URL, REACT_APP_OPENAI_API_KEY } = process.env

export default defineConfig({
  hash: true,
  routes,
  theme: {
    'root-entry-name': 'variable',
  },
  ignoreMomentLocale: true,
  fastRefresh: true,
  model: {},
  initialState: {},
  title: '',
  layout: {
    locale: true,
    ...defaultSettings,
  },
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: false,
    title: false,
  },
  antd: {},
  request: {},
  access: {},
  headScripts: [{ src: '/scripts/loading.js', async: true }],
  presets: ['umi-presets-pro'],
  mfsu: {
    strategy: 'normal',
  },
  requestRecord: {},
  define: {
    REACT_APP_SUPABASE_URL,
    REACT_APP_SUPABASE_KEY,
    REACT_APP_API_URL,
    REACT_APP_OPENAI_API_KEY,
  },
})

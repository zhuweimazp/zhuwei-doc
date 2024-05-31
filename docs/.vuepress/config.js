import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { pwaPlugin } from '@vuepress/plugin-pwa'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '烛微IAST',
  description: '照亮应用安全的每个角落',

  theme: defaultTheme({
    logo: '/images/logo.png',

    navbar: ['/'],
  }),
  bundler: viteBundler(),
  plugins: [
    pwaPlugin({
      favicon: "/images/favicon.ico"
    }),
  ],
})

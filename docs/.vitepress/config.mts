import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TAO Documentation',
  description: 'Product documentation for the TAO agentic project',
  base: '/TAO-Product-Documentation/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Guide', link: '/guide/overview' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Overview', link: '/guide/overview' },
            { text: 'Features', link: '/guide/features' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fdrs10/TAO-Product-Documentation' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} TAO Project`
    }
  }
})

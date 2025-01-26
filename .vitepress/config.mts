import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MediaSavvy',
  description: "A piracy and all purpose wiki",
  titleTemplate: 'Piracy Wiki',
head: [
  ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ['meta', { name: 'description', content: 'A piracy and all-purpose wiki' }],
  ['meta', { property: 'og:title', content: 'MediaSavvy' }],
  ['meta', { property: 'og:description', content: 'A piracy and all-purpose wiki' }],
  ['meta', { property: 'og:image', content: '/favicon.ico' }],
  ['meta', { property: 'og:url', content: 'https://mediasavvy.pages.dev' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:title', content: 'MediaSavvy' }],
  ['meta', { name: 'twitter:description', content: 'A piracy and all-purpose wiki' }],
  ['meta', { name: 'twitter:image', content: '/favicon.ico' }]
],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      options: {
        miniSearch: { searchOptions: { combineWith: "AND" } },
        detailedView: false,
      },
      provider: "local",
    },
    outline: "deep",
    logo: "favicon.ico",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Discord Server (link fixed)', link: 'https://discord.com/invite/uEKARuGczF' },
      { text: 'Guides', link: 'https://rentry.org/mediasavvy-guides' },
      { text: 'Contact/Need help?', link: '/contact-me' }
    ],
    sidebar: [
      {
        text: 'Welcome',
        items: [
          { text: '👋 Welcome', link: '/Wiki/' },
          { text: '🚀 Beginners Guide to Piracy', link: '/Wiki/Beginners-Guide-to-Piracy' }
        ]
      },
      {
        text: 'Categories:',
        items: [
          { text: '🧩 Extensions/Adblocking', link: '/Wiki/Adblocking' },
          { text: '🤖 AI', link: '/Wiki/AI' },
          { text: '💾 Software', link: '/Wiki/Software' },
          { text: '🎮 Games', link: '/Wiki/Games' },
          { text: '🛡️ Security', link: '/Wiki/Security' },
          { text: '🎵 Music', link: '/Wiki/Music' },
          { text: '🎦 Movies/TV', link: '/Wiki/MoviesandTVShows' },
          { text: '🔠 Piracy Glossary', link: '/Wiki/PiracyGlossary' },
          { text: '💻 Hacking Tools', link: '/Wiki/Hacking-Tools-and-Software' },
          { text: '⚠️ Unsafe sites/programs', link: '/Wiki/UnsafeSites' },
          { text: '📱 Mobile', link: '/Wiki/Mobile' },
          { text: '📚 Books', link: '/Wiki/Books' },
          { text: '🌀 Torrenting', link: '/Wiki/Torrenting' },
          { text: '🔒 Privacy', link: '/Wiki/Privacy' },
          { text: '🧰 Tools', link: '/Wiki/Tools' },
          { text: '🪟 Windows', link: '/Wiki/Windows' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MediaSavvy/MediaSavvy_Wiki' }
    ]
  }
})


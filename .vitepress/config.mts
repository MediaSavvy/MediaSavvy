import { defineConfig } from 'vitepress'

type HeadConfig =
| [['link', { rel: 'icon', href: '/.vitepress/favicon.ico' }]]

// https://vitepress.dev/reference/site-config
export default defineConfig({
 title: 'MediaSavvy',
 titleTemplate: 'Piracy Wiki',
 description: "A piracy and all purpose wiki",
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
   logo: "/logo.ico",
   nav: [
     { text: 'Home', link: '/' },
     { text: 'Posts', link: 'https://mediasavvy.pages.dev/posts/' },
     { text: 'WhatsApp Channel', link: 'https://mediasavvy.pages.dev/whatsapp-channel' },
     { text: 'Guides', link: 'https://rentry.org/mediasavvy-guides'} 
   ],
   sidebar: [
     {
       text: 'Welcome'
       ,items: [ 
         { text: '👋 Welcome', link: '/Wiki/' },
         { text: '🚀 Beginners Guide to Piracy', link: '/Wiki/Beginners-Guide-to-Piracy' }
       ]
     },
     {
       text: 'Categories:',
       items: [
         { text: '🚫 Adblocking', link: '/Wiki/Adblocking' },
         { text: '🤖 AI', link: '/Wiki/AI' },
         { text: '💾 Software', link: '/Wiki/Software' },
         { text: '🧩 Extensions', link: '/Wiki/Extensions' },
         { text: '🎮 Games', link: '/Wiki/Games' },
         { text: '🛡️ Security', link: '/Wiki/Security' },
         { text: '🎵 Music', link: '/Wiki/Music' },
         { text: '🎦 Movies/TV', link: '/Wiki/MoviesandTVShows' },
         { text: '🔠 Piracy Glossary', link: '/Wiki/PiracyGlossary' },
         { text: '💻 Hacking Tools', link: '/Wiki/Hacking-Tools-and-Software'},
         { text: '⚠️ Unsafe sites/programs', link: '/Wiki/UnsafeSites' },
         { text: '📱 Mobile', link: '/Wiki/Mobile' },
         { text: '📚 Books', link: '/Wiki/Books' },
         { text: '🌀 Torrenting', link: '/Wiki/Torrenting'},
         { text: '🔒 Privacy', link: '/Wiki/Privacy'},
         { text: '🧰 Tools', link: '/Wiki/Tools' },
         { text: '🪟 Windows', link: '/Wiki/Windows'},
       ]
     }
   ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MediaSavvy/MediaSavvy_Wiki' }
    ]
  }
}
)


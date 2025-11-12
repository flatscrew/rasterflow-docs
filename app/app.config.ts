export default defineAppConfig({
  ui: {
    pageSection: {
        slots: {
          container: 'flex flex-col lg:grid py-16 sm:py-4 lg:py-16 gap-8 sm:gap-16'
        }
    },
    colors: {
      primary: 'purple',
      neutral: 'gray'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    },
    prose: {
      ul: {
        base: 'list-disc ps-6 my-5 marker:text-(--ui-border-accented)'
      },
      li: {
        base: 'my-1.5 ps-1.5 leading-7 [&>ul]:my-0'
      },
      steps: {
        base: 'ms-4 border-s border-default [counter-reset:step]'
      }
    }
  },
  seo: {
    siteName: 'RasterFlow'
  },
  header: {
    title: 'RasterFlow',
    to: '/',
    logo: {
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    navigation: [{
      label: 'Get Started',
      icon: 'i-lucide-square-play',
      to: '/guide'
    }, {
      label: 'Operations',
      icon: 'i-lucide-cpu',
      to: '/operations'
    }, {
      label: 'Download',
      icon: 'i-lucide-download',
      to: '/pages/download'
    }],
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/flatscrew/rasterflow',
      'target': '_blank',
      'aria-label': 'RasterFlow GitHub Repository'
    }, {
      'icon': 'i-lucide-coffee',
      'to': 'https://buymeacoffee.com/rasterflow',
      'target': '_blank',
      'aria-label': 'Buy me a coffee maybe? ;)'
    }]
  },
  footer: {
    credits: `RasterFlow © ${new Date().getFullYear()} · Licensed under GPL-3.0 · Powered by GEGL, GTK, and their contributors.`,
    links: [
      {
        'icon': '/icons/gtk.svg',
        'to': 'https://www.gtk.org/',
        'target': '_blank',
        'aria-label': 'GTK'
      },
      {
        'icon': '/icons/gegl.svg',
        'to': 'https://gegl.org/',
        'target': '_blank',
        'aria-label': 'GEGL'
      },
      {
        'icon': '/icons/vala.svg',
        'to': 'https://vala.dev',
        'target': '_blank',
        'aria-label': 'Vala'
      }
    ]
  },
  docs: {
    content: {
      download: {
        layout: 'page'
      }
    }
  }
})

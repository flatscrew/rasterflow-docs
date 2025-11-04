export default defineAppConfig({
  ui: {
    colors: {
      primary: 'purple',
      neutral: 'gray'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Nuxt Docs Template'
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
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/flatscrew/rasterflow',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-lucide-coffee',
      'to': 'https://buymeacoffee.com/rasterflow',
      'target': '_blank',
      'aria-label': 'Buy me a coffee maybe? ;)'
    }]
  },
  footer: {
    credits: `RasterFlow © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        icon: '/icons/gtk.svg',
        to: 'https://www.gtk.org/',
        target: '_blank',
        'aria-label': 'GTK'
      },
      {
        icon: '/icons/gegl.svg',
        to: 'https://gegl.org/',
        target: '_blank',
        'aria-label': 'GEGL'
      },
      {
        icon: '/icons/vala.svg',
        to: 'https://vala.dev',
        target: '_blank',
        'aria-label': 'Vala'
      }
    ]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-templates/docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Nuxt UI docs',
        to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
        target: '_blank'
      }]
    }
  },
  
  gegl: {
    operations: [
      {
        id: 'gaussian-blur',
        title: 'Gaussian Blur',
        description: 'Blurs the image using a Gaussian kernel.',
        params: [
          { name: 'std-dev-x', type: 'float', default: 4.0 },
          { name: 'std-dev-y', type: 'float', default: 4.0 }
        ],
        thumbnail: '/images/gegl/gaussian-blur.png'
      },
      {
        id: 'unsharp-mask',
        title: 'Unsharp Mask',
        description: 'Enhances edges by subtracting a blurred version of the image from the original.',
        params: [
          { name: 'radius', type: 'float', default: 3.0 },
          { name: 'amount', type: 'float', default: 1.0 }
        ],
        thumbnail: '/images/gegl/unsharp-mask.png'
      }
    ]
  }
})

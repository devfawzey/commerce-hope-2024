// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      title: "eCommerceHope",
      link: [
        {
          href: "/logo-dark.webp", rel: "icon", type: "image/webp"
        }
      ]
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxt/ui',
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    //optionl
    "nuxt-viewport",
    //optionl
    "nuxt-marquee",
    // "@sidebase/nuxt-auth",
    // 'nuxt-server-utils',
    "notivue/nuxt",
    "@formkit/auto-animate",
  ],
  css: [
    'notivue/notification.css', // Only needed if using built-in notifications
    'notivue/animations.css', // Only needed if using built-in animations
    '~/assets/css/global.css'
  ],

  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: '',
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Figtree: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  image: {
    provider: "vercel"
  },
  icon: {
    customCollections: [
      {
        dir: "./public/svg",
        prefix: "my-icon"
      }
    ]
  },
  runtimeConfig: {
    authSecret: process.env.NUXT_AUTH_SECRET || 'key',
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000'
    }
  },
  notivue: {
    limit: 3,

    // avoidDuplicates: true,
  },
  // auth
  // auth: {
  //   baseURL: "http://localhost:3000", // process.env.AUTH_ORIGIN ||
  //   globalAppMiddleware: true,
  //   provider: {
  //     type: 'authjs',
  //   }
  // },
  // nuxtServerUtils: {
  //   enabled: true, // default
  //   enableDevTools: true, // default
  //   mongodbUri: process.env.MONGODB_URI,
  // },

})

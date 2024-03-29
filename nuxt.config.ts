// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      title: '生理盐水 @hikariyo',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+SC' },
        { rel: 'icon', href: 'favicon.png', type: 'image/png' },
      ],
    },
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    viewer: false,
  },
})

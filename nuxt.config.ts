// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      title: '摸鱼 @kifuan',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+SC' },
      ],
    },
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    viewer: false,
  },
})

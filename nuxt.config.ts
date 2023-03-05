// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: '摸鱼 @kifuan',
    },
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    viewer: false,
  },
})

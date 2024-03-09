// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    'nuxt3-leaflet',
  ],
  plugins: [
    '~/plugins/leaflet.ts',
  ],
  css: ['leaflet/dist/leaflet.css'],
})

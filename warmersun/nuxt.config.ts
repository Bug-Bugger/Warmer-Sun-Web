// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    'nuxt3-leaflet',
    "@pinia/nuxt",
  ],
  plugins: [
    '~/plugins/leaflet.ts',
  ],
  css: ['leaflet/dist/leaflet.css'],
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/style.scss"],
  modules: [
    "nuxt-primevue",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
  ],
  primevue: {
    options: {
      unstyled: true,
    },
  },
});

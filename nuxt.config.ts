// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/css/style.scss"],
  app: {
    head: {
      title: "Y-PAY",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.svg" }],
    },
  },
  modules: [
    "@nuxtjs/i18n",
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
  i18n: {
    lazy: true,
    langDir: "locales",
    defaultLocale: "en",
    strategy: "prefix_except_default",
    locales: [
      { code: "en", iso: "en-US", file: "en.json", name: "English" },
      { code: "ua", iso: "uk-UA", file: "ua.json", name: "Українська" },
      { code: "de", iso: "de-DE", file: "de.json", name: "Deutch" },
      { code: "es", iso: "es-ES", file: "es.json", name: "Espaniol" },
    ],
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL,
    },
  },
});

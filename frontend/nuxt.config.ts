// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo"],

  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: "https://spacex-production.up.railway.app",
      },
    },
  },
});

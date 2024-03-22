// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo"],

  ssr: false,

  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: "http://localhost:5010/graphql",
      },
    },
  },
});

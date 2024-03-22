// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo"],

  // ssr: false,

  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: "http://backend:5010/graphql",
        // httpEndpoint: "http://localhost:5010/graphql",
      },
    },
  },
});

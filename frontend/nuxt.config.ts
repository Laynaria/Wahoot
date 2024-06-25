// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo"],

  ssr: false,

  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint:
          (process.env.BACKEND_URL as string) || "http://backend:5010/graphql",
        authType: "Bearer",
        authHeader: "Authorization",
        tokenName: "token",
        tokenStorage: "localStorage",
      },
    },
  },
});

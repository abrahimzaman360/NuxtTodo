import { resolve } from "path";

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/main.css", "~/assets/global.css"],
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Todo App",
      meta: [{ name: "description", content: "Todo Application." }],
    },
  },
  
});

// Documentation on Web:
// https://nuxt.com/docs/api/configuration/nuxt-config

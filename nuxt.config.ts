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
  css: ["~/assets/main.scss"]
});


// Documentation on Web:
// https://nuxt.com/docs/api/configuration/nuxt-config
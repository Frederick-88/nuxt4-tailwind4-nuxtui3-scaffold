import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  css: ["@/assets/css/global.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  ui: {
    theme: {
      colors: ["primary", "secondary", "info", "success", "warning", "error"],
    },
  },

  pinia: {
    storesDirs: ["store/**"],
    // storesDirs: ["app/store/**"],
  },

  // extends: ['github:Frederick-88/nuxt4-tailwind4-nuxtui3-layer-scaffold#master']
  extends: ["../test-nuxt4-app-layer-ui"],
});

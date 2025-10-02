import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  css: ["@/assets/css/global.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  // note: temp until supported https://github.com/vuejs/pinia/issues/3028
  pinia: {
    storesDirs: ["app/store/**", "../test-nuxt4-app-layer-ui/app/store/**"],
    // storesDirs: ["app/store/**"],
  },

  imports: {
    dirs: ["app/store/**", "app/composables/**"],
  },

  // extends: ['github:Frederick-88/nuxt4-tailwind4-nuxtui3-layer-scaffold#master']
  extends: ["../test-nuxt4-app-layer-ui"],
});

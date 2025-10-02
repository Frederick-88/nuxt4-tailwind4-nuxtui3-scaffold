import useChildTestComposable from "./child/useChildTestComposable";

function useTestComposable() {
  function init() {
    console.log("composable - init");
  }

  return { init };
}

// source: https://nuxt.com/docs/4.x/guide/directory-structure/app/composables#how-files-are-scanned
export { useTestComposable, useChildTestComposable };

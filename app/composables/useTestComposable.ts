export default function useTestComposable() {
  function init() {
    console.log("composable - init");
  }

  return { init };
}

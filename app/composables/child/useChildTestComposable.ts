export default function useChildTestComposable() {
  function childInit() {
    console.log("child composable - childInit");
  }

  return { childInit };
}

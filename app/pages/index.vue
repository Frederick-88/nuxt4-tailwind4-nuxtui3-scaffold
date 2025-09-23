<script lang="ts" setup>
const { init } = useSharedTestComposable();
// const { init: childInit } = useSharedChildTestComposable();

useHead({
  title: "Nuxt 4 + Nuxt UI Showcase",
  meta: [
    {
      name: "description",
      content:
        "A beautiful showcase of Nuxt 4 with Nuxt UI and Tailwind CSS components",
    },
  ],
});

onMounted(() => {
  init();
  // childInit();
});
</script>

<template>
  <div>
    <Test />
    <SharedLayerTest />
  </div>
</template>

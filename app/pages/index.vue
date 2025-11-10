<script lang="ts" setup>
const { init } = useTestComposable();
const { childInit } = useChildTestComposable();
const { layerInit } = useSharedTestComposable();
const { layerChildInit } = useSharedChildTestComposable();

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
  childInit();
  layerInit();
  layerChildInit();
});
</script>

<template>
  <div>
    <Test />
    <SharedLayerTest />

    <UModal>
      <UButton label="Open Modal here" color="neutral" />

      <template #content>
        <div class="h-full">
          <p>This is a modal body</p>
        </div>
      </template>
    </UModal>
  </div>
</template>

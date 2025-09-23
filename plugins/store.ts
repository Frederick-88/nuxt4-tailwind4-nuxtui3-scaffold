// "1st test"
// import { defineNuxtPlugin } from "nuxt/app";
// import type { PiniaPluginContext } from "pinia";

// function autoBindStore({ store, pinia }: PiniaPluginContext) {
//   if (!pinia) {
//     return;
//   }
// }

// export default defineNuxtPlugin(
//   ({
//     vueApp: {
//       config: { globalProperties },
//     },
//   }) => {
//     globalProperties.$pinia.use(autoBindStore);
//   }
// );

// "2nd test"
// import { defineNuxtPlugin } from "nuxt/app";

// const sharedStores = (import.meta as any).glob("@shared/store/*.ts", {
//   eager: true,
// });

// export default defineNuxtPlugin(({ $pinia }) => {
//   for (const [name, fn] of Object.entries(sharedStores)) {
//     console.log({ name, fn });

//     if (name.startsWith("use") && name.endsWith("Store")) {
//       (globalThis as any)[name] = (...args: any[]) =>
//         args.length > 0 ? (fn as any)(...args) : (fn as any)($pinia);
//     }
//   }
// });

// "3rd test" (AI)
// import { defineNuxtPlugin } from "nuxt/app";

// const sharedModules = (import.meta as any).glob("@shared/store/*.ts", {
//   eager: true,
// });

// export default defineNuxtPlugin(({ $pinia }) => {
//   // Loop over files
//   for (const mod of Object.values(sharedModules)) {
//     // Each mod is an object of exports
//     for (const [exportName, fn] of Object.entries(
//       mod as Record<string, unknown>
//     )) {
//       if (
//         exportName.startsWith("use") &&
//         exportName.endsWith("Store") &&
//         typeof fn === "function"
//       ) {
//         (globalThis as any)[exportName] = (...args: any[]) =>
//           args.length > 0 ? (fn as any)(...args) : (fn as any)($pinia);
//       }
//     }
//   }
// });

// "4th test" (AI)
// import { defineNuxtPlugin } from "nuxt/app";
// import { setActivePinia, type Pinia } from "pinia";

// export default defineNuxtPlugin((nuxtApp) => {
//   // Make this Pinia instance the active one globally
//   setActivePinia(nuxtApp.$pinia as Pinia);
// });

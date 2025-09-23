import { loadNuxtConfig } from "@nuxt/kit";

async function main() {
  const config = await loadNuxtConfig({ cwd: process.cwd() });
  console.log(JSON.stringify(config, null, 2));
}

main();

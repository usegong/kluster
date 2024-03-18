import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  shortcuts: {
    "bg-primary":
      "bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white",
  },
  transformers: [transformerDirectives()],
  presets: [presetUno(), presetAttributify()],
});

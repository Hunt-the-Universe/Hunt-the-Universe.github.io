import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://hunttheuniverse.com",
  vite: {
    plugins: [tailwindcss()],
  },
});

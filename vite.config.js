import react from '@vitejs/plugin-react-swc';

import { defineConfig } from "vite";

import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/Van-Life/",
});

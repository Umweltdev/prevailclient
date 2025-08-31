import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import pluginRewriteAll from "vite-plugin-rewrite-all";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), pluginRewriteAll(), tailwindcss(),],
  resolve: {
  alias: {
    '@babel/runtime/helpers/interopRequireDefault.js':
      '@babel/runtime/helpers/interopRequireDefault'
  }
},
  optimizeDeps: {
    include: ["@mui/material/Tooltip", "@emotion/styled"],
  },
  // server: {
  //   host: '105.113.106.42'
  // }
});
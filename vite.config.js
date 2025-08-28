import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), pluginRewriteAll()],
    resolve: {
    alias: {
      '@babel/runtime/helpers/builtin/interopRequireDefault':
        '@babel/runtime/helpers/interopRequireDefault.js',
    },
  },
  optimizeDeps: {
    include: ["@mui/material/Tooltip", "@emotion/styled"],
  },
  // server: {
  //   host: '105.113.106.42'
  // }
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';
import pluginRewriteAll from "vite-plugin-rewrite-all"

// https://vitejs.dev/config/ 
export default defineConfig({
  plugins: [react(),svgr(), pluginRewriteAll()],
  // server: {
  //   host: '192.168.59.28'
  // }

});

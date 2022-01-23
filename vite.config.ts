import { defineConfig } from 'vite'
import preact from '@preact/preset-vite';
const path = require('path');
import VitePluginFonts from "vite-plugin-fonts";
const VitePluginReactSVG = require('vite-plugin-react-svg');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), VitePluginFonts({
    google: {
      families: [
        {
          name: 'Space Mono',
          styles: "wght@400;700"
        }
      ]
    }
  }), VitePluginReactSVG({
    defaultExport: 'component',
    expandProps: "start"
  })],
  server: {
    port: 8000
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src')}
    ]
  }
})

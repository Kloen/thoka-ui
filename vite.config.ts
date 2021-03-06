import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

export default defineConfig({
  alias: [
    { find: '@', replacement: path.resolve('src') }
  ],
  plugins: [
    vue()
  ]
})

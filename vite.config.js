import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import request from "./src/utils/request";


const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/style/tools/_sassMagic.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mogujie/'
    : '/',
})

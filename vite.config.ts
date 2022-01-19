import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      //dev独有配置
      plugins: [vue(), WindiCSS()],
      resolve: {
        // 路径别名
        alias: {
          '@': resolve(__dirname, 'src'),
          components: '@/components'
        },
        extensions: ['.js', '.json', '.ts', 'vue']
      }
    }
  } else {
    //build独有配置
    return {
      plugins: [vue(), WindiCSS()],
      resolve: {
        // 路径别名
        alias: {
          '@': resolve(__dirname, 'src'),
          components: '@/components'
        },
        extensions: ['.js', '.json', '.ts']
      }
    }
  }
})

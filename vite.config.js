import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [vue({
        //开启响应式语法糖$ref()
        reactivityTransform: true
    }),
        AutoImport({
            //自动导入vue相关函数
            imports: ['vue'],
            resolvers: [ElementPlusResolver(),
                IconsResolver({
                    prefix: 'Icon',
                })],
        }),
        Components({
            resolvers: [ElementPlusResolver(),
                IconsResolver({
                    enabledCollections: ['ep'],
                })],
        }),
        Icons({
            autoInstall: true,
        }),
    ],
})

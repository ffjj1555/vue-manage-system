import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from "path";

	export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	resolve: {
		alias: {
		  '@': path.resolve('./src') // @代替src
		}
	  },
	server:{
		hmr: { overlay: false},
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8888',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
				
			},
			'/mhapi': {
				target: 'https://api.myhostex.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/mhapi/, '')
				
			},
		}

	},
});

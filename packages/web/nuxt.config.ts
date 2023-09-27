// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        '~/assets/style/index.css'
    ],
    modules: [
        [
            '@nuxtjs/eslint-module',
            {
                lintOnStart: false
            }
        ]
    ],
    build: {
        transpile: [
            '@vue-macos/core'
        ]
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    }
});

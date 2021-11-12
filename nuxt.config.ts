import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    buildModules: [],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    }
})

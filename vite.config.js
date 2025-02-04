import { resolve } from 'path'

export default {
    // config options
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'index.html')
        }
    }
}
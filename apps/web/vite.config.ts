/// <reference types="vitest" />
import { esbuildCommonjs, viteCommonjs } from "@originjs/vite-plugin-commonjs"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import viteTsConfigPaths from "vite-tsconfig-paths"

/**
 * Vite + React Native Web configuration info was found at this location:
 * @see https://github.com/vitejs/vite/discussions/8195#discussioncomment-3054164
 */

export default defineConfig({
    cacheDir: "../../node_modules/.vite/web",

    server: {
        port: 4200,
        host: "localhost"
    },

    preview: {
        port: 4300,
        host: "localhost"
    },

    plugins: [
        viteCommonjs(),
        react(),
        viteTsConfigPaths({
            root: "../../"
        })
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [
    //    viteTsConfigPaths({
    //      root: '../../',
    //    }),
    //  ],
    // },

    define: {
        global: "window"
    },

    optimizeDeps: {
        include: ["@react-navigation/native"],
        esbuildOptions: {
            loader: { ".js": "jsx" },
            mainFields: ["module", "main"],
            resolveExtensions: [".web.js", ".js", ".ts"],
            plugins: [esbuildCommonjs(["@react-navigation/elements"])]
        }
    },

    resolve: {
        extensions: [".web.tsx", ".web.jsx", ".web.js", ".tsx", ".ts", ".js"],
        alias: {
            "react-native": "react-native-web"
        }
    },

    build: {
        commonjsOptions: {
            transformMixedEsModules: true
        }
    },

    test: {
        globals: true,
        cache: {
            dir: "../../node_modules/.vitest"
        },
        environment: "jsdom",
        include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
    }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
    css: ["~/assets/css/main.css"],
    nitro: {
        prerender: {
            routes: ["/"],
        },
    },
    ssr: false,
    vite: {
        plugins: [tailwindcss()],
    },
    components: {
        dirs: [
            {
                path: "~/components",
                pathPrefix: false,
            },
        ],
        global: true,
    },
    fonts: {
        defaults: {
            styles: ["normal", "italic"],
        },
        families: [
            {
                name: "Montserrat",
                weights: [200, 300, 400, 500, 600, 700],
            },
            {
                name: "Parisienne",
                weights: [300, 400, 500, 600, 700],
            },
            {
                name: "Playfair Display SC",
                weights: [300, 400, 500, 600, 700],
            },
        ],
    },
});

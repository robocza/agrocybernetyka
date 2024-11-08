import { defineConfig } from "astro/config";
// import netlify from '@astrojs/netlify/functions';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    // output: 'server',
    // adapter: netlify(),
    i18n: {
        defaultLocale: "pl",
        locales: ["en", "pl"],
        routing: {
            prefixDefaultLocale: false
        }
    },
    server: {
        host: true,
        port: 3000
    },
    site: "https://agrocybernetyka.pl",
    integrations: [
        tailwind(),
    ],
    vite: {
        server: {
            watch: {
                ignored: ['**/.idea/workspace.xml', '**/.idea/workspace.xml.tmp']
            }
        }
    }
});

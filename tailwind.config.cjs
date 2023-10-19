/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                green: '#04712E',
                lightgreen: '#05AA44'
            }
        },
        fontFamily: {
            mono: ['GT America Mono', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/typography'),
    ],
};

const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './src/**/*.{js,jsx}',
        flowbite.content(),

    ],  
    theme: {
        extend: {},
    },
    plugins: [
        flowbite.plugin(),     
    ],
};


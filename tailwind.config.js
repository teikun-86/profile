const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                gray: {
                    1100: "#0a0e17",
                    1000: "#0e1420"
                }
            }
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('@tailwindcss/line-clamp')
    ],
}

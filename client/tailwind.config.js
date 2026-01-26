/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            ssm: '375px',
            sm: '640px',
            md: '768px',
            lg: '1024px',

        },
        extend: {
            colors: {
                primary: "#0f172a", // Slate 900
                secondary: "#1e293b", // Slate 800
                accent: "#38bdf8", // Sky 400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Ensure Inter is loaded or fallback
            },
        },
    },
    plugins: [],
}

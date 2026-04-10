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
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
                glow: "var(--accent-glow)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Ensure Inter is loaded or fallback
            },
        },
    },
    plugins: [],
}

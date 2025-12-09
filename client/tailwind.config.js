/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                glass: "rgba(255, 255, 255, 0.15)", // Glass Layer - increased opacity
                glassBorder: "rgba(255, 255, 255, 0.2)", // Glass Border - increased visibility
                primary: "#6EE7B7", // Mint Neon
                secondary: "#7DD3FC", // Accent 1: Ice Blue
                accent: "#A78BFA", // Accent 2: Soft Purple
                bgDark: "#0A0D12", // Background Dark
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}

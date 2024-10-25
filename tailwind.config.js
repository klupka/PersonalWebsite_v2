/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // text: "rgb(var(--text))",
                // btnText: "rgb(var(--btnText))",
                // background: "rgb(var(--background))",
                // primary: "rgb(var(--primary))",
                // secondary: "rgb(var(--secondary))",
                // accent: "rgb(var(--accent))",

                // Material You:
                text: "rgb(var(--text))",
                background: "rgb(var(--background))",
                foreground: "rgb(var(--foreground))",
                primary: "rgb(var(--primary))",
                highlightForeground: "rgb(var(--highlightForeground))",
                highlightPrimary: "rgb(var(--highlightPrimary))",
                secondary: "rgb(var(--secondary))",
                highlightSecondary: "rgb(var(--highlightSecondary))",
            },
            transitionProperty: {
                width: "width",
            },
            animation: {
                video: "video 2s ease-in-out forwards",
                content: "content 3s ease-in forwards",
            },
            keyframes: {
                video: {
                    "0%": {
                        scale: "500%",
                        opacity: "0%",
                    },
                    "20%": { opacity: "0%" },
                    "30%": { opacity: "100%" },
                    "50%": {
                        scale: "100%",
                        opacity: "100%",
                    },
                    "100%": { opacity: "2%" },
                },
                content: {
                    "0%": { opacity: "0%" },
                    "50%": { opacity: "0%" },
                    "100%": { opacity: "100%" },
                },
            },
        },
    },
    plugins: [],
};

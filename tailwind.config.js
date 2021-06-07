module.exports = {
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            white: "#f8f8f2",
            gray: "#272822",
            "brown-gray": "#49483e",
            brown: "#75715e",
            red: "#f92672",
            orange: "#fd971f",
            yellow: "#e6db74",
            green: "#a6e22e",
            blue: "#66d9ef",
            purple: "#ae81ff"
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },

            colors: {
                primary: '#4a90e2',
                secondary: '#50e3c2',
                tertiary: '#f5a623',
                // 'invoice-blue': '#4a90e2',
            },
        },
    },
    plugins: [],
}

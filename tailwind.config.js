/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            black: {
                500: '#2B2B2B',
                600: '#2a2a2a',
                700: '#1e1e1e',
				800: '#191919',
            },
			gray: {
                300: '#d1d1d1',
                500: '#828282',
                600: '#B7B7B7',
				700: '#666666'
			},
            red: {
                600: '#dc2626'
            }
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1140px',
            'xl': '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [],
};
   
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            backgroundColor: {
                body: '#f3f2f7',
                main: '#464255',
                linkBg: '#fff4d9',
                primary: '#F58201',
            },
            colors: {
                textActive: '#F58201',
                primary: '#464255',
                helpForm: '#C16E31',
                textActiveHover: '#F58201',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}

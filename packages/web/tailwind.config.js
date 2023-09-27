/** @type {import('tailwindcss').Config} */
export default {
    content: [
        '../core/src/**/*.{vue, js,jsx, ts, tsx}',
        './components/**/*.{vue, js,jsx, ts, tsx}',
        './layouts/**/*.{vue, js,jsx, ts, tsx}',
        './pages/**/*.{vue, js,jsx, ts, tsx}',
        './plugins/**/*.{vue, js,jsx, ts, tsx}',
        './app.vue'
    ],
    theme: {
        extend: {}
    },
    plugins: []
};

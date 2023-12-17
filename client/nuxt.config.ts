export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/apiFetch.js'],
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
});


export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    // return navigateTo('/');
    window.location.pathname = '/login';
  }
});


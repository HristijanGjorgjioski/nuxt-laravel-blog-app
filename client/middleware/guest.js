import { useAuth } from '~/composables/useAuth';

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn.value) {
    if (process.client) {
      return navigateTo('/');
    }
    // window.location.pathname = '/my-info';
  }
});


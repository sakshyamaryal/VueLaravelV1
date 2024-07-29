// src/components/auth/authenticate.js
import { ref } from 'vue';

const authStatus = ref(!!localStorage.getItem('token'));

export function isAuthenticated() {
  return authStatus.value;
}

export function login(token) {
  localStorage.setItem('token', token);
  authStatus.value = true;
}

export function logout() {
  localStorage.removeItem('token');
  authStatus.value = false;
}

export { authStatus };

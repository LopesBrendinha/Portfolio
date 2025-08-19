import { createRouter, createWebHistory } from "vue-router";
import Projetos from "./pages/Projetos.vue";
import Sobre from "./pages/Sobre.vue";
import Certificacoes from "./pages/Certificacoes.vue";

const routes = [
  { path: "/", component: Sobre },
  { path: "/projetos", component: Projetos },
  { path: "/certificacoes", component: Certificacoes },
];

export const router = createRouter({
  history: createWebHistory(),
  routes, // aqui já usa a const routes
});

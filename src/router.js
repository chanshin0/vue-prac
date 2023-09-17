import { createWebHistory, createRouter } from "vue-router";
import Shop from './components/Shop.vue'
import NotFound from './components/404.vue'

// 순서가 중요함. 위에다 쓸 수록 우선순위를 가짐.
// 고로 404 페이지는 맨 아래에 작성하면됨
const routes = [
  {
    path: "/shop",
    component: Shop,
  },
  {
    path:'/home',
    redirect: '/'
  },
  // {
  //   path : '/detail/:id',
  //   component : Detail,
  //   children : [
  //     { path : 'author', component : Author },
  //     { path : 'comment', component : Comment },
  //   ]
  // },
  {
    path: "/:bad",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
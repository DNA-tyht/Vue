import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import("../components/Home");
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");
const About = () => import("../components/About");
const User = () => import("../components/User");
const Profile = () => import("../components/Profile");

const routes = [
  {
    path: "", //默认路径
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页"
    },
    children: [
      {
        path: "",
        redirect: "/home/news"
      },
      {
        path: "news",
        component: HomeNews
      },
      {
        path: "message",
        component: HomeMessage
      }
    ]
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于"
    },
  },
  {
    path: "/user/:userId",
    component: User,
    meta: {
      title: "用户"
    },
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "个人信息"
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  mode: "history",
  linkActiveClass: "active",
  routes
})

router.beforeEach((to, from, next) => {
  //从from跳转到to
  document.title = to.meta.title;
  next();
})
router.afterEach((to, from) => {
})

export default router

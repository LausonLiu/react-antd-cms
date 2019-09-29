import {
    Articles,
    Dashboard,
    Login,
    NotFound,
    Setting,
    ArticlesEdit,
    Notify
} from "../views"

const commonRoutes = [
    {
        pathname: "/login",
        components: Login
    },
    {
        pathname: "/404",
        components: NotFound
    }
]


const privateRoutes = [
        
    {
        pathname: "/admin/Dashboard",
        components: Dashboard,
        title: "仪表盘",
        icon:"laptop",
        isTop: true

    },
    {
        pathname: "/admin/articles",
        components: Articles,
        title: "文章管理",
        icon:"edit",
        isExact: true,
        isTop: true
    },
    {
        pathname: "/admin/articles/edit/:id",
        components: ArticlesEdit,
        title: "文章管理",
        icon:"edit",
        isTop: false
    },
    {
        pathname: "/admin/setting",
        components: Setting,
        title: "系统设置",
        icon:"setting",
        isTop: true

    },
    {
        pathname: "/admin/notify",
        components: Notify,
        title: "通知中心",
        icon:"notify",
        isTop: false
    },
]

export {
    commonRoutes,
    privateRoutes
}
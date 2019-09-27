import {
    Articles,
    Dashboard,
    Login,
    NotFound,
    Setting
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
        isTop: true
    },
    {
        pathname: "/admin/setting",
        components: Setting,
        title: "系统设置",
        icon:"setting",
        isTop: true

    },
]

export {
    commonRoutes,
    privateRoutes
}
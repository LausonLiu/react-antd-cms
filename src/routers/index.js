import {
    Articles,
    Dashboard,
    Login,
    NotFound,
    Setting,
    ArticlesEdit,
    Notify,
    Users,
    UserAdd,
    UserDetail
} from "../views"

// 设置公共路由
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

//设置私有路由
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
    {
        pathname: "/admin/users",
        components: Users,
        title: "用户管理",
        isExact: true,
        icon:"user",
        isTop: true
    },
    {
        pathname: "/admin/users/useradd",
        components: UserAdd,
        title: "用户添加",
        icon:"UserAdd",
        isTop: false
    },
    {
        pathname: "/admin/users/detail/:id",
        components: UserDetail,
        title: "用户详情",
        icon:"UserDetail",
        isTop: false
    },
]

export {
    commonRoutes,
    privateRoutes
}
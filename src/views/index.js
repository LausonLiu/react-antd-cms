import Loadable from 'react-loadable';  //导入路由懒加载插件
import Loading from '../components/Loading';  //导入加载组件
 
//路由懒加载设置
const Articles = Loadable({
  loader: () => import('./Articles'),
  loading: Loading,
});

const ArticlesEdit = Loadable({
  loader: () => import('./Articles/ArticlesEdit'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading,
});

const Setting = Loadable({
  loader: () => import('./Setting'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./Users'),
  loading: Loading,
});

const UserAdd = Loadable({
  loader: () => import('./Users/UserAdd'),
  loading: Loading,
});

const UserDetail = Loadable({
  loader: () => import('./Users/UserDetail'),
  loading: Loading,
});

const Notify = Loadable({
  loader: () => import('./Notify'),
  loading: Loading,
});

export {
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
}

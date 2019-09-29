import Loadable from 'react-loadable';
import Loading from '../components/Loading';
 
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
    Notify
}

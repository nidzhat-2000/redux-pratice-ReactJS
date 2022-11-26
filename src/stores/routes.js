import About from '../Pages/About';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    auth: false,
  },
  {
    path: '/about',
    exact: true,
    component: About,
    auth: false,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
    auth: true,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    auth: false,
  },
];

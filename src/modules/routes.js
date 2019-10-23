import Home from '@/views';
import landing from './landing/routes';
import exercise1 from './exercise-1/routes';
import exercise2 from './exercise-2/routes';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/landing',
  },
  ...landing,
  ...exercise1,
  ...exercise2,
];

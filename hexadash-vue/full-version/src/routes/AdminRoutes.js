import FeaturesRoutes from './FeaturesRoutes';
import PageRoutes from './PageRoutes';
import Components from './Components';
import Apps from './Applications';

const routes = [
  {
    path: '',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/view/dashboard/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '@/view/dashboard/DemoOne.vue'),
      },
      {
        path: 'demo-one',
        name: 'demo-one',
        component: () => import(/* webpackChunkName: "demoOne" */ '@/view/dashboard/DemoOne.vue'),
      },
      {
        path: 'demo-two',
        name: 'demo-two',
        component: () => import(/* webpackChunkName: "demoTwo" */ '@/view/dashboard/DemoTwo.vue'),
      },
      {
        path: 'demo-three',
        name: 'demo-three',
        component: () => import(/* webpackChunkName: "demoThree" */ '@/view/dashboard/DemoThree.vue'),
      },
      {
        path: 'demo-four',
        name: 'demo-four',
        component: () => import(/* webpackChunkName: "demoFour" */ '@/view/dashboard/DemoFour.vue'),
      },
      {
        path: 'demo-five',
        name: 'demo-five',
        component: () => import(/* webpackChunkName: "demoFive" */ '@/view/dashboard/DemoFive.vue'),
      },
      {
        path: 'demo-six',
        name: 'demo-six',
        component: () => import(/* webpackChunkName: "demoSix" */ '@/view/dashboard/DemoSix.vue'),
      },
      {
        path: 'demo-seven',
        name: 'demo-seven',
        component: () => import(/* webpackChunkName: "demoSeven" */ '@/view/dashboard/DemoSeven.vue'),
      },
      {
        path: 'demo-eight',
        name: 'demo-eight',
        component: () => import(/* webpackChunkName: "demoEight" */ '@/view/dashboard/DemoEight.vue'),
      },
      {
        path: 'demo-nine',
        name: 'demo-nine',
        component: () => import(/* webpackChunkName: "demoNine" */ '@/view/dashboard/DemoNine.vue'),
      }
    ],
  },
  {
    path: '/crud',
    name: 'axios',
    component: () => import(/* webpackChunkName: "axios" */ '@/view/crud/axios/Index.vue'),
    children: [
      {
        path: 'axios-view',
        name: 'axios-view',
        component: () => import(/* webpackChunkName: "axios-view" */ '@/view/crud/axios/View.vue'),
      },
      {
        path: 'axios-edit/:id',
        name: 'axios-edit',
        component: () => import(/* webpackChunkName: "axios-edit" */ '@/view/crud/axios/edit.vue'),
      },
      {
        path: 'axios-add',
        name: 'axios-add',
        component: () => import(/* webpackChunkName: "axios-add" */ '@/view/crud/axios/addNew.vue'),
      },
    ],
  },
  {
    path: '/crud',
    name: 'fireStore',
    component: () => import(/* webpackChunkName: "fireStore" */ '@/view/crud/fireStore/Index.vue'),
    children: [
      {
        path: 'fireStore-view',
        name: 'fireStore-view',
        component: () => import(/* webpackChunkName: "fireStore-view" */ '@/view/crud/fireStore/View.vue'),
      },
      {
        path: 'fireStore-edit/:id',
        name: 'fireStore-edit',
        component: () => import(/* webpackChunkName: "fireStore-edit" */ '@/view/crud/fireStore/edit.vue'),
      },
      {
        path: 'fireStore-add',
        name: 'fireStore-add',
        component: () => import(/* webpackChunkName: "fireStore-add" */ '@/view/crud/fireStore/addNew.vue'),
      },
    ],
  },
  ...PageRoutes,
  ...FeaturesRoutes,
  ...Components,
  ...Apps,
];

export default routes;

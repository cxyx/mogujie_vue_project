const testRouter = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children:[
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue')
      }
    ]
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('@/views/Home.vue')
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }

]

export default testRouter
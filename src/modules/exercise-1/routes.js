import Exercise1 from './Exercise1.vue';
import Posts from './Posts.vue';
import Post from './Post.vue';

export default [
  {
    path: '/exercise1',
    name: 'exercise1',
    component: Exercise1,
    redirect: '/exercise1/posts',
    children: [
      {
        path: '/exercise1/posts',
        name: 'posts',
        component: Posts,
      },
      {
        path: '/exercise1/posts/:slug',
        name: 'post',
        component: Post,
      },
    ],

  },
];

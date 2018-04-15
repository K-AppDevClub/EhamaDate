import HomePage from './pages/home/HomePage';
import PostsPage from './pages/posts/PostsPage';
import TestPage from './pages/test/Test';
import DetailPlan from './pages/detail-plan/DetailPlan';

export default [
  { name: 'home', path: '/', component: HomePage },
  { name: 'posts', path: '/posts', component: PostsPage },
  { name: 'test', path: '/test', component: TestPage },
  { name: 'detail-plan', path: '/detail-plan', component: DetailPlan },
];

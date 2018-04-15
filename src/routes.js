import HomePage from './pages/home/HomePage';
import PostsPage from './pages/posts/PostsPage';
import TestPage from './pages/test/Test';
import CreatePlan from './pages/create-plan/CreatePlan';

export default [
  { name: 'home', path: '/', component: HomePage },
  { name: 'posts', path: '/posts', component: PostsPage },
  { name: 'test', path: '/test', component: TestPage },
  { name: 'create-plan', path: '/create-plan', component: CreatePlan },
];

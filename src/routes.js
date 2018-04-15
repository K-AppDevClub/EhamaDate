import HomePage from './pages/home/HomePage';
import PostsPage from './pages/posts/PostsPage';
import TestPage from './pages/test/Test';
import Recommend from './pages/recommend/Recommend';

export default [
  { name: 'home', path: '/', component: HomePage },
  { name: 'posts', path: '/posts', component: PostsPage },
  { name: 'test', path: '/test', component: TestPage },
  { name: 'recommend', path: '/recommend', component: Recommend },
];

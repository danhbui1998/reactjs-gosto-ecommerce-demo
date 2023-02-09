import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Login from '../components/login';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };

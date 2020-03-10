import Home from '../components/pages/home/home';
import About from '../components/pages/about/about';
import Contact from '../components/pages/contact/contact';

export const Routes = [
    {
        component: Home,
        exact: true,
        path: '/'
    },
    {
        component: About,
        exact: true,
        path: '/about'
    },
    {
        component: Contact,
        exact: true,
        path: '/contact'
    }
];

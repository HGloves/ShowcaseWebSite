import HomeComponent from '../Home/HomeComponent';
import TeamComponent from '../Team/TeamComponent';
import ContactComponent from '../Contact/ContactComponent';
import FindUsComponent from '../FindUs/FindUsComponent';

const routes = [
    {
        path: '/about',
        component: HomeComponent,
        children: []
    },
    {
        path: '/team',
        component: TeamComponent,
        children: []
    },
    {
        path: '/contact',
        component: ContactComponent,
        children: []
    },
    {
        path: '/findUs',
        component: FindUsComponent,
        children: []
    },
    {
        path: '/',
        component: HomeComponent,
        children: []
    }
];

export default routes;
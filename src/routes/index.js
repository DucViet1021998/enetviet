// Pages
import Home from '~/pages/Home';
import Message from '~/pages/Message';
// import Home from '~/pages/Home';
// import Home from '~/pages/Home';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/message', component: Message },
    // { path: '/', component: Home },
    // { path: '/', component: Home },
    // { path: '/', component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

import RegisterPage from '../pages/auth/register/register-page';
import LoginPage from '../pages/auth/login/login-page';
import HomePage from '../pages/home/home-page';
import BookmarkPage from '../pages/bookmark/bookmark-page';
import StoryDetailPage from '../pages/story-detail/story-detail-page';
import NewStories from '../pages/new/new-stories';
import {
    checkAuthenticatedRoute,
    checkUnauthenticatedRouteOnly,
} from '../utils/auth';

const routes = {
    '/login': () => checkUnauthenticatedRouteOnly(new LoginPage()),
    '/register': () => checkUnauthenticatedRouteOnly(new RegisterPage()),

    '/': () => checkAuthenticatedRoute(new HomePage()),
    '/new': () => checkAuthenticatedRoute(new NewStories()),
    '/stories/:id': () => checkAuthenticatedRoute(new StoryDetailPage()),
    '/bookmark': () => checkAuthenticatedRoute(new BookmarkPage()),
};

export default routes;

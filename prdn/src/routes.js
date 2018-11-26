import Home from "./pages/Home.vue"
import CategoriesPage from "./pages/CategoriesPage.vue";
import SubCategoriesPage from "./pages/SubCategoriesPage.vue";
import SingleItemPage from "./pages/SingleItemPage.vue";
import BusinessPage from "./pages/BusinessPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import Map from "./pages/MapPage.vue";
import User from "./pages/User.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Admin from "./pages/Admin.vue"


/**
 * Where we set all the routes for the webapp's body and its components
 * 
 */
export const routes = [{
        path: '/',
        name: 'homeLink',
        component: Home
    },

    {
        path: '/user',
        name: 'userLink',
        component: User
    },
    {
        path: '/map',
        name: 'mapLink',
        component: Map
    },
    {
        path: '/admin',
        name: 'adminLink',
        component: Admin

    },
    {
        path: '/register',
        name: 'registerLink',
        component: Register
    },
    {
        path: '/login',
        name: 'loginLink',
        component: Login
    },
    {
        path: '/search',
        name: 'searchLink',
        component: SearchPage
    },
    {
        path: '/businesses/:businessName',
        name: 'businessLink',
        component: BusinessPage
    },
    {
        path: '/:resourceName',
        name: 'categoriesLink',
        component: CategoriesPage
    },
    {
        path: '/:resourceName/:categoryName',
        name: 'subcategoriesLink',
        component: SubCategoriesPage
    },
    {
        path: '/:resourceName/:categoryName/:subcategoryName',
        name: 'singleitemLink',
        component: SingleItemPage
    },
    {
        path: '*',
        redirect: '/'
    }
]
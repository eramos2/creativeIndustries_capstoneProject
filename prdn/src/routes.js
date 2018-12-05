import Home from "./pages/Home.vue"
import CategoriesPage from "./pages/CategoriesPage.vue";
import SubCategoriesPage from "./pages/SubCategoriesPage.vue";
import SingleItemPage from "./pages/SingleItemPage.vue";
import BusinessPage from "./pages/BusinessPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import Map from "./pages/MapPage.vue";

import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
/**User Components  */
import User from "./pages/User.vue";
import UserAccount from "./components/user/UserAccount.vue";
import UserProjects from "./components/user/UserProjects.vue";
import UserNewBusiness from "./components/user/UserNewBusiness.vue";
/**Login components */
import LoginReturningCustomer from "./components/login/LoginReturningCustomer.vue";
import LoginAdmin from "./components/login/LoginAdmin.vue";
import RecoverPassword from "./components/login/RecoverPassword.vue";
import ChangePassword from "./components/login/ChangePassword.vue";
import ChangePasswordAdmin from "./components/login/ChangePasswordAdmin.vue";
import RecoverPasswordAdmin from "./components/login/RecoverPasswordAdmin.vue";
/**Admin components */
import Admin from "./pages/Admin.vue";
import WelcomeAdmin from "./components/admin/WelcomeAdmin.vue";
import Add from "./components/admin/add/Add.vue";
import Edit from "./components/admin/edit/Edit.vue";
import Remove from "./components/admin/remove/Remove.vue";
import Pending from "./components/admin/pending/Pending.vue";
/** About Us */
import AboutUs from "./components/aboutUs/AboutUs.vue"

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
    component: User,
    children: [{
        path: '',
        component: UserAccount
    },
    {
        path: 'projects',
        component: UserProjects
    },
    {
        path: 'addBusiness',
        component: UserNewBusiness
    }
    ]
},
{
    path: '/aboutus',
    component: AboutUs
},
{
    path: '/map',
    name: 'mapLink',
    component: Map
},
/**Start Admin Routes */
{
    path: '/admin',
    component: Admin,
    children: [{
        path: '',
        component: WelcomeAdmin
    }, {
        path: 'add',
        component: Add
    }, {
        path: "edit",
        component: Edit
    },
    {
        path: "remove",
        component: Remove
    },
    {
        path: "requests",
        component: Pending
    }
    ]

}, /**End admin Routes */

{
    path: '/register',
    name: 'registerLink',
    component: Register
},

/** Start login routes */
{
    path: '/login',
    component: Login,
    children: [{
        path: '',
        component: LoginReturningCustomer
    },
    {
        path: 'admin',
        component: LoginAdmin
    },

    {
        path: 'recoverpassword',
        component: RecoverPassword
    },
    {
        path: 'changepassword',
        component: ChangePassword
    },
    {
        path: 'changepasswordadmin',
        component: ChangePasswordAdmin

    },
    {
        path: 'recoverpasswordadmin',
        component: RecoverPasswordAdmin
    }
    ]
}, /**End login routes */

{
    path: '/search/',
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
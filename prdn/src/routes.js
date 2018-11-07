import Home from "./pages/Home.vue"
import CategoriesPage from "./pages/CategoriesPage.vue";


export const routes = [{
        path: '/',
        name: 'homeLink',
        component: Home
    },
    {
        path: '/:resourceName',
        name: 'categoriesLink',
        component: CategoriesPage
    },
    {
        path: '*',
        redirect: '/'
    }
]
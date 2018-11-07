import Home from "./pages/Home.vue"
import CategoriesPage from "./pages/CategoriesPage.vue";
import SubCategoriesPage from "./pages/SubCategoriesPage.vue";


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
        path: '/:resourceName/:categoryName',
        name: 'subcategoriesLink',
        alias: '/materials/concrete',
        component: SubCategoriesPage
    },

    {
        path: '*',
        redirect: '/'
    }
]
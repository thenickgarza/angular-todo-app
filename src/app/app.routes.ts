import { Routes } from '@angular/router';
import { TodoList } from './todo/todo-list/todo-list.component';
import { WeatherDashboard } from './weather-dashboard/weather-dashboard/weather-dashboard.component';
import { SearchBar } from './search-project/search-bar/search-bar';
import { RegistrationForm } from './user-registration/registration-form/registration-form.component';
import { ProductList } from './product-catalog/product-list/product-list.component';
import { ProductDetail } from './product-catalog/product-detail/product-detail/product-detail';
import { ShoppingCart } from './product-catalog/shopping-cart/shopping-cart';
import { ProductSearch } from './product-catalog/product-search/product-search';

export const routes: Routes = [
    {
        path: '',
        component: TodoList
    },
    {
        path: 'weather',
        component: WeatherDashboard
    },
    {
        path: 'search',
        component: SearchBar
    },
    {
        path: 'registration',
        component: RegistrationForm
    },
    {
        path: 'products',
        component: ProductList
    },
    {
        path: 'products/:id',
        component: ProductDetail
    },
    {
        path: 'cart',
        component: ShoppingCart
    },
    {
        path: 'product-search',
        component: ProductSearch
    }
];

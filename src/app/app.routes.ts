import { Routes } from '@angular/router';
import { TodoList } from './todo/todo-list/todo-list.component';
import { WeatherDashboard } from './weather-dashboard/weather-dashboard/weather-dashboard.component';
import { SearchBar } from './search-project/search-bar/search-bar';
import { RegistrationForm } from './user-registration/registration-form/registration-form.component';

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
    }
];

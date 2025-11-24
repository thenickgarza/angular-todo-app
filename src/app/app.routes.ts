import { Routes } from '@angular/router';
import { TodoList } from './todo/todo-list/todo-list.component';
import { WeatherDashboard } from './weather-dashboard/weather-dashboard/weather-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: TodoList
    },
    {
        path: 'weather',
        component: WeatherDashboard
    }
];

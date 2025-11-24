import { Routes } from '@angular/router';
import { TodoList } from './todo/todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',
        component: TodoList
    }
];

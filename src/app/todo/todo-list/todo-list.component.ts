import { Component, signal } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})



export class TodoList {
  
  todos = signal<Todo[]>([
    {
      id: '1',
      title: 'Buy groceries',
      description: 'Buy groceries for the week',
      completed: false,
      createdAt: new Date()
    }
  ]);
  
}

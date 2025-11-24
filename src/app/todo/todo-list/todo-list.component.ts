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
      createdAt: new Date(),
    },
  ]);

  addTodo(title: string, description: string) {
   // Since this is a signal, we need to update the signal using update method. 
    this.todos.update((todos) => {
      return [
        // ...todos is the spread operator to add the existing todos to the new array.
        ...todos,
        {
          id: `${todos.length + 1}`,
          title: title,
          description: description,
          completed: false,
          createdAt: new Date(),
        },
      ];
    });
  }

  deleteTodo(id:string) {
   this.todos.update((todos) => {
    return todos.filter((todo) => todo.id !== id)
   })
  }
}

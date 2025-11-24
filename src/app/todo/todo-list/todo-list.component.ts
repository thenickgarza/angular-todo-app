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

  // These are like state in react. They are used to store the values of the input fields.
  editTodoId = signal<string | null>(null);
  editTodoTitle = signal<string>('');
  editTodoDescription = signal<string>('');

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

  // No parameters are supplied to the saveTodo function. 
  // This is because we are using the signals to store the values of the input fields.
  saveTodo() {
    if (this.editTodoId()) {
      this.updateTodo(
        this.editTodoId()!,
        this.editTodoTitle(),
        this.editTodoDescription()
      );
    } else {
      this.addTodo(
        this.editTodoTitle(),
        this.editTodoDescription()
      );
    }
    this.editTodoId.set(null);
    this.editTodoTitle.set('');
    this.editTodoDescription.set('');
  }

  editTodo(id: string, title:string, description: string) {
    this.editTodoId.set(id);
    this.editTodoTitle.set(title);
    this.editTodoDescription.set(description);
  }

  updateTodo(id: string, title: string, description: string) {
    this.todos.update((todos) => {
      return todos.map((todo) => todo.id === id ? {...todo, title: title, description: description} : todo)
    })
  }
}

# AngularTodo

## Creating a component
``` bash
ng g c todo-list
```
Which will then create the component. 

We need to now define the type. For this case the it is in `todo.model.ts`

Once created, we can import this into the component using import statement. 

Additionally, in this case we will also import signal. (When you update a signal, Angular knows to re-render the parts of the template that use it. A plain array won’t trigger updates.)

` todo = signal<Todo[]>([])`

## Note for routing

Dont forget to edit the routes file to include the new component page to render. In this case we needed the todo list to render as the homepage. 

Another important thing to remmeber is to ensure the `<router-outlet></router-outlet>` is placed in the app.html or else nothing will render. 



# angular-todo-app

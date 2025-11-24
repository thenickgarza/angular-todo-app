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

## Adding a Todo

When adding a todo we will need to: 

1. create input fields for user to submit a todo including a button
2. create the addTodo in the component class with the params being the user input values
3. Look in html notes to see how we can grab these values with `#`
4. Important to use the spread operator when handling a update

## Deleting a Todo

When deleting a todo we will need to:

1. create a button which when clicked supplies the value of the todo. This can be done by simply adding a button to the already created loop. ID can be accessed since we are already looping through the values. We just need to handle what does what. 
2. Add the deleteToDo. Now with this we will need to filter out the existing from the id. (delete)


# angular-todo-app

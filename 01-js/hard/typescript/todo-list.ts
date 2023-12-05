/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    todos : any[]
    index:number
    constructor() {
      this.todos = [];
      this.index = 0;
    }
    add(todo:any) {
      this.todos.push(todo);
    }
    remove(todoIndex:number) {
      if(!this.todos[todoIndex]){
        return 
      }
      this.todos.splice(todoIndex,1)
    }
    get(index:number) {
      if (!this.todos[index]) {
        return null;
      }
      return this.todos[index];
    }
    getAll() {
      return this.todos;
    }
  
    update(index:number, updatedTodo:any) {
      if (this.todos[index]){
        this.todos[index] = updatedTodo;
      }
      else { 
        return
      }
    }
    clear() {
      this.todos = [];
    }
  }
  
  const todoList = new Todo();
  todoList.add("Task 1");
  todoList.add("Task 2");
  todoList.add("Task 3");
  
  todoList.update(1, "Updated Task 2");
  todoList.update(3, 'Invalid Task');
  console.log(todoList.getAll());
  module.exports = Todo;
  
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  // POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // DELETE /todos/:id
  deleteTodo(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // PUT /todos/:id
  updateTodo(id: number, values: Object = {}): Todo {
    let todo = this.getTodo(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // GET /todos/:id
  getTodo(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // Toggle todo complete
  toggleTodoCompleted(todo: Todo){
    let updatedTodo = this.updateTodo(todo.id, {
      completed: !todo.completed
    });
    return updatedTodo;
  }
}

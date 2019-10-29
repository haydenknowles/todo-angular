import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  deleteTodo(todo) {
    this.todoDataService.deleteTodo(todo.id);
  }

  toggleTodoCompleted(todo) {
    this.todoDataService.toggleTodoCompleted(todo);
  }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoDataService]
})
export class TodosComponent implements OnInit {

  newTodo: Todo = new Todo();
  todos: Observable<Todo[]>;

  constructor(private todoDataService: TodoDataService) {
  }

  // get todos() {
  //   return this.todoDataService.getAllTodos();
  // }
  loadTodos() {
    this.todos = this.todoDataService.getAllTodos();
  }

  addTodo() {
	console.log("called addTodo");
    this.todoDataService.addTodo(this.newTodo).subscribe((data) => {
		this.loadTodos();
	});
    this.newTodo = new Todo();
  }

  deleteTodo(todo) {
    this.todoDataService.deleteTodo(todo.id).subscribe((data) => {
      this.loadTodos();
    });
  }

  toggleTodoCompleted(todo) {
    this.todoDataService.toggleTodoCompleted(todo).subscribe((data) => {
		this.loadTodos();
	});
  }

  ngOnInit() {
    this.loadTodos();
  }

}

import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';
let AppComponent = class AppComponent {
    constructor(todoDataService) {
        this.todoDataService = todoDataService;
        this.newTodo = new Todo();
        // faCheckCircle = faCheckCircle;
        // faCircleSolid = faCircleSolid;
        this.checkCircle = faCheckCircle;
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
    toggleCheckboxIcon() {
        if (this.checkCircle === faCheckCircle) {
            this.checkCircle = faCircleSolid;
        }
        else {
            this.checkCircle = faCheckCircle;
        }
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [TodoDataService]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
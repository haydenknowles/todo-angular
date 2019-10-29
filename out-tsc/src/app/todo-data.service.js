import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let TodoDataService = class TodoDataService {
    constructor() {
        this.lastId = 0;
        this.todos = [];
    }
    // POST /todos
    addTodo(todo) {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        return this;
    }
    // DELETE /todos/:id
    deleteTodo(id) {
        this.todos = this.todos
            .filter(todo => todo.id !== id);
        return this;
    }
    // PUT /todos/:id
    updateTodo(id, values = {}) {
        let todo = this.getTodo(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    }
    // GET /todos
    getAllTodos() {
        return this.todos;
    }
    // GET /todos/:id
    getTodo(id) {
        return this.todos.filter(todo => todo.id === id).pop();
    }
    // Toggle todo complete
    toggleTodoCompleted(todo) {
        let updatedTodo = this.updateTodo(todo.id, {
            completed: !todo.completed
        });
        return updatedTodo;
    }
};
TodoDataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TodoDataService);
export { TodoDataService };
//# sourceMappingURL=todo-data.service.js.map
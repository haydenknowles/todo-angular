import { TestBed } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    expect(service).toBeTruthy();
  });
});

describe('getAllTodos()', () => {

  it('should return an empty array by default', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    expect(service.getAllTodos()).toEqual([]);
  });

  it('should return all todos', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    let todo1 = new Todo({title: 'Item 1', complete: false});
    let todo2 = new Todo({title: 'Item 2', complete: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
  });

});

describe('save(todo)', () => {

  it('should automatically assign an incrementing id',  () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    let todo1 = new Todo({title: 'Item 1', complete: false});
    let todo2 = new Todo({title: 'Item 2', complete: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getTodo(1)).toEqual(todo1);
    expect(service.getTodo(2)).toEqual(todo2);
  });

});

describe('deleteTodoById(id)', () => {

  it('should remove todo with the corresponding id', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    let todo1 = new Todo({title: 'Item 1', complete: false});
    let todo2 = new Todo({title: 'Item 2', complete: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
    service.deleteTodo(1);
    expect(service.getAllTodos()).toEqual([todo2]);
    service.deleteTodo(2);
    expect(service.getAllTodos()).toEqual([]);
  });

  it('should not removing anything if todo with corresponding id is not found', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    let todo1 = new Todo({title: 'Item 1', complete: false});
    let todo2 = new Todo({title: 'Item 2', complete: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
    service.deleteTodo(3);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
  });

});

describe('updateTodoById(id, values)', () => {

  it('should return todo with the corresponding id and updated data', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    let todo = new Todo({title: 'Item 1', complete: false});
    service.addTodo(todo);
    let updatedTodo = service.updateTodo(1, {
      title: 'updated title'
    });
    expect(updatedTodo.title).toEqual('updated title');
  });

  it('should return null if todo is not found', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    let todo = new Todo({title: 'Item 1', complete: false});
    service.addTodo(todo);
    let updatedTodo = service.updateTodo(2, {
      title: 'updated title'
    });
    expect(updatedTodo).toEqual(null);
  });

});

describe('toggleTodoCompleted(todo)', () => {

  it('should return the updated todo with complete status reversed', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    let todo = new Todo({title: 'Item 1', completed: false});
    service.addTodo(todo);
    let updatedTodo = service.toggleTodoCompleted(todo);
    expect(updatedTodo.completed).toEqual(true);
    service.toggleTodoCompleted(todo);
    expect(updatedTodo.completed).toEqual(false);
  });

});

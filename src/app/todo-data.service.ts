import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Todo } from './todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];
  myAppUrl : string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/todoitems/';
   }

  // POST /api/todoitems
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.myAppUrl + this.myApiUrl, JSON.stringify(todo), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // DELETE /api/todoitems/:id
  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(this.myAppUrl + this.myApiUrl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // PUT /api/todoitems/:id
  updateTodo(id: number, values: Object = {}): Observable<Todo> {
    return this.http.put<Todo>(this.myAppUrl + this.myApiUrl + id, JSON.stringify(values), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // GET /api/todoitems
  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    // return this.todos;
  }

  // GET /api/todoitems/:id
  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.myAppUrl + this.myApiUrl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // Toggle todo complete
  toggleTodoCompleted(todo: Todo){
    return this.http.put<Todo>(this.myAppUrl + this.myApiUrl + todo.id, JSON.stringify({
	  id: todo.id,
	  title: todo.title,
	  completed: !todo.completed 
	}), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

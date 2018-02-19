import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import {Recipe} from './recipes/recipes-list/recipe-item/recipe';

@Injectable()
export class ListService {
private token: string;
private url: string;
  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
      this.url = 'http://api.app.test/api/auth/lists';
    }

  getLists(): Observable<any> {
    this.token = `?token=${JSON.parse(localStorage.getItem('currentUser')).data['access_token']}`;
    return this.http.get(`${this.url}${this.token}`)
      .pipe(
        map(res => {
          return res['lists'];
        }),
        catchError(this.handleError<any>('getLists'))
      );
  }
  createList(name: string, type: string): Observable<any> {
    this.token = `?token=${JSON.parse(localStorage.getItem('currentUser')).data['access_token']}`;
    return this.http.post<any>(`${this.url}${this.token}`, {name: name , type: type})
    .pipe(
      tap(_ => this.log(`list was created`)),
      catchError(this.handleError<any>('createList'))
    );
  }

  addRecipe (listId: number, recipe: Recipe): Observable<Recipe> {
    this.token = `?token=${JSON.parse(localStorage.getItem('currentUser')).data['access_token']}`;
        return this.http.post<Recipe>(`${this.url}/${listId}/recipes${this.token}`, { recipe: recipe }).pipe(
        map( res => {
          console.log(res);
          return res; }),
        tap((recipe: Recipe) => this.log(`${recipe['message']}`)),
        catchError(this.handleError<Recipe>('addRecipe'))
        );
  }

  getRecipeFromList(listId: number, recipeId: number): Observable <Recipe> {
    this.token = `?token=${JSON.parse(localStorage.getItem('currentUser')).data['access_token']}`;
    return this.http.get<Recipe>(`${this.url}/${listId}/recipes/${recipeId}${this.token}`).pipe(
      map( res => {
        console.log(res);
        return res['recipe']; }),
      catchError(this.handleError<Recipe>('addRecipe'))
    );
  }

  private log(message: string) {
    this.messageService.add(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import {Recipe} from './recipes/recipes-list/recipe-item/recipe';
import { YUMMLY } from '../keys';
import { forEach } from '@angular/router/src/utils/collection';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RecipeService {

  private yummly = YUMMLY;
  private recipesUrl = 'api/recipes';
  private yummlyKeys = `_app_id=${this.yummly['app-id']}&_app_key=${this.yummly['app-key']}`;
  private yummlyUrl = `http://api.yummly.com/v1/api/recipes?${this.yummlyKeys}&q=`;
  private yummlyGetOneUrl = 'http://api.yummly.com/v1/api/recipe/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
     }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipesUrl}`)
    .pipe(
      catchError(this.handleError('getRecipes', []))
    );
  }

  getRecipe(id: string): Observable<Recipe> {
    const url = `${this.yummlyGetOneUrl}${id}?${this.yummlyKeys}`;
    return this.http.get<Recipe>(url).pipe(
      map(res => {
        let recipe, cuisine, course, holiday, time, imgUrl;
          if (res['attributes']['cuisine']) {
            cuisine = res['attributes']['cuisine'];
          } else {
            cuisine = [];
          }

          if (res['attributes']['course']) {
            course = res['attributes']['course'];
          } else {
            course = [];
          }
          if (res['attributes']['holiday']) {
            holiday = res['attributes']['holiday'];
          } else {
            holiday = [];
          }
         if (res['images'][0]['hostedMediumUrl']) {
            imgUrl = res['images'][0]['hostedMediumUrl'];
          } else if (res['images'][0]['hostedSmallUrl']) {
            imgUrl = res['images'][0]['hostedSmallUrl'];
          } else if (res['images'][0]['hostedLargeUrl']) {
            imgUrl = res['images'][0]['hostedLargeUrl'];
          } else {
            imgUrl = '';
          }
          if (res['totalTimeInSeconds']) {
            time = +res['totalTimeInSeconds'] / 60;
          }

          recipe =
            new Recipe(
              res['id'],
              res['name'],
              cuisine,
              course,
              holiday,
              time,
              res['ingredientLines'],
              imgUrl,
              res['source']['sourceRecipeUrl'],
          );
        return recipe;
      }),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
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

  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipe, httpOptions).pipe(
      tap(_ => this.log(`updated recipe id=${recipe.id}`)),
      catchError(this.handleError<any>('updateRecipe'))
    );
  } // not yeat implemented

  addRecipe (recipe: Recipe): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.recipesUrl}/${recipe.id}`).pipe(
      tap((recipe: Recipe) => this.log(`The recipe you tried to add is already in you list`)),
      catchError( res => {
        return this.http.post<Recipe>(this.recipesUrl, recipe, httpOptions).pipe(
        tap((recipe: Recipe) => this.log(`The recipe was added to your list!`)),
        catchError(this.handleError<Recipe>('addRecipe'))
        );
      }
    ));
  }

  deleteRecipe(recipe: Recipe | number): Observable<Recipe> {
    const id = typeof recipe === 'number' ? recipe : recipe.id;
    const url = `${this.recipesUrl}/${id}`;

    return this.http.delete<Recipe>(url, httpOptions).pipe(
      tap(_ => this.log(`The recipe was removed from your list`)),
      catchError(this.handleError<Recipe>('deleteRecipe'))
    );
  }

  searchRecipes( term: string, filters: string): Observable<Recipe[]> {
    if (!term.trim()) {
      return of([]);
    }
    const url = `${this.yummlyUrl}${term}${filters}`;
    return this.http.get(url).pipe(
      map(res => {
        const recipes = [];
        const matches = res['matches'];
        matches.forEach((match) => {
          let cuisine, course, holiday, time, imgUrl;
          if (match.attributes.cuisine) {
            cuisine = match.attributes.cuisine;
          } else {
            cuisine = [];
          }

          if (match.attributes.course) {
            course = match.attributes.course;
          } else {
            course = [];
          }
          if (match.attributes.holiday) {
            holiday = match.attributes.holiday;
          } else {
            holiday = [];
          }
          if (match.smallImageUrls) {
            imgUrl= match.smallImageUrls[0];
          } else {
            imgUrl = '';
          }

          time = +match.totalTimeInSeconds / 60;

          recipes.push(
            new Recipe(
              match.id,
              match.recipeName,
              cuisine,
              course,
              holiday,
              time,
              match.ingredients,
              imgUrl,
          ));
        });
        return recipes;
      }),
      tap(r => {
        if (!r.length) {
          return this.log(`Unfortunately no results were found`);
        }
        return r;
        }),
      catchError(this.handleError<Recipe[]>('searchRecipes', []))
    );
  }
}

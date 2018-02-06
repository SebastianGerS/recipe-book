import { Injectable } from '@angular/core';
import {Recipe} from './recipes/recipes-list/recipe-item/recipe';
import {RECIPES} from './recipes/recipes-list/mock-recipes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class RecipeService {

  constructor(private messageService: MessageService) { }

  getRecipes(): Observable<Recipe[]> {
    this.messageService.add('Recipes found');
    return of(RECIPES);
  }

  getRecipe(name: string): Observable<Recipe> {
    this.messageService.add(`Fetched Recipe name=${name}`);
    return of(RECIPES.find(recipe => recipe.name === name));
  }

}

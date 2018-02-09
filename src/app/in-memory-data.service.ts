import { Recipe } from './recipes/recipes-list/recipe-item/recipe';
import { Ingredient } from './recipes/recipes-list/recipe-item/ingredient/ingredient';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      
    ];
    return {recipes};
  }
}



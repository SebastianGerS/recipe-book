import {Ingredient} from './ingredient/ingredient';

export class Recipe {
  id: number;
  name: string;
  type: string;
  servings: number;
  description: string;
  time: number;
  ingredients: [Ingredient];

  constructor(id: number, name: string, type: string, servings: number , description: string, time: number, ingredients: [Ingredient]) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.servings = servings;
    this.description = description;
    this.time = time;
    this.ingredients = ingredients;
  }
}

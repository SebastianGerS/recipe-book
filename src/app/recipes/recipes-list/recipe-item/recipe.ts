import {Ingredient} from './ingredient/ingredient';

export class Recipe {
  name: string;
  type: string;
  portions: number;
  description: string;
  time: number;
  ingredients: [Ingredient];

  constructor(name: string, type: string, portions: number , description: string, time: number, ingredients: [Ingredient]) {
    this.name = name;
    this.type = type;
    this.portions = portions;
    this.description = description;
    this.time = time;
    this.ingredients = ingredients;
  }
}

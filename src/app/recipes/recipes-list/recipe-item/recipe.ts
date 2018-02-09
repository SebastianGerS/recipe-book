import {Ingredient} from './ingredient/ingredient';

export class Recipe {
  id: string;
  name: string;
  cuisine: [string];
  course: [string];
  holiday: [string];
  time: number;
  ingredients: any[];
  imgUrl: string;

  constructor(
    id: string,
    name: string,
    cuisine: [string],
    course: [string] ,
    holiday: [string],
    time: number,
    ingredients: [string],
    imgUrl: string) {

    this.id = id;
    this.name = name;
    this.cuisine = cuisine;
    this.course = course;
    this.holiday = holiday;
    this.time = time;
    this.ingredients = ingredients;
    this.imgUrl = imgUrl;
  }
}

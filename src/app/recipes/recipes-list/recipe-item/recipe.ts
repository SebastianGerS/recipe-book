import {Ingredient} from './ingredient/ingredient';

export class Recipe {
  id: string;
  name: string;
  cuisines: [string];
  courses: [string];
  holidays: [string];
  time: number;
  ingredients: any[];
  imgUrl: string;

  constructor(
    id: string,
    name: string,
    cuisines: [string],
    courses: [string] ,
    holidays: [string],
    time: number,
    ingredients: [string],
    imgUrl: string) {

    this.id = id;
    this.name = name;
    this.cuisines = cuisines;
    this.courses = courses;
    this.holidays = holidays;
    this.time = time;
    this.ingredients = ingredients || null;
    this.imgUrl = imgUrl || null;
  }
}

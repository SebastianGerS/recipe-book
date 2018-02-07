import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe-item/recipe';
import { RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
    .subscribe(recipes => this.recipes = recipes);
  }
  add(name: string, type: string, servings: number , description: string, time: number ): void {
    console.log(name);
    name = name.trim();
    type = type.trim();
    description = description.trim();
    if (!name || !type || !servings || !description || !time) {
      return;
    }
    this.recipeService.addRecipe({name, type, servings, description, time} as Recipe)
      .subscribe(recipe => {
        this.recipes.push(recipe);
      });
  }

  delete(recipe: Recipe): void {
    this.recipes = this.recipes.filter(h => h !== recipe);
    this.recipeService.deleteRecipe(recipe).subscribe();
  }
}

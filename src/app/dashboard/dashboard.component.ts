import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipes-list/recipe-item/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }
  
  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe();
  }
}

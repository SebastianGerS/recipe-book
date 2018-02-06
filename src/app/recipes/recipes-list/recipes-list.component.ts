import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe-item/recipe';
import {RECIPES} from './mock-recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
  recipes = RECIPES;
  selectedRecipe: Recipe;

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  constructor() {
  }

  ngOnInit() {
  }

 
}

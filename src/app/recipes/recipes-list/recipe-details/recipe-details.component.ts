import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../../../recipe.service';
import { ListService } from '../../../list.service';
import { Recipe } from '../recipe-item/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {
  private ingredientLists: any[];
  private recipeLists: any [];

  @Input() recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private listService: ListService,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('listId')) {
      this.getRecipeFromList();
    } else {
      this.getRecipe();
    }
    this.getLists();
  }

  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  getRecipeFromList(): void {
    const recipeId = +this.route.snapshot.paramMap.get('recipeId');
    const listId = +this.route.snapshot.paramMap.get('listId');
    this.listService.getRecipeFromList(listId, recipeId)
    .subscribe(recipe => this.recipe = recipe );
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.recipeService.updateRecipe(this.recipe)
    .subscribe(() => this.goBack());
  }

  addRecipe(list: NgForm, recipe: Recipe): void {
    const listId = +list.value.listId;
    this.listService.addRecipe(listId, recipe)
    .subscribe();
  }

  addIngredients(list: NgForm, ingredients: any[]): void {
    const listId = +list.value.listId;
    this.listService.addIngredients(listId, ingredients)
    .subscribe();
  }

  getLists(): void {
    this.listService.getLists()
    .subscribe(lists => {
      this.recipeLists = lists.filter(r => r.type  === 'recipes');
      this.ingredientLists = lists.filter(r => r.type === 'ingredients');
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../../../recipe.service';
import { ListService } from '../../../list.service';
import {Recipe} from '../recipe-item/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {
  private lists: any[];

  @Input() recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private listService: ListService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRecipe();
    this.getLists();
  }

  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.recipeService.updateRecipe(this.recipe)
    .subscribe(() => this.goBack());
  }

  add(list: NgForm, recipe: Recipe): void {
    const listId = +list.value.listId;
    console.log(listId);
    this.listService.addRecipe(listId, recipe)
    .subscribe();
  }

  getLists(): void {
    this.listService.getLists()
    .subscribe(lists => this.lists = lists);
  }
}

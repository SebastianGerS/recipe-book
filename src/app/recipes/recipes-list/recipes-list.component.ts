import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe-item/recipe';
import { RecipeService} from '../../recipe.service';
import { ListService } from '../../list.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
  lists: any[];
  recipes: Recipe[];

  constructor(private listService: ListService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.getLists();
  }

  getLists(): void {
    this.listService.getLists()
    .subscribe(lists => this.lists = lists);
  }

  deleteRecipeFromList(listId: number, recipe: Recipe): void {
    this.lists.forEach(list => {
      if (list.id === listId) {
        list.recipes = list.recipes.filter(h => h !== recipe);
      }
    });
    this.listService.deleteRecipeFromList(+listId, +recipe.id).subscribe();
  }

  deleteList(list: any): void {
    this.lists = this.lists.filter(h => h !== list);
    this.listService.deleteList(+list.id).subscribe();
  }

  createList(newlist: NgForm): void {
    const name = newlist.value.name;
    const type = newlist.value.type;
    this.listService.createList(name, type).subscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Recipe } from '../recipes/recipes-list/recipe-item/recipe';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  recipes$: Observable<any[]>;
  private searchTerms = new Subject<string>();

  constructor(private recipeService: RecipeService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.recipes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.recipeService.searchRecipes(term))
    );
  }

}

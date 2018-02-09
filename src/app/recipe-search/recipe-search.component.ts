import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Recipe } from '../recipes/recipes-list/recipe-item/recipe';
import { RecipeService } from '../recipe.service';
import { RecipeFilter } from './recipefilter';
@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  recipes$: Observable<any[]>;
  private searchTerms = new Subject<string>();
  private COURSBASE = 'allowedCourse[]=course^course-';
  private courses = [
    new RecipeFilter('Desserts', `${this.COURSBASE}Desserts`),
    new RecipeFilter('Side Dishes', `${this.COURSBASE}Side%Dishes`),
    new RecipeFilter('Lunch and Snacks', `${this.COURSBASE}Lunch%and%Snacks`),
    new RecipeFilter('Appetizers', `${this.COURSBASE}Appetizers`),
    new RecipeFilter('Salads', `${this.COURSBASE}Salads`),
    new RecipeFilter('Breads', `${this.COURSBASE}Breads`),
    new RecipeFilter('Breakfast and Brunch', `${this.COURSBASE}Breakfast%and%Brunch`),
    new RecipeFilter('Soups', `${this.COURSBASE}Soups`),
    new RecipeFilter('Beverages', `${this.COURSBASE}Beverages`),
    new RecipeFilter('Condiments and Sauces', `${this.COURSBASE}Condiments%and%Sauces`),
    new RecipeFilter('Cocktails', `${this.COURSBASE}Cocktails`),
    ];
  private courseTerm;

  constructor(private recipeService: RecipeService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.recipes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.recipeService.searchRecipes(term, this.courseTerm))
    );
  }

}

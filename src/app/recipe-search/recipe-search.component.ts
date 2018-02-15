import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Recipe } from '../recipes/recipes-list/recipe-item/recipe';
import { RecipeService } from '../recipe.service';
import { RecipeFilter } from './recipefilter';
import { COURSES, ALLERGIES, DIETS, HOLIDAYS, CUISINES, TOTALTIMES,
  COURSBASE, ALLERGIEBASE, DIETBASE, HOLIDAYBASE, CUISINEBASE, TIMEBASE } from './filtercolection';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  recipes$: Observable<any[]>;
  private searchTerms = new Subject<string>();
  private courses = COURSES;
  private allergies = ALLERGIES;
  private diets = DIETS;
  private holidays = HOLIDAYS;
  private cuisines = CUISINES;
  private totalTimes = TOTALTIMES;
  private filters = '';
  public showCourses = false;
  public showAllergies = false;
  public showDiets = false;
  public showHolidays = false;
  public showCuisines = false;
  public showTotalTimes = false;

  constructor(private recipeService: RecipeService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.recipes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return this.recipeService.searchRecipes(term, this.filters);
      })
    );
  }
  escapeSpecialCharacters(s: string): string {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  /* först listas alla characters som functionen ska leta efter och ersätta
  /g flaggan indikerar att functionen inte ska sluta leta efter matchnignar vid första matchnigen,
   utan forsätta tills hela strängen har sökts igenom.
   \\$& är det som ska sättas in istället för den matchade charactern det först backslashed ecapar det efterkommande,
   vilket inebär att ett backslash kommer sättas in istället för charactern som matchats,
   $& har här värdet av den matchade charactern,
   därmed så blir newsubstring i det här fallat den matchade charactern prependad med ett backslash */

  handleParams (filter: RecipeFilter): void {
    const param = this.escapeSpecialCharacters(`&${filter.parameter}`);
    const regExp = RegExp(`${param}*`);
    let newRegExp = RegExp(`${TIMEBASE}*`);

    if (newRegExp.test(param)) {
      this.totalTimes.forEach(element => {
        const toBeChecked = this.escapeSpecialCharacters(`&${element.parameter}`);
        newRegExp = RegExp(`${toBeChecked}*`);
        if (newRegExp.test(this.filters)) {
          this.filters = this.filters.replace(`&${element.parameter}`, '');
        }
      });
      this.filters += `&${filter.parameter}`;

    } else if (regExp.test(this.filters)) {
      this.filters = this.filters.replace(`&${filter.parameter}`, '');
    } else {
      this.filters += `&${filter.parameter}`;
    }
  }

  add(recipe: Recipe): void {
      this.recipeService.addRecipe(recipe)
      .subscribe();
  }

}

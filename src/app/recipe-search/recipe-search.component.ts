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
  private ALLERGIEBASE = 'allowedAllergy[]=';
  private DIETBASE = 'allowedDiet[]=';
  private HOLIDAYBASE = 'allowedHoliday[]=holiday^holiday-';
  private CUISINEBASE = 'allowedCuisine[]=cuisine^cuisine-';
  private courses = [
    new RecipeFilter('Desserts', `${this.COURSBASE}Desserts`, 'course'),
    new RecipeFilter('Side Dishes', `${this.COURSBASE}Side Dishes`, 'course'),
    new RecipeFilter('Lunch and Snacks', `${this.COURSBASE}Lunch and Snacks`, 'course'),
    new RecipeFilter('Appetizers', `${this.COURSBASE}Appetizers`, 'course'),
    new RecipeFilter('Salads', `${this.COURSBASE}Salads`, 'course'),
    new RecipeFilter('Breads', `${this.COURSBASE}Breads`, 'course'),
    new RecipeFilter('Breakfast and Brunch', `${this.COURSBASE}Breakfast and Brunch`, 'course'),
    new RecipeFilter('Soups', `${this.COURSBASE}Soups`, 'course'),
    new RecipeFilter('Beverages', `${this.COURSBASE}Beverages`, 'course'),
    new RecipeFilter('Condiments and Sauces', `${this.COURSBASE}Condiments and Sauces`, 'course'),
    new RecipeFilter('Cocktails', `${this.COURSBASE}Cocktails`, 'course'),
    ];
  private allergies = [
    new RecipeFilter('Wheat', `${this.ALLERGIEBASE}392^Wheat-Free`, 'allergie'),
    new RecipeFilter('Gluten', `${this.ALLERGIEBASE}393^Gluten-Free`, 'allergie'),
    new RecipeFilter('Peanut', `${this.ALLERGIEBASE}394^Peanut-Free`, 'allergie'),
    new RecipeFilter('Tree Nut', `${this.ALLERGIEBASE}395^Tree Nut-Free`, 'allergie'),
    new RecipeFilter('Dairy', `${this.ALLERGIEBASE}396^Dairy-Free`, 'allergie'),
    new RecipeFilter('Egg', `${this.ALLERGIEBASE}397^Egg-Free`, 'allergie'),
    new RecipeFilter('Seafood', `${this.ALLERGIEBASE}398^Seafood-Free`, 'allergie'),
    new RecipeFilter('Sesame', `${this.ALLERGIEBASE}399^Sesame-Free`, 'allergie'),
    new RecipeFilter('Soy', `${this.ALLERGIEBASE}400^Soy-Free`, 'allergie'),
    new RecipeFilter('Sulfite', `${this.ALLERGIEBASE}401^Sulfite-Free`, 'allergie')
  ];
  private diets = [
    new RecipeFilter('Pescaterian', `${this.DIETBASE}390^Pescetarian`, 'diet'),
    new RecipeFilter('Lacto vegetarian', `${this.DIETBASE}388^Lacto vegetarian`, 'diet'),
    new RecipeFilter('Ovo vegetarian', `${this.DIETBASE}389^Ovo vegetarian`, 'diet'),
    new RecipeFilter('Vegan', `${this.DIETBASE}386^Vegan`, 'diet'),
    new RecipeFilter('Lacto-ovo vegetarian', `${this.DIETBASE}387^Lacto-ovo vegetarian`, 'diet'),
    new RecipeFilter('Paleo', `${this.DIETBASE}403^Paleo`, 'diet'),
  ];
  private holidays = [
    new RecipeFilter('Christmas', `${this.HOLIDAYBASE}christmas`, 'holiday'),
    new RecipeFilter('New Year', `${this.HOLIDAYBASE}new Year`, 'holiday'),
    new RecipeFilter('Easter', `${this.HOLIDAYBASE}easter`, 'holiday'),
    new RecipeFilter('Valentines\'s Day', `${this.HOLIDAYBASE}valentines's-day`, 'holiday'),
    new RecipeFilter('Thanksgiving', `${this.HOLIDAYBASE}thanksgiving`, 'holiday'),
    new RecipeFilter('Halloween', `${this.HOLIDAYBASE}halloween`, 'holiday'),
    new RecipeFilter('Hanukkah', `${this.HOLIDAYBASE}hanukkah`, 'holiday'),
    new RecipeFilter('Chinese New Year', `${this.HOLIDAYBASE}chinese-new-year`, 'holiday'),
    new RecipeFilter('St. Patrick\'s Day', `${this.HOLIDAYBASE}St.-patrick's-day`, 'holiday'),
    new RecipeFilter('4th of July', `${this.HOLIDAYBASE}4th-of-july`, 'holiday'),
    new RecipeFilter('Super Bowl / Game Day', `${this.HOLIDAYBASE}super-bowl`, 'holiday'),
    new RecipeFilter('Summer', `${this.HOLIDAYBASE}summer`, 'holiday'),
    new RecipeFilter('Fall', `${this.HOLIDAYBASE}fall`, 'holiday'),
    new RecipeFilter('Spring', `${this.HOLIDAYBASE}spring`, 'holiday'),
    new RecipeFilter('Winter', `${this.HOLIDAYBASE}winter`, 'holiday'),
  ];
  
  private cuisines = [
    new RecipeFilter('American', `${this.CUISINEBASE}american`, 'cuisine'),
    new RecipeFilter('Italian', `${this.CUISINEBASE}italian`, 'cuisine'),
    new RecipeFilter('Asian', `${this.CUISINEBASE}asian`, 'cuisine'),
    new RecipeFilter('Mexican', `${this.CUISINEBASE}mexican`, 'cuisine'),
    new RecipeFilter('Southern & Soul Food', `${this.CUISINEBASE}southern`, 'cuisine'),
    new RecipeFilter('French', `${this.CUISINEBASE}french`, 'cuisine'),
    new RecipeFilter('Southwestern', `${this.CUISINEBASE}southwestern`, 'cuisine'),
    new RecipeFilter('Barbecue', `${this.CUISINEBASE}barbecue`, 'cuisine'),
    new RecipeFilter('Indian', `${this.CUISINEBASE}indian`, 'cuisine'),
    new RecipeFilter('Chinese', `${this.CUISINEBASE}chinese`, 'cuisine'),
    new RecipeFilter('Cajun & Creole', `${this.CUISINEBASE}cajun`, 'cuisine'),
    new RecipeFilter('English', `${this.CUISINEBASE}english`, 'cuisine'),
    new RecipeFilter('Mediterranean', `${this.CUISINEBASE}mediterranean`, 'cuisine'),
    new RecipeFilter('Greek', `${this.CUISINEBASE}greek`, 'cuisine'),
    new RecipeFilter('Spanish', `${this.CUISINEBASE}spanish`, 'cuisine'),
    new RecipeFilter('German', `${this.CUISINEBASE}german`, 'cuisine'),
    new RecipeFilter('Thai', `${this.CUISINEBASE}thai`, 'cuisine'),
    new RecipeFilter('Maroccam', `${this.CUISINEBASE}maroccam`, 'cuisine'),
    new RecipeFilter('Irish', `${this.CUISINEBASE}irish`, 'cuisine'),
    new RecipeFilter('Japanese', `${this.CUISINEBASE}japanese`, 'cuisine'),
    new RecipeFilter('Cuban', `${this.CUISINEBASE}cuban`, 'cuisine'),
    new RecipeFilter('Hawaiin', `${this.CUISINEBASE}hawaiin`, 'cuisine'),
    new RecipeFilter('Swedish', `${this.CUISINEBASE}swedish`, 'cuisine'),
    new RecipeFilter('Hungarian', `${this.CUISINEBASE}hungarian`, 'cuisine'),
    new RecipeFilter('Portugese', `${this.CUISINEBASE}portugese`, 'cuisine'),
  ];

  private allergieTerm = '';
  private courseTerm = '';
  private dietTerm = '';
  private holidayTerm = '';
  private cuisineTerm = '';

  constructor(private recipeService: RecipeService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.recipes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return this.recipeService.searchRecipes(term, this.courseTerm, this.allergieTerm, this.dietTerm ,this.holidayTerm, this.cuisineTerm);
      } )
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
    if (regExp.test(this[filter.type + 'Term'])) {
      this[filter.type + 'Term'] = this[filter.type + 'Term'].replace(`&${filter.parameter}`, '');
    } else {
      this[filter.type + 'Term'] += `&${filter.parameter}`;
    }
  }

}

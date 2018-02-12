  import { RecipeFilter } from './recipefilter';

  export const COURSBASE = 'allowedCourse[]=course^course-';
  export const ALLERGIEBASE = 'allowedAllergy[]=';
  export const DIETBASE = 'allowedDiet[]=';
  export const HOLIDAYBASE = 'allowedHoliday[]=holiday^holiday-';
  export const CUISINEBASE = 'allowedCuisine[]=cuisine^cuisine-';
  export const TIMEBASE = 'maxTotalTimeInSeconds=';

  export const COURSES = [
    new RecipeFilter('Desserts', `${this.COURSBASE}Desserts`),
    new RecipeFilter('Side Dishes', `${this.COURSBASE}Side Dishes`),
    new RecipeFilter('Lunch and Snacks', `${this.COURSBASE}Lunch and Snacks`),
    new RecipeFilter('Appetizers', `${this.COURSBASE}Appetizers`),
    new RecipeFilter('Salads', `${this.COURSBASE}Salads`),
    new RecipeFilter('Breads', `${this.COURSBASE}Breads`),
    new RecipeFilter('Breakfast and Brunch', `${this.COURSBASE}Breakfast and Brunch`),
    new RecipeFilter('Soups', `${this.COURSBASE}Soups`),
    new RecipeFilter('Beverages', `${this.COURSBASE}Beverages`),
    new RecipeFilter('Condiments and Sauces', `${this.COURSBASE}Condiments and Sauces`),
    new RecipeFilter('Cocktails', `${this.COURSBASE}Cocktails`),
    ];

  export const ALLERGIES = [
    new RecipeFilter('Wheat', `${this.ALLERGIEBASE}392^Wheat-Free`),
    new RecipeFilter('Gluten', `${this.ALLERGIEBASE}393^Gluten-Free`),
    new RecipeFilter('Peanut', `${this.ALLERGIEBASE}394^Peanut-Free`),
    new RecipeFilter('Tree Nut', `${this.ALLERGIEBASE}395^Tree Nut-Free`),
    new RecipeFilter('Dairy', `${this.ALLERGIEBASE}396^Dairy-Free`),
    new RecipeFilter('Egg', `${this.ALLERGIEBASE}397^Egg-Free`),
    new RecipeFilter('Seafood', `${this.ALLERGIEBASE}398^Seafood-Free`),
    new RecipeFilter('Sesame', `${this.ALLERGIEBASE}399^Sesame-Free`),
    new RecipeFilter('Soy', `${this.ALLERGIEBASE}400^Soy-Free`),
    new RecipeFilter('Sulfite', `${this.ALLERGIEBASE}401^Sulfite-Free`)
  ];

  export const DIETS = [
    new RecipeFilter('Pescaterian', `${this.DIETBASE}390^Pescetarian`),
    new RecipeFilter('Lacto vegetarian', `${this.DIETBASE}388^Lacto vegetarian`),
    new RecipeFilter('Ovo vegetarian', `${this.DIETBASE}389^Ovo vegetarian`),
    new RecipeFilter('Vegan', `${this.DIETBASE}386^Vegan`),
    new RecipeFilter('Lacto-ovo vegetarian', `${this.DIETBASE}387^Lacto-ovo vegetarian`),
    new RecipeFilter('Paleo', `${this.DIETBASE}403^Paleo`),
  ];

  export const HOLIDAYS = [
    new RecipeFilter('Christmas', `${this.HOLIDAYBASE}christmas`),
    new RecipeFilter('New Year', `${this.HOLIDAYBASE}new Year`),
    new RecipeFilter('Easter', `${this.HOLIDAYBASE}easter`),
    new RecipeFilter('Valentines\'s Day', `${this.HOLIDAYBASE}valentines's-day`),
    new RecipeFilter('Thanksgiving', `${this.HOLIDAYBASE}thanksgiving`),
    new RecipeFilter('Halloween', `${this.HOLIDAYBASE}halloween`),
    new RecipeFilter('Hanukkah', `${this.HOLIDAYBASE}hanukkah`),
    new RecipeFilter('Chinese New Year', `${this.HOLIDAYBASE}chinese-new-year`),
    new RecipeFilter('St. Patrick\'s Day', `${this.HOLIDAYBASE}St.-patrick's-day`),
    new RecipeFilter('4th of July', `${this.HOLIDAYBASE}4th-of-july`),
    new RecipeFilter('Super Bowl / Game Day', `${this.HOLIDAYBASE}super-bowl`),
    new RecipeFilter('Summer', `${this.HOLIDAYBASE}summer`),
    new RecipeFilter('Fall', `${this.HOLIDAYBASE}fall`),
    new RecipeFilter('Spring', `${this.HOLIDAYBASE}spring`),
    new RecipeFilter('Winter', `${this.HOLIDAYBASE}winter`),
  ];

  export const CUISINES = [
    new RecipeFilter('American', `${this.CUISINEBASE}american`),
    new RecipeFilter('Italian', `${this.CUISINEBASE}italian`),
    new RecipeFilter('Asian', `${this.CUISINEBASE}asian`),
    new RecipeFilter('Mexican', `${this.CUISINEBASE}mexican`),
    new RecipeFilter('Southern & Soul Food', `${this.CUISINEBASE}southern`),
    new RecipeFilter('French', `${this.CUISINEBASE}french`),
    new RecipeFilter('Southwestern', `${this.CUISINEBASE}southwestern`),
    new RecipeFilter('Barbecue', `${this.CUISINEBASE}barbecue`),
    new RecipeFilter('Indian', `${this.CUISINEBASE}indian`),
    new RecipeFilter('Chinese', `${this.CUISINEBASE}chinese`),
    new RecipeFilter('Cajun & Creole', `${this.CUISINEBASE}cajun`),
    new RecipeFilter('English', `${this.CUISINEBASE}english`),
    new RecipeFilter('Mediterranean', `${this.CUISINEBASE}mediterranean`),
    new RecipeFilter('Greek', `${this.CUISINEBASE}greek`),
    new RecipeFilter('Spanish', `${this.CUISINEBASE}spanish`),
    new RecipeFilter('German', `${this.CUISINEBASE}german`),
    new RecipeFilter('Thai', `${this.CUISINEBASE}thai`),
    new RecipeFilter('Maroccam', `${this.CUISINEBASE}maroccam`),
    new RecipeFilter('Irish', `${this.CUISINEBASE}irish`),
    new RecipeFilter('Japanese', `${this.CUISINEBASE}japanese`),
    new RecipeFilter('Cuban', `${this.CUISINEBASE}cuban`),
    new RecipeFilter('Hawaiin', `${this.CUISINEBASE}hawaiin`),
    new RecipeFilter('Swedish', `${this.CUISINEBASE}swedish`),
    new RecipeFilter('Hungarian', `${this.CUISINEBASE}hungarian`),
    new RecipeFilter('Portugese', `${this.CUISINEBASE}portugese`),
  ];
  export const TOTALTIMES = [
    new RecipeFilter('15 min', `${this.TIMEBASE}900`),
    new RecipeFilter('30 min', `${this.TIMEBASE}1800`),
    new RecipeFilter('45 min', `${this.TIMEBASE}2700`),
    new RecipeFilter('1 h', `${this.TIMEBASE}3600`),
    new RecipeFilter('1.5 h', `${this.TIMEBASE}5400`),
    new RecipeFilter('2 h', `${this.TIMEBASE}7200`),
    new RecipeFilter('3 h', `${this.TIMEBASE}10800`),

  ];

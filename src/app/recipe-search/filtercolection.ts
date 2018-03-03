  import { RecipeFilter } from './recipefilter';

  export const COURSBASE = 'allowedCourse[]=course^course-';
  export const ALLERGIEBASE = 'allowedAllergy[]=';
  export const DIETBASE = 'allowedDiet[]=';
  export const HOLIDAYBASE = 'allowedHoliday[]=holiday^holiday-';
  export const CUISINEBASE = 'allowedCuisine[]=cuisine^cuisine-';
  export const TIMEBASE = 'maxTotalTimeInSeconds=';

  export const COURSES = [
    new RecipeFilter('Desserts', `${COURSBASE}Desserts`),
    new RecipeFilter('Side Dishes', `${COURSBASE}Side Dishes`),
    new RecipeFilter('Lunch and Snacks', `${COURSBASE}Lunch and Snacks`),
    new RecipeFilter('Appetizers', `${COURSBASE}Appetizers`),
    new RecipeFilter('Salads', `${COURSBASE}Salads`),
    new RecipeFilter('Breads', `${COURSBASE}Breads`),
    new RecipeFilter('Breakfast and Brunch', `${COURSBASE}Breakfast and Brunch`),
    new RecipeFilter('Soups', `${COURSBASE}Soups`),
    new RecipeFilter('Beverages', `${COURSBASE}Beverages`),
    new RecipeFilter('Condiments and Sauces', `${COURSBASE}Condiments and Sauces`),
    new RecipeFilter('Cocktails', `${COURSBASE}Cocktails`),
    ];

  export const ALLERGIES = [
    new RecipeFilter('Wheat', `${ALLERGIEBASE}392^Wheat-Free`),
    new RecipeFilter('Gluten', `${ALLERGIEBASE}393^Gluten-Free`),
    new RecipeFilter('Peanut', `${ALLERGIEBASE}394^Peanut-Free`),
    new RecipeFilter('Tree Nut', `${ALLERGIEBASE}395^Tree Nut-Free`),
    new RecipeFilter('Dairy', `${ALLERGIEBASE}396^Dairy-Free`),
    new RecipeFilter('Egg', `${ALLERGIEBASE}397^Egg-Free`),
    new RecipeFilter('Seafood', `${ALLERGIEBASE}398^Seafood-Free`),
    new RecipeFilter('Sesame', `${ALLERGIEBASE}399^Sesame-Free`),
    new RecipeFilter('Soy', `${ALLERGIEBASE}400^Soy-Free`),
    new RecipeFilter('Sulfite', `${ALLERGIEBASE}401^Sulfite-Free`)
  ];

  export const DIETS = [
    new RecipeFilter('Pescaterian', `${DIETBASE}390^Pescetarian`),
    new RecipeFilter('Lacto vegetarian', `${DIETBASE}388^Lacto vegetarian`),
    new RecipeFilter('Ovo vegetarian', `${DIETBASE}389^Ovo vegetarian`),
    new RecipeFilter('Vegan', `${DIETBASE}386^Vegan`),
    new RecipeFilter('Lacto-ovo vegetarian', `${DIETBASE}387^Lacto-ovo vegetarian`),
    new RecipeFilter('Paleo', `${DIETBASE}403^Paleo`),
  ];

  export const HOLIDAYS = [
    new RecipeFilter('Christmas', `${HOLIDAYBASE}christmas`),
    new RecipeFilter('New Year', `${HOLIDAYBASE}new Year`),
    new RecipeFilter('Easter', `${HOLIDAYBASE}easter`),
    new RecipeFilter('Valentines\'s Day', `${HOLIDAYBASE}valentines's-day`),
    new RecipeFilter('Thanksgiving', `${HOLIDAYBASE}thanksgiving`),
    new RecipeFilter('Halloween', `${HOLIDAYBASE}halloween`),
    new RecipeFilter('Hanukkah', `${HOLIDAYBASE}hanukkah`),
    new RecipeFilter('Chinese New Year', `${HOLIDAYBASE}chinese-new-year`),
    new RecipeFilter('St. Patrick\'s Day', `${HOLIDAYBASE}St.-patrick's-day`),
    new RecipeFilter('4th of July', `${HOLIDAYBASE}4th-of-july`),
    new RecipeFilter('Super Bowl / Game Day', `${HOLIDAYBASE}super-bowl`),
    new RecipeFilter('Summer', `${HOLIDAYBASE}summer`),
    new RecipeFilter('Fall', `${HOLIDAYBASE}fall`),
    new RecipeFilter('Spring', `${HOLIDAYBASE}spring`),
    new RecipeFilter('Winter', `${HOLIDAYBASE}winter`),
  ];

  export const CUISINES = [
    new RecipeFilter('American', `${CUISINEBASE}american`),
    new RecipeFilter('Italian', `${CUISINEBASE}italian`),
    new RecipeFilter('Asian', `${CUISINEBASE}asian`),
    new RecipeFilter('Mexican', `${CUISINEBASE}mexican`),
    new RecipeFilter('Southern & Soul Food', `${CUISINEBASE}southern`),
    new RecipeFilter('French', `${CUISINEBASE}french`),
    new RecipeFilter('Southwestern', `${CUISINEBASE}southwestern`),
    new RecipeFilter('Barbecue', `${CUISINEBASE}barbecue`),
    new RecipeFilter('Indian', `${CUISINEBASE}indian`),
    new RecipeFilter('Chinese', `${CUISINEBASE}chinese`),
    new RecipeFilter('Cajun & Creole', `${CUISINEBASE}cajun`),
    new RecipeFilter('English', `${CUISINEBASE}english`),
    new RecipeFilter('Mediterranean', `${CUISINEBASE}mediterranean`),
    new RecipeFilter('Greek', `${CUISINEBASE}greek`),
    new RecipeFilter('Spanish', `${CUISINEBASE}spanish`),
    new RecipeFilter('German', `${CUISINEBASE}german`),
    new RecipeFilter('Thai', `${CUISINEBASE}thai`),
    new RecipeFilter('Maroccam', `${CUISINEBASE}maroccam`),
    new RecipeFilter('Irish', `${CUISINEBASE}irish`),
    new RecipeFilter('Japanese', `${CUISINEBASE}japanese`),
    new RecipeFilter('Cuban', `${CUISINEBASE}cuban`),
    new RecipeFilter('Hawaiin', `${CUISINEBASE}hawaiin`),
    new RecipeFilter('Swedish', `${CUISINEBASE}swedish`),
    new RecipeFilter('Hungarian', `${CUISINEBASE}hungarian`),
    new RecipeFilter('Portugese', `${CUISINEBASE}portugese`),
  ];
  export const TOTALTIMES = [
    new RecipeFilter('15 min', `${TIMEBASE}900`),
    new RecipeFilter('30 min', `${TIMEBASE}1800`),
    new RecipeFilter('45 min', `${TIMEBASE}2700`),
    new RecipeFilter('1 h', `${TIMEBASE}3600`),
    new RecipeFilter('1.5 h', `${TIMEBASE}5400`),
    new RecipeFilter('2 h', `${TIMEBASE}7200`),
    new RecipeFilter('3 h', `${TIMEBASE}10800`),

  ];

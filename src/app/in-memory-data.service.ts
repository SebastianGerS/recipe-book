import { Recipe } from './recipes/recipes-list/recipe-item/recipe';
import { Ingredient } from './recipes/recipes-list/recipe-item/ingredient/ingredient';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      new Recipe (
        1,
        'Pasta Bolognese',
        'main course',
        4,
        `Gör så här Skala och hacka löken. Skala och tärna moroten ytterst fint.
        Skala rotsellerin och riv den grovt. Fräs grönsakerna mjuka i smöret.
        Lägg i färsen och fräs den gyllenbrun.Pudra över mjölet och rör om. Spä med buljongen och de krossade tomaterna.
        Krydda såsen med örtkryddorna. Pressa i vitlöken. Sjud på svag värme under lock i 15 minuter.
        Krydda med salt och peppar. Koka pastan i rikligt med saltat vatten enligt anvisning på paketet.
        Häll av vattnet. Servera med såsen och parmesanost.`,
         30,
         [
          new Ingredient('Spaghetti', 300, 'g', 'pasta'),
          new Ingredient('minced beef', 300, 'g', 'meat'),
          new Ingredient('Crushed tomatos', 1, 'caan', 'vegetable'),
          new Ingredient('Union', 1, 'pcs', 'vegetable'),
          new Ingredient('Dised carrot', 1, 'pcs', 'vegetable'),
          new Ingredient('Dised selleri', 1, 'pcs', 'vegetable'),
          new Ingredient('Garlic', 2, 'cloves', 'vegetable'),
          new Ingredient('butter', 30, 'ml', 'dairy'),
          new Ingredient('flower', 5, 'ml', 'grain'),
          new Ingredient('meat broth', 2, 'dl', 'spice'),
          new Ingredient('Oregano', 15, 'ml', 'spice'),
          new Ingredient('Timjan', 1, 'ml', 'spice'),
          new Ingredient('salt', null, null, 'spice'),
          new Ingredient('black peper', null, null, 'spice'),
          new Ingredient('parmesan', 100, 'g', 'chees'),
      ]),
      new Recipe (
        2,
        'Panko Parmesan Salmon',
        'main course',
        4,
        `Preheat the oven to 425 degrees F (220 degrees C). Lightly grease a 9x13-inch baking pan.
        Place salmon fillets into the baking pan and sprinkle evenly with lemon juice. Season with salt and pepper.
        Combine panko, Parmesan cheese, olive oil, Italian seasoning, and garlic powder in a bowl. Sprinkle mixture evenly over the salmon.
        Bake in the preheated oven until topping is lightly browned and salmon flakes easily with a fork, 15 to 20 minutes.`,
        20,
        [
          new Ingredient('salmon fille', 4, 'pcs', 'fish'),
          new Ingredient('lemon juice', 25, 'ml', 'fruit'),
          new Ingredient('panko bread crumbs', 0.5, 'cups', 'grain'),
          new Ingredient('Garlic powder', 0.5, 'ml', 'spice'),
          new Ingredient('olive oil', 15, 'ml', 'oil'),
          new Ingredient('Italian seasoning', 5, 'ml', 'spice'),
          new Ingredient('salt', null, null, 'spice'),
          new Ingredient('black peper', null, null, 'spice'),
          new Ingredient('grated parmesan', 0.5, 'cups', 'chees'),
      ])

    ];
    return {recipes};
  }
}



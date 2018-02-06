import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe-item/recipe';
import {Ingredient} from './recipe-item/ingredient/ingredient';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe (
      'Pasta Bolognese med riven parmesanost',
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
  ];
  selectedRecipe: Recipe;

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  constructor() {
  }

  ngOnInit() {
  }

 
}

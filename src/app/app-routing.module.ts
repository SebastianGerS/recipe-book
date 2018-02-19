import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeDetailsComponent } from './recipes/recipes-list/recipe-details/recipe-details.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: RecipeSearchComponent},
  {path: 'lists', component: RecipesListComponent},
  {path: 'recipe/:id', component: RecipeDetailsComponent},
  {path: 'lists/:listId/recipe/:recipeId', component: RecipeDetailsComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

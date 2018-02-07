import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailsComponent } from './recipes/recipes-list/recipe-details/recipe-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'recipes', component: RecipesListComponent},
  {path: 'recipe/:id', component: RecipeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

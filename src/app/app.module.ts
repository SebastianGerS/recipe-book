import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

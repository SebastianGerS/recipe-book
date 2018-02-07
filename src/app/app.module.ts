import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailsComponent} from './recipes/recipes-list/recipe-details/recipe-details.component';
import { RecipeService } from './recipe.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    RecipeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false }
    )
  ],
  providers: [RecipeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

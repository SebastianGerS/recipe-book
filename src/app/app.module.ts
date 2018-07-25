import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailsComponent} from './recipes/recipes-list/recipe-details/recipe-details.component';
import { RecipeService } from './recipe.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { ListService } from './list.service';
import { API_URL } from '../config';

export function jwtOptionsFactory() {
  return {
      tokenGetter: () => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
          return user.data['access_token'];
        }
        return null;
      },
      whitelistedDomains: [API_URL],
      skipWhenExpired: true
    };
}
@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    MessagesComponent,
    RecipeSearchComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    }),
  ],
  providers: [RecipeService, MessageService, AuthService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor (
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private messageService: MessageService) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://api.app.test/api/auth/login', {email: email, password: password})
    .pipe(
      map(res => {
        if (res && res.data.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(res));
        }
        return this.isLoggedIn();
      })
    );
  }

  register( name: string, email: string, password: string): Observable<any> {

    return this.http.post<any>('http://api.app.test/api/auth/register', {name: name, email: email, password: password})
    .pipe(
      tap(_ => this.login(email, password)),
      catchError(this.handleError<any>('deleteRecipe'))
    );
  }

  logout( ) {
    localStorage.removeItem('currentUser');
    return this.isLoggedIn();
  }

  isLoggedIn() {

    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user) {

      const token = user.data['access_token'];

      if (token && !this.jwtHelper.isTokenExpired(token)) {

        return true;

      } else {

        return false;
      }

    }

    return false;

  }

  private log(message: string) {
    this.messageService.add(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

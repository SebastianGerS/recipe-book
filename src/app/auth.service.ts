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

  logout() {
    localStorage.removeItem('currentUser');
    this.log('You have been logged out');
    return this.isLoggedIn();
  }

  refresh(): Observable<any> {
    const token = `?token=${JSON.parse(localStorage.getItem('currentUser')).data['access_token']}`;
    return this.http.post<any>(`http://api.app.test/api/auth/refresh${token}`, {})
    .pipe(
      map(res => {
        if (res && res.data.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(res));
        }
        return this.isLoggedIn();
      })
    );
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

  checkIfRefreshIsPending() {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user) {

      const tokenExpDate = this.jwtHelper.getTokenExpirationDate(user.data['access_token']);
      const date = new Date();
      const offset = tokenExpDate.getTimezoneOffset() - date.getTimezoneOffset();

      if ((tokenExpDate.getTime() - date.getTime()) <= (1000 * 60 * 10 + 1000 * 60 * offset) ) {
        this.log('your session is about to expire, would you like to refresh? (else you will be logged out in 10 min)');
      } else if ((tokenExpDate.getTime() - date.getTime()) <= (1000 * 60 * offset)) {
        this.logout();
      }
    }
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

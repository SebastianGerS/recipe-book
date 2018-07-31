import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_URL } from '../config';

@Injectable()
export class AuthService {
  private url: string;
  constructor (
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private messageService: MessageService
  ) {
      this.url = API_URL;
    }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, {email: email, password: password})
    .pipe(
      map(res => {
        if (res && res.data.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(res));
        }
        return this.isLoggedIn();
      }),
      catchError(this.handleError<any>('login'))
    );
  }

  register( name: string, email: string, password: string): Observable<any> {
    
    return this.http.post<any>(`${this.url}/register`, {name: name, email: email, password: password})
    .pipe(
      tap(_ => {
        return this.login(email, password).subscribe()}),
      catchError(this.handleError<any>('register'))
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.log('You have been logged out');
    return this.isLoggedIn();
  }

  refresh(): Observable<any> {
    const token = `?token=${JSON.parse(localStorage.getItem('currentUser')).data['access_token']}`;
    return this.http.post<any>(`${this.url}/refresh${token}`, {})
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
      if (token && this.jwtHelper.isTokenExpired(token)) {
        return true;
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
      
      if ((tokenExpDate.getTime() - date.getTime()) <= (1000 * 60 * offset)) {
        this.logout();
      } else if ((tokenExpDate.getTime() - date.getTime()) <= (1000 * 60 * 10 + 1000 * 60 * offset) ) {
        this.log('your session is about to expire, would you like to refresh? (else you will be logged out in 10 min)');
      } 
    }
  }

  public log(message: string) {
    this.messageService.add(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

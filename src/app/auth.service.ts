import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor( 
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private messageService: MessageService) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://api.app.test/api/auth/login', {email: email, password: password})
    .pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }

  register( name: string, email: string, password: string): Observable<any> {
    console.log(name);
    return this.http.post<any>('http://api.app.test/api/auth/register', {name: name, email: email, password: password})
    .pipe(
      map(res => {
        console.log(res);
        return res;
      } )
    );
  }

  logout( credentials: {}): Observable<any> {
    return;
  }
}

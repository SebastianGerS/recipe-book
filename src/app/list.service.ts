import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable()
export class ListService {
private token: string;
  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  createList(name: string, type: string): Observable<any> {
    this.token = `?token=${JSON.parse(localStorage.getItem('currentUser')).data['access_token']}`;
    return this.http.post<any>(`http://api.app.test/api/auth/lists${this.token}`, {name: name , type: type})
    .pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }

}

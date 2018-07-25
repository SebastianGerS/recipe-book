import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'the Recipe Book';

  constructor(
    private authService: AuthService,
  ) { }

  public loggedIn = false;

  ngAfterViewInit() {
    setTimeout(() => this.loggedIn = this.authService.isLoggedIn(), 1);
    setInterval(() => this.loggedIn = this.authService.isLoggedIn(), 10);
  }
}

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'the Recipe Book';

  @ViewChild(LoginComponent)
  private loginComponent: LoginComponent;

  private loggedIn = false;

  ngAfterViewInit() {
    setTimeout(() => this.loggedIn = this.loginComponent.loggedIn, 1);
    setInterval(() => this.loggedIn = this.loginComponent.loggedIn, 10);
  }
}

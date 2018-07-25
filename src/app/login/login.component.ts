import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  model: any = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
    this.checkIfAboutToExipre();
    setInterval(() => { this.loggedIn = this.authService.isLoggedIn(); }, 10);
  }

  attemptLogin(): void {
    const email = this.model.email;
    const password = this.model.password;

    this.authService.login(email, password).subscribe( res => {
      this.loggedIn = res;
    });
    this.emptyFields(['email', 'password']);
    this.router.navigate(['/']);
  }

  logout(): void {
    this.loggedIn = this.authService.logout();
    this.router.navigate(['/']);
  }

  checkIfAboutToExipre(): void {
    setInterval(() => { this.authService.checkIfRefreshIsPending(); }, 1000 * 60 * 10);
  }

  emptyFields (fields: string[]): void {
    fields.forEach(field => {
      this.model[field] = '';
    });
  }

}

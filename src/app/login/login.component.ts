import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
    this.checkIfAboutToExipre();
  }

  attemptLogin(credetials: NgForm): void {
    const email = credetials.value.email;
    const password = credetials.value.password;

    this.authService.login(email, password).subscribe( res => {
      this.loggedIn = res;
    });
  }

  logout(): void {
    this.loggedIn = this.authService.logout();
  }

  checkIfAboutToExipre(): void {
    setInterval(() => { this.authService.checkIfRefreshIsPending(); }, 1000 * 60 * 10);
  }


}

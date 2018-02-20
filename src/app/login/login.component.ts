import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
  }

  attemptLogin(credetials: NgForm): void {
    const email = credetials.value.email;
    const password = credetials.value.password;
    const selfe = this;
    this.authService.login(email, password).subscribe( res => {
      this.loggedIn = res;
    });
  }

  logout(): void {
    this.loggedIn = this.authService.logout();
  }


}

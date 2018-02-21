import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  register(): void {
    const name = this.model.name;
    const email = this.model.email;
    const password = this.model.password;

    if (password === this.model.passwordConfirmation && this.model.password.length >= 6 && this.model.email.includes('@')) {

      this.authService.register(name, email, password).subscribe();
      this.emptyFields(['name', 'email', 'password', 'passwordConfirmation']);
      this.router.navigate(['/']);

    } else if (this.model.password.length < 6 && this.model.email.includes('@') ) {

      this.emptyFields(['password', 'passwordConfirmation']);
      this.authService.log('The password you provided was to short');

    } else if (!this.model.email.includes('@')) {
      this.emptyFields(['email', 'password', 'passwordConfirmation']);
      this.authService.log('The email you provided had an incorect format');

    } else {

      this.emptyFields(['password', 'passwordConfirmation']);
      this.authService.log('The password confirmations did not match the password');
    }
  }

  emptyFields (fields: string[]): void {
    fields.forEach(field => {
      this.model[field] = '';
    });
  }

}

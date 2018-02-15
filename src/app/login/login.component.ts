import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  attemptLogin(credetials: NgForm): void {
    const email = credetials.value.email;
    const password = credetials.value.password;

    this.authService.login(email, password).subscribe();
  }


}

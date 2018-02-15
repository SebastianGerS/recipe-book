import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(credetials: NgForm): void {
    const name = credetials.value.name;
    const email = credetials.value.email;
    const password = credetials.value.password;
    this.authService.register(name, email, password).subscribe();
  }

}

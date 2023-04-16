import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
  loginForms = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor( private auth:AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }
  onSubmit(): void {
    if (this.loginForms.valid) {
      this.auth.login(this.loginForms.value).subscribe(
        (result: any) => {
          console.log(result);
          this.auth.setToken(result)
          this.router.navigate(['/dashboard']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authservice: AuthService) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.minLength(8),
    ]),
    hashedPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });

  loginHandler(data: any) {
    this.authservice.loginAuth(data).subscribe(
      (response: any) => {
        console.log('response => : ', response);
        this.authservice.setCredentials(response.accessToken);
        let data: any = this.authservice.decodeJWT();
        let currentUser = {
          id: data.id,
          email: data.sub,
          role: data.roles[0].authority,
        };
        this.authservice.setCurrentUserToLocal(currentUser);
      },
      (error: any) => {
        console.log('error => : ', error);
      }
    );
  }
}

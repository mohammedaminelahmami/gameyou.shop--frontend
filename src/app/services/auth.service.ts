import { Constants } from './../shared/Constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private route: Router) {}

  loginAuth(email: string, hashedPassword: string) {
    return this.http.post(Constants.apiEndPoint.auth.login, {
      email,
      hashedPassword,
    });
  }

  registerClientAuth(data: any) {
    return this.http.post(Constants.apiEndPoint.auth.registerClient, data);
  }

  registerSellerAuth(data: any) {
    return this.http.post(Constants.apiEndPoint.auth.registerSeller, data);
  }

  setCredentials(token: any) {
    if (token) {
      localStorage.setItem('access_token', token);
      this.route.navigate(['/']);
    }
  }

  getCredentials() {
    return localStorage.getItem('access_token');
  }

  decodeJWT = (): any => {
    const token: any = this.getCredentials();
    const payload = token.split('.')[1];
    const base64 = payload.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64));
  };

  getCurrentUserId() {
    return this.decodeJWT().id;
  }

  getRole() {
    return this.decodeJWT().role;
  }

  getCurrentUserFromLocal(): any {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  getAuthorities(): string[] | undefined {
    const authorities = this.decodeJWT().authorities.map(
      (authority: any) => authority.authority
    );
    return authorities;
  }

  checkHasRole(role: string): boolean {
    const authorities = this.getAuthorities();
    if (authorities) {
      return authorities.includes(role);
    }
    return false;
  }
}

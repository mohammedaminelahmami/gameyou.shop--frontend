import { Constants } from './../shared/Constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private route: Router) {}

  loginAuth(data: any) {
    return this.http.post(Constants.apiEndPoint.auth.login, data);
  }

  registerAuth(data: any) {
    return this.http.post(Constants.apiEndPoint.auth.register, data);
  }

  setCredentials(token: any) {
    if (token) {
      localStorage.setItem('accessToken', token);
      this.route.navigate(['/home']);
    }
  }

  getCredentials() {
    return localStorage.getItem('accessToken');
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
    return this.decodeJWT().roles[0].authority;
  }

  setCurrentUserToLocal(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
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

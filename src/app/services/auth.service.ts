import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): string | null {
    console.log(localStorage.getItem('token'));
    
    
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      // this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Srinjoy', email: 'admin@gmail.com' , token:'abcdefghijklmnopqrstuvwxyz'});
    }
    return throwError(new Error('Failed to login'));
  }
}
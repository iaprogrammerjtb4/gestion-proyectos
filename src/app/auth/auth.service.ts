import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'pass') {
        localStorage.setItem('logeado', 'true');
        return true;
      }
      return false;
  }

  logout(): void {
    localStorage.removeItem('logeado');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('logeado') === 'true';
  }
}

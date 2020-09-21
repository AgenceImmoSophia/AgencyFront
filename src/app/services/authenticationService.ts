import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isSignedIn = false;

  constructor(
    private http: HttpClient) {
  }

  signIn(username: string, password: string) {
    return this.http.post<any>('allUsers/authenticate', {username, password})
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.isSignedIn = true;
        }
        return user;
      }));
  }

  signOut() {
    localStorage.removeItem('currentUser');
    this.isSignedIn = false;
  }

  isSignIn() {
    // debugger;
    if (JSON.parse(localStorage.getItem('currentUser')).auth_token == null) {
      this.isSignedIn = false;
      return this.isSignedIn;
    } else {
      return true;
    }
  }

}

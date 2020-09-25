import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User } from '../models/user';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private currentUserSubject: BehaviorSubject<User>;
  // private currentUser: Observable<User>;

  isLoggedin = false;

  constructor(private http: HttpClient) {
  }

  // login(username: string, password: string) {
  //   return this.http.post<any>(environment.apiUrl + '/users/authenticate', {username, password})
  //     .pipe(map(user => {
  //       if (user && user.token) {
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         this.isLoggedin = true;
  //       }
  //       return user;
  //     }));
  // }

  logout() {
    localStorage.removeItem('currentUser');
    this.isLoggedin = false;
  }

  isLoggedIn() {
    if (JSON.parse(localStorage.getItem('currentUser')).auth_token == null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    } else {
      return true;
    }
  }

}

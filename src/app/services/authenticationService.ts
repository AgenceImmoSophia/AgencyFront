import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import { User } from '../models/user';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private signInUrl = 'http://localhost:8080/apiUser/';
  private currentUser: Observable<User>;
  currentUserSubject: BehaviorSubject<User>;
  // isSignedIn = false;
  // httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  // };

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  signIn(username, password) {
    return this.http.post<any>(this.signInUrl + 'allUsers/authenticate', {username, password})
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  // signIn(username: string, password: string) {
  //   return this.http.post<any>(this.signInUrl + 'allUsers/authenticate' + username, password);
  //     .pipe(map(user => {
  //       if (user && user.token) {
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         this.isSignedIn = true;
  //       }
  //       return user;
  //     }));
  // }

  signOut() {
    return this.http.request<any>(this.signInUrl + '');
    localStorage.removeItem('currentUser');
    this.isSignedIn = false;
  }

  isSignedIn() {
    // debugger;
    if (JSON.parse(localStorage.getItem('currentUser')).auth_token == null) {
      this.isSignedIn = false;
      return this.isSignedIn;
    } else {
      return true;
    }
  }

}

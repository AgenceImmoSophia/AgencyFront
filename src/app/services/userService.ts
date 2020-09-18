import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable(
  {providedIn: 'root'}
)

export class UserService {
  private userUrl = 'http://localhost:8080/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + 'allUsers');
  }

  public findUserById(userId: number): Observable<User> {
    return this.http.get<User>(this.userUrl + 'user/' + userId);
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl + 'createUser', user, this.httpOptions);
  }

  public updateUserById(user: User) {
    return this.http.put<User>(this.userUrl + 'user/' + user.id + '/editUser', user, this.httpOptions);
  }

  public deleteUserById(userId: number) {
    return this.http.delete<User>(this.userUrl + 'deleteUser/' + userId, this.httpOptions);
  }
}

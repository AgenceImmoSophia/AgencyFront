import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable(
  {providedIn: 'root'}
)

export class UserService {
  private userUrl = 'http://localhost:8080/users/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + 'allUsers');
  }

  public findUserById(userId: number): Observable<User> {
    return this.http.get<User>(this.userUrl + userId);
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl + 'create', user, this.httpOptions);
  }

  public updateUserById(user: User) {
    return this.http.put<User>(this.userUrl + 'editUser/' + user.id, user, this.httpOptions);
  }

  public deleteUserById(userId: number) {
    return this.http.delete<User>(this.userUrl + 'delete/' + userId, this.httpOptions);
  }
}

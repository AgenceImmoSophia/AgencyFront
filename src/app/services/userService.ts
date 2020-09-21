import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import { EstateAgent } from '../models/estateAgent';
import { Client } from '../models/client';

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

  public findClientById(userId: number): Observable<Client> {
    return this.http.get<Client>(this.userUrl + userId);
  }

  public findAgentById(userId: number): Observable<EstateAgent> {
    return this.http.get<EstateAgent>(this.userUrl + userId);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.userUrl + 'createUser', user, this.httpOptions).subscribe(value => {
      console.log(value)});;
  }
  public createAgent (agent: EstateAgent){
    return this.http.post<EstateAgent>(this.userUrl + 'createUser', agent, this.httpOptions).subscribe(value => {
      console.log(value)});;
  }

  public updateUserById(user: User) {
    return this.http.put<User>(this.userUrl + 'user/' + user.id + '/editUser', user, this.httpOptions);
  }

  public deleteUserById(userId: number) {
    return this.http.delete<User>(this.userUrl + 'deleteUser/' + userId, this.httpOptions);
  }
}

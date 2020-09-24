import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import { EstateAgent } from '../models/estateAgent';
import { Client } from '../models/client';
import { EstateAgentAccountComponent } from '../accountUser/estate-agent-account/estate-agent-account.component';
import { Owner } from '../models/owner';

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

  public findClientById(userId: number): Observable<Client> {
    return this.http.get<Client>(this.userUrl + userId);
  }

  public findOwnerById(userId: number): Observable<Owner> {
    return this.http.get<Owner>(this.userUrl + userId);
  }

  public findAgentById(userId: number): Observable<EstateAgent> {
    return this.http.get<EstateAgent>(this.userUrl + userId);
  }

  public findEstateAgentByUsername(username: string): Observable<EstateAgent> {
    return this.http.get<EstateAgent>(this.userUrl + 'estateagent/' + username);
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
    return this.http.put<User>(this.userUrl + 'editUser/' + user.id, user, this.httpOptions);
  }

  public deleteUserById(userId: number) {
    return this.http.delete<User>(this.userUrl + 'delete/' + userId, this.httpOptions);
  }
}

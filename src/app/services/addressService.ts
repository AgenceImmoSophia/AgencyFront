import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable(
  {providedIn: 'root'}
)

export class AddressService {
  private addressUrl = 'http://localhost:8080/AgencyBack/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
}


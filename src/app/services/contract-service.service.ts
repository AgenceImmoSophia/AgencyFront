import { Injectable } from '@angular/core';
import { Contract } from '../models/contract';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContractService {


  private goodUrl = 'http://localhost:8080/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  createContract(contract: Contract) {
    return this.http.post<Contract>(this.goodUrl + 'createContract', contract, this.httpOptions).subscribe(value => {
      console.log(value)});
  }
}

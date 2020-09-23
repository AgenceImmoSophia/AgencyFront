import { Injectable } from '@angular/core';
import {Good} from '../models/good';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Visit} from '../models/visit';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  private visitUrl = 'http://localhost:8080/AgencyBack/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public findAllVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.visitUrl + 'allvisits');
  }

  public createVisit(visit: Visit) {
    return this.http.post<Visit>(this.visitUrl + 'addvisit', visit, this.httpOptions)
      .subscribe(value => {
        console.log(value);
      });
      // catchError(this.handleError<Visit>('addVisit'))
    // );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}

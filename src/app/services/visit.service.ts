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
  private good: Good;
  private visitUrl = 'http://localhost:8080/AgencyBack/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public findAllVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.visitUrl + 'allVisits');
  }

  public createVisit(visit: Visit) {
    return this.http.post<Visit>(this.visitUrl + 'createVisit', visit, this.httpOptions).pipe(
      catchError(this.handleError<Visit>('createVisit'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}

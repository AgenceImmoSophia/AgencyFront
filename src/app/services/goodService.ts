import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Good} from '../models/good';

@Injectable(
  {providedIn: 'root'}
)

export class GoodService {
  private goodUrl = 'http://localhost:8080/apiGood/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public findAllGoods(): Observable<Good[]> {
    return this.http.get<Good[]>(this.goodUrl + 'goods');
  }

  public findGoodById(goodId: number): Observable<Good> {
    return this.http.get<Good>(this.goodUrl + 'good/' + goodId);
  }

  public createGood(good: Good): Observable<Good> {
    return this.http.post<Good>(this.goodUrl + 'good', good, this.httpOptions);
  }

  public updateGoodById(good: Good): Observable<Good> {
    return this.http.put<Good>(this.goodUrl + 'good/' + good.id + '/editGood', good, this.httpOptions);
  }

  public deleteGoodById(goodId: number): Observable<Good> {
    return this.http.delete<Good>(this.goodUrl + 'deleteGood/' + goodId, this.httpOptions);
  }
}

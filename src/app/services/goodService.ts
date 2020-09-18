import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Good} from '../models/good';

@Injectable(
  {providedIn: 'root'}
)

export class GoodService {
  private goodUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public findAllGoods(): Observable<Good[]> {
    return this.http.get<Good[]>(this.goodUrl + 'allGoods');
  }

  public findGoodById(goodId: number): Observable<Good> {
    return this.http.get<Good>(this.goodUrl + 'good/' + goodId);
  }

 // public createGood(good: Good): Observable<Good> {
 //   return this.http.post<Good>(this.goodUrl + 'createGood', good, this.httpOptions);
 // }

  public updateGoodById(good: Good): Observable<Good> {
    return this.http.put<Good>(this.goodUrl + 'good/' + good.id + '/editGood', good);
  }

  public deleteGoodById(goodId: number): Observable<Good> {
    return this.http.delete<Good>(this.goodUrl + 'deleteGood/' + goodId);
  }

  public createGood( good: Good){
    console.log('cc petite peruche');
    return this.http.post<Good>(this.goodUrl + 'good', good).subscribe(value => console.log(value));

  }
}

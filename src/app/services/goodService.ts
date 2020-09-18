import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Good} from '../models/good';

@Injectable(
  {providedIn: 'root'}
)

export class GoodService {
  private goodUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public findAllGoods(): Observable<Good[]> {
    return this.http.get<Good[]>(this.goodUrl + 'goods');
  }

  public findGoodById(id: number): Observable<Good> {
    const url = `${this.goodUrl}/good/${id}`;
    return this.http.get<Good>(url);
  }
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

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
/* private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
*/
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Good} from '../models/good';
import { TypeOfGood } from '../models/typeOfGood';
import { Status } from '../models/status';

@Injectable(
  {providedIn: 'root'}
)

export class GoodService {
  private goodUrl = 'http://localhost:8080/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public findAllGoods(): Observable<Good[]> {
    return this.http.get<Good[]>(this.goodUrl + 'goods');
  }

  public findGoodById(id: number): Observable<Good> {
    const url = `${this.goodUrl}good/${id}`;
    return this.http.get<Good>(url);
  }

  public createGood(good: Good){
    return this.http.post<Good>(this.goodUrl + 'good', good, this.httpOptions).subscribe(value => {
      console.log(value)});
  }

  public updateGoodById(good: Good): Observable<Good> {
    return this.http.put<Good>(this.goodUrl + 'good/' + good.id + '/editGood', good);
  }

  public deleteGoodById(goodId: number): Observable<Good> {
    return this.http.delete<Good>(this.goodUrl + 'good/' + goodId);
  }

  public editGood( good: Good, goodId: number){
      return this.http.post<Good>(this.goodUrl + 'editGood/' + goodId, good, this.httpOptions).subscribe(value => console.log(value));
    }

public generateCode (typeOfGood: TypeOfGood, price: number, status: Status, area: number){
   var code;
   var firstDigit = typeOfGood.valueOf();
   var secondDigit;
   var thirdDigit;
   var fourthDigit;

   if(status.valueOf() == 0){
     if (price <=200000){
      secondDigit=1;
    } else if (price >200000 && price <= 300000){
      secondDigit=2;
    } else if (price >300000 && price <= 400000){
      secondDigit=3;
    } else {
      secondDigit=4;
    }
  } else if(status.valueOf() == 1){
    if (price<=200) {
      secondDigit=1;
    } else if (price>200 && price<=300){
      secondDigit=2;
    } else if (price>300 && price<=400){
      secondDigit=3;
    } else if (price>400 && price<=500){
      secondDigit=4;
    } else if (price>500 && price<=600){
      secondDigit=5;
    } else if (price>600 && price<=700){
      secondDigit=6;
    } else if (price>700 && price<=800){
      secondDigit=7;
    } else if (price>800 && price<=900){
      secondDigit=8;
    } else {
      secondDigit = 9;
    }
   }

if(status.valueOf()==0){
  thirdDigit=1;
} else if(status.valueOf()==1){
  thirdDigit=2;
} else if(status.valueOf()==2){
  thirdDigit=3;
}

   if (area <= 10){
    fourthDigit=1;
  } else if (area>10 && area <=30){
    fourthDigit=2;
  } else if (area>30 && area <=50){
    fourthDigit=3;
  } else if (area>50 && area <=70){
    fourthDigit=4;
  } else if (area>70 && area <=90){
    fourthDigit=5;
  } else if (area>90 && area <=110){
    fourthDigit=6;
  } else {
    fourthDigit=7;
  }
  code = firstDigit.toString().concat(secondDigit, thirdDigit, fourthDigit);
  console.log(code);
  return code;
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

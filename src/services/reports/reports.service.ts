import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  orderReport() : Observable<any> {
    return this.http.get(`${environment.endpoint}/orders/getorderReport.json`)
      .pipe(
        shareReplay()
      )
  }

  itemsReport() : Observable<any> {
    return this.http.get(`${environment.endpoint}/orderdetails/sellallitems.json`)
      .pipe(
        shareReplay()
      )
  }

  monthReport() : Observable<any> {
    return this.http.get(`${environment.endpoint}/Orderdetails/getSellsByCategoryforMonth.json`)
      .pipe(
        shareReplay()
      )
  }

  weekReport() : Observable<any> {
    return this.http.get(`${environment.endpoint}/Orderdetails/getSellsByCategoryforweek.json`)
      .pipe(
        shareReplay()
      )
  }  
}

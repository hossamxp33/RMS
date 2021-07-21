import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProInInv() : Observable<any> {
    return this.http.get(`${environment.endpoint}/products/reportproducts.json`)
      .pipe(
        shareReplay()
      )
  }

  getProCost() : Observable<any> {
    return this.http.get(`${environment.endpoint}/products/getcostofproductinweekandmonth.json`)
      .pipe(
        shareReplay()
      )
  }

  filterInv(filter) {
    return this.http.post(`${environment.endpoint}/products/reportproducts.json`, filter).toPromise();
  }
}

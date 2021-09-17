import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  filterOrders(filterBy) {    
    return this.http.post(`${environment.endpoint}/orderdetails/sellallitems.json`, filterBy)
  }

  getOrdersByFilter(filter, page): Observable<any> {
    return this.http.post(`${environment.endpoint}/orders.json?page=${page}`, filter)
      .pipe(
        shareReplay()
      )
  }

  getOrdersByFilter2(filter, page) {
    return this.http.post(`${environment.endpoint}/orders.json?page=${page}`, filter).toPromise();
  }

  changeOrderStatus(order_status, id) {
    return this.http.post(`${environment.endpoint}/orders/edit/${id}.json`, order_status).toPromise()
  }

}

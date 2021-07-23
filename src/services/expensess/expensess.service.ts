import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpensessService {

  constructor(private http: HttpClient) { }

  getExpensessDetails(date) {    
    return this.http.post(`${environment.endpoint}/Expenses/getDailyExpensesDetailsByDate.json`, date)
  }

  getExpensesReport(page) : Observable<any> {
    return this.http.get(`${environment.endpoint}/Expenses/getListExpensesDetailsByCategory.json?page=${page}`)
      .pipe(
        shareReplay()
      )
  }

  filterExpensesReport(filter) {
    return this.http.post(`http://wokhouse.codesroots.com/api/Expenses/getListExpensesDetailsByCategory.json`, filter).toPromise()
  }

}

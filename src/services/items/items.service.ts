import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItemsNotHavigRecipy() : Observable<any> {
    return this.http.get(`${environment.endpoint}/items/getItemsNotHavingRecipy.json`)
      .pipe(
        shareReplay()
      )
  }
    
}

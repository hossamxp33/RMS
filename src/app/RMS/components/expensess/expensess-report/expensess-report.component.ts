import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectItemsReportsCategories } from 'src/app/RMS/store/items-reports/items-reports.selectors';

@Component({
  selector: 'app-expensess-report',
  templateUrl: './expensess-report.component.html',
  styleUrls: ['./expensess-report.component.css']
})
export class ExpensessReportComponent implements OnInit {
  expensess: any[] = [];
  loading: boolean = false;

  itemsCategories$: Observable<any>;
  
  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.expensess = res.expens.orderdetails
      }
    );

    this.itemsCategories$ = this.store.pipe(select(selectItemsReportsCategories));
  }

}

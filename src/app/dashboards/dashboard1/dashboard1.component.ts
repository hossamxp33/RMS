import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/apps/email/app.state';
import { selectTotalMonthChart, selectTotalMonthSales, selectTotalWeekChart, selectTotalWeekSales } from 'src/app/RMS/store/sales-reports/sales-reports.selectors';
import * as lang from './../../../settings/lang';
import { selectWeekReportsQuery } from 'src/app/RMS/store/week-reports/week-reports.selectors';
import { selectMonthReportsQuery } from 'src/app/RMS/store/month-reports/month-reports.selectors';
import { selectItemsReportsDetails } from 'src/app/RMS/store/items-reports/items-reports.selectors';

@Component({
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  totMonthSales$: Observable<any>;
  totWeekSales$: Observable<any>;
  monthChart$: Observable<any>;
  weekChart$: Observable<any>;
  weekQueryChart$: Observable<any>;
  monthQueryChart$: Observable<any>;
  itemsDetails$: Observable<any>;

  monthColors: any[] = ['#4798e8', '#01c0c8'];

  lang: any = lang.ar

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.totMonthSales$ = this.store.pipe(select(selectTotalMonthSales));
    this.totWeekSales$ = this.store.pipe(select(selectTotalWeekSales));
    this.monthChart$ = this.store.pipe(select(selectTotalMonthChart));
    this.weekChart$ = this.store.pipe(select(selectTotalWeekChart));
    this.weekQueryChart$ = this.store.pipe(select(selectWeekReportsQuery));
    this.monthQueryChart$ = this.store.pipe(select(selectMonthReportsQuery));
    this.itemsDetails$ = this.store.pipe(select(selectItemsReportsDetails));
  }
}

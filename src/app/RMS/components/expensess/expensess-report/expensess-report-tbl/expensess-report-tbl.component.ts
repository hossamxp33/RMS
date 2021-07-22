import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ExpensessHelper } from '../../classes/expensess-helper';

@Component({
  selector: 'app-expensess-report-tbl',
  templateUrl: './expensess-report-tbl.component.html',
  styleUrls: ['./expensess-report-tbl.component.css']
})
export class ExpensessReportTblComponent implements OnInit, OnChanges {
  @Input('data') data: any[] = [];
  @Input('loading') loading: boolean = false;

  header: any[] = [
    '#',
    'القسم',
    'المنتج',
    'المصروفات',
    'اخر المدفوعات',
    'ديون',
  ];
  
  constructor(private helper: ExpensessHelper) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'data' : 
            this.data = this.helper.shapeExpensData(changes.data.currentValue);            
            break;
          case 'loading' : 
            this.loading = changes.loading.currentValue;
            break;
        }
      }
    }

  }  

}

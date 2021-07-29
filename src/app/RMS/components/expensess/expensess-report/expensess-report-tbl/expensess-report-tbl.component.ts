import { ExpensessService } from 'src/services/expensess/expensess.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ExpensessHelper } from '../../classes/expensess-helper';

@Component({
  selector: 'app-expensess-report-tbl',
  templateUrl: './expensess-report-tbl.component.html',
  styleUrls: ['./expensess-report-tbl.component.css']
})
export class ExpensessReportTblComponent implements OnInit, OnChanges {
  @Input('data') data: any[] = [];
  @Input('pages') pages: any = {};
  @Input('loading') loading: boolean = false;

  header: any[] = [
    '#',
    'القسم',    
    'المنتج',
    'قسم المصروفات',
    'المصروفات',
    'اخر المدفوعات',
    'ديون',
    'صورة',
    'التاريخ',
  ];
  
  constructor(private helper: ExpensessHelper, private service: ExpensessService) { }

  ngOnInit() {
  }

  async onPageChange(page) {
    this.loading = true;
    const data: any = await this.service.getExpensesReport(page).toPromise();
    this.data = this.helper.shapeExpensData(data.data)
    this.loading = false;
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
          case 'pages' : 
            this.pages = changes.pages.currentValue;
            break;
        }
      }
    }

  }  

}

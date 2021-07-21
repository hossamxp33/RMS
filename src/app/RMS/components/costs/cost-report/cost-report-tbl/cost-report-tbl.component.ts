import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CostHelper } from '../../classes/cost-helper';

@Component({
  selector: 'app-cost-report-tbl',
  templateUrl: './cost-report-tbl.component.html',
  styleUrls: ['./cost-report-tbl.component.css']
})
export class CostReportTblComponent implements OnInit, OnChanges {
  @Input('data') data: any[] = [];
  @Input('loading') loading: boolean = false;
  
  header: any[] = [ 
    'المكون',
    'تكلفة المستهلك',
    'القسم',
    'المستهلك',
    'الاستهلاك قبل الهالك',
    'مجموع التكلفة',
  ]; 

  totCost: any = 0;

  constructor(private helper: CostHelper) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'data' : 
            this.data = this.helper.costObject(changes.data.currentValue);
            this.totCost = this.data.map(val => val["totalCost"]).reduce((prev, next) => prev + next).toFixed(2)
            break;
          case 'loading' : 
            this.loading = changes.loading.currentValue;
            break;
        }
      }
    }

  }  

}

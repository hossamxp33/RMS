import { InvHelper } from './../../classes/inv-helper';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-inv-report-tbl',
  templateUrl: './inv-report-tbl.component.html',
  styleUrls: ['./inv-report-tbl.component.css']
})
export class InvReportTblComponent implements OnInit, OnChanges {
  @Input('data') data: any[] = [];
  @Input('loading') loading: boolean = false;

  header: any[] = [
    '#',
    'القسم',
    'المنتج',
    'السعر',
    'اجمالي الداخل (كمية)',
    'اجمالي المسحوب (كمية)',
    'اجمالي الداخل (نقدي)',
    'اجمالي المسحوب (نقدي)',
    'اجمالي المتبقي (كمية)',
    'اجمالي المتبقي (نقدي)',
  ];

  constructor(private helper: InvHelper) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'data' : 
            this.data = this.helper.shapeInvData(changes.data.currentValue);            
            break;
          case 'loading' : 
            this.loading = changes.loading.currentValue;
            break;
        }
      }
    }

  }

}

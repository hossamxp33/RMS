import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ItemsHelper } from '../../classes/items-helper';

@Component({
  selector: 'app-items-report-tbl',
  templateUrl: './items-report-tbl.component.html',
  styleUrls: ['./items-report-tbl.component.css']
})
export class ItemsReportTblComponent implements OnInit, OnChanges {
  @Input('data') data: any[] = [];
  
  header: any[] = [ 
    '#',
    'الطبق',
    'السعر',
    'صورة',
    'التاريج',
  ]; 

  constructor(private helper: ItemsHelper) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'data' : 
            this.data = this.helper.ItemsObject(changes.data.currentValue);            
            break;
        }
      }
    }

  }  

}

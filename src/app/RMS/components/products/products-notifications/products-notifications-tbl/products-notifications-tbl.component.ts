import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ProductsHelper } from '../../classes/products-helper';

@Component({
  selector: 'app-products-notifications-tbl',
  templateUrl: './products-notifications-tbl.component.html',
  styleUrls: ['./products-notifications-tbl.component.css']
})
export class ProductsNotificationsTblComponent implements OnInit, OnChanges {
  @Input('data') data: any[] = [];
  
  header: any[] = [ 
    '#',
    'المنتج',
    'السعر',
    'الوحدة',
    'sumdata',
    'المورد',
    'عنوان المورد',
    'رقم المورد',
    'التاريخ',
  ]; 

  constructor(private helper: ProductsHelper) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'data' : 
            this.data = this.helper.productsObject(changes.data.currentValue);            
            break;
        }
      }
    }

  }   

}

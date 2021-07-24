import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { OrdersService } from 'src/services/orders/orders.service';
import { OrdersHelper } from '../../classes/orders-helper';

@Component({
  selector: 'app-order-report-tbl',
  templateUrl: './order-report-tbl.component.html',
  styleUrls: ['./order-report-tbl.component.css']
})
export class OrderReportTblComponent implements OnInit, OnChanges {
  @Input('data') data: any[] = [];
  @Input('pages') pages: any = {};
  @Input('loading') loading: boolean = false;

  header: any[] = [
    '#',
    'تكلفة الطلب',
    'الخدمة',
    'الضريبة',
    'نوع الطلب',
    'منصة الطلب',
    'المسوقين',
    'حالة الطلب',
    'العنوان',
    'التاريخ',
  ];

  details: any = [];
  isVisible: boolean = false;
  
  popupHeader: any[] = [
    '#',
    'الطبق',
    'الكمية',
    'السعر',
    'التاريخ',
  ];    

  constructor(private helper: OrdersHelper, private service: OrdersService) { }

  ngOnInit() {
  }


  getOrderDetails(details: any[]) {    
    (details.length == 0) ? this.details = [] : this.details = this.helper.createDetails(details);
    this.isVisible = true;
  }  

  async onPageChange(page) {
    const formData = new FormData();
    formData.append(localStorage.getItem('lastFilter'), localStorage.getItem('lastFilterValue'));

    this.loading = true;
    const data: any = await this.service.getOrdersByFilter(formData, page).toPromise();
    this.data = this.helper.shapeOrderObject(data.data)
    this.loading = false;
  }  

  ngOnChanges(changes: SimpleChanges) {

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'data' : 
            this.data = this.helper.shapeOrderObject(changes.data.currentValue);
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

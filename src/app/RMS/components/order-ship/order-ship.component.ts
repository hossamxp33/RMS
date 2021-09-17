import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/services/orders/orders.service';

@Component({
  selector: 'app-order-ship',
  templateUrl: './order-ship.component.html',
  styleUrls: ['./order-ship.component.css']
})
export class OrderShipComponent implements OnInit {
  orders: any[] = [];
  loading: boolean = false;
  pages: any = {};
  constructor(private router: ActivatedRoute,private services: OrdersService) {


   }

  ngOnInit() {
   this.getdata()
  }
  async getdata(){

  const data: any = await  this.services.getCompanyShipOrders()
  console.log(data)
  this.orders = data.data;
  this.pages = data.pagination;
}
}

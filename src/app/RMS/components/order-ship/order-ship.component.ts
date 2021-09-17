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
  constructor(private router: ActivatedRoute,private services: OrdersService) { }

  ngOnInit() {
    alert('sd')
    this.router.data.subscribe(
      res => {
        this.orders = res.orders.data;
        this.pages = res.orders.pagination;
     
      }
    )
  }

}

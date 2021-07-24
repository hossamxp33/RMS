import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-notifications',
  templateUrl: './products-notifications.component.html',
  styleUrls: ['./products-notifications.component.css']
})
export class ProductsNotificationsComponent implements OnInit {
  products: any[] = [];

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.products = res.pro.data;
      }
    )
  }

}

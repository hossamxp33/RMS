import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderReportResolver } from '../orders/order-report/services/order-report.resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  providers: [
    OrderReportResolver,
]
})
export class OrderShipModule { }

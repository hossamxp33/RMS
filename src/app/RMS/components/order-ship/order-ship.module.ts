import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderShipRoutingModule } from './order-ship-routing.module';
import { OrdersHelper } from '../orders/classes/orders-helper';
import { OrderShipComponent } from './order-ship.component';
import { RouterModule } from '@angular/router';
import { OrderReportResolver } from '../orders/order-report/services/order-report.resolver';
import { OrderReportTblComponent } from '../orders/order-report/order-report-tbl/order-report-tbl.component';
import { SharedModule } from 'src/module/shared.module';
import { AdressPopupComponent } from '../orders/order-report/adress-popup/adress-popup.component';
import { AgmCoreModule } from '@agm/core';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    OrderShipComponent,
    OrderReportTblComponent,
    AdressPopupComponent,

],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild(OrderShipRoutingModule),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCjzzd4nbOiZJx3B53u9ZZAq0tcOsVUBdg' }),

  ]
  ,
    providers: [
        OrdersHelper,
        OrderReportResolver

    ]
})
export class OrderShipModule { }

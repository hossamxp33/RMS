import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderReportResolver } from '../orders/order-report/services/order-report.resolver';
import { OrderShipComponent } from './order-ship.component';



export const OrderShipRoutingModule: Routes = [ {
  path: '',
  children: [
      {
          path: 'all',
          component: OrderShipComponent,
          data: {
              title: 'منتجات اوشكت على الانتهاء',
          },                
          resolve: {
              orders: OrderReportResolver,
          }                
      }
  ]
}];
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { OrderShipComponent } from './RMS/components/order-ship/order-ship.component';
import { OrderReportResolver } from './RMS/components/orders/order-report/services/order-report.resolver';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/authentication/login', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'inv',
        loadChildren: () => import('./RMS/components/inventory/inventory.module').then(m => m.InventoryModule)
      },
      {
        path: 'cost',
        loadChildren: () => import('./RMS/components/costs/cost.module').then(m => m.CostsModule)
      },
      {
        path: 'expensess',
        loadChildren: () => import('./RMS/components/expensess/expensess.module').then(m => m.ExpensessModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./RMS/components/orders/order.module').then(m => m.OrdersModule)
      }
      ,
      {
        path: 'items',
        loadChildren: () => import('./RMS/components/items/items.module').then(m => m.ItemsModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./RMS/components/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'starter',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
      { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
      { path: 'forms', loadChildren: () => import('./form/forms.module').then(m => m.FormModule) },
      { path: 'tables', loadChildren: () => import('./table/tables.module').then(m => m.TablesModule) },
      { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartModule) },
      {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
      },
      { path: 'ecom', loadChildren: () => import('./ecommerce/ecom.module').then(m => m.EcomModule) },
      {
        path: 'timeline',
        loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
      },
      {
        path: 'extra-component',
        loadChildren:
          () => import('./extra-component/extra-component.module').then(m => m.ExtraComponentModule)
      },
      { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
      {
        path: 'apps/email',
        loadChildren: () => import('./apps/email/mail.module').then(m => m.MailModule)
      },
      { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
      {
        path: 'sample-pages',
        loadChildren: () => import('./sample-pages/sample-pages.module').then(m => m.SamplePagesModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      
   
      {
        path: 'authentication',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  
  
  {
    path: 'companyorder',
    loadChildren: () => import('./RMS/components/order-ship/order-ship.module').then(m => m.OrderShipModule)
  },
  {
    path: '**',
    redirectTo: '/authentication/404'
  }

];

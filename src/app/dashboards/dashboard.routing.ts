import { Routes } from '@angular/router';
import { ItemsReportsResolver } from '../authentication/login/services/items-reports.resolver';
import { MonthReportsResolver } from '../authentication/login/services/month-reports.resolver';
import { SalesReportsResolver } from '../authentication/login/services/sales-reports.resolver';
import { WeekReportsResolver } from '../authentication/login/services/week-reports.resolver';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'التقارير',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        },
        resolve: {
          SalesReports: SalesReportsResolver,
          ItemsReports: ItemsReportsResolver,
          MonthReports: MonthReportsResolver,
          WeekReports: WeekReportsResolver
        }        
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard 2',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 2' }
          ]
        }
      },
      {
        path: 'dashboard3',
        component: Dashboard3Component,
        data: {
          title: 'Dashboard 3',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 3' }
          ]
        }
      }
    ]
  }
];

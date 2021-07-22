import { Routes } from "@angular/router";
import { ItemsReportsResolver } from "src/app/authentication/login/services/items-reports.resolver";
import { ExpensessReportComponent } from "./expensess-report/expensess-report.component";
import { ExpensessReportResolver } from "./expensess-report/services/expensess-report.resolver";

export const ExpensessRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'reports',
                component: ExpensessReportComponent,
                data: {
                    title: 'تقرير المصروفات',
                },                
                resolve: {
                    expens: ExpensessReportResolver,
                    ItemsReports: ItemsReportsResolver,
                }                
            }
        ]
    }
]
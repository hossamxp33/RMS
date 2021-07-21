import { Routes } from "@angular/router";
import { ItemsReportsResolver } from "src/app/authentication/login/services/items-reports.resolver";
import { InvReportComponent } from "./inv-report/inv-report.component";
import { InvReportResolver } from "./inv-report/services/inv-report.resolver";

export const InvRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'reports',
                component: InvReportComponent,
                data: {
                    title: 'تقرير المخزون',
                },                
                resolve: {
                    inv: InvReportResolver,
                    ItemsReports: ItemsReportsResolver,
                }                
            }
        ]
    }
]
import { Routes } from "@angular/router";
import { ItemsReportComponent } from "./items-report/items-report.component";
import { ItemsReportResolver } from "./items-report/services/items-report.resolver";

export const ItemsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'not-having-recipy',
                component: ItemsReportComponent,
                data: {
                    title: 'اطباق غير مسجل بها مكونات و تكلفة',
                },                
                resolve: {
                    items: ItemsReportResolver,
                }                
            }
        ]
    }
]
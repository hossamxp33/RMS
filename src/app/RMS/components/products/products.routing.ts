import { Routes } from "@angular/router";
import { ProductsNotificationsComponent } from "./products-notifications/products-notifications.component";
import { ProductsNotificationsResolver } from "./products-notifications/services/products-notifications.resolver";

export const ProductsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'notifications',
                component: ProductsNotificationsComponent,
                data: {
                    title: 'منتجات اوشكت على الانتهاء',
                },                
                resolve: {
                    pro: ProductsNotificationsResolver,
                }                
            }
        ]
    }
]
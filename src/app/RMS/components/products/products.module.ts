import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsHelper } from './classes/products-helper';
import { ProductsNotificationsModule } from './products-notifications/products-notifications.module';
import { ProductsRoutes } from './products.routing';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(ProductsRoutes),
        ProductsNotificationsModule
    ],
    exports: [],
    providers: [
        ProductsHelper
    ]
})

export class ProductsModule {}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { ProductsNotificationsFilterComponent } from "./products-notifications-filter/products-notifications-filter.component";
import { ProductsNotificationsTblComponent } from "./products-notifications-tbl/products-notifications-tbl.component";
import { ProductsNotificationsComponent } from "./products-notifications.component";
import { ProductsNotificationsResolver } from "./services/products-notifications.resolver";

@NgModule({
    declarations: [
        ProductsNotificationsComponent,
        ProductsNotificationsTblComponent,
        ProductsNotificationsFilterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        ProductsNotificationsResolver,
    ]
})

export class ProductsNotificationsModule {}
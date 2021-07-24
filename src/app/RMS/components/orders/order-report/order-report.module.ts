import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { OrderReportFilterComponent } from "./order-report-filter/order-report-filter.component";
import { OrderReportTblComponent } from "./order-report-tbl/order-report-tbl.component";
import { OrderReportComponent } from "./order-report.component";
import { OrderReportResolver } from "./services/order-report.resolver";

@NgModule({
    declarations: [
        OrderReportComponent,
        OrderReportTblComponent,
        OrderReportFilterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        OrderReportResolver
    ]
})

export class OrderReportModule {}
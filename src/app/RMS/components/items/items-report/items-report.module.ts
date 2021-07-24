import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { ItemsReportFilterComponent } from "./items-report-filter/items-report-filter.component";
import { ItemsReportTblComponent } from "./items-report-tbl/items-report-tbl.component";
import { ItemsReportComponent } from "./items-report.component";
import { ItemsReportResolver } from "./services/items-report.resolver";

@NgModule({
    declarations: [
        ItemsReportComponent,
        ItemsReportTblComponent,
        ItemsReportFilterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        ItemsReportResolver,
    ]
})

export class ItemsReportModule {}
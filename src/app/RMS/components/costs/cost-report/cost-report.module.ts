import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { CostReportComponent } from "./cost-report.component";
import { CostReportTblComponent } from "./cost-report-tbl/cost-report-tbl.component";
import { CostReportResolver } from "./services/cost-report.resolver";

@NgModule({
    declarations: [
        CostReportComponent,
        CostReportTblComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        CostReportResolver
    ]
})

export class CostReportModule {}
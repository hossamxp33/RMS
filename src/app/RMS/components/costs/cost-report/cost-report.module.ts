import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { CostReportComponent } from "./cost-report.component";
import { CostReportTblComponent } from "./cost-report-tbl/cost-report-tbl.component";
import { CostReportResolver } from "./services/cost-report.resolver";
import { CostReportFilterComponent } from "./cost-report-filter/cost-report-filter.component";
import { ItemsReportsResolver } from "src/app/authentication/login/services/items-reports.resolver";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ItemsReportsEffect } from "src/app/RMS/store/items-reports/items-reports.effects";
import { ItemsReportsReducer } from "src/app/RMS/store/items-reports/reducers/items-reports.reducer";

@NgModule({
    declarations: [
        CostReportComponent,
        CostReportTblComponent,
        CostReportFilterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        EffectsModule.forFeature([ItemsReportsEffect]),
        StoreModule.forFeature('ItemsReports', ItemsReportsReducer), 
    ],
    providers: [
        CostReportResolver,
        ItemsReportsResolver
    ]
})

export class CostReportModule {}
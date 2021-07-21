import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ItemsReportsResolver } from "src/app/authentication/login/services/items-reports.resolver";
import { ItemsReportsEffect } from "src/app/RMS/store/items-reports/items-reports.effects";
import { ItemsReportsReducer } from "src/app/RMS/store/items-reports/reducers/items-reports.reducer";
import { SharedModule } from "src/module/shared.module";
import { InvReportFilterComponent } from "./inv-report-filter/inv-report-filter.component";
import { InvReportTblComponent } from "./inv-report-tbl/inv-report-tbl.component";
import { InvReportComponent } from "./inv-report.component";
import { InvReportResolver } from "./services/inv-report.resolver";

@NgModule({
    declarations: [
        InvReportComponent,
        InvReportTblComponent,
        InvReportFilterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        EffectsModule.forFeature([ItemsReportsEffect]),
        StoreModule.forFeature('ItemsReports', ItemsReportsReducer), 
    ],
    providers: [
        InvReportResolver,
        ItemsReportsResolver
    ]
})

export class InvReportsModule {}
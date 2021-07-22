import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ItemsReportsResolver } from "src/app/authentication/login/services/items-reports.resolver";
import { ItemsReportsEffect } from "src/app/RMS/store/items-reports/items-reports.effects";
import { ItemsReportsReducer } from "src/app/RMS/store/items-reports/reducers/items-reports.reducer";
import { SharedModule } from "src/module/shared.module";
import { ExpensessReportFilterComponent } from "./expensess-report-filter/expensess-report-filter.component";
import { ExpensessReportTblComponent } from "./expensess-report-tbl/expensess-report-tbl.component";
import { ExpensessReportComponent } from "./expensess-report.component";
import { ExpensessReportResolver } from "./services/expensess-report.resolver";

@NgModule({
    declarations: [
        ExpensessReportComponent,
        ExpensessReportTblComponent,
        ExpensessReportFilterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        EffectsModule.forFeature([ItemsReportsEffect]),
        StoreModule.forFeature('ItemsReports', ItemsReportsReducer), 
    ],
    providers: [
        ExpensessReportResolver,
        ItemsReportsResolver
    ]
})

export class ExpensessReportsModule {}
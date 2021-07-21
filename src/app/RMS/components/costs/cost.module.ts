import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CostRoutes } from './cost.routing';
import { CostReportModule } from './cost-report/cost-report.module';
import { CostHelper } from './classes/cost-helper';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(CostRoutes),
        CostReportModule
    ],
    exports: [],
    providers: [
        CostHelper
    ]
})

export class CostsModule {}
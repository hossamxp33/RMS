import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExpensessRoutes } from './expensess.routing';
import { ExpensessReportsModule } from './expensess-report/expensess-reports.module';
import { ExpensessHelper } from './classes/expensess-helper';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(ExpensessRoutes),
        ExpensessReportsModule
    ],
    exports: [],
    providers: [
        ExpensessHelper
    ]
})

export class ExpensessModule {}
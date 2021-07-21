import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InvRoutes } from './inventory.routing';
import { InvReportsModule } from './inv-report/inv-reports.module';
import { InvHelper } from './classes/inv-helper';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(InvRoutes),
        InvReportsModule
    ],
    exports: [],
    providers: [
        InvHelper
    ]
})

export class InventoryModule {}
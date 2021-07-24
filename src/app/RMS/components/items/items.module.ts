import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemsHelper } from './classes/items-helper';
import { ItemsReportModule } from './items-report/items-report.module';
import { ItemsRoutes } from './items.routing';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(ItemsRoutes),
        ItemsReportModule
    ],
    exports: [],
    providers: [
        ItemsHelper
    ]
})

export class ItemsModule {}
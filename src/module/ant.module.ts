import { NgModule } from "@angular/core";

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
    declarations: [],
    exports: [
        NzFormModule,
        NzInputModule,
        NzIconModule,
        NzTableModule,
        NzModalModule
    ],
    providers: [],
})

export class AntModule {}
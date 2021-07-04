import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BarChartComponent } from "src/app/RMS/components/shared/bar-chart/bar-chart.component";
import { InfoTblComponent } from "src/app/RMS/components/shared/info-tbl/info-tbl.component";
import { PopupDetailsComponent } from "src/app/RMS/components/shared/popup-details/popup-details.component";
import { StatsInfoComponent } from "src/app/RMS/components/shared/stats-info/stats-info.component";
import { AntModule } from "./ant.module";
import { MatModule } from "./mat.module";
import { PipesModule } from "./pipes.module";

@NgModule({
    declarations: [
        BarChartComponent,
        PopupDetailsComponent,
        StatsInfoComponent,
        InfoTblComponent
    ],
    imports: [
        CommonModule,  
        AntModule,
        PipesModule 
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        AntModule,
        MatModule,      
        BarChartComponent,
        PopupDetailsComponent,
        StatsInfoComponent,
        InfoTblComponent
    ],
})

export class SharedModule {}
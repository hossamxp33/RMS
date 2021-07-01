import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BarChartComponent } from "src/app/RMS/components/shared/bar-chart/bar-chart.component";
import { PopupDetailsComponent } from "src/app/RMS/components/shared/popup-details/popup-details.component";
import { AntModule } from "./ant.module";
import { MatModule } from "./mat.module";
import { PipesModule } from "./pipes.module";

@NgModule({
    declarations: [
        BarChartComponent,
        PopupDetailsComponent
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
        PopupDetailsComponent
    ],
})

export class SharedModule {}
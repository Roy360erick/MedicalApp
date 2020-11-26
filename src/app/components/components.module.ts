import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementalComponent } from './incremental/incremental.component';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementalComponent,
    DoughnutComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule
  ],
  exports:[
    IncrementalComponent,
    DoughnutComponent
  ]
})
export class ComponentsModule { }

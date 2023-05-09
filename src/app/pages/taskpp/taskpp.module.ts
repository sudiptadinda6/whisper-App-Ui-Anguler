import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule, routedComponents } from './taskpp-routing.modules';
import { DisplayComponent } from './display/display.component';
import { TaskupdateComponent } from './taskupdate/taskupdate.component';



@NgModule({
  declarations: [
   routedComponents,
   DisplayComponent,
   TaskupdateComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
  ]
})
export class TaskppModule { }

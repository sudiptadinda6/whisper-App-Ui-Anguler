import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
import { DisplayComponent } from './display/display.component';
import { TaskupdateComponent } from './taskupdate/taskupdate.component';



const routes: Routes = [{
  path: '',
  component:TaskComponent ,
  children: [
    {
      path: '',
      component: DisplayComponent,
    },
    {
      path: 'tree-grid',
      component: TaskupdateComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TaskComponent,DisplayComponent,TaskupdateComponent
];

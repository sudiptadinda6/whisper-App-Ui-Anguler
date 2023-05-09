import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
  NbStepperModule,
  NbToastrModule,
  NbTreeGridModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WhisperlangTransferComponent } from './whisperlang-transfer/whisperlang-transfer.component';
import { ShowdilogComponent } from './whisperlang-transfer/showdilog/showdilog.component';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    HttpClientModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbStepperModule,
    NbSpinnerModule,
    NbCheckboxModule,
    NbRadioModule,


    NbToastrModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    FileuploadComponent,
    WhisperlangTransferComponent,
    ShowdilogComponent,
  ],
})
export class TablesModule { }

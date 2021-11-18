import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialImportsModule } from './app-material-imports/app-material-imports.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialImportsModule
  ],
  exports: [
    ErrorDialogComponent
  ]
})
export class SharedModule { }

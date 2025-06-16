import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsPreviewComponent } from './components-preview/components-preview.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComponentsPreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DevModule { }

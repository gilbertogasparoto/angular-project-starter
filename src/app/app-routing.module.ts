import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsPreviewComponent } from './dev/components-preview/components-preview.component';

const routes: Routes = [
  { path: '', component: ComponentsPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { DevModule } from './dev/dev.module';
import { CoreModule } from './core/core.module';


// Módulos do Angular/Bibliotecas
const angularModules = [
  BrowserModule,
  AppRoutingModule,
];

// Módulos do Projeto
const applicationModules = [
  DevModule,
  SharedModule,
  CoreModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...angularModules,
    ...applicationModules,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

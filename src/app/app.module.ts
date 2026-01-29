import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { DevModule } from './dev/dev.module';
import { CoreModule } from './core/core.module';
import { provideNgxMask } from 'ngx-mask';
import { MainModule } from './features/main/main.module';
import { provideHttpClient } from '@angular/common/http';
import { budgetStatusMap } from './core/models/budget.model';
import { MAP_REGISTRY_TOKEN } from './core/tokens/map-registry.token';


// Módulos do Angular/Bibliotecas
const angularModules = [
  BrowserModule,
  AppRoutingModule,

];

// Módulos do Projeto
const applicationModules = [
  DevModule,
  SharedModule,
  CoreModule,
  MainModule
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
  providers: [provideHttpClient(), provideNgxMask(),
  {
    provide: MAP_REGISTRY_TOKEN,
    useValue: {
      budgetStatus: budgetStatusMap,
    },
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

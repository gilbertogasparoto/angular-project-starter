import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDefaultComponent } from './inputs/input-default/input-default.component';
import { CoreModule } from '../core/core.module';
import { InputPasswordComponent } from './inputs/input-password/input-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputBaseComponent } from './inputs/base/input-base.component';
import { InputCurrencyComponent } from './inputs/input-currency/input-currency.component';
import { ButtonDefaultComponent } from './buttons/button-default/button-default.component';
import { ButtonIconComponent } from './buttons/button-icon/button-icon.component';
import { InputSearchComponent } from './inputs/input-search/input-search.component';
import { ButtonTextComponent } from './buttons/button-text/button-text.component';



@NgModule({
  declarations: [
    InputDefaultComponent,
    InputPasswordComponent,
    InputCurrencyComponent,
    InputSearchComponent,
    ButtonDefaultComponent,
    ButtonIconComponent,
    ButtonTextComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [
    InputDefaultComponent,
    InputPasswordComponent,
    InputCurrencyComponent,
    InputSearchComponent,
    ButtonDefaultComponent,
    ButtonIconComponent,
    ButtonTextComponent
  ]
})
export class SharedModule { }

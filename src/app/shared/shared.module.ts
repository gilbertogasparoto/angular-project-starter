import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDefaultComponent } from './inputs/input-default/input-default.component';
import { CoreModule } from '../core/core.module';
import { InputPasswordComponent } from './inputs/input-password/input-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCurrencyComponent } from './inputs/input-currency/input-currency.component';
import { ButtonDefaultComponent } from './buttons/button-default/button-default.component';
import { ButtonIconComponent } from './buttons/button-icon/button-icon.component';
import { InputSearchComponent } from './inputs/input-search/input-search.component';
import { ButtonTextComponent } from './buttons/button-text/button-text.component';
import { NgxMaskDirective } from 'ngx-mask';
import { InputSelectComponent } from './inputs/input-select/input-select.component';
import { InputAutocompleteComponent } from './inputs/input-autocomplete/input-autocomplete.component';
import { ButtonBaseComponent } from './buttons/base/button-base.component';
import { SwitchComponent } from './form-elements/switch/switch.component';
import { FormCheckComponent } from './form-elements/form-check/form-check.component';
import { ImageUploaderComponent } from './archieve-upload/image-uploader/image-uploader.component';
import { FileUploaderComponent } from './archieve-upload/file-uploader/file-uploader.component';



@NgModule({
  declarations: [
    InputDefaultComponent,
    InputPasswordComponent,
    InputCurrencyComponent,
    InputSearchComponent,
    InputSelectComponent,
    InputAutocompleteComponent,
    ButtonBaseComponent,
    ButtonDefaultComponent,
    ButtonIconComponent,
    ButtonTextComponent,
    FormCheckComponent,
    SwitchComponent,
    ImageUploaderComponent,
    FileUploaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    CoreModule
  ],
  exports: [
    InputDefaultComponent,
    InputPasswordComponent,
    InputCurrencyComponent,
    InputSearchComponent,
    InputSelectComponent,
    InputAutocompleteComponent,
    ButtonDefaultComponent,
    ButtonIconComponent,
    ButtonTextComponent,
    FormCheckComponent,
    SwitchComponent,
    ImageUploaderComponent,
    FileUploaderComponent,
  ]
})
export class SharedModule { }

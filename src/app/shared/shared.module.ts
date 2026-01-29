import { NgModule } from '@angular/core';
import { ButtonBaseComponent } from './components/buttons/base/button-base.component';
import { ButtonDefaultComponent } from './components/buttons/button-default/button-default.component';
import { ButtonIconComponent } from './components/buttons/button-icon/button-icon.component';
import { ButtonTextComponent } from './components/buttons/button-text/button-text.component';
import { FormCheckComponent } from './components/form-elements/form-check/form-check.component';
import { SwitchComponent } from './components/form-elements/switch/switch.component';
import { ImageUploaderComponent } from './components/archieve-upload/image-uploader/image-uploader.component';
import { FileUploaderComponent } from './components/archieve-upload/file-uploader/file-uploader.component';
import { ImageEditorModalComponent } from './modals/image-editor-modal/image-editor-modal.component';
import { CardDeletableComponent } from './components/cards/card-deletable/card-deletable.component';
import { InputDefaultComponent } from './components/inputs/input-default/input-default.component';
import { InputPasswordComponent } from './components/inputs/input-password/input-password.component';
import { InputCurrencyComponent } from './components/inputs/input-currency/input-currency.component';
import { InputSearchComponent } from './components/inputs/input-search/input-search.component';
import { InputSelectComponent } from './components/inputs/input-select/input-select.component';
import { InputAutocompleteComponent } from './components/inputs/input-autocomplete/input-autocomplete.component';
import { TextPillsComponent } from './components/text-pills/text-pills.component';
import { SliderComponent } from './components/form-elements/slider/slider.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { CardCheckComponent } from './components/cards/card-check/card-check.component';
import { RadioButtonComponent } from './components/form-elements/radio-button/radio-button.component';
import { IconStepperComponent } from './components/icon-stepper/icon-stepper.component';
import { TagComponent } from './components/tag/tag.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';
import { DropdownOptionsComponent } from './components/dropdown-options/dropdown-options.component';
import { ProfileInitialsComponent } from './components/profile-initials/profile-initials.component';
import { PasswordRequirementsComponent } from './components/password-requirements/password-requirements.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistryMapPipe } from './pipes/registry-map.pipe';
import { CircularProgressComponent } from './components/circular-progress/circular-progress.component';


@NgModule({
  declarations: [
    ButtonBaseComponent,
    ButtonDefaultComponent,
    ButtonIconComponent,
    ButtonTextComponent,
    FormCheckComponent,
    SwitchComponent,
    ImageUploaderComponent,
    FileUploaderComponent,
    ImageEditorModalComponent,
    CardDeletableComponent,
    InputDefaultComponent,
    InputPasswordComponent,
    InputCurrencyComponent,
    InputSearchComponent,
    InputSelectComponent,
    InputAutocompleteComponent,
    TextPillsComponent,
    SliderComponent,
    ConfirmationModalComponent,
    CardCheckComponent,
    RadioButtonComponent,
    IconStepperComponent,
    TagComponent,
    LoaderComponent,
    ProgressBarComponent,
    TableComponent,
    PaginationComponent,
    EmptyDataComponent,
    DropdownOptionsComponent,
    ProfileInitialsComponent,
    PasswordRequirementsComponent,
    RegistryMapPipe,
    CircularProgressComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    ImageCropperComponent,
    CoreModule,
    RouterModule,
    NgbCarouselModule
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
    CardDeletableComponent,
    TextPillsComponent,
    SliderComponent,
    CardCheckComponent,
    RadioButtonComponent,
    IconStepperComponent,
    TagComponent,
    LoaderComponent,
    ProgressBarComponent,
    TableComponent,
    PaginationComponent,
    EmptyDataComponent,
    DropdownOptionsComponent,
    ProfileInitialsComponent,
    PasswordRequirementsComponent,
    RegistryMapPipe,
    CircularProgressComponent
  ],
})
export class SharedModule { }

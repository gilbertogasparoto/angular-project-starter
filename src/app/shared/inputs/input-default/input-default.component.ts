import { Component, forwardRef, Injector, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { ErrorHandlingService } from '../../../core/services/error-handling.service';
import { InputBaseComponent } from '../base/input-base.component';

@Component({
  selector: 'app-input-default',
  templateUrl: './input-default.component.html',
  styleUrl: '../base/input-base.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputDefaultComponent),
    multi: true
  }]
})
export class InputDefaultComponent extends InputBaseComponent {
  @Input() type: string = 'text';
}

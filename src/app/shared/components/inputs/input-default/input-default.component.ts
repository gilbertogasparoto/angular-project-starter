import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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

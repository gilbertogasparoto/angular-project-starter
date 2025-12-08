import { Component, forwardRef, Input } from '@angular/core';
import { InputBaseComponent } from '../base/input-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrl: '../base/input-base.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSelectComponent),
    multi: true
  }]
})
export class InputSelectComponent extends InputBaseComponent {
  @Input() options: { label: string; value: any }[] = [];
}

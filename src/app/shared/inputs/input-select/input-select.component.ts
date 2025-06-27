import { Component, Input } from '@angular/core';
import { InputBaseComponent } from '../base/input-base.component';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrl: '../base/input-base.component.scss',
})
export class InputSelectComponent extends InputBaseComponent {
  @Input() options: { label: string; value: any }[] = [];
}

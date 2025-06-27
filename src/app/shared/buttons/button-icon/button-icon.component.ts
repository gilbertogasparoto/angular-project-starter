import { Component, Input } from '@angular/core';
import { ButtonBaseComponent } from '../base/button-base.component';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss', '../base/button-base.component.scss']
})
export class ButtonIconComponent extends ButtonBaseComponent {
  @Input() override icon!: string;
}

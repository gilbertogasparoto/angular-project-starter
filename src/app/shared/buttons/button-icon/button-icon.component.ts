import { Component, Input } from '@angular/core';
import { BtnSize, BtnTheme } from '../buttons.types';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss'
})
export class ButtonIconComponent {
  @Input() icon!: string;
  @Input() type: string = 'button';
  @Input() theme: BtnTheme = 'primary';
  @Input() size: BtnSize = 'md';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
}

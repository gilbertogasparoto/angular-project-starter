import { Component, Input } from '@angular/core';
import { BtnTextStyle } from '../buttons.types';

@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.component.html',
  styleUrl: './button-text.component.scss'
})
export class ButtonTextComponent {
  @Input() theme: BtnTextStyle = 'neutral';
  @Input() icon?: string;
}

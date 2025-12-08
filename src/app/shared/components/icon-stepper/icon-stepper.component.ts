import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-stepper',
  templateUrl: './icon-stepper.component.html',
  styleUrl: './icon-stepper.component.scss'
})
export class IconStepperComponent {
  @Input() steps: string[] = [];
  @Input() active: number = 0;
  @Input() max: number = 0;

  @Output() selected: EventEmitter<number> = new EventEmitter<number>;

  getClass(i: number): string[] {
    if (this.active === this.steps.length - 1) return ['success'];

    return [
      this.active >= i ? 'active' : '',
      this.active === i ? 'current' : ''
    ].filter(Boolean);
  }
}

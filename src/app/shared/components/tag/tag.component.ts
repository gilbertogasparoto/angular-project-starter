import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorsService } from '../../../core/services/colors.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  @Input() color: string = 'primary';
  @Input() textColor: string = 'light';

  @Output() removed: EventEmitter<void> = new EventEmitter<void>()

  constructor(private colorsService: ColorsService) { }

  getStyles() {
    return {
      backgroundColor: this.colorsService.getColor(this.color),
      color: this.colorsService.getColor(this.textColor),
    };
  }
}

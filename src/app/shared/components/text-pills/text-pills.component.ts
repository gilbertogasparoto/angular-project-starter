import { Component, Input } from '@angular/core';
import { ColorsService } from '../../../core/services/colors.service';

@Component({
  selector: 'app-text-pills',
  templateUrl: './text-pills.component.html',
  styleUrl: './text-pills.component.scss'
})
export class TextPillsComponent {
  @Input() color: string = 'primary';
  @Input() circle: boolean = false;

  constructor(private colorsService: ColorsService) { }

  getClasses() {
    const classes = [];

    if (this.circle) {
      classes.push('circle-pill');
    } else {
      classes.push('pill');
    }

    return classes;
  }



  getStyles() {
    return {
      backgroundColor: this.addOpacity(this.colorsService.getColor(this.color), 0.1),
      color: this.colorsService.getColor(this.color)
    };
  }

  private addOpacity(color: string, opacity: number) {
    if (color.startsWith('#')) {
      let hex = color.replace('#', '');
      if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
      }
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    if (color.startsWith('rgb')) {
      return color.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
    }
    return color;
  }
}

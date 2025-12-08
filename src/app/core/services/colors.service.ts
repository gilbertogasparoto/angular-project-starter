import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  getColor(value: string): string {
    if (!value) return '';

    value = value.trim().toLowerCase();

    const cssValue = getComputedStyle(document.documentElement)
      .getPropertyValue(`--color-${value}`)
      .trim();

    if (cssValue) {
      return cssValue;
    }

    const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
    if (hexRegex.test(value)) {
      return value;
    }

    return 'transparent';
  }
}

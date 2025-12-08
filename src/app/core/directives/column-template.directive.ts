import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appTableCell]'
})
export class ColumnTemplateDirective {
    @Input('appTableCell') name!: string;
    constructor(public tpl: TemplateRef<any>) { }
}
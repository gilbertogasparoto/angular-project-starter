import { Component, ContentChildren, Input, QueryList, SimpleChanges, } from '@angular/core';
import { ColumnTemplateDirective } from '../../../core/directives/column-template.directive';
import { iTableColumn } from '../../../core/models/table.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() columns: iTableColumn[] = [];
  @Input() data: any[] = [];
  @Input() loading = false;
  @Input() pageSize: number = 1;

  loadingRows: any[] = [];

  @ContentChildren(ColumnTemplateDirective) columnTemplates!: QueryList<ColumnTemplateDirective>;
  private templateMap = new Map<string, any>();


  ngAfterContentInit(): void {
    this.refreshTemplateMap();
    this.columnTemplates.changes.subscribe(() => this.refreshTemplateMap());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pageSize']) this.buildLoadingRows();
    if (changes['loading'] && !changes['pageSize']) this.buildLoadingRows();
  }

  private buildLoadingRows() {
    this.loadingRows = Array.from({ length: Math.max(1, this.pageSize) });
  }

  private refreshTemplateMap() {
    this.templateMap.clear();
    this.columnTemplates.forEach(t => {
      if (t.name) {
        this.templateMap.set(t.name, t.tpl);
      }
    });
  }

  getTemplate(field?: string) {
    if (!field) return null;
    return this.templateMap.get(field) ?? null;
  }


  trackByRow = (index: number, item: any) => item?.id ?? index;
  trackByColumn = (index: number, col: iTableColumn) => col?.field ?? index;
}

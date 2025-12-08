import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_PAGE_SIZE } from '../../../core/models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() totalPages: number = 0;
  @Input() itemsPerPage: number = DEFAULT_PAGE_SIZE;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  visiblePages: number[] = [];
  startPage = 1;
  endPage = 1;

  ngOnChanges(): void {
    this.calculateVisiblePages();
  }

  calculateVisiblePages(): void {
    const maxPagesToShow = 4;
    let start = Math.max(1, this.currentPage - 2);
    let end = Math.min(this.totalPages, start + maxPagesToShow - 1);

    if (end - start < maxPagesToShow - 1) {
      start = Math.max(1, end - maxPagesToShow + 1);
    }

    this.startPage = start;
    this.endPage = end;
    this.visiblePages = [];

    for (let i = start; i <= end; i++) {
      this.visiblePages.push(i);
    }
  }

  goToPage(page: number): void {
    if (page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }
}

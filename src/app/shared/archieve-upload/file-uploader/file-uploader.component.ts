import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.scss'
})
export class FileUploaderComponent {
  @Input() acceptedTypes: string[] = [];
  @Input() maxSize?: number;
  @Output() fileSelected = new EventEmitter<File>();

  isDragging = false;
  selectedFile: File | null = null;

  mimeToExtensionMap: { [key: string]: string } = {
    'application/vnd.ms-excel': 'XLS',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
    'text/csv': 'CSV',
    'image/png': 'PNG',
    'image/jpeg': 'JPG',
    'application/pdf': 'PDF',
  }

  mimeToIconsMap: { [key: string]: string } = {
    'application/vnd.ms-excel': 'bi bi-filetype-xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'bi bi-filetype-xlsx',
    'text/csv': 'bi bi-filetype-csv',
    'image/png': 'bi bi-filetype-png',
    'image/jpeg': 'bi bi-filetype-jpg',
    'application/pdf': 'bi bi-filetype-pdf',
  }

  get acceptedTypesText(): string {
    if (!this.acceptedTypes?.length) return '';

    const extensions = this.acceptedTypes.map(type =>
      this.mimeToExtensionMap[type] || type
    );

    return `${extensions.join(', ')}`;
  }

  get archiveMaxSize(): string {
    if (!this.maxSize) return '';

    const size_mb = this.maxSize / 1000000;
    const size_kb = this.maxSize / 1000;

    if (size_mb >= 1) {
      return size_mb.toFixed(2) + ' MB';
    }

    if (size_kb >= 1) {
      return size_kb.toFixed(2) + ' KB';
    }

    return this.maxSize + ' bytes'
  }


  isAcceptedFileType(file: File): boolean {
    return this.acceptedTypes.length === 0 || this.acceptedTypes.includes(file.type);
  }

  getFileIcon(type: string): string {
    return this.mimeToIconsMap[type]
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer && event.dataTransfer.files.length) {
      const file = event.dataTransfer.files[0];
      this.uploadFile(file)
    }
  }

  selectFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = this.acceptedTypes.join(',');

    if (this.maxSize) {
      input.maxLength = this.maxSize;
    }

    input.onchange = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];

      if (file) {
        this.uploadFile(file)
      }
    };

    input.click();
  }

  uploadFile(file: File) {
    if (this.isAcceptedFileType(file)) {
      console.log(file)
      this.selectedFile = file;
      this.fileSelected.emit(file);
    }
  }
}

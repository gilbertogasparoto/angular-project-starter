import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss'
})
export class ImageUploaderComponent {
  @Input() selectedFile: string | ArrayBuffer | null | undefined = null;
  @Input() aspectRatio?: '1:1' | '4:3' | '21:9';

  @Output() onupload: EventEmitter<any> = new EventEmitter<string | ArrayBuffer | null | undefined>();

  isDragging = false;

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
      if (file) {
        this.uploadFile(file)
      }
    }
  }

  get aspectRatioValue(): number | undefined {
    if (!this.aspectRatio) return;

    const [w, h] = this.aspectRatio.split(':').map(Number);
    return w / h;
  }

  uploadFile(file: File): void {
    const validTypes = ['image/jpeg', 'image/png'];

    if (!validTypes.includes(file.type)) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const image = reader.result as string;
      // this.openEditorModal(image)
    };
    reader.readAsDataURL(file);
  }

  selectFile(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/jpeg, image/png';

    input.onchange = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];

      if (file) {
        this.uploadFile(file)
      }
    };

    input.click();
  }

  // openEditorModal(image: string): void {
  //   const modal_ref = this.modalService.open(ImageEditorModalComponent, { size: 'lg', centered: true });
  //   modal_ref.componentInstance.image = image;
  //   modal_ref.componentInstance.aspectRatio = this.aspectRatio ? this.aspectRatioValue : undefined;

  //   modal_ref.componentInstance.edited.subscribe((image: string) => {
  //     this.onupload.emit(image);
  //     modal_ref.close();
  //   });

  //   modal_ref.componentInstance.cancel.subscribe(() => {
  //     modal_ref.close();
  //   });
  // }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';
import { ImageEditorModalComponent } from '../../modals/image-editor-modal/image-editor-modal.component';
import { ImageService } from '../../../core/services/image.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss'
})
export class ImageUploaderComponent {
  @Input() selectedFile: string | ArrayBuffer | null = null;
  @Input() aspectRatio?: '1:1' | '4:3' | '21:9';
  @Input() maxImages: number = 1;

  @Output() upload: EventEmitter<any> = new EventEmitter<string | ArrayBuffer | null>();

  isDragging = false;

  constructor(private modalService: ModalService, private imageService: ImageService) { }

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

    if (!validTypes.includes(file.type)) return;

    this.imageService.fileToBase64(file).then((imageBase64) => {
      const image = imageBase64;
      this.openEditorModal(image);
    });
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

  removeImage(): void {
    this.selectedFile = null;
  }

  openEditorModal(image: string): void {
    const modal_ref = this.modalService.open(ImageEditorModalComponent, 'lg', { centered: true });
    modal_ref.componentInstance.image = image;
    modal_ref.componentInstance.aspectRatio = this.aspectRatio ? this.aspectRatioValue : undefined;

    modal_ref.componentInstance.edited.subscribe((image: string) => {
      this.selectedFile = image;
      this.upload.emit(image);
      modal_ref.close();
    });

    modal_ref.componentInstance.cancel.subscribe(() => {
      modal_ref.close();
    });
  }
}

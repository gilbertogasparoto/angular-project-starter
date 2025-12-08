import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileService } from '../../../../core/services/file.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss'
})
export class ImageUploaderComponent {
  @Input() selectedFile: string | ArrayBuffer | null = null;
  @Input() aspectRatio?: '1:1' | '4:3' | '21:9';
  @Input() maxImages: number = 1;
  @Input() allowedImages: string[] = ['image/jpeg', 'image/png']

  @Output() upload: EventEmitter<any> = new EventEmitter<string | ArrayBuffer | null>();

  isDragging = false;

  constructor(private fileService: FileService) { }

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
        this.fileService.uploadFile(file, this.allowedImages)
      }
    }
  }

  get aspectRatioValue(): number | undefined {
    if (!this.aspectRatio) return;

    const [w, h] = this.aspectRatio.split(':').map(Number);
    return w / h;
  }

  async handleUpload() {
    const editedImage = await this.fileService.uploadAndEdit(this.allowedImages, 1);
    if (editedImage) {
      this.selectedFile = editedImage;
    }
  }

  removeImage() {
    this.selectedFile = null;
  }
}

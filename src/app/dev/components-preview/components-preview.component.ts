import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-components-preview',
  templateUrl: './components-preview.component.html',
  styleUrl: './components-preview.component.scss'
})
export class ComponentsPreviewComponent {
  formTest!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formTest = this.fb.group({
      default: ['', [Validators.required]],
      password: ['', [Validators.required]],
      currency: 0,
    })
  }

  submit(): void {
    console.log(this.formTest.value)
  }

  click(): void {
    console.log('teste')
  }

  search(term: string): void {
    console.log(term)
  }
}

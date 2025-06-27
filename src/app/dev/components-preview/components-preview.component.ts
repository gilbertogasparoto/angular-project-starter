import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-components-preview',
  templateUrl: './components-preview.component.html',
  styleUrl: './components-preview.component.scss'
})
export class ComponentsPreviewComponent implements OnInit {
  formDefaultField!: FormGroup;
  formPasswordField!: FormGroup;
  formCurrencyField!: FormGroup;
  formSearchField!: FormGroup;
  formSelectField!: FormGroup;
  formAutocompleteField!: FormGroup;
  formDatePickerField!: FormGroup;

  selectOptions = [{ label: '', value: '' }, { label: 'Opção 1', value: '1' }, { label: 'Opção 2', value: '2' }, { label: 'Opção 3', value: '3' },]

  constructor(private fb: FormBuilder) {
    this.formDefaultField = this.fb.group({
      default: '',
      icon: '',
      typing: 'Campo preenchido',
      invalid: ['', Validators.required],
      disabled: [{ value: '', disabled: true }],
    })

    this.formPasswordField = this.fb.group({
      default: '',
      icon: '',
      typing: 'Campo preenchido',
      invalid: ['', [Validators.required, Validators.minLength(8)]],
      disabled: [{ value: '', disabled: true }],
    })

    this.formCurrencyField = this.fb.group({
      default: 0,
      icon: 0,
      typing: 2000,
      invalid: [0, [Validators.min(100)]],
      disabled: [{ value: 0, disabled: true }],
    })

    this.formSearchField = this.fb.group({
      default: '',
      icon: '',
      typing: 'Pesquisa',
      invalid: ['', [Validators.required]],
      disabled: [{ value: '', disabled: true }],
    })

    this.formSelectField = this.fb.group({
      default: '',
      icon: '',
      selected: '1',
      invalid: ['', Validators.required],
      disabled: [{ value: '', disabled: true }],
    })

    this.formAutocompleteField = this.fb.group({
      default: '',
      icon: '',
      selected: 'Primeira Opção',
      invalid: ['', Validators.required],
      disabled: [{ value: '', disabled: true }],
    })

    this.formDatePickerField = this.fb.group({
      default: '',
      icon: '',
      typing: '29/08/1997',
      invalid: ['', Validators.required],
      disabled: [{ value: '', disabled: true }],
    })
  }

  ngOnInit(): void {
    this.formDefaultField.get('invalid')?.markAsTouched();
    this.formPasswordField.get('invalid')?.markAsTouched();
    this.formCurrencyField.get('invalid')?.markAsTouched();
    this.formSearchField.get('invalid')?.markAsTouched();
    this.formSelectField.get('invalid')?.markAsTouched();
    this.formAutocompleteField.get('invalid')?.markAsTouched();
    this.formDatePickerField.get('invalid')?.markAsTouched();
  }

  submit(): void {
    console.log(this.formDefaultField.value)
  }

  click(): void {
    console.log('teste')
  }

  search(term: string): void {
    console.log(term)
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStepperComponent } from './icon-stepper.component';

describe('IconStepperComponent', () => {
  let component: IconStepperComponent;
  let fixture: ComponentFixture<IconStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

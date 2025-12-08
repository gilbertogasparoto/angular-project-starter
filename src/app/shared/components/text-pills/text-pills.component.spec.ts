import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPillsComponent } from './text-pills.component';

describe('TextPillsComponent', () => {
  let component: TextPillsComponent;
  let fixture: ComponentFixture<TextPillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextPillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

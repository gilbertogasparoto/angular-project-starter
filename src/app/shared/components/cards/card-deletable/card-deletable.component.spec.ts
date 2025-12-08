import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeletableComponent } from './card-deletable.component';

describe('CardDeletableComponent', () => {
  let component: CardDeletableComponent;
  let fixture: ComponentFixture<CardDeletableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDeletableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDeletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

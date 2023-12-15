import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceElementComponent } from './seance-element.component';

describe('SeanceElementComponent', () => {
  let component: SeanceElementComponent;
  let fixture: ComponentFixture<SeanceElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeanceElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeanceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

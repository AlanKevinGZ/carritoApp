import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarudrComponent } from './agregarudr.component';

describe('AgregarudrComponent', () => {
  let component: AgregarudrComponent;
  let fixture: ComponentFixture<AgregarudrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarudrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarudrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

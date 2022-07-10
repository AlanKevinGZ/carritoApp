import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarrolComponent } from './agregarrol.component';

describe('AgregarrolComponent', () => {
  let component: AgregarrolComponent;
  let fixture: ComponentFixture<AgregarrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

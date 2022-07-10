import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregardireccionComponent } from './agregardireccion.component';

describe('AgregardireccionComponent', () => {
  let component: AgregardireccionComponent;
  let fixture: ComponentFixture<AgregardireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregardireccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregardireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

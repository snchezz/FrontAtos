import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTemasComponent } from './agregar-temas.component';

describe('AgregarTemasComponent', () => {
  let component: AgregarTemasComponent;
  let fixture: ComponentFixture<AgregarTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

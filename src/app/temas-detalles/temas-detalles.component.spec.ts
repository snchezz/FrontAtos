import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasDetallesComponent } from './temas-detalles.component';

describe('TemasDetallesComponent', () => {
  let component: TemasDetallesComponent;
  let fixture: ComponentFixture<TemasDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

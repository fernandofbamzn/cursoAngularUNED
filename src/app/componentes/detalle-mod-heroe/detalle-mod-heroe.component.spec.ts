import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleModHeroeComponent } from './detalle-mod-heroe.component';

describe('DetalleModHeroeComponent', () => {
  let component: DetalleModHeroeComponent;
  let fixture: ComponentFixture<DetalleModHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleModHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleModHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroHeroeComponent } from './maestro-heroe.component';

describe('MaestroHeroeComponent', () => {
  let component: MaestroHeroeComponent;
  let fixture: ComponentFixture<MaestroHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

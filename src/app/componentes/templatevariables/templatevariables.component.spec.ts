import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevariablesComponent } from './templatevariables.component';

describe('TemplatevariablesComponent', () => {
  let component: TemplatevariablesComponent;
  let fixture: ComponentFixture<TemplatevariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatevariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatevariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

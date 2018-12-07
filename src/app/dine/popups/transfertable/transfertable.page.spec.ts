import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertablePage } from './transfertable.page';

describe('TransfertablePage', () => {
  let component: TransfertablePage;
  let fixture: ComponentFixture<TransfertablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfertablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

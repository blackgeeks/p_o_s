import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinePage } from './dine.page';

describe('DinePage', () => {
  let component: DinePage;
  let fixture: ComponentFixture<DinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

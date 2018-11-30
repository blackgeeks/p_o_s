import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupopverPage } from './menupopver.page';

describe('MenupopverPage', () => {
  let component: MenupopverPage;
  let fixture: ComponentFixture<MenupopverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenupopverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenupopverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

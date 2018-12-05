import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementpopoverPage } from './settlementpopover.page';

describe('SettlementpopoverPage', () => {
  let component: SettlementpopoverPage;
  let fixture: ComponentFixture<SettlementpopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementpopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementpopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

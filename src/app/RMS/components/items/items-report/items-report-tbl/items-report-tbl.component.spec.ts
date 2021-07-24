import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsReportTblComponent } from './items-report-tbl.component';

describe('ItemsReportTblComponent', () => {
  let component: ItemsReportTblComponent;
  let fixture: ComponentFixture<ItemsReportTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsReportTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsReportTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

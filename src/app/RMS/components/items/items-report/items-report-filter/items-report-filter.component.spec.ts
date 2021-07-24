import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsReportFilterComponent } from './items-report-filter.component';

describe('ItemsReportFilterComponent', () => {
  let component: ItemsReportFilterComponent;
  let fixture: ComponentFixture<ItemsReportFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsReportFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

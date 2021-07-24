import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNotificationsFilterComponent } from './products-notifications-filter.component';

describe('ProductsNotificationsFilterComponent', () => {
  let component: ProductsNotificationsFilterComponent;
  let fixture: ComponentFixture<ProductsNotificationsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNotificationsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNotificationsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNotificationsTblComponent } from './products-notifications-tbl.component';

describe('ProductsNotificationsTblComponent', () => {
  let component: ProductsNotificationsTblComponent;
  let fixture: ComponentFixture<ProductsNotificationsTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNotificationsTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNotificationsTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

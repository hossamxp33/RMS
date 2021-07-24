import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNotificationsComponent } from './products-notifications.component';

describe('ProductsNotificationsComponent', () => {
  let component: ProductsNotificationsComponent;
  let fixture: ComponentFixture<ProductsNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

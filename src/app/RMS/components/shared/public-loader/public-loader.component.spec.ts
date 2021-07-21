import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLoaderComponent } from './public-loader.component';

describe('PublicLoaderComponent', () => {
  let component: PublicLoaderComponent;
  let fixture: ComponentFixture<PublicLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionHomepageComponent } from './product-selection-homepage.component';

describe('ProductSelectionHomepageComponent', () => {
  let component: ProductSelectionHomepageComponent;
  let fixture: ComponentFixture<ProductSelectionHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectionHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSelectionHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

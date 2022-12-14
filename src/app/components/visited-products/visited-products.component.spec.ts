import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedProductsComponent } from './visited-products.component';

describe('VisitedProductsComponent', () => {
  let component: VisitedProductsComponent;
  let fixture: ComponentFixture<VisitedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

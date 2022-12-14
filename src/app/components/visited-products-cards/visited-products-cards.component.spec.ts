import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedProductsCardsComponent } from './visited-products-cards.component';

describe('VisitedProductsCardsComponent', () => {
  let component: VisitedProductsCardsComponent;
  let fixture: ComponentFixture<VisitedProductsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedProductsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitedProductsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

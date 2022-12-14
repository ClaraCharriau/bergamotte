import { Component } from '@angular/core';
import { Product } from 'src/app/mocks/product-card.mocks';
import { THREEPRODUCTS } from 'src/app/mocks/three-product-card.mocks';

@Component({
  selector: 'app-visited-products-cards',
  templateUrl: './visited-products-cards.component.html',
  styleUrls: ['./visited-products-cards.component.css']
})
export class VisitedProductsCardsComponent {
  products: Product[]= THREEPRODUCTS;
}

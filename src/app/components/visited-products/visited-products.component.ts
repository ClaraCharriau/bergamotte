import { Component } from '@angular/core';
import { Product } from 'src/app/mocks/product-card.mocks';
import { VISITEDPRODUCTS } from 'src/app/mocks/visited-product-card.mocks.';

@Component({
  selector: 'app-visited-products',
  templateUrl: './visited-products.component.html',
  styleUrls: ['./visited-products.component.css']
})
export class VisitedProductsComponent {
  products: Product[]= VISITEDPRODUCTS;
}

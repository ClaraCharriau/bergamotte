import { Component } from '@angular/core';
import { Product, THREEPRODUCTS } from 'src/app/mocks/three-product-card.mocks';

@Component({
  selector: 'app-three-products',
  templateUrl: './three-products.component.html',
  styleUrls: ['./three-products.component.css']
})
export class ThreeProductsComponent {
  products: Product[]= THREEPRODUCTS;
}

import { Component } from '@angular/core';
import { Product, PRODUCTS } from 'src/app/mocks/product-card.mocks';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  categoryTitle: string = "Plante d'intérieur";
  products: Product[] = PRODUCTS;
}

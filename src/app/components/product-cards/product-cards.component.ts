import { Component, Input } from '@angular/core';
import { Product } from 'src/app/mocks/product-card.mocks';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent {
  @Input() product!: Product;
}

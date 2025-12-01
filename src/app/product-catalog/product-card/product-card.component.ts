import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product-service';


@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})

export class ProductCard {

  @Input() product!: Product;

  constructor(private productService: ProductService) {}

  addToCart(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.productService.addToCart(this.product.id)
  }

}

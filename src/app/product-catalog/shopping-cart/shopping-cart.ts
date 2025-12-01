import { Component } from '@angular/core';
import { ProductService } from '../product-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartItem } from '../product.model';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {

  cartItems$: Observable<CartItem[]>;

  constructor(private productService: ProductService) {
    // get the observabkle
    this.cartItems$ = this.productService.getCartItems();
  }

  removeItem(id: number) {
   this.productService.removeFromCart(id)
  }

  getTotal(): number {
    return this.productService.getCartTotal();
  }

  

  

}

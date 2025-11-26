import { Injectable } from '@angular/core';
import { Product, CartItem } from './product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  // only the service can call .next() to update the the cart
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  // other components can subscribe here to get the cart items
  cart$ = this.cartSubject.asObservable();

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product 1 description',
      price: 100,
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Product 2 description',
      price: 200,
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: new Date(),
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Product 3 description',
      price: 300,
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: new Date(),
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Product 4 description',
      price: 400,
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: new Date(),
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Product 5 description',
      price: 500,
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: new Date(),
    },
  ];

  addToCart(id: number) {
    const cartValue = this.cartSubject.value;

    const existingItem = cartValue.find((item) => {
      return id === item.product.id;
    });

    const product = this.products.find((p) => p.id === id);

    if (!product) {
      console.log('no product has been found');
      return;
    }

    if (existingItem == undefined) {
      const newCartItem: CartItem = {
        product: product,
        quantity: 1,
      };

      const updatedCart = [...cartValue, newCartItem];

      this.cartSubject.next(updatedCart);
    } else {
      const updatedCart = cartValue.map((items) => {
        if (items.product.id === id) {
          return {
            ...items,
            quantity: items.quantity + 1,
          };
        }
        return items;
      });
      this.cartSubject.next(updatedCart);
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cart$
  }

  removeFromCart(productId: number)  {
    const cartValue = this.cartSubject.value;
    const newCart = cartValue.filter((item) => item.product.id !== productId)
    this.cartSubject.next(newCart)
  }

  getCartTotal() {
    const cartValue = this.cartSubject.value
    let total = 0

    for (const item of cartValue) {
      total += item.product.price * item.quantity
    }

    return total;
  }


}

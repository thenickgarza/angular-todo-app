import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from '../product.model';
import { ProductCard } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products: Product[] = []

  constructor(private ProductService: ProductService) {}


  ngOnInit() {
    this.products = this.ProductService.getProducts();
  }
  
  }



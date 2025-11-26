import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product-service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})

export class ProductDetail implements OnInit{

  product: Product | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.product = this.productService.getSingleProduct(Number(productId))
    }
  }
  
}

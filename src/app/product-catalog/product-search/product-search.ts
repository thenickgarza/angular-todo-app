import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, filter, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '../product-service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-search',
  imports: [ReactiveFormsModule],
  templateUrl: './product-search.html',
  styleUrl: './product-search.css',
})
export class ProductSearch {

searchControl = new FormControl('');
products: Product[] = [];

constructor(private productService: ProductService) {}

getProducts(){
  this.products = this.productService.getProducts();
}



ngOnInit() {
  this.searchControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    filter(query => query ? query.length >= 2 : false),
    switchMap(query => this.productService.getProducts()),
    catchError(error => {
      console.log('Error:', error)
      return of({ products: []})
    })
  ).subscribe(data => {
    console.log(data);
    // this.products = data.;
  })
}

}

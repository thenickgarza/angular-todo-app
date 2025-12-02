import { Component, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
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
constructor(private productService: ProductService, private cd: ChangeDetectorRef) {}

getProducts(){
  return this.productService.getProducts();
}

ngOnInit() {
  this.searchControl.valueChanges.pipe(
    debounceTime(100),
  ).subscribe(query => {
    if (query){
      this.products = this.getProducts().filter(product => product.name.toLowerCase().includes(query!.toLowerCase()));
    }
    else {
      this.products = [];
    }
    console.log(this.products);
    this.cd.detectChanges();
  })
}

}

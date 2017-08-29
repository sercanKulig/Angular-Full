import {Component, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct().subscribe(
      p => {
        this.products = p
      }
    );
  }

}

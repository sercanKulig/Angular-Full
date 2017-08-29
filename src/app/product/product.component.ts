import {Component, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';
import {NotificationsService} from 'angular2-notifications/dist';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService,
              private notification: NotificationsService) {
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

  addToCart(product: Product) {
    this.notification.success('Successfull', product.productName + ' added to cart');
  }

}

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './product';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: Http) {
  }

  getProduct(): Observable<Product[]> {
    return this.http.get('http://northwindapi.azurewebsites.net/api/products')
      .map(response => response.json());
  }

}

import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './product';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl) {
  }

  getProduct(): Observable<Product[]> {
    return this.http.get(this.apiUrl + '/products')
      .map(response => response.json());
  }

}

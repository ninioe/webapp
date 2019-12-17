import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:52033/api/product/';

  constructor(private httpClient: HttpClient) { }

  public addProduct(product: Product) {
    return this.httpClient.post(this.url + 'add', product);
  }

  public listProducts() {
    return this.httpClient.get(this.url + 'list');
  }

  public updateProduct(product: Product) {
    return this.httpClient.put(this.url + 'update', product);
  }
}

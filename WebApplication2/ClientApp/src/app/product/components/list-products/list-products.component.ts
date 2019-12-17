import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public products: Product[] = [];

  ngOnInit() {
    let that = this;

    this.productService.listProducts().subscribe(res => {
        //alert(JSON.stringify(res));
        that.products = res;
    }, reason => {
        alert(JSON.stringify(reason));
    });
  }

}

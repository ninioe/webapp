import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public model: Product = new Product();
}

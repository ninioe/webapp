import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  public model: Product = new Product();

  formSubmit() {
    this.productService.addProduct(this.model).subscribe(res => alert(JSON.stringify(res)));
    //console.log(this.model);
    this.model = new Product();
  }
  products = new FormGroup({
    name: new FormControl(''),
    qty: new FormControl('')
  });
}

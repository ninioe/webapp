import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
//import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddProductComponent, UpdateProductComponent, ListProductsComponent]
})
export class ProductModule { }

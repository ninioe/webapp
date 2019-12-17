import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const Route: Routes = [
  { path: 'product', component: AddProductComponent, pathMatch: 'full' },
  { path: 'product/add', component: AddProductComponent },
  { path: 'product/list', component: ListProductsComponent },
  { path: 'product/update', component: UpdateProductComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(Route)],
  exports: [RouterModule]
})

export class ProductRoutingModule {}

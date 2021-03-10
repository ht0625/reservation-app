import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "detail", component: ProductDetailComponent },
  // { path: "products/:productId", component: ProductDetailComponent },
  // { path: "cart", component: CartComponent },
  // { path: "shipping", component: ShippingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  // { path: "", component: ProductListComponent },
  // { path: "detail", component: ProductDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

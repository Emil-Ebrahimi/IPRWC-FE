import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component";
import {ShopComponent} from "./shop/shop.component";
import {ProductComponent} from "./product/product.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {EditSingleProductComponent} from "./edit-single-product/edit-single-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {EditUsersComponent} from "./edit-users/edit-users.component";
import {EditCategoriesComponent} from "./edit-categories/edit-categories.component";
import {AddCategoriesComponent} from "./add-categories/add-categories.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/signup', component: SignupComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'product/:id', component: ProductComponent},
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'admin/edit-products', component: EditProductComponent},
  { path: 'admin/edit/product/:id', component: EditSingleProductComponent},
  { path: 'admin/add-product', component: AddProductComponent},
  { path: 'admin/edit-users', component: EditUsersComponent},
  { path: 'admin/edit-categories', component: EditCategoriesComponent},
  { path: 'admin/add-category', component: AddCategoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

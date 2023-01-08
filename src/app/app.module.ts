import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthInterceptorService} from "./auth-interceptor.service";
import { EditSingleProductComponent } from './edit-single-product/edit-single-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    ShoppingCartComponent,
    AdminDashboardComponent,
    EditProductComponent,
    EditSingleProductComponent,
    AddProductComponent,
    EditUsersComponent,
    EditCategoriesComponent,
    AddCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

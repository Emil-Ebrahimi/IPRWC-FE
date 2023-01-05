import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

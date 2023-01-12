import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Product} from "./models/product.model";
import {Category} from "./models/category.model";
import {PromoCode} from "./models/promoCode.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  editProduct(id: String, name:String, price:Number, stock:Number, category:Category, shortDescription:String, description: String) {
    return this.http.patch<HttpResponse<any>>('/api/v1/products/' + id, {id, name, price, stock, category, shortDescription, description})
  }

  editCategory(id: String, name:String) {
    return this.http.patch<HttpResponse<any>>('/api/v1/categories/' + id, {id, name})
  }

  editPromoCode(id: String, name:String, korting:Number) {
    return this.http.patch<HttpResponse<any>>('/api/v1/promocodes/' + id, {id, name, korting})
  }

  createProduct(name:String, price:Number, stock:Number, category:Category, shortDescription:String, description: String) {
    return this.http.post<Product>('/api/v1/products', {name, price, stock, category, shortDescription, description})
  }

  createCategory(name:String) {
    return this.http.post<Category>('/api/v1/categories', {name})
  }

  createPromoCode(name:String, korting:Number) {
    return this.http.post<PromoCode>('/api/v1/promocodes', {name, korting})
  }
}

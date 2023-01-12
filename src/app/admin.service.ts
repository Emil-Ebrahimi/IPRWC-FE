import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Product} from "./models/product.model";
import {Category} from "./models/category.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  editProduct(id: String, name:String, price:Number, stock:Number, category:Category, shortDescription:String, description: String) {
    return this.http.patch<HttpResponse<any>>('/api/v1/products/' + id, {id, name, price, stock, category, shortDescription, description})
  }

  createProduct(name:String, price:Number, stock:Number, category:Category, shortDescription:String, description: String) {
    return this.http.post<Product>('/api/v1/products', {name, price, stock, category, shortDescription, description})
  }

  createCategory(name:String) {
    return this.http.post<Category>('/api/v1/categories', {name})
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private http: HttpClient) { }
  products: Product[]=[];
  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.http.get<Product[]>('/api/v1/products').pipe()
      .subscribe(product => {
          this.products = product
        }
      )
  }
}
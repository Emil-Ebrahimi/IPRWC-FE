import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product.model";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

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

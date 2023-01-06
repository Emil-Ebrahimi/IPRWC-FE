import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product.model";
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

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

  removeProduct(productID : number) {
    return this.http.delete('api/v1/products/' + productID)

  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Product} from "../models/product.model";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private http: HttpClient, private toastr: ToastrService) { }
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
    this.http.delete<Product>('/api/v1/products/' + productID).subscribe(() => {
      this.toastr.success('Hello world!', 'Toastr fun!')
    })
  }
}

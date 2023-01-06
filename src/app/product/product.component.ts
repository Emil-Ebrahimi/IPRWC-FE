import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product.model";



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = {} as Product;
  imageSrc: string = '';


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

 ngOnInit() {
    let productId!: number;
    this.route.params.subscribe(params => {
      productId = params['id'];
    });
   this.getProduct(productId);
 }

  getProduct(productId: number) {
    this.http.get<Product>('/api/v1/products/' + productId).subscribe((res) => {
       this.product = res;
      this.imageSrc = "assets/images/" + res.name + ".jpg";
    })
  }

}

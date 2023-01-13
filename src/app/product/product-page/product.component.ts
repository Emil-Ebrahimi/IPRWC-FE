import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../models/product.model";
import {CartService} from "../../cart.service";
import {ToastrService} from "ngx-toastr";



@Component({
  selector: 'app-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = {} as Product;
  quantity: number = 1;


  constructor(private route: ActivatedRoute, private http: HttpClient, private cartService: CartService, private toastr: ToastrService) { }

 ngOnInit() {
   this.cartService.initCart();
    let productId!: number;
    this.route.params.subscribe(params => {
      productId = params['id'];
    });
   this.getProduct(productId);
 }

  getProduct(productId: number) {
    this.http.get<Product>('/api/v1/products/' + productId).subscribe((res) => {
       this.product = res;
    })
  }

  addQuantity() {
    this.quantity++;
  }

  subtractQuantity() {
    if (this.quantity == 1 || this.quantity < 1) {
      this.quantity = 1;
      this.toastr.error("Not allowed", "Error")

    } else
    {
      this.quantity--;
    }
    }

  addToCart() {
   this.cartService.addToCart(this.product.id, this.quantity);
  }

}

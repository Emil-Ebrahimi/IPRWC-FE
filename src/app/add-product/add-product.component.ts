import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AdminService} from "../admin.service";
import {Category} from "../models/category.model";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: Product = {} as Product;
  categories: Category[]=[];
  public loading = false;
  form:FormGroup;




  constructor(private toastr: ToastrService, private fb:FormBuilder, private router: Router, private http: HttpClient, private adminService: AdminService) {

    this.form = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      stock: ["", Validators.required],
      shortDescription: ["", Validators.required],
      category: ["", Validators.required],
      description: ["", Validators.required]
    });
  }
  ngOnInit(): void {
    this.getCategories();
  }


  getCategories() {
    this.http.get<Category[]>('/api/v1/categories').pipe().subscribe((res) => {
      this.categories = res;
    })
  }

  onSubmit() {

    const val = this.form.value;
    if (this.form.valid) {
      this.loading = true
      this.adminService.createProduct(val.name, val.price, val.stock, val.category, val.shortDescription, val.description).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigateByUrl('/admin/edit-products');
          this.toastr.success('Succesvol het product aangemaakt!', 'Product Aangemaakt!')
        },
        error: error => {
          this.loading = false;
          console.error('There was an error!', error);
        }
      });

    } else {
      console.log('There was an error! Form invalid!');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../models/product.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../admin.service";
import {ToastrService} from "ngx-toastr";
import {Category} from "../../models/category.model";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-edit-single-product-page',
  templateUrl: './edit-single-product.component.html',
  styleUrls: ['./edit-single-product.component.scss']
})
export class EditSingleProductComponent implements OnInit {
  product: Product = {} as Product;
  public loading = false;
  categories: Category[]=[];
  form:FormGroup;




  constructor(private toastr: ToastrService, private fb:FormBuilder, private router: Router, private route: ActivatedRoute, private http: HttpClient, private authService: AuthService, private adminService: AdminService) {

  this.form = this.fb.group({
    name: ["", Validators.required],
    price: ["", Validators.required],
    stock: ["", Validators.required],
    shortDescription: ["", Validators.required],
    category: [null, Validators.required],
    description: ["", Validators.required],
    imageSrc: ["", Validators.required]
  });
  }
  ngOnInit(): void {
    if(!this.authService.isAdmin()) {
      this.router.navigateByUrl('/');
    }
    let productId!: String;
    this.route.params.subscribe(params => {
      productId = params['id'];
    });
    this.getCategories();
    this.getProduct(productId);

  }

  getCategories() {
    this.http.get<Category[]>('/api/v1/categories').pipe().subscribe((res) => {
      this.categories = res;
    })
  }

  getProduct(productId: String) {
    this.http.get<Product>('/api/v1/products/' + productId).subscribe((res) => {
      this.product = res;
      let selectedCategory;
      if (this.product.category == null) {
        selectedCategory = null;
      } else {
        selectedCategory = this.categories.find(({id}) => id === this.product.category.id);
      }
      this.form.setValue({
        name: this.product.name,
        price: this.product.price,
        stock: this.product.stock,
        shortDescription: this.product.shortDescription,
        category: selectedCategory,
        description: this.product.description,
        imageSrc: this.product.imageSrc
      });
    })
  }

  onSubmit() {

    const val = this.form.value;
    if (this.form.valid) {
      this.loading = true
      console.log(val);
      this.adminService.editProduct(this.product.id, val.name, val.price, val.stock, val.category, val.shortDescription, val.description, val.imageSrc).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigateByUrl('/admin/edit-products');
          this.toastr.success('Succesvol gewijzigd!', 'Product wijziging!')
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

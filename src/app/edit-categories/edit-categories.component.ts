import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Category} from "../models/category.model";

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {
  constructor(private http: HttpClient, private toastr: ToastrService) { }
  categories: Category[]=[];
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.http.get<Category[]>('/api/v1/categories').pipe()
      .subscribe(category => {
          this.categories = category;
        }
      )
  }

  removeCategory(categoryID : String) {
    this.http.delete<Category>('/api/v1/categories/' + categoryID).subscribe(() => {
      this.ngOnInit();
      this.toastr.error('Succesvol verwijderd!', 'Category verwijderd!');
    })
  }
}

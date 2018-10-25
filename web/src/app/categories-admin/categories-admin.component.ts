import { Component, OnInit } from '@angular/core';
import {CategoriesAdminService} from "./categories-admin.service";

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.css']
})
export class CategoriesAdminComponent implements OnInit {

  constructor(
      private categoriesServei: CategoriesAdminService
  ) { }

  categories = <any>[];

  errorDeleting = false;
  ngOnInit() {
    this.getCategories();
  }


  delete(id){
    this.errorDeleting = false;
    this.categoriesServei.deleteCategoria(id).subscribe(data => {
        this.categories = data;
    },error1 => {
        this.errorDeleting = true;
    })
  }


  getCategories(){
      this.categoriesServei.getCategories().subscribe(data => {
        this.categories = data;
      })
  }

}

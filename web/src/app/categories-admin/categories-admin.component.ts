import { Component, OnInit } from '@angular/core';
import {CategoriesAdminService} from "./categories-admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.css']
})
export class CategoriesAdminComponent implements OnInit {

  constructor(
      private router: Router,
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

    tornar(){
          this.router.navigate(['/admin/menu']);
    }


    getCategories(){
      this.categoriesServei.getCategories().subscribe(data => {
        this.categories = data;
      })
  }

}

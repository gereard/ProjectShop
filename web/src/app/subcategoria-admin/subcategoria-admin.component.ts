import { Component, OnInit } from '@angular/core';
import {CategoriesAdminService} from "../categories-admin/categories-admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-subcategoria-admin',
  templateUrl: './subcategoria-admin.component.html',
  styleUrls: ['./subcategoria-admin.component.css']
})
export class SubcategoriaAdminComponent implements OnInit {

    constructor(
        private router: Router,
        private subcategoriaServei: CategoriesAdminService
    ) { }

    errorDeleting = false;
    subcategories = <any>[];

    ngOnInit() {
        this.getSubcategories();
    }


    tornar(){
        this.router.navigate(['/admin/menu']);
    }

    delete(id){
        this.errorDeleting = false;
        this.subcategoriaServei.deleteSubcategoria(id).subscribe(data => {
            this.subcategories = data;
        },error1 => {
            this.errorDeleting = true;
        })
    }


    getSubcategories(){
        this.subcategoriaServei.getSubcategories().subscribe(data => {
            this.subcategories = data;
        })
    }

}

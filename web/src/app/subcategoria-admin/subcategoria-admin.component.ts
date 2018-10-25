import { Component, OnInit } from '@angular/core';
import {CategoriesAdminService} from "../categories-admin/categories-admin.service";

@Component({
  selector: 'app-subcategoria-admin',
  templateUrl: './subcategoria-admin.component.html',
  styleUrls: ['./subcategoria-admin.component.css']
})
export class SubcategoriaAdminComponent implements OnInit {

    constructor(
        private subcategoriaServei: CategoriesAdminService
    ) { }

    errorDeleting = false;
    subcategories = <any>[];

    ngOnInit() {
        this.getSubcategories();
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

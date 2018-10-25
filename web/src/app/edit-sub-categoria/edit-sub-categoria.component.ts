import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriesAdminService} from "../categories-admin/categories-admin.service";

@Component({
  selector: 'app-edit-sub-categoria',
  templateUrl: './edit-sub-categoria.component.html',
  styleUrls: ['./edit-sub-categoria.component.css']
})

export class EditSubCategoriaComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private subcategoriaServei: CategoriesAdminService
    ) { }

    subcategoria = <any>[];
    categories = <any>[];
    id  : any;
    exist  = false;
    errorName = false;
    errorDescription = false;
    private routeParams : any;
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.routeParams = params;
            this.id = params.id;
            this.getCategories();
            if(this.id != undefined){
                this.getSubcategoria(params.id)
            }else{
                this.subcategoria = {};
            }
        });
    }

    getCategories(){
        this.subcategoriaServei.getCategories().subscribe(data => {
            this.categories = data;
        })
    }
    getSubcategoria(id){
        this.subcategoriaServei.getSubcategoria(id).subscribe(data => {
            this.subcategoria = data[0];
        })
    }


    saveSubCategoria(){
        this.errorName = false;
        this.errorDescription = false;
        this.errorDescription = false;
        this.subcategoria.idCategoria = this.subcategoria.idCategoria*1;
        if(this.subcategoria.name.length < 3){
            this.errorName = true;
            return
        }
        if(this.subcategoria.description.length < 3){
            this.errorDescription = true;
            return
        }

        if(this.subcategoria.id){
            this.subcategoriaServei.saveSubcategoria(this.subcategoria).subscribe(data => {
                this.router.navigate(['/admin/subcategories']);

            });
        }
        else{
            this.subcategoriaServei.getSubName(this.subcategoria.name).subscribe(data => {
                if(data.length == 0 ){
                    this.subcategoriaServei.saveSubcategoria(this.subcategoria).subscribe(data => {
                        this.router.navigate(['/admin/subcategories']);
                    });
                }else{
                    this.exist = true;
                }
            });
        }
    }
}

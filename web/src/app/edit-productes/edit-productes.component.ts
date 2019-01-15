import { Component, OnInit } from '@angular/core';
import {CategoriesAdminService} from "../categories-admin/categories-admin.service";
import {ProducteServiceService} from "../adminProductes/producte-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-productes',
  templateUrl: './edit-productes.component.html',
  styleUrls: ['./edit-productes.component.css']
})
export class EditProductesComponent implements OnInit {

  constructor( private route: ActivatedRoute,
        private router: Router,
        private categoriaServei: CategoriesAdminService,
        private producteServei: ProducteServiceService) { }


    id  : any;
    exist  = false;
    errorName = false;
    errorDescription = false;
    errorCategoria = false;
    private routeParams : any;
    categories = <any>[];
    subcategories= <any>[];
    producte = <any>[];

  ngOnInit() {
    this.route.params.subscribe(params => {
            this.routeParams = params;
            this.id = params.id;
            if(this.id != undefined){
                this.getProducte(params.id)
            }else{
              this.producte = {};
            }
        });
    this.getCategories();
    
    this.getSubcategories();
    
  }
    getCategories(){
      this.categoriaServei.getCategories().subscribe(data => {
        this.categories = data;
      })
  }
  getSubcategories(){
      this.categoriaServei.getSubcategories().subscribe(data => {
        this.subcategories = data;
      })
  }

      getProducte(id){
        this.producteServei.getProducte(id).subscribe(data => {
            this.producte = data[0];
        })
    }
    tornar(){
        this.router.navigate(['/admin/productes']);
    }
    saveProducte(){
        this.errorName = false;
        this.errorDescription = false;
        this.errorCategoria = false;
        this.producte.idCategory = this.producte.idCategory *1;

        this.producte.idSubcategoria = this.producte.idSubcategoria*1;
        if(this.producte.name.length < 3){
            this.errorName = true;
            return
        }
        if(this.producte.description.length < 3){
            this.errorDescription = true;
            return
        }

        console.log(this.producte);
      


        if(this.producte.id){
            this.producteServei.saveProducte(this.producte).subscribe(data => {
                this.router.navigate(['/admin/productes']);

            });
        }
        else{
            this.producteServei.getProducteNom(this.producte.name).subscribe(data => {
                if(data.length == 0 ){
                    this.producteServei.saveProducte(this.producte).subscribe(data => {
                        this.router.navigate(['/admin/productes']);
                    });
                }else{
                    this.exist = true;
                }
            });
        }
    }
}

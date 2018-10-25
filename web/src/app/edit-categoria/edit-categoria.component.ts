import { Component, OnInit } from '@angular/core';
import {CategoriesAdminService} from "../categories-admin/categories-admin.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private categoriaServei: CategoriesAdminService
    ) { }

    categoria = <any>[];
    id  : any;
    exist  = false;
    errorName = false;
    errorDescription = false;
    private routeParams : any;
    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log(params)

            this.routeParams = params;
            this.id = params.id;
            if(this.id != undefined){
                this.getCategoria(params.id)
            }else{
              this.categoria = {};
            }
        });
    }

    getCategoria(id){
        this.categoriaServei.getCategoria(id).subscribe(data => {
            this.categoria = data[0];
        })
    }


    saveCategoria(){
      this.errorName = false;
      this.errorDescription = false;
      this.errorDescription = false;
      if(this.categoria.name.length < 3){
        this.errorName = true;
        return
      }
      if(this.categoria.description.length < 3){
          this.errorDescription = true;
          return
      }

      if(this.categoria.id){
          this.categoriaServei.saveCategoria(this.categoria).subscribe(data => {
              this.router.navigate(['/admin/categories']);

          });
      }
      else{
          this.categoriaServei.getName(this.categoria.name).subscribe(data => {
              if(data.length == 0 ){
                  this.categoriaServei.saveCategoria(this.categoria).subscribe(data => {
                      this.router.navigate(['/admin/categories']);
                  });
              }else{
                this.exist = true;
              }
          });
      }
    }
}

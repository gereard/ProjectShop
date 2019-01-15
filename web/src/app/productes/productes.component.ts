import { Component, OnInit } from '@angular/core';
import {CategoriaService} from "../categoria/categoria.service";
import {ProductesService} from "./productes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.css']
})
export class ProductesComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private producteServei: ProductesService,

  ) {

  }

    private sub: any;
    private routeParams : any;

    cerca = false;
    breadcrumb = <any>[];
    producte = "";
    productes = [];

    ngOnInit() {
        this.route.params.subscribe(params => {
            if(!params || params.producte){
                this.cerca = true;
                if(window.location.pathname.includes('cercar')){
                    var array = window.location.pathname.split('/');
                    this.producte = array[array.length-1];
                    this.producteServei.getCerca(this.producte).subscribe(data => {
                        this.productes = data;
                    })
                }
            }else{
                this.routeParams = params;
                this.breadcrumb = params;
                this.producteServei.getProductes(this.routeParams).subscribe(data => {
                    this.productes = data;
                })
            }
        });
    }
}

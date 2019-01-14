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
      private producteServei: ProductesService
  ) {}

    private sub: any;
    private routeParams : any;

    breadcrumb = <any>[];

    productes = [];
    ngOnInit() {
        this.route.params.subscribe(params => {
           this.routeParams = params;
           this.breadcrumb = params;
            this.producteServei.getProductes(this.routeParams).subscribe(data => {
                this.productes = data;
            })
        });

    }


}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProducteDetallService} from "./producte-detall.service";

@Component({
  selector: 'app-producte-detall',
  templateUrl: './producte-detall.component.html',
  styleUrls: ['./producte-detall.component.css']
})
export class ProducteDetallComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private producteDetallServei: ProducteDetallService
    ) {}

    private sub: any;
    private routeParams : any;


    producte = <any>[];
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.routeParams = params;
        });
        this.producteDetallServei.getProducte(this.routeParams.name).subscribe(data => {
            this.producte = data[0];
            console.log(this.producte)
        })
    }


    addCart(){
        var a = [];

        if(localStorage.getItem('productes') !== null){
            a = JSON.parse(localStorage.getItem('productes'));
        }
        console.log(this.producte.id);
        a.push(this.producte.id);

        localStorage.setItem('productes', JSON.stringify(a));

    }

}

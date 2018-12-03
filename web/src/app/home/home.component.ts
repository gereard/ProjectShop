import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductesService} from "../productes/productes.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private producteServei: ProductesService
    ) {}

    private sub: any;
    private routeParams : any;


    productes = [];
    productesStock = [];

    ngOnInit() {
        this.producteServei.getHomeProducts().subscribe(data => {
            this.productes = data;
        })
        this.producteServei.getFinalStockProducts().subscribe(data => {
            this.productesStock = data;
        })
    }
}

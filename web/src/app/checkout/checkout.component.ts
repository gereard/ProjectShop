import { Component, OnInit } from '@angular/core';
import {ProducteDetallService} from "../producte-detall/producte-detall.service";
import {AuthenticationService} from "../auth/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    constructor(
        private producteDetallServei: ProducteDetallService,
        private auth: AuthenticationService,
        private router: Router,
    ) {}


    order = <any>[];
    products = <any>[];
    storage = <any>[];
    totalPrice = 0;
    user = <any>[];
    errorCP = false;
    errorCiutat = false;
    errorDireccio = false;
    errorStock = false;


    ngOnInit() {
        let storage =  JSON.parse(localStorage.getItem('currentUser'));
        this.auth.getUser(storage.token).subscribe(data =>{
            this.user = data;
            this.order.idClient = this.user.id;
            this.order.direccio = this.user.direccio;
            this.order.codiPostal = this.user.cp;
            this.order.ciutat = this.user.ciutat;

        });
        this.getCart();
    }

    getCart() {
        if (localStorage.getItem('productes') !== null) {
            this.storage.ids = JSON.parse(localStorage.getItem('productes'));
            this.producteDetallServei.getProductes(this.storage).subscribe((data => {
                this.order.products = data;
                this.getTotalPrice();
            }));
        }
    };

    getTotalPrice() {
        this.totalPrice = 0;
        for (let i = 0; i < this.order.products.length; i++) {
            this.order.products[i].priceDiscount = (this.order.products[i].price - this.order.products[i].price * this.order.products[i].discount / 100) * this.order.products[i].count;
            this.totalPrice = this.totalPrice + this.order.products[i].priceDiscount;
        }
    };

    comprar(){
        this.errorCP = false;
        this.errorCiutat = false;
        this.errorDireccio = false;
        this.errorStock = false;
        if(this.order.codiPostal.length < 3){
            this.errorCP = true;
            return;
        }

        let obj = Object.assign({}, this.order);
        this.producteDetallServei.finalitzarComprar(obj).subscribe((data => {
            if(data.errorMessage.length > 0){
                this.order = data;
                this.errorStock = true;
            }else{
                this.router.navigate(['/user/orders']);
                localStorage.removeItem('productes')
            }
        }));
    }

    tornar(){
        this.router.navigate(['/cart']);
    }



}

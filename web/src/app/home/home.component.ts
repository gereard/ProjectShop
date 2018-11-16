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
            this.addImg();
        })
        this.producteServei.getFinalStockProducts().subscribe(data => {
            this.productesStock = data;
            this.addImgStock();
        })
    }

    addImg(){
        for(let i =0; i <  this.productes.length;i++){
            if(this.productes[i].name.includes('6')){
                this.productes[i].image = "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/i/p/iphone6s-gld02_3.jpg"
            }
            if(this.productes[i].name.includes('X')){
                this.productes[i].image = "https://images-eu.ssl-images-amazon.com/images/I/51uMWs0mjeL._AC_SS350_.jpg"
            }
            if(this.productes[i].name.includes('40')){
                this.productes[i].image = "https://parentesis.com/imagesPosts/samsungultima1.jpg"
            }
            if(this.productes[i].name.includes('44')){
                this.productes[i].image = "https://www.evetech.co.za/repository/ProductImages/benq-xl2411z-monitor-00004.jpg"
            }
            if(this.productes[i].name.includes('Asus')){
                this.productes[i].image = "https://www.asus.com/media/global/products/qNIGGLSwiIlojoz2/P_setting_fff_1_90_end_500.png"
            }
        }
    }
    
    addImgStock(){
        for(let i =0; i <  this.productesStock.length;i++){
            if(this.productesStock[i].name.includes('6')){
                this.productesStock[i].image = "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/i/p/iphone6s-gld02_3.jpg"
            }
            if(this.productesStock[i].name.includes('X')){
                this.productesStock[i].image = "https://images-eu.ssl-images-amazon.com/images/I/51uMWs0mjeL._AC_SS350_.jpg"
            }
            if(this.productesStock[i].name.includes('40')){
                this.productesStock[i].image = "https://parentesis.com/imagesPosts/samsungultima1.jpg"
            }
            if(this.productesStock[i].name.includes('44')){
                this.productesStock[i].image = "https://www.evetech.co.za/repository/ProductImages/benq-xl2411z-monitor-00004.jpg"
            }
            if(this.productesStock[i].name.includes('Asus')){
                this.productesStock[i].image = "https://www.asus.com/media/global/products/qNIGGLSwiIlojoz2/P_setting_fff_1_90_end_500.png"
            }
        }
    }

}

import { Component, OnInit } from '@angular/core';
import {ProducteDetallService} from "../producte-detall/producte-detall.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(
      private producteDetallServei: ProducteDetallService
  ) { }



  products = <any>[];
  storage = <any>[];
  totalPrice = 0;
  ngOnInit() {
      this.getCart();
  }

  getCart(){

    if(localStorage.getItem('productes') !== null){
      //a = localStorage.getItem('productes');
      this.storage.ids =  JSON.parse(localStorage.getItem('productes'));
      this.producteDetallServei.getProductes(this.storage).subscribe((data=>{
          this.products = data;
          this.getTotalPrice();
      }));
    }
  };

  getTotalPrice(){
    this.totalPrice = 0;
    for(let i=0; i < this.products.length; i++){
      this.products[i].priceDiscount =  (this.products[i].price - this.products[i].price *  this.products[i].discount/100)* this.products[i].count;
      this.totalPrice = this.totalPrice + this.products[i].priceDiscount;
    }
  };

  actionProduct(action,product){
      if(action === 'remove'){
          this.removeProduct(product);
      }
      if(action === 'add'){
          this.carryMore(product);
      }
      if(action === 'delete'){
          this.deleteProduct(product);
      }
      this.getTotalPrice();
  }

  removeProduct(product){
      let productDeleted = false;
      product.count = product.count - 1;
      for (let j = this.storage.ids.length - 1; j >= 0; j--) {
          if(this.storage.ids[j] == product.id && !productDeleted){
              this.storage.ids.splice(j,1)
              productDeleted = true;
              if(product.count == 0){
                  for (let i = this.products.length - 1; i >= 0; i--) {
                      if(this.products[i].id == product.id){
                          this.products.splice(i,1);
                      }
                  }
              }
          }
      }
      localStorage.setItem('productes', JSON.stringify(this.storage.ids));
  }

  carryMore(product){
    product.count++;
    this.storage.ids.push(product.id);
    localStorage.setItem('productes', JSON.stringify(this.storage.ids));
  }

  deleteProduct(product){
      for (let j = this.storage.ids.length - 1; j >= 0; j--) {
          if(this.storage.ids[j] == product.id){
              this.storage.ids.splice(j,1)
          }
      }

      for (let i = this.products.length - 1; i >= 0; i--) {
          if(this.products[i].id == product.id){
              this.products.splice(i,1);
          }
      }

      localStorage.setItem('productes', JSON.stringify(this.storage.ids));

  }
}

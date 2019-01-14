import { Component, OnInit } from '@angular/core';
import {ProducteServiceService} from "../adminProductes/producte-service.service";
@Component({
  selector: 'app-admin-productes',
  templateUrl: './admin-productes.component.html',
  styleUrls: ['./admin-productes.component.css']
})
export class AdminProductesComponent implements OnInit {

  constructor(
		private productesServei: ProducteServiceService
  ) { }

   productes = <any>[];

  errorDeleting = false;
  ngOnInit() {
    this.getProductes();
  }


  delete(id){
    this.errorDeleting = false;
    this.productesServei.deleteProducte(id).subscribe(data => {
        this.productes = data;
    },error1 => {
        this.errorDeleting = true;
    })
  }


  getProductes(){
      this.productesServei.getProductes().subscribe(data => {
        this.productes = data;
      })
  }

}

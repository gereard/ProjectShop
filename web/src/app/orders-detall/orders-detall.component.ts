import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriesAdminService} from "../categories-admin/categories-admin.service";
import {OrderService} from "../orders-usuari/order-service.service";

@Component({
  selector: 'app-orders-detall',
  templateUrl: './orders-detall.component.html',
  styleUrls: ['./orders-detall.component.css']
})
export class OrdersDetallComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private orderService: OrderService
  ) { }

    order = <any>[];
    private routeParams : any;
    orderId  : any;


    ngOnInit() {
        this.route.params.subscribe(params => {
            this.routeParams = params;
            this.orderId = params.id;
            this.orderService.getOrdersById(this.orderId).subscribe(data => {
                this.order = data;
            })
        });
  }

    tornar(id){

        if(this.router.url.includes("admin")){
            this.router.navigate(['/admin/orders']);
        }else{
            this.router.navigate(['/user/orders']);
        }
    }

}

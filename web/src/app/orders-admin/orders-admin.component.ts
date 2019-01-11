import { Component, OnInit } from '@angular/core';
import {OrderService} from "../orders-usuari/order-service.service";
import {AuthenticationService} from "../auth/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent implements OnInit {


    constructor(
        private orderService: OrderService,
        private authenticationService: AuthenticationService,
        private router: Router,
    ) { }

    user = <any>[];
    orders = <any>[];

    ngOnInit() {
        this.orderService.getAllOrders().subscribe(data => {
            this.orders = data;
        })
    }

    tornar(id){
        this.router.navigate(['/admin/menu']);
    }

}


import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../auth/authentication.service";
import {OrderService} from "./order-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-orders-usuari',
  templateUrl: './orders-usuari.component.html',
  styleUrls: ['./orders-usuari.component.css']
})
export class OrdersUsuariComponent implements OnInit {

  constructor(
      private orderService: OrderService,
      private authenticationService: AuthenticationService,
      private router: Router,
  ) { }

    user = <any>[];
    orders = <any>[];

  ngOnInit() {
      if (localStorage.getItem('currentUser')) {
          let users =  JSON.parse(localStorage.getItem('currentUser'));
          this.authenticationService.roleToken(users.token).subscribe(data =>{
              this.user = data;

              this.orderService.getOrdersByUser(this.user.id).subscribe(data => {
                  this.orders = data;
              })
          });
      }
  }

    tornar(id){
        this.router.navigate(['/user/menu']);
    }

}

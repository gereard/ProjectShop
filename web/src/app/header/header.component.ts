import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../auth/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router,
               private authenticationService: AuthenticationService) {}
 logged = false;
  ngOnInit() {
      if (localStorage.getItem('currentUser')) {
          this.logged =  true;
      }
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['']);
    location.reload();
  }

}

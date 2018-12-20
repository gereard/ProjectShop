import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../auth/authentication.service";
import {CategoriaService} from "../categoria/categoria.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router,
               private categoriaServei: CategoriaService,
    private authenticationService: AuthenticationService) {}
    logged = false;
    user = <any>[];
    categories = [];
    subcategories = [];

    ngOnInit() {
      if (localStorage.getItem('currentUser')) {
          let users =  JSON.parse(localStorage.getItem('currentUser'));
          this.authenticationService.roleToken(users.token).subscribe(data =>{
              this.user = data;
              this.logged =  true;
          })
      }
        this.categoriaServei.getCategories().subscribe(data =>{
            this.categories = data;
        })
  }

  getSubcategories(name){
      this.categoriaServei.getCategoria(name).subscribe(data =>{
          this.subcategories = data[0].subcategories;
      })
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['']);
    location.reload();
  }

}

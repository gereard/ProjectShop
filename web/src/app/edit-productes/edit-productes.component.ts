import { Component, OnInit } from '@angular/core';
import {CategoriesAdminService} from "../categories-admin/categories-admin.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-productes',
  templateUrl: './edit-productes.component.html',
  styleUrls: ['./edit-productes.component.css']
})
export class EditProductesComponent implements OnInit {

  constructor( private route: ActivatedRoute,
        private router: Router,
        private categoriaServei: CategoriesAdminService) { }


    categoria = <any>[];
    subCategoria = <any>[];

    productes = <any>[];

  ngOnInit() {
  }

}

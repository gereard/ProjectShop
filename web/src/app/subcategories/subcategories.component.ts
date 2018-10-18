import { Component, OnInit } from '@angular/core';
import {CategoriaService} from "../categoria/categoria.service";
import {ActivatedRoute} from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {


  constructor(
      private route: ActivatedRoute,
      private categoriaServei: CategoriaService
  ) { }


    private sub: any;
    page : string;
    title : string;

    subcategories = [];
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
          this.page = params['name'];

        });
        this.categoriaServei.getCategoria(this.page).subscribe(data =>{
            this.subcategories = data[0].subcategories;
            this.title = data[0].name

        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}

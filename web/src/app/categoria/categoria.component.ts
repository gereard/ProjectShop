import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {



  constructor(
      private categoriaServei: CategoriaService
  ) { }


  categories = [];
  ngOnInit() {
      this.categoriaServei.getCategories().subscribe(data =>{
        this.categories = data;
      })
  }
}

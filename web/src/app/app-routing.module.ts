import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CategoriaComponent} from './categoria/categoria.component';
import {SubcategoriesComponent} from "./subcategories/subcategories.component";
import {ProductesComponent} from "./productes/productes.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'categories', component: CategoriaComponent },
    { path: 'categoria/:name', component: SubcategoriesComponent},
    { path: 'subcategoria/', component: SubcategoriesComponent},
    { path: 'productes/:categoria/:subcategoria', component: ProductesComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

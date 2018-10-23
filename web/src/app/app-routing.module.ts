import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CategoriaComponent} from './categoria/categoria.component';
import {SubcategoriesComponent} from "./subcategories/subcategories.component";
import {ProductesComponent} from "./productes/productes.component";
import {ProducteDetallComponent} from "./producte-detall/producte-detall.component";
import {CarritoComponent} from "./carrito/carrito.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {CategoriesAdminComponent} from "./categories-admin/categories-admin.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'categories', component: CategoriaComponent },
    { path: 'categoria/:name', component: SubcategoriesComponent},
    { path: 'subcategoria/', component: SubcategoriesComponent},
    { path: 'productes/:categoria/:subcategoria', component: ProductesComponent},
    { path: 'producte/:name', component: ProducteDetallComponent},
    { path: 'producte/:name', component: ProducteDetallComponent},
    { path: 'cart', component: CarritoComponent},
    { path: 'checkout', component: CheckoutComponent},
    { path: 'admin/categories', component: CategoriesAdminComponent},

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

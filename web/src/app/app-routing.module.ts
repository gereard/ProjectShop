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
import {EditCategoriaComponent} from "./edit-categoria/edit-categoria.component";
import {SubcategoriaAdminComponent} from "./subcategoria-admin/subcategoria-admin.component";
import {EditSubCategoriaComponent} from "./edit-sub-categoria/edit-sub-categoria.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
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
    { path: 'admin/categories/edit/:id', component: EditCategoriaComponent},
    { path: 'admin/categories/create', component: EditCategoriaComponent},
    { path: 'admin/subcategories', component: SubcategoriaAdminComponent},
    { path: 'admin/subcategories/edit/:id', component: EditSubCategoriaComponent},
    { path: 'admin/subcategories/create', component: EditSubCategoriaComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

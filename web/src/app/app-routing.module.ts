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
import {AdminProductesComponent} from "./admin-productes/admin-productes.component";
import {EditProductesComponent} from "./edit-productes/edit-productes.component";
import {EditCategoriaComponent} from "./edit-categoria/edit-categoria.component";
import {SubcategoriaAdminComponent} from "./subcategoria-admin/subcategoria-admin.component";
import {EditSubCategoriaComponent} from "./edit-sub-categoria/edit-sub-categoria.component";
import {CotrolPanelComponent} from "./cotrol-panel/cotrol-panel.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./auth/auth.guard";
import {RoleGuard} from "./auth/role.guard";
import {UsuariComponent} from "./usuari/usuari.component";
import {OrdersUsuariComponent} from "./orders-usuari/orders-usuari.component";
import {OrdersDetallComponent} from "./orders-detall/orders-detall.component";
import {OrdersAdminComponent} from "./orders-admin/orders-admin.component";
import {QuisomComponent} from "./quisom/quisom.component";
import {ContacteComponent} from "./contacte/contacte.component";


const routes:    Routes = [
    { path: '', component: HomeComponent },
    { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'categories', component: CategoriaComponent },
    { path: 'categoria/:name', component: SubcategoriesComponent},
    { path: 'subcategoria/', component: SubcategoriesComponent},
    { path: 'productes/:categoria/:subcategoria', component: ProductesComponent},
    { path: 'producte/:name', component: ProducteDetallComponent},
    { path: 'producte/:name', component: ProducteDetallComponent},
    { path: 'cart', component: CarritoComponent},
    { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
    { path: 'admin/menu', component: CotrolPanelComponent, canActivate: [AuthGuard]},
    { path: 'admin/categories', component: CategoriesAdminComponent,canActivate: [AuthGuard]},
    { path: 'admin/categories/edit/:id', component: EditCategoriaComponent, canActivate: [AuthGuard]},
    { path: 'admin/categories/create', component: EditCategoriaComponent, canActivate: [AuthGuard]},
    { path: 'admin/subcategories', component: SubcategoriaAdminComponent, canActivate: [AuthGuard]},
    { path: 'admin/subcategories/edit/:id', component: EditSubCategoriaComponent, canActivate: [AuthGuard]},
    { path: 'admin/subcategories/create', component: EditSubCategoriaComponent, canActivate: [AuthGuard]},
    { path: 'admin/productes', component: AdminProductesComponent},
    { path: 'admin/productes/create', component: EditProductesComponent},
    { path: 'admin/productes/edit/:id', component: EditProductesComponent},
    { path: 'user/menu', component: UsuariComponent, canActivate: [AuthGuard]},
    { path: 'user/orders', component: OrdersUsuariComponent, canActivate: [AuthGuard]},
    { path: 'admin/orders', component: OrdersAdminComponent, canActivate: [AuthGuard]},
    { path: 'user/orders/:id', component: OrdersDetallComponent, canActivate: [AuthGuard]},
    { path: 'admin/orders/:id', component: OrdersDetallComponent, canActivate: [AuthGuard]},
    { path: 'quisom', component: QuisomComponent},
    { path: 'contacte', component: ContacteComponent},


];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { CategoriaComponent } from './categoria/categoria.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ProductesComponent } from './productes/productes.component';
import {FormsModule} from "@angular/forms";
import { ProducteDetallComponent } from './producte-detall/producte-detall.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategoriesAdminComponent } from './categories-admin/categories-admin.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { EditSubCategoriaComponent } from './edit-sub-categoria/edit-sub-categoria.component';
import { SubcategoriaAdminComponent } from './subcategoria-admin/subcategoria-admin.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    FooterComponent,
    CategoriaComponent,
    SubcategoriesComponent,
    ProductesComponent,
    ProducteDetallComponent,
    CarritoComponent,
    CheckoutComponent,
    CategoriesAdminComponent,
    EditCategoriaComponent,
    EditSubCategoriaComponent,
    SubcategoriaAdminComponent,
    HomeComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriesAdminService {

    constructor(private http: HttpClient) { }
    private url = 'http://localhost/api/categories';
    private suburl = 'http://localhost/api/subcategories';

    public getSubcategories(): Observable<any> {
        return this.http.get<any>(this.suburl);
    }

    public deleteSubcategoria(id: string): Observable<any> {
        return this.http.get<any>( this.suburl+'/delete/'+id);
    }

    public getSubcategoria(id: string): Observable<any> {
        return this.http.get<any>( 'http://localhost/api/subcategoriaById/'+id);
    }

    public saveSubcategoria(obj: any): Observable<any> {
        return this.http.post<any>( this.suburl+'/save', obj,httpOptions);
    }

    public getSubName(nom: string): Observable<any> {
        return this.http.get<any>( this.suburl+'/'+nom);
    }

    public getCategories(): Observable<any> {
        return this.http.get<any>(this.url);
    }

    public getName(nom: string): Observable<any> {
        return this.http.get<any>( 'http://localhost/api/categoria/'+nom);
    }

    public getCategoria(id: string): Observable<any> {
        return this.http.get<any>( 'http://localhost/api/categoriaById/'+id);
    }

    public deleteCategoria(id: string): Observable<any> {
        return this.http.get<any>( 'http://localhost/api/categories/delete/'+id);
    }
    public saveCategoria(obj: any): Observable<any> {
        return this.http.post<any>( this.url+'/save', obj,httpOptions);
    }
}

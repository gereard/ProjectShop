import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductesService {

    constructor(private http: HttpClient) { }
    private url = 'http://localhost/api/productes';

    public getProductes(obj): Observable<any> {
        return this.http.get<any>( this.url+'/'+obj.categoria+'/'+obj.subcategoria);
    }

    public getCerca(string): Observable<any> {
        return this.http.get<any>( 'http://localhost/api/cerca/'+ string);
    }

    public getHomeProducts(): Observable<any> {
        return this.http.get<any>( this.url+'/home');
    }
    public getFinalStockProducts(): Observable<any> {
        return this.http.get<any>( this.url+'/stock');
    }
}

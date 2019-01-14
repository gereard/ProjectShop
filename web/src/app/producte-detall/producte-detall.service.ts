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
export class ProducteDetallService {

    constructor(private http: HttpClient) { }


    private url = 'http://localhost/api/producte';
    public getCategories(): Observable<any> {
        return this.http.get<any>(this.url);
    }

    public getProducte(nom): Observable<any> {
        return this.http.get<any>( this.url+'/'+nom);
    }

    public getProductes(obj: any): Observable<any> {
        return this.http.post<any>( this.url+'s', obj.ids,httpOptions);
    }

    public finalitzarComprar(obj: any): Observable<any> {
        return this.http.post<any>( this.url+'s/finalitzarCompra', obj,httpOptions);
    }
}

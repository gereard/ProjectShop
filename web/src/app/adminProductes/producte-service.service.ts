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
export class ProducteServiceService {

  //constructor() { }
   constructor(private http: HttpClient) { }
    private url = 'http://localhost/api/productes';

    public getProductes(): Observable<any> {
        return this.http.get<any>('http://localhost/api/productes/index');
    }

    public deleteProducte(id: string): Observable<any> {
        return this.http.get<any>( this.url+'/delete/'+id);
    }

    public getProducte(id: string): Observable<any> {
        return this.http.get<any>( this.url+'/'+id);
    }

    public saveProducte(obj: any): Observable<any> {
        return this.http.post<any>( this.url+'/update', obj,httpOptions);
    }
    public getProducteNom(nom: string): Observable<any> {
        return this.http.get<any>( this.url+'/'+nom);
    }
}

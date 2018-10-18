import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

    constructor(private http: HttpClient) { }
    private url = 'http://localhost/api/categories';
    public getCategories(): Observable<any> {
        return this.http.get<any>(this.url);
    }

    public getCategoria(name: string): Observable<any> {
        return this.http.get<any>( 'http://localhost/api/categoria/'+name);
    }
}

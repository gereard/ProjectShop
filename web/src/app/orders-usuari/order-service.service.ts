import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) {}

    private url = 'http://localhost/api/order';

    public getCategories(): Observable<any> {
        return this.http.get<any>(this.url);
    }

    public getOrdersByUser(idUser: string): Observable<any> {
        return this.http.get<any>(this.url +'s/' + idUser);
    }
    public getOrdersById(idOrder: string): Observable<any> {
        return this.http.get<any>(this.url +'/' + idOrder);
    }

    public getAllOrders(): Observable<any> {
        return this.http.get<any>(this.url +'s/getAll');
    }
}
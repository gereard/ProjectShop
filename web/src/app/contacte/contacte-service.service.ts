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
export class ContacteServiceService {

    constructor(private http: HttpClient) { }


    private url = 'http://localhost/api/contact';

    public saveContact(obj: any): Observable<any> {
        return this.http.post<any>( this.url+'/create', obj,httpOptions);
    }

    public getMessages(): Observable<any> {
        return this.http.get<any>( this.url+'/get/');
    }

    public getMessage(id: string): Observable<any> {
        return this.http.get<any>( this.url+'/getMessage/'+id);
    }
}

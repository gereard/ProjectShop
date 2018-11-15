import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>('http://localhost/api/users/authenticate', { email, password })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }


    signup(email: string, password: string, name: string) {
        return this.http.post<any>('http://localhost/api/users/signup', { email, password, name })
            .pipe(map(user => {
                return user;
            }));
    }


    logout() {
        localStorage.removeItem('currentUser');
    }
}
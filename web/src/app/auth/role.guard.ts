import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {

    constructor(private router: Router, private auth:AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.checkRole(state);
    }

    checkRole(state):boolean{
        let user =  JSON.parse(localStorage.getItem('currentUser'));
        if (localStorage.getItem('currentUser')) {
            this.auth.roleToken(user.token).subscribe(data =>{
                if(data.admin){
                    return true;
                }
                return false;
            },error => {
                this.router.navigate(['']);
                return false;
            })
        }
        return false;
    }
}

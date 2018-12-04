import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../auth/authentication.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
      private auth: AuthenticationService,
      private router: Router,
  ) {}

  user = <any>[];
    errorEditing = false;
  ngOnInit() {
    let storage =  JSON.parse(localStorage.getItem('currentUser'));
      this.auth.getUser(storage.token).subscribe(data =>{
          this.user = data;
          console.log(this.user);
      },error => {
          this.router.navigate(['']);
      })
  }


    saveUser(){

      if(this.user.password != this.user.repeated){
          this.errorEditing = true;
          return;
      }

    this.errorEditing = false;
    this.auth.saveUser(this.user)
        .pipe(first())
        .subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
                if(error.error){
                    this.errorEditing = true;
                }
            });
    }

}

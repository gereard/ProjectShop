import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../auth/authentication.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService) {}
  signing: boolean;

  register = <any>[];
  user = <any>[];
  error : boolean;
  errorSigning : boolean;
  email : string;
  ngOnInit() {
    this.signing = true;
  }
  

  login(){
      this.authenticationService.login(this.user.email, this.user.password)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate(['']);
                  location.reload();
              },
              error => {
                  console.log(error);
                  if(error.error){
                      this.error = true;
                  }

              });
  }


    signup(){
        this.authenticationService.signup(this.register.email, this.register.password, this.register.name)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['']);
                    location.reload();
                },
                error => {
                    console.log(error);
                    if(error.error){
                        this.errorSigning = true;
                    }
                });
    }
  changeLogin()
    {
        this.signing = true;
        document.getElementById("tab-login").classList.add('active');
        document.getElementById("tab-sign").classList.remove('active');
        
    }
    
    
    changeSignIn(){
            this.signing = false;
            document.getElementById("tab-sign").classList.add('active');
            document.getElementById("tab-login").classList.remove('active');
           

}


}



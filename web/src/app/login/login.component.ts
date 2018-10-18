import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  signing: boolean;
  ngOnInit() {
    this.signing = true;
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



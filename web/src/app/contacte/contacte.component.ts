import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriesAdminService} from "../categories-admin/categories-admin.service";
import {ContacteServiceService} from "./contacte-service.service";

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css']
})
export class ContacteComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private contactService: ContacteServiceService
    ) { }

    contacte = <any>[];
    id  : any;
    errorName = false;
    errorEmail = false;
    errorTelefon = false;
    errorSubject = false;
    errorMessage = false;


    private routeParams : any;
    ngOnInit() {
        this.contacte = {};
    }


    saveContacte(){
        this.errorName = false;
        this.errorTelefon = false;
        this.errorEmail = false;
        this.errorEmail = false;
        this.errorMessage = false;

        if(this.contacte.name.length < 3){
            this.errorName = true;
            return
        }

        if(this.contacte.email.length < 3){
            this.errorEmail = true;
            return
        }

        if(this.contacte.telefon.length < 3){
            this.errorTelefon = true;
            return
        }

        if(this.contacte.subject.length < 3){
            this.errorSubject = true;
            return
        }

        console.log(this.contacte)

        if(this.contacte.message.length < 3){
            this.errorMessage = true;
            return
        }

        this.contactService.saveContact(this.contacte).subscribe(data => {
            this.router.navigate(['']);
        });


    }

}

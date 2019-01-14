import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContacteServiceService} from "../contacte/contacte-service.service";

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private contactService: ContacteServiceService
    ) {
    }

    messages = <any>[];



    private routeParams: any;

    ngOnInit() {
        this.contactService.getMessages().subscribe(data =>{
            this.messages = data;
        })
    }

    tornar(id){
        this.router.navigate(['/admin/menu']);
    }

}
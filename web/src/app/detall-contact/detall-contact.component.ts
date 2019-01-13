import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContacteServiceService} from "../contacte/contacte-service.service";

@Component({
  selector: 'app-detall-contact',
  templateUrl: './detall-contact.component.html',
  styleUrls: ['./detall-contact.component.css']
})
export class DetallContactComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private contactService: ContacteServiceService
    ) {
    }

    message = <any>[];
    id  : any;


    private routeParams: any;

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.routeParams = params;
            this.id = params.id;
            this.contactService.getMessage(this.id).subscribe(data =>{
                this.message = data;
                console.log(this.message);
            })
        });
    }

    tornar(id){
        this.router.navigate(['/admin/messages']);
    }

}

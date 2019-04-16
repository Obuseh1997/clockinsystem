import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    public pin: number;
    public errorMessage: string;

    constructor(private router: Router,
                private datasource: RestDataSource) {}

    authenticate(form: NgForm) {
        if (form.valid) {
            this.datasource.clockIn(this.pin,response => {
                if (response.status === 200) {
                  this.router.navigateByUrl("/login/home");
                } else
                  this.errorMessage = "Invalid PIN";
                });
              } else {
                this.errorMessage = "PIN Required";
              }
            }
        
        
    }
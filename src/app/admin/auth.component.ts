import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
import { RestDataSource } from "../model/rest.datasource";

@Component({
    templateUrl: "auth.component.html"
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router,
              private auth: AuthService,
              private datasource: RestDataSource) {}

              // authenticate(form: NgForm) {
              //   if (form.valid) {
              //   this.datasource.loginAdmin(this.username, this.password, respo)
              //   .subscribe(response => {
              //   if (response) {
              //   this.router.navigateByUrl("/admin/main");
              //   }
              //   this.errorMessage = "Authentication Failed";
              //   })
              //   } else {
              //   this.errorMessage = "Form Data Invalid";
              //   }
              //   }
              //   }

              authenticate(form: NgForm){
                if (form.valid) {
                  // perform authentication
                  this.datasource.loginAdmin(this.username, this.password,response => {
                    if (response.status === 200) {
                      this.router.navigateByUrl("/admin/main");
                    } else
                      this.errorMessage = "Invalid Username/Password"
                    });
                  } else {
                    this.errorMessage = "Username or Password Required";
                  }
                }
              
        
        // loginUser(form: NgForm) {
        //   if(form.valid) {
        //     this.datasource.getUserDetails(this.username, this.password).subscribe(data => {
        //       if(data) {
        //         //redirect url
        //         this.router.navigateByUrl("/admin/main");
        //       } else {
        //          this.errorMessage = "Invalid Username/Password"
        //       }
        //            })
        //   }
        //   else {
        //     this.errorMessage = "Username or Password Required";
        //   }
        // }
            }
      
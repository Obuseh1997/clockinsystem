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

  authenticate(form: NgForm) {
     if (form.valid) {
     // perform authentication
     this.datasource.loginAdmin(this.username, this.password)
        // .subscribe(response => {
        //     if (response) {
        //       this.router.navigateByUrl("http://192.168.1.29/biometric%20system/admin/admin_login.php");
        //     }
        //     this.errorMessage = "Invalid Username/Password"
        // })
   } else {
       this.errorMessage = "Form Data Invalid";
 }
 }
}

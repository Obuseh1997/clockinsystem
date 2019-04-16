import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login.component";


let routing = RouterModule.forChild([
    { path: "login", component: LoginComponent },
    { 
        path: "home", component: HomeComponent
        
     },
    { path: "**", redirectTo: "login" }
    ]);
    
@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, ModelModule, routing],
    declarations: [LoginComponent, HomeComponent],
    exports: [LoginComponent]
})
    export class LoginModule { }
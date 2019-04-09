import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module";
// import { DashboardComponent } from "../dashboard/dashboard.component";
import { LoginComponent } from "./login.component";


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, ModelModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
    export class LoginModule { }
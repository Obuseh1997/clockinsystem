import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { DashboardComponent } from "./dashboard.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
imports: [ModelModule, BrowserModule, FormsModule, RouterModule, NgbModule],
declarations: [DashboardComponent],
exports: [DashboardComponent]
})
export class DashboardModule { }
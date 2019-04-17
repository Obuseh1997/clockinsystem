 import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { ChartsModule } from "ng2-charts";
import { RouterModule } from "@angular/router";
import { ReportsComponent } from './reports.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
imports: [ModelModule, 
          BrowserModule, 
          FormsModule, 
          RouterModule,
          ChartsModule,
          NgbModule],
declarations: [ReportsComponent],
exports: [ReportsComponent]
})
export class ReportsModule { }
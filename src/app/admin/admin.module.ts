import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { StaffTableComponent } from "./staffTable.component";
import { StaffEditorComponent } from "./staffEditor.component";
import { ReportsComponent } from './reports.component';
import { AbsentComponent } from "./absentees.component"
let routing = RouterModule.forChild([
{ path: "auth", component: AuthComponent },
{ 
    path: "main", component: AdminComponent, 
    children: [
        { path: "staffs/:mode/:id", component: StaffEditorComponent },
        { path: "staffs/:mode", component: StaffEditorComponent },
        { path: "staffs", component: StaffTableComponent },
        { path: "reports", component: ReportsComponent },
        { path: "absentees", component: AbsentComponent },
        { path: "**", redirectTo: "staffs" }
    ]
 },
{ path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [AuthComponent, AdminComponent, ReportsComponent, AbsentComponent,
        StaffTableComponent, StaffEditorComponent]
    })
    export class AdminModule { }
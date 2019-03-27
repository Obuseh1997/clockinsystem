import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from './auth.guard';
import { StaffTableComponent } from "./staffTable.component";
import { StaffEditorComponent } from "./staffEditor.component";

let routing = RouterModule.forChild([
{ path: "auth", component: AuthComponent },
{ 
    path: "main", component: AdminComponent, 
    children: [
        { path: "staffs/:mode/:id", component: StaffEditorComponent },
        { path: "staffs/:mode", component: StaffEditorComponent },
        { path: "staffs", component: StaffTableComponent },
        { path: "**", redirectTo: "staffs" }
    ]
 },
{ path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent,
        StaffTableComponent, StaffEditorComponent]
    })
    export class AdminModule { }
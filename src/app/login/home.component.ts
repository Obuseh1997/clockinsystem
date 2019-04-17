import { Component } from "@angular/core";
import {  Router } from "@angular/router";
import { StaffRepository } from "../model/staff.repository";
import { Staff } from "../model/staff.model";
import { RestDataSource } from "../model/rest.datasource";

@Component({
    templateUrl: "home.component.html"
})

export class HomeComponent {
    public selectedDepartment = null;

    constructor(
        private router: Router,
        private repository: StaffRepository,
        private datasource: RestDataSource
    ) {}

    get staffs(): Staff[] {
        return this.repository.getStaffs(this.selectedDepartment);
    }
    get departments(): string[] {
        return this.repository.getDepartments();
    } 

    logOut() {
        this.router.navigateByUrl('/dashboard');
    }
    
}
import { Component } from "@angular/core";
import { Staff} from "../model/staff.model";
import { StaffRepository } from "../model/staff.repository";
import axios from "axios";
import { RestDataSource } from '../model/rest.datasource';
import { NgForm } from '@angular/forms';

@Component ({
    selector: 'reports',
    templateUrl: 'reports.component.html'
})
export class ReportsComponent {
    private selectedDepartment = null;
    public dateSelected: Date;


    constructor(private repository: StaffRepository,
                private datasource: RestDataSource) {}
 
    get staffs(): Staff[] {
        return this.repository.getStaffs(this.selectedDepartment);
    }
    get departments(): string[] {
        return this.repository.getDepartments();
    } 

    changeDepartment(newDepartment?: string) {
        this.selectedDepartment = newDepartment;
    }

displayTimeIn() {
    axios.get('api',  )
}
displayTimeOut() {
    axios.get('api',  )
}

pickDate(form: NgForm) {
    if (form.valid) {
    return this.datasource.sendDate(this.dateSelected)
    }
}
    
    
} 
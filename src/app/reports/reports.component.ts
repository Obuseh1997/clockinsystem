import { Component } from "@angular/core";
import { Staff} from "../model/staff.model";
import { StaffRepository } from "../model/staff.repository";
import axios from "axios";

@Component ({
    selector: 'reports',
    templateUrl: 'reports.component.html'
})
export class ReportsComponent {
    private selectedDepartment = null;

    constructor(private repository: StaffRepository) {}
 
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
    
    
}
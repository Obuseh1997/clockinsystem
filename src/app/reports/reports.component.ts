import { Injectable } from "@angular/core";
import { Staff} from "../model/staff.model";
import { StaffRepository } from "../model/staff.repository"

@Injectable()
export class ReportsComponent {
    private selectedDepartment = null;

    constructor(private repository: StaffRepository) {}

    get staffs(): Staff[] {
        return this.repository.getStaffs(this.selectedDepartment);
    }
    get departments(): string[] {
        return this.repository.getDepartments();
    } 
}
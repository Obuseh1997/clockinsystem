import { Component } from "@angular/core";
import { Staff } from "../model/staff.model";
import { StaffRepository } from "../model/staff.repository";
@Component({
    templateUrl: "staffTable.component.html"
})
export class StaffTableComponent {
   public selectedDepartment: null;

    constructor(private repository: StaffRepository) {
       
     }

    get staffs(): Staff[] {
        return this.repository.getStaffs(this.selectedDepartment);
    }

    deleteStaff(id: number) {
        
        this.repository.deleteStaff(id);
    }
}
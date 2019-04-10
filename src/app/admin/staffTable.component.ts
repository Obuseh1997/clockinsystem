import { Component } from "@angular/core";
import { Staff } from "../model/staff.model";
import { AdminRepository } from "../model/admin.repository";
@Component({
    templateUrl: "staffTable.component.html"
})
export class StaffTableComponent {
   public selectedDepartment: null;

    constructor(private repository: AdminRepository) {
       
     }

    get staffs(): Staff[] {
        return this.repository.getStaffs(this.selectedDepartment);
    }

    deleteStaff(id: number) {
        
        this.repository.deleteStaff(id);
    }
}
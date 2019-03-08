import { Component } from "@angular/core";
import { Staff } from "../model/staff.model";
import { StaffRepository } from "../model/staff.repository";
@Component({
    templateUrl: "staffTable.component.html"
})
export class StaffTableComponent {

    constructor(private repository: StaffRepository) { }

    getStaffs(): Staff[] {
        return this.repository.getStaffs();
    }

    deleteStaff(id: number) {
        
        this.repository.deleteStaff(id);
    }
}
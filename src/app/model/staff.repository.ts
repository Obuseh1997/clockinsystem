import { Injectable } from "@angular/core";
import { Staff } from "./staff.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class StaffRepository {
    private staffs: Staff[] = [];
    private departments: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getStaff().subscribe(data => {
            this.staffs = data;
            this.departments = data.map(p => p.department)
                .filter((c, index, array) => array.indexOf(c) == index). sort();
        });
    }

    getStaffs(department: string = null): Staff[] {
        return this.staffs
             .filter(p => department == null || department == p.department )
    }

    getStaff(id: number): Staff {
        return this.staffs.find(p => p.id == id);
    }
    
    getDepartments(): string[] {
        return this.departments;
    }
}

import { Injectable } from "@angular/core";
import { Staff } from "./staff.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";


@Injectable()
export class AdminRepository {
    private staffs: Staff[] = [];
    private departments: string[] = [];
    

    constructor(private dataSource: RestDataSource) {
        dataSource.getStaffInfo().subscribe(data => {
            this.staffs = data;
            this.departments = data.map(p => p.department_name)
                .filter((c, index, array) => array.indexOf(c) == index). sort();
        });
    }

    getStaffs(department: string = null): Staff[] {
        return this.staffs
             .filter(p => department == null || department == p.department_name);
    }

    getStaff(id: number): Staff {
        return this.staffs.find(p => p.id == id);[]
    }
    
    getDepartments(): string[] {
        return this.departments;
    }
    saveStaff(staff: Staff) {
        if (staff.id == null || staff.id == 0) {
            this.dataSource.saveStaff(staff)
                .subscribe(p => this.staffs.push(p));
        } else {
            this.dataSource.updateStaff(staff)
                .subscribe(p => {
                    this.staffs.splice(this.staffs.
                         findIndex(p => p.id == staff.id), 1, staff);
                });
        }
    }

    deleteStaff(id: number) {
        this.dataSource.deleteStaff(id).subscribe(p => {
            this.staffs.splice(this.staffs.
                findIndex(p => p.id == id), 1);
                
      

        })
          
       
    }
}

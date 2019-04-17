import { Injectable } from "@angular/core";
import { Staff } from "./staff.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";


@Injectable()
export class ReportRepository {
    private staffs: Staff[] = [];
    private departments: string[] = [];
    private absentees: Staff[] = [];
    private staff: Staff[] = [];
    

    constructor(private dataSource: RestDataSource) {
        dataSource.getDailyReports().subscribe(data => {
            this.staffs = data;
            dataSource.getAbsentees().subscribe(data => {
            this.absentees = data;
        });
        dataSource.getIndividualReport().subscribe(data => {
            this.staff = data;
        });
            dataSource.getDepartment().subscribe(data => {
                this.departments = data.map(user => user.department_name)
                    .filter((deptName, index, array) => array.indexOf(deptName) == index).sort();
            })
        });
    }

    getStaffs(department: string = null): Staff[] {
        return this.staffs
             .filter(p => department == null || department == p.department_name);
    }

    getAbsentees(department: string = null): Staff[] {
        return this.absentees
             .filter(p => department == null || department == p.department_name);
    }

    getStaff(id: number): Staff {
        return this.staff.find(p => p.id == id);[]
    }
    
    getDepartments(): string[] {
        return this.departments;
    }
    

   
}

import { Component } from "@angular/core";
import { Staff} from "../model/staff.model";
import { ReportRepository } from "../model/report.repository";
import axios from "axios";
import { RestDataSource } from '../model/rest.datasource';
import { NgForm } from '@angular/forms';

@Component ({
    templateUrl: 'absentees.component.html'
})
export class AbsentComponent {
    private selectedDepartment = null;
    public dateSelected: string;


    constructor(private repository: ReportRepository,
                private datasource: RestDataSource) {}
 
    get staffs(): Staff[] {
        return this.repository.getStaffs(this.selectedDepartment);
    }

    get absentees(): Staff[] {
        return this.repository.getAbsentees(this.selectedDepartment);
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
    return this.datasource.passDate(this.dateSelected,response =>{
        if (response.success) {
            console.log("date sent");
        }
        else {
            console.log("no date sent");
        }
    });
}
    
    
} 
import { Component } from "@angular/core";
import { Staff } from "../model/staff.model";
import { StaffRepository } from "../model/staff.repository";
import { Router } from "@angular/router";




 
@Component({
    selector: "dashboard",
    templateUrl: "dashboard.component.html"
})
export class DashboardComponent {
    public selectedDepartment = null;
    public currentTimeIn = null;
    public currentTimeOut = null;
    public chosenStaff = null;
    public admin = null;
    public flagOne = true;
    public flagTwo = true;
   

    

    constructor(private repository: StaffRepository,
        private router: Router) { }

    
        showTime(staff){
            staff.time = new Date();
            this.flagOne = false;
            this.flagTwo = true;
        }
            
         
         displayTime(staff){
            
            staff.times = new Date();
            this.flagTwo = false;
            this.flagOne = true;
        }

    get staffs(): Staff[] {
        return this.repository.getStaffs(this.selectedDepartment);
    }
    get departments(): string[] {
        return this.repository.getDepartments();
    } 
    

    changeDepartment(newDepartment?: string) {
        this.selectedDepartment = newDepartment;
    }

   
    
    goToAdmin() {
        this.admin();
        this.router.navigateByUrl("/admin");
    }

   
}
    
    

    



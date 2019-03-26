import { Component } from "@angular/core";
import { Staff } from "../model/staff.model";
import { StaffRepository } from "../model/staff.repository";
import { Router } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";
 


 
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
    
   

    

    constructor(private repository: StaffRepository,
        private datasource: RestDataSource,
        private router: Router) { }

       
    
        timeIn(staff){
              
        
            console.log("Hello World");
            staff.time_in = new Date();
            staff.action = true;
            return this.datasource.signIn(staff.firstname);
            
        }

       
            
         
        timeOut(staff){
            
            staff.time_out = new Date();
            staff.actions = true;
            staff.action = false;
            console.log("Hello Time Out :" + staff.time_out);
            return this.datasource.signOut(staff.firstname);

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
    
    

    



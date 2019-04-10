import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Staff } from "../model/staff.model";
import { AdminRepository } from "../model/admin.repository";

@Component({
    templateUrl: "staffEditor.component.html"
})
export class StaffEditorComponent {
    editing: boolean = false;
    staff: Staff = new Staff();
    public selectedDepartment = null;
    public errorMessage: string;

    constructor(private repository: AdminRepository,
                private router: Router,
                activeRoute: ActivatedRoute) {
        
            this.editing = activeRoute.snapshot.params["mode"] == "edit";
            if (this.editing) {
                Object.assign(this.staff,
                    repository.getStaff(activeRoute.snapshot.params["id"]));

            }
                }

                saveEmployee(form: NgForm) {
                     
                        this.repository.saveStaff(this.staff);
                         this.router.navigateByUrl("/admin/main/staffs");
                    
                    
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
                
           
}
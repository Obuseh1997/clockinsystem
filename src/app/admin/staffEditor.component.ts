import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Staff } from "../model/staff.model";
import { StaffRepository } from "../model/staff.repository";

@Component({
    templateUrl: "staffEditor.component.html"
})
export class StaffEditorComponent {
    editing: boolean = false;
    staff: Staff = new Staff();

    constructor(private repository: StaffRepository,
                private router: Router,
                activeRoute: ActivatedRoute) {
        
            this.editing = activeRoute.snapshot.params["mode"] == "edit";
            if (this.editing) {
                Object.assign(this.staff,
                    repository.getStaff(activeRoute.snapshot.params["id"]));

            }

                }
            save(form: NgForm) {
                this.repository.saveStaff(this.staff);
                this.router.navigateByUrl("/admin/main/staffs");
            }
}
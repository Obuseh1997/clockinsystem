import { Injectable } from "@angular/core";
import { Staff } from "./staff.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
private staff: Staff[] = [
  new Staff(1, "Staff 1", "Department 1", "Staff 1 (Department 1)"),
  new Staff(2, "Staff 2", "Department 1", "Staff 2 (Department 1)"),
  new Staff(3, "Staff 3", "Department 2", "Staff 3 (Department 2)"),
  new Staff(4, "Staff 4", "Department 2", "Staff 4 (Department 1)"),
  new Staff(5, "Staff 5", "Department 3", "Staff 5 (Department 1)"),
];
getStaff(): Observable<Staff[]> {
    return from([this.staff]);
    }
    }

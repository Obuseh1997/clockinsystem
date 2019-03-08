import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Staff } from "./staff.model";
import { map } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
baseUrl: string;
auth_token: string;

constructor(private http: HttpClient) {
this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
}

getStaffs(): Observable<Staff[]> {
return this.http.get<Staff[]>(this.baseUrl + "staff");
}
authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "login", {
    name: user, password: pass
    }).pipe(map(response => {
    this.auth_token = response.success ? response.token : null;
    return response.success;
    }));
    }

saveStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(this.baseUrl + "staffs",
       staff, this.getOptions());
}

updateStaff(staff): Observable<Staff> {
    return this.http.put<Staff>(`${this.baseUrl}staffs/${staff.id}`,
        staff, this.getOptions());
}

deleteStaff(id: number): Observable<Staff> { 
    return this.http.delete<Staff>(`${this.baseUrl}staffs/${id}`,
         this.getOptions());

}

private getOptions() {
    return {
        headers: new HttpHeaders({
            "Authorization": `Bearer ${this.auth_token}`
        })
    }
}

}
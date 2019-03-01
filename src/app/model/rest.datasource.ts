import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Staff } from "./staff.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
baseUrl: string;

constructor(private http: HttpClient) {
this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
}

getStaff(): Observable<Staff[]> {
return this.http.get<Staff[]>(this.baseUrl + "staff");
}

}